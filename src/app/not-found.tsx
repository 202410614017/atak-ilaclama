import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-bold text-brand-600">404</h1>
      <p className="mt-4 text-xl text-slate-600">Sayfa bulunamadı</p>
      <Link
        href="/"
        className="mt-8 rounded-full gradient-cta px-8 py-3 font-semibold text-white"
      >
        Anasayfaya Dön
      </Link>
    </div>
  );
}
