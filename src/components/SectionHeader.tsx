type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: Props) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`animated-item max-w-3xl ${alignClass}`}>
      {eyebrow && (
        <span
          className={`mb-3 inline-block text-xs font-bold uppercase tracking-widest ${
            light ? "text-brand-300" : "text-brand-600"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-2xl font-bold leading-tight text-balance sm:text-3xl lg:text-4xl ${
          light ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed lg:text-lg ${
            light ? "text-white/80" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
      <div
        className={`mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-brand-500 to-accent-500 ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}
