import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { site, type PressItem, type Project } from "@/content/site";
import { cn } from "@/lib/utils";

export function SwapText({ children }: { children: string }) {
  return (
    <span className="swap">
      <span>{children}</span>
      <span aria-hidden="true">{children}</span>
    </span>
  );
}

export function Label({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("mono text-[13px] text-[#888] md:text-[14px]", className)}>{children}</p>;
}

export function Body({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("text-[19px] font-normal leading-[1.4] tracking-[-0.01em] text-white/80 md:text-[21px]", className)}>
      {children}
    </p>
  );
}

export function PageTitle({ title, lede }: { title: string; lede?: string }) {
  return (
    <header className="px-5 pb-14 pt-32 md:px-[72px] md:pb-20 md:pt-44">
      <h1 className="display text-[clamp(3.4rem,10.2vw,9.4rem)] text-white">{title}</h1>
      {lede ? (
        <p className="mx-auto mt-8 max-w-[28rem] text-center text-[19px] leading-[1.35] tracking-[-0.01em] text-white/80 md:text-[21px]">
          {lede}
        </p>
      ) : null}
    </header>
  );
}

export function ProjectVisual({ project, quiet = false }: { project: Project; quiet?: boolean }) {
  if (project.image) {
    return <img src={project.image} alt="" className="h-full w-full object-cover" />;
  }

  return (
    <div className="relative h-full w-full" style={{ background: project.gradient }}>
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(circle at 28% 18%, rgba(255,255,255,0.28), transparent 36%), radial-gradient(circle at 80% 90%, rgba(0,0,0,0.35), transparent 42%)",
        }}
      />
      {!quiet && (
        <p className="display absolute -bottom-[8%] -left-[2%] text-[42vw] leading-none text-white/15 md:text-[18rem]">
          {project.mark}
        </p>
      )}
    </div>
  );
}

export function ProjectCard({ project, wide = false, compact = false }: { project: Project; wide?: boolean; compact?: boolean }) {
  if (compact) {
    return (
      <Link to={`/work/${project.slug}`} className="group block">
        <div className="aspect-[2/1] overflow-hidden bg-[#1a1a1a]">
          <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]">
            <ProjectVisual project={project} quiet />
          </div>
        </div>
        <div className="mt-2.5 flex items-baseline justify-between gap-2">
          <h3 className="text-[15px] font-medium tracking-[-0.02em] text-white md:text-[16px]">{project.title}</h3>
          <span className="mono shrink-0 text-[10px] text-[#888]">{project.year}</span>
        </div>
        <p className="mt-1 line-clamp-2 text-[13px] leading-snug text-white/60">{project.tagline}</p>
        <p className="mono mt-2 text-[10px] text-[#888]">{project.tags.join("  ·  ")}</p>
      </Link>
    );
  }

  return (
    <Link to={`/work/${project.slug}`} className="group relative block overflow-hidden bg-[#1a1a1a]">
      <div className={cn("relative", wide ? "aspect-[2.04/1]" : "aspect-square")}>
        <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.045]">
          <ProjectVisual project={project} />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-black/60" />
        <div className="absolute left-6 right-6 top-7 md:left-8 md:top-8">
          <h2 className="text-[22px] font-medium tracking-[-0.01em] text-white md:text-[24px]">
            <SwapText>{project.title}</SwapText>
          </h2>
        </div>
        <div className="absolute bottom-6 left-7 flex flex-wrap gap-x-6 gap-y-2 md:bottom-8 md:left-9">
          {project.tags.map((tag) => (
            <span key={tag} className="mono text-[12px] text-white md:text-[14px]">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export function WorkGrid({ projects, featured = false, compact = false }: { projects: Project[]; featured?: boolean; compact?: boolean }) {
  if (compact) {
    return (
      <div className="grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3 xl:grid-cols-4">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} compact />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2 md:gap-[30px]">
      {projects.map((project, index) => {
        const wide = featured && index % 5 === 2;
        return (
          <div key={project.slug} className={wide ? "md:col-span-2" : undefined}>
            <ProjectCard project={project} wide={wide} />
          </div>
        );
      })}
    </div>
  );
}

export function PressList({ items }: { items: PressItem[] }) {
  if (items.length === 0) {
    return <p className="border-t border-white/10 pt-8 text-[19px] tracking-[-0.01em] text-white/55 md:text-[21px]">{site.pressEmpty}</p>;
  }

  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
      {items.map((item) => (
        <li key={item.href} className="min-w-0">
          <a
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="flex h-full flex-col border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/30 hover:bg-white/[0.06]"
          >
            <span className="flex items-baseline justify-between gap-4">
              <span className="text-[15px] tracking-[-0.01em] text-white/70">{item.publication}</span>
              <span className="mono shrink-0 text-[12px] text-[#888]">{item.date}</span>
            </span>
            <span className="mt-4 text-[20px] font-medium leading-snug tracking-[-0.02em] text-white md:text-[22px]">{item.title}</span>
            <span className="mt-3 text-[15px] leading-relaxed text-white/55">{item.summary}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export function Marquee({
  items,
  className,
  duration = "32s",
}: {
  items: string[];
  className?: string;
  duration?: string;
}) {
  const loop = [...items, ...items, ...items];
  return (
    <div className="overflow-hidden">
      <div className="flex w-max animate-marquee" style={{ animationDuration: duration }}>
        {loop.map((item, index) => (
          <span key={`${item}-${index}`} className={className}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Pill({ href, children }: { href: string; children: ReactNode }) {
  const className =
    "mono inline-flex h-[41px] items-center rounded-full bg-[#2a2a2a] px-6 text-[13px] text-[#cfcfcf] transition-colors hover:text-white";
  if (href.startsWith("/")) {
    return (
      <Link to={href} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
      {children}
    </a>
  );
}
