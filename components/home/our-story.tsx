import Image from "next/image";
import React from "react";

export function HomeOurStory() {
  return (
    <section className="min-h-[80vh] relative overflow-hidden">
      {/* Optimized Background Pattern Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Background-Pattern.png"
          alt="Background Pattern"
          fill
          className="object-cover"
          quality={20}
          priority={true}
          loading="eager"
        />
        {/* Lighter overlay for better text readability */}
        <div className="absolute inset-0 bg-white/70"></div>
      </div>

      <div className="grid md:grid-cols-2 min-h-[80vh] relative z-10">
        {/* Left Side - Full Height Image */}
        <div className="relative group overflow-hidden h-64 md:h-auto">
          <Image
            src="/images/homepage-ourstory.jpg"
            alt="Chanoly's story - shared dining experience with sizzling dishes and fresh beverages"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={60}
            priority={false}
            className="object-cover transition-transform duration-700 group-hover:scale-110 hero-image image-optimized"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            loading="lazy"
            unoptimized={false}
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Orange overlay on image */}
          <div className="absolute inset-0 bg-gradient-to-br from-chanoly/20 to-transparent"></div>
        </div>

        {/* Right Side - Content */}
        <div className="flex items-center justify-center p-6 md:p-12 relative">
          {/* Orange accent behind content */}
          <div className="absolute inset-0 bg-gradient-to-l from-chanoly/10 to-transparent rounded-2xl"></div>

          <div className="space-y-6 md:space-y-8 max-w-lg relative z-10">
            <div className="relative">
              {/* Orange underline accent */}
              <div className="absolute -bottom-2 left-0 w-24 h-1 bg-chanoly rounded-full"></div>
              <h2 className="chanoly-heading text-3xl sm:text-4xl md:text-6xl text-black tracking-widest mb-6 md:mb-8 transition-colors duration-500 font-bold drop-shadow-lg font-showg text-chanoly">
                OUR STORY
              </h2>
            </div>

            <div
              className="space-y-4 md:space-y-6 leading-relaxed text-lg md:text-xl drop-shadow-lg"
              style={{ color: "rgba(45, 75, 75, 1)" }}
            >
              <p className="transition-colors duration-300 font-bold">
                Chanoly Noodles is a unique dining destination that brings together the rich flavors of Chinese, Indian, and Italian cuisines. Specializing in hybrid dishes, the restaurant blends diverse culinary traditions into a single experience, offering guests fresh, flavorful, and innovative meals that celebrate cultural fusion. Every dish is crafted with the vision of uniting global tastes while ensuring freshness and authenticity in every bite.
              </p>
              <p className="transition-colors duration-300 font-bold">
                The name "Chanoly Noodles" carries a special meaning rooted in the founders' story. It is inspired by the combination of "Cha," a nickname for Betselot fondly known as Chappy, the co-founder and "Noly," a nickname for her son, Nolawi. Together, this name represents not only the restaurant's identity but also the family values and creativity that inspired its creation. Chanoly Noodles stands as a brand that reflects both personal heritage and a passion for bringing people together through food.
              </p>
            </div>

            {/* Orange decorative element at bottom */}
            <div className="flex justify-center pt-4">
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-chanoly to-transparent rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Chanoly Watermark - Positioned relative to entire section */}
      <div className="absolute -bottom-16 -right-2 opacity-30 z-20">
        <Image
          src="/images/chanoly-noodle-logo.png"
          alt="Chanoly Watermark"
          width={300}
          height={300}
          className="w-80 h-80 object-contain"
          priority={false}
          loading="lazy"
          quality={40}
        />
      </div>
    </section>
  );
}
