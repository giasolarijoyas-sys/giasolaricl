import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, SkipForward, CheckCircle } from "lucide-react";
import QuizProgress from "./QuizProgress";
import WelcomeStep from "./steps/WelcomeStep";
import PersonalityStep from "./steps/PersonalityStep";
import StyleExploreStep from "./steps/StyleExploreStep";
import StoneMetalStep from "./steps/StoneMetalStep";
import BudgetTimelineStep from "./steps/BudgetTimelineStep";
import InspirationStep from "./steps/InspirationStep";
import ResultView from "./ResultView";
import LeadCaptureStep from "./LeadCaptureStep";
import { generateRecommendations } from "./engine/scoringEngine";
import type { QuizAnswers, Recommendation, StepProps, KnowledgeLevel } from "./types";
import { INITIAL_ANSWERS, STEPS_EXPERT, STEPS_INTERMEDIATE, STEPS_BEGINNER } from "./types";

function getStepsForLevel(level: KnowledgeLevel | '') {
  switch (level) {
    case 'expert': return STEPS_EXPERT;
    case 'intermediate': return STEPS_INTERMEDIATE;
    case 'beginner': return STEPS_BEGINNER;
    default: return STEPS_BEGINNER;
  }
}

const stepComponents: Record<string, React.FC<StepProps>> = {
  personality: PersonalityStep,
  style: StyleExploreStep,
  stone_metal: StoneMetalStep,
  budget: BudgetTimelineStep,
  inspiration: InspirationStep,
};

const stepLabelsMap: Record<string, string> = {
  welcome: 'Inicio',
  personality: 'Personalidad',
  style: 'Estilo',
  stone_metal: 'Piedra y Metal',
  budget: 'Presupuesto',
  inspiration: 'Inspiración',
  result: 'Resultado',
  lead: 'Contacto',
};

const QuizContainer = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({ ...INITIAL_ANSWERS });
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [selectedRec, setSelectedRec] = useState<Recommendation | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const steps = useMemo(() => getStepsForLevel(answers.knowledgeLevel), [answers.knowledgeLevel]);
  const currentStepKey = steps[stepIndex];

  const updateAnswers = (partial: Partial<QuizAnswers>) => {
    setAnswers(prev => ({ ...prev, ...partial }));
  };

  const isResultStep = currentStepKey === 'result';
  const isLeadStep = currentStepKey === 'lead';
  const isWelcomeStep = currentStepKey === 'welcome';
  const isQuizStep = !isResultStep && !isLeadStep && !isWelcomeStep;

  const lastQuizStepIndex = steps.indexOf('result') - 1;

  const next = () => {
    if (stepIndex === lastQuizStepIndex) {
      const recs = generateRecommendations(answers);
      setRecommendations(recs);
      setStepIndex(steps.indexOf('result'));
    } else {
      setStepIndex(s => Math.min(s + 1, steps.length - 1));
    }
  };

  const prev = () => setStepIndex(s => Math.max(s - 1, 0));
  const skip = () => next();
  const goToLeadCapture = () => setStepIndex(steps.indexOf('lead'));

  const stepProps: StepProps = {
    answers,
    onUpdate: updateAnswers,
    onNext: next,
    onSkip: skip,
  };

  const stepLabels = steps.map(s => stepLabelsMap[s] || s);

  if (submitted) {
    return (
      <section id="cotizador" className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card border border-border rounded-lg p-10 md:p-16 text-center"
          >
            <CheckCircle size={48} className="text-primary mx-auto mb-6" />
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
              ¡Cotización recibida!
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-md mx-auto mb-2">
              Gracias. Te contacto personalmente en menos de 24 horas con una propuesta detallada.
            </p>
            <p className="text-muted-foreground text-sm">
              — Macarena González Solari
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  const StepComponent = stepComponents[currentStepKey];

  return (
    <section id="cotizador" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <motion.div
          className="text-center mb-12"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-xs mb-4">
            Cotizador
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground">
            Diseña tu <em className="text-primary not-italic">joya ideal</em>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Cuéntanos qué buscas y te recomendamos el anillo perfecto.
          </p>
        </motion.div>

        {!isWelcomeStep && (
          <QuizProgress
            currentStep={stepIndex}
            totalSteps={steps.length}
            stepLabels={stepLabels}
            onStepClick={(s) => s <= stepIndex && setStepIndex(s)}
          />
        )}

        <div className="bg-card border border-border rounded-lg p-6 md:p-10 min-h-[350px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={stepIndex}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {isWelcomeStep && <WelcomeStep {...stepProps} />}
              {StepComponent && <StepComponent {...stepProps} />}
              {isResultStep && (
                <ResultView
                  recommendations={recommendations}
                  answers={answers}
                  onSelectRecommendation={setSelectedRec}
                  onRequestQuote={goToLeadCapture}
                />
              )}
              {isLeadStep && (
                <LeadCaptureStep
                  answers={answers}
                  recommendation={selectedRec}
                  onSubmitted={() => setSubmitted(true)}
                />
              )}
            </motion.div>
          </AnimatePresence>

          {isQuizStep && (
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
              <button
                onClick={prev}
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ChevronLeft size={16} /> Atrás
              </button>
              <div className="flex items-center gap-3">
                <button
                  onClick={skip}
                  className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <SkipForward size={14} /> Saltar
                </button>
                <button
                  onClick={next}
                  className="flex items-center gap-1 bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  Siguiente <ChevronRight size={16} />
                </button>
              </div>
            </div>
          )}

          {isResultStep && (
            <div className="mt-6 pt-4 border-t border-border">
              <button
                onClick={prev}
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ChevronLeft size={16} /> Volver a editar
              </button>
            </div>
          )}
          {isLeadStep && (
            <div className="mt-6 pt-4 border-t border-border">
              <button
                onClick={() => setStepIndex(steps.indexOf('result'))}
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
