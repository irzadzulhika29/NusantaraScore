export default function StatItem({ value, label }) {
  return (
    <div className="border-t border-white/25 pt-[14px]">
      <h3 className="whitespace-nowrap text-[27px] font-bold leading-none tracking-[-0.02em]">
        {value}
      </h3>
      <p className="mt-[8px] text-[11px] text-slate-100">
        {label}
      </p>
    </div>
  );
}
