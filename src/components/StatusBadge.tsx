import { cn } from "@/lib/utils";

type Status = "live" | "beta" | "stealth";

interface StatusBadgeProps {
  status: Status;
}

const statusConfig: Record<Status, { label: string; className: string }> = {
  live: {
    label: "LIVE",
    className: "text-status-live bg-status-live/10",
  },
  beta: {
    label: "BETA",
    className: "text-status-beta bg-status-beta/10",
  },
  stealth: {
    label: "STEALTH",
    className: "text-status-stealth bg-status-stealth/10",
  },
};

export const StatusBadge = ({ status }: StatusBadgeProps) => {
  const config = statusConfig[status];
  
  return (
    <span
      className={cn(
        "text-[0.6875rem] font-semibold uppercase tracking-wide px-2 py-1 rounded whitespace-nowrap",
        config.className
      )}
    >
      {config.label}
    </span>
  );
};
