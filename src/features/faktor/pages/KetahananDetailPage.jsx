import React, { useState } from "react";
import DashboardLayout from "../../../components/layout/DashboardLayout";

export default function KetahananDetailPage() {
  const navigate = useNavigate();
  const [isWorking, setIsWorking] = useState(false);

  const menuItems = [
    { label: "Dashboard", active: false },
    { label: "Faktor & Rekomendasi", active: true },
    { label: "Riwayat Skor", active: false },
    { label: "Data & Izin Akses", active: false },
    { label: "Bantuan", active: false },
  ];

  const improvementSteps = [
    {
      number: 1,
      title: "Buka rekening terpisah",
      description: "Gunakan rekening bank baru khusus untuk operasional usaha. Anda tidak perlu akun bisnis formal; rekening atas nama pribadi kedua sudah cukup untuk tahap awal.",
    },
    {
      number: 2,
      title: "Pindahkan settlement QRIS",
      description: "Ubah pengaturan tujuan pencairan dana (settlement) dari QRIS atau marketplace Anda ke rekening khusus usaha tersebut.",
    },
    {
      number: 3,
      title: "Pisahkan pengeluaran mulai hari ini",
      description: "Berhentilah membayar belanja harian menggunakan kartu atau saldo dari rekening usaha. Transfer gaji tetap dari rekening usaha ke rekening pribadi untuk kebutuhan harian.",
    },
    {
      number: 4,
      title: "Tunggu 1-2 siklus bulanan",
      description: "Sistem kami memerlukan setidaknya 30 hari data transaksi bersih tanpa pencampuran untuk memverifikasi perubahan perilaku keuangan Anda.",
    },
  ];

  return (
    <DashboardLayout menuItems={menuItems}>
          <header className="flex items-start justify-between">
            <div>
              <h1 className="text-[24px] font-bold leading-none tracking-[-0.02em] text-[#202A3B]">Ketahanan</h1>
              <div className="mt-[7px] flex items-center gap-[5px] text-[8px] text-[#71819B]">
                <span>Faktor &amp; Rekomendasi</span><ChevronRightSmall /><span className="font-semibold">Ketahanan</span><ChevronRightSmall /><span className="font-semibold">Cara Memperbaiki</span>
              </div>
            </div>
            <span className="rounded-full bg-[#F2A538] px-[14px] py-[7px] text-[9px] font-medium text-white shadow-sm">Skor saat ini: 65%</span>
          </header>
          <section className="mt-[12px] flex gap-[11px] rounded-[5px] border border-[#6688C5] bg-[#F0F4FB] px-[11px] py-[13px]">
            <div className="shrink-0 text-[#345D9D]"><InfoIcon /></div>
            <p className="max-w-[620px] text-[10px] leading-[1.6] text-[#426393]">Panduan ini disusun berdasarkan standar analisis risiko perbankan. Perbaikan faktor ini tidak menjamin persetujuan kredit secara instan, namun secara signifikan meningkatkan kepercayaan institusi terhadap data keuangan Anda.</p>
          </section>
          <section className="mt-[22px] rounded-[9px] border-l-[4px] border-[#F2A329] bg-white px-[21px] pb-[18px] pt-[20px]">
            <div className="flex items-center gap-[8px]">
              <span className="rounded-full bg-[#FFF4E2] px-[9px] py-[5px] text-[10px] text-[#E99B2B]">↘ Menahan skor</span>
              <span className="rounded-full border border-[#CBD0D7] bg-white px-[10px] py-[5px] text-[10px] text-[#666C75]">Dimensi Stabilitas</span>
            </div>
            <h2 className="mt-[15px] text-[11px] font-medium text-[#10294D]">Rekening Usaha &amp; Pribadi Tercampur</h2>
            <p className="mt-[8px] text-[10px] text-[#535861]">Faktor ini menurunkan skor Stabilitas Anda sebesar ~8 poin.</p>
            <div className="mt-[12px] border-t border-[#D6D9DE] pt-[12px]">
              <p className="flex items-center gap-[5px] text-[10px] font-medium text-[#159A5D]">
                <TrendUpIcon /> Estimasi kenaikan skor jika diperbaiki: +6 hingga +10 poin
              </p>
            </div>
          </section>
          <section className="mt-[17px] rounded-[9px] bg-white px-[21px] py-[22px]">
            <SectionTitle icon={<ExplainIcon />} title="Apa maksudnya?" />
            <div className="mt-[18px] space-y-[12px] text-[10px] leading-[1.65] text-[#535861]">
              <p>Sistem kami mendeteksi adanya aktivitas transaksi non-usaha yang signifikan di dalam rekening yang Anda gunakan untuk operasional bisnis. Hal ini terlihat dari pola pengeluaran seperti belanja rumah tangga, biaya pendidikan, atau hobi yang bercampur dengan transaksi bahan baku dan pendapatan usaha.</p>
              <p>Pencampuran ini menyulitkan mesin analisis kami (dan analis bank) untuk menentukan <strong className="font-bold text-[#464B53]">Arus Kas Bersih (Net Cash Flow)</strong> yang sebenarnya dihasilkan oleh bisnis Anda. Tanpa pemisahan yang jelas, risiko bisnis dianggap lebih tinggi karena pengeluaran pribadi dapat sewaktu-waktu menguras modal kerja usaha.</p>
            </div>
          </section>
          <section className="mt-[17px] rounded-[9px] border border-[#F1DCA9] bg-[#FFF6E5] px-[21px] py-[22px]">
            <SectionTitle icon={<WarningIcon />} title="Mengapa ini penting untuk bank?" />
            <p className="mt-[17px] text-[10px] leading-[1.7] text-[#555961]">Bank membutuhkan data yang objektif untuk menilai kelayakan kredit. Rekening yang terpisah memberikan "Integritas Data". Bagi bank, nasabah yang memisahkan rekening menunjukkan kedisiplinan manajerial yang tinggi. Hal ini memberikan kepastian bahwa dana pinjaman nantinya akan digunakan benar-benar untuk ekspansi usaha, bukan untuk keperluan konsumsi pribadi.</p>
          </section>
          <section className="mt-[17px] rounded-[9px] bg-white px-[21px] pb-[23px] pt-[22px]">
            <SectionTitle icon={<ChecklistIcon />} title="Langkah-langkah perbaikan" />
            <div className="mt-[20px]">
              {improvementSteps.map((step, index) => (
                <ImprovementStep key={step.number} {...step} last={index === improvementSteps.length - 1} />
              ))}
            </div>
            <div className="mt-[12px] border-t border-[#D7DADF] pt-[25px]">
              <h3 className="text-center text-[10px] font-medium uppercase tracking-[0.08em] text-[#666A72]">Estimasi Waktu Perbaikan</h3>
              <div className="mx-[10px] mt-[17px] flex h-[5px] overflow-hidden rounded-full">
                <div className="w-[55%] bg-[#21A466]" /><div className="flex-1 bg-[#DCE7FB]" />
              </div>
              <div className="mx-[10px] mt-[10px] grid grid-cols-3">
                <div>
                  <p className="text-[7px] font-bold text-[#173154]">Minggu 1</p>
                  <p className="mt-[3px] text-[6px] text-[#686D75]">Persiapan</p>
                </div>
                <div className="text-center">
                  <p className="text-[7px] font-bold text-[#173154]">Minggu 2-4</p>
                  <p className="mt-[3px] text-[6px] text-[#686D75]">Adaptasi Data</p>
                </div>
                <div className="text-right">
                  <p className="text-[7px] font-bold text-[#173154]">Minggu 6</p>
                  <p className="mt-[3px] text-[6px] text-[#686D75]">Skor Diperbarui</p>
                </div>
              </div>
            </div>
          </section>
          <div className="mt-[16px] border-t border-[#CFD3D8] pt-[20px]">
            <button type="button" onClick={() => setIsWorking((prev) => !prev)} className={["flex h-[35px] w-full items-center justify-center gap-[7px] rounded-[6px] border text-[10px] font-medium transition", isWorking ? "border-[#20A56B] bg-[#ECFFF5] text-[#168553]" : "border-[#879BB8] bg-white text-[#7586A0] hover:bg-[#F7F9FC]"].join(" ")}>
              {isWorking ? <CheckSmallIcon /> : <FlagIcon />}
              {isWorking ? "Sedang dikerjakan" : "Tandai sebagai sedang dikerjakan"}
            </button>
          </div>
    </DashboardLayout>
  );
}

function SectionTitle({ icon, title }) {
  return (
    <div className="flex items-center gap-[9px]">
      <div className="flex h-[27px] w-[27px] items-center justify-center rounded-[5px] bg-[#E5EEFF] text-[#163A6A]">{icon}</div>
      <h2 className="text-[10px] font-medium text-[#173154]">{title}</h2>
    </div>
  );
}

function ImprovementStep({ number, title, description, last }) {
  return (
    <div className="flex gap-[11px]">
      <div className="flex w-[22px] shrink-0 flex-col items-center">
        <div className="z-10 flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#0C2D58] text-[10px] font-semibold text-white">{number}</div>
        {!last && <div className="min-h-[49px] w-px flex-1 bg-[#D9E4F6]" />}
      </div>
      <div className={last ? "pb-[5px]" : "pb-[20px]"}>
        <h3 className="text-[10px] font-medium text-[#163153]">{title}</h3>
        <p className="mt-[5px] max-w-[600px] text-[9px] leading-[1.55] text-[#565B64]">{description}</p>
      </div>
    </div>
  );
}

function MenuIcon() {
  return (
    <div className="relative text-[#718198]">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 3h12v18H6z" /><path d="M9 7h6M9 11h6M9 15h4" /></svg>
      <span className="absolute -bottom-[3px] -right-[4px] flex h-[9px] w-[9px] items-center justify-center rounded-full bg-[#F5A623] text-[5px] font-bold text-white">$</span>
    </div>
  );
}

function StarIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" /></svg>;
}

function UserIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#536274" strokeWidth="1.8"><circle cx="12" cy="8" r="4" /><path d="M4 21c1-5 4-7 8-7s7 2 8 7" /></svg>;
}

function LogoutIcon() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10 17l5-5-5-5" /><path d="M15 12H3" /><path d="M15 4h5v16h-5" /></svg>;
}

function ChevronRightSmall() {
  return <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6" /></svg>;
}

function InfoIcon() {
  return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9" /><path d="M12 11v5" /><path d="M12 8h.01" /></svg>;
}

function TrendUpIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m4 16 5-5 4 4 7-8" /><path d="M15 7h5v5" /></svg>;
}

function ExplainIcon() {
  return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="10" r="5" /><path d="M9 15v3M15 15v3M9 21h6" /><path d="M10 9a2 2 0 1 1 3 1.7c-.7.4-1 .8-1 1.3" /></svg>;
}

function WarningIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="#ECA331" stroke="#ECA331" strokeWidth="1.5">
      <path d="M12 3 2 21h20L12 3Z" />
      <path d="M12 9v5M12 17h.01" stroke="white" strokeWidth="1.7" />
    </svg>
  );
}

function ChecklistIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="m4 6 2 2 3-3" /><path d="M11 7h9" /><path d="m4 13 2 2 3-3" /><path d="M11 14h9" /><path d="M4 20h5M11 20h9" /></svg>;
}

function FlagIcon() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M5 21V4" /><path d="M5 5h10l2 3-2 3H5" /></svg>;
}

function CheckSmallIcon() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 4 4L19 6" /></svg>;
}
