import Image from "next/image";
import Link from "next/link";
import { Sparkles, Bug, ArrowRight, CheckCircle, Shield } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import HeroSlider from "@/components/HeroSlider";
import SectionHeader from "@/components/SectionHeader";
import TrustBadges from "@/components/TrustBadges";
import { HERO_SLIDES, SITE, STATS, img } from "@/lib/site";

const services = [
  {
    title: "Haşere İlaçlama",
    subtitle: "Balıkesir Haşere İlaçlama Hizmetlerimiz",
    desc: "Ev ve iş yerleriniz için etkili, güvenilir ve profesyonel haşere ilaçlama çözümleri.",
    href: "/hasere-ilaclama",
    image: "/2026/05/hasere-ilaclama-hizmet-kutusu.webp",
    icon: Bug,
    color: "from-emerald-600 to-teal-500",
  },
  {
    title: "Dezenfeksiyon İşlemleri",
    subtitle: "Profesyonel Dezenfeksiyon",
    desc: "Yaşam alanlarınız için hijyenik ve profesyonel dezenfeksiyon uygulamaları sunuyoruz.",
    href: "/dezenfeksiyon-hizmetleri",
    image: "/2026/05/dezenfeksiyon-islemleri-kutusu.webp",
    icon: Shield,
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "Temizlik Hizmetleri",
    subtitle: "Kapsamlı Temizlik",
    desc: "Profesyonel ekipman ve uzman kadromuzla kapsamlı temizlik hizmetleri sağlıyoruz.",
    href: "/temizlik",
    image: "/2026/05/temizlik-hizmetleri.webp",
    icon: Sparkles,
    color: "from-orange-500 to-amber-400",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSlider slides={[...HERO_SLIDES]} />

      <TrustBadges />

      {/* Services cards */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeader
            eyebrow="Hizmetlerimiz"
            title="Balıkesir'de Güvenilir Hizmet!"
            description="Atak İlaçlama ve Temizlik Hizmetleri olarak Balıkesir'de hızlı, etkili ve garantili çözümler sunuyoruz. Sağlığınızı korumak ve hijyen standartlarını yükseltmek için profesyonel ekibimizle yanınızdayız!"
          />

          <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="animated-item card-elevated group overflow-hidden hover:-translate-y-1"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={img(s.image)}
                    alt={s.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${s.color} opacity-60`} />
                  <s.icon className="absolute bottom-4 left-4 h-8 w-8 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900">{s.title}</h3>
                  <p className="mt-1 text-sm font-medium text-brand-600">{s.subtitle}</p>
                  <p className="mt-3 text-sm text-slate-600">{s.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 group-hover:gap-2 transition-all">
                    Detaylı Bilgi <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Hizmetlerimiz */}
      <section className="section-muted section-padding">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeader
            eyebrow="Detaylı Bilgi"
            title="Hizmetlerimiz"
            description="İlaçlama ve temizlik alanında kapsamlı profesyonel çözümler."
          />
          <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-bold text-brand-700">
                Atak İlaçlama ve Temizlik Hizmetleri
              </h3>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Balıkesir ve çevresinde hijyenik, sağlıklı ve ferah bir yaşam alanı
                sunmak için buradayız! Ev temizliği, işyeri temizliği, apartman
                temizliği, inşaat sonrası temizlik ve merdiven temizliği gibi birçok
                hizmetimizle, yaşam alanlarınızı profesyonelce temizliyor, hijyen
                standartlarını en üst seviyeye çıkarıyoruz. Ayrıca, haşere ve
                kemirgen sorunlarına karşı etkili ilaçlama hizmetleri sunarak,
                yaşam alanlarınızı güvenli hale getiriyoruz
              </p>

              <h4 className="mt-8 text-lg font-bold text-slate-900">İlaçlama Hizmetleri</h4>
              <p className="mt-2 text-slate-600">
                Ev, iş yeri, depo, bahçe ve tüm yaşam alanlarınızda haşere ve
                kemirgen sorunlarına kalıcı çözümler sunuyoruz..
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "Böcek ilaçlama (hamam böceği, karınca, pire, kene vb.)",
                  "Fare ve sıçan kontrolü",
                  "Yılan, akrep, örümcek gibi tehlikeli canlılara karşı koruma",
                  "Düzenli periyodik ilaçlama hizmeti",
                  "Kullandığımız ilaçlar Sağlık Bakanlığı onaylı ve çevre dostudur",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-slate-600">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="animated-item relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-200/50">
              <Image
                src={img("/2026/04/atak-ilaclama-hizmeti-1.webp")}
                alt="İlaçlama Hizmeti"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 rounded-lg bg-brand-600/90 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
                Profesyonel İlaçlama
              </div>
            </div>
          </div>

          <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
            <div className="animated-item relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-200/50 lg:order-1">
              <Image
                src={img("/2026/04/atak-temizlik-hizmeti.webp")}
                alt="Temizlik Hizmeti"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 rounded-lg bg-accent-600/90 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
                Hijyen Garantili Temizlik
              </div>
            </div>
            <div className="lg:order-2">
              <h4 className="text-lg font-bold text-slate-900">Temizlik Hizmetleri</h4>
              <p className="mt-2 text-slate-600">
                Profesyonel ekipman ve güvenilir temizlik ürünleriyle hijyen garantili
                temizlik hizmeti sağlıyoruz.
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "Ev ve apartman temizliği",
                  "Ofis ve iş yeri temizliği.",
                  "İnşaat sonrası temizlik",
                  "Cam ve dış cephe temizliği",
                  "Hijyen önceliğimizdir! Detaylı ve titiz temizlikle fark yaratıyoruz",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-slate-600">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="gradient-dark section-padding text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeader
            eyebrow="Rakamlarla Atak"
            title="Atak İlaçlama ve Temizlik Hizmeti"
            description="Balıkesir ve çevresinde güvenle hizmet veriyoruz."
            light
          />
          <div className="mt-10 grid grid-cols-2 gap-4 sm:mt-14 sm:gap-5 lg:grid-cols-3">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="animated-item rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur transition hover:border-brand-400/30 hover:bg-white/10 sm:p-8"
              >
                <p className="text-2xl font-bold text-accent-400 sm:text-4xl lg:text-5xl">{stat.value}</p>
                <p className="mt-2 font-semibold text-white">{stat.label}</p>
                <p className="mt-1 text-sm text-slate-400">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section-muted section-padding">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeader
            eyebrow="Kurumsal"
            title="Hakkımızda"
            align="left"
          />
          <div className="mt-8 grid grid-cols-1 gap-8 sm:mt-10 sm:gap-12 lg:grid-cols-2">
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Atak İlaçlama ve Temizlik Hizmetleri, beş yıldır Balıkesir ve
                çevresinde profesyonel haşere ilaçlama, dezenfeksiyon ve temizlik
                hizmetleri sunmaktadır. Uzman ekibimizle, güvenilir ve etkili
                çözümler sağlayarak müşteri memnuniyetini ön planda tutan
                çalışmalar gerçekleştirmekteyiz.
              </p>
              <p>
                Şirketimiz, Sağlık Bakanlığı onaylı ilaçlar ve ekipmanlar
                kullanarak hijyen standartlarını en üst seviyeye çıkarmakta, ev,
                iş yeri, villa, apartman, site ve endüstriyel tesisler için özel
                ilaçlama ve temizlik hizmetleri sunmaktadır.
              </p>
              <p className="font-medium text-slate-800">
                Beş yıldır başarıyla yürüttüğümüz hizmetlerimiz:
              </p>
              <ul className="space-y-2">
                {[
                  "Haşere kontrolü ve zararlı organizmaların önlenmesi",
                  "Nano gümüş ve ozon teknolojileri ile ileri düzey dezenfeksiyon",
                  "Çevre dostu ve sürdürülebilir ilaçlama yöntemleri",
                  "Profesyonel ekipmanlarla detaylı temizlik hizmetleri",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>
                Misyonumuz, yaşam alanlarında sağlıklı ve hijyenik ortamlar
                sağlamak, yüksek kalite standartlarıyla müşterilerimize güvenilir
                hizmet sunmaktır.
              </p>
            </div>
            <div className="animated-item overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200/50">
              <iframe
                src={SITE.mapEmbed}
                className="h-64 w-full sm:h-80 lg:min-h-[400px] lg:h-full"
                loading="lazy"
                title="Atak İlaçlama Konum"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-padding section-pattern">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeader
            eyebrow="İletişim"
            title="Bize Ulaşın"
            description="Sorularınız veya hizmet talepleriniz için formu doldurun, sizi arayalım."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:gap-8 lg:grid-cols-2">
            <ContactForm />
            <ContactForm
              title="Rezervasyon Talebi"
              subtitle="Lütfen bilgilerinizi eksiksiz doldurunuz."
              variant="reservation"
            />
          </div>
        </div>
      </section>
    </>
  );
}
