import { useState, useEffect, useMemo, useCallback } from "react";
import {
  METALS,
  PIECE_TYPES,
  calculateQuote,
  calculateAtMargin,
  formatCLP,
  accentCostPerStone,
  type QuoteInput,
  type QuoteResult,
  type AccentStone,
  type PieceType,
} from "@/lib/pricingEngine";
import { Plus, Trash2, Calculator, RotateCcw } from "lucide-react";

const LS_KEY = "gs-draft-cotizacion";

const MARGIN_TABLE = [0.30, 0.40, 0.45, 0.50, 0.55, 0.60, 0.65];

function newAccent(): AccentStone {
  return { id: crypto.randomUUID(), type: "lab", quantity: 1, points: 10, manualCost: 0 };
}

const defaultInput: QuoteInput = {
  pieceName: "",
  pieceType: "Anillo de compromiso",
  metalIndex: 1,
  pricePerGram: METALS[1].pricePerGram,
  wastePct: METALS[1].wastePct,
  grams: 0,
  labor: 350_000,
  centralStone: { enabled: false, type: "lab", carats: 0, color: "", cost: 0 },
  accents: [],
  advancedEngraving: false,
  clientDidEngagement: false,
  others: 50_000,
  packaging: 50_000,
  marginPct: 0.60,
};

function loadDraft(): QuoteInput {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) return { ...defaultInput, ...JSON.parse(raw) };
  } catch { /* ignore */ }
  return { ...defaultInput };
}

function Label({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <label className="block mb-1">
      <span className="text-xs font-semibold tracking-wide uppercase text-[#1A1614]">{children}</span>
      {sub && <span className="block text-[10px] text-[#B8995A] mt-0.5">{sub}</span>}
    </label>
  );
}

function Field({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mb-4 ${className}`}>{children}</div>;
}

const inputCls =
  "w-full px-3 py-2 text-sm border border-[#D4C5A9] rounded bg-white text-[#1A1614] focus:ring-2 focus:ring-[#B8995A]/40 focus:border-[#B8995A] outline-none transition-all font-[Montserrat]";

const selectCls = inputCls;

const CotizadorInterno = () => {
  const [input, setInput] = useState<QuoteInput>(loadDraft);
  const [result, setResult] = useState<QuoteResult | null>(null);
  const [laborWarning, setLaborWarning] = useState("");

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(input));
  }, [input]);

  const update = useCallback((partial: Partial<QuoteInput>) => {
    setInput(prev => ({ ...prev, ...partial }));
  }, []);

  const updateCentral = useCallback((partial: Partial<QuoteInput["centralStone"]>) => {
    setInput(prev => ({ ...prev, centralStone: { ...prev.centralStone, ...partial } }));
  }, []);

  const handleMetalChange = (idx: number) => {
    const m = METALS[idx];
    update({ metalIndex: idx, pricePerGram: m.pricePerGram, wastePct: m.wastePct });
  };

  const handlePieceTypeChange = (t: PieceType) => {
    const isArgolla = t === "Argolla";
    update({
      pieceType: t,
      labor: isArgolla ? 150_000 : Math.max(input.labor, 350_000),
      advancedEngraving: isArgolla ? input.advancedEngraving : false,
      clientDidEngagement: isArgolla ? input.clientDidEngagement : false,
    });
  };

  const addAccent = () => update({ accents: [...input.accents, newAccent()] });
  const removeAccent = (id: string) => update({ accents: input.accents.filter(a => a.id !== id) });
  const updateAccent = (id: string, partial: Partial<AccentStone>) => {
    update({ accents: input.accents.map(a => a.id === id ? { ...a, ...partial } : a) });
  };

  const laborMin = input.pieceType === "Argolla" ? 150_000 : 350_000;

  useEffect(() => {
    if (input.labor < laborMin) {
      setLaborWarning(
        input.pieceType === "Argolla"
          ? "La hechura mínima del par de argollas es $150.000"
          : "La hechura mínima es $350.000"
      );
    } else {
      setLaborWarning("");
    }
  }, [input.labor, laborMin, input.pieceType]);

  const canCalc = input.grams > 0 && input.labor >= laborMin;

  const handleCalc = () => {
    if (!canCalc) return;
    setResult(calculateQuote(input));
  };

  const handleReset = () => {
    setInput({ ...defaultInput });
    setResult(null);
    localStorage.removeItem(LS_KEY);
  };

  const marginRows = useMemo(() => {
    if (!result) return [];
    return MARGIN_TABLE.map(m => ({
      margin: m,
      price: calculateAtMargin(result.costoTotal, m),
      isSelected: Math.abs(m - input.marginPct) < 0.001,
    }));
  }, [result, input.marginPct]);

  return (
    <div className="min-h-screen bg-[#FDFAF6] font-[Montserrat] text-[#1A1614]">
      <header className="border-b border-[#D4C5A9] bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="font-[Cormorant_Garamond] text-lg md:text-xl uppercase tracking-[0.35em] text-[#B8995A]">
            Cotizador Interno
          </h1>
          <button onClick={handleReset} className="text-xs flex items-center gap-1 text-[#B8995A] hover:text-[#1A1614] transition-colors">
            <RotateCcw size={14} /> Limpiar
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2 space-y-1">
            <h2 className="font-[Cormorant_Garamond] text-base uppercase tracking-[0.3em] text-[#B8995A] mb-4">Datos de la pieza</h2>

            <Field>
              <Label>Nombre de la pieza</Label>
              <input type="text" value={input.pieceName} onChange={e => update({ pieceName: e.target.value })}
                placeholder="Ej: Anillo Compromiso Solitario" className={inputCls} />
            </Field>

            <Field>
              <Label>Tipo de pieza</Label>
              <select value={input.pieceType} onChange={e => handlePieceTypeChange(e.target.value as PieceType)} className={selectCls}>
                {PIECE_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </Field>

            {input.pieceType === "Argolla" && (
              <div className="bg-[#F5F0E8] rounded-lg p-4 space-y-3 mb-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#B8995A]">Opciones de argolla (par)</p>
                <label className="flex items-start gap-2 text-sm cursor-pointer">
                  <input type="checkbox" checked={input.advancedEngraving}
                    onChange={e => update({ advancedEngraving: e.target.checked })}
                    className="mt-0.5 accent-[#B8995A]" />
                  <span>Grabado avanzado (+$150.000) — <em className="text-[10px] text-[#B8995A]">NO marcar si solo son nombres/iniciales</em></span>
                </label>
                <label className="flex items-start gap-2 text-sm cursor-pointer">
                  <input type="checkbox" checked={input.clientDidEngagement}
                    onChange={e => update({ clientDidEngagement: e.target.checked })}
                    className="mt-0.5 accent-[#B8995A]" />
                  <span>Cliente hizo el anillo de compromiso con Gia (−20%)</span>
                </label>
              </div>
            )}

            <div className="grid grid-cols-2 gap-3">
              <Field>
                <Label>Metal</Label>
                <select value={input.metalIndex} onChange={e => handleMetalChange(Number(e.target.value))} className={selectCls}>
                  {METALS.map((m, i) => <option key={m.label} value={i}>{m.label}</option>)}
                </select>
              </Field>
              <Field>
                <Label>Gramos</Label>
                <input type="number" step="0.01" min="0" value={input.grams || ""}
                  onChange={e => update({ grams: parseFloat(e.target.value) || 0 })} className={inputCls} placeholder="Ej: 7.5" />
              </Field>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Field>
                <Label sub="Editable">Precio/g (CLP)</Label>
                <input type="number" value={input.pricePerGram}
                  onChange={e => update({ pricePerGram: Number(e.target.value) || 0 })} className={inputCls} />
              </Field>
              <Field>
                <Label sub="Editable">Merma %</Label>
                <input type="number" step="1" min="0" max="100"
                  value={Math.round(input.wastePct * 100)}
                  onChange={e => update({ wastePct: (Number(e.target.value) || 0) / 100 })} className={inputCls} />
              </Field>
            </div>

            <Field>
              <Label sub={input.pieceType === "Argolla" ? "Mínimo $150.000 (par)" : "Mínimo $350.000"}>
                Mano de obra / Hechura
              </Label>
              <input type="number" step="1000" value={input.labor}
                onChange={e => update({ labor: Number(e.target.value) || 0 })} className={inputCls} />
              {laborWarning && (
                <p className="text-xs text-red-600 mt-1 font-medium">{laborWarning}</p>
              )}
            </Field>

            <div className="border border-[#D4C5A9] rounded-lg p-4 mb-4">
              <label className="flex items-center gap-2 mb-3 cursor-pointer">
                <input type="checkbox" checked={input.centralStone.enabled}
                  onChange={e => updateCentral({ enabled: e.target.checked })}
                  className="accent-[#B8995A]" />
                <span className="text-xs font-semibold uppercase tracking-wide text-[#B8995A]">Piedra central</span>
              </label>
              {input.centralStone.enabled && (
                <div className="grid grid-cols-2 gap-3">
                  <Field>
                    <Label>Tipo</Label>
                    <select value={input.centralStone.type} onChange={e => updateCentral({ type: e.target.value as "lab" | "natural" })} className={selectCls}>
                      <option value="lab">Lab</option>
                      <option value="natural">Natural</option>
                    </select>
                  </Field>
                  <Field>
                    <Label>Quilates</Label>
                    <input type="number" step="0.01" value={input.centralStone.carats || ""}
                      onChange={e => updateCentral({ carats: parseFloat(e.target.value) || 0 })} className={inputCls} />
                  </Field>
                  <Field>
                    <Label>Color</Label>
                    <input type="text" value={input.centralStone.color}
                      onChange={e => updateCentral({ color: e.target.value })} className={inputCls} placeholder="Ej: D, E, F" />
                  </Field>
                  <Field>
                    <Label>Costo (CLP)</Label>
                    <input type="number" value={input.centralStone.cost || ""}
                      onChange={e => updateCentral({ cost: Number(e.target.value) || 0 })} className={inputCls} />
                  </Field>
                </div>
              )}
            </div>

            <div className="border border-[#D4C5A9] rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-wide text-[#B8995A]">Piedras de acento</span>
                <button onClick={addAccent} className="text-xs flex items-center gap-1 text-[#B8995A] hover:text-[#1A1614] transition-colors">
                  <Plus size={14} /> Agregar
                </button>
              </div>
              {input.accents.length === 0 && <p className="text-xs text-[#B8995A]/60">Sin piedras de acento</p>}
              {input.accents.map(a => {
                const auto = accentCostPerStone(a.type, a.points);
                return (
                  <div key={a.id} className="grid grid-cols-[1fr_1fr_1fr_auto] gap-2 mb-2 items-end">
                    <Field className="!mb-0">
                      <Label>Tipo</Label>
                      <select value={a.type} onChange={e => updateAccent(a.id, { type: e.target.value as "lab" | "natural" })} className={selectCls}>
                        <option value="lab">Lab</option>
                        <option value="natural">Natural</option>
                      </select>
                    </Field>
                    <Field className="!mb-0">
                      <Label>Cant.</Label>
                      <input type="number" min="1" value={a.quantity}
                        onChange={e => updateAccent(a.id, { quantity: Number(e.target.value) || 1 })} className={inputCls} />
                    </Field>
                    <Field className="!mb-0">
                      <Label>Puntos</Label>
                      <input type="number" min="1" value={a.points}
                        onChange={e => updateAccent(a.id, { points: Number(e.target.value) || 1 })} className={inputCls} />
                    </Field>
                    <button onClick={() => removeAccent(a.id)} className="pb-0.5 text-red-400 hover:text-red-600">
                      <Trash2 size={16} />
                    </button>
                    {auto === null && (
                      <div className="col-span-4">
                        <Label sub="> 20 puntos: ingrese costo manual total">Costo manual (CLP)</Label>
                        <input type="number" value={a.manualCost || ""}
                          onChange={e => updateAccent(a.id, { manualCost: Number(e.target.value) || 0 })} className={inputCls} />
                      </div>
                    )}
                    {auto !== null && (
                      <p className="col-span-4 text-[10px] text-[#B8995A]">
                        {a.quantity} × {formatCLP(auto)} = {formatCLP(auto * a.quantity)}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Field>
                <Label sub="Default $50.000">Otros (CLP)</Label>
                <input type="number" value={input.others}
                  onChange={e => update({ others: Number(e.target.value) || 0 })} className={inputCls} />
              </Field>
              <Field>
                <Label sub="Default $50.000">Empaque (CLP)</Label>
                <input type="number" value={input.packaging}
                  onChange={e => update({ packaging: Number(e.target.value) || 0 })} className={inputCls} />
              </Field>
            </div>

            <Field>
              <Label>Margen: {Math.round(input.marginPct * 100)}%</Label>
              <input type="range" min="30" max="70" step="1"
                value={Math.round(input.marginPct * 100)}
                onChange={e => update({ marginPct: Number(e.target.value) / 100 })}
                className="w-full accent-[#B8995A] h-2 mt-1" />
              <div className="flex justify-between text-[10px] text-[#B8995A] mt-1">
                <span>30%</span><span>50%</span><span>70%</span>
              </div>
            </Field>

            <button onClick={handleCalc} disabled={!canCalc}
              className="w-full py-3 bg-[#B8995A] text-white font-semibold uppercase tracking-[0.2em] text-sm rounded hover:bg-[#a38647] transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2">
              <Calculator size={16} /> Calcular
            </button>
          </div>

          <div className="lg:w-1/2">
            {!result ? (
              <div className="flex items-center justify-center h-64 text-[#D4C5A9] text-sm italic">
                Completa el formulario y presiona Calcular
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <h2 className="font-[Cormorant_Garamond] text-base uppercase tracking-[0.3em] text-[#B8995A] mb-3">Desglose interno</h2>
                  <div className="border border-[#D4C5A9] rounded-lg overflow-hidden text-sm">
                    {[
                      { label: `Metal (${input.grams}g × ${1 + input.wastePct} × ${formatCLP(input.pricePerGram)})`, value: result.costoMetal },
                      { label: "Mano de obra", value: result.costoLabor },
                      ...(result.costoCentral > 0 ? [{ label: "Piedra central", value: result.costoCentral }] : []),
                      ...(result.costoAcentos > 0 ? [{ label: "Piedras acento", value: result.costoAcentos }] : []),
                      { label: `Engaste (${result.nPiedras} × $5.000)`, value: result.costoEngaste },
                      ...(result.grabadoAvanzado > 0 ? [{ label: "Grabado avanzado", value: result.grabadoAvanzado }] : []),
                      { label: "Otros", value: result.costoOtros },
                      { label: "Empaque", value: result.costoEmpaque },
                    ].map((row, i) => (
                      <div key={row.label} className={`flex justify-between px-4 py-2 ${i % 2 === 1 ? "bg-[#F5F0E8]" : "bg-white"}`}>
                        <span>{row.label}</span>
                        <span className="font-medium">{formatCLP(row.value)}</span>
                      </div>
                    ))}
                    <div className="flex justify-between px-4 py-3 bg-[#1A1614] text-white font-bold">
                      <span>Costo total</span>
                      <span>{formatCLP(result.costoTotal)}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="font-[Cormorant_Garamond] text-base uppercase tracking-[0.3em] text-[#B8995A] mb-3">Precio al cliente</h2>
                  <div className="bg-[#1A1614] text-white rounded-lg p-6 text-center">
                    {result.descuentoArgolla > 0 && (
                      <>
                        <p className="text-xs text-[#D4C5A9] mb-1">Precio base (margen {Math.round(input.marginPct * 100)}%)</p>
                        <p className="text-lg font-medium line-through text-[#D4C5A9]/60 mb-1">{formatCLP(result.precioBase)}</p>
                        <p className="text-xs text-green-400 mb-2">Descuento argolla −20%: −{formatCLP(result.descuentoArgolla)}</p>
                      </>
                    )}
                    <p className="font-[Cormorant_Garamond] text-4xl md:text-5xl font-bold text-[#B8995A] mb-4">
                      {formatCLP(result.precioCliente)}
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-white/10 rounded p-3">
                        <p className="text-[#D4C5A9] text-xs mb-1">Adelanto 70%</p>
                        <p className="font-bold text-lg">{formatCLP(result.adelanto70)}</p>
                      </div>
                      <div className="bg-white/10 rounded p-3">
                        <p className="text-[#D4C5A9] text-xs mb-1">Saldo 30%</p>
                        <p className="font-bold text-lg">{formatCLP(result.saldo30)}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="font-[Cormorant_Garamond] text-base uppercase tracking-[0.3em] text-[#B8995A] mb-3">Precio "desde" web</h2>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="border border-[#D4C5A9] rounded-lg p-4 text-center">
                      <p className="text-xs text-[#B8995A] mb-1">Desde (50k)</p>
                      <p className="text-xl font-bold">{formatCLP(result.desde50k)}</p>
                    </div>
                    <div className="border border-[#D4C5A9] rounded-lg p-4 text-center">
                      <p className="text-xs text-[#B8995A] mb-1">Desde (100k)</p>
                      <p className="text-xl font-bold">{formatCLP(result.desde100k)}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="font-[Cormorant_Garamond] text-base uppercase tracking-[0.3em] text-[#B8995A] mb-3">Simulador de márgenes</h2>
                  <div className="border border-[#D4C5A9] rounded-lg overflow-hidden text-sm">
                    <div className="grid grid-cols-2 px-4 py-2 bg-[#1A1614] text-white text-xs font-semibold uppercase tracking-wider">
                      <span>Margen</span>
                      <span className="text-right">Precio cliente</span>
                    </div>
                    {marginRows.map(r => (
                      <div key={r.margin}
                        className={`grid grid-cols-2 px-4 py-2 ${r.isSelected ? "bg-[#B8995A] text-white font-bold" : "bg-white even:bg-[#F5F0E8]"}`}>
                        <span>{Math.round(r.margin * 100)}%</span>
                        <span className="text-right">{formatCLP(r.price)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CotizadorInterno;
