"use client";

import { useCallback, useEffect, useRef, useState } from "react";
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

  const cardsRef = useRef<HTMLDivElement | null>(null);
  const [pointer, setPointer] = useState<{ x: number; x0: number } | null>(
    null
  );
  const pointerRef = useRef<{ x: number; x0: number } | null>(pointer);

  useEffect(() => {
    pointerRef.current = pointer;
  }, [pointer]);

  const handlePointerMove = useCallback((e: PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setPointer((prev) => ({ x: e.pageX, x0: prev?.x0 ?? e.pageX }));
  }, []);

  const handlePointerUp = useCallback(() => {
    window.removeEventListener("pointermove", handlePointerMove);
    // eslint-disable-next-line react-hooks/immutability
    window.removeEventListener("pointerup", handlePointerUp);
    const pointer = pointerRef.current;
    if (!pointer) return;
    const cardWidth = cardsRef.current?.clientWidth ?? 0;
    const deltaX = pointer.x - pointer.x0;
    const deltaSign = Math.abs(deltaX) > 10 ? Math.sign(deltaX) : 0;
    if (deltaSign) {
      const deltaIndex = cardWidth
        ? Math.ceil(Math.abs(deltaX) / cardWidth) * deltaSign
        : deltaSign;
      setCurrentIndex((prev) => prev - deltaIndex);
    }
    setPointer(null);
  }, [handlePointerMove]);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      window.addEventListener("pointermove", handlePointerMove);
      window.addEventListener("pointerup", handlePointerUp);
      setPointer(() => ({ x: e.pageX, x0: e.pageX }));
    },
    [handlePointerMove, handlePointerUp]
  );

  const translateXPercentage =
    (-currentIndex * 100) / testimonials.length + "%";
  const translateXPixels = pointer ? `${pointer.x - pointer.x0}px` : "";
  const translateX = translateXPixels
    ? `calc(${translateXPercentage} + ${translateXPixels})`
    : translateXPercentage;

  return (
    <div
      className={cn(
        "max-w-[1440px] mx-auto px-[100px] max-xl:px-[60px] max-sm:px-[30px]",
        className
      )}
    >
      <div
        className={cn(
          "bg-[#191a23] overflow-clip relative rounded-[45px] size-full",
          className
        )}
        data-name="Testimonials block"
      >
        <div
          className="flex flex-col gap-[124px] max-md:gap-[80px] max-sm:gap-[40px] items-center relative pt-[84px] pb-[68px] max-md:py-[60px] max-sm:py-[40px]"
          data-name="Testimonials"
        >
          <div
            className="flex items-start justify-center gap-0 relative shrink-0 w-full overflow-hidden xl:pr-[14px] max-lg:px-[30px]"
            data-name="Cards"
            onPointerDown={handlePointerDown}
          >
            <div className="w-full max-w-[656px] mx-auto" ref={cardsRef}>
              <div
                className="flex items-start transition-transform duration-300 ease-in-out"
                style={{
                  width: `${testimonials.length * 100}%`,
                  transform: `translateX(${translateX})`,
                  transition: pointer ? "none" : undefined,
                }}
              >
                {testimonials.map((testimonial, index) => {
                  const N = testimonials.length;
                  const offset = Math.round((currentIndex - index) / N) * N;
                  const transform = `translateX(${offset * 100}%)`;
                  return (
                    <TestimonialCard
                      key={index}
                      quote={testimonial.quote}
                      authorName={
                        testimonial.authorName +
                        (process.env.NODE_ENV === "development"
                          ? ` #${index + 1}${" ".repeat(60)}#${index + 1}`
                          : "")
                      }
                      authorTitle={testimonial.authorTitle}
                      style={{ transform }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div
            className="content-stretch flex items-center justify-between gap-[10px] relative shrink-0 w-full px-[40px] max-w-[644px] xl:mr-[14px]"
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
            <div className="col-1 h-[14px] ml-0 mt-0 relative row-1 w-full max-w-[146px] flex items-center justify-between flex-1">
              {Array.from({ length: testimonials.length }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActualIndex(index)}
                  className="p-0 m-0 border-none bg-transparent cursor-pointer"
                  aria-label={
                    index === actualIndex
                      ? `Current testimonial ${index + 1} of ${
                          testimonials.length
                        }`
                      : `Go to testimonial ${index + 1} of ${
                          testimonials.length
                        }`
                  }
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
