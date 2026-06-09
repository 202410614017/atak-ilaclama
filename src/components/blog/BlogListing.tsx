"use client";

import { useMemo, useState } from "react";
import BlogCard from "@/components/blog/BlogCard";
import { BLOG_CATEGORIES, POSTS_PER_PAGE } from "@/lib/blog-data";
import { BLOG_POSTS } from "@/lib/site";

export default function BlogListing() {
  const [category, setCategory] = useState<string>("Tümü");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    if (category === "Tümü") return [...BLOG_POSTS];
    return BLOG_POSTS.filter((p) => p.category === category);
  }, [category]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE));
  const currentPage = Math.min(page, totalPages);

  const paginated = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return filtered.slice(start, start + POSTS_PER_PAGE);
  }, [filtered, currentPage]);

  function selectCategory(cat: string) {
    setCategory(cat);
    setPage(1);
  }

  return (
    <>
      {/* Category filters */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5">
        {BLOG_CATEGORIES.map((cat) => {
          const active = category === cat;
          const count =
            cat === "Tümü"
              ? BLOG_POSTS.length
              : BLOG_POSTS.filter((p) => p.category === cat).length;
          if (cat !== "Tümü" && count === 0) return null;

          return (
            <button
              key={cat}
              type="button"
              onClick={() => selectCategory(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                active
                  ? "bg-navy text-white shadow-sm"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      {paginated.length > 0 ? (
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {paginated.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      ) : (
        <p className="mt-10 text-center text-slate-500">
          Bu kategoride henüz yazı bulunmuyor.
        </p>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <nav
          className="mt-12 flex flex-wrap items-center justify-center gap-2"
          aria-label="Sayfalama"
        >
          <button
            type="button"
            disabled={currentPage === 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-slate-300 disabled:cursor-not-allowed disabled:opacity-40"
          >
            ‹ Önceki
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setPage(n)}
              className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-semibold transition ${
                n === currentPage
                  ? "bg-navy text-white"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300"
              }`}
            >
              {n}
            </button>
          ))}
          <button
            type="button"
            disabled={currentPage === totalPages}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-slate-300 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Sonraki ›
          </button>
        </nav>
      )}
    </>
  );
}
