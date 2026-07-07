import { motion } from "framer-motion";
import { Star, ArrowRight, Sparkles, Shield } from "lucide-react";
import type { Recommendation, QuizAnswers } from "./types";
import { formatCLP } from "./engine/priceEstimator";
import { BUDGET_RANGES } from "./taxonomies";

interface ResultViewProps {
  recommendations: Recommendation[];
  answers: QuizAnswers;
  onSelectRecommendation: (rec: Recommendation) => void;
  onRequestQuote: () => void;
}

const ConfidenceBadge = ({ score }: { score: number }) => {
  const level = score >= 60 ? 'Alta' : score >= 30 ? 'Media' : 'Exploratoria';
  const color = score >= 60 ? 'text-green-600' : score >= 30 ? 'text-primary' : 'text-muted-foreground';
  return (
    <span className={`inline-flex items-center gap-1 text-xs font-medium ${color}`}>
      <Shield size={12} /> Confianza: {level} ({score}%)
    </span>
  );
};

const ResultView = ({ recommendations, answers, onSelectRecommendation, onRequestQuote }: ResultViewProps) => {
  const primary = recommendations[0];
  const alternatives = recommendations.slice(1);
  const partnerName = answers.partnerName || 'ella';
  const budget = BUDGET_RANGES.find(b => b.key === answers.budgetRange);
  const budgetBelowEstimate = budget ? budget.max < primary.estimatedPriceRange.min : false;

  return (
    <div>
      <div className="text-center mb-8">
        <motion.div animate={{ scale: 1, opacity: 1 }}>
          <Sparkles size={36} className="text-primary mx-auto mb-3" />
        </motion.div>
        <h3 className="font-display text-2xl md:text-3xl text-foreground mb-2">
          Tu recomendación para {partnerName}
        </h3>
        <p className="text-muted-foreground text-sm max-w-md mx-auto">
          Basándonos en lo que nos contaste, esto es lo que creemos que le encantará.
        </p>
      </div>

      {/* Primary recommendation */}
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-card border-2 border-primary/30 rounded-lg overflow-hidden mb-6"
      >
        {primary.matchingImage && (
          <div className="aspect-[16/9] overflow-hidden">
            <img
              src={primary.matchingImage}
              alt={`${primary.ringStyleLabel} con ${primary.stoneTypeLabel}`}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="p-6 md:p-8">
          <div className="flex items-center gap-2 mb-3">
            <Star size={18} className="text-primary fill-primary" />
            <span className="text-xs uppercase tracking-wider text-primary font-medium">Recomendación principal</span>
          </div>

          <h4 className="font-display text-xl text-foreground mb-2">
            {primary.ringStyleLabel} con {primary.stoneTypeLabel} {primary.stoneShapeLabel}
          </h4>
          <p className="text-sm text-muted-foreground mb-1">
            Metal: <span className="text-foreground">{primary.metalLabel}</span>
          </p>
          <p className="text-sm text-muted-foreground mb-4">
            {primary.explanation}
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-4">
            <div className="bg-muted rounded-lg px-4 py-2">
              <p className="text-xs text-muted-foreground">Rango estimado</p>
              <p className="text-sm font-medium text-foreground">
                {formatCLP(primary.estimatedPriceRange.min)} – {formatCLP(primary.estimatedPriceRange.max)}
              </p>
            </div>
            <ConfidenceBadge score={primary.confidenceScore} />
          </div>

          <button
            onClick={() => { onSelectRecommendation(primary); onRequestQuote(); }}
            className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
          >
            Solicitar cotización <ArrowRight size={16} />
          </button>
        </div>
      </motion.div>

      {/* Alternatives */}
      {alternatives.length > 0 && (
        <>
          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-3">Alternativas</p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {alternatives.map((alt, i) => (
              <motion.div
                key={alt.id}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="bg-card border border-border rounded-lg overflow-hidden"
              >
                {alt.matchingImage && (
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={alt.matchingImage}
                      alt={`${alt.ringStyleLabel} con ${alt.stoneTypeLabel}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-5">
                  <h5 className="font-display text-base text-foreground mb-1">
                    {alt.ringStyleLabel} con {alt.stoneTypeLabel} {alt.stoneShapeLabel}
                  </h5>
                  <p className="text-xs text-muted-foreground mb-1">Metal: {alt.metalLabel}</p>
                  <p className="text-xs text-muted-foreground mb-3">
                    {formatCLP(alt.estimatedPriceRange.min)} – {formatCLP(alt.estimatedPriceRange.max)}
                  </p>
                  <ConfidenceBadge score={alt.confidenceScore} />
                  <button
                    onClick={() => { onSelectRecommendation(alt); onRequestQuote(); }}
                    className="mt-3 w-full text-sm text-primary border border-primary/30 py-2 rounded-lg hover:bg-primary/5 transition-colors"
                  >
                    Cotizar esta opción
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </>
      )}

      <p className="text-xs text-center text-muted-foreground italic">
        * Los precios son estimaciones orientativas. La cotización final depende del diseño exacto.
      </p>
    </div>
  );
};

export default ResultView;
