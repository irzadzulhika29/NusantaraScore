import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../../components/layout/DashboardLayout";

const menuItems = [
  { label: "Dashboard", active: false },
  { label: "Faktor & Rekomendasi", active: true },
  { label: "Riwayat Skor", active: false },
  { label: "Data & Izin Akses", active: false },
  { label: "Bantuan", active: false },
];

export default function FaktorRekomendasiPage() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("Menahan skor");
  const [openSections, setOpenSections] = useState({ stabilitas: true, pertumbuhan: false, ketahanan: true, reputasi: false, kapasitas: false });

  const filters = [
    { label: "Semua", count: 12 },
    { label: "Menahan skor", count: 3 },
    { label: "Mendukung skor", count: 5 },
    { label: "Netral", count: 4 },
  ];

  const sections = [
    {
      id: "stabilitas", title: "STABILITAS", score: 72, progressColor: "bg-[#4DA263]", tag: "Konsistensi arus kas",
      factors: [
        { title: "Konsentrasi Pelanggan", status: "MENAHAN", type: "warning", description: "Omzet Anda terlalu bergantung pada 1-2 pelanggan besar. Ini meningkatkan risiko jika mereka berhenti memesan." },
        { title: "Frekuensi Transaksi Harian", status: "MENDUKUNG", type: "support", description: "Transaksi harian Anda sangat konsisten selama 6 bulan terakhir, menunjukkan basis pelanggan yang loyal dan aktif." },
      ],
    },
    {
      id: "pertumbuhan", title: "PERTUMBUHAN", score: 84, progressColor: "bg-[#1FA264]", factors: [],
    },
    {
      id: "ketahanan", title: "KETAHANAN", score: 65, progressColor: "bg-[#EBA43B]",
      factors: [
        { title: "Rekening Usaha & Pribadi Tercampur", status: "MENAHAN", type: "danger", description: "Sulit bagi sistem untuk memvalidasi margin keuntungan bersih karena pengeluaran pribadi tercampur di mutasi." },
        { title: "Cadangan Kas (Buffer)", status: "MENAHAN", type: "danger", description: "Cadangan kas saat ini hanya cukup untuk 1 minggu operasional. Minimal disarankan untuk 1 bulan." },
      ],
    },
    { id: "reputasi", title: "REPUTASI", score: 71, progressColor: "bg-[#4DA263]", factors: [] },
    { id: "kapasitas", title: "KAPASITAS", score: 79, progressColor: "bg-[#4DA263]", factors: [] },
  ];

  const onFixClick = () => navigate("/faktor/ketahanan");
  const toggleSection = (id) => setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <DashboardLayout menuItems={menuItems}>
      <header className="flex items-start justify-between">
        <div>
          <h1 className="text-[30px] font-bold leading-none tracking-[-0.025em] text-[#202A3B]">Faktor &amp; Rekomendasi</h1>
          <div className="mt-[9px] flex items-center gap-[7px] text-[11px] text-[#71829D]">
            <span>Skor Saya</span><ChevronRightSmall /><span className="font-semibold">Faktor &amp; Rekomendasi</span>
          </div>
        </div>
        <div className="rounded-full bg-[#20A165] px-[18px] py-[10px] text-[13px] font-semibold text-white shadow-sm">Skor saat ini: 78% — Siap Naik Kelas</div>
      </header>
      <p className="mt-[19px] text-[15px] text-[#70809A]">12 faktor dari 5 dimensi · <span className="text-[#DD2525]">3 perlu perhatian</span> · <span className="text-[#169B5D]">5 mendukung skor</span> · 4 netral</p>
      <div className="mt-[45px] flex items-center gap-[10px] border-b border-[#DADDE1] pb-[14px]">
        {filters.map((filter) => {
          const active = activeFilter === filter.label;
          return (
            <button key={filter.label} type="button" onClick={() => setActiveFilter(filter.label)} className={["h-[37px] rounded-full border px-[23px] text-[13px] font-semibold transition", active ? "border-[#22385F] bg-[#22385F] text-white shadow-[0_3px_8px_rgba(15,23,42,0.15)]" : "border-[#848A92] bg-white text-[#51555C] hover:bg-[#F4F5F6]"].join(" ")}>
              {filter.label} ({filter.count})
            </button>
          );
        })}
      </div>
      <div className="mt-[15px] space-y-[21px]">
        {sections.map((section) => (
          <DimensionSection key={section.id} section={section} open={openSections[section.id]} onToggle={() => toggleSection(section.id)} onFixClick={onFixClick} />
        ))}
      </div>
    </DashboardLayout>
  );
}

function DimensionSection({ section, open, onToggle, onFixClick }) {
  return (
    <section className="overflow-hidden rounded-[11px] border border-[#C8CDD5] bg-white shadow-[0_1px_2px_rgba(15,23,42,0.02)]">
      <button type="button" onClick={onToggle} className={["flex w-full items-start justify-between px-[19px] text-left", open ? "pb-[20px] pt-[20px]" : "py-[22px]"].join(" ")}>
        <div>
          <div className="flex items-center gap-[12px]">
            <h2 className="text-[23px] font-medium leading-none tracking-[-0.025em] text-[#0D2A52]">{section.title} ({section.score}%)</h2>
            {section.tag && <span className="rounded-[3px] bg-[#E9EDF5] px-[8px] py-[2px] text-[10px] tracking-[0.05em] text-[#4E5969]">{section.tag}</span>}
          </div>
          <div className="mt-[7px] h-[7px] w-[237px] overflow-hidden rounded-full bg-[#F0F3F7]">
            <div className={"h-full rounded-l-full " + section.progressColor} style={{ width: section.score + "%" }} />
          </div>
        </div>
        <div className="pt-[7px] text-black"><ChevronIcon open={open} /></div>
      </button>
      {open && section.factors.length > 0 && (
        <div className="grid grid-cols-2 gap-[20px] px-[19px] pb-[19px]">
          {section.factors.map((factor) => <FactorItem key={factor.title} {...factor} onFixClick={onFixClick} />)}
        </div>
      )}
      {!open && (
        <div className="grid grid-cols-2 gap-[25px] px-[25px]">
          <div className="h-px bg-[#D9DCE1]" /><div className="h-px bg-[#D9DCE1]" />
        </div>
      )}
    </section>
  );
}

function FactorItem({ title, status, type, description, onFixClick }) {
  const borderColor = type === "support" ? "border-l-[#1DAE72]" : type === "danger" ? "border-l-[#DF2D32]" : "border-l-[#ECA436]";
  const statusColor = type === "support" ? "text-[#15925B]" : type === "danger" ? "text-[#D8282C]" : "text-[#E9A031]";
  return (
    <article className={"min-h-[145px] border-y border-r border-[#D2D6DC] " + borderColor + " border-l-[3px] px-[15px] pb-[12px] pt-[17px]"}>
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-[13px] font-bold text-[#102A50]">{title}</h3>
        <span className={"shrink-0 text-[9px] font-bold " + statusColor}>{status}</span>
      </div>
      <p className="mt-[9px] text-[13px] leading-[1.45] text-[#555A63]">{description}</p>
      {type !== "support" && (
        <button type="button" onClick={onFixClick} className="mt-[13px] flex items-center text-[13px] font-bold text-[#102A50] hover:underline">
          Lihat cara memperbaiki <ChevronRightSmallDark />
        </button>
      )}
    </article>
  );
}

function ChevronIcon({ open }) { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"transition-transform duration-200 " + (open ? "rotate-180" : "")}><path d="m6 9 6 6 6-6" /></svg>; }
function ChevronRightSmall() { return <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6" /></svg>; }
function ChevronRightSmallDark() { return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>; }
