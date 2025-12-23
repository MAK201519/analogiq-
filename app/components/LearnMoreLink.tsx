import { cn } from "@/app/lib/utils";

type LearnMoreLinkVariant =
  | "White"
  | "White2"
  | "Black"
  | "Black2"
  | "Green"
  | "Green2"
  | "SimpleGreen"
  | "SimpleWhite"
  | "SimpleBlack";

type LearnMoreLinkProps = {
  variant?: LearnMoreLinkVariant;
  children?: React.ReactNode;
  className?: string;
};

export default function LearnMoreLink({
  variant = "Black",
  children = "Learn more",
  className,
}: LearnMoreLinkProps) {
  const isSimple =
    variant === "SimpleGreen" ||
    variant === "SimpleWhite" ||
    variant === "SimpleBlack";

  // Determine circle fill color
  const getCircleFill = () => {
    if (isSimple) return "none";
    if (variant === "Black") return "#000000";
    if (variant === "Green" || variant === "Green2") return "#B9FF66";
    return "#FFFFFF";
  };

  // Determine arrow path fill color
  const getArrowFill = () => {
    if (
      variant === "Black" ||
      variant === "White2" ||
      variant === "SimpleGreen"
    )
      return "#B9FF66";
    if (variant === "Green2" || variant === "SimpleWhite") return "#FFFFFF";
    return "#000000";
  };

  // Determine text color
  const getTextColor = () => {
    if (
      variant === "White" ||
      variant === "White2" ||
      variant === "Green2" ||
      variant === "SimpleWhite"
    )
      return "text-white";
    if (
      variant === "Black" ||
      variant === "Black2" ||
      variant === "Green" ||
      variant === "SimpleBlack"
    )
      return "text-black";
    if (variant === "SimpleGreen") return "text-[#b9ff66]";
    return "text-black";
  };

  const circleFill = getCircleFill();
  const arrowFill = getArrowFill();
  const textColor = getTextColor();

  return (
    <div
      className={cn("flex gap-[15px] items-center relative", className)}
      data-name="Link"
    >
      <div
        className={cn(
          "relative shrink-0",
          isSimple ? "h-[10px] w-[17.321px]" : "size-[41px]"
        )}
        data-name="Icon"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={isSimple ? 17.321 : 41}
          height={isSimple ? 10 : 41}
          viewBox="0 0 41 41"
          fill="none"
        >
          {!isSimple && (
            <circle cx="20.5" cy="20.5" r="20.5" fill={circleFill} />
          )}
          <path
            d="M11.2501 24.7009C10.5326 25.1151 10.2868 26.0325 10.701 26.75C11.1152 27.4674 12.0326 27.7132 12.7501 27.299L11.2501 24.7009ZM30.7694 16.3882C30.9839 15.588 30.509 14.7655 29.7088 14.5511L16.6688 11.057C15.8686 10.8426 15.0461 11.3175 14.8317 12.1177C14.6173 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0606L24.3776 28.6517C24.1632 29.4519 24.6381 30.2744 25.4383 30.4888C26.2385 30.7033 27.061 30.2284 27.2754 29.4282L30.7694 16.3882ZM12.7501 27.299L30.0706 17.299L28.5706 14.7009L11.2501 24.7009L12.7501 27.299Z"
            fill={arrowFill}
          />
        </svg>
      </div>
      <p
        className={cn(
          "font-normal leading-[28px] relative shrink-0 text-[20px]",
          textColor
        )}
      >
        {children}
      </p>
    </div>
  );
}
