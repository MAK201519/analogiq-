import { cn } from "@/app/lib/utils";

type HeadingSubheadingProps = {
  heading: string;
  subheading: string;
  className?: string;
  subheadingClassName?: string;
};

export default function HeadingSubheading({
  heading,
  subheading,
  className,
  subheadingClassName,
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
      <p
        className={cn(
          "font-normal text-lg/[normal] relative shrink-0 text-black w-[580px] whitespace-pre-wrap",
          subheadingClassName
        )}
      >
        {subheading}
      </p>
    </div>
  );
}
