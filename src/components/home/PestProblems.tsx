import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PEST_PROBLEMS } from "@/lib/home-data";
import { SectionLabel, SectionTitle, SectionDesc } from "./ui";

export default function PestProblems() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="animated-item text-center">
          <SectionLabel>HANGİ HAŞERE SORUNU?</SectionLabel>
          <SectionTitle dark="Balıkesir'de" highlight="Her Haşereye Özel Çözüm" />
          <SectionDesc>
            <span className="mx-auto">
              Haşere türünü seçin, detaylı bilgi alın. Her türe özel uygulama protokolü
              uyguluyoruz.
            </span>
          </SectionDesc>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PEST_PROBLEMS.map((p) => (
            <Link
              key={p.title}
              href={p.href}
              className="animated-item group rounded-2xl border border-slate-100 bg-slate-50/50 p-6 transition hover:border-accent-blue/30 hover:bg-white hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <span className="text-3xl">{p.icon}</span>
                <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${p.badgeColor}`}>
                  {p.badge}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{p.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-blue group-hover:gap-2 transition-all">
                Detaylı bilgi <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
