import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, CheckCircle, ChevronRight } from "lucide-react";
import { img, SITE } from "@/lib/site";

export type AsideLink = { title: string; href: string };

type Props = {
  image?: { src: string; alt: string };
  cta?: {
    title: string;
    description: string;
    href: string;
    label?: string;
  };
  links?: { title: string; items: AsideLink[] };
  children?: React.ReactNode;
};

export default function PageAside({ image, cta, links, children }: Props) {
  return (
    <aside className="flex w-full min-w-0 flex-col gap-4 sm:gap-5 lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:w-auto lg:self-start lg:overflow-y-auto">
      {image && (
        <div className="animated-item overflow-hidden rounded-2xl shadow-md ring-1 ring-slate-200/70">
          <div className="relative aspect-[16/10] w-full sm:aspect-[4/3]">
            <Image
              src={img(image.src)}
              alt={image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 320px"
              className="object-cover"
            />
          </div>
        </div>
      )}

      {cta && (
        <div className="rounded-2xl bg-gradient-to-br from-brand-600 to-brand-700 p-5 text-white shadow-lg sm:p-6">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold">{cta.title}</h3>
              <p className="mt-1 text-sm text-white/85">{cta.description}</p>
            </div>
          </div>
          <Link
            href={cta.href}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-brand-700 transition hover:bg-brand-50"
          >
            {cta.label ?? "Hemen Ara"}
          </Link>
        </div>
      )}

      {links && links.items.length > 0 && (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">
            {links.title}
          </h3>
          <ul className="mt-3 divide-y divide-slate-100">
            {links.items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex min-h-[44px] items-center justify-between gap-2 py-3 text-sm text-slate-600 transition active:bg-slate-50 hover:text-brand-600"
                >
                  <span className="line-clamp-2">{item.title}</span>
                  <ChevronRight className="h-4 w-4 shrink-0 text-slate-300" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {children}
    </aside>
  );
}

export function AsideContactInfo({ showRegion = true }: { showRegion?: boolean }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <h3 className="font-bold text-slate-900">İletişim Bilgileri</h3>
      <ul className="mt-4 space-y-3 text-sm text-slate-600">
        <li className="flex items-start gap-2.5">
          <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
          <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="break-all hover:text-brand-600">
            {SITE.phone}
          </a>
        </li>
        <li className="flex items-start gap-2.5">
          <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
          <a href={`mailto:${SITE.email}`} className="break-all hover:text-brand-600">
            {SITE.email}
          </a>
        </li>
        <li className="flex items-start gap-2.5">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
          <span>{SITE.address}</span>
        </li>
        {showRegion && (
          <li className="flex items-start gap-2.5">
            <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
            Hizmet Bölgesi: Balıkesir ve çevresi
          </li>
        )}
      </ul>
    </div>
  );
}
