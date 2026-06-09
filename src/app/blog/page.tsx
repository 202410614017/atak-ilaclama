import type { Metadata } from "next";
import BlogListing from "@/components/blog/BlogListing";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Haşere kontrolü, profesyonel ilaçlama yöntemleri ve korunma yolları hakkında uzman içerikler.",
};

export default function BlogPage() {
  return (
    <>
      <section className="border-b border-slate-100 bg-white py-12 text-center sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            Blog
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-500 sm:text-lg">
            Haşere kontrolü, profesyonel ilaçlama yöntemleri ve korunma yolları
            hakkında uzman içerikler.
          </p>
        </div>
      </section>

      <section className="bg-white py-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BlogListing />
        </div>
      </section>
    </>
  );
}
