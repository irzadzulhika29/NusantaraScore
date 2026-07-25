import { useRef, useState } from "react";
import CameraIcon from "./icons/CameraIcon";

export default function KtpUpload({ file, onFileChange }) {
  const fileInputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  function validateFile(f) {
    if (!f) return;
    const allowedTypes = ["image/jpeg", "image/png"];
    const maxSize = 5 * 1024 * 1024;
    if (!allowedTypes.includes(f.type)) {
      alert("Format file harus JPG atau PNG.");
      return;
    }
    if (f.size > maxSize) {
      alert("Ukuran file maksimal 5MB.");
      return;
    }
    onFileChange(f);
  }

  function handleFileChange(e) {
    validateFile(e.target.files?.[0]);
  }

  function handleDrop(e) {
    e.preventDefault();
    setIsDragging(false);
    validateFile(e.dataTransfer.files?.[0]);
  }

  return (
    <div className="mt-[24px]">
      <label className="mb-[9px] block text-[12px] font-semibold text-[#4A4F58]">
        Foto KTP
      </label>
      <input
        ref={fileInputRef}
        type="file"
        accept=".jpg,.jpeg,.png,image/jpeg,image/png"
        onChange={handleFileChange}
        className="hidden"
      />
      <button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        onDragEnter={(e) => { e.preventDefault(); setIsDragging(true); }}
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        className={`flex h-[103px] w-full flex-col items-center justify-center rounded-[11px] border-2 border-dashed transition ${
          isDragging
            ? "border-[#607DA8] bg-[#EAF0FA]"
            : "border-[#AFC1DC] bg-[#F4F7FC] hover:bg-[#EEF3FA]"
        }`}
      >
        <CameraIcon />
        {file ? (
          <div className="mt-[9px] text-center">
            <p className="max-w-[450px] truncate text-[12px] font-semibold text-[#183258]">
              {file.name}
            </p>
            <p className="mt-1 text-[10px] text-[#7787A1]">
              Klik untuk mengganti foto
            </p>
          </div>
        ) : (
          <p className="mt-[9px] text-[12px] text-[#72819B]">
            <span className="font-semibold text-[#142D52]">
              Klik atau seret foto KTP Anda
            </span>
            <span className="mx-1">·</span>
            JPG/PNG, maks 5MB
          </p>
        )}
      </button>
    </div>
  );
}
