import { useState } from "react";
import DashboardLayout from "../../../components/layout/DashboardLayout";

const menuItems = [
  { label: "Ranking UMKM", active: false },
];

const BANK_ROUTES = {
  "Ranking UMKM": "/bank/dashboard",
};

const dimensions = [
  { label: "Stabilitas", value: 72, color: "bg-[#66B89F]" },
  { label: "Pertumbuhan", value: 84, color: "bg-[#20A368]" },
  { label: "Ketahanan", value: 65, color: "bg-[#F0A02B]" },
  { label: "Reputasi", value: 71, color: "bg-[#4AA361]" },
  { label: "Kapasitas", value: 79, color: "bg-[#48AD88]" },
];

const positiveFactors = [
  { label: "Frekuensi transaksi tinggi", point: "+14 pts", value: 79 },
  { label: "Pertumbuhan omzet konsisten", point: "+11 pts", value: 65 },
  { label: "Keragaman waktu transaksi", point: "+8 pts", value: 45 },
];

const negativeFactors = [
  { label: "Konsentrasi pelanggan tinggi", point: "-9 pts", value: 55 },
  { label: "Rekening belum terpisah", point: "-7 pts", value: 38 },
  { label: "Porsi QRIS dari total omzet <60%", point: "-5 pts", value: 30 },
];

export default function UMKMDetailPage() {
  const [note, setNote] = useState("");

  return (
    <DashboardLayout menuItems={menuItems} routes={BANK_ROUTES} userName="Bank Mitra" userRole="Institusi Keuangan">
      {/* Header */}
      <header className="flex items-start justify-between">
        <div>
          <h1 className="text-[25px] font-bold tracking-[-0.02em] text-[#1D2939]">Toko Grosir Andi P</h1>
          <div className="mt-1 flex items-center gap-2 text-[8px] text-[#6C7A91]">
            <span>Ranking UMKM</span>
            <span>›</span>
            <span>Detail UMKM</span>
            <span>›</span>
            <span className="font-semibold">Toko Grosir Andi P</span>
          </div>
        </div>
        <span className="rounded-full bg-[#F0A332] px-4 py-2 text-[9px] font-semibold text-white shadow">Skor saat ini: 65%</span>
      </header>

      {/* Decision support */}
      <div className="mt-3 flex items-start gap-3 rounded-[9px] bg-[#F0F4FC] px-4 py-3 text-[10px] leading-4 text-[#264B81]">
        <InfoIcon />
        <p>Insight ini adalah decision-support — keputusan underwriting sepenuhnya kewenangan bank dan mengikuti kebijakan internal masing-masing.</p>
      </div>

      {/* ================= PROFILE ================= */}
      <section className="mt-6 rounded-[13px] bg-white p-[18px] shadow-[0_5px_20px_rgba(15,23,42,0.05)]">
        <div className="grid grid-cols-[1.6fr_0.9fr] gap-8">
          <div className="relative h-[205px] overflow-hidden rounded-[12px] bg-gradient-to-br from-[#9CB794] via-[#D2C09E] to-[#544431]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <div className="absolute bottom-5 left-6 text-white">
              <span className="rounded-full bg-white px-3 py-1 text-[9px] text-[#4A5564]">NS-00182</span>
              <h2 className="mt-5 text-[18px] font-medium">Toko Grosir Andi P.</h2>
              <p className="mt-2 text-[10px] text-white/90">Perdagangan & Retail · Jakarta Selatan</p>
            </div>
            <div className="absolute bottom-7 right-8 flex items-end gap-2 opacity-60">
              <div className="h-14 w-10 rounded-t-full bg-[#B43B2B]" />
              <div className="h-20 w-14 rounded-lg bg-[#E0D0A1]" />
              <div className="h-11 w-12 rounded-full bg-[#5E873D]" />
              <div className="h-16 w-10 rounded bg-[#EFE5CC]" />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex h-[190px] w-[190px] items-center justify-center rounded-full border-[15px] border-[#20A66B]">
              <div className="text-center">
                <p className="text-[40px] font-bold leading-none">78%</p>
                <p className="mt-2 text-[10px] text-[#313842]">Kesehatan Bisnis</p>
                <span className="mt-3 inline-flex items-center gap-1 rounded-full bg-[#77E8AA] px-3 py-1.5 text-[9px] font-semibold text-[#087A4A]">✓ Siap Naik Kelas</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 border-t border-[#D8DCE2] py-3 text-center">
          <p className="text-[8px] text-[#4F5968]">♡ Data QRIS · diperbarui 22 Jul 2026</p>
          <p className="mt-2 text-[8px] text-[#A7C0F3]">Model: tahap simulasi POC</p>
        </div>
        <div className="border-t border-[#D8DCE2] pt-5">
          <div className="space-y-4">{dimensions.map((item) => (<DimensionBar key={item.label} {...item} />))}</div>
        </div>
        <div className="mt-8 space-y-2">
          <button className="flex h-[42px] w-full items-center justify-center gap-2 rounded-[8px] bg-[#08264D] text-[11px] font-semibold text-white hover:bg-[#0D3263]">
            <PlusIcon /> Tambah ke Pipeline
          </button>
          <button className="flex h-[39px] w-full items-center justify-center gap-2 rounded-[8px] border-[1.5px] border-[#08264D] bg-white text-[11px] font-semibold">
            <TransferIcon /> Ekspor ke Sistem Internal
          </button>
        </div>
      </section>

      {/* ================= SCORE FACTORS ================= */}
      <section className="mt-5 rounded-[13px] bg-white p-[18px] shadow-[0_4px_18px_rgba(15,23,42,0.04)]">
        <div className="flex items-center justify-between">
          <h2 className="text-[16px] font-medium">Faktor Pembentuk Skor</h2>
          <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#7C8490] text-[9px]">?</span>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-semibold text-[#1DA468]"><TrendUpIcon /> Pendorong Skor (Positif)</div>
            <div className="mt-4 space-y-4">{positiveFactors.map((f) => (<FactorBar key={f.label} {...f} positive />))}</div>
          </div>
          <div>
            <div className="flex items-center gap-2 text-[10px] font-semibold text-[#ED9D24]"><TrendDownIcon /> Penghambat Skor (Negatif)</div>
            <div className="mt-4 space-y-4">{negativeFactors.map((f) => (<FactorBar key={f.label} {...f} />))}</div>
          </div>
        </div>
        <div className="mt-6 flex items-start gap-2 border-t border-[#D6DAE0] pt-4 text-[8px] leading-3 text-[#626A76]">
          <DocumentIcon />
          <p>Metode explainability menggunakan SHAP values<br />untuk transparansi model prediktif AI.</p>
        </div>
      </section>

      {/* ================= BOTTOM GRID ================= */}
      <section className="mt-5 grid grid-cols-[165px_1fr] gap-5">
        <div className="flex min-h-[315px] flex-col rounded-[13px] bg-white p-[18px] shadow-[0_4px_18px_rgba(15,23,42,0.04)]">
          <h3 className="text-[10px] font-semibold">Tren Skor (6 bulan)</h3>
          <ScoreTrendChart />
          <div className="mt-3 flex items-center gap-1 text-[8px] font-semibold text-[#1CA465]"><TrendUpIcon /> +3% dari bulan lalu</div>
          <div className="mt-auto rounded-r-[7px] border-l-[3px] border-[#0A2B5A] bg-[#F0F4FF] p-3">
            <p className="text-[8px] font-semibold leading-[1.45]">Jun → Jul: Rekening dipisahkan, manajemen arus kas membaik secara signifikan.</p>
          </div>
        </div>
        <div className="space-y-5">
          <div className="flex min-h-[68px] items-center gap-4 rounded-[10px] border border-[#70E99D] bg-[#F0FFF4] px-5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#77E8A7] text-[#078050]"><CheckCircleIcon /></div>
            <div>
              <p className="text-[10px] font-semibold text-[#087E4D]">Anomaly Check</p>
              <p className="mt-1 text-[9px] text-[#148B59]">Tidak ditemukan pola transaksi anomali dalam 6 bulan terakhir.</p>
            </div>
          </div>
          <div className="rounded-[13px] bg-white p-[18px] shadow-[0_4px_18px_rgba(15,23,42,0.04)]">
            <h3 className="text-[10px] font-semibold">Analyst Notes</h3>
            <textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder="Tambahkan catatan internal..." className="mt-4 h-[95px] w-full resize-none rounded-[7px] border border-dashed border-[#B8C5DA] bg-[#F1F5FF] p-3 text-[9px] text-[#364152] outline-none placeholder:text-[#7B8491] focus:border-[#5374A3]" />
            <button type="button" onClick={() => console.log("Note:", note)} className="mt-2 h-[24px] w-full rounded-[5px] bg-[#08264D] text-[8px] font-semibold text-white hover:bg-[#0D3263]">Simpan Catatan</button>
            <button className="mt-5 w-full text-center text-[8px] font-medium">Log akses UMKM ini →</button>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
}

function DimensionBar({ label, value, color }) {
  return (
    <div>
      <div className="mb-[6px] flex justify-between text-[8px] font-medium text-[#29384D]"><span>{label}</span><span>{value}%</span></div>
      <div className="h-[6px] overflow-hidden rounded-full bg-[#DFE9FA]"><div className={["h-full rounded-full", color].join(" ")} style={{ width: `${value}%` }} /></div>
    </div>
  );
}

function FactorBar({ label, point, value, positive = false }) {
  return (
    <div>
      <div className="mb-[7px] flex items-center justify-between gap-3">
        <span className="text-[9px] font-medium text-[#25344A]">{label}</span>
        <span className={["shrink-0 text-[9px] font-semibold", positive ? "text-[#159A5C]" : "text-[#E99820]"].join(" ")}>{point}</span>
      </div>
      <div className="h-[9px] overflow-hidden rounded-full bg-[#E0E9FA]">
        <div className={["h-full", positive ? "bg-[#20A66B]" : "bg-[#EBA02D]"].join(" ")} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function ScoreTrendChart() {
  const values = [61, 63, 62, 66, 74, 76];
  const min = 58;
  const max = 80;
  const width = 135;
  const height = 70;
  const points = values.map((v, i) => { const x = (i / (values.length - 1)) * width; const y = height - ((v - min) / (max - min)) * height; return `${x},${y}`; }).join(" ");
  return (
    <div className="mt-9">
      <svg viewBox={`0 0 ${width} ${height}`} className="h-[72px] w-full overflow-visible"><polyline points={points} fill="none" stroke="#20A66B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
      <div className="mt-1 flex justify-between text-[6px] text-[#89919D]"><span>Feb</span><span>Mar</span><span>Apr</span><span>Mei</span><span>Jun</span><span>Jul</span></div>
    </div>
  );
}

function InfoIcon() {
  return <svg className="mt-[1px] shrink-0 text-[#AFC7F4]" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" /><path d="M12 10v6M12 7.5h.01" stroke="white" strokeWidth="1.7" /></svg>;
}

function PlusIcon() {
  return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9" /><path d="M12 8v8M8 12h8" /></svg>;
}

function TransferIcon() {
  return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 8h15M15 4l4 4-4 4" /><path d="M20 16H5M9 12l-4 4 4 4" /></svg>;
}

function TrendUpIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="m3 17 6-6 4 4 7-8" /><path d="M15 7h5v5" /></svg>;
}

function TrendDownIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="m3 7 6 6 4-4 7 8" /><path d="M15 17h5v-5" /></svg>;
}

function DocumentIcon() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 3h11l3 3v15H5z" /><path d="M8 11h8M8 15h6" /></svg>;
}

function CheckCircleIcon() {
  return <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="m8 12 3 3 5-6" /></svg>;
}
