import type { Metadata } from "next";

import { notFound } from "next/navigation";

import Image from "next/image";

import PageHero from "@/components/PageHero";

import PageContent from "@/components/PageContent";

import PageAside from "@/components/PageAside";

import ContactForm from "@/components/ContactForm";

import { ContentWithAside, PageSection } from "@/components/ContentLayout";

import { getBlogPost } from "@/lib/content";

import { BLOG_POSTS, img } from "@/lib/site";



type Props = { params: Promise<{ slug: string }> };



export async function generateStaticParams() {

  return BLOG_POSTS.map((p) => ({ slug: p.slug }));

}



export async function generateMetadata({ params }: Props): Promise<Metadata> {

  const { slug } = await params;

  const page = getBlogPost(slug);

  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!page || !post) return { title: "Sayfa Bulunamadı" };

  return { title: post.title };

}



export default async function BlogPostPage({ params }: Props) {

  const { slug } = await params;

  const page = getBlogPost(slug);

  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!page || !post) notFound();



  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== slug).map((p) => ({

    title: p.title,

    href: `/blog/${p.slug}`,

  }));



  return (

    <>

      <PageHero

        title={post.title}

        breadcrumb={[

          { label: "Anasayfa", href: "/" },

          { label: "Blog", href: "/blog" },

          { label: post.title, href: `/blog/${slug}` },

        ]}

      />



      <PageSection>

        <ContentWithAside

          main={

            <>

              <p className="text-sm text-slate-500">{post.date}</p>

              <div className="animated-item relative mt-4 aspect-[16/9] overflow-hidden rounded-2xl shadow-lg sm:mt-6">

                <Image

                  src={img(post.image)}

                  alt={post.title}

                  fill

                  sizes="(max-width: 1024px) 100vw, 66vw"

                  className="object-cover"

                />

              </div>

              <div className="mt-6 sm:mt-8">

                <PageContent page={page} />

              </div>

            </>

          }

          aside={

            <PageAside

              image={{ src: post.image, alt: post.title }}

              cta={{

                title: "Hizmet Talebi",

                description: "Haşere veya temizlik ihtiyacınız için hemen ulaşın.",

                href: "/iletisim",

                label: "Teklif Al",

              }}

              links={{

                title: "Diğer Yazılar",

                items: otherPosts,

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


