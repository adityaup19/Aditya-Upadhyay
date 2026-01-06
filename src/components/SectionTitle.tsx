interface SectionTitleProps {
  children: React.ReactNode;
}

export const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <h2 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-8">
      {children}
    </h2>
  );
};
