import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../../components/layout/DashboardLayout";

const menuItems = [
  { label: "Ranking UMKM", active: true },
];

const BANK_ROUTES = {
  "Ranking UMKM": "/bank/dashboard",
};

const businesses = [
  { rank: 1, name: "Toko Grosir Andi P.", id: "NS-00182", score: 78, tier: "Siap Naik Kelas", factors: ["Konsistensi tinggi", "Pertumbuhan stabil"], updated: "22 Jul" },
  { rank: 2, name: "Warung Bu Siti", id: "NS-00094", score: 75, tier: "Siap Naik Kelas", factors: ["Sertifikasi Halal", "Cashflow Positif"], updated: "20 Jul" },
  { rank: 3, name: "Bengkel Maju Jaya", id: "NS-00215", score: 72, tier: "Berkembang", factors: ["Reputasi Digital", "Ketahanan Kas"], updated: "19 Jul" },
  { rank: 4, name: "Kantin Sehat", id: "NS-00042", score: 70, tier: "Berkembang", factors: ["Tren Transaksi ↑"], updated: "18 Jul" },
  { rank: 5, name: "Laundry Kiloan", id: "NS-00134", score: 65, tier: "Berkembang", factors: ["Lokasi Strategis"], updated: "17 Jul" },
  { rank: 6, name: "Sate Madura", id: "NS-00071", score: 48, tier: "Perlu Persiapan", factors: ["Kurang Dokumen"], updated: "16 Jul" },
  { rank: 7, name: "Fotokopi Center", id: "NS-00157", score: 61, tier: "Berkembang", factors: ["Aset Digital"], updated: "15 Jul" },
  { rank: 8, name: "Penjahit Rapi", id: "NS-00126", score: 42, tier: "Perlu Persiapan", factors: ["Modal Terbatas"], updated: "14 Jul" },
  { rank: 9, name: "Martabak Legit", id: "NS-00201", score: 82, tier: "Siap Naik Kelas", factors: ["Rating 4.9/5"], updated: "13 Jul" },
  { rank: 10, name: "Sembako Murah", id: "NS-00163", score: 79, tier: "Siap Naik Kelas", factors: ["Supply Chain Aman"], updated: "12 Jul" },
];

export default function BankDashboardPage() {
  const [search, setSearch] = useState("");
  const [tier, setTier] = useState("Semua");
  const [dimension, setDimension] = useState("Semua");
  const [region, setRegion] = useState("Semua");
  const [updated, setUpdated] = useState("30 hari");
  const [page, setPage] = useState(1);

  const filteredBusinesses = useMemo(() => {
    return businesses.filter((business) => {
      const keyword = search.toLowerCase();
      const matchesSearch =
        business.name.toLowerCase().includes(keyword) ||
        business.id.toLowerCase().includes(keyword);
      const matchesTier =
        tier === "Semua" || business.tier === tier;
      return matchesSearch && matchesTier;
    });
  }, [search, tier]);

  const handleExportCSV = () => {
    const headers = ["Ranking", "Nama UMKM", "ID", "GR Score", "Tier", "Top Faktor Pendorong", "Diperbarui"];
    const rows = filteredBusinesses.map((item) => [
      item.rank, item.name, item.id, `${item.score}%`, item.tier, item.factors.join(" | "), item.updated,
    ]);
    const csv = [headers, ...rows].map((row) => row.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "ranking-umkm.csv";
    anchor.click();
    URL.revokeObjectURL(url);
  };

  return (
    <DashboardLayout menuItems={menuItems} routes={BANK_ROUTES} userName="Bank Mitra" userRole="Institusi Keuangan">
      <HeaderSection />
      <DisclaimerSection />
      <StatCards />
      <SearchInput value={search} onChange={(v) => { setSearch(v); setPage(1); }} />
      <FilterBar
        tier={tier} onTierChange={setTier}
        dimension={dimension} onDimensionChange={setDimension}
        region={region} onRegionChange={setRegion}
        updated={updated} onUpdatedChange={setUpdated}
        onExport={handleExportCSV}
      />
      <TableSection
        businesses={filteredBusinesses}
        page={page}
        onPageChange={setPage}
        totalCount={287}
      />
    </DashboardLayout>
  );
}

function HeaderSection() {
  return (
    <section className="flex min-h-[85px] items-center justify-between rounded-[11px] border border-[#E1E3E7] bg-white px-[15px] shadow-[0_1px_3px_rgba(15,23,42,0.04)]">
      <div>
        <h1 className="text-[23px] font-bold leading-none">Ranking UMKM</h1>
        <p className="mt-[7px] text-[13px] text-[#555C66]">287 UMKM dalam database institusi Anda</p>
      </div>
      <div className="flex items-center gap-[19px]">
        <div className="flex h-[37px] items-center gap-[8px] rounded-full border border-[#D8DFED] bg-[#F1F4FC] px-[16px] text-[13px] tracking-[0.02em] text-[#565B65]">
          <span className="h-[7px] w-[7px] rounded-full bg-[#F3AB32]" />
          MODEL: TAHAP SIMULASI POC
        </div>
        <button type="button" className="text-[#515861] transition hover:text-[#0B244A]" aria-label="Refresh data">
          <RefreshIcon />
        </button>
      </div>
    </section>
  );
}

function DisclaimerSection() {
  return (
    <section className="mt-[27px] flex min-h-[65px] items-center gap-[11px] rounded-[11px] border border-[#AFC3E8] bg-[#F1F5FC] px-[14px] text-[#335FA4]">
      <InfoIcon />
      <p className="text-[13px] leading-[1.5]">
        Insight ini adalah decision-support — keputusan underwriting sepenuhnya kewenangan bank dan mengikuti
        <br className="hidden xl:block" />kebijakan internal masing-masing.
      </p>
    </section>
  );
}

function StatCards() {
  return (
    <section className="mt-[33px] grid grid-cols-4 gap-[21px]">
      <StatCard label="TOTAL UMKM" value="287" extra="↑ 12 baru" description="Dalam 30 hari terakhir" />
      <StatCard label="SIAP NAIK KELAS" value="43" badge="≥75%" type="ready" progress={14} />
      <StatCard label="SEDANG BERKEMBANG" value="112" badge="50–74%" type="growing" progress={39} />
      <StatCard label="PERLU PERSIAPAN" value="132" badge="<50%" type="prepare" progress={46} />
    </section>
  );
}

function StatCard({ label, value, extra, description, badge, type = "default", progress }) {
  const styles = {
    default: { label: "text-[#515964]", value: "text-[#0B244A]", bar: "bg-[#20A66B]", badge: "" },
    ready: { label: "text-[#16995C]", value: "text-[#20A66B]", bar: "bg-[#20A66B]", badge: "bg-[#B8F2D3] text-[#118D52]" },
    growing: { label: "text-[#08794F]", value: "text-[#078153]", bar: "bg-[#087F51]", badge: "bg-[#D9F1FF] text-[#0877A8]" },
    prepare: { label: "text-[#E39B28]", value: "text-[#EAA12B]", bar: "bg-[#EAA12B]", badge: "bg-[#FFF0CF] text-[#D88313]" },
  };
  const style = styles[type];
  return (
    <div className="min-h-[108px] rounded-[11px] border border-[#E5E6E9] bg-white px-[17px] py-[18px] shadow-[0_2px_4px_rgba(15,23,42,0.03)]">
      <p className={["text-[9px] font-medium uppercase tracking-[0.05em]", style.label].join(" ")}>{label}</p>
      <div className="mt-[8px] flex items-end gap-[7px]">
        <span className={["text-[28px] font-bold leading-none", style.value].join(" ")}>{value}</span>
        {extra && <span className="mb-[1px] text-[12px] text-[#17A166]">{extra}</span>}
        {badge && <span className={["mb-[1px] rounded-[3px] px-[7px] py-[3px] text-[8px] font-semibold", style.badge].join(" ")}>{badge}</span>}
      </div>
      {description && <p className="mt-[8px] text-[8px] text-[#555B64]">{description}</p>}
      {typeof progress === "number" && (
        <div className="mt-[12px] h-[4px] overflow-hidden rounded-full bg-[#E1EAF8]">
          <div className={["h-full rounded-full", style.bar].join(" ")} style={{ width: `${progress}%` }} />
        </div>
      )}
    </div>
  );
}

function SearchInput({ value, onChange }) {
  return (
    <div className="relative mt-[34px]">
      <SearchIcon />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Cari UMKM berdasarkan nama atau ID..."
        className="h-[34px] w-full rounded-[7px] border border-[#BCC5D3] bg-white pl-[35px] pr-4 text-[12px] text-[#25334A] outline-none transition placeholder:text-[#7E8794] focus:border-[#49688F] focus:ring-2 focus:ring-[#49688F]/10"
      />
    </div>
  );
}

function FilterBar({ tier, onTierChange, dimension, onDimensionChange, region, onRegionChange, updated, onUpdatedChange, onExport }) {
  return (
    <section className="mt-[15px] flex flex-wrap items-center gap-[10px]">
      <FilterSelect value={tier} onChange={onTierChange} prefix="Tier:" options={["Semua", "Siap Naik Kelas", "Berkembang", "Perlu Persiapan"]} />
      <FilterSelect value={dimension} onChange={onDimensionChange} prefix="Dimensi:" options={["Semua", "Stabilitas", "Pertumbuhan", "Ketahanan", "Reputasi", "Kapasitas"]} />
      <FilterSelect value={region} onChange={onRegionChange} prefix="Wilayah:" options={["Semua", "Jakarta", "Jawa Barat", "Jawa Tengah", "Jawa Timur"]} />
      <FilterSelect value={updated} onChange={onUpdatedChange} prefix="Diperbarui:" options={["30 hari", "7 hari", "90 hari"]} />
      <button type="button" onClick={onExport} className="flex h-[36px] items-center gap-[7px] rounded-[7px] border border-[#0B244A] bg-white px-[14px] text-[12px] font-medium transition hover:bg-[#F5F7FA]">
        <DownloadIcon />
        Export CSV
      </button>
    </section>
  );
}

function FilterSelect({ prefix, value, onChange, options }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-[36px] appearance-none rounded-[7px] border border-[#CCD2DB] bg-white pl-[11px] pr-[31px] text-[11px] text-[#26364D] outline-none transition focus:border-[#6C809E]"
      >
        {options.map((option) => (
          <option key={option} value={option}>{prefix} {option}</option>
        ))}
      </select>
      <svg className="pointer-events-none absolute right-[9px] top-1/2 -translate-y-1/2" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#66717E" strokeWidth="2"><path d="m6 9 6 6 6-6" /></svg>
    </div>
  );
}

function TableSection({ businesses: filteredBusinesses, page, onPageChange, totalCount }) {
  return (
    <section className="mt-[27px] overflow-hidden rounded-[8px] border border-[#E1E3E7] bg-white shadow-[0_1px_3px_rgba(15,23,42,0.04)]">
      <div className="overflow-x-auto">
        <table className="w-full table-fixed border-collapse">
          <thead>
            <tr className="h-[57px] bg-[#08264D] text-left text-[9px] font-bold uppercase tracking-[0.09em] text-white">
              <th className="w-[6%] px-[10px]">#</th>
              <th className="w-[13%] px-[10px]">UMKM</th>
              <th className="w-[20%] px-[10px]">GR Score</th>
              <th className="w-[14%] px-[10px]">Tier</th>
              <th className="w-[23%] px-[10px]">Top Faktor<br />Pendorong</th>
              <th className="w-[14%] px-[10px]">Diperbarui</th>
              <th className="w-[10%] px-[10px]">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {filteredBusinesses.map((business) => (
              <BusinessRow key={business.id} business={business} />
            ))}
          </tbody>
        </table>
      </div>
      {filteredBusinesses.length === 0 && (
        <div className="flex h-[180px] items-center justify-center text-[13px] text-[#7A8390]">UMKM tidak ditemukan.</div>
      )}
      <Pagination page={page} onPageChange={onPageChange} totalCount={totalCount} />
    </section>
  );
}

function BusinessRow({ business }) {
  const navigate = useNavigate();
  return (
    <tr className="min-h-[85px] border-b border-[#E5E6E8] text-[12px] text-[#172A46] transition hover:bg-[#FAFBFC]">
      <td className="px-[10px] py-[10px] text-[#4E5662]">{business.rank}</td>
      <td className="px-[10px] py-[10px]">
        <p className="max-w-[105px] text-[14px] font-medium leading-[1.45]">{business.name}</p>
        <p className="mt-[3px] text-[8px] text-[#666D76]">ID: {business.id}</p>
      </td>
      <td className="px-[10px] py-[10px]">
        <div className="flex items-center gap-[10px]">
          <div className="h-[7px] w-[81px] overflow-hidden rounded-full bg-[#DCE8F8]">
            <div className={["h-full rounded-full", business.score < 50 ? "bg-[#EDA42F]" : business.score >= 75 ? "bg-[#23A76B]" : "bg-[#008151]"].join(" ")} style={{ width: `${business.score}%` }} />
          </div>
          <span className={["text-[14px] font-bold", business.score < 50 ? "text-[#ED9E25]" : "text-[#15975C]"].join(" ")}>{business.score}%</span>
        </div>
      </td>
      <td className="px-[10px] py-[10px]"><TierBadge tier={business.tier} /></td>
      <td className="px-[10px] py-[10px]">
        <div className="flex flex-wrap gap-[7px]">
          {business.factors.map((factor) => (
            <span key={factor} className="rounded-[3px] border border-[#D7DFED] bg-[#F1F4FA] px-[8px] py-[6px] text-[8px] leading-[1.2] text-[#4E5663]">{factor}</span>
          ))}
        </div>
      </td>
      <td className="px-[10px] py-[10px] text-center text-[11px] text-[#50565E]">{business.updated}</td>
      <td className="px-[10px] py-[10px]">
        <button type="button" onClick={() => navigate(`/bank/umkm/${business.id}`)} className="flex items-center gap-[8px] text-left text-[13px] font-medium leading-[1.5] text-[#18A166] transition hover:text-[#11794D]">
          <span>Lihat<br />Insight</span>
          <ArrowRightIcon />
        </button>
      </td>
    </tr>
  );
}

function TierBadge({ tier }) {
  const styles = {
    "Siap Naik Kelas": "bg-[#78E9AB] text-[#087A48]",
    "Berkembang": "bg-[#CDEFFF] text-[#0878A8]",
    "Perlu Persiapan": "bg-[#FFF0CB] text-[#C97608]",
  };
  return <span className={["inline-flex whitespace-nowrap rounded-full px-[6px] py-[4px] text-[8px] font-semibold", styles[tier]].join(" ")}>{tier}</span>;
}

function Pagination({ page, onPageChange, totalCount }) {
  return (
    <div className="flex min-h-[82px] items-center justify-between border-t border-[#E5E6E8] px-[14px]">
      <p className="text-[11px] text-[#535A64]">Menampilkan 1–12 dari {totalCount} UMKM</p>
      <div className="flex items-center gap-[13px] text-[12px]">
        <button type="button" onClick={() => onPageChange(Math.max(1, page - 1))} className="flex h-[28px] w-[28px] items-center justify-center"><ChevronLeftIcon /></button>
        {[1, 2, 3].map((n) => (
          <button key={n} type="button" onClick={() => onPageChange(n)} className={["flex h-[28px] min-w-[28px] items-center justify-center rounded-[4px] px-2", page === n ? "bg-[#08264D] text-white" : "text-[#424A56] hover:bg-[#F0F2F5]"].join(" ")}>{n}</button>
        ))}
        <span>...</span>
        <button type="button" onClick={() => onPageChange(24)} className={["flex h-[28px] min-w-[28px] items-center justify-center rounded-[4px] px-2", page === 24 ? "bg-[#08264D] text-white" : "text-[#424A56] hover:bg-[#F0F2F5]"].join(" ")}>24</button>
        <button type="button" onClick={() => onPageChange(Math.min(24, page + 1))} className="flex h-[28px] w-[28px] items-center justify-center"><ChevronRightIcon /></button>
      </div>
    </div>
  );
}

function RefreshIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M20 6v5h-5" /><path d="M20 11a8 8 0 1 0-2.3 5.7" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="shrink-0">
      <circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg className="absolute left-[11px] top-1/2 -translate-y-1/2 text-[#737D8A]" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M5 20h14" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" /><path d="m15 8 4 4-4 4" />
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6" /></svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6" /></svg>
  );
}
