import { cn } from "../lib/utils";
import Button from "./Button";
import HeaderIllustration from "@/app/assets/illustrations/header.svg";

export default function Header({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex items-start justify-between px-[100px] py-0 relative w-full max-w-[1440px] mx-auto",
        className
      )}
    >
      <div className="flex flex-col gap-[35px] items-start relative shrink-0">
        <h1 className="font-medium leading-[normal] relative shrink-0 text-[60px] text-black w-[531px] whitespace-pre-wrap">
          Navigating the digital landscape for success
        </h1>
        <p className="font-normal leading-[28px] relative shrink-0 text-[20px] text-black w-[498px] whitespace-pre-wrap">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <Button variant="primary" className="py-[19px] pr-[36px]">
          Book a consultation
        </Button>
      </div>
      <div className="relative shrink-0">
        <HeaderIllustration
          className="block max-w-none"
          width={601}
          height={515}
        />
      </div>
    </div>
  );
}
