"use client";

import { useState } from "react";
import { cn } from "@/app/lib/utils";
import TestimonialCard from "./TestimonialCard";
import ArrowLeftIcon from "@/app/assets/icons/testimonials/arrow-left.svg";
import StarIcon from "@/app/assets/icons/testimonials/star.svg";

type Testimonial = {
  quote: string;
  authorName: string;
  authorTitle: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    authorName: "John Smith",
    authorTitle: "Marketing Director at XYZ Corp",
  },
  {
    quote:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    authorName: "John Smith",
    authorTitle: "Marketing Director at XYZ Corp",
  },
  {
    quote:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    authorName: "John Smith",
    authorTitle: "Marketing Director at XYZ Corp",
  },
  {
    quote:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    authorName: "John Smith",
    authorTitle: "Marketing Director at XYZ Corp",
  },
  {
    quote:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    authorName: "John Smith",
    authorTitle: "Marketing Director at XYZ Corp",
  },
];

const fixModulo = (value: number, modulo: number) => {
  return ((value % modulo) + modulo) % modulo;
};

export default function Testimonials({ className }: { className?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const actualIndex = fixModulo(currentIndex, testimonials.length);

  const handlePrevious = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const setActualIndex = (index: number) => {
    setCurrentIndex(
      (prev) => prev + (index - fixModulo(prev, testimonials.length))
    );
  };

  return (
    <div className={cn("max-w-[1440px] mx-auto px-[100px]", className)}>
      <div
        className={cn(
          "bg-[#191a23] overflow-clip relative rounded-[45px] size-full",
          className
        )}
        data-name="Testimonials block"
      >
        <div
          className="flex flex-col gap-[124px] items-center relative pt-[84px] pb-[68px]"
          data-name="Testimonials"
        >
          <div
            className="flex items-start justify-center gap-0 relative shrink-0 w-full overflow-hidden"
            data-name="Cards"
          >
            <div
              className="flex items-start gap-[50px] transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(calc(${-currentIndex} * (606px + 50px) + 50% - 310px))`,
              }}
            >
              {testimonials.map((testimonial, index) => {
                const N = testimonials.length;
                const offset = Math.round((currentIndex - index) / N) * N;
                const transform = `translateX(calc((606px + 50px) * ${offset}))`;
                return (
                  <TestimonialCard
                    key={index}
                    quote={testimonial.quote}
                    authorName={testimonial.authorName}
                    authorTitle={testimonial.authorTitle}
                    style={{ transform }}
                  />
                );
              })}
            </div>
          </div>
          <div
            className="content-stretch flex items-center justify-between relative shrink-0 w-[564px] mr-[14px]"
            data-name="Navigation"
          >
            <button
              onClick={handlePrevious}
              className={cn(
                "h-0 relative shrink-0 w-[20px] cursor-pointer hover:opacity-30 transition-opacity",
                actualIndex === 0 && "opacity-30"
              )}
              data-name="Arrow left"
              aria-label="Previous testimonial"
            >
              <div className="absolute inset-[-11.05px_-7.5%]">
                <ArrowLeftIcon
                  className="block max-w-none size-full"
                  width={23}
                  height={22}
                />
              </div>
            </button>
            <div
              className="grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start leading-0 relative shrink-0"
              data-name="Navigation stars"
            >
              <div className="col-1 h-[14px] ml-0 mt-0 relative row-1 w-[146px] flex items-center gap-[19px]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActualIndex(index)}
                    className="p-0 m-0 border-none bg-transparent cursor-pointer"
                  >
                    <StarIcon
                      className={cn(
                        "block max-w-none size-full",
                        index === actualIndex ? "text-[#B9FF66]" : "text-white"
                      )}
                      width={14}
                      height={14}
                    />
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={handleNext}
              className={cn(
                "flex items-center justify-center relative shrink-0 cursor-pointer hover:opacity-30 transition-opacity",
                actualIndex === testimonials.length - 1 && "opacity-30"
              )}
              data-name="Arrow right"
              aria-label="Next testimonial"
            >
              <div className="flex-none rotate-180">
                <div className="h-0 relative w-[20px]">
                  <div className="absolute inset-[-11.05px_-7.5%]">
                    <ArrowLeftIcon
                      className="block max-w-none size-full"
                      width={23}
                      height={22}
                    />
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
