import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, Send, Image, Mic, MicOff, Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

type Msg = { role: "user" | "assistant"; content: string; imageUrl?: string };

const SUGGESTIONS = [
  "Quiero un anillo de compromiso",
  "¿Diamante natural o lab?",
  "¿Qué metal me recomiendas?",
  "Tengo un presupuesto acotado",
];

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/jewelry-assistant`;

const JewelryChat = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "assistant",
      content:
        "¡Hola! ✨ Soy tu asistente de **Gia Solari**. Puedo ayudarte a elegir el anillo perfecto, explicarte sobre metales y piedras, o guiarte en el proceso de cotización.\n\n¿En qué te puedo ayudar?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const streamChat = useCallback(
    async (allMessages: Msg[]) => {
      // Convert messages for API (strip imageUrl, add image content for multimodal)
      const apiMessages = allMessages.map((m) => {
        if (m.imageUrl && m.role === "user") {
          return {
            role: "user",
            content: [
              { type: "text", text: m.content || "¿Qué opinas de este estilo?" },
              { type: "image_url", image_url: { url: m.imageUrl } },
            ],
          };
        }
        return { role: m.role, content: m.content };
      });

      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: apiMessages }),
      });

      if (!resp.ok) {
        const err = await resp.json().catch(() => ({ error: "Error de conexión" }));
        throw new Error(err.error || "Error del servidor");
      }

      if (!resp.body) throw new Error("No stream body");

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let textBuffer = "";
      let assistantSoFar = "";
      let streamDone = false;

      while (!streamDone) {
        const { done, value } = await reader.read();
        if (done) break;
        textBuffer += decoder.decode(value, { stream: true });

        let newlineIndex: number;
        while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
          let line = textBuffer.slice(0, newlineIndex);
          textBuffer = textBuffer.slice(newlineIndex + 1);

          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (line.startsWith(":") || line.trim() === "") continue;
          if (!line.startsWith("data: ")) continue;

          const jsonStr = line.slice(6).trim();
          if (jsonStr === "[DONE]") {
            streamDone = true;
            break;
          }

          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) {
              assistantSoFar += content;
              const snapshot = assistantSoFar;
              setMessages((prev) => {
                const last = prev[prev.length - 1];
                if (last?.role === "assistant" && prev.length > allMessages.length) {
                  return prev.map((m, i) =>
                    i === prev.length - 1 ? { ...m, content: snapshot } : m
                  );
                }
                return [...prev, { role: "assistant", content: snapshot }];
              });
            }
          } catch {
            textBuffer = line + "\n" + textBuffer;
            break;
          }
        }
      }

      // flush remaining
      if (textBuffer.trim()) {
        for (let raw of textBuffer.split("\n")) {
          if (!raw) continue;
          if (raw.endsWith("\r")) raw = raw.slice(0, -1);
          if (raw.startsWith(":") || raw.trim() === "") continue;
          if (!raw.startsWith("data: ")) continue;
          const jsonStr = raw.slice(6).trim();
          if (jsonStr === "[DONE]") continue;
          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) {
              assistantSoFar += content;
              const snapshot = assistantSoFar;
              setMessages((prev) => {
                const last = prev[prev.length - 1];
                if (last?.role === "assistant") {
                  return prev.map((m, i) =>
                    i === prev.length - 1 ? { ...m, content: snapshot } : m
                  );
                }
                return [...prev, { role: "assistant", content: snapshot }];
              });
            }
          } catch {
            /* ignore */
          }
        }
      }
    },
    []
  );

  const sendMessage = async (text: string, imageUrl?: string) => {
    if (!text.trim() && !imageUrl) return;
    const userMsg: Msg = { role: "user", content: text.trim(), imageUrl };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      await streamChat(newMessages);
    } catch (e: any) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `Lo siento, hubo un error: ${e.message}. Puedes contactarme directamente por [WhatsApp](${buildWhatsAppUrl("generico")}).`,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result as string;
      sendMessage("Mira esta imagen de referencia, ¿qué opinas?", base64);
    };
    reader.readAsDataURL(file);
    e.target.value = "";
  };

  const toggleSpeech = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
      return;
    }

    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Tu navegador no soporta reconocimiento de voz.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "es-CL";
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInput((prev) => prev + transcript);
      setIsListening(false);
    };
    recognition.onerror = () => setIsListening(false);
    recognition.onend = () => setIsListening(false);
    recognitionRef.current = recognition;
    recognition.start();
    setIsListening(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  // Handle internal navigation links
  const handleLinkClick = (href: string) => {
    if (href.startsWith("#")) {
      setOpen(false);
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  return (
    <>
      {/* Floating button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
            aria-label="Abrir asistente virtual"
          >
            <Sparkles size={24} className="text-primary-foreground" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-4 left-4 z-50 w-[360px] max-w-[calc(100vw-2rem)] h-[520px] max-h-[calc(100vh-2rem)] bg-background border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary px-4 py-3 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <Sparkles size={18} className="text-primary-foreground" />
                <div>
                  <p className="text-primary-foreground font-display text-sm font-semibold">
                    Asistente Gia Solari
                  </p>
                  <p className="text-primary-foreground/70 text-[10px]">
                    Experta en joyas a tu servicio
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-sm"
                        : "bg-muted text-foreground rounded-bl-sm"
                    }`}
                  >
                    {msg.imageUrl && (
                      <img
                        src={msg.imageUrl}
                        alt="Referencia"
                        className="w-full max-w-[200px] rounded-lg mb-2"
                      />
                    )}
                    <div className="prose prose-sm max-w-none [&_p]:m-0 [&_a]:text-primary [&_a]:underline [&_strong]:font-semibold">
                      <ReactMarkdown
                        components={{
                          a: ({ href, children, ...props }) => {
                            if (href?.startsWith("#")) {
                              return (
                                <button
                                  onClick={() => handleLinkClick(href)}
                                  className="text-primary underline hover:text-primary/80 font-medium"
                                >
                                  {children}
                                </button>
                              );
                            }
                            return (
                              <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary underline"
                                {...props}
                              >
                                {children}
                              </a>
                            );
                          },
                        }}
                      >
                        {msg.content}
                      </ReactMarkdown>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && messages[messages.length - 1]?.role === "user" && (
                <div className="flex justify-start">
                  <div className="bg-muted rounded-2xl rounded-bl-sm px-4 py-3">
                    <Loader2 size={16} className="animate-spin text-muted-foreground" />
                  </div>
                </div>
              )}
            </div>

            {/* Suggestions (only when few messages) */}
            {messages.length <= 2 && !isLoading && (
              <div className="px-4 pb-2 flex flex-wrap gap-1.5 shrink-0">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => sendMessage(s)}
                    className="text-xs px-3 py-1.5 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input area */}
            <div className="border-t border-border p-3 flex items-center gap-2 shrink-0">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="text-muted-foreground hover:text-primary transition-colors shrink-0"
                title="Enviar foto de referencia"
              >
                <Image size={18} />
              </button>
              <button
                onClick={toggleSpeech}
                className={`shrink-0 transition-colors ${
                  isListening ? "text-red-500 animate-pulse" : "text-muted-foreground hover:text-primary"
                }`}
                title={isListening ? "Detener grabación" : "Enviar mensaje de voz"}
              >
                {isListening ? <MicOff size={18} /> : <Mic size={18} />}
              </button>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Escribe tu consulta..."
                className="flex-1 bg-muted rounded-full px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none"
                disabled={isLoading}
              />
              <button
                onClick={() => sendMessage(input)}
                disabled={isLoading || !input.trim()}
                className="text-primary hover:text-primary/80 transition-colors disabled:opacity-30 shrink-0"
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default JewelryChat;
