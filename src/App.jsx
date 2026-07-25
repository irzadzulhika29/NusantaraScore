import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./features/auth/pages/LoginPage";
import OnboardingPage from "./features/onboarding/pages/OnboardingPage";
import BusinessVerificationPage from "./features/verification/pages/BusinessVerificationPage";
import DataPermissionPage from "./features/permission/pages/DataPermissionPage";
import ScoreCalculationPage from "./features/result/pages/ScoreCalculationPage";
import DashboardPage from "./features/dashboard/pages/DashboardPage";
import FaktorRekomendasiPage from "./features/faktor/pages/FaktorRekomendasiPage";
import KetahananDetailPage from "./features/faktor/pages/KetahananDetailPage";
import RiwayatSkorPage from "./features/riwayat/pages/RiwayatSkorPage";
import DataIzinAksesPage from "./features/dataizin/pages/DataIzinAksesPage";
import BantuanPage from "./features/bantuan/pages/BantuanPage";
import LandingPage from "./features/landing/pages/LandingPage";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
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
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
