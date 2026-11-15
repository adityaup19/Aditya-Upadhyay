import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { site, projectBySlug } from "@/content/site";
import { Body, Label, Pill, ProjectVisual, WorkGrid } from "@/components/site/pieces";

const Project = () => {
  const { slug } = useParams();
  const project = slug ? projectBySlug(slug) : undefined;

  useEffect(() => {
    document.title = project ? `${project.title} — Aditya Upadhyay` : "Work — Aditya Upadhyay";
  }, [project]);

  if (!project) {
    return (
      <div className="px-5 pb-24 pt-40 md:px-[72px]">
        <h1 className="display text-[clamp(3.4rem,10vw,8rem)]">Project not found.</h1>
        <Link to="/work" className="mono mt-8 inline-block text-[14px] text-[#888] hover:text-white">
          View all works
        </Link>
      </div>
    );
  }

  const more = site.projects.filter((item) => item.slug !== project.slug).slice(0, 2);

  return (
    <article>
      <header className="px-5 pb-6 pt-28 md:px-[72px] md:pt-32">
        <h1 className="text-[clamp(2rem,4vw,3.25rem)] font-medium tracking-[-0.03em] text-white">{project.title}</h1>
        <p className="mt-3 max-w-2xl text-[17px] leading-snug tracking-[-0.01em] text-white/70 md:text-[19px]">{project.tagline}</p>
        <div className="mt-5 h-10 overflow-hidden md:h-12">
          <ProjectVisual project={project} quiet />
        </div>
      </header>

      <section className="grid gap-10 px-5 pb-16 pt-8 md:grid-cols-[1.4fr_0.8fr] md:gap-20 md:px-[72px] md:pt-6">
        <div className="md:pl-10">
          <Label>Overview</Label>
          <div className="mt-5 max-w-[36rem] space-y-6">
            {project.overview.map((paragraph) => (
              <Body key={paragraph}>{paragraph}</Body>
            ))}
          </div>
        </div>
        <div className="space-y-8">
          <div>
            <Label>Services</Label>
            <p className="mt-3 text-[21px] tracking-[-0.01em] text-white/80">{project.tags.join(" / ")}</p>
          </div>
          <div>
            <Label>Year</Label>
            <p className="mt-3 text-[21px] tracking-[-0.01em] text-white/80">{project.year}</p>
          </div>
          {project.href ? <Pill href={project.href}>View online</Pill> : null}
        </div>
      </section>

      <section className="px-5 pb-8 md:px-[72px]">
        <h2 className="display mb-10 text-[clamp(2.6rem,6vw,4.5rem)] text-white">More Projects</h2>
        <WorkGrid projects={more} />
      </section>
    </article>
  );
};

export default Project;
