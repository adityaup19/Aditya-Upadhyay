interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink = ({ href, children }: FooterLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-text-muted text-[0.8125rem] transition-colors duration-200 hover:text-text-secondary focus-visible:outline-2 focus-visible:outline-foreground focus-visible:outline-offset-4 focus-visible:rounded-sm"
    >
      {children}
    </a>
  );
};

export const Footer = () => {
  return (
    <footer className="pt-8 border-t border-border flex flex-col sm:flex-row sm:justify-between sm:items-center gap-5">
      <div className="flex flex-col gap-1">
        <p className="text-[0.8125rem] text-text-muted">© Aditya Upadhyay</p>
        <p className="text-xs text-text-muted opacity-70">
          Projects built under Oasis Orbital.
        </p>
      </div>
      <div className="flex gap-5">
        <FooterLink href="mailto:upadhyayaditya19@gmail.com">Email</FooterLink>
        <FooterLink href="https://linkedin.com/in/upadhyayaditya">LinkedIn</FooterLink>
        <FooterLink href="https://twitter.com/itsoasispace">Twitter</FooterLink>
      </div>
    </footer>
  );
};
