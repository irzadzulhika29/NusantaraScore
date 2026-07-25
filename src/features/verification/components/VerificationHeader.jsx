import LogoIcon from "./icons/LogoIcon";

export default function VerificationHeader({ onLogin }) {
  return (
    <header className="h-[64px] bg-[#22385F]">
      <div className="mx-auto flex h-full max-w-[1100px] items-center justify-between px-[34px]">
        <div className="flex items-center gap-[6px] text-white">
          <div className="flex h-[32px] w-[32px] items-center justify-center rounded-full border-2 border-white">
            <LogoIcon />
          </div>
          <div className="leading-[0.9]">
            <p className="text-[11px] font-bold">Nusantara</p>
            <p className="text-[8px] font-bold tracking-wide">SCORE</p>
          </div>
        </div>
        <p className="text-[12px] text-white/90">
          Sudah punya akun?{" "}
          <button
            type="button"
            onClick={onLogin}
            className="font-semibold text-white hover:underline"
          >
            Masuk
          </button>
        </p>
      </div>
    </header>
  );
}
