import LogoIcon from "./icons/LogoIcon";

export default function OnboardingHeader({ onLogin }) {
  return (
    <header className="h-[63px] w-full bg-[#22385F]">
      <div className="mx-auto flex h-full w-full max-w-[1110px] items-center justify-between px-[38px]">
        <div className="flex items-center gap-2 text-white">
          <div className="flex h-[32px] w-[32px] items-center justify-center rounded-full border-2 border-white">
            <LogoIcon />
          </div>
          <div className="leading-[0.9]">
            <div className="text-[12px] font-bold">Nusantara</div>
            <div className="text-[8px] font-bold tracking-wide">SCORE</div>
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
