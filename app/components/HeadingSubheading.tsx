import { cn } from "@/app/lib/utils";

type HeadingSubheadingProps = {
  heading: string;
  subheading: string;
  className?: string;
};

export default function HeadingSubheading({
  heading,
  subheading,
  className,
}: HeadingSubheadingProps) {
  return (
    <div
      className={cn(
        "flex gap-[40px] items-start px-[100px] py-0 relative w-full max-w-[1440px] mx-auto",
        className
      )}
    >
      <div className="flex flex-col items-start relative shrink-0">
        <div className="bg-[#b9ff66] flex flex-col items-start px-[7px] py-0 relative rounded-[7px] shrink-0">
          <h2 className="font-medium leading-[normal] relative shrink-0 text-[40px] text-black">
            {heading}
          </h2>
        </div>
      </div>
      <p className="font-normal leading-[normal] relative shrink-0 text-[18px] text-black w-[580px] whitespace-pre-wrap">
        {subheading}
      </p>
    </div>
  );
}
