import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Check } from "lucide-react";
import { SectionLabel, SectionTitle } from "@/components/home/ui";
import AboutCta from "@/components/about/AboutCta";
import {
  ABOUT_STATS,
  PRINCIPLES,
  PROCESS_STEPS,
  TEAM,
  SERVICE_SCOPE,
  EXPERTISE,
} from "@/lib/about-data";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Atak İlaçlama ve Temizlik — Balıkesir'de 5+ yıllık deneyimle profesyonel haşere ilaçlama, dezenfeksiyon ve temizlik hizmetleri.",
};

export default function HakkimizdaPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-slate-100 bg-white py-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-6 flex items-center gap-1 text-sm text-slate-400">
            <Link href="/" className="hover:text-accent-blue">Atak İlaçlama</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-slate-600">Hakkımızda</span>
          </nav>
          <p className="text-xs font-bold uppercase tracking-widest text-accent-blue">
            ATAK İLAÇLAMA VE TEMİZLİK HİZMETLERİ
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Balıkesir&apos;in{" "}
            <span className="text-accent-blue">Güvenilir İlaçlama Firması</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-500">
            Beş yıldır Sağlık Bakanlığı onaylı ürünlerle, uzman ekip denetiminde
            Balıkesir ve çevresinde profesyonel haşere kontrolü, dezenfeksiyon ve
            temizlik hizmeti sunuyoruz.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-navy py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 divide-x divide-white/10 rounded-2xl bg-white/5 sm:grid-cols-4">
            {ABOUT_STATS.map((s) => (
              <div key={s.label} className="px-4 py-6 text-center sm:px-6 sm:py-8">
                <p
                  className={`text-2xl font-bold sm:text-3xl lg:text-4xl ${
                    s.highlight ? "text-accent-blue" : "text-white"
                  }`}
                >
                  {s.value}
                </p>
                <p className="mt-1 text-xs text-slate-400 sm:text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hikayemiz */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionLabel>HİKAYEMİZ</SectionLabel>
              <SectionTitle dark="5 Yılda" highlight="Büyüyen Deneyim" />
              <p className="mt-5 text-slate-500 leading-relaxed">
                Atak İlaçlama ve Temizlik Hizmetleri olarak beş yıldır Balıkesir ve
                çevresinde faaliyet gösteriyoruz. Evlerden restoranlara, otellerden
                fabrikalara kadar geniş bir yelpazede hizmet veriyoruz.
              </p>
              <p className="mt-4 text-slate-500 leading-relaxed">
                Sağlık Bakanlığı onaylı ilaçlar ve ekipmanlar kullanarak hijyen
                standartlarını en üst seviyeye çıkarıyor, müşteri memnuniyetini
                her zaman ön planda tutuyoruz.
              </p>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl border border-accent-blue/20 bg-accent-blue/5 p-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">🏅</span>
                  <div>
                    <h3 className="font-bold text-slate-900">Sağlık Bakanlığı Onaylı Firma</h3>
                    <p className="mt-2 text-sm text-slate-500">
                      Bakanlık onaylı biyosidal ürünlerle çalışıyor, her uygulamada
                      resmi standartlara uyuyoruz.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "%94", label: "Tavsiye Oranı" },
                  { value: "4.9★", label: "Müşteri Puanı" },
                  { value: "7/24", label: "Acil Destek" },
                  { value: "%100", label: "Çözüm Garantisi" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-slate-100 bg-slate-50 p-5 text-center"
                  >
                    <p className="text-2xl font-bold text-accent-blue">{item.value}</p>
                    <p className="mt-1 text-xs text-slate-500">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* İlkeler */}
      <section className="bg-slate-50 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <SectionLabel>MİSYON, VİZYON & DEĞERLER</SectionLabel>
            <SectionTitle dark="Bizi Biz Yapan" highlight="İlkeler" />
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PRINCIPLES.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
              >
                <span className="text-2xl">{p.icon}</span>
                <h3 className="mt-4 font-bold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Süreç */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <SectionLabel>HİZMET SÜRECİMİZ</SectionLabel>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
              Aramadan <span className="text-accent-blue">Garantiye</span> 4 Adım
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.num}
                className="rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm"
              >
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-navy text-sm font-bold text-white">
                  {step.num}
                </div>
                <h3 className="mt-4 font-bold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ekip */}
      <section className="bg-slate-50 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <SectionLabel>EKİBİMİZ</SectionLabel>
            <SectionTitle dark="Arkamızdaki" highlight="Uzman Kadro" />
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member) => (
              <div
                key={member.title}
                className="rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm"
              >
                <span className="text-3xl">{member.icon}</span>
                <h3 className="mt-4 font-bold text-slate-900">{member.title}</h3>
                <p className="mt-1 text-sm font-medium text-accent-blue">{member.role}</p>
                <p className="mt-3 text-sm text-slate-500">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kapsam + Uzmanlık */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionLabel>HİZMET KAPSAMI</SectionLabel>
              <SectionTitle dark="20+ İlçe," highlight="Her Mekan" />
              <ul className="mt-8 space-y-5">
                {SERVICE_SCOPE.map((scope) => (
                  <li key={scope.title} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent-blue" />
                    <div>
                      <p className="font-semibold text-slate-900">{scope.title}</p>
                      <p className="mt-0.5 text-sm text-slate-500">{scope.items}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionLabel>UZMANLIK ALANLARI</SectionLabel>
              <SectionTitle dark="Hangi" highlight="Haşereler?" />
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-2">
                {EXPERTISE.map((e) => (
                  <div
                    key={e.name}
                    className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3"
                  >
                    <span className="text-xl">{e.icon}</span>
                    <span className="text-sm font-medium text-slate-700">{e.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutCta />
    </>
  );
}
