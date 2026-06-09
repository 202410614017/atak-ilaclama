import Image from "next/image";
import { img } from "@/lib/site";
import { WHY_US } from "@/lib/home-data";
import { SectionLabel, SectionTitle } from "./ui";

export default function WhyUs() {
  return (
    <section className="bg-navy py-14 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animated-item">
            <SectionLabel>NEDEN ATAK İLAÇLAMA?</SectionLabel>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Fark <span className="text-accent-blue">Somut</span>
            </h2>
            <p className="mt-4 text-slate-400">
              Her firmada &apos;garantili&apos; yazar. Bizi farklı kılan ölçülebilir unsurlar:
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {WHY_US.map((item) => (
                <div
                  key={item.title}
                  className="animated-item rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <span className="text-xl">{item.icon}</span>
                  <h3 className="mt-3 font-bold">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="animated-item overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10">
            <div className="relative aspect-[4/5]">
              <Image
                src={img("/2026/05/hamam-bocegi-ilaclama-hizmet.webp")}
                alt="Profesyonel ilaçlama ekibi"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
