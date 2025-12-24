import { cn } from "@/app/lib/utils";
import ServiceCard, {
  type CardVariant,
  type IllustrationStyle,
} from "./ServiceCard";
import type { StaticImageData } from "next/image";
import imgSEO from "@/app/assets/illustrations/services/tokyo-magnifier-web-search-with-elements-2.png";
import imgPPC from "@/app/assets/illustrations/services/tokyo-selecting-a-value-in-the-browser-window-1.png";
import imgSocialMedia from "@/app/assets/illustrations/services/tokyo-browser-window-with-emoticon-likes-and-stars-around-2.png";
import imgEmail from "@/app/assets/illustrations/services/tokyo-sending-messages-from-one-place-to-another-1.png";
import imgContent from "@/app/assets/illustrations/services/tokyo-many-browser-windows-with-different-information-1.png";
import imgAnalytics from "@/app/assets/illustrations/services/tokyo-volumetric-analytics-of-different-types-in-web-browsers-2.png";

type ServiceItem = {
  lines: string[];
  cardVariant: CardVariant;
  illustrationSrc: StaticImageData;
  illustrationAlt: string;
  illustrationStyle: IllustrationStyle;
};

const services: ServiceItem[] = [
  {
    lines: ["Search engine", "optimization"],
    cardVariant: "Grey",
    illustrationSrc: imgSEO,
    illustrationAlt: "Search engine optimization illustration",
    illustrationStyle: {
      containerHeight: 170,
      containerWidth: 210,
      backgroundSize: { width: 148.84, height: 183.86 },
    },
  },
  {
    lines: ["Pay-per-click", "advertising"],
    cardVariant: "Green",
    illustrationSrc: imgPPC,
    illustrationAlt: "Pay-per-click advertising illustration",
    illustrationStyle: {
      containerHeight: 147.624,
      containerWidth: 210,
      backgroundSize: { width: 126.73, height: 180.28 },
    },
  },
  {
    lines: ["Social Media", "Marketing"],
    cardVariant: "DarkWhite",
    illustrationSrc: imgSocialMedia,
    illustrationAlt: "Social Media Marketing illustration",
    illustrationStyle: {
      containerHeight: 210,
      containerWidth: 210,
      backgroundSize: { width: 141.44, height: 141.44 },
    },
  },
  {
    lines: ["Email", "Marketing"],
    cardVariant: "Grey",
    illustrationSrc: imgEmail,
    illustrationAlt: "Email Marketing illustration",
    illustrationStyle: {
      containerHeight: 192.68,
      containerWidth: 210,
      backgroundSize: { width: 140.67, height: 153.3 },
      backgroundPosition: { x: 59 - 75.7, y: 50 - 76.6 },
      transform: "scaleX(-1)",
    },
  },
  {
    lines: ["Content", "Creation"],
    cardVariant: "Green",
    illustrationSrc: imgContent,
    illustrationAlt: "Content Creation illustration",
    illustrationStyle: {
      containerHeight: 195.915,
      containerWidth: 210,
      backgroundSize: { width: 132.08, height: 141.26 },
    },
  },
  {
    lines: ["Analytics and", "Tracking"],
    cardVariant: "DarkGreen",
    illustrationSrc: imgAnalytics,
    illustrationAlt: "Analytics and Tracking illustration",
    illustrationStyle: {
      containerHeight: 170,
      containerWidth: 210,
      backgroundSize: { width: 108.36, height: 134.02 },
    },
  },
];

export default function Services({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-col gap-[40px] items-start relative w-full max-w-[1440px] mx-auto",
        className
      )}
      data-name="Services block"
    >
      {services.map((service, index) => {
        // Group services into rows of 2
        const isFirstInRow = index % 2 === 0;

        if (isFirstInRow) {
          return (
            <div
              key={index}
              className="flex gap-[40px] items-start px-[100px] py-0 relative shrink-0 w-full"
              data-name="Cards section"
            >
              <ServiceCard {...service} />
              {services[index + 1] && <ServiceCard {...services[index + 1]} />}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}
