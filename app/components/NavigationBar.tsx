import Logo from "./Logo";
import Link from "next/link";
import Button from "./Button";

const navLinks = [
  { href: ".", label: "About us" },
  { href: ".", label: "Services" },
  { href: ".", label: "Use Cases" },
  { href: ".", label: "Pricing" },
  { href: ".", label: "Blog" },
];

export default function NavigationBar() {
  return (
    <div className="flex items-center justify-between px-[100px] py-0 relative w-full max-w-[1440px] mx-auto">
      <Link
        href="/"
        className="flex items-start overflow-clip px-0 py-[10px] relative shrink-0"
      >
        <Logo className="h-[36px] relative shrink-0 w-[219.537px]" />
      </Link>
      <div className="flex gap-[40px] items-center justify-center relative shrink-0">
        {navLinks.map(({ href, label }, index) => (
          <Link
            key={index}
            href={href}
            className="font-normal leading-[28px] relative shrink-0 text-[20px] text-black pl-px"
          >
            {label}
          </Link>
        ))}
        <Button href="." variant="secondary" className="py-[18px] pl-[34px]">
          Request a quote
        </Button>
      </div>
    </div>
  );
}
