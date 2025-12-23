import { cn } from "@/app/lib/utils";
import LearnMoreLink from "./LearnMoreLink";
import { Fragment } from "react";

type CaseStudy = {
  description: string;
};

const caseStudies: CaseStudy[] = [
  {
    description:
      "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  },
  {
    description:
      "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  },
  {
    description:
      "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
  },
];

export default function CaseStudies({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-col items-start px-[100px] py-0 relative w-full max-w-[1440px] mx-auto",
        className
      )}
      data-name="Case studies block"
    >
      <div
        className="bg-[#191a23] flex gap-[128px] px-[60px] pt-[70px] pb-[69px] relative rounded-[45px] shrink-0 ml-[3px]"
        data-name="Case studies"
      >
        {caseStudies.map((caseStudy, index) => (
          <Fragment key={index}>
            <div
              key={index}
              className="flex flex-col gap-[18px] items-start relative shrink-0"
              data-name="Case study"
            >
              {index > 0 && (
                <div
                  className="absolute -left-[64px] top-0 bottom-0 w-px h-full bg-white opacity-20"
                  aria-hidden="true"
                />
              )}
              <p className="font-normal leading-[normal] relative shrink-0 text-[18px] text-white w-[286px] whitespace-pre-wrap">
                {caseStudy.description}
              </p>
              <LearnMoreLink variant="SimpleGreen" />
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
