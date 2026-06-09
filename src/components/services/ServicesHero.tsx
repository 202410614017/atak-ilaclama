import Link from "next/link";
import { Phone, ChevronRight, Check } from "lucide-react";
import { SITE } from "@/lib/site";
import { BtnNavy, BtnWhatsApp } from "@/components/home/ui";

const TRUST_TAGS = [
  "Aynı Gün Hizmet",
  "Ücretsiz Keşif",
  "%100 Garanti",
  "Bakanlık Onaylı",
];

const STATS = [
  { value: "5+", label: "Yıl Deneyim" },
  { value: "15+", label: "Hizmet Türü" },
  { value: "20+", label: "İlçe" },
  { value: "4.9★", label: "Müşteri Puanı" },
];

export default function ServicesHero() {
  return (
    <section className="border-b border-slate-100 bg-white py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="mb-6 flex items-center gap-1 text-sm text-slate-400">
          <Link href="/" className="hover:text-accent-blue">Atak İlaçlama</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-slate-600">Hizmetlerimiz</span>
        </nav>

        <div className="grid items-start gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-accent-blue">
              📋 TÜM HİZMETLERİMİZ
            </p>
            <h1 className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Haşereye Özel,
              <br />
              <span className="text-accent-blue">Mekana Uygun</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-500">
              <strong className="text-slate-700">5+ yıllık deneyim</strong> ile Balıkesir
              genelinde her haşere türüne ve mekan tipine özel protokoller uyguluyoruz.
              Sağlık Bakanlığı onaylı ürünler, aynı gün servis ve kesin çözüm garantisi.
            </p>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {TRUST_TAGS.map((tag) => (
                <span key={tag} className="inline-flex items-center gap-1.5 text-sm text-slate-600">
                  <Check className="h-4 w-4 text-emerald-500" />
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <BtnNavy href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="w-full sm:w-auto">
                <Phone className="h-4 w-4" />
                Hemen Ara
              </BtnNavy>
              <BtnWhatsApp className="w-full sm:w-auto" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:w-[340px]">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-slate-100 bg-white px-4 py-5 text-center shadow-sm sm:px-5 sm:py-6"
              >
                <p className="text-2xl font-bold text-accent-blue sm:text-3xl">{s.value}</p>
                <p className="mt-1 text-xs text-slate-400 sm:text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
