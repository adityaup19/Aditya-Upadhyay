import { useEffect } from "react";
import { Link } from "react-router-dom";
import { site } from "@/content/site";
import { Body, Label, Marquee, PressList, WorkGrid } from "@/components/site/pieces";

const Index = () => {
  useEffect(() => {
    document.title = "Aditya Upadhyay";
  }, []);

  return (
    <div>
      <section className="px-5 pb-12 pt-32 md:px-[72px] md:pb-16 md:pt-40">
        <h1 className="display text-[clamp(3.2rem,8vw,7.4rem)] text-white">{site.name}</h1>
        <p className="mt-10 max-w-[44rem] text-[clamp(1.25rem,2.1vw,1.7rem)] font-medium leading-[1.3] tracking-[-0.025em] text-white/85 md:mt-14">
          {site.hero}
        </p>
      </section>

      <section className="px-5 pb-14 md:px-[72px] md:pb-20">
        <p className="max-w-[40rem] text-[18px] leading-[1.45] tracking-[-0.01em] text-white/60 md:text-[20px]">
          {site.statement}
        </p>
        <ul className="mt-8 flex flex-wrap gap-x-10 gap-y-3">
          {site.disciplines.map((item) => (
            <li key={item} className="mono text-[13px] text-white/70 md:text-[14px]">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="py-10 md:py-16">
        <Marquee
          items={site.ticker}
          duration="28s"
          className="px-8 text-[clamp(2.4rem,5.5vw,4.9rem)] font-medium uppercase leading-none tracking-[-0.03em] text-white md:px-12"
        />
      </section>

      <section className="px-5 pb-8 pt-16 md:px-[72px] md:pt-24">
        <div className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <Label>Work</Label>
            <h2 className="display mt-3 text-[clamp(2.6rem,5vw,4.4rem)] text-white">Selected Work</h2>
          </div>
          <Link to="/work" className="mono text-[13px] text-[#888] transition-colors hover:text-white md:text-[14px]">
            View all works
          </Link>
        </div>
        <WorkGrid projects={site.projects} compact />
      </section>

      <section className="px-5 pb-8 pt-16 md:px-[72px] md:pt-24">
        <div className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <Label>Mentions</Label>
            <h2 className="display mt-3 text-[clamp(2rem,3.2vw,3rem)] text-white">Press</h2>
          </div>
          <Link to="/press" className="mono text-[13px] text-[#888] transition-colors hover:text-white md:text-[14px]">
            All press
          </Link>
        </div>
        <PressList items={site.press.slice(0, 4)} />
      </section>

      <section className="px-5 py-16 md:px-[72px] md:py-24">
        <p className="display flex items-baseline justify-between gap-[0.2em] whitespace-nowrap text-[clamp(2.4rem,11.2vw,12rem)] leading-[0.85] tracking-[-0.05em] text-white">
          {site.words.map((word) => (
            <span key={word}>{word}</span>
          ))}
        </p>
      </section>

      <section className="px-5 pb-8 md:px-[72px]">
        <div className="grid gap-14 md:grid-cols-[1.45fr_0.7fr_0.7fr] md:gap-16">
          <div>
            <Label>About</Label>
            <h2 className="display mt-3 text-[clamp(2rem,3.2vw,3rem)] text-white">About me</h2>
            <div className="mt-5 max-w-[34rem] space-y-6">
              {site.about.map((paragraph) => (
                <Body key={paragraph}>{paragraph}</Body>
              ))}
            </div>
            <div className="mt-8 aspect-[4/5] max-w-[525px] overflow-hidden">
              <div className="relative h-full w-full" style={{ background: site.projects[0].gradient }}>
                <p className="display absolute bottom-0 left-4 text-[28vw] leading-none text-white/20 md:text-[11rem]">AU</p>
              </div>
            </div>
            <Link to="/about" className="mono mt-8 inline-block text-[13px] text-[#888] transition-colors hover:text-white md:text-[14px]">
              Read bio →
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
        </div>
      </section>
    </div>
  );
};

export default Index;
