import { useEffect } from "react";
import { site } from "@/content/site";

function Action({
  href,
  label,
  value,
  external,
}: {
  href: string;
  label: string;
  value: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group flex w-full items-center justify-between gap-6 rounded-2xl bg-[#1c1c1c] px-5 py-4 text-left ring-1 ring-white/10 transition-colors hover:bg-[#242424] hover:ring-white/25"
    >
      <span>
        <span className="mono block text-[12px] uppercase tracking-[0.08em] text-[#888]">{label}</span>
        <span className="mt-1 block text-[16px] tracking-[-0.01em] text-white md:text-[18px]">{value}</span>
      </span>
      <span className="text-[18px] text-white/40 transition-transform group-hover:translate-x-0.5 group-hover:text-white">→</span>
    </a>
  );
}

const Contact = () => {
  useEffect(() => {
    document.title = "Contact — Aditya Upadhyay";
  }, []);

  const linkedin = site.socials.find((item) => item.label === "LinkedIn");

  return (
    <section className="flex min-h-[100svh] flex-col items-center justify-center px-5 pb-24 pt-32">
      <div className="w-full max-w-[34rem]">
        <p className="mono text-[13px] text-[#888] md:text-[14px]">Contact</p>
        <p className="mt-5 text-[clamp(1.55rem,3vw,2.15rem)] font-medium leading-[1.2] tracking-[-0.03em] text-white">
          {site.contactLede}
        </p>
        <div className="mt-8 space-y-3">
          <Action href={`mailto:${site.email}`} label="Email" value={site.email} />
          {linkedin ? <Action href={linkedin.href} label="LinkedIn" value="linkedin.com/in/adityaau" external /> : null}
        </div>
      </div>
    </section>
  );
};

export default Contact;
