import CheckSmallIcon from "../../../../components/icons/verification/CheckSmallIcon";

const steps = [
  { number: 1, label: "Mulai", status: "completed" },
  { number: 2, label: "Verifikasi", status: "current" },
  { number: 3, label: "Izin Data", status: "upcoming" },
  { number: 4, label: "Hasil", status: "upcoming" },
];

export default function VerificationStepper() {
  return (
    <div className="mx-auto flex w-full max-w-[650px] items-start">
      {steps.map((step, index) => (
        <div key={step.number} className="flex w-full items-start">
          <div className="flex w-[64px] shrink-0 flex-col items-center">
            <div
              className={`flex h-[28px] w-[28px] items-center justify-center rounded-full text-[13px] font-semibold ${
                step.status === "completed"
                  ? "bg-[#61AD8C] text-white"
                  : "bg-[#E8E7E4] text-[#ADB1B5]"
              }`}
            >
              {step.status === "completed" ? <CheckSmallIcon /> : step.number}
            </div>
            <span
              className={`mt-[7px] whitespace-nowrap text-[11px] ${
                step.status === "completed" ? "text-[#65717B]" : "text-[#AFB2B4]"
              }`}
            >
              {step.label}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div className="mt-[13px] h-px flex-1 bg-[#C8CDD2]" />
          )}
        </div>
      ))}
    </div>
  );
}
