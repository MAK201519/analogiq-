import { cn } from "@/app/lib/utils";
import Button from "./Button";
import CtaIllustration from "@/app/assets/illustrations/cta.svg";

type CTAProps = {
  className?: string;
};

export default function CTA({ className }: CTAProps) {
  return (
    <div
      className={cn(
        "flex items-center px-[100px] py-0 relative w-full max-w-[1440px] mx-auto",
        className
      )}
    >
      <div className="bg-[#f3f3f3] flex items-center px-[60px] py-0 relative rounded-[45px] shrink-0 w-[1240px] h-[347px] mr-[-494px]">
        <div className="flex flex-col gap-[26px] items-start relative shrink-0">
          <h3 className="font-medium leading-[normal] relative shrink-0 text-[30px] text-black w-[500px] whitespace-pre-wrap">
            Let&apos;s make things happen
          </h3>
          <p className="font-normal leading-[normal] relative shrink-0 text-[18px] text-black w-[500px] whitespace-pre-wrap">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <Button variant="primary" className="py-[19px] mb-[2px]">
            Get your free proposal
          </Button>
        </div>
      </div>
      <div className="h-[394px] relative shrink-0 w-[494px] mr-[-494px]">
        <div className="absolute flex h-[394px] items-center justify-center left-0 top-0 w-[359px]">
          <div className="flex-none">
            <CtaIllustration
              className="block max-w-none h-[394px] w-[359px]"
              width={359}
              height={394}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
