import Link from "next/link";
import { cn } from "@/app/lib/utils";

type ButtonVariant = "primary" | "secondary" | "tertiary";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
};

export default function Button({
  type,
  variant = "secondary",
  children,
  href,
  onClick,
  className,
}: ButtonProps) {
  const baseStyles =
    "flex items-start px-[35px] py-[20px] relative rounded-[14px] shrink-0 font-normal leading-[28px] text-[20px] text-center transition-colors cursor-pointer";

  const variantStyles = {
    primary: "bg-[#191a23] text-white hover:bg-[#2a2b35]",
    secondary:
      "border border-[#191a23] border-solid text-black hover:bg-[#f5f5f5]",
    tertiary: "bg-[#b9ff66] text-black hover:bg-[#a8e55a]",
  };

  const combinedClassName = cn(baseStyles, variantStyles[variant], className);

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
}
