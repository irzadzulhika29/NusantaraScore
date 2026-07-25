const steps = [
  { number: 1, label: "Mulai" },
  { number: 2, label: "Verifikasi" },
  { number: 3, label: "Izin Data" },
  { number: 4, label: "Hasil" },
];

export default function Stepper({ currentStep = 1 }) {
  return (
    <div className="mx-auto flex w-full max-w-[650px] items-start">
      {steps.map((step, index) => {
        const isActive = step.number <= currentStep;
        const isCurrent = step.number === currentStep;
        return (
          <div key={step.number} className="flex w-full items-start">
            <div className="flex w-[60px] shrink-0 flex-col items-center">
              <div
                className={`flex h-[28px] w-[28px] items-center justify-center rounded-full text-[14px] font-semibold transition-colors ${
                  isActive && isCurrent
                    ? "bg-[#18243A] text-white"
                    : isActive
                      ? "bg-[#18243A] text-white"
                      : "bg-[#E8E7E4] text-[#A9ADB2]"
                }`}
              >
                {step.number}
              </div>
              <span
                className={`mt-[6px] whitespace-nowrap text-[11px] ${
                  isActive ? "text-[#18243A] font-medium" : "text-[#AEB2B4]"
                }`}
              >
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`mt-[13px] h-[1.5px] flex-1 ${
                  step.number < currentStep ? "bg-[#18243A]" : "bg-[#CED0D2]"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
