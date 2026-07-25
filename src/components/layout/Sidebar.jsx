import { useNavigate } from "react-router-dom";
import LogoIcon from "../../features/onboarding/components/icons/LogoIcon";

const navRoutes = {
  "Dashboard": "/dashboard",
  "Faktor & Rekomendasi": "/faktor",
  "Riwayat Skor": "/riwayat",
  "Data & Izin Akses": "/data-izin",
  "Bantuan": "/bantuan",
};

export default function Sidebar({ menuItems }) {
  const navigate = useNavigate();

  return (
    <aside className="fixed inset-y-0 left-0 z-30 flex w-[240px] flex-col bg-[#08264D] px-[14px] pb-[24px] pt-[34px] text-white">
      <div className="flex items-center gap-[9px] px-[2px]">
        <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full border-[2.5px] border-white">
          <LogoIcon />
        </div>
        <div className="leading-[0.92]">
          <p className="text-[20px] font-bold tracking-[-0.02em]">Nusantara</p>
          <p className="text-[17px] font-bold">SCORE</p>
        </div>
      </div>

      <nav className="mt-[30px] space-y-[10px]">
        {menuItems.map((item) => (
          <button
            key={item.label}
            type="button"
            onClick={() => {
              const route = navRoutes[item.label];
              if (route) navigate(route);
            }}
            className={[
              "flex h-[46px] w-full items-center justify-between rounded-[8px] px-[13px] transition",
              item.active
                ? "bg-[#20A76D] text-white"
                : "bg-white text-[#344050] hover:bg-[#F3F5F8]",
            ].join(" ")}
          >
            <div className="flex items-center gap-[9px]">
              {item.label === "Dashboard" ? <DashboardIcon /> : <MenuDocumentIcon />}
              <span className="text-[12px] font-semibold">{item.label}</span>
            </div>
            <StarIcon />
          </button>
        ))}
      </nav>

      <div className="mt-auto">
        <div className="flex items-center gap-[9px] px-[2px]">
          <div className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#DDE3EA]">
            <UserIcon />
          </div>
          <div>
            <p className="text-[12px] font-semibold">Pak Budi</p>
            <p className="text-[8px] text-white/65">Toko Grosir</p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => navigate("/login")}
          className="mt-[14px] flex h-[40px] w-full items-center justify-center gap-[8px] rounded-full bg-[#EE292B] text-[12px] font-semibold transition hover:bg-[#D92325]"
        >
          <LogoutIcon />
          Keluar
        </button>
      </div>
    </aside>
  );
}

function DashboardIcon() {
  return <span className="text-[16px]">📑</span>;
}

function MenuDocumentIcon() {
  return (
    <div className="relative text-[#748399]">
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 3h12v18H6z" />
        <path d="M9 7h6M9 11h6M9 15h4" />
      </svg>
      <span className="absolute -bottom-[3px] -right-[5px] flex h-[10px] w-[10px] items-center justify-center rounded-full bg-[#F5A623] text-[5px] font-bold text-white">$</span>
    </div>
  );
}

function StarIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#526174" strokeWidth="1.8">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c1-5 4-7 8-7s7 2 8 7" />
    </svg>
  );
}

function LogoutIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 17l5-5-5-5" />
      <path d="M15 12H3" />
      <path d="M15 4h5v16h-5" />
    </svg>
  );
}
