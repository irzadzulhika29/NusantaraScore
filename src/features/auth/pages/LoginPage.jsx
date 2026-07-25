import BrandSection from "../components/BrandSection";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  return (
    <main className="min-h-screen w-full bg-white font-sans text-slate-800">
      <div className="flex min-h-screen w-full">
        <BrandSection />
        <section className="relative flex w-[46%] items-center justify-center bg-white px-12">
          <div className="absolute right-[45px] top-[36px] rounded-full border border-slate-200 px-3 py-1 text-[11px] font-medium text-slate-500">
            v1.0 — Tahap POC
          </div>
          <LoginForm />
        </section>
      </div>
    </main>
  );
}
