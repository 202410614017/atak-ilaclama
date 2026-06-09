import { TRUST_ITEMS } from "@/lib/home-data";

export default function TrustTopBar() {
  return (
    <div className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 gap-y-3 px-4 py-4 sm:grid-cols-3 sm:px-6 lg:grid-cols-6 lg:px-8">
        {TRUST_ITEMS.map((item) => (
          <div key={item.label} className="animated-item flex items-center gap-2 text-xs sm:text-sm">
            <span className="text-base">{item.icon}</span>
            <span className="font-medium text-slate-200">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
