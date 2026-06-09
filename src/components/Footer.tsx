import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { SITE, PEST_SERVICES, img } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src={img("/2026/04/atak-ilaclama-logo.png")}
              alt={SITE.name}
              width={150}
              height={40}
              className="h-9 w-auto"
            />
            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              Balıkesir&apos;de Sağlık Bakanlığı onaylı haşere ilaçlama, dezenfeksiyon
              ve temizlik firması. 5+ yıllık deneyim.
            </p>
            <div className="mt-4 flex flex-col gap-2 text-sm">
              <a
                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 font-semibold text-accent-blue hover:underline"
              >
                <Phone className="h-4 w-4" />
                {SITE.phoneDisplay}
              </a>
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-accent-blue hover:underline"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Hizmetler
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-500">
              {PEST_SERVICES.slice(0, 8).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/hasere-ilaclama/${s.slug}`}
                    className="transition hover:text-accent-blue"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Bölgeler
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-500">
              {["Karesi", "Altıeylül", "Edremit", "Bandırma", "Ayvalık", "Gönen", "Burhaniye", "Erdek"].map(
                (d) => (
                  <li key={d}>
                    <Link href="/iletisim" className="transition hover:text-accent-blue">
                      {d} İlaçlama
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Sayfalar
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-500">
              <li><Link href="/hakkimizda" className="hover:text-accent-blue">Hakkımızda</Link></li>
              <li><Link href="/blog" className="hover:text-accent-blue">Blog</Link></li>
              <li><Link href="/iletisim" className="hover:text-accent-blue">İletişim</Link></li>
              <li><Link href="/temizlik" className="hover:text-accent-blue">Temizlik</Link></li>
              <li><Link href="/kurumsal" className="hover:text-accent-blue">Kurumsal</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-100 pt-8 text-center text-sm text-slate-400">
          Tüm Hakları Saklıdır 2026 © {SITE.name}
        </div>
      </div>
    </footer>
  );
}
