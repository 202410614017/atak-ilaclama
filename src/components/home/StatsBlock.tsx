import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function StatsBlock() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="animated-item text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-accent-blue">
            RAKAMLARLA ATAK
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            498&apos;den Fazla{" "}
            <span className="text-accent-blue">Çözülen Vaka</span>
          </h2>
        </div>
        <div className="animated-item mt-10 grid grid-cols-2 overflow-hidden rounded-2xl border border-slate-100">
          {[
            { value: "5+", label: "Yıl Deneyim", blue: false },
            { value: "498+", label: "Mutlu Müşteri", blue: true },
            { value: "%100", label: "Garanti Oranı", blue: true },
            { value: "4.9★", label: "Müşteri Puanı", blue: false },
          ].map((s, i) => (
            <div
              key={s.label}
              className={`p-8 text-center ${i < 2 ? "border-b border-slate-100" : ""} ${i % 2 === 0 ? "border-r border-slate-100" : ""}`}
            >
              <p className={`text-3xl font-bold sm:text-4xl ${s.blue ? "text-accent-blue" : "text-slate-900"}`}>
                {s.value}
              </p>
              <p className="mt-1 text-sm text-slate-400">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="animated-item mt-8 rounded-2xl border border-slate-100 bg-slate-50 p-6 sm:p-8">
          <p className="text-sm leading-relaxed text-slate-600">
            <strong>%94</strong> müşterimiz bizi çevresine tavsiye ediyor.{" "}
            <strong>İlk seferinde çözüm</strong> oranımız sektör ortalamasının üzerinde.{" "}
            <strong>Balıkesir genelinde</strong> aynı gün hizmet.
          </p>
          <Link
            href="/iletisim"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent-blue/10 px-5 py-2.5 text-sm font-semibold text-accent-blue transition hover:bg-accent-blue/20"
          >
            Siz de Katılın <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
