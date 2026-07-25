import { useNavigate } from "react-router-dom";
import OnboardingHeader from "../components/OnboardingHeader";
import Stepper from "../components/Stepper";
import BenefitCard from "../components/BenefitCard";
import TrendIcon from "../components/icons/TrendIcon";
import CheckIcon from "../components/icons/CheckIcon";
import ShieldIcon from "../components/icons/ShieldIcon";
import InfoIcon from "../components/icons/InfoIcon";
import ImagePlaceholderIcon from "../components/icons/ImagePlaceholderIcon";

const benefits = [
  {
    title: "Skor yang jelas",
    description: (
      <>
        Tahu posisi usaha
        <br />
        Anda
      </>
    ),
    icon: <TrendIcon />,
  },
  {
    title: "Langkah nyata",
    description: (
      <>
        Panduan perbaikan
        <br />
        per faktor
      </>
    ),
    icon: <CheckIcon />,
  },
  {
    title: "Privasi terjaga",
    description: (
      <>
        Data aman, izin bisa
        <br />
        dicabut
      </>
    ),
    icon: <ShieldIcon />,
  },
];

export default function OnboardingPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#F7F5F0] font-sans text-[#18243A]">
      <OnboardingHeader onLogin={() => navigate("/login")} />

      <main className="mx-auto w-full max-w-[1110px] px-6 pb-9 pt-[34px]">
        <Stepper currentStep={1} />

        <section className="mx-auto mt-[35px] w-full max-w-[692px] rounded-[20px] bg-white px-[36px] pb-[34px] pt-[35px] shadow-[0_12px_35px_rgba(15,23,42,0.06)]">
          <div className="flex justify-center">
            <span className="rounded-full border border-[#72E7A5] bg-[#E2FFF0] px-[12px] py-[5px] text-[13px] font-medium text-[#078442]">
              Langkah 1 dari 4
            </span>
          </div>

          <div className="mt-[22px] flex h-[208px] w-full items-center justify-center overflow-hidden rounded-[14px] bg-[#EEF2FF]">
            <div className="flex h-full w-[84%] items-center justify-center bg-[#D9D8FF]">
              <ImagePlaceholderIcon />
            </div>
          </div>

          <div className="mt-[32px] text-center">
            <h1 className="text-[14px] font-medium text-[#202B3E]">
              Kenali Kesiapan Usaha Anda
            </h1>
            <p className="mx-auto mt-[14px] max-w-[505px] text-[14px] leading-[1.65] text-[#7183A2]">
              Nusantara Score membaca data transaksi QRIS usaha Anda dan
              menghitung seberapa siap usaha Anda untuk naik kelas ke KUR Kecil.
              <br />
              Hasilnya berupa Graduation Readiness Score beserta langkah nyata
              yang bisa Anda ambil.
            </p>
          </div>

          <div className="mt-[23px] border-y border-[#EEF0F3] py-[27px]">
            <div className="grid grid-cols-3 gap-5">
              {benefits.map((b) => (
                <BenefitCard key={b.title} {...b} />
              ))}
            </div>
          </div>

          <div className="mt-[22px] flex min-h-[77px] items-center gap-[12px] border-l-2 border-[#F2A51A] bg-[#FFF5E2] px-[15px] py-[15px]">
            <div className="self-start pt-[3px] text-[#F59E0B]">
              <InfoIcon />
            </div>
            <p className="text-[13px] leading-[1.55] text-[#4B5563]">
              Skor ini adalah alat bantu — bukan jaminan kredit disetujui.
              <br />
              Keputusan ada di tangan bank.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate("/verification")}
            className="mt-[23px] h-[42px] w-full rounded-[8px] bg-[#22385F] text-[14px] font-medium text-white shadow-sm transition hover:bg-[#1B2E50] active:scale-[0.995] cursor-pointer"
          >
            Mulai Pendaftaran
          </button>
        </section>
      </main>
    </div>
  );
}
