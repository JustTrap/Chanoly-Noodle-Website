import Image from "next/image";
import React from "react";

export function HomeVisionMission() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-chanoly-light to-chanoly-light">
      <div className="grid md:grid-cols-2 min-h-screen">
        {/* Left Side - Content */}
        <div className="flex items-center justify-center p-6 md:p-12 order-2 md:order-1">
          <div className="space-y-8 md:space-y-10 max-w-lg">
            <div className="space-y-8 md:space-y-10">
              <div>
                <h2 className="chanoly-heading text-3xl sm:text-4xl md:text-6xl text-gray-800 tracking-widest mb-6 md:mb-8 hover:text-chanoly transition-colors duration-500 font-normal font-showg">
                  OUR VISION
                </h2>
                <div className="space-y-4 md:space-y-6 text-gray-600 leading-relaxed text-base md:text-lg">
                  <p className="hover:text-gray-800 transition-colors duration-300">
                    To be the leading name in fusion cuisine, setting the
                    benchmark for quality, innovation, and customer care in the
                    restaurant industry.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="chanoly-heading text-3xl sm:text-4xl md:text-6xl text-gray-800 tracking-widest mb-6 md:mb-8 hover:text-chanoly transition-colors duration-500 font-normal font-showg">
                  OUR MISSION
                </h2>
                <div className="space-y-4 md:space-y-6 text-gray-600 leading-relaxed text-base md:text-lg">
                  <p className="hover:text-gray-800 transition-colors duration-300">
                    Provide our customers fresh fusion foods by bringing
                    together flavours around the world, creating unique culinary
                    experiences that celebrate both traditional and contemporary
                    tastes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Full Height Image */}
        <div className="relative group overflow-hidden h-64 md:h-auto order-1 md:order-2">
          <Image
            src="/images/vision-mission-dining.JPG"
            alt="Chanoly's vision and mission for fusion cuisine excellence - delicious noodles and fresh beverages"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={85}
            priority
            className="object-cover transition-transform duration-700 group-hover:scale-110 hero-image image-optimized"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
    </section>
  );
}
