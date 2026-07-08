"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import type { StaticImageData } from "next/image";

import pic1 from "@/images/hero-bg.jpg";
import pic2 from "@/images/main-pic-3.jpeg";
import pic3 from "@/images/fourhProject-1.jpg";

type Slide = {
  id: string;
  src: StaticImageData;
  alt: string;
};

const SLIDES: Slide[] = [
  { id: "hero-1", src: pic2, alt: "Solantra päikesekatus eramul" },
  { id: "hero-2", src: pic2, alt: "Lähivõte päikesekatuse moodulitest" },
  { id: "hero-3", src: pic2, alt: "Päikesekatus õhtuvalguses" },
];

export default function HeroCarousel({
  children,
}: {
  children?: ReactNode;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const SWIPE_THRESHOLD = 50;

  const goTo = useCallback((next: number) => {
    setIndex((next + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (paused) return;

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, 3000);

    return () => clearInterval(id);
  }, [paused]);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;

    const distance = touchStartX.current - touchEndX.current;

    if (distance > SWIPE_THRESHOLD) {
      goTo(index + 1);
    } else if (distance < -SWIPE_THRESHOLD) {
      goTo(index - 1);
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      className="group relative hero w-full overflow-hidden touch-pan-y sm:h-[74vh] pt-14 md:pt-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {SLIDES.map((slide, i) => (
        <Image
          key={slide.id}
          src={slide.src}
          alt={slide.alt}
          fill
          priority={i === 0}
          sizes="100vw"
          className={`object-cover transition-opacity duration-700 ease-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/60 to-transparent" />

      {children && (
        <div className="absolute inset-x-0 bottom-0 pb-10 sm:pb-14">
          {children}
        </div>
      )}

      <button
        type="button"
        onClick={() => goTo(index - 1)}
        aria-label="Eelmine pilt"
        className="absolute left-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 text-slate-900 opacity-0 transition group-hover:opacity-100 sm:flex"
      >
        ‹
      </button>

      <button
        type="button"
        onClick={() => goTo(index + 1)}
        aria-label="Järgmine pilt"
        className="absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 text-slate-900 opacity-0 transition group-hover:opacity-100 sm:flex"
      >
        ›
      </button>

      <div className="absolute bottom-6 right-6 flex items-center gap-2 sm:right-10">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Ava pilt ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-6 bg-white" : "w-1.5 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}