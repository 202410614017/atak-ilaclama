import type { Metadata } from "next";

import Link from "next/link";

import { ArrowRight } from "lucide-react";

import PageHero from "@/components/PageHero";

import SectionHeader from "@/components/SectionHeader";

import ServiceCard from "@/components/ServiceCard";

import PageContent from "@/components/PageContent";

import PageAside from "@/components/PageAside";

import ContactForm from "@/components/ContactForm";

import { ContentWithAside, PageSection } from "@/components/ContentLayout";

import { getPage } from "@/lib/content";

import { CLEANING_SERVICES, serviceHref } from "@/lib/site";



export const metadata: Metadata = {

  title: "Balıkesir Temizlik Hizmetleri",

};



export default function TemizlikPage() {

  const page = getPage("temizlik")!;



  const quickLinks = CLEANING_SERVICES.map((s) => ({

    title: s.title,

    href: serviceHref(s.base, s.slug),

  }));



  return (

    <>

      <PageHero

        title="BALIKESİR DEZENFEKSİYON HİZMETLERİ"

        subtitle="Yaşam alanlarınızı, iş yerlerinizi ve ortak kullanım alanlarınızı virüs, bakteri ve mikroorganizmalara karşı etkili dezenfeksiyon uygulamalarıyla daha hijyenik ve sağlıklı hale getiriyoruz."

        badge="SAĞLIKLI BİR YAŞAM İÇİN"

        image="/2026/05/balikesir-dezenfeksiyon.webp"

        breadcrumb={[

          { label: "Anasayfa", href: "/" },

          { label: "Temizlik", href: "/temizlik" },

        ]}

      />



      <PageSection>

        <ContentWithAside

          main={

            <>

              <SectionHeader

                eyebrow="Profesyonel Temizlik"

                title="Balıkesir Temizlik Hizmetleri"

                align="left"

              />

              <div className="mt-6 sm:mt-8">

                <PageContent page={page} />

              </div>

            </>

          }

          aside={

            <PageAside

              image={{

                src: "/2026/04/atak-temizlik-hizmeti.webp",

                alt: "Balıkesir Temizlik Hizmetleri",

              }}

              cta={{

                title: "Ücretsiz Keşif",

                description: "Alanınıza özel temizlik planı için hemen iletişime geçin.",

                href: "/iletisim",

                label: "Talep Oluştur",

              }}

              links={{

                title: "Temizlik Hizmetleri",

                items: quickLinks,

              }}

            />

          }

        />



        <div className="mt-12 sm:mt-16">

          <SectionHeader

            eyebrow="Hizmet Kategorileri"

            title="Balıkesir Temizlik Hizmetlerimiz"

            align="left"

          />

        </div>



        <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">

          {CLEANING_SERVICES.map((s) => (

            <ServiceCard

              key={s.slug}

              title={s.title}

              description={s.desc}

              image={s.image}

              href={serviceHref(s.base, s.slug)}

            />

          ))}

        </div>



        <div className="mt-8 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">

          {CLEANING_SERVICES.map((s) => (

            <Link

              key={s.slug}

              href={serviceHref(s.base, s.slug)}

              className="flex min-h-[44px] items-center gap-2 rounded-lg px-2 py-2 text-sm font-medium text-brand-600 transition hover:bg-brand-50 hover:underline"

            >

              <ArrowRight className="h-4 w-4 shrink-0" />

              <span className="line-clamp-1">{s.title} Hizmeti</span>

            </Link>

          ))}

        </div>

      </PageSection>



      <PageSection muted>

        <div className="mx-auto max-w-3xl">

          <ContactForm />

        </div>

      </PageSection>

    </>

  );

}


