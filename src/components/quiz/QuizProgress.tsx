interface QuizProgressProps {
  currentStep: number;
  totalSteps: number;
  stepLabels: string[];
  onStepClick: (step: number) => void;
}

const QuizProgress = ({ currentStep, totalSteps, stepLabels, onStepClick }: QuizProgressProps) => {
  // Don't show progress on welcome (step 0) or result/lead steps
  if (currentStep === 0 || currentStep >= totalSteps - 1) return null;

  const visibleSteps = stepLabels.slice(1, totalSteps - 1); // exclude welcome & lead
  const adjustedCurrent = currentStep; // 1-indexed display

  return (
    <div className="flex items-center justify-center gap-1 mb-10">
      {visibleSteps.map((label, i) => {
        const stepNum = i + 1;
        return (
          <div key={stepNum} className="flex items-center gap-1">
            <button
              onClick={() => onStepClick(stepNum)}
              title={label}
              className={`w-8 h-8 rounded-full text-xs font-medium flex items-center justify-center transition-all ${
                adjustedCurrent === stepNum
                  ? "bg-primary text-primary-foreground"
                  : adjustedCurrent > stepNum
                  ? "bg-primary/20 text-primary"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {stepNum}
            </button>
            {i < visibleSteps.length - 1 && (
              <div
                className={`w-4 md:w-8 h-px ${
                  adjustedCurrent > stepNum ? "bg-primary" : "bg-border"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default QuizProgress;
