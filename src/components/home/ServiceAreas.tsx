import { SERVICE_AREAS } from "@/lib/home-data";
import { SectionLabel, SectionTitle, SectionDesc } from "./ui";
import { SITE } from "@/lib/site";

export default function ServiceAreas() {
  return (
    <section className="bg-slate-50 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="animated-item text-center">
          <SectionLabel>HİZMET BÖLGELERİ</SectionLabel>
          <SectionTitle dark="Balıkesir'in" highlight="Her İlçesindeyiz" />
          <SectionDesc>
            <span className="mx-auto">
              Merkez, sahil ve sanayi bölgeleri dahil. İlçenize özel planlama için bizi
              arayın.
            </span>
          </SectionDesc>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_AREAS.map((area) => (
            <div
              key={area.title}
              className="animated-item rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
            >
              <span className="text-2xl">{area.icon}</span>
              <h3 className="mt-4 font-bold text-slate-900">{area.title}</h3>
              <p className="mt-1 text-sm text-slate-500">{area.desc}</p>
              <p className="mt-4 text-xs leading-relaxed text-slate-400">{area.districts}</p>
            </div>
          ))}
        </div>
        <p className="animated-item mt-8 text-center text-sm text-slate-500">
          İlçenizi görmüyor musunuz? Büyük ihtimalle oraya da hizmet veriyoruz —{" "}
          <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="font-semibold text-accent-blue hover:underline">
            bizi arayın.
          </a>
        </p>
      </div>
    </section>
  );
}
