"use client";
import Image from "next/image";

export function Vision() {
  return (
    <section className="min-h-[80vh] relative overflow-hidden">
      {/* Background Pattern Image */}
              <div className="absolute inset-0 z-0">
          <Image
            src="/images/Background-Pattern.png"
            alt="Background Pattern"
            fill
            sizes="100vw"
            quality={30}
            priority={false}
            className="object-cover blur-sm"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            loading="lazy"
            unoptimized={false}
          />
          {/* Lighter overlay for better text readability */}
          <div className="absolute inset-0 bg-white/70"></div>
        </div>

      <div className="grid md:grid-cols-2 min-h-[80vh] relative z-10">
        {/* Left Side - Content */}
        <div className="flex items-center justify-center p-6 md:p-12 relative order-2 md:order-1">
          {/* Orange accent behind content */}
          <div className="absolute inset-0 bg-gradient-to-l from-chanoly/10 to-transparent rounded-2xl"></div>
          
          <div className="space-y-8 md:space-y-10 max-w-lg relative z-10">
            <div className="relative">
              {/* Orange underline accent */}
              <div className="absolute -bottom-2 left-0 w-24 h-1 bg-chanoly rounded-full"></div>
              <h2 className="chanoly-heading text-3xl sm:text-4xl md:text-6xl text-black tracking-widest mb-6 md:mb-8 transition-colors duration-500 font-bold drop-shadow-lg font-showg text-chanoly">
                OUR VISION
              </h2>
            </div>
            
            <div className="space-y-4 md:space-y-6 leading-relaxed text-lg md:text-xl drop-shadow-lg" style={{ color: "rgba(45, 75, 75, 1)" }}>
              <p className="transition-colors duration-300 font-bold">
                To be the leading destination for authentic Asian fusion cuisine
                in Addis Ababa, where every dish tells a story of tradition
                meeting innovation.
              </p>
              <p className="transition-colors duration-300 font-bold">
                We envision a dining experience that transcends cultural
                boundaries, creating memorable moments through exceptional
                food, warm hospitality, and a welcoming atmosphere.
              </p>
            </div>
            
            {/* Orange decorative element at bottom */}
            <div className="flex justify-center pt-4">
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-chanoly to-transparent rounded-full opacity-60"></div>
            </div>
          </div>
        </div>

        {/* Right Side - Full Height Image */}
        <div className="relative group overflow-hidden h-64 md:h-auto order-1 md:order-2">
          <Image
            src="/images/menu-background.jpg"
            alt="Chanoly's vision for the future of dining"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Orange overlay on image */}
          <div className="absolute inset-0 bg-gradient-to-br from-chanoly/20 to-transparent"></div>
        </div>
      </div>
      
      {/* Chanoly Watermark - Positioned at bottom left */}
      <div className="absolute -bottom-16 -left-2 opacity-30 z-20">
        <Image
          src="/images/chanoly-noodle-logo.png"
          alt="Chanoly Watermark"
          width={300}
          height={300}
          className="w-80 h-80 object-contain"
          priority={false}
          loading="lazy"
          quality={60}
        />
      </div>
    </section>
  );
}
