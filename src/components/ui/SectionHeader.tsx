interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-secondary">
          {subtitle}
        </p>
      )}
    </div>
  );
}; 