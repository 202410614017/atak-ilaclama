import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PERIODIC_FEATURES } from "@/lib/home-data";
import { SectionLabel, SectionTitle, SectionDesc } from "./ui";

export default function PeriodicPlan() {
  return (
    <section className="bg-slate-50 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="animated-item text-center">
          <SectionLabel>DÜZENLİ KORUMA</SectionLabel>
          <SectionTitle dark="Periyodik İlaçlama" highlight="Anlaşması" />
          <SectionDesc>
            <span className="mx-auto">
              Haşere sorununu oluşmadan önlemek, oluştuktan sonra mücadele etmekten çok
              daha ekonomiktir. Aylık plan ile işletmenizi koruma altına alın.
            </span>
          </SectionDesc>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PERIODIC_FEATURES.map((f) => (
            <div
              key={f.title}
              className="animated-item rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
            >
              <span className="text-2xl">{f.icon}</span>
              <h3 className="mt-4 font-bold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{f.desc}</p>
            </div>
          ))}
        </div>
        <div className="animated-item mt-10 text-center">
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-navy-light"
          >
            Periyodik Anlaşma Detayları <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
