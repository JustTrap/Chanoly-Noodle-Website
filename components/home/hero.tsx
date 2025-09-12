import Image from "next/image";
import React, { useState } from "react";
import HeroButton from "./HeroButton";

type Props = {
  onOpenFullMenu?: () => void;
};

export const HomeHero = React.memo(function HomeHero({
  onOpenFullMenu,
}: Props) {
  const [canPlayVideo, setCanPlayVideo] = useState(true);
  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background (Image fallback always present) */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/images/carousel-1.jpg"
          alt="Chanoly Noodle Restaurant"
          fill
          className="object-cover"
          quality={60}
          priority={true}
          loading="eager"
        />
        {/* Video layer on top; hidden if it fails */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={() => setCanPlayVideo(true)}
          onError={() => setCanPlayVideo(false)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${canPlayVideo ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          style={{
            transform: 'scale(1.35)',
            transformOrigin: 'center center'
          }}
          poster="/images/carousel-1.jpg"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
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
        <HeroButton onOpenFullMenu={onOpenFullMenu} />
      </div>
    </section>
  );
});
