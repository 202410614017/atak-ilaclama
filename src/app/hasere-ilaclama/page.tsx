import type { Metadata } from "next";
import Link from "next/link";
import ServicesHero from "@/components/services/ServicesHero";
import ServiceCard from "@/components/services/ServiceCard";
import ServicesCta from "@/components/services/ServicesCta";
import { SectionLabel, SectionTitle, SectionDesc } from "@/components/home/ui";
import {
  PEST_GRID,
  VENUE_SERVICES,
  SPECIAL_SERVICES,
  BALIKESIR_DISTRICTS,
} from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Balıkesir Haşere İlaçlama Hizmetleri",
  description:
    "Balıkesir'de hamam böceği, fare, tahtakurusu ve tüm haşere türlerine özel profesyonel ilaçlama hizmetleri.",
};

export default function HasereIlaclamaPage() {
  return (
    <>
      <ServicesHero />

      {/* Haşere türüne göre */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>HAŞERE TÜRÜNE GÖRE</SectionLabel>
          <SectionTitle dark="Haşere Türüne" highlight="Özel Çözümler" />
          <SectionDesc>
            Her haşerenin yaşam döngüsü farklıdır. Tür tespiti yapılmadan uygulanan
            ilaçlama genellikle geçici sonuç verir. Aşağıdaki her kategori için özel
            protokolümüz ve detaylı bilgi sayfamız mevcuttur.
          </SectionDesc>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {PEST_GRID.map((s) => (
              <ServiceCard
                key={s.slug}
                icon={s.icon}
                title={s.title.replace(" İlaçlama", "").replace(" Dezenfeksiyon", "")}
                desc={s.detail}
                href={s.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Mekan türüne göre */}
      <section className="bg-slate-50 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>MEKAN TÜRÜNE GÖRE</SectionLabel>
          <SectionTitle dark="Mekanınıza" highlight="Uygun Çözüm" />
          <SectionDesc>
            Ev, restoran, fabrika — her mekanın haşere riski farklıdır. Mekan tipine
            göre doğru protokol ve ekipman seçimi yapıyoruz.
          </SectionDesc>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {VENUE_SERVICES.map((v) => (
              <ServiceCard
                key={v.title}
                icon={v.icon}
                title={v.title}
                desc={v.desc}
                href={v.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Özel hizmetler */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>ÖZEL HİZMETLER</SectionLabel>
          <SectionTitle dark="Anlaşmalı ve" highlight="Uzmanlık Gerektiren" />
          <SectionDesc>
            Tek seferlik uygulamanın ötesinde — periyodik koruma, dezenfeksiyon ve
            temizlik için uzmanlaşmış hizmetler.
          </SectionDesc>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {SPECIAL_SERVICES.map((s) => (
              <ServiceCard
                key={s.title}
                icon={s.icon}
                title={s.title}
                desc={s.desc}
                href={s.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* İlçeler */}
      <section className="bg-slate-50 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>BALIKESİR GENELİ HİZMET</SectionLabel>
          <SectionTitle dark="Tüm" highlight="İlçelerde" />
          <SectionDesc>
            Merkez ilçelerden Edremit ve Ayvalık&apos;a, Bandırma ve Gönen&apos;e kadar
            Balıkesir&apos;in tamamında hizmet veriyoruz. Sabah aradığınızda aynı gün
            gelebiliriz.
          </SectionDesc>
          <div className="mt-10 flex flex-wrap gap-3">
            {BALIKESIR_DISTRICTS.map((d) => (
              <Link
                key={d}
                href="/iletisim"
                className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-accent-blue hover:text-accent-blue"
              >
                {d}
              </Link>
            ))}
            <Link
              href="/iletisim"
              className="rounded-full border border-accent-blue bg-accent-blue/5 px-5 py-2.5 text-sm font-semibold text-accent-blue"
            >
              Tüm İlçeler →
            </Link>
          </div>
        </div>
      </section>

      <ServicesCta />
    </>
  );
}
