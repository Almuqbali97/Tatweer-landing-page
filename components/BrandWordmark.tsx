"use client";

import { useLayoutEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type BrandWordmarkProps = {
  className?: string;
  arabicClassName?: string;
  englishClassName?: string;
};

export default function BrandWordmark({
  className,
  arabicClassName,
  englishClassName,
}: BrandWordmarkProps) {
  const englishRef = useRef<HTMLSpanElement>(null);
  const arabicRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const english = englishRef.current;
    const arabic = arabicRef.current;
    if (!english || !arabic) return;

    const measureText = (el: HTMLElement) => {
      const range = document.createRange();
      range.selectNodeContents(el);
      const width = range.getBoundingClientRect().width;
      range.detach();
      return width;
    };

    const fit = () => {
      arabic.style.fontSize = "";
      const targetWidth = measureText(english);
      const currentWidth = measureText(arabic);
      if (targetWidth <= 0 || currentWidth <= 0) return;
      const currentSize = parseFloat(getComputedStyle(arabic).fontSize);
      arabic.style.fontSize = `${currentSize * (targetWidth / currentWidth)}px`;
    };

    fit();
    void document.fonts.ready.then(fit);
    const observer = new ResizeObserver(fit);
    observer.observe(english);
    return () => observer.disconnect();
  }, [arabicClassName, englishClassName]);

  return (
    <span className={cn("inline-flex flex-col items-stretch", className)}>
      <span
        ref={arabicRef}
        lang="ar"
        dir="rtl"
        className={cn("block text-center whitespace-nowrap", arabicClassName)}
      >
        تـــــطـــــويــــــر
      </span>
      <span
        ref={englishRef}
        className={cn("block whitespace-nowrap", englishClassName)}
      >
        TATWEER
      </span>
    </span>
  );
}
