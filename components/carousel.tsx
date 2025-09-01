"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, PanInfo } from "framer-motion";
import Image from "next/image";

export type CarouselImage = {
  src: string;
  alt?: string;
  caption?: string;
};

type Props = {
  images: CarouselImage[];
  interval?: number;
  showIndicators?: boolean;
  pauseOnHover?: boolean;
  className?: string;
};

function FullscreenAutoCarousel({
  images,
  interval = 4000,
  showIndicators = true,
  pauseOnHover = false,
  className = "",
}: Props) {
  const [index, setIndex] = useState(0);

  const count = images?.length ?? 0;
  const safeCount = Math.max(count, 1);

  const goTo = (i: number) => {
    const newIndex = ((i % safeCount) + safeCount) % safeCount;
    console.log(`Manual transition: ${index} → ${newIndex}`);
    setIndex(newIndex);
  };
  
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  // Simple autoplay that cycles through all images
  useEffect(() => {
    if (count <= 1) return;

    const timer = setInterval(() => {
      setIndex((currentIndex) => {
        const nextIndex = (currentIndex + 1) % count;
        console.log(`Auto transition: ${currentIndex} → ${nextIndex}`);
        return nextIndex;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [count, interval]);

  // Debug logging
  useEffect(() => {
    console.log(`Current image index: ${index}, Total images: ${count}`);
  }, [index, count]);

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const threshold = 50; // px
    if (info.offset.x < -threshold) {
      next();
    } else if (info.offset.x > threshold) {
      prev();
    }
  };

  const IndicatorDots = useMemo(
    () => (
      <div className="pointer-events-auto absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-2 w-2 rounded-full transition-all ${
              i === index
                ? "scale-125 bg-white"
                : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    ),
    [images, index]
  );

  return (
    <div
      className={`relative w-screen h-[80vh] overflow-hidden bg-black ${className}`}
      role="region"
      aria-roledescription="carousel"
      aria-label="Fullscreen image carousel"
    >
      {/* Slides track */}
      <motion.div
        className="flex h-full"
        drag="x"
        dragElastic={0.05}
        dragMomentum={true}
        onDragEnd={handleDragEnd}
        animate={{ x: `-${index * 100}%` }}
        transition={{ type: "spring", stiffness: 300, damping: 40 }}
        style={{ touchAction: "pan-y" }}
      >
        {(count > 0 ? images : [{ src: "", alt: "" }]).map((img, i) => (
          <div key={i} className="relative min-w-full h-full select-none">
            {img.src ? (
              <Image
                src={img.src}
                alt={img.alt ?? `Slide ${i + 1}`}
                fill
                sizes="100vw"
                quality={50}
                priority={true}
                className="h-full w-full object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                loading="eager"
                unoptimized={false}
              />
            ) : (
              <div className="h-full w-full grid place-items-center text-white/70">
                <p>No images provided</p>
              </div>
            )}

            {/* Bottom gradient & caption */}
            {img.caption && (
              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 sm:p-6">
                <div className="from-black/60 via-black/20 to-transparent bg-gradient-to-t rounded-xl p-3 sm:p-4 inline-block max-w-[90%]">
                  <p className="text-white text-sm sm:text-base font-medium drop-shadow">
                    {img.caption}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </motion.div>

      {/* Controls (hidden on small screens) */}
      {count > 1 && (
        <>
          <button
            aria-label="Previous slide"
            onClick={prev}
            className="hidden sm:grid place-items-center absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-2xl bg-white/20 hover:bg-white/30 backdrop-blur text-white"
          >
            ‹
          </button>
          <button
            aria-label="Next slide"
            onClick={next}
            className="hidden sm:grid place-items-center absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-2xl bg-white/20 hover:bg-white/30 backdrop-blur text-white"
          >
            ›
          </button>
        </>
      )}

      {/* Indicators */}
      {showIndicators && count > 1 && IndicatorDots}

      {/* Live region for screen readers */}
      <span className="sr-only" aria-live="polite">
        Slide {index + 1} of {count}
      </span>
    </div>
  );
}

const MemoizedFullscreenAutoCarousel = React.memo(FullscreenAutoCarousel);
export default MemoizedFullscreenAutoCarousel;

export const ImageCarousel = React.memo(function ImageCarousel() {
  const demo = useMemo(() => [
    {
      src: "/images/carousel-1.jpg",
      alt: "Chanoly Noodle Restaurant Interior",
      caption: "Experience our warm, inviting atmosphere",
    },
    {
      src: "/images/carousel-2.jpg",
      alt: "Fresh Noodles and Asian Cuisine",
      caption: "Authentic flavors, fresh ingredients",
    },
    {
      src: "/images/carousel-3.jpg",
      alt: "Chanoly Dining Experience",
      caption: "Where tradition meets innovation",
    },
  ], []);

  return (
    <div className="h-[80vh] w-screen">
      <MemoizedFullscreenAutoCarousel images={demo} interval={3000} />
    </div>
  );
});
