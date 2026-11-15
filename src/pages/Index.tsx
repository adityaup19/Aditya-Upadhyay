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
      <section className="px-5 pb-6 pt-32 md:px-[72px] md:pb-10 md:pt-44">
        <h1 className="display text-[clamp(3.2rem,9vw,8.2rem)] text-white">{site.name}</h1>
      </section>

      <section className="px-5 pb-24 pt-16 md:px-[72px] md:pb-36 md:pt-24">
        <p className="mx-auto max-w-[38rem] text-center text-[19px] leading-[1.35] tracking-[-0.01em] text-white/80 md:text-[21px]">
          {site.hero}
        </p>
      </section>

      <section className="px-5 pb-20 md:px-[120px] md:pb-28">
        <p className="text-center text-[clamp(1.7rem,3.5vw,3.15rem)] font-medium leading-[1.08] tracking-[-0.036em] text-white">
          {site.statement}
        </p>
        <ul className="mt-16 flex flex-wrap items-center justify-center gap-x-16 gap-y-4 md:mt-20 md:gap-x-28">
          {site.disciplines.map((item) => (
            <li key={item} className="text-[19px] tracking-[-0.01em] text-white/80 md:text-[21px]">
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
            <h2 className="display mt-3 text-[clamp(2.6rem,5vw,4.4rem)] text-white">Press</h2>
          </div>
          <Link to="/press" className="mono text-[13px] text-[#888] transition-colors hover:text-white md:text-[14px]">
            All press
          </Link>
        </div>
        <PressList items={site.press} />
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
            <Label>About me</Label>
            <Body className="mt-5 max-w-[34rem]">{site.about[0]}</Body>
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
