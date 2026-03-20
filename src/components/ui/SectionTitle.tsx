type SectionTitleProps = {
  title: string;
  subtitle?: string;
  description?: string;
};

export default function SectionTitle({ title, subtitle, description }: SectionTitleProps) {
  return (
    <div className="space-y-2">
      {subtitle && <p className="text-[#0ba36b] uppercase tracking-wider text-xs font-semibold">{subtitle}</p>}
      <h2 className="text-3xl md:text-4xl text-white font-bold leading-tight">{title}</h2>
      {description && <p className="text-zinc-300 max-w-2xl">{description}</p>}
    </div>
  );
}