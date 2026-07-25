export default function BenefitCard({ title, description, icon }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex h-[42px] w-[42px] items-center justify-center rounded-[10px] bg-[#E6EEFF] text-[#19365F]">
        {icon}
      </div>
      <h3 className="mt-[12px] text-[14px] font-medium text-[#142B4D]">
        {title}
      </h3>
      <p className="mt-[3px] text-[14px] leading-[1.55] text-[#74829D]">
        {description}
      </p>
    </div>
  );
}
