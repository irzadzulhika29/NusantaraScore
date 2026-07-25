import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EyeIcon from "./icons/EyeIcon";
import EyeOffIcon from "./icons/EyeOffIcon";

export default function LoginForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/dashboard");
    }, 1500);
  }

  return (
    <div className="w-full max-w-[365px] rounded-[10px] border border-slate-200 bg-white px-[27px] py-[27px] shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
      <div>
        <h2 className="text-[21px] font-bold tracking-[-0.02em] text-[#1F2937]">
          Masuk ke akun Anda
        </h2>
        <p className="mt-1 text-[12px] text-slate-400">
          Masuk sebagai UMKM atau Mitra Bank
        </p>
      </div>

      <form className="mt-[26px]" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className="mb-2 block text-[12px] font-semibold text-slate-800">
            Email atau NIK/NIB
          </label>
          <input
            id="email"
            type="text"
            placeholder="Email atau NIK/NIB"
            className="h-[36px] w-full rounded-[8px] border-[1.5px] border-[#233A63] bg-white px-3 text-[12px] text-slate-700 outline-none transition focus:ring-2 focus:ring-[#233A63]/10 placeholder:text-[#9CA3AF]"
          />
        </div>

        <div className="mt-[20px]">
          <div className="mb-2 flex items-center justify-between">
            <label htmlFor="password" className="text-[12px] font-semibold text-slate-800">
              Kata Sandi
            </label>
            <button
              type="button"
              className="text-[12px] font-medium text-emerald-600 transition hover:text-emerald-700"
            >
              Lupa kata sandi?
            </button>
          </div>

          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Kata sandi"
              className={`h-[36px] w-full rounded-[8px] bg-white px-3 pr-10 text-[12px] text-slate-700 outline-none transition focus:ring-2 ${
                error
                  ? "border border-red-500 focus:ring-red-100"
                  : "border-[1.5px] border-[#233A63] focus:ring-[#233A63]/10"
              } placeholder:text-[#9CA3AF]`}
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-600"
              aria-label={showPassword ? "Sembunyikan kata sandi" : "Tampilkan kata sandi"}
            >
              {showPassword ? <EyeIcon /> : <EyeOffIcon />}
            </button>
          </div>

          {error && (
            <div className="mt-[6px] flex items-center gap-1 text-[10px] font-medium text-red-500">
              <span className="flex h-[10px] w-[10px] items-center justify-center rounded-full border border-red-500 text-[7px]">
                !
              </span>
              <span>{error}</span>
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`mt-[27px] flex h-[40px] w-full items-center justify-center gap-3 rounded-[6px] text-[12px] font-semibold text-white transition ${
            isLoading
              ? "cursor-not-allowed bg-[#344C77]"
              : "cursor-pointer bg-[#233A63] hover:bg-[#1a2d4f]"
          }`}
        >
          {isLoading ? (
            <>
              <span className="h-[17px] w-[17px] animate-spin rounded-full border-[3px] border-white/40 border-t-white" />
              Memverifikasi...
            </>
          ) : (
            "Masuk"
          )}
        </button>

        <div className="my-[27px] flex items-center gap-3">
          <div className="h-px flex-1 bg-slate-200" />
          <span className="text-[11px] text-slate-400">atau</span>
          <div className="h-px flex-1 bg-slate-200" />
        </div>

        <button
          type="button"
          onClick={() => navigate("/register")}
          className="h-[39px] w-full rounded-[6px] border border-[#233A63] bg-white text-[12px] font-semibold text-[#233A63] transition hover:bg-slate-50 cursor-pointer"
        >
          Daftar sebagai UMKM Baru
        </button>
      </form>

      <div className="mt-[27px] border-t border-slate-100 pt-[20px] text-center">
        <p className="mx-auto max-w-[270px] text-[10px] leading-[1.5] text-slate-400">
          Mitra Bank? Gunakan akun institusi yang telah didaftarkan admin Anda.
        </p>
      </div>
    </div>
  );
}
