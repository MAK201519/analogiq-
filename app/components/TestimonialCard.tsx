import { cn } from "@/app/lib/utils";
import BubbleIcon from "@/app/assets/icons/testimonials/bubble.svg";

type TestimonialCardProps = {
  quote: string;
  authorName: string;
  authorTitle: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function TestimonialCard({
  quote,
  authorName,
  authorTitle,
  className,
  style,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-[20px] items-end relative shrink-0",
        className
      )}
      data-name="Card"
      style={style}
    >
      <div className="h-[266px] relative shrink-0 w-[606px]" data-name="Bubble">
        <div className="absolute h-[266px] left-0 top-0 w-[606px]">
          <BubbleIcon
            className="block max-w-none size-full"
            width={606}
            height={266}
          />
        </div>
        <p
          className="absolute font-normal leading-[normal] left-[52px] text-[18px] text-white top-[48px] w-[502px] whitespace-pre-wrap"
          data-node-id="quote"
        >
          &quot;{quote}&quot;
        </p>
      </div>
      <div
        className="font-normal leading-[normal] relative shrink-0 text-[0px] text-white w-[526px] whitespace-pre-wrap"
        data-node-id="author"
      >
        <p className="font-medium mb-0 text-[#b9ff66] text-[20px]">
          {authorName}
        </p>
        <p className="text-[18px]">{authorTitle}</p>
      </div>
    </div>
  );
}
