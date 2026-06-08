import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PageContent from "@/components/PageContent";
import PageAside, { AsideContactInfo } from "@/components/PageAside";
import { ContentWithAside, PageSection } from "@/components/ContentLayout";
import { getPage } from "@/lib/content";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hakkımızda",
};

export default function HakkimizdaPage() {
  const page = getPage("hakkimizda")!;

  return (
    <>
      <PageHero
        title="Hakkımızda"
        subtitle="Beş yıldır Balıkesir ve çevresinde profesyonel haşere ilaçlama, dezenfeksiyon ve temizlik hizmetleri sunuyoruz."
        breadcrumb={[
          { label: "Anasayfa", href: "/" },
          { label: "Hakkımızda", href: "/hakkimizda" },
        ]}
      />

      <PageSection>
        <ContentWithAside
          main={<PageContent page={page} />}
          aside={
            <PageAside
              cta={{
                title: "Bize Ulaşın",
                description: "7/24 destek hattımızdan hemen ulaşabilirsiniz.",
                href: "/iletisim",
                label: "İletişim Formu",
              }}
            >
              <AsideContactInfo />
              <div className="animated-item overflow-hidden rounded-2xl shadow-md ring-1 ring-slate-200/70">
                <iframe
                  src={SITE.mapEmbed}
                  className="h-56 w-full sm:h-72"
                  loading="lazy"
                  title="Konum"
                />
              </div>
            </PageAside>
          }
        />
      </PageSection>
    </>
  );
}
