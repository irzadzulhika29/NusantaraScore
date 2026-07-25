import { useState } from "react";
import { useNavigate } from "react-router-dom";
import VerificationHeader from "../components/VerificationHeader";
import VerificationStepper from "../components/VerificationStepper";
import FormField, { inputClass } from "../components/FormField";
import KtpUpload from "../components/KtpUpload";
import ChevronDownIcon from "../../../../components/icons/verification/ChevronDownIcon";
import InfoSmallIcon from "../../../../components/icons/verification/InfoSmallIcon";
import ArrowLeftIcon from "../../../../components/icons/verification/ArrowLeftIcon";
import ArrowRightIcon from "../../../../components/icons/verification/ArrowRightIcon";
import LockIcon from "../../../../components/icons/verification/LockIcon";

const businessTypes = [
  "Perdagangan & Ritel",
  "Makanan & Minuman",
  "Jasa",
  "Manufaktur",
  "Pertanian",
  "Lainnya",
];

export default function BusinessVerificationPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    businessName: "",
    nik: "",
    businessType: "",
    nib: "",
    city: "",
  });
  const [ktpFile, setKtpFile] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/permission");
  }

  return (
    <div className="min-h-screen bg-[#F7F5F0] font-sans text-[#1D293D]">
      <VerificationHeader onLogin={() => navigate("/login")} />

      <main className="mx-auto w-full max-w-[1100px] px-6 pb-[45px] pt-[35px]">
        <VerificationStepper />

        <section className="mx-auto mt-[35px] w-full max-w-[692px] rounded-[20px] bg-white px-[42px] pb-[43px] pt-[42px] shadow-[0_12px_35px_rgba(15,23,42,0.06)]">
          <div className="inline-flex rounded-full bg-[#75E8AD] px-[12px] py-[5px]">
            <span className="text-[10px] font-medium uppercase tracking-[0.05em] text-[#147A56]">
              Langkah 2 dari 4
            </span>
          </div>

          <h1 className="mt-[15px] text-[24px] font-bold leading-tight tracking-[-0.025em] text-[#202A3C]">
            Verifikasi Identitas Usaha Anda
          </h1>
          <p className="mt-[8px] text-[14px] text-[#7585A1]">
            Kami butuh beberapa data dasar untuk memulai.
          </p>

          <form onSubmit={handleSubmit} className="mt-[37px]">
            <div className="grid grid-cols-2 gap-x-[20px] gap-y-[21px]">
              <FormField label="Nama Lengkap (sesuai KTP)">
                <input name="fullName" value={form.fullName} onChange={handleChange} type="text" placeholder="Contoh: Andi Prasetyo" className={inputClass} />
              </FormField>

              <FormField label="Nama Usaha">
                <input name="businessName" value={form.businessName} onChange={handleChange} type="text" placeholder="Contoh: Toko Grosir" className={inputClass} />
              </FormField>

              <FormField label="Nomor Induk Kependudukan (NIK)">
                <input name="nik" value={form.nik} onChange={handleChange} type="text" placeholder="16 digit NIK" className={inputClass} />
              </FormField>

              <FormField label="Jenis Usaha">
                <div className="relative">
                  <select
                    name="businessType"
                    value={form.businessType}
                    onChange={handleChange}
                    className={`${inputClass} appearance-none pr-10`}
                  >
                    <option value="" disabled>Pilih jenis usaha</option>
                    {businessTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                  <ChevronDownIcon />
                </div>
              </FormField>

              <div>
                <FormField label="Nomor Induk Berusaha (NIB)">
                  <input
                    name="nib"
                    value={form.nib}
                    onChange={handleChange}
                    type="text"
                    inputMode="numeric"
                    maxLength={13}
                    placeholder="Masukkan 13 digit NIB"
                    className={`${inputClass} placeholder:text-[#8792A5]`}
                  />
                </FormField>
                <div className="mt-[7px] flex items-center gap-[4px] text-[10px] text-[#7887A1]">
                  <InfoSmallIcon />
                  <span>
                    Dapatkan NIB gratis di{" "}
                    <a href="https://oss.go.id" target="_blank" rel="noreferrer" className="font-semibold text-[#008C5D] hover:underline">
                      OSS.go.id
                    </a>
                  </span>
                </div>
              </div>

              <FormField label="Kota/Kabupaten Usaha">
                <input name="city" value={form.city} onChange={handleChange} type="text" placeholder="Contoh: Jakarta Selatan" className={inputClass} />
              </FormField>
            </div>

            <KtpUpload file={ktpFile} onFileChange={setKtpFile} />

            <div className="mt-[48px] flex items-center justify-between">
              <button
                type="button"
                onClick={() => navigate("/onboarding")}
                className="flex h-[42px] cursor-pointer items-center gap-[7px] px-[18px] text-[12px] font-semibold text-[#4E525B] transition hover:text-[#22385F]"
              >
                <ArrowLeftIcon />
                Kembali
              </button>
              <button
                type="submit"
                className="flex h-[42px] cursor-pointer min-w-[146px] items-center justify-center gap-[7px] rounded-[7px] bg-[#8996A9] px-[25px] text-[12px] font-semibold text-white transition hover:bg-[#76859A]"
              >
                Lanjutkan
                <ArrowRightIcon />
              </button>
            </div>

            <div className="mt-[28px] border-t border-[#ECEFF3] pt-[29px]">
              <div className="flex items-center justify-center gap-[6px] text-[10px] text-[#7A8BA8]">
                <LockIcon />
                <span>
                  Data Anda dienkripsi dan hanya digunakan untuk verifikasi identitas usaha.
                </span>
              </div>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}
