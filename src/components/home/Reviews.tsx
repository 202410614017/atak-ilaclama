import { REVIEWS } from "@/lib/home-data";

function Stars() {
  return (
    <span className="text-amber-400 text-sm tracking-wide">★★★★★</span>
  );
}

export default function Reviews() {
  return (
    <section className="bg-navy py-14 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="animated-item mb-10 max-w-lg">
          <p className="text-xs font-bold uppercase tracking-widest text-accent-blue">
            MÜŞTERİ YORUMLARI
          </p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            498+ Memnun <span className="text-accent-blue">Müşteri</span>
          </h2>
          <p className="mt-3 text-slate-400">Gerçek sonuçlar, gerçek yorumlar:</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {REVIEWS.map((r) => (
            <div
              key={r.name}
              className="animated-item rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <Stars />
              <p className="mt-4 text-sm leading-relaxed text-slate-300">{r.text}</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-blue text-xs font-bold">
                  {r.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold">{r.name}</p>
                  <p className="text-xs text-slate-500">{r.loc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
