import { cn } from "@/lib/utils";

interface SocialLinkProps {
  href: string;
  children: React.ReactNode;
  isEmail?: boolean;
}

export const SocialLink = ({ href, children, isEmail }: SocialLinkProps) => {
  return (
    <a
      href={href}
      target={isEmail ? undefined : "_blank"}
      rel={isEmail ? undefined : "noopener noreferrer"}
      className={cn(
        "text-sm font-medium tracking-wide py-2 border-b border-transparent transition-all duration-200",
        "hover:text-foreground hover:border-foreground focus:outline-none focus:text-foreground focus:border-foreground",
        "focus-visible:outline-2 focus-visible:outline-foreground focus-visible:outline-offset-4 focus-visible:rounded-sm",
        isEmail ? "text-text-secondary" : "text-text-muted"
      )}
    >
      {children}
    </a>
  );
};
