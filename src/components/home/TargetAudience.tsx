import { TARGETS } from "@/lib/home-data";
import { SectionLabel, SectionTitle, SectionDesc } from "./ui";

export default function TargetAudience() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="animated-item text-center">
          <SectionLabel>KİME HİZMET VERİYORUZ?</SectionLabel>
          <SectionTitle dark="Her Mekana" highlight="Özel Çözüm" />
          <SectionDesc>
            <span className="mx-auto">
              Ev sahibinden otele, restorana ve fabrikaya — mekan tipine göre doğru
              protokol.
            </span>
          </SectionDesc>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TARGETS.map((t) => (
            <div
              key={t.title}
              className="animated-item rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <span className="text-2xl">{t.icon}</span>
              <h3 className="mt-4 font-bold text-slate-900">{t.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{t.desc}</p>
              <span className="mt-4 inline-block rounded-full bg-accent-blue/10 px-3 py-1 text-xs font-semibold text-accent-blue">
                {t.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
