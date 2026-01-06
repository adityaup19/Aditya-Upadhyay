import { StatusBadge } from "./StatusBadge";

interface NowBuildingCardProps {
  title: string;
  description: string;
  status: "live" | "beta" | "stealth";
}

export const NowBuildingCard = ({
  title,
  description,
  status,
}: NowBuildingCardProps) => {
  return (
    <div className="bg-card border border-border rounded-xl p-7">
      <div className="flex justify-between items-start gap-4 mb-2">
        <span className="text-xs font-semibold uppercase tracking-widest text-text-muted">
          Now Building
        </span>
        <StatusBadge status={status} />
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-text-secondary text-[0.9375rem]">{description}</p>
    </div>
  );
};
