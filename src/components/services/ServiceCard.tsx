import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
  icon: string;
  title: string;
  desc: string;
  href: string;
};

export default function ServiceCard({ icon, title, desc, href }: Props) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-2xl border border-slate-100 bg-slate-50/40 p-5 transition hover:border-accent-blue/30 hover:bg-white hover:shadow-md sm:p-6"
    >
      <span className="text-2xl">{icon}</span>
      <h3 className="mt-4 font-bold text-slate-900">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{desc}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-blue group-hover:gap-2 transition-all">
        Detaylı bilgi <ArrowRight className="h-3.5 w-3.5" />
      </span>
    </Link>
  );
}
