import { useEffect, useState } from "react";
import { Avatar } from "@/components/Avatar";
import { SocialLink } from "@/components/SocialLink";
import { ProjectCard } from "@/components/ProjectCard";
import { NowBuildingCard } from "@/components/NowBuildingCard";
import { SectionTitle } from "@/components/SectionTitle";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation after mount
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main
      className={`max-w-[760px] mx-auto px-5 py-12 sm:px-8 sm:py-24 transition-all duration-500 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      }`}
    >
      {/* Header */}
      <header className="mb-14 sm:mb-16 pb-12 sm:pb-14 border-b border-border">
        <div className="flex items-center gap-4 mb-7">
          <Avatar />
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold tracking-tight text-foreground leading-tight">
              Aditya Upadhyay
            </h1>
            <span className="text-[0.8125rem] text-text-muted uppercase tracking-widest font-medium">
              Builder
            </span>
          </div>
        </div>

        <h2 className="text-[clamp(2rem,5vw,2.75rem)] font-semibold leading-[1.2] mb-4 mt-2 tracking-tight text-foreground">
          I build web-based software products.
        </h2>

        <p className="text-lg text-text-secondary max-w-[480px] mb-8">
          SaaS platforms, AI-driven tools, and experimental systems.
        </p>

        <div className="flex flex-wrap items-center gap-6">
          <SocialLink href="mailto:upadhyayaditya19@gmail.com" isEmail>
            upadhyayaditya19@gmail.com
          </SocialLink>
          <SocialLink href="https://linkedin.com/in/upadhyayaditya">
            LinkedIn
          </SocialLink>
          <SocialLink href="https://twitter.com/itsoasispace">
            Twitter
          </SocialLink>
        </div>
      </header>

      {/* Projects Section */}
      <section>
        <SectionTitle>Projects</SectionTitle>
        <div className="flex flex-col gap-5 mb-8">
          <ProjectCard
            title="DevProof"
            description="Verified student contributions to real software products."
            proof="35 users • active contributors"
            status="live"
            href="https://devproof.app"
            buttonText="View DevProof"
          />
          <ProjectCard
            title="VisaRisk"
            description="Visa risk simulation using public cases and documented patterns."
            status="live"
            href="https://visarisk.app"
            buttonText="View VisaRisk"
          />
          <ProjectCard
            title="Mirror"
            description="A choice-based pattern engine that reveals behavioral trends over time."
            status="beta"
            href="https://mirror.app"
            buttonText="View Mirror"
          />
        </div>

        {/* Now Building */}
        <NowBuildingCard
          title="AI Automation Agent"
          description="Private until it's reliable."
          status="stealth"
        />
      </section>

      {/* About Section */}
      <section className="my-20">
        <SectionTitle>About</SectionTitle>
        <p className="text-text-secondary text-base leading-relaxed max-w-[600px]">
          I build software that solves{" "}
          <strong className="text-foreground font-medium">
            narrow problems well
          </strong>
          . No pitches, no vision decks — just working products. Everything here
          is live or in active development.
        </p>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Index;
