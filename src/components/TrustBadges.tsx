import { Shield, Clock, Award, Leaf } from "lucide-react";

const badges = [
  { icon: Shield, label: "Sağlık Bakanlığı Onaylı", sub: "Güvenilir ilaçlar" },
  { icon: Clock, label: "7/24 Hizmet", sub: "Kesintisiz destek" },
  { icon: Award, label: "%100 Garanti", sub: "Müşteri memnuniyeti" },
  { icon: Leaf, label: "Çevre Dostu", sub: "Sürdürülebilir yöntemler" },
];

export default function TrustBadges() {
  return (
    <section className="border-y border-slate-200/80 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-6">
          {badges.map((b) => (
            <div
              key={b.label}
              className="animated-item flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/50 px-3 py-3 transition hover:border-brand-200 hover:bg-brand-50/50 sm:px-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-600 text-white shadow-sm">
                <b.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-slate-900">{b.label}</p>
                <p className="truncate text-xs text-slate-500">{b.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
