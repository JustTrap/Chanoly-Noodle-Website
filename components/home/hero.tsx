"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import React from "react";

type Props = {
  onOpenFullMenu?: () => void;
};

export function HomeHero({ onOpenFullMenu }: Props) {
  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/placeholder.svg?height=1080&width=1920&text=Chanoly+Restaurant"
        >
          <source
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-background-Y4t6SLXBixKjPoFYEpY3MHsvSF4sjJ.mp4"
            type="video/mp4"
          />
          {/* Fallback image if video fails to load */}
          <Image
            src="/images/menu-background.jpg"
            alt="Delicious stir-fried noodles"
            fill
            sizes="100vw"
            quality={85}
            priority
            className="object-cover hero-image image-optimized"
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAADsAD+JaQAA3AAAAAA"
          />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="text-center max-w-5xl px-4 md:px-6 relative z-10">
        <div className="animate-fade-in-up">
                      <h1 className="chanoly-title mb-3 md:mb-4 tracking-normal opacity-0 animate-slide-up">
              <span className="text-3xl sm:text-4xl md:text-6xl font-showg">
                WELCOME TO
              </span>
              <br />
              <span className="text-chanoly hover:text-chanoly-dark transition-colors duration-500 text-3xl sm:text-4xl md:text-6xl font-showg">
                Chanoly Noodle
              </span>
            </h1>
        </div>
        <div className="animate-fade-in-up animation-delay-300">
                                <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 md:mb-8 max-w-5xl mx-auto leading-tight opacity-95 px-4 tracking-wide drop-shadow-lg">
            <span className="text-white">FRESH NOODLES, BOLD FLAVORS</span>
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-6 justify-center animate-fade-in-up animation-delay-600 px-4">
          <Button className="border text-chanoly border-chanoly px-3 py-0.5 md:px-6 md:py-2 tracking-wider transition-all duration-300 hover:scale-105 rounded-none text-xs font-black bg-transparent hover:bg-white hover:text-chanoly">
            DISCOVER MORE
          </Button>
          <Button
            variant="outline"
            className="border-chanoly text-chanoly px-3 py-0.5 md:px-6 md:py-2 bg-transparent tracking-wider transition-all duration-300 hover:scale-105 rounded-none text-xs font-black hover:bg-white hover:text-chanoly"
            onClick={() => onOpenFullMenu?.()}
          >
            VISIT & TASTE
          </Button>
        </div>
      </div>
    </section>
  );
}
