import { StatusBadge } from "./StatusBadge";

interface ProjectCardProps {
  title: string;
  description: string;
  proof?: string;
  status: "live" | "beta" | "stealth";
  href: string;
  buttonText: string;
}

export const ProjectCard = ({
  title,
  description,
  proof,
  status,
  href,
  buttonText,
}: ProjectCardProps) => {
  return (
    <div className="bg-card border border-border rounded-xl p-7 transition-all duration-300 hover:border-border-hover hover:-translate-y-0.5">
      <div className="flex justify-between items-start gap-4 mb-2">
        <h3 className="text-xl font-semibold tracking-tight text-foreground">
          {title}
        </h3>
        <StatusBadge status={status} />
      </div>
      <p className="text-text-secondary text-[0.9375rem] mb-3 leading-relaxed">
        {description}
      </p>
      {proof && (
        <p className="text-[0.8125rem] text-text-muted mb-5">{proof}</p>
      )}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-foreground text-sm font-medium px-4 py-2.5 border border-border rounded-md transition-all duration-200 hover:border-foreground hover:bg-foreground/[0.03] group"
      >
        {buttonText}
        <span className="text-base transition-transform duration-200 group-hover:translate-x-0.5">
          →
        </span>
      </a>
    </div>
  );
};
