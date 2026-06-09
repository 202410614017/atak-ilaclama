import { PROCESS_STEPS } from "@/lib/home-data";
import { SectionLabel, SectionTitle } from "./ui";

export default function ProcessSteps() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="animated-item text-center">
          <SectionLabel>SÜREÇ</SectionLabel>
          <SectionTitle dark="Nasıl" highlight="Çalışır?" />
        </div>
        <div className="animated-item mt-10 overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step, i) => (
              <div
                key={step.num}
                className={`p-6 sm:p-8 ${i < PROCESS_STEPS.length - 1 ? "border-b border-slate-100 lg:border-b-0 lg:border-r" : ""}`}
              >
                <span className="text-4xl font-light text-slate-200">{step.num}</span>
                <span className="mt-4 block text-2xl">{step.icon}</span>
                <h3 className="mt-4 font-bold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
