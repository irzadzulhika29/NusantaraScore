import StatItem from "./StatItem";

const stats = [
  { value: "38 Juta", label: "UMKM pengguna QRIS" },
  { value: "5 Dimensi", label: "penilaian kesiapan" },
  { value: "Rp2.400T", label: "financing gap" },
];

export default function BrandSection() {
  return (
    <section className="relative flex w-[54%] flex-col bg-[#233A63] px-[54px] py-[52px] text-white">
      <div className="flex items-center gap-3">
        <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full border-[3px] border-white p-2">
          <img src="/logo.svg" alt="Nusantara Score" className="h-full w-full object-contain" />
        </div>
        <div className="leading-none">
          <h1 className="text-[25px] font-bold tracking-tight">Nusantara</h1>
          <p className="text-[21px] font-semibold tracking-[0.04em]">SCORE</p>
        </div>
      </div>

      <div className="mt-[58px]">
        <h2 className="max-w-[500px] text-[31px] font-bold leading-[1.14] tracking-[-0.025em]">
          Pahami kesiapan usaha Anda
          <br />
          sebelum mengajukan kredit
        </h2>
        <p className="mt-[20px] max-w-[490px] text-[16px] leading-[1.55] text-slate-100">
          Platform Graduation Intelligence berbasis data transaksi QRIS untuk
          UMKM dan penyalur KUR.
        </p>
      </div>

      <div className="mt-auto">
        <div className="grid grid-cols-3 gap-5">
          {stats.map((s) => (
            <StatItem key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
        <p className="mt-[43px] max-w-[490px] text-[11px] leading-[1.55] text-slate-100">
          Nusantara Score adalah sistem pendukung keputusan. Keputusan kredit
          ada di tangan bank.
        </p>
      </div>
    </section>
  );
}
