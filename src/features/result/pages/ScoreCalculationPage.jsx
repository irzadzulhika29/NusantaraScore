import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoIcon from "../../onboarding/components/icons/LogoIcon";

export default function ScoreCalculationPage() {
  const navigate = useNavigate();
  const [isCalculating] = useState(true);

  const steps = [
    { number: 1, label: "Mulai", status: "completed" },
    { number: 2, label: "Verifikasi", status: "completed" },
    { number: 3, label: "Izin Data", status: "completed" },
    { number: 4, label: "Hasil", status: "current" },
  ];

  const permissions = [
    {
      label: "Data Transaksi QRIS",
      active: true,
    },
    {
      label: "Data BPJS Ketenagakerjaan",
      active: true,
    },
    {
      label: "Data Perpajakan (tidak diaktifkan)",
      active: false,
    },
    {
      label: "Data E-Commerce (tidak diaktifkan)",
      active: false,
    },
  ];

  const handleViewScore = () => {
    navigate("/graduation-score");
  };

  return (
    <div className="min-h-screen bg-[#F7F5F0] font-sans text-[#152A4A]">
      {/* ================= HEADER ================= */}
      <header className="h-[66px] w-full bg-[#22385F]">
        <div className="mx-auto flex h-full w-full max-w-[1145px] items-center justify-between px-[38px]">
          {/* Logo */}
          <div className="flex items-center gap-[7px] text-white">
            <div className="flex h-[32px] w-[32px] items-center justify-center rounded-full border-2 border-white">
              <LogoIcon />
            </div>

            <div className="leading-[0.88]">
              <p className="text-[11px] font-bold">
                Nusantara
              </p>

              <p className="text-[8px] font-bold tracking-[0.02em]">
                SCORE
              </p>
            </div>
          </div>

          <p className="text-[12px] text-white/90">
            Sudah punya akun?{" "}
            <button
              type="button"
              className="font-semibold text-white transition hover:text-white/80"
            >
              Masuk
            </button>
          </p>
        </div>
      </header>

      {/* ================= MAIN ================= */}
      <main className="mx-auto w-full max-w-[1145px] px-6 pb-[38px] pt-[36px]">
        {/* ================= STEPPER ================= */}
        <div className="mx-auto flex w-full max-w-[665px] items-start">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              {/* Step */}
              <div className="flex w-[62px] shrink-0 flex-col items-center">
                <div
                  className={[
                    "flex h-[29px] w-[29px] items-center justify-center rounded-full text-[13px] font-semibold",
                    step.status === "completed"
                      ? "bg-[#61AD8C] text-white"
                      : "bg-[#E5E5E3] text-[#B0B2B4]",
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
                    "mt-[7px] whitespace-nowrap text-[11px]",
                    step.status === "completed"
                      ? "text-[#67717B]"
                      : "text-[#AFB2B4]",
                  ].join(" ")}
                >
                  {step.label}
                </span>
              </div>

              {/* Connector */}
              {index < steps.length - 1 && (
                <div className="mt-[14px] h-px flex-1 bg-[#C8CDD2]" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* ================= MAIN CARD ================= */}
        <section className="mx-auto mt-[36px] w-full max-w-[716px] rounded-[21px] bg-white px-[43px] pb-[45px] pt-[44px] shadow-[0_12px_35px_rgba(15,23,42,0.06)]">
          {/* ================= TITLE ================= */}
          <div className="text-center">
            <h1 className="mx-auto max-w-[450px] text-[26px] font-bold leading-[1.18] tracking-[-0.025em] text-[#10294E]">
              Pendaftaran selesai! Skor pertama
              <br />
              Anda sedang dihitung.
            </h1>

            <p className="mx-auto mt-[43px] max-w-[480px] text-[14px] leading-[1.7] text-[#7485A3]">
              Kami sedang menganalisis data transaksi QRIS Anda. Biasanya
              <br />
              membutuhkan 1–3 menit. Anda akan melihat Graduation
              <br />
              Readiness Score Anda di halaman berikutnya.
            </p>
          </div>

          {/* ================= PERMISSIONS ================= */}
          <div className="mt-[55px] rounded-[15px] border border-[#DED3C1] bg-white px-[22px] pb-[19px] pt-[23px]">
            <h2 className="text-[13px] font-bold text-[#172942]">
              Data yang Anda izinkan:
            </h2>

            <div className="mt-[16px] space-y-[13px]">
              {permissions.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-[12px]"
                >
                  {item.active ? (
                    <div className="flex h-[17px] w-[17px] shrink-0 items-center justify-center rounded-full bg-[#20A56E] text-white">
                      <CheckMiniIcon />
                    </div>
                  ) : (
                    <div className="flex h-[17px] w-[17px] shrink-0 items-center justify-center">
                      <span className="h-[1.5px] w-[17px] rounded-full bg-[#DCE2EB]" />
                    </div>
                  )}

                  <span
                    className={[
                      "text-[14px]",
                      item.active
                        ? "font-medium text-[#172A46]"
                        : "text-[#B7C1D1]",
                    ].join(" ")}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="mt-[23px] border-t border-dashed border-[#E5DED3] pt-[15px]">
              <p className="text-[10px] text-[#7488A8]">
                Anda bisa mengubah izin ini kapan saja di Pengaturan → Data Saya
              </p>
            </div>
          </div>

          {/* ================= CALCULATION STATUS ================= */}
          <div className="mt-[57px]">
            {/* Progress */}
            <div className="h-[5px] w-full overflow-hidden rounded-full bg-[#DFE8FF]">
              <div
                className={[
                  "h-full rounded-full bg-[#F2A33B]",
                  isCalculating ? "w-[18%]" : "w-full",
                ].join(" ")}
              />
            </div>

            {/* Status */}
            <div className="mt-[13px] flex items-center justify-center gap-[7px] text-[#E99321]">
              <span className="h-[7px] w-[7px] rounded-full bg-[#F0A033]" />

              <p className="text-[14px] font-medium">
                {isCalculating
                  ? "Menghitung skor..."
                  : "Skor selesai dihitung"}
              </p>
            </div>
          </div>

          {/* ================= CTA ================= */}
          <button
            type="button"
            onClick={handleViewScore}
            className="mt-[57px] flex h-[44px] w-full items-center justify-center gap-[9px] rounded-[8px] bg-[#20A66B] text-[14px] font-semibold text-white shadow-[0_5px_12px_rgba(32,166,107,0.18)] transition hover:bg-[#178D5A] active:scale-[0.995]"
          >
            Lihat Skor Graduation Saya

            <ArrowRightIcon />
          </button>
        </section>
      </main>
    </div>
  );
}

/* =========================================================
   ICONS
========================================================= */

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
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

function CheckMiniIcon() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12 4 4L19 6" />
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
