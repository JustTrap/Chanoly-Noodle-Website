import Image from "next/image";
import { cdnImage } from "@/lib/cdn";

export function Vision() {
  return (
    <section className="min-h-[80vh] relative overflow-hidden">
      {/* Optimized Background Pattern Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={cdnImage("/images/Background-Pattern.png")}
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
        {/* Left Side - Content */}
        <div className="flex items-center justify-center p-6 md:p-12 relative">
          {/* Orange accent behind content */}
          <div className="absolute inset-0 bg-gradient-to-r from-chanoly/10 to-transparent rounded-2xl"></div>

          <div className="space-y-6 md:space-y-8 max-w-lg relative z-10">
            <div className="relative">
              {/* Orange underline accent */}
              <div className="absolute -bottom-2 left-0 w-24 h-1 bg-chanoly rounded-full"></div>
              <h2 className="chanoly-heading text-3xl sm:text-4xl md:text-6xl text-black tracking-widest mb-6 md:mb-8 transition-colors duration-500 font-bold drop-shadow-lg font-showg text-chanoly">
                OUR MISSION & OUR VISION
              </h2>
            </div>

            <div
              className="space-y-4 md:space-y-6 leading-relaxed text-lg md:text-xl drop-shadow-lg"
              style={{ color: "rgba(45, 75, 75, 1)" }}
            >
              {/* Mission Section */}
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-chanoly font-showg">Our Mission</h3>
                <p className="transition-colors duration-300 font-bold">
                  Provide our customers fresh fusion foods by bringing together Flavour around the world.
                </p>
              </div>

              {/* Vision Section */}
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-chanoly font-showg">Our Vision</h3>
                <p className="transition-colors duration-300 font-bold">
                  To become the leading global destination for fusion foods, where people experience diverse cultures through flavor. innovation, and freshness.
                </p>
              </div>
            </div>

            {/* Orange decorative element at bottom */}
            <div className="flex justify-center pt-4">
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-chanoly to-transparent rounded-full opacity-60"></div>
            </div>
          </div>
        </div>

        {/* Right Side - Full Height Image */}
        <div className="relative group overflow-hidden h-64 md:h-auto">
          <Image
            src={cdnImage("/images/vision-mission-dining.jpg")}
            alt="Chanoly's vision - elegant dining space with modern Asian fusion atmosphere"
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
          <div className="absolute inset-0 bg-gradient-to-bl from-chanoly/20 to-transparent"></div>
        </div>
      </div>

      {/* Chanoly Watermark - Positioned relative to entire section */}
      <div className="absolute -bottom-16 -left-2 opacity-15 z-20">
        <Image
          src={cdnImage("/images/chanoly-noodle-logo.png")}
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
