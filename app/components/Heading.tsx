import { cn } from "@/app/lib/utils";

export type HeadingVariant = "Green" | "White" | "Black";

type HeadingProps = {
  lines: string[];
  variant?: HeadingVariant;
  fontSize?: string;
  className?: string;
};

export default function Heading({
  lines,
  variant = "Green",
  fontSize = "40px",
  className,
}: HeadingProps) {
  // Limit to 3 lines
  const displayLines = lines.slice(0, 3);

  // Determine background color based on variant
  const getBackgroundColor = () => {
    if (variant === "Green") return "#b9ff66";
    if (variant === "White") return "#ffffff";
    return "#191a23"; // Black variant
  };

  // Determine text color based on variant
  const getTextColor = () => {
    if (variant === "Black") return "#ffffff";
    return "#000000"; // Green and White variants use black text
  };

  const backgroundColor = getBackgroundColor();
  const textColor = getTextColor();

  return (
    <div
      className={cn("flex flex-col items-start relative", className)}
      data-name="Heading"
    >
      {displayLines.map((line, index) => (
        <div
          key={index}
          className="flex flex-col items-start px-[7px] py-0 relative rounded-[7px] shrink-0"
          style={{ backgroundColor }}
          data-name="Label"
        >
          <p
            className="font-medium leading-[1.27] relative shrink-0"
            style={{ color: textColor, fontSize }}
          >
            {line}
          </p>
        </div>
      ))}
    </div>
  );
}
