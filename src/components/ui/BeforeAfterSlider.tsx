"use client";

import { useId, useState } from "react";
import Image from "next/image";

interface SliderImage {
  src: string;
  alt: string;
}

interface BeforeAfterSliderProps {
  beforeImage: SliderImage;
  afterImage: SliderImage;
  beforeLabel: string;
  afterLabel: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel,
  afterLabel,
}: BeforeAfterSliderProps) {
  const [value, setValue] = useState(50);
  const sliderId = useId();

  function nudgeValue(direction: "left" | "right") {
    setValue((current) => {
      const delta = direction === "right" ? 5 : -5;
      return Math.min(100, Math.max(0, current + delta));
    });
  }

  return (
    <div className="soft-card overflow-hidden">
      <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[16/10]">
        <Image
          src={beforeImage.src}
          alt={beforeImage.alt}
          fill
          className="object-cover [filter:grayscale(0.2)_brightness(0.7)_saturate(0.7)]"
          sizes="(max-width: 1024px) 100vw, 65vw"
        />
        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${value}%` }}
        >
          <Image
            src={afterImage.src}
            alt={afterImage.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 65vw"
          />
        </div>
        <div
          className="absolute inset-y-0 w-px bg-[var(--accent-bright)] shadow-[0_0_30px_rgba(242,232,92,0.45)]"
          style={{ left: `calc(${value}% - 0.5px)` }}
        />
        <label htmlFor={sliderId} className="sr-only">
          Плъзгач преди и след
        </label>
        <input
          id={sliderId}
          type="range"
          min={0}
          max={100}
          step={5}
          value={value}
          aria-label="Плъзгач преди и след"
          aria-valuenow={value}
          className="absolute inset-0 z-10 h-full w-full cursor-ew-resize opacity-0"
          onChange={(event) => setValue(Number(event.target.value))}
          onKeyDown={(event) => {
            if (event.key === "ArrowRight") {
              event.preventDefault();
              nudgeValue("right");
            }

            if (event.key === "ArrowLeft") {
              event.preventDefault();
              nudgeValue("left");
            }
          }}
        />
        <div
          className="pointer-events-none absolute top-1/2 z-20 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--line-strong)] bg-[rgba(13,13,13,0.92)] text-[var(--accent-bright)] sm:h-12 sm:w-12"
          style={{ left: `${value}%` }}
        >
          <span className="text-[0.58rem] tracking-[0.12em] uppercase sm:text-xs sm:tracking-[0.18em]">|||</span>
        </div>
        <div className="absolute left-3 top-3 rounded-full border border-[var(--line-soft)] bg-black/45 px-2.5 py-1 text-[0.58rem] uppercase tracking-[0.12em] text-white sm:left-4 sm:top-4 sm:px-3 sm:text-xs sm:tracking-[0.2em]">
          {beforeLabel}
        </div>
        <div className="absolute right-3 top-3 rounded-full border border-[var(--line-soft)] bg-[var(--accent-bright)] px-2.5 py-1 text-[0.58rem] uppercase tracking-[0.12em] text-black sm:right-4 sm:top-4 sm:px-3 sm:text-xs sm:tracking-[0.2em]">
          {afterLabel}
        </div>
      </div>
    </div>
  );
}
