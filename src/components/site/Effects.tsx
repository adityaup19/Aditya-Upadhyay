import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      if (bar.current) bar.current.style.transform = `scaleX(${progress})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed left-0 right-0 top-0 z-[60] h-1 bg-transparent">
      <div
        ref={bar}
        className="h-full origin-left bg-gradient-to-r from-primary via-primary/70 to-primary transition-transform duration-100"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}

export function CursorGlow() {
  const glow = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const el = glow.current;
    if (!el) return;

    const move = (event: MouseEvent) => {
      el.style.transform = `translate3d(${event.clientX - 180}px, ${event.clientY - 180}px, 0)`;
      el.style.opacity = "1";
    };
    const hide = () => {
      el.style.opacity = "0";
    };

    window.addEventListener("mousemove", move);
    document.documentElement.addEventListener("mouseleave", hide);
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.removeEventListener("mouseleave", hide);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        ref={glow}
        className="absolute left-0 top-0 h-[360px] w-[360px] rounded-full opacity-0 blur-3xl transition-opacity duration-300"
        style={{ background: "hsl(var(--primary) / 0.16)" }}
      />
    </div>
  );
}

export function Reveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn("reveal", className)}>
      {children}
    </div>
  );
}

export function TypeLine({ phrases }: { phrases: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = phrases[index] ?? "";
    if (!deleting && text === full) {
      const pause = setTimeout(() => setDeleting(true), 1600);
      return () => clearTimeout(pause);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setIndex((current) => (current + 1) % phrases.length);
      return;
    }
    const tick = setTimeout(
      () => {
        setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1));
      },
      deleting ? 30 : 60,
    );
    return () => clearTimeout(tick);
  }, [text, deleting, index, phrases]);

  return (
    <p className="min-h-[1.75rem] font-mono text-base text-foreground/70 md:text-lg">
      <span>currently </span>
      <span className="font-semibold text-primary">{text}</span>
      <span className="ml-0.5 inline-block h-5 w-0.5 animate-pulse bg-primary align-middle" />
    </p>
  );
}

export function Stat({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const start = performance.now();
        const duration = 1100;
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          setShown(Math.round(value * eased));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <div className="bg-gradient-to-br from-primary to-foreground bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
        {shown}
        {suffix}
      </div>
      <p className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">{label}</p>
    </div>
  );
}
