import { useEffect } from "react";
import { site } from "@/content/site";
import { PageTitle, PressList } from "@/components/site/pieces";

const Press = () => {
  useEffect(() => {
    document.title = "Press — Aditya Upadhyay";
  }, []);

  return (
    <div className="px-5 pb-16 md:px-[72px]">
      <div className="-mx-5 md:-mx-[72px]">
        <PageTitle title="Press" lede={site.pressLede} />
      </div>
      <PressList items={site.press} />
    </div>
  );
};

export default Press;
