import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../../components/layout/DashboardLayout";

const menuItems = [
  { label: "Dashboard", active: true },
  { label: "Faktor & Rekomendasi", active: false },
  { label: "Riwayat Skor", active: false },
  { label: "Data & Izin Akses", active: false },
  { label: "Bantuan", active: false },
];

export default function DashboardPage() {
  const navigate = useNavigate();

  const factors = [
    {
      title: "Konsentrasi Pelanggan",
      description: "Omzet usaha Anda bergantung 60% pada satu pelanggan besar. Hal ini meningkatkan risiko jika pesanan dari pelanggan tersebut berkurang tiba-tiba.",
      status: "MENAHAN SKOR",
      type: "danger",
      icon: <WarningIcon />,
    },
    {
      title: "Rekening Usaha & Pribadi Tercampur",
      description: "Pemisahan dana operasional dan pribadi belum terlihat jelas. Bank kesulitan melakukan analisis arus kas (cash flow) yang akurat.",
      status: "MENAHAN SKOR",
      type: "danger",
      icon: <WalletIcon />,
    },
    {
      title: "Konsistensi Transaksi QRIS",
      description: "Hebat! Anda memiliki riwayat transaksi aktif selama 8 bulan berturut-turut. Ini menunjukkan stabilitas operasional yang sangat baik.",
      status: "MENDUKUNG SKOR",
      type: "success",
      icon: <CheckCircleIcon />,
    },
  ];

  return (
    <DashboardLayout menuItems={menuItems}>
      <div className="flex h-[28px] items-center justify-center bg-[#22385F] px-4 text-center text-[9px] tracking-[0.04em] text-white/55">
        <InfoIcon /> <span className="ml-[7px]">Skor ini adalah alat bantu keputusan — keputusan pemberian kredit sepenuhnya ada di tangan bank.</span>
      </div>
      <div className="mt-[24px] grid grid-cols-[300px_minmax(0,1fr)] gap-[36px]">
        <section className="flex min-h-[527px] flex-col rounded-[12px] border border-[#CBD2DC] bg-white px-[24px] pb-[35px] pt-[26px]">
          <span className="self-start rounded-full border border-[#C6D5EF] bg-[#EDF3FF] px-[11px] py-[3px] text-[8px] font-medium uppercase tracking-[0.1em] text-[#7790BB]">Model: Tahap Simulasi POC</span>
          <div className="flex flex-1 items-center justify-center">
            <div className="relative flex h-[195px] w-[195px] items-center justify-center rounded-full bg-[#20A56B]">
              <div className="flex h-[165px] w-[165px] flex-col items-center justify-center rounded-full bg-white">
                <p className="text-[39px] font-bold leading-none text-[#102A51]">78%</p>
                <p className="mt-[5px] text-[10px] text-[#333A45]">Kesehatan Bisnis</p>
                <div className="mt-[12px] flex items-center gap-[5px] rounded-full bg-[#7DEBB1] px-[14px] py-[5px]">
                  <BadgeIcon /> <span className="text-[10px] font-semibold text-[#167C51]">Siap Naik Kelas</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-[12px] flex items-center justify-between text-[10px]">
            <div className="flex items-center gap-[4px] text-[#50545B]"><RefreshIcon /> <span>Sumber: data transaksi QRIS</span></div>
            <span className="font-semibold text-[#19365F]">Hari ini, 09:42</span>
          </div>
          <div className="grid grid-cols-3 gap-[8px]">
            <MetricCard title="STABILITAS" value="72%" valueClass="text-[#102A51]" />
            <MetricCard title="PERTUMBUHAN" value="84%" valueClass="text-[#1DA266]" />
            <MetricCard title="KETAHANAN" value="65%" valueClass="text-[#E89A27]" />
          </div>
        </section>
        <section>
          <h1 className="text-[27px] font-bold leading-tight tracking-[-0.025em] text-[#0D274F]">Selamat pagi, Pak Andi 👋</h1>
          <p className="mt-[5px] text-[12px] text-[#535A64]">Toko Grosir Pak Andi · Jakarta Timur</p>
          <div className="mb-[12px] mt-[27px] flex items-center justify-between">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.05em] text-[#4B4F56]">Faktor yang perlu perhatian</h2>
            <button type="button" onClick={() => navigate("/faktor")} className="text-[9px] font-semibold text-[#172943] hover:underline">Lihat Semua Faktor</button>
          </div>
          <div className="space-y-[12px]">{factors.map((factor) => (<FactorCard key={factor.title} {...factor} />))}</div>
        </section>
      </div>
      <section className="mt-[13px] rounded-[24px] bg-[#092854] px-[42px] pb-[42px] pt-[42px] text-white">
        <div className="grid grid-cols-[1.05fr_0.95fr] gap-[40px]">
          <div>
            <div className="inline-flex items-center gap-[6px] rounded-full border border-white/20 bg-white/10 px-[12px] py-[7px]">
              <InsightIcon /> <span className="text-[11px] font-medium">Interpretasi Skor</span>
            </div>
            <h2 className="mt-[22px] max-w-[310px] text-[25px] font-bold leading-[1.2] tracking-[-0.02em]">Apa artinya skor 78%<br />untuk usaha Anda?</h2>
            <p className="mt-[19px] max-w-[310px] text-[12px] leading-[1.55] text-white/75">
              Skor Anda berada dalam kategori <span className="text-[#6CF0AE]">Terpercaya.</span> Ini menunjukkan bahwa<br />bisnis Anda memiliki profil risiko yang rendah dan<br />tata kelola yang mulai<br />teratur.
            </p>
            <div className="mt-[19px] max-w-[300px] rounded-[12px] border border-white/10 bg-white/[0.06] px-[18px] py-[17px]">
              <div className="flex gap-[12px]">
                <div className="flex h-[31px] w-[31px] shrink-0 items-center justify-center rounded-full bg-[#79F3B0] text-[#07375A]"><FinanceIcon /></div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.04em] text-[#6FF0AC]">Potensi Pembiayaan</p>
                  <p className="mt-[7px] text-[12px] leading-[1.5] text-white/90">Sangat layak untuk mengajukan <span className="underline">KUR Kecil</span> dengan plafon Rp100 - Rp500 juta di Bank mitra Nusantara Score.</p>
                </div>
              </div>
            </div>
            <button type="button" className="mt-[19px] flex h-[40px] items-center gap-[10px] rounded-full bg-[#77F2AD] px-[24px] text-[11px] font-bold text-[#0B3A36] transition hover:bg-[#62E69B]">
              Lihat Bank Rekomendasi <ArrowRightIcon />
            </button>
          </div>
          <div className="flex flex-col justify-center">
            <div>
              <div className="relative h-[12px] overflow-hidden rounded-full bg-gradient-to-r from-[#D52F24] via-[#F1A22D] via-60% to-[#20A468]">
                <span className="absolute left-[78%] top-[-4px] h-[20px] w-[4px] rounded-full bg-white shadow" />
              </div>
              <div className="mt-[10px] flex justify-between text-[7px] font-semibold uppercase tracking-[0.13em] text-white/35">
                <span>Pemula</span><span>Berkembang</span><span className="text-[#69EDAC]">Mandiri</span>
              </div>
            </div>
            <div className="mt-[37px] rounded-[19px] border border-white/20 bg-white/[0.09] px-[25px] py-[24px] text-center">
              <p className="text-[50px] font-bold leading-none">78</p>
              <p className="mt-[9px] text-[10px] font-semibold uppercase tracking-[0.1em] text-white/60">Persentil Kesiapan</p>
              <div className="my-[20px] h-px bg-white/10" />
              <p className="text-left text-[10px] leading-[1.55] text-white/60">"Skor Anda lebih tinggi dari 84% UMKM di kategori Toko Kelontong se-Jakarta Timur."</p>
            </div>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
}

function MetricCard({ title, value, valueClass }) {
  return (
    <div className="rounded-[9px] border border-[#CBD2DC] bg-[#FAFAF9] px-[12px] py-[11px]">
      <p className="whitespace-nowrap text-[7px] font-bold tracking-[0.05em] text-[#555A61]">{title}</p>
      <p className={"mt-[5px] text-[19px] font-bold " + valueClass}>{value}</p>
    </div>
  );
}

function FactorCard({ title, description, status, type, icon }) {
  const danger = type === "danger";
  return (
    <button type="button" className="grid min-h-[133px] w-full grid-cols-[42px_minmax(0,1fr)_auto] gap-[7px] rounded-[12px] border border-[#CBD2DC] bg-white px-[18px] py-[18px] text-left transition hover:shadow-sm">
      <div className={["flex h-[36px] w-[36px] items-center justify-center rounded-[9px]", danger ? "bg-[#FFDAD5] text-[#E62D32]" : "bg-[#79F0AE] text-[#08734E]"].join(" ")}>{icon}</div>
      <div>
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-[12px] font-bold text-[#122B50]">{title}</h3>
          <span className={["shrink-0 rounded-full px-[10px] py-[4px] text-[7px] font-bold", danger ? "bg-[#FFD7D2] text-[#B9272C]" : "bg-[#8AEAB2] text-[#08784D]"].join(" ")}>{status}</span>
        </div>
        <p className="mt-[8px] max-w-[310px] text-[12px] leading-[1.45] text-[#555A63]">{description}</p>
      </div>
      <ChevronRightIcon />
    </button>
  );
}

function WarningIcon() { return <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3 2 21h20L12 3Z" /><path d="M12 9v5M12 17h.01" /></svg>; }
function WalletIcon() { return <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 6h15v13H4V6Z" /><path d="M4 9h15M15 12h6v5h-6a2.5 2.5 0 0 1 0-5Z" /></svg>; }
function CheckCircleIcon() { return <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="8" /><path d="m8.5 12 2.3 2.3 4.8-5" /></svg>; }
function ChevronRightIcon() { return <svg className="mt-[5px] text-[#C1C7CE]" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6" /></svg>; }
function RefreshIcon() { return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20 11a8 8 0 1 0-2 5.3" /><path d="M20 4v7h-7" /></svg>; }
function BadgeIcon() { return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="7" /><path d="m9 12 2 2 4-4" /></svg>; }
function InfoIcon() { return <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></svg>; }
function InsightIcon() { return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="10" r="6" /><path d="M9 16v3h6v-3M10 22h4" /></svg>; }
function FinanceIcon() { return <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="4" y="5" width="16" height="14" rx="2" /><path d="M8 12h8M12 8v8" /></svg>; }
function ArrowRightIcon() { return <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 12h14M15 8l4 4-4 4" /></svg>; }
