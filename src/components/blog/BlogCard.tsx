import Image from "next/image";
import Link from "next/link";
import { Calendar, Eye } from "lucide-react";
import { img } from "@/lib/site";

type BlogCardProps = {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  image: string;
  category: string;
  views: number;
};

export default function BlogCard({
  title,
  slug,
  date,
  excerpt,
  image,
  category,
  views,
}: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={img(image)}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <span className="inline-block w-fit rounded-md bg-accent-blue/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-accent-blue">
          {category}
        </span>
        <h2 className="mt-3 text-base font-bold leading-snug text-slate-900 transition group-hover:text-accent-blue sm:text-lg line-clamp-3">
          {title}
        </h2>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500 line-clamp-3">
          {excerpt}
        </p>
        <div className="mt-4 flex items-center gap-4 text-xs text-slate-400">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-accent-blue" />
            {date}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Eye className="h-3.5 w-3.5 text-accent-blue" />
            {views}
          </span>
        </div>
      </div>
    </Link>
  );
}
