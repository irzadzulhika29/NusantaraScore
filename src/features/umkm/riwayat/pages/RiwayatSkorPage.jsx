import React, { useState } from "react";
import DashboardLayout from "../../../../components/layout/DashboardLayout";

export default function RiwayatSkorPage() {
  const [period, setPeriod] = useState("3 bulan terakhir");

  const menuItems = [
    { label: "Dashboard", active: false },
    { label: "Faktor & Rekomendasi", active: false },
    { label: "Riwayat Skor", active: true },
    { label: "Data & Izin Akses", active: false },
    { label: "Bantuan", active: false },
  ];

  const history = [
    { month: "Jul", score: 78, tier: "Siap Naik Kelas", change: "Konsentrasi pelanggan ?", note: "â€”" },
    { month: "Jun", score: 75, tier: "Siap Naik Kelas", change: "Rekening dipisahkan ?", note: "Perbaikan diterapkan" },
    { month: "Mei", score: 71, tier: "Sedang Berkembang", change: "Pertumbuhan omzet ?", note: "â€”" },
    { month: "Apr", score: 68, tier: "Sedang Berkembang", change: "â€”", note: "â€”" },
    { month: "Mar", score: 65, tier: "Sedang Berkembang", change: "â€”", note: "â€”" },
    { month: "Feb", score: 61, tier: "Sedang Berkembang", change: "Skor Perdana", note: "â€”" },
  ];

  const handleExportCSV = () => {
    const header = ["Bulan", "Skor", "Tier", "Perubahan Terbesar", "Catatan"];
    const rows = history.map((item) => [item.month, `${item.score}%`, item.tier, item.change, item.note]);
    const csv = [header, ...rows].map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "riwayat-skor.csv";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <DashboardLayout menuItems={menuItems}>
          <header className="flex items-start justify-between">
            <div>
              <h1 className="text-[32px] font-bold leading-none tracking-[-0.025em] text-[#202A3B]">Riwayat Skor</h1>
              <p className="mt-[9px] text-[16px] text-[#71819D]">Perkembangan Graduation Readiness Score Anda dari waktu ke waktu</p>
            </div>
            <div className="relative">
              <select value={period} onChange={(e) => setPeriod(e.target.value)} className="h-[43px] appearance-none rounded-[8px] border border-[#C7CDD6] bg-white pl-[17px] pr-[43px] text-[15px] text-[#26364D] outline-none transition focus:border-[#667D9F] focus:ring-2 focus:ring-[#667D9F]/10">
                <option>3 bulan terakhir</option>
                <option>6 bulan terakhir</option>
                <option>12 bulan terakhir</option>
              </select>
              <ChevronDownIcon />
            </div>
          </header>
          <section className="mt-[37px] rounded-[22px] border border-[#E0E3E7] bg-white px-[32px] pb-[30px] pt-[36px] shadow-[0_2px_4px_rgba(15,23,42,0.03)]">
            <h2 className="text-[18px] font-bold text-[#102A50]">Tren Graduation Readiness Score</h2>
            <ScoreChart />
            <div className="mt-[25px] flex items-center justify-center gap-[44px] text-[12px] text-[#535861]">
              <div className="flex items-center gap-[8px]"><span className="h-[12px] w-[12px] rounded-full bg-[#1EA366]" />Graduation Readiness Score</div>
              <div className="flex items-center gap-[8px]"><span className="w-[15px] border-t border-dashed border-[#42B77C]" />Target Siap Naik Kelas</div>
            </div>
          </section>
          <section className="mt-[32px] overflow-hidden rounded-[18px] border border-[#E0E3E7] bg-white shadow-[0_2px_4px_rgba(15,23,42,0.03)]">
            <div className="flex h-[71px] items-center justify-between px-[25px]">
              <h2 className="text-[15px] font-bold text-[#102A50]">Rincian per Pembaruan</h2>
              <button type="button" onClick={handleExportCSV} className="flex items-center gap-[5px] text-[15px] font-medium text-[#102A50] transition hover:text-[#1B9D64]">
                <DownloadIcon /> Ekspor CSV
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="h-[58px] border-y border-[#E0E3E8] bg-[#F5F7FB] text-left text-[15px] font-semibold text-[#4D5057]">
                    <th className="w-[10%] px-[24px]">Bulan</th>
                    <th className="w-[11%] px-[18px]">Skor</th>
                    <th className="w-[28%] px-[18px]">Tier</th>
                    <th className="w-[32%] px-[18px]">Perubahan Terbesar</th>
                    <th className="w-[19%] px-[18px]">Catatan</th>
                  </tr>
                </thead>
                <tbody>
                  {history.map((item, index) => (
                    <tr key={item.month} className="h-[57px] border-b border-[#E8EAED] text-[14px] text-[#172A46] transition hover:bg-[#FAFBFC]">
                      <td className="px-[24px] font-medium text-[#59616D]">{item.month}</td>
                      <td className={["px-[18px] font-bold", index === 0 ? "text-[#159D60]" : "text-[#172A46]"].join(" ")}>{item.score}%</td>
                      <td className="px-[18px]"><TierBadge tier={item.tier} /></td>
                      <td className="px-[18px]">{item.change}</td>
                      <td className="px-[18px] text-[#5D626A]">{item.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex min-h-[50px] items-center gap-[6px] bg-[#F7F9FD] px-[18px] text-[11px] text-[#8290A7]">
              <InfoIcon /><p>Data bersumber dari transaksi QRIS terhimpun. Pembaruan skor terjadi setiap ada perubahan signifikan pada pola transaksi.</p>
            </div>
          </section>
    </DashboardLayout>
  );
}

function ScoreChart() {
  return (
    <div className="relative mt-[13px] h-[330px] w-full">
      <div className="absolute inset-x-0 bottom-[17px] top-0 overflow-hidden">
        <div className="absolute left-[8px] right-[8px] top-[97px] border-t border-dashed border-[#92D4B1]">
          <span className="absolute left-[25px] top-[5px] text-[10px] font-semibold text-[#1A9A60]">Ambang Siap Naik Kelas (75%)</span>
        </div>
        <div className="absolute bottom-[31px] left-[66%] top-[42px] border-l border-dashed border-[#9DA7B4]" />
        <div className="absolute left-[53%] top-0 z-10 rounded-full bg-[#092A55] px-[15px] py-[8px] text-[11px] text-white shadow-[0_5px_10px_rgba(15,23,42,0.18)]">? +4% Â· Rekening usaha dipisahkan</div>
        <div className="absolute bottom-[31px] left-0 right-0 top-[205px] bg-[#F3FAF6]" />
        <svg className="absolute bottom-[31px] left-0 h-[115px] w-full" viewBox="0 0 1000 115" preserveAspectRatio="none">
          <polyline points="0,15 190,28 380,37 570,46 760,58 1000,76" fill="none" stroke="#1EA366" strokeWidth="3" vectorEffect="non-scaling-stroke" />
        </svg>
        <div className="absolute bottom-[39px] left-[2%] h-[13px] w-[13px] rounded-full border-[3px] border-[#D9F0E5] bg-[#20A66B]" />
        <div className="absolute bottom-[41px] left-[21%] h-[13px] w-[13px] rounded-full border-[3px] border-[#D9F0E5] bg-[#20A66B]" />
        <div className="absolute bottom-[41px] left-[40%] h-[13px] w-[13px] rounded-full border-[3px] border-[#D9F0E5] bg-[#20A66B]" />
        <div className="absolute bottom-[42px] left-[59%] h-[13px] w-[13px] rounded-full border-[3px] border-[#D9F0E5] bg-[#20A66B]" />
        <div className="absolute bottom-[43px] left-[78%] h-[15px] w-[15px] rounded-full border-[3px] border-[#D9F0E5] bg-[#20A66B]" />
        <div className="absolute bottom-[42px] right-[2%] h-[20px] w-[20px] rounded-full border-[4px] border-[#BEE7D2] bg-[#20A66B]" />
        <div className="absolute bottom-0 left-0 right-0 flex justify-between px-[17px] text-[11px] text-[#51565E]">
          <span>Feb</span><span>Mar</span><span>Apr</span><span>Mei</span><span className="font-bold text-[#102A50]">Jun</span><span className="font-bold text-[#102A50]">Jul</span>
        </div>
      </div>
    </div>
  );
}

function TierBadge({ tier }) {
  const ready = tier === "Siap Naik Kelas";
  return <span className={["inline-flex rounded-full px-[12px] py-[5px] text-[11px] font-semibold", ready ? "bg-[#E3F6EB] text-[#199B5F]" : "bg-[#E8F3EA] text-[#4B9C60]"].join(" ")}>{tier}</span>;
}

function MenuIcon() {
  return (
    <div className="relative text-[#748399]">
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 3h12v18H6z" /><path d="M9 7h6M9 11h6M9 15h4" /></svg>
      <span className="absolute -bottom-[3px] -right-[5px] flex h-[11px] w-[11px] items-center justify-center rounded-full bg-[#F5A623] text-[6px] font-bold text-white">$</span>
    </div>
  );
}

function StarIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" /></svg>;
}

function UserIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#526174" strokeWidth="1.8"><circle cx="12" cy="8" r="4" /><path d="M4 21c1-5 4-7 8-7s7 2 8 7" /></svg>;
}

function LogoutIcon() {
  return <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10 17l5-5-5-5" /><path d="M15 12H3" /><path d="M15 4h5v16h-5" /></svg>;
}

function ChevronDownIcon() {
  return <svg className="pointer-events-none absolute right-[15px] top-1/2 -translate-y-1/2 text-[#556173]" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>;
}

function DownloadIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M5 20h14" /></svg>;
}

function InfoIcon() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9" /><path d="M12 11v5" /><path d="M12 8h.01" /></svg>;
}
