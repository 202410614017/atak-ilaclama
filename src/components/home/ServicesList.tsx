import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { img, SITE } from "@/lib/site";
import { FEATURED_SERVICES } from "@/lib/home-data";
import { SectionLabel, SectionTitle, SectionDesc } from "./ui";

export default function ServicesList() {
  return (
    <section className="bg-white pb-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="animated-item overflow-hidden rounded-3xl shadow-lg ring-1 ring-slate-200/60">
            <div className="relative aspect-[4/5] sm:aspect-[3/4]">
              <Image
                src={img("/2026/05/balikesir-hasere-ilaclama.webp")}
                alt="Haşere ilaçlama hizmeti"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="animated-item">
            <SectionLabel>HİZMETLERİMİZ</SectionLabel>
            <SectionTitle dark="Her Zararlıya" highlight="Özel Yöntem" />
            <SectionDesc>
              Alanın durumuna göre planlanan, doğru ekipman ve Bakanlık onaylı ürünlerle
              uygulanan kalıcı çözümler.
            </SectionDesc>
            <div className="mt-8 divide-y divide-slate-100">
              {FEATURED_SERVICES.map((s) => (
                <div key={s.title} className="animated-item py-6 first:pt-0">
                  <div className="flex items-baseline gap-3">
                    <span className="text-2xl font-light text-accent-blue/60">{s.num}</span>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900">{s.title}</h3>
                      <Link
                        href={s.href}
                        className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-accent-blue hover:underline"
                      >
                        Detaylı bilgi <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                      <p className="mt-2 text-sm leading-relaxed text-slate-500">{s.desc}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {s.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="animated-item mt-14 bg-navy">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-5 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-wide text-accent-blue">
            Haşere sorununuz mu var?
          </p>
          <a
            href={`tel:${SITE.phone.replace(/\s/g, "")}`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-navy transition hover:bg-slate-100 sm:w-auto"
          >
            <Phone className="h-4 w-4" />
            Hemen Ara
          </a>
        </div>
      </div>
    </section>
  );
}
