import React, { useState } from "react";
import DashboardLayout from "../../../components/layout/DashboardLayout";

export default function DataIzinAksesPage() {
  const [permissions, setPermissions] = useState({ qris: true, bpjs: true, tax: false, ecommerce: false });

  const menuItems = [
    { label: "Dashboard", active: false },
    { label: "Faktor & Rekomendasi", active: false },
    { label: "Riwayat Skor", active: false },
    { label: "Data & Izin Akses", active: true },
    { label: "Bantuan", active: false },
  ];

  const dataSources = [
    { id: "qris", title: "Data Transaksi QRIS", subtitle: "Aktif sejak 15 Juni 2026", type: "required", icon: <QrIcon /> },
    { id: "bpjs", title: "Data BPJS Ketenagakerjaan", subtitle: "Aktif sejak 15 Juni 2026", type: "optional", icon: <BuildingIcon /> },
    { id: "tax", title: "Data Perpajakan (NPWP)", subtitle: "Belum diaktifkan", type: "optional", icon: <DocumentIcon /> },
    { id: "ecommerce", title: "Data E-Commerce", subtitle: "Belum diaktifkan", type: "optional", icon: <CartIcon /> },
  ];

  const togglePermission = (id) => { if (id === "qris") return; setPermissions((prev) => ({ ...prev, [id]: !prev[id] })); };

  const handleRevokeAll = () => { setPermissions({ qris: true, bpjs: false, tax: false, ecommerce: false }); };

  return (
    <DashboardLayout menuItems={menuItems}>
          <header>
            <h1 className="text-[27px] font-bold leading-none tracking-[-0.025em] text-[#202A3B]">Data &amp; Izin Akses</h1>
            <p className="mt-[9px] text-[13px] text-[#71819D]">Kelola data apa saja yang boleh diakses oleh Nusantara Score.</p>
          </header>
          <section className="mt-[27px] rounded-[18px] border border-[#C9CFD8] bg-white px-[19px] pb-[18px] pt-[31px]">
            <div>
              <h2 className="text-[15px] font-bold text-[#202B3D]">Data yang Sedang Diakses</h2>
              <p className="mt-[5px] text-[11px] text-[#71819D]">{Object.values(permissions).filter(Boolean).length} dari 4 sumber data aktif</p>
            </div>
            <div className="mt-[29px]">
              {dataSources.map((source, index) => (
                <DataSourceRow key={source.id} source={source} active={permissions[source.id]} onToggle={() => togglePermission(source.id)} last={index === dataSources.length - 1} />
              ))}
            </div>
          </section>
          <section className="relative mt-[25px] overflow-hidden rounded-[18px] border border-[#F5C6C4] bg-white px-[19px] pb-[20px] pt-[23px]">
            <div className="pointer-events-none absolute right-[18px] top-[13px] text-[#FBEDED]"><LargeWarningIcon /></div>
            <div className="relative z-10">
              <span className="inline-flex rounded-[4px] bg-[#FFE8E6] px-[8px] py-[4px] text-[8px] font-bold uppercase tracking-[0.04em] text-[#D92C2C]">Zona Pengelolaan Data</span>
              <h2 className="mt-[13px] text-[13px] font-semibold text-[#E23C3C]">Cabut Semua Izin &amp; Hapus Data</h2>
              <p className="mt-[12px] max-w-[570px] text-[12px] leading-[1.65] text-[#545961]">Jika Anda mencabut semua izin, skor Anda tidak akan diperbarui dan data transaksi yang tersimpan akan dihapus dalam 30 hari. Anda bisa mendaftar ulang kapan saja.</p>
              <button type="button" onClick={handleRevokeAll} className="mt-[18px] h-[37px] rounded-[6px] border border-[#ED4B4B] bg-white px-[18px] text-[12px] font-semibold text-[#E13C3C] transition hover:bg-[#FFF4F4]">Cabut Semua Izin</button>
            </div>
          </section>
          <section className="mt-[25px] flex gap-[19px] rounded-[18px] bg-[#EEF2F8] px-[19px] py-[20px]">
            <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-white text-[#16365E]"><ShieldIcon /></div>
            <div>
              <h2 className="text-[14px] font-bold text-[#202B3D]">Perlindungan Data Anda</h2>
              <div className="mt-[13px] space-y-[10px]">
                <ProtectionItem>Enkripsi tingkat bank untuk seluruh transmisi data.</ProtectionItem>
                <ProtectionItem>Kepatuhan penuh terhadap UU Perlindungan Data Pribadi (PDP).</ProtectionItem>
                <ProtectionItem>Data hanya digunakan untuk penilaian kredit institusional terpercaya.</ProtectionItem>
              </div>
              <button type="button" className="mt-[20px] flex items-center gap-[4px] text-[12px] font-medium text-[#179B5E] hover:underline">
                Baca kebijakan privasi lengkap <ArrowRightIcon />
              </button>
            </div>
          </section>
    </DashboardLayout>
  );
}

function DataSourceRow({ source, active, onToggle, last }) {
  const required = source.type === "required";
  return (
    <div className={["grid min-h-[69px] grid-cols-[40px_minmax(0,1fr)_auto_auto] items-center gap-[11px]", !last ? "border-b border-[#D5D9DF]" : ""].join(" ")}>
      <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[6px] bg-[#EEF3FF] text-[#102E58]">{source.icon}</div>
      <div>
        <h3 className="text-[13px] font-medium text-[#173154]">{source.title}</h3>
        <p className="mt-[4px] text-[12px] text-[#7C8BA4]">{active && source.id !== "qris" ? "Aktif sejak 15 Juni 2026" : source.subtitle}</p>
      </div>
      <span className={["mr-[6px] rounded-full border px-[11px] py-[4px] text-[8px] font-medium", required ? "border-[#BBC3D0] bg-[#F1F3F7] text-[#173154]" : active ? "border-transparent bg-[#E8F7EF] text-[#14975B]" : "border-[#9CA6B5] bg-white text-[#68778D]"].join(" ")}>
        {required ? "Data Utama · Wajib" : "Opsional"}
      </span>
      <div className="flex min-w-[48px] flex-col items-end">
        <Toggle checked={active} disabled={required} onClick={onToggle} />
        {required ? <span className="mt-[3px] whitespace-nowrap text-[6px] text-[#8C97A8]">tidak dapat dinonaktifkan</span> : !active ? <button type="button" onClick={onToggle} className="mt-[3px] text-[8px] font-semibold text-[#169B5D]">Aktifkan</button> : null}
      </div>
    </div>
  );
}

function Toggle({ checked, disabled, onClick }) {
  return <button type="button" disabled={disabled} onClick={onClick} aria-pressed={checked} className={["relative h-[19px] w-[35px] rounded-full transition-colors duration-200", checked ? (disabled ? "bg-[#8DCEB2]" : "bg-[#20A66B]") : "bg-[#CFD1D4]", disabled ? "cursor-not-allowed" : "cursor-pointer"].join(" ")}>
    <span className={["absolute top-[2px] h-[15px] w-[15px] rounded-full bg-white shadow-sm transition-all duration-200", checked ? "left-[18px]" : "left-[2px]"].join(" ")} />
  </button>;
}

function ProtectionItem({ children }) {
  return <div className="flex items-start gap-[9px]">
    <div className="mt-[1px] shrink-0 text-[#18A065]"><CheckCircleIcon /></div>
    <p className="text-[12px] leading-[1.4] text-[#565B63]">{children}</p>
  </div>;
}

function MenuIcon() {
  return <div className="relative text-[#748399]">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 3h12v18H6z" /><path d="M9 7h6M9 11h6M9 15h4" /></svg>
    <span className="absolute -bottom-[3px] -right-[5px] flex h-[10px] w-[10px] items-center justify-center rounded-full bg-[#F5A623] text-[5px] font-bold text-white">$</span>
  </div>;
}

function StarIcon() { return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" /></svg>; }
function UserIcon() { return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#526174" strokeWidth="1.8"><circle cx="12" cy="8" r="4" /><path d="M4 21c1-5 4-7 8-7s7 2 8 7" /></svg>; }
function LogoutIcon() { return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10 17l5-5-5-5" /><path d="M15 12H3" /><path d="M15 4h5v16h-5" /></svg>; }

function QrIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="3" width="6" height="6" /><rect x="15" y="3" width="6" height="6" /><rect x="3" y="15" width="6" height="6" /><path d="M12 3v3M12 9h3M12 12h3v3h3M12 15v6M15 18h6M21 12v3" /></svg>; }
function BuildingIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M4 21V5h10v16" /><path d="M14 10h6v11" /><path d="M7 8h4M7 12h4M7 16h4M17 13h1M17 17h1" /><path d="M2 21h20" /></svg>; }
function DocumentIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M6 3h8l4 4v14H6V3Z" /><path d="M14 3v5h5" /><path d="M9 12h6M9 16h6" /></svg>; }
function CartIcon() { return <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="20" r="1" /><circle cx="18" cy="20" r="1" /><path d="M3 4h2l2.5 11h10l2-7H7" /></svg>; }
function LargeWarningIcon() { return <svg width="58" height="58" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M12 3 2 21h20L12 3Z" /><path d="M12 9v5M12 17h.01" /></svg>; }
function ShieldIcon() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6l-7-3Z" /><path d="m9 12 2 2 4-4" /></svg>; }
function CheckCircleIcon() { return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9" /><path d="m8 12 2.5 2.5L16 9" /></svg>; }
function ArrowRightIcon() { return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m15 8 4 4-4 4" /></svg>; }
