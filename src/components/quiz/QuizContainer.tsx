import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, SkipForward, CheckCircle } from "lucide-react";
import QuizProgress from "./QuizProgress";
import WelcomeStep from "./steps/WelcomeStep";
import RelationshipStep from "./steps/RelationshipStep";
import PersonalityStep from "./steps/PersonalityStep";
import StyleExploreStep from "./steps/StyleExploreStep";
import StonePreferenceStep from "./steps/StonePreferenceStep";
import MetalStep from "./steps/MetalStep";
import BudgetTimelineStep from "./steps/BudgetTimelineStep";
import InspirationStep from "./steps/InspirationStep";
import ResultView from "./ResultView";
import LeadCaptureStep from "./LeadCaptureStep";
import { generateRecommendations } from "./engine/scoringEngine";
import type { QuizAnswers, Recommendation, StepProps } from "./types";
import { INITIAL_ANSWERS, QUIZ_STEPS } from "./types";

const QuizContainer = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({ ...INITIAL_ANSWERS });
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [selectedRec, setSelectedRec] = useState<Recommendation | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const updateAnswers = (partial: Partial<QuizAnswers>) => {
    setAnswers(prev => ({ ...prev, ...partial }));
  };

  const next = () => {
    if (step === 7) {
      // Moving from last quiz step → generate recommendations
      const recs = generateRecommendations(answers);
      setRecommendations(recs);
      setStep(8);
    } else {
      setStep(s => Math.min(s + 1, QUIZ_STEPS.length - 1));
    }
  };

  const prev = () => setStep(s => Math.max(s - 1, 0));
  const skip = () => next();
  const goToStep = (s: number) => setStep(s);

  const goToLeadCapture = () => setStep(9);

  const stepProps: StepProps = {
    answers,
    onUpdate: updateAnswers,
    onNext: next,
    onSkip: skip,
  };

  const stepLabels = QUIZ_STEPS.map(s => s.label);
  const isQuizStep = step >= 1 && step <= 7;
  const isSkippable = isQuizStep;

  if (submitted) {
    return (
      <section id="cotizador" className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card border border-border rounded-lg p-10 md:p-16 text-center"
          >
            <CheckCircle size={48} className="text-primary mx-auto mb-6" />
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
              ¡Cotización recibida!
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-md mx-auto mb-2">
              Gracias. Recibí tu solicitud y te contacto personalmente en menos de 24 horas
              con una propuesta detallada.
            </p>
            <p className="text-muted-foreground text-sm">
              — Macarena González Solari
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="cotizador" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4">
            Cotizador
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground">
            Diseña tu <em className="text-primary not-italic">joya ideal</em>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Cuéntanos sobre ella y te recomendamos el anillo perfecto — o sáltate lo que no sepas.
          </p>
        </motion.div>

        <QuizProgress
          currentStep={step}
          totalSteps={QUIZ_STEPS.length}
          stepLabels={stepLabels}
          onStepClick={goToStep}
        />

        <div className="bg-card border border-border rounded-lg p-6 md:p-10 min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {step === 0 && <WelcomeStep {...stepProps} />}
              {step === 1 && <RelationshipStep {...stepProps} />}
              {step === 2 && <PersonalityStep {...stepProps} />}
              {step === 3 && <StyleExploreStep {...stepProps} />}
              {step === 4 && <StonePreferenceStep {...stepProps} />}
              {step === 5 && <MetalStep {...stepProps} />}
              {step === 6 && <BudgetTimelineStep {...stepProps} />}
              {step === 7 && <InspirationStep {...stepProps} />}
              {step === 8 && (
                <ResultView
                  recommendations={recommendations}
                  answers={answers}
                  onSelectRecommendation={setSelectedRec}
                  onRequestQuote={goToLeadCapture}
                />
              )}
              {step === 9 && (
                <LeadCaptureStep
                  answers={answers}
                  recommendation={selectedRec}
                  onSubmitted={() => setSubmitted(true)}
                />
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation — only for quiz steps 1–7 */}
          {isQuizStep && (
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
              <button
                onClick={prev}
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ChevronLeft size={16} /> Atrás
              </button>
              <div className="flex items-center gap-3">
                {isSkippable && (
                  <button
                    onClick={skip}
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <SkipForward size={14} /> Saltar
                  </button>
                )}
                <button
                  onClick={next}
                  className="flex items-center gap-1 bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  Siguiente <ChevronRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* Back button for result/lead steps */}
          {step === 8 && (
            <div className="mt-6 pt-4 border-t border-border">
              <button
                onClick={prev}
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ChevronLeft size={16} /> Volver a editar respuestas
              </button>
            </div>
          )}
          {step === 9 && (
            <div className="mt-6 pt-4 border-t border-border">
              <button
                onClick={() => setStep(8)}
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ChevronLeft size={16} /> Ver recomendaciones
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuizContainer;
