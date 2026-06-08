type Props = {
  main: React.ReactNode;
  aside: React.ReactNode;
};

/** Mobilde aside üstte (görsel + CTA), masaüstünde sağ sütun */
export function ContentWithAside({ main, aside }: Props) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3 lg:gap-12">
      <div className="order-2 min-w-0 lg:order-1 lg:col-span-2">{main}</div>
      <div className="order-1 lg:order-2">{aside}</div>
    </div>
  );
}

export function PageSection({
  children,
  muted = false,
}: {
  children: React.ReactNode;
  muted?: boolean;
}) {
  return (
    <section className={`py-10 sm:py-14 lg:py-16 ${muted ? "bg-slate-50" : ""}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
