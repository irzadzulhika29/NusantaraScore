import React, { useState } from "react";
import DashboardLayout from "../../../components/layout/DashboardLayout";

export default function BantuanPage() {
  const [openFaqs, setOpenFaqs] = useState([1, 2]);

  const menuItems = [
    { label: "Dashboard", active: false },
    { label: "Faktor & Rekomendasi", active: false },
    { label: "Riwayat Skor", active: false },
    { label: "Data & Izin Akses", active: false },
    { label: "Bantuan", active: true },
  ];

  const faqSections = [
    {
      title: "Tentang Graduation Readiness Score",
      items: [
        {
          id: 1,
          question: "Apa itu Graduation Readiness Score?",
          answer: <div className="space-y-[12px]"><p>Graduation Readiness Score adalah metrik yang mengukur kesiapan bisnis UMKM Anda untuk "lulus" atau naik kelas ke kategori kredit yang lebih besar, khususnya <strong>KUR Kecil</strong> (Rp 100jt - Rp 500jt).</p><p>Skor ini dihitung berdasarkan <strong>5 Dimensi Utama</strong>: Stabilitas, Pertumbuhan, Resiliensi, Reputasi, dan Kapasitas Digital. Semakin tinggi skor Anda (0-100%), semakin besar probabilitas data bisnis Anda mencerminkan profil risiko yang sehat bagi institusi perbankan.</p></div>,
        },
        {
          id: 2,
          question: "Apakah skor tinggi menjamin kredit saya disetujui?",
          answer: <div className="border-l-[4px] border-[#E25555] bg-[#FFF8F8] px-[15px] py-[14px]"><p className="font-bold text-[#17253B]">Penafian Penting (Decision Support Tool):</p><p className="mt-[7px]">Nusantara Score berfungsi sebagai alat pendukung keputusan (<strong>Decision Support</strong>) berbasis data. Hasil skor tinggi memberikan sinyal positif, namun keputusan akhir pemberian kredit <strong>sepenuhnya berada di tangan pihak bank</strong>. Bank akan tetap melakukan verifikasi lapangan (KYC) dan penilaian independen sesuai kebijakan internal mereka.</p></div>,
        },
        { id: 3, question: "Kenapa skor saya tidak berubah?", answer: <p>Skor diperbarui ketika sistem mendeteksi perubahan signifikan pada pola transaksi dan faktor penilaian usaha Anda. Jika data terbaru belum menunjukkan perubahan yang cukup berarti, skor dapat tetap sama hingga periode pembaruan berikutnya.</p> },
        { id: 4, question: "Bagaimana cara menaikkan skor?", answer: <p>Fokus pada rekomendasi di halaman Faktor &amp; Rekomendasi. Prioritaskan faktor berstatus menahan skor, seperti kestabilan transaksi, pemisahan rekening usaha dan pribadi, serta kecukupan cadangan kas.</p> },
      ],
    },
    {
      title: "Privasi & Data",
      items: [
        { id: 5, question: "Siapa yang bisa melihat data saya?", answer: <p>Data hanya dapat digunakan oleh sistem Nusantara Score dan institusi yang memiliki kewenangan sesuai izin yang Anda berikan. Anda dapat mengelola sumber data yang diizinkan melalui halaman Data &amp; Izin Akses.</p> },
        { id: 6, question: "Apakah data transaksi saya aman?", answer: <p>Data ditransmisikan melalui mekanisme keamanan yang sesuai untuk melindungi kerahasiaan informasi. Penggunaan data dibatasi untuk kebutuhan penilaian dan proses yang telah Anda izinkan.</p> },
      ],
    },
    {
      title: "Tentang KUR Kecil",
      items: [
        { id: 7, question: "Apa syarat pengajuan KUR Kecil?", answer: <p>Persyaratan dapat berbeda berdasarkan kebijakan bank penyalur. Bank dapat mempertimbangkan identitas pemilik usaha, legalitas usaha, aktivitas bisnis, kemampuan pembayaran, riwayat transaksi, dan hasil verifikasi lainnya.</p> },
        { id: 8, question: "Berapa lama proses pencairan KUR?", answer: <p>Durasi proses bergantung pada bank penyalur, kelengkapan dokumen, proses verifikasi, serta hasil analisis kredit. Nusantara Score tidak menentukan waktu pencairan kredit.</p> },
      ],
    },
  ];

  const toggleFaq = (id) => {
    setOpenFaqs((prev) => prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]);
  };

  return (
    <DashboardLayout menuItems={menuItems}>
          <header>
            <h1 className="text-[27px] font-bold leading-none tracking-[-0.025em] text-[#17243A]">Bantuan &amp; Pertanyaan Umum</h1>
            <p className="mt-[9px] text-[13px] text-[#555D68]">Panduan lengkap untuk memahami skor kelayakan usaha Anda.</p>
          </header>
          <div className="mt-[28px] space-y-[25px]">
            {faqSections.map((section) => (
              <section key={section.title}>
                <h2 className="mb-[13px] px-[7px] text-[12px] font-medium text-[#5D6168]">{section.title}</h2>
                <div className="space-y-[7px]">
                  {section.items.map((faq) => (
                    <FAQItem key={faq.id} question={faq.question} open={openFaqs.includes(faq.id)} onToggle={() => toggleFaq(faq.id)}>{faq.answer}</FAQItem>
                  ))}
                </div>
              </section>
            ))}
          </div>
          <section className="mt-[26px] rounded-[11px] border border-[#C9CFD8] bg-white px-[25px] pb-[25px] pt-[27px]">
            <div className="flex items-center gap-[9px]"><BookIcon /><h2 className="text-[18px] font-bold text-[#10294D]">Kamus Istilah</h2></div>
            <div className="mt-[22px] grid grid-cols-2 gap-x-[68px] gap-y-[21px]">
              <GlossaryItem title="Graduation Readiness">Kesiapan finansial UMKM untuk beralih dari kredit mikro ke pinjaman komersial yang lebih besar.</GlossaryItem>
              <GlossaryItem title="KUR Kecil">Kredit Usaha Rakyat dengan plafon di atas Rp 100 juta hingga Rp 500 juta dengan suku bunga bersubsidi.</GlossaryItem>
              <GlossaryItem title="Dimensi Skor">Lima kategori penilaian utama (Stabilitas, Pertumbuhan, dll.) yang membentuk nilai akhir kesiapan Anda.</GlossaryItem>
              <GlossaryItem title="QRIS">Standar kode QR nasional untuk pembayaran digital yang menjadi sumber data utama penilaian skor.</GlossaryItem>
              <div className="col-span-2 max-w-[600px]">
                <GlossaryItem title="Decision Support">Sistem yang menyediakan data dan analisis untuk membantu pihak bank mengambil keputusan, namun tidak menggantikan keputusan manusia.</GlossaryItem>
              </div>
            </div>
          </section>
          <section className="mt-[25px] flex min-h-[78px] items-center justify-between rounded-[11px] bg-[#223A63] px-[20px] text-white">
            <div>
              <p className="text-[12px] font-medium">Belum menemukan jawaban?</p>
              <p className="mt-[5px] text-[12px] text-white/50">Tim konsultan kami siap membantu Anda secara langsung.</p>
            </div>
            <button type="button" className="rounded-full bg-[#79EFB1] px-[21px] py-[11px] text-[12px] font-medium text-[#137452] transition hover:bg-[#67E4A3]">Hubungi Customer Service</button>
          </section>
    </DashboardLayout>
  );
}

function FAQItem({ question, open, onToggle, children }) {
  return (
    <div className="overflow-hidden rounded-[9px] border border-[#C8CFD9] bg-white">
      <button type="button" onClick={onToggle} aria-expanded={open} className="flex min-h-[45px] w-full items-center justify-between gap-5 px-[13px] text-left">
        <span className="text-[12px] font-medium text-[#172A46]">{question}</span>
        <ChevronIcon open={open} />
      </button>
      {open && <div className="border-t border-[#D0D5DC] px-[13px] py-[14px] text-[12px] leading-[1.6] text-[#535861]">{children}</div>}
    </div>
  );
}

function GlossaryItem({ title, children }) {
  return <div>
    <h3 className="text-[12px] font-medium text-[#173154]">{title}</h3>
    <p className="mt-[5px] text-[12px] leading-[1.5] text-[#575C64]">{children}</p>
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

function ChevronIcon({ open }) {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={["shrink-0 transition-transform duration-200", open ? "rotate-180" : ""].join(" ")}><path d="m6 9 6 6 6-6" /></svg>;
}

function BookIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z" /><path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5a2.5 2.5 0 0 1 2.5 2.5v-16Z" /></svg>;
}
