interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="mb-8 rounded-xl border border-white/20 bg-white/5 p-6 backdrop-blur-xl text-center">
      <h2 className="mb-2 text-2xl font-bold text-white md:text-3xl">{title}</h2>
      {subtitle && <p className="text-white/80">{subtitle}</p>}
    </div>
  );
};
