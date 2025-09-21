"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
// import Autoplay from "embla-carousel-autoplay";
import {
  usePrevNextButtons,
  PrevButton,
  NextButton,
} from "./EmblaCarouselArrowButtons";
import { useDotButton, DotButton } from "./EmblaCarouselDotButton";

export default function EmblaCarousel({ children, options, showViewAll }) {
  const plugins = [];

  // if (options?.autoplay) {
  //   plugins.push(Autoplay({ delay: 3000, stopOnInteraction: false }));
  // }

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { ...options, loop: options?.loop ?? false },
    plugins
  );
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <div className="relative">
      {/* Header */}

      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-1 md:pt-3">{children}</div>
      </div>

      <div className="md:flex hidden items-center justify-end gap-4 pt-8">
        {options?.showButton && (
          <div className="flex items-center gap-6">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        )}
      </div>

      {/* Dots */}
      {options?.showDots && (
        <div className="dot-nav flex justify-end mt-4 gap-2 pe-4">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`
          h-3 rounded-full transition-all duration-300 cursor-pointer
          ${
            index === selectedIndex
              ? "w-9 bg-[#04D9FF]" // Active dot → width badi + blue
              : "w-3 bg-[#B0EEFF]"
          } // Inactive dot → chhoti + grey
        `}
            />
          ))}
        </div>
      )}
    </div>
  );
}
