export default function FormField({ label, children }) {
  return (
    <div>
      <label className="mb-[7px] block text-[12px] font-semibold text-[#4A4F58]">
        {label}
      </label>
      {children}
    </div>
  );
}

export const inputClass =
  "h-[43px] w-full rounded-[7px] border border-[#C8CFDA] bg-white px-[14px] text-[14px] text-[#233047] outline-none transition focus:border-[#536F9B] focus:ring-2 focus:ring-[#536F9B]/10";
