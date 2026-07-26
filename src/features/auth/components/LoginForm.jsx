import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-[380px] rounded-[10px] border border-slate-200 bg-white px-[27px] py-[27px] shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
      <div>
        <h2 className="text-[21px] font-bold tracking-[-0.02em] text-[#1F2937]">
          Masuk ke akun Anda
        </h2>
        <p className="mt-1 text-[12px] text-slate-400">
          Pilih portal masuk sesuai dengan jenis akun Anda
        </p>
      </div>

      <div className="mt-[22px]">
        <div className="space-y-[12px]">
          <button
            type="button"
            onClick={() => navigate("/dashboard")}
            className="group flex w-full items-center gap-3.5 rounded-[10px] border border-slate-200 bg-white p-[14px] text-left transition hover:border-[#233A63] hover:bg-[#233A63]/[0.02] hover:shadow-sm cursor-pointer"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#233A63]/10 text-[#233A63] transition group-hover:bg-[#233A63] group-hover:text-white">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[13px] font-bold text-slate-800">Masuk sebagai UMKM</div>
              <div className="mt-0.5 text-[11px] leading-tight text-slate-400">Untuk pelaku usaha dan pemilik UMKM</div>
            </div>
            <div className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-[#233A63]">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>

          <button
            type="button"
            onClick={() => navigate("/bank/dashboard")}
            className="group flex w-full items-center gap-3.5 rounded-[10px] border border-slate-200 bg-white p-[14px] text-left transition hover:border-[#233A63] hover:bg-[#233A63]/[0.02] hover:shadow-sm cursor-pointer"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#233A63]/10 text-[#233A63] transition group-hover:bg-[#233A63] group-hover:text-white">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[13px] font-bold text-slate-800">Masuk sebagai BANK</div>
              <div className="mt-0.5 text-[11px] leading-tight text-slate-400">Untuk mitra perbankan & analis kredit</div>
            </div>
            <div className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-[#233A63]">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>

        <div className="my-[24px] flex items-center gap-3">
          <div className="h-px flex-1 bg-slate-200" />
          <span className="text-[11px] text-slate-400">atau belum punya akun?</span>
          <div className="h-px flex-1 bg-slate-200" />
        </div>

        <button
          type="button"
          onClick={() => navigate("/register")}
          className="h-[39px] w-full rounded-[6px] border border-[#233A63] bg-white text-[12px] font-semibold text-[#233A63] transition hover:bg-slate-50 cursor-pointer"
        >
          Daftar sebagai UMKM Baru
        </button>
      </div>

      <div className="mt-[22px] border-t border-slate-100 pt-[18px] text-center">
        <p className="mx-auto max-w-[280px] text-[10px] leading-[1.5] text-slate-400">
          Mode Proof of Concept (POC): Anda dapat langsung masuk ke portal dashboard tanpa memasukkan kredensial kata sandi.
        </p>
      </div>
    </div>
  );
}
