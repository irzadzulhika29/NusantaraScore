import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./features/auth/pages/LoginPage";
import OnboardingPage from "./features/umkm/onboarding/pages/OnboardingPage";
import BusinessVerificationPage from "./features/umkm/verification/pages/BusinessVerificationPage";
import DataPermissionPage from "./features/umkm/permission/pages/DataPermissionPage";
import ScoreCalculationPage from "./features/umkm/result/pages/ScoreCalculationPage";
import DashboardPage from "./features/umkm/dashboard/pages/DashboardPage";
import FaktorRekomendasiPage from "./features/umkm/faktor/pages/FaktorRekomendasiPage";
import KetahananDetailPage from "./features/umkm/faktor/pages/KetahananDetailPage";
import RiwayatSkorPage from "./features/umkm/riwayat/pages/RiwayatSkorPage";
import DataIzinAksesPage from "./features/umkm/dataizin/pages/DataIzinAksesPage";
import BantuanPage from "./features/umkm/bantuan/pages/BantuanPage";
import BankDashboardPage from "./features/bank/pages/BankDashboardPage";
import UMKMDetailPage from "./features/bank/pages/UMKMDetailPage";
import LandingPage from "./features/landing/pages/LandingPage";

export default function App() {
  return (
    <Routes>
      {/* Shared */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<LandingPage />} />

      {/* UMKM */}
      <Route path="/register" element={<OnboardingPage />} />
      <Route path="/verification" element={<BusinessVerificationPage />} />
      <Route path="/permission" element={<DataPermissionPage />} />
      <Route path="/result" element={<ScoreCalculationPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/faktor" element={<FaktorRekomendasiPage />} />
      <Route path="/faktor/ketahanan" element={<KetahananDetailPage />} />
      <Route path="/riwayat" element={<RiwayatSkorPage />} />
      <Route path="/data-izin" element={<DataIzinAksesPage />} />
      <Route path="/bantuan" element={<BantuanPage />} />

      {/* Bank */}
      <Route path="/bank/dashboard" element={<BankDashboardPage />} />
      <Route path="/bank/umkm/:id" element={<UMKMDetailPage />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
