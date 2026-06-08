import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PageContent from "@/components/PageContent";
import PageAside from "@/components/PageAside";
import ContactForm from "@/components/ContactForm";
import { ContentWithAside, PageSection } from "@/components/ContentLayout";
import { getPage } from "@/lib/content";

export const metadata: Metadata = {
  title: "Balıkesir Dezenfeksiyon Hizmetleri",
};

export default function DezenfeksiyonPage() {
  const page = getPage("dezenfeksiyon-hizmetleri")!;

  return (
    <>
      <PageHero
        title="Balıkesir Dezenfeksiyon Hizmetleri"
        subtitle="Nano gümüş ve ozon teknolojileri ile ileri düzey dezenfeksiyon uygulamaları."
        badge="SAĞLIKLI ORTAMLAR İÇİN"
        image="/2026/05/balikesir-dezenfeksiyon.webp"
        breadcrumb={[
          { label: "Anasayfa", href: "/" },
          { label: "Dezenfeksiyon", href: "/dezenfeksiyon-hizmetleri" },
        ]}
      />

      <PageSection>
        <ContentWithAside
          main={<PageContent page={page} />}
          aside={
            <PageAside
              image={{
                src: "/2026/05/balikesir-dezenfeksiyon.webp",
                alt: "Balıkesir Dezenfeksiyon Hizmetleri",
              }}
              cta={{
                title: "Ücretsiz Keşif",
                description: "Alanınıza özel dezenfeksiyon planı için hemen iletişime geçin.",
                href: "/iletisim",
                label: "Randevu Al",
              }}
              links={{
                title: "Dezenfeksiyon Hizmetleri",
                items: [
                  {
                    title: "Nano Gümüş İle Dezenfeksiyon",
                    href: "/hasere-ilaclama/balikesir-nano-gumus-dezenfeksiyon",
                  },
                  {
                    title: "Ozon İle Dezenfeksiyon",
                    href: "/hasere-ilaclama/balikesir-ozon-dezenfeksiyon",
                  },
                ],
              }}
            />
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
