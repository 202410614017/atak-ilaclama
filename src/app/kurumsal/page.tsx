import type { Metadata } from "next";

import PageHero from "@/components/PageHero";

import PageContent from "@/components/PageContent";

import PageAside, { AsideContactInfo } from "@/components/PageAside";

import ContactForm from "@/components/ContactForm";

import { ContentWithAside, PageSection } from "@/components/ContentLayout";

import { getPage } from "@/lib/content";

import { SITE } from "@/lib/site";



export const metadata: Metadata = {

  title: "Kurumsal",

};



export default function KurumsalPage() {

  const page = getPage("kurumsal")!;



  return (

    <>

      <PageHero

        title="Kurumsal"

        breadcrumb={[

          { label: "Anasayfa", href: "/" },

          { label: "Kurumsal", href: "/kurumsal" },

        ]}

      />



      <PageSection>

        <ContentWithAside

          main={<PageContent page={page} />}

          aside={

            <PageAside

              cta={{

                title: "Kurumsal Teklif",

                description: "İşletmeniz için özel fiyatlandırma ve periyodik hizmet planı.",

                href: "/iletisim",

                label: "Teklif İste",

              }}

              links={{

                title: "Hızlı Erişim",

                items: [

                  { title: "Hakkımızda", href: "/hakkimizda" },

                  { title: "Haşere İlaçlama", href: "/hasere-ilaclama" },

                  { title: "Temizlik Hizmetleri", href: "/temizlik" },

                  { title: "İletişim", href: "/iletisim" },

                ],

              }}

            >

              <AsideContactInfo />

              <div className="animated-item overflow-hidden rounded-2xl shadow-md ring-1 ring-slate-200/70">

                <iframe

                  src={SITE.mapEmbed}

                  className="h-48 w-full sm:h-56"

                  loading="lazy"

                  title="Konum"

                />

              </div>

            </PageAside>

          }

        />

      </PageSection>



      <PageSection muted>

        <div className="mx-auto max-w-3xl">

          <ContactForm />

        </div>

      </PageSection>

    </>

  );

}


