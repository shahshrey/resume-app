interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="mb-8">
      <h2 className="mb-2 text-2xl font-bold text-text-primary md:text-3xl">{title}</h2>
      {subtitle && <p className="text-text-secondary">{subtitle}</p>}
    </div>
  );
};
