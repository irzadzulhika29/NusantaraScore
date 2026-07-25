import { useNavigate } from "react-router-dom";
import LogoIcon from "../../../components/icons/onboarding/LogoIcon";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8F6F1] font-sans text-[#18243A]" style={{ zoom: 1.25 }}>
      {/* =========================================================
          HERO + NAVBAR
      ========================================================== */}
      <section className="bg-[#213A64] text-white">
        <div className="mx-auto max-w-[1475px] px-6 lg:px-10">
          <nav className="flex h-[72px] items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <div className="flex h-[36px] w-[36px] items-center justify-center rounded-full border-2 border-white">
                <LogoIcon />
              </div>
              <div className="leading-[0.9]">
                <p className="text-[13px] font-bold">Nusantara</p>
                <p className="text-[11px] font-bold">SCORE</p>
              </div>
            </a>

            <div className="hidden items-center gap-9 text-[12px] md:flex">
              <a href="#tentang" className="transition hover:text-[#77E8AC]">Tentang Platform</a>
              <a href="#umkm" className="transition hover:text-[#77E8AC]">Untuk UMKM</a>
              <a href="#bank" className="transition hover:text-[#77E8AC]">Untuk Bank</a>
              <a href="#cara-kerja" className="transition hover:text-[#77E8AC]">Cara Kerja</a>
            </div>

            <div className="flex items-center gap-5">
              <button onClick={() => navigate("/login")} className="hidden text-[12px] font-semibold sm:block cursor-pointer">Masuk</button>
              <button onClick={() => navigate("/register")} className="rounded-[6px] bg-[#21A76B] px-5 py-2.5 text-[12px] font-semibold transition hover:bg-[#188B59] cursor-pointer">Daftar UMKM</button>
            </div>
          </nav>

          <div className="grid min-h-[690px] items-center gap-14 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-0">
            <div>
              <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#31B879]">
                <span className="h-px w-6 bg-[#31B879]" />Graduation Intelligence Platform · Berbasis Data QRIS
              </div>
              <h1 className="mt-7 max-w-[838px] text-[45px] font-bold leading-[1.05] tracking-[-0.04em] sm:text-[55px] lg:text-[65px]">
                38,1 Juta UMKM<br />punya data.<br /><span className="text-[#F5A72D]">Tapi belum terbaca.</span>
              </h1>
              <p className="mt-7 max-w-[813px] text-[14px] leading-7 text-white/75">
                Kami menerjemahkan riwayat transaksi QRIS menjadi{" "}
                <strong className="text-white">Skor Kelayakan Bisnis (Graduation Score).</strong>{" "}
                Memberikan kejelasan bagi UMKM untuk berkembang, dan keyakinan objektif bagi perbankan untuk menyalurkan modal.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button onClick={() => navigate("/register")} className="flex items-center gap-2 rounded-[7px] bg-[#20A76B] px-6 py-3 text-[13px] font-semibold shadow-lg shadow-green-900/20 transition hover:bg-[#188C59] cursor-pointer">
                  Cek Kesiapan Usaha Saya <ArrowRightIcon />
                </button>
                <button onClick={() => navigate("/login")} className="rounded-[7px] border border-white/30 px-6 py-3 text-[13px] font-semibold transition hover:bg-white/10 cursor-pointer">
                  Saya Mitra Bank →
                </button>
              </div>
              <div className="mt-14 grid max-w-[825px] grid-cols-3 border-t border-white/15 pt-7">
                <Stat value="Rp2.400T" label="Potensi Kredit UMKM" />
                <Stat value="38,1 Juta" label="Pengguna QRIS Aktif" />
                <Stat value="5 Dimensi" label="Analisis Kesehatan Bisnis" />
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <ScorePreviewCard />
              <div className="absolute -right-[150px] top-[135px] hidden h-[210px] w-[300px] rotate-[4deg] rounded-2xl bg-white/10 xl:block" />
            </div>
          </div>
          <div className="pb-6 text-center text-[9px] uppercase tracking-[0.2em] text-white/30">
            Scroll<div className="mt-1">⌄</div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROBLEM
      ========================================================== */}
      <section id="tentang" className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6">
          <SectionEyebrow>Masalah yang diselesaikan</SectionEyebrow>
          <h2 className="mt-3 text-center text-[16px] font-medium text-[#3E4652]">Satu celah, dua perspektif</h2>
          <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-0">
            <div className="md:border-r md:border-[#DDD9D1] md:pr-12">
              <p className="text-[10px] font-semibold text-[#E6A126]">Dari sisi UMKM</p>
              <h3 className="mt-7 text-[21px] font-medium">Tidak tahu seberapa siap</h3>
              <p className="mt-4 max-w-[538px] text-[13px] leading-6 text-[#70747B]">Pengajuan kredit seringkali menjadi proses trial & error yang melelahkan karena kurangnya panduan yang jelas mengenai standar kelayakan.</p>
              <ProblemItem>Dokumen persyaratan terasa membingungkan dan sulit dipenuhi.</ProblemItem>
              <ProblemItem>Takut ditolak berulang kali yang merusak reputasi.</ProblemItem>
              <ProblemItem>Tergoda pinjaman informal dengan bunga tidak masuk akal.</ProblemItem>
              <div className="mt-8 rounded-[7px] bg-white p-5 shadow-sm">
                <p className="text-[10px] text-[#7C8490]">Potensi Penghematan Bunga</p>
                <p className="mt-1 text-[12px] font-medium">Rp18-72 Juta / tahun</p>
              </div>
            </div>
            <div className="md:pl-12">
              <p className="text-[10px] font-semibold text-[#617AA9]">Dari sisi Bank/Penyalur</p>
              <h3 className="mt-7 text-[21px] font-medium">Identifikasi UMKM yang masih manual</h3>
              <p className="mt-4 max-w-[538px] text-[13px] leading-6 text-[#70747B]">Proses akuisisi dan verifikasi calon debitur memakan biaya operasional tinggi karena survei lapangan yang masih mengandalkan intuisi.</p>
              <ProblemItem dark>Sulit membedakan UMKM produktif dan yang berisiko gagal bayar.</ProblemItem>
              <ProblemItem dark>Data terfragmentasi di berbagai sistem, sulit dikonsolidasi.</ProblemItem>
              <ProblemItem dark>Target penyaluran kredit tidak tercapai secara efisien.</ProblemItem>
              <div className="mt-8 rounded-[7px] bg-white p-5 shadow-sm">
                <p className="text-[10px] text-[#7C8490]">Kesenjangan Akses Kredit Formal</p>
                <p className="mt-1 text-[12px] font-medium">69,6% dari total UMKM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY GRADUATION INTELLIGENCE
      ========================================================== */}
      <section id="cara-kerja" className="pb-20 pt-8">
        <div className="mx-auto max-w-[1400px] px-6">
          <SectionEyebrow>Kenapa Graduation Intelligence</SectionEyebrow>
          <h2 className="mt-5 text-center text-[35px] font-medium tracking-[-0.025em] text-[#303846]">Bukan sekadar skor lolos atau tidak lolos.</h2>
          <p className="mx-auto mt-4 max-w-[1088px] text-center text-[13px] leading-6 text-[#8290A4]">Scoring konvensional menghasilkan satu angka. Graduation Intelligence menghasilkan peta jalan untuk UMKM yang ingin bersiap, dan bank yang ingin memilih lebih tepat.</p>
          <div className="mt-12 grid gap-7 lg:grid-cols-[1.25fr_0.85fr]">
            <div className="overflow-hidden rounded-[10px] bg-white shadow-sm">
              <div className="grid grid-cols-2 text-[11px] font-semibold text-white">
                <div className="bg-[#17243A] px-5 py-4 text-center">Scoring Konvensional</div>
                <div className="bg-[#0F8B62] px-5 py-4 text-center">Graduation Intelligence</div>
              </div>
              <ComparisonRow title="Sumber data" left="Laporan keuangan formal, agunan" right="Data transaksi QRIS real-time" />
              <ComparisonRow title="Output" left="Skor tunggal: lolos/tidak lolos" right="Skor + 5 dimensi + faktor + rekomendasi" />
              <ComparisonRow title="Explainability" left="Sering tidak dijelaskan ke UMKM" right="Setiap faktor dapat dijelaskan (SHAP)" />
              <ComparisonRow title="Update" left="Periodik" right="Dinamis mengikuti data terbaru" last />
              <p className="px-5 py-4 text-[9px] leading-4 text-[#9AA3AF]">Catatan: Nusantara Score saat ini masih dalam tahap POC. Model tidak pada desain final dan bukan keputusan kredit.</p>
            </div>
            <div className="space-y-4">
              <Benefit icon={<TargetIcon />}>Explainable by default</Benefit>
              <Benefit icon={<RefreshIcon />}>Data yang terus diperbarui</Benefit>
              <Benefit icon={<UsersIcon />}>Dua pengguna, satu mesin</Benefit>
              <Benefit icon={<ShieldIcon />}>Regulasi-ready</Benefit>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TWO AUDIENCES
      ========================================================== */}
      <section className="grid lg:grid-cols-2">
        <div id="umkm" className="relative overflow-hidden bg-[#20A769] px-8 py-16 text-white lg:px-[10%] lg:py-20">
          <p className="text-[9px] uppercase tracking-[0.12em] text-white/65">Untuk pelaku pemilik usaha</p>
          <h2 className="mt-6 max-w-[550px] text-[36px] font-bold leading-[1.12]">Anda sudah bertransaksi setiap hari.<br />Biarkan datanya bicara.</h2>
          <p className="mt-6 max-w-[550px] text-[13px] leading-6 text-white/75">Cek Graduation Readiness Score Anda, seberapa siap usaha Anda untuk KUR Kecil. Gratis. Tanpa syarat laporan keuangan.</p>
          <div className="mt-7 space-y-4">
            <CheckItem>Pahami kesiapan usaha sebelum mengajukan</CheckItem>
            <CheckItem>Dapatkan panduan perbaikan konkret per faktor</CheckItem>
            <CheckItem>Akses gratis, tanpa komitmen</CheckItem>
          </div>
          <button onClick={() => navigate("/register")} className="mt-8 rounded-[6px] bg-white px-6 py-3 text-[12px] font-semibold text-[#198858] shadow cursor-pointer">Cek Kesiapan Usaha Saya →</button>
          <p className="mt-4 text-[9px] text-white/50">Sudah 387 UMKM bergabung dalam program pilot</p>
          <div className="pointer-events-none absolute -bottom-[80px] right-[-25px] flex h-[260px] w-[260px] items-center justify-center rounded-full border-[18px] border-white/10">
            <span className="text-[70px] font-bold text-white/20">76</span>
          </div>
        </div>
        <div id="bank" className="relative overflow-hidden bg-[#213A64] px-8 py-16 text-white lg:px-[10%] lg:py-20">
          <p className="text-[9px] uppercase tracking-[0.12em] text-white/55">Untuk mitra bank & penyalur KUR</p>
          <h2 className="mt-6 max-w-[563px] text-[36px] font-bold leading-[1.12]">Identifikasi UMKM potensial dari data, bukan asumsi.</h2>
          <p className="mt-6 max-w-[550px] text-[13px] leading-6 text-white/65">Ranking UMKM berdasarkan Graduation Readiness Score dengan explainable insight yang bisa Anda verifikasi dan audit.</p>
          <div className="mt-7 space-y-4 text-[12px]">
            <CheckItem right>Pipeline calon debitur yang lebih berkualitas</CheckItem>
            <CheckItem right>Setiap skor dapat dijelaskan ke tim underwriting</CheckItem>
            <CheckItem right>Keputusan kredit tetap sepenuhnya di tangan Anda</CheckItem>
          </div>
          <button className="mt-8 rounded-[6px] border border-white/50 px-6 py-3 text-[12px] font-semibold transition hover:bg-white/10 cursor-pointer">Hubungi Kami untuk Pilot</button>
          <p className="mt-4 text-[9px] text-white/40">Cocok untuk bank digital, BPD, dan koperasi modern</p>
        </div>
      </section>

      {/* =========================================================
          VALIDATION
      ========================================================== */}
      <section className="py-20">
        <div className="mx-auto max-w-[1188px] px-6">
          <SectionEyebrow>Validasi & Bukti</SectionEyebrow>
          <h2 className="mt-5 text-center text-[34px] font-medium tracking-[-0.02em] text-[#333B48]">Apa yang sudah kami pelajari</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <article className="rounded-[10px] border border-[#D8D5CE] bg-white p-6 shadow-sm">
              <span className="rounded-full bg-[#FFF1D7] px-3 py-1 text-[8px] font-semibold uppercase text-[#E6A026]">Data POC · Simulasi</span>
              <p className="mt-5 text-[38px] font-light">0,56</p>
              <p className="text-[9px] text-[#858C96]">Koefisien Gini model scoring</p>
              <div className="mt-8">
                <MetricBar label="AUC" value="0,78" width="78%" />
                <MetricBar label="KS" value="0,41" width="41%" />
              </div>
              <p className="mt-8 text-[9px] leading-4 text-[#9AA1AA]">Hasil pada dataset internal 1.203 merchant. Akan divalidasi ulang pada data produksi setelah deployment tahap penuh.</p>
            </article>
            <article className="rounded-[10px] bg-[#233B65] p-7 text-white">
              <p className="text-[15px] leading-7 text-white/90">"Sejauh ini saya belum menemukan platform yang bisa tunjukin UMKM mana yang sudah siap naik kelas. Kalau ada indikator dari data transaksi digital yang terverifikasi akan sangat membantu."</p>
              <div className="mt-10 border-t border-white/20 pt-4">
                <p className="text-[9px] text-white/65">Pada proses POC Bank</p>
                <p className="mt-1 text-[9px] text-white/40">Wawancara internal tim Nusantara Score</p>
              </div>
            </article>
            <article className="rounded-[10px] border border-[#50BE87] bg-[#ECF8F1] p-7">
              <p className="text-[15px] leading-7 text-[#2E4A3C]">"Saya tidak pernah tahu rekening usaha dan pribadi yang tercampur itu ternyata berdampak ke penilaian kredit. Setelah dipisah, skor saya naik dan saya mulai paham apa yang harus diperbaiki."</p>
              <div className="mt-10 border-t border-[#B9E0CA] pt-4">
                <p className="text-[9px] text-[#628474]">Peserta program pilot, pemilik toko sembako</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="bg-[#213A64] py-20 text-white">
        <div className="mx-auto max-w-[1163px] px-6">
          <SectionEyebrow dark>Mulai Sekarang</SectionEyebrow>
          <h2 className="mt-5 text-center text-[40px] font-bold leading-tight">Datanya sudah ada.<br /><span className="text-[#F4A62C]">Tinggal dibaca.</span></h2>
          <p className="mx-auto mt-5 max-w-[713px] text-center text-[12px] leading-6 text-white/60">Mulai dengan mengecek kesiapan usaha Anda, atau hubungi kami untuk mendiskusikan program pilot mitra bank.</p>
          <div className="mx-auto mt-12 grid max-w-[938px] gap-5 md:grid-cols-2">
            <div className="rounded-[12px] bg-white p-6 text-[#172A46]">
              <span className="rounded-full bg-[#E7F8EE] px-3 py-1 text-[8px] font-semibold text-[#15995D]">Untuk UMKM</span>
              <h3 className="mt-4 text-[15px] font-bold">Cek kesiapan usaha Anda</h3>
              <p className="mt-2 text-[10px] leading-5 text-[#7A8492]">Gratis. Membutuhkan data transaksi QRIS. Tidak ada komitmen setelah daftar.</p>
              <button onClick={() => navigate("/register")} className="mt-6 w-full rounded-[6px] bg-[#20A769] py-3 text-[11px] font-semibold text-white transition hover:bg-[#188C59] cursor-pointer">Daftar dan Cek Skor Saya →</button>
              <p className="mt-3 text-center text-[8px] text-[#9CA4AE]">Tanpa biaya · Tanpa jaminan kredit disetujui</p>
            </div>
            <div className="rounded-[12px] border border-white/20 p-6">
              <span className="rounded-full bg-white/10 px-3 py-1 text-[8px]">Untuk Mitra Bank</span>
              <h3 className="mt-4 text-[15px] font-bold">Jadilah lender pilot pertama</h3>
              <p className="mt-2 text-[10px] leading-5 text-white/55">Diskusikan integrasi dashboard bank dan program pilot bersama tim Nusantara Score.</p>
              <button className="mt-6 w-full rounded-[6px] bg-white py-3 text-[11px] font-semibold text-[#213A64] transition hover:bg-[#F2F4F7] cursor-pointer">Hubungi Tim Kami →</button>
              <p className="mt-3 text-center text-[8px] text-white/35">Respon di dalam 1 hari kerja</p>
            </div>
          </div>
          <footer className="mt-20 border-t border-white/10 pt-6">
            <div className="flex flex-col justify-between gap-5 text-[8px] text-white/35 md:flex-row">
              <p>© 2026 Nusantara Score · Tim POC</p>
              <div className="flex gap-8">
                <button className="cursor-pointer">Kebijakan Privasi</button>
                <button className="cursor-pointer">Syarat Penggunaan</button>
                <span>v1.0 · Tahap Pilot</span>
              </div>
            </div>
            <p className="mt-8 text-center text-[7px] leading-4 text-white/20">Nusantara Score adalah sistem pendukung keputusan dan tidak menjamin persetujuan kredit. Keputusan akhir sepenuhnya berada pada institusi keuangan yang bersangkutan.</p>
          </footer>
        </div>
      </section>
    </div>
  );
}

function ScorePreviewCard() {
  return (
    <div className="relative z-10 w-full max-w-[438px] rounded-[20px] bg-white p-7 text-[#172A46] shadow-[0_25px_70px_rgba(5,18,40,0.3)]">
      <div className="flex justify-between">
        <div>
          <p className="text-[8px] uppercase tracking-[0.1em] text-[#8A95A5]">Simulasi UMKM</p>
          <p className="mt-1 text-[12px] font-medium">Toko Kopi Sejahtera</p>
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EEF3FA]"><StoreIcon /></div>
      </div>
      <div className="mx-auto mt-8 flex h-[160px] w-[160px] items-center justify-center rounded-full border-[10px] border-[#20A66B]">
        <div className="text-center">
          <p className="text-[46px] font-bold leading-none">76<span className="text-[20px]">%</span></p>
          <span className="mt-2 inline-flex rounded-full bg-[#DDF8E9] px-3 py-1 text-[8px] font-semibold text-[#15965A]">Siap Naik Kelas</span>
        </div>
      </div>
      <div className="mt-10 space-y-6">
        <ScoreBar label="Stabilitas Transaksi" value={70} />
        <ScoreBar label="Tren Pertumbuhan" value={82} />
        <ScoreBar label="Ketahanan Saldo" value={64} warning />
      </div>
      <div className="mt-8 border-t border-[#E5E8ED] pt-5 text-[8px] leading-4 text-[#9AA2AE]">Skor ini merupakan simulasi. Keputusan akhir pemberian fasilitas pinjaman sepenuhnya berada di tangan bank.</div>
    </div>
  );
}

function Stat({ value, label }) { return <div><p className="text-[19px] font-bold">{value}</p><p className="mt-1 text-[9px] text-white/45">{label}</p></div>; }
function SectionEyebrow({ children, dark = false }) { return <p className={["text-center text-[9px] font-semibold uppercase tracking-[0.18em]", dark ? "text-[#28AE74]" : "text-[#7C8795]"].join(" ")}>{children}</p>; }
function ProblemItem({ children, dark }) { return <div className="mt-5 flex items-start gap-3"><span className={["mt-1 h-5 w-[3px] shrink-0 rounded-full", dark ? "bg-[#263D65]" : "bg-[#F0A72D]"].join(" ")} /><p className="text-[12px] leading-5 text-[#525A65]">{children}</p></div>; }

function ComparisonRow({ title, left, right, last }) {
  return <div className={["grid grid-cols-[95px_1fr_1fr] text-[10px]", !last ? "border-b border-[#E7E9ED]" : ""].join(" ")}>
    <div className="px-4 py-4 font-semibold text-[#5D6673]">{title}</div>
    <div className="border-l border-[#E7E9ED] px-4 py-4 text-[#717985]">{left}</div>
    <div className="border-l border-[#E7E9ED] px-4 py-4 font-medium text-[#233C61]">{right}</div>
  </div>;
}

function Benefit({ icon, children }) { return <div className="flex h-[62px] items-center gap-4 rounded-[9px] bg-white px-5 shadow-sm"><div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E7F7EF] text-[#20A66B]">{icon}</div><p className="text-[12px] font-medium text-[#48515D]">{children}</p></div>; }
function CheckItem({ children, right }) { return <div className={["flex items-start gap-3 text-[12px] text-white/80", right ? "lg:justify-end lg:text-right" : ""].join(" ")}>{!right && <span className="font-bold text-white">✓</span>}<span>{children}</span>{right && <span className="font-bold text-white">✓</span>}</div>; }

function MetricBar({ label, value, width }) {
  return <div className="mt-4"><div className="flex justify-between text-[9px]"><span>{label}</span><span>{value}</span></div><div className="mt-2 h-[4px] overflow-hidden rounded-full bg-[#E7EAF0]"><div className="h-full rounded-full bg-[#20A66B]" style={{ width }} /></div></div>;
}

function ScoreBar({ label, value, warning }) {
  return <div><div className="flex justify-between text-[9px] text-[#67717E]"><span>{label}</span><span className="font-semibold">{value}%</span></div><div className="mt-2 h-[5px] rounded-full bg-[#E8ECF1]"><div className={["h-full rounded-full", warning ? "bg-[#F0A62D]" : "bg-[#20A66B]"].join(" ")} style={{ width: `${value}%` }} /></div></div>;
}

function ArrowRightIcon() { return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M15 8l4 4-4 4" /></svg>; }
function StoreIcon() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#27466E" strokeWidth="1.7"><path d="M4 10v10h16V10" /><path d="M3 10 5 4h14l2 6" /><path d="M8 20v-6h8v6" /></svg>; }
function TargetIcon() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3" /></svg>; }
function RefreshIcon() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M20 6v5h-5" /><path d="M4 18v-5h5" /><path d="M6 9a7 7 0 0 1 11-3l3 5M18 15a7 7 0 0 1-11 3l-3-5" /></svg>; }
function UsersIcon() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2" /><path d="M3 20c0-4 2-6 6-6s6 2 6 6" /><path d="M15 15c3 0 5 2 5 5" /></svg>; }
function ShieldIcon() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6l-7-3Z" /></svg>; }
