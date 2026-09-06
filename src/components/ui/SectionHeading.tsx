interface Props { title: string; subtitle?: string; }
export default function SectionHeading({ title, subtitle }: Props) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-text-primary">{title}</h2>
      {subtitle && <p className="mt-3 text-text-secondary text-base md:text-lg max-w-2xl mx-auto">{subtitle}</p>}
      <div className="w-16 h-0.5 bg-candy-blue/60 mx-auto mt-4" />
    </div>
  );
}
