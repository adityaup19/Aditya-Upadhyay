import { useEffect } from "react";
import { Link } from "react-router-dom";
import { site } from "@/content/site";
import { Body, Label, PageTitle } from "@/components/site/pieces";

const About = () => {
  useEffect(() => {
    document.title = "About — Aditya Upadhyay";
  }, []);

  return (
    <div>
      <PageTitle title="About me" lede={site.aboutLede} />

      <section className="grid items-start gap-10 px-5 md:grid-cols-2 md:gap-[30px] md:px-[72px]">
        <div className="md:pl-10">
          <Label>Bio</Label>
          <div className="mt-5 max-w-[34rem] space-y-6">
            {site.about.map((paragraph) => (
              <Body key={paragraph}>{paragraph}</Body>
            ))}
          </div>
          {site.cv ? (
            <a href={site.cv} className="mono mt-12 inline-block text-[13px] text-[#888] hover:text-white md:text-[14px]">
              Download my CV
            </a>
          ) : null}
        </div>
        <div className="aspect-[625/692] overflow-hidden">
          <div className="relative h-full w-full" style={{ background: site.projects[2].gradient }}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.28),transparent_40%)]" />
            <p className="display absolute bottom-0 left-2 text-[40vw] leading-[0.8] text-white/25 md:text-[16rem]">AU</p>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-[72px] md:py-24">
        <div className="aspect-[2/1] overflow-hidden">
          <div className="relative flex h-full items-end" style={{ background: site.projects[1].gradient }}>
            <p className="display px-6 pb-4 text-[clamp(3rem,8vw,7rem)] text-white/90">Always building</p>
          </div>
        </div>
      </section>

      <section className="grid gap-14 px-5 pb-8 md:grid-cols-[1.45fr_0.7fr_0.7fr] md:gap-16 md:px-[72px]">
        <div className="md:pl-10">
          <Label>Experience</Label>
          <ul className="mt-5 max-w-[34rem] divide-y divide-white/10">
            {site.experience.map((item) => (
              <li key={item.role} className="flex items-baseline justify-between gap-6 py-3">
                <span className="text-[19px] tracking-[-0.01em] text-white/80 md:text-[21px]">{item.role}</span>
                <span className="mono shrink-0 text-[13px] text-white/80 md:text-[14px]">{item.time}</span>
              </li>
            ))}
          </ul>
          <Link to="/work" className="mono mt-16 inline-block text-[13px] text-[#888] transition-colors hover:text-white md:text-[14px]">
            View works →
          </Link>
        </div>
        <div>
          <Label>Services</Label>
          <ul className="mt-5 space-y-1">
            {site.services.map((item) => (
              <li key={item} className="text-[19px] tracking-[-0.01em] text-white/80 md:text-[21px]">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Label>Industries</Label>
          <ul className="mt-5 space-y-1">
            {site.industries.map((item) => (
              <li key={item} className="text-[19px] tracking-[-0.01em] text-white/80 md:text-[21px]">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;
