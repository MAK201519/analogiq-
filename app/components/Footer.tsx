import { cn } from "../lib/utils";
import LogoIcon from "@/app/assets/icons/logo-icon.svg";
import LogoPositivus from "@/app/assets/icons/logo-positivus.svg";
import LinkedInIcon from "@/app/assets/icons/linkedin.svg";
import FacebookIcon from "@/app/assets/icons/facebook.svg";
import TwitterIcon from "@/app/assets/icons/twitter.svg";
import Link from "next/link";
import SubscriptionForm from "./SubscriptionForm";

const navLinks = [
  { href: ".", label: "About us" },
  { href: ".", label: "Services" },
  { href: ".", label: "Use Cases" },
  { href: ".", label: "Pricing" },
  { href: ".", label: "Blog" },
];

export default function Footer({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-col items-start px-[100px] pr-[99px] py-0 relative w-full max-w-[1440px] mx-auto",
        className
      )}
    >
      <div className="bg-[#191a23] flex flex-col gap-[50px] items-start pb-[50px] pt-[55px] px-[60px] relative rounded-tl-[45px] rounded-tr-[45px] shrink-0 w-full">
        <div className="flex flex-col gap-[66px] items-start relative shrink-0 w-full">
          {/* Top section: Logo, Navigation, Social Icons */}
          <div className="flex justify-between items-center relative shrink-0 w-full">
            {/* Logo with white fill */}
            <Link
              href="."
              className="flex items-center gap-[11px] shrink-0 h-[29px] w-[180px]"
              aria-label="Home"
            >
              <LogoIcon
                className="block max-w-none [&_path]:fill-white"
                width={29}
                height={29}
              />
              <LogoPositivus
                className="block max-w-none [&_path]:fill-white"
                width={140}
                height={29}
              />
            </Link>

            {/* Navigation Links */}
            <div className="flex font-normal gap-[40.5px] items-start leading-[normal] relative shrink-0 text-[18px] text-white underline">
              {navLinks.map(({ href, label }, index) => (
                <Link
                  key={index}
                  href={href}
                  className="[text-decoration-skip-ink:none] [text-underline-position:from-font] underline-offset-1 decoration-solid relative shrink-0"
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Social Icons */}
            <div className="h-[30px] relative shrink-0 flex gap-[20px] items-center">
              {[
                {
                  icon: LinkedInIcon,
                  href: ".",
                  label: "LinkedIn",
                },
                {
                  icon: FacebookIcon,
                  href: ".",
                  label: "Facebook",
                },
                {
                  icon: TwitterIcon,
                  href: ".",
                  label: "Twitter",
                },
              ].map(({ icon: Icon, href, label }, index) => (
                <Link
                  key={index}
                  href={href}
                  className="block max-w-none size-full"
                  aria-label={label}
                >
                  <Icon width={30} height={30} />
                </Link>
              ))}
            </div>
          </div>

          {/* Middle section: Contact Info and Subscription */}
          <div className="flex gap-[154px] items-start relative shrink-0 w-full">
            {/* Contact Information */}
            <div className="flex flex-col gap-[27px] items-start relative shrink-0">
              <div className="flex flex-col items-start relative shrink-0">
                <div className="bg-[#b9ff66] flex flex-col items-start px-[7px] py-0 relative rounded-[7px] shrink-0">
                  <p className="font-medium leading-[normal] relative shrink-0 text-[20px] text-black">
                    Contact us:
                  </p>
                </div>
              </div>
              <div className="flex flex-col font-normal gap-[20px] items-start relative shrink-0 text-[18px] text-white">
                <p className="leading-[normal] relative shrink-0">
                  Email: info@positivus.com
                </p>
                <p className="leading-[normal] relative shrink-0">
                  Phone: 555-567-8901
                </p>
                <div className="leading-[normal] relative shrink-0">
                  <p className="mb-0">Address: 1234 Main St</p>
                  <p>Moonstone City, Stardust State 12345</p>
                </div>
              </div>
            </div>

            {/* Subscription Form */}
            <SubscriptionForm />
          </div>
        </div>

        {/* Bottom section: Line and Copyright */}
        <div className="flex flex-col gap-[50px] items-start relative shrink-0 w-full">
          <div className="h-0 relative shrink-0 w-full border-t border-white"></div>
          <div className="flex font-normal gap-[41px] items-start leading-[28px] relative shrink-0 text-[18px] text-white">
            <p className="relative shrink-0">
              © 2023 Positivus. All Rights Reserved.
            </p>
            <Link
              href="."
              className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid relative shrink-0 underline"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
