import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Award,
  ExternalLink,
} from "lucide-react";
import { SectionLabel, SectionTitle } from "@/components/home/ui";
import ContactQuoteForm from "@/components/contact/ContactQuoteForm";
import ContactFaq from "@/components/contact/ContactFaq";
import { WORKING_HOURS } from "@/lib/contact-data";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Ücretsiz keşif, fiyat teklifi veya acil müdahale için hemen arayın. 7/24 destek hattımız her zaman yanınızda.",
};

const mapUrl = `https://maps.google.com/?q=${encodeURIComponent(SITE.address)}`;

export default function IletisimPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-slate-100 bg-white py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-6 flex items-center gap-1 text-sm text-slate-400">
            <Link href="/" className="hover:text-accent-blue">
              Atak İlaçlama
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-slate-600">İletişim</span>
          </nav>
          <p className="text-xs font-bold uppercase tracking-widest text-accent-blue">
            ATAK İLAÇLAMA — BALIKESİR
          </p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            Bize Ulaşın
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-500">
            Ücretsiz keşif, fiyat teklifi veya acil müdahale için hemen arayın.
            7/24 destek hattımız her zaman yanınızda.
          </p>
        </div>
      </section>

      {/* Quick contact bar */}
      <section className="bg-navy py-6 sm:py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-3">
            <a
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-4 rounded-2xl bg-white/5 px-5 py-5 transition hover:bg-white/10"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-blue/20">
                <Phone className="h-5 w-5 text-accent-blue" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Telefon
                </p>
                <p className="mt-0.5 text-lg font-bold text-white">{SITE.phoneDisplay}</p>
              </div>
            </a>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl bg-white/5 px-5 py-5 transition hover:bg-white/10"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/20">
                <svg className="h-5 w-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  WhatsApp
                </p>
                <p className="mt-0.5 text-lg font-bold text-white">Hemen Yaz</p>
              </div>
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-4 rounded-2xl bg-white/5 px-5 py-5 transition hover:bg-white/10"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-400/20">
                <Mail className="h-5 w-5 text-violet-300" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  E-Posta
                </p>
                <p className="mt-0.5 truncate text-sm font-bold text-white sm:text-base">
                  {SITE.email}
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Contact info + Form */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionLabel>İLETİŞİM BİLGİLERİ</SectionLabel>
              <SectionTitle dark="Nerede, Nasıl" highlight="Bulursunuz?" />

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent-blue" />
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">
                      Adres
                    </p>
                    <p className="mt-1 font-medium text-slate-800">{SITE.address}</p>
                    <a
                      href={mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-accent-blue hover:underline"
                    >
                      Haritada Göster →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent-blue" />
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">
                      Telefon & WhatsApp
                    </p>
                    <a
                      href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                      className="mt-1 block text-lg font-bold text-accent-blue hover:underline"
                    >
                      {SITE.phoneDisplay}
                    </a>
                    <a
                      href={`https://wa.me/${SITE.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-sm text-slate-500 hover:text-accent-blue"
                    >
                      WhatsApp ile yazın
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent-blue" />
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">
                      E-Posta
                    </p>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="mt-1 font-medium text-accent-blue hover:underline"
                    >
                      {SITE.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Award className="mt-0.5 h-5 w-5 shrink-0 text-accent-blue" />
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">
                      Ünvan
                    </p>
                    <p className="mt-1 font-medium text-slate-800">{SITE.name}</p>
                    <p className="mt-1 text-sm text-slate-500">
                      Sağlık Bakanlığı onaylı biyosidal ürünlerle hizmet
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent-blue" />
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">
                      Çalışma Saatleri
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {WORKING_HOURS.map((row) => (
                        <li
                          key={row.day}
                          className="flex items-center justify-between gap-4 text-sm"
                        >
                          <span className="text-slate-600">{row.day}</span>
                          <span
                            className={`font-semibold ${
                              "highlight" in row && row.highlight
                                ? "text-accent-blue"
                                : "muted" in row && row.muted
                                  ? "text-slate-400"
                                  : "text-slate-800"
                            }`}
                          >
                            {row.hours}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <ContactQuoteForm />
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-slate-50 py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900 sm:text-xl">
            <MapPin className="h-5 w-5 text-red-500" />
            Ofisimiz — Bahçelievler / Balıkesir
          </h2>
          <div className="relative mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute left-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 shadow-sm transition hover:border-accent-blue hover:text-accent-blue"
            >
              Haritalar&apos;da aç
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <iframe
              src={SITE.mapEmbed}
              className="h-72 w-full sm:h-96"
              loading="lazy"
              title="Atak İlaçlama Konum"
            />
          </div>
        </div>
      </section>

      <ContactFaq />
    </>
  );
}
