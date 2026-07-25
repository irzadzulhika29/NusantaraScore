import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoIcon from "../../../../components/icons/onboarding/LogoIcon";

export default function DataPermissionPage() {
  const navigate = useNavigate();
  const [permissions, setPermissions] = useState({
    qris: true,
    bpjs: true,
    tax: false,
    ecommerce: false,
  });

  const steps = [
    { number: 1, label: "Mulai", status: "completed" },
    { number: 2, label: "Verifikasi", status: "completed" },
    { number: 3, label: "Izin Data", status: "current" },
    { number: 4, label: "Hasil", status: "upcoming" },
  ];

  const dataSources = [
    {
      id: "qris",
      title: "Data Transaksi QRIS",
      badge: "UTAMA · WAJIB",
      collected: (
        <>
          Histori
          <br />
          transaksi 6
          <br />
          bulan
        </>
      ),
      reason: (
        <>
          Parameter
          <br />
          penilaian dasar
        </>
      ),
      icon: <QrisIcon />,
      mandatory: true,
    },
    {
      id: "bpjs",
      title: "BPJS Ketenagakerjaan",
      collected: (
        <>
          Jumlah
          <br />
          karyawan
          <br />
          terdaftar
        </>
      ),
      reason: (
        <>
          Validasi ukuran
          <br />
          usaha
        </>
      ),
      icon: <BuildingIcon />,
    },
    {
      id: "tax",
      title: "Perpajakan (NPWP)",
      collected: "Omzet terlapor",
      reason: (
        <>
          Cross-validasi
          <br />
          eksternal
        </>
      ),
      icon: <DocumentIcon />,
    },
    {
      id: "ecommerce",
      title: "Data E-Commerce",
      collected: (
        <>
          Volume
          <br />
          penjualan
          <br />
          online
        </>
      ),
      reason: (
        <>
          Melengkapi
          <br />
          gambaran usaha
        </>
      ),
      icon: <CartIcon />,
    },
  ];

  const togglePermission = (id) => {
    if (id === "qris") return;

    setPermissions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleContinue = () => {
    navigate("/result");
  };

  return (
    <div className="min-h-screen bg-[#F7F5F0] font-sans text-[#1D293D]">
      {/* ================= HEADER ================= */}
      <header className="h-[78px] bg-[#22385F]">
        <div className="mx-auto flex h-full w-full max-w-[1248px] items-center justify-between px-[38px]">
          {/* Logo */}
          <div className="flex items-center gap-[7px] text-white">
            <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full border-2 border-white">
              <LogoIcon />
            </div>

            <div className="leading-[0.9]">
              <p className="text-[12px] font-bold">Nusantara</p>
              <p className="text-[9px] font-bold tracking-wide">SCORE</p>
            </div>
          </div>

          <p className="text-[13px] text-white/90">
            Sudah punya akun?{" "}
            <button
              type="button"
              className="font-semibold text-white hover:underline"
            >
              Masuk
            </button>
          </p>
        </div>
      </header>

      {/* ================= MAIN ================= */}
      <main className="mx-auto w-full max-w-[1248px] px-6 pb-[40px] pt-[38px]">
        {/* ================= STEPPER ================= */}
        <div className="mx-auto flex w-full max-w-[750px] items-start">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <div className="flex w-[66px] shrink-0 flex-col items-center">
                <div
                  className={[
                    "flex h-[32px] w-[32px] items-center justify-center rounded-full text-[14px] font-semibold",
                    step.status === "completed"
                      ? "bg-[#61AD8C] text-white"
                      : "bg-[#E9E9E7] text-[#B3B5B7]",
                  ].join(" ")}
                >
                  {step.status === "completed" ? (
                    <CheckIcon />
                  ) : (
                    step.number
                  )}
                </div>

                <span
                  className={[
                    "mt-[8px] whitespace-nowrap text-[12px]",
                    step.status === "completed"
                      ? "text-[#67717B]"
                      : "text-[#B1B4B5]",
                  ].join(" ")}
                >
                  {step.label}
                </span>
              </div>

              {index < steps.length - 1 && (
                <div className="mx-[3px] mt-[15px] h-[1.5px] flex-1 bg-[#C8CCD1]" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* ================= CARD ================= */}
        <section className="mx-auto mt-[39px] w-full max-w-[784px] rounded-[22px] bg-white px-[48px] pb-[51px] pt-[48px] shadow-[0_14px_38px_rgba(15,23,42,0.06)]">
          {/* Badge */}
          <span className="inline-flex rounded-full bg-[#79E9AE] px-[13px] py-[5px] text-[11px] font-medium text-[#137D55]">
            Langkah 3 dari 4
          </span>

          {/* Heading */}
          <h1 className="mt-[21px] text-[27px] font-medium leading-tight tracking-[-0.025em] text-[#1D293D]">
            Pilih data yang boleh kami akses
          </h1>

          <p className="mt-[15px] max-w-[610px] text-[15px] leading-[1.55] text-[#555B65]">
            Anda bisa memilih tiap sumber data secara terpisah. Izin bisa dicabut
            kapan saja dari pengaturan akun.
          </p>

          {/* ================= DATA TABLE ================= */}
          <div className="mt-[31px] overflow-hidden rounded-[16px] border border-[#DED4C4]">
            {/* Header */}
            <div className="grid grid-cols-[1.6fr_1fr_1.1fr_0.65fr] bg-[#1C293D] px-[33px] py-[17px] text-white">
              <div className="text-[11px] font-semibold uppercase tracking-[0.03em]">
                Sumber Data
              </div>

              <div className="text-[11px] font-semibold uppercase leading-[1.3] tracking-[0.03em]">
                Apa yang
                <br />
                Diambil
              </div>

              <div className="text-[11px] font-semibold uppercase leading-[1.3] tracking-[0.03em]">
                Mengapa
                <br />
                Diperlukan
              </div>

              <div className="text-center text-[11px] font-semibold uppercase tracking-[0.03em]">
                Aktifkan
              </div>
            </div>

            {/* Rows */}
            {dataSources.map((item, index) => (
              <div
                key={item.id}
                className={[
                  "grid min-h-[99px] grid-cols-[1.6fr_1fr_1.1fr_0.65fr] items-center px-[33px]",
                  index !== dataSources.length - 1
                    ? "border-b border-[#DED4C4]"
                    : "",
                  item.mandatory ? "bg-[#FAFBFD]" : "bg-white",
                ].join(" ")}
              >
                {/* Source */}
                <div className="flex items-center gap-[14px] pr-4">
                  <div
                    className={[
                      "flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[10px]",
                      item.mandatory
                        ? "bg-transparent"
                        : "bg-[#E7EEFC]",
                    ].join(" ")}
                  >
                    {item.icon}
                  </div>

                  <div>
                    <p className="text-[15px] font-medium leading-[1.4] text-[#1D293D]">
                      {item.title}
                    </p>

                    {item.badge && (
                      <p className="mt-[3px] text-[10px] font-bold text-[#49A45F]">
                        {item.badge}
                      </p>
                    )}
                  </div>
                </div>

                {/* Collected */}
                <div className="pr-4 text-[14px] leading-[1.4] text-[#515762]">
                  {item.collected}
                </div>

                {/* Reason */}
                <div className="pr-4 text-[14px] leading-[1.4] text-[#515762]">
                  {item.reason}
                </div>

                {/* Toggle */}
                <div className="flex justify-center">
                  <Toggle
                    checked={permissions[item.id]}
                    locked={item.mandatory}
                    onChange={() => togglePermission(item.id)}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* ================= PRIVACY BOX ================= */}
          <div className="mt-[30px] flex min-h-[118px] gap-[14px] rounded-[15px] border border-[#DCE2EA] bg-[#F0F3F9] px-[22px] py-[23px]">
            <div className="shrink-0 pt-[1px] text-[#142A49]">
              <ShieldCheckIcon />
            </div>

            <div>
              <p className="text-[13px] leading-[1.7] text-[#26364F]">
                Data yang Anda izinkan hanya diproses dalam format agregat
                (bukan transaksi detail).
                <br />
                Kami tidak menyimpan data mentah. Sesuai UU PDP 27/2022.
              </p>

              <button
                type="button"
                className="mt-[8px] flex items-center gap-[3px] text-[12px] font-semibold text-[#15995B] transition hover:text-[#087944]"
              >
                Baca kebijakan privasi lengkap
                <ArrowRightSmallIcon />
              </button>
            </div>
          </div>

          {/* ================= NAVIGATION ================= */}
          <div className="mt-[62px] flex items-center justify-between">
            <button
              type="button"
              onClick={() => navigate("/verification")}
              className="flex h-[45px] items-center gap-[8px] px-[20px] text-[13px] font-semibold text-[#4B4F57] transition hover:text-[#22385F]"
            >
              <ArrowLeftIcon />
              Kembali
            </button>

            <button
              type="button"
              onClick={handleContinue}
              className="flex h-[47px] min-w-[166px] items-center justify-center gap-[8px] rounded-[8px] bg-[#8B98AB] px-[26px] text-[13px] font-semibold text-white transition hover:bg-[#78879C]"
            >
              Lanjutkan
              <ArrowRightIcon />
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

/* =========================================================
   TOGGLE
========================================================= */

function Toggle({ checked, locked, onChange }) {
  return (
    <button
      type="button"
      onClick={onChange}
      aria-pressed={checked}
      className={[
        "relative h-[24px] w-[44px] rounded-full transition-colors duration-200",
        locked
          ? "cursor-default bg-[#7DBBA3]"
          : checked
          ? "bg-[#18A66B]"
          : "bg-[#C7CAD2]",
      ].join(" ")}
    >
      <span
        className={[
          "absolute top-[3px] flex h-[18px] w-[18px] items-center justify-center rounded-full bg-white shadow-sm transition-all duration-200",
          checked ? "left-[23px]" : "left-[3px]",
        ].join(" ")}
      >
        {locked && <LockIcon />}
      </span>
    </button>
  );
}

/* =========================================================
   ICONS
========================================================= */

function CheckIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function QrisIcon() {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-[#17345C]"
    >
      <path d="M3 3h7v7H3V3Zm2 2v3h3V5H5Zm9-2h7v7h-7V3Zm2 2v3h3V5h-3ZM3 14h7v7H3v-7Zm2 2v3h3v-3H5Zm8-4h3v3h-3v-3Zm4 0h2v2h-2v-2Zm3 0h1v4h-2v-2h1v-2Zm-7 4h2v2h-2v-2Zm3-1h2v3h-2v-3Zm3 2h2v4h-4v-2h2v-2Zm-6 2h3v2h-3v-2Z" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#4E5969"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="3" width="11" height="18" rx="1" />
      <path d="M8 7h2M8 11h2M8 15h2M13 8h2M13 12h2M13 16h2" />
      <path d="M15 9h5v12h-5" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#4E5969"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 2h8l5 5v15H6V2Z" />
      <path d="M14 2v6h5" />
      <path d="M9 13h7M9 17h7" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#4E5969"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="9" cy="20" r="1" />
      <circle cx="18" cy="20" r="1" />
      <path d="M3 4h2l2.3 10.2a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L21 8H7" />
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3 19 6v5c0 4.5-2.8 8-7 10-4.2-2-7-5.5-7-10V6l7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#36506D"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="5" y="10" width="14" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

function ArrowLeftIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
      <path d="M9 12h10" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m15 8 4 4-4 4" />
    </svg>
  );
}

function ArrowRightSmallIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m15 8 4 4-4 4" />
    </svg>
  );
}
