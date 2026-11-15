import { useEffect } from "react";
import { site } from "@/content/site";
import { PageTitle, WorkGrid } from "@/components/site/pieces";

const Work = () => {
  useEffect(() => {
    document.title = "Work — Aditya Upadhyay";
  }, []);

  return (
    <div className="px-5 pb-10 md:px-[72px]">
      <div className="-mx-5 md:-mx-[72px]">
        <PageTitle title="Selected Work" lede={site.workLede} />
      </div>
      <WorkGrid projects={site.projects} compact />
    </div>
  );
};

export default Work;
