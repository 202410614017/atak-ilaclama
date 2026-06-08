import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { SITE, NAV, img } from "@/lib/site";

export default function Footer() {
  return (
    <footer>
      <div className="gradient-cta px-4 py-12">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-white/70">
            Hemen Ulaşın
          </p>
          <p className="mt-2 text-lg text-white/90">
            Telefon Numaramız
          </p>
          <a
            href={`tel:${SITE.phone.replace(/\s/g, "")}`}
            className="mt-1 inline-block text-3xl font-bold text-white transition hover:underline lg:text-4xl"
          >
            {SITE.phoneDisplay}
          </a>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-accent-600 shadow-lg transition hover:shadow-xl"
            >
              <Phone className="h-4 w-4" />
              Sizi Arayalım
            </Link>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Online Talep Oluştur
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-slate-850 text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Image
                src={img("/2026/04/atak-ilaclama-logo.png")}
                alt={SITE.name}
                width={180}
                height={48}
                className="h-11 w-auto brightness-0 invert opacity-90"
              />
              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                Balıkesir ve çevresinde profesyonel haşere ilaçlama, dezenfeksiyon
                ve temizlik hizmetleri sunuyoruz.
              </p>
              <ul className="mt-5 space-y-3 text-sm text-slate-300">
                <li className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 shrink-0 text-brand-400" />
                  <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="hover:text-white transition">
                    {SITE.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                  {SITE.address}
                </li>
                <li className="flex items-center gap-2.5">
                  <Clock className="h-4 w-4 shrink-0 text-brand-400" />
                  {SITE.hours}
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 shrink-0 text-brand-400" />
                  <a href={`mailto:${SITE.email}`} className="hover:text-white transition">
                    {SITE.email}
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-2 lg:col-start-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-brand-400">
                Sayfalar
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
                {NAV.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="transition hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/hakkimizda" className="transition hover:text-white">
                    Hakkımızda
                  </Link>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-brand-400">
                Hizmetler
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
                <li>
                  <Link href="/hasere-ilaclama" className="transition hover:text-white">
                    Haşere İlaçlama
                  </Link>
                </li>
                <li>
                  <Link href="/dezenfeksiyon-hizmetleri" className="transition hover:text-white">
                    Dezenfeksiyon Hizmetleri
                  </Link>
                </li>
                <li>
                  <Link href="/temizlik" className="transition hover:text-white">
                    Temizlik Hizmetleri
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="transition hover:text-white">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-brand-400">
                Hizmet Bölgeleri
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                Karesi, Altıeylül, Edremit, Bandırma, Ayvalık, Gönen, Burhaniye
                ve Balıkesir genelinde hizmet veriyoruz.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-700/80 pt-8 text-sm text-slate-500 sm:flex-row">
            <p>Tüm Hakları Saklıdır 2026 © {SITE.name}</p>
            <p>BALIKESİR - Atak ilaçlama ve temizlik hizmetleri</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
