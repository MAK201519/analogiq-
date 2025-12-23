import { cn } from "../lib/utils";
import AmazonLogo from "@/app/assets/icons/companies/amazon.svg";
import DribbbleLogo from "@/app/assets/icons/companies/dribbble.svg";
import HubSpotLogo from "@/app/assets/icons/companies/hubspot.svg";
import NotionLogo from "@/app/assets/icons/companies/notion.svg";
import NetflixLogo from "@/app/assets/icons/companies/netflix.svg";
import ZoomLogo from "@/app/assets/icons/companies/zoom.svg";

type LogoItem = {
  Logo: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  width: string;
};

const logos: LogoItem[] = [
  {
    Logo: AmazonLogo,
    width: "w-[124.113px]",
  },
  {
    Logo: DribbbleLogo,
    width: "w-[126.369px]",
  },
  {
    Logo: HubSpotLogo,
    width: "w-[128.626px]",
  },
  {
    Logo: NotionLogo,
    width: "w-[145.551px]",
  },
  {
    Logo: NetflixLogo,
    width: "w-[125.241px]",
  },
  {
    Logo: ZoomLogo,
    width: "w-[110.573px]",
  },
];

export default function Logotypes({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex items-start justify-between px-[100px] py-0 relative w-full max-w-[1440px] mx-auto",
        className
      )}
    >
      {logos.map(({ Logo, width }, index) => (
        <div
          key={index}
          className={cn(
            "h-[48px] mix-blend-luminosity overflow-clip relative shrink-0 flex items-center justify-center",
            width
          )}
        >
          <Logo className="block max-w-none size-full" />
        </div>
      ))}
    </div>
  );
}
