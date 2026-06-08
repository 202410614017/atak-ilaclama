import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { img } from "@/lib/site";

type Props = {
  title: string;
  description: string;
  image: string;
  href: string;
};

export default function ServiceCard({ title, description, image, href }: Props) {
  return (
    <Link
      href={href}
      className="animated-item group relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={img(image)}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/50 to-slate-900/10" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-white/75 line-clamp-2">
          {description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-slate-900 shadow-sm transition group-hover:bg-brand-500 group-hover:text-white">
          İncele
          <ArrowRight className="h-3 w-3 transition group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
