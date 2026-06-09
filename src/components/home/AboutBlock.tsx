import Link from "next/link";
import { SectionLabel } from "./ui";

export default function AboutBlock() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animated-item">
            <SectionLabel>HAKKIMIZDA</SectionLabel>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
              Atak İlaçlama <span className="text-accent-blue">Kimdir?</span>
            </h2>
            <p className="mt-5 text-slate-500 leading-relaxed">
              Beş yıldır Balıkesir ve çevresinde profesyonel haşere ilaçlama, dezenfeksiyon
              ve temizlik hizmetleri sunuyoruz. Sağlık Bakanlığı onaylı ilaçlar ve
              ekipmanlarla hijyen standartlarını en üst seviyeye çıkarıyoruz.
            </p>
            <p className="mt-4 text-slate-500 leading-relaxed">
              Ev, iş yeri, villa, apartman, site ve endüstriyel tesisler için özel
              ilaçlama ve temizlik hizmetleri sunmaktayız.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Sağlık Bakanlığı Onaylı", "Uzman Ekip", "5+ Yıl", "Balıkesir Merkezli"].map(
                (badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
                  >
                    {badge}
                  </span>
                )
              )}
            </div>
            <Link
              href="/hakkimizda"
              className="mt-6 inline-block text-sm font-semibold text-accent-blue hover:underline"
            >
              Daha fazla bilgi →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "5+", label: "Yıl Deneyim" },
              { value: "498+", label: "Çözülen Vaka" },
              { value: "9+", label: "Uzman Ekip" },
              { value: "4.9★", label: "Müşteri Puanı" },
            ].map((s) => (
              <div
                key={s.label}
                className="animated-item rounded-2xl border border-slate-100 bg-slate-50 p-6 text-center"
              >
                <p className="text-3xl font-bold text-accent-blue">{s.value}</p>
                <p className="mt-1 text-sm text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
