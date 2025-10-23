import Image from "next/image";
import { cdnImage } from "@/lib/cdn";

export function QualityPolicy() {
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
        {/* Left Side - Full Height Image */}
        <div className="relative group overflow-hidden h-64 md:h-auto">
          <Image
            src="https://qisrodlshohwwddmzrng.supabase.co/storage/v1/object/public/Pictures%20and%20vids/DSC06050.jpg"
            alt="Chanoly's quality commitment - fresh fusion cuisine and excellent service"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={60}
            priority={false}
            className="object-cover transition-transform duration-700 group-hover:scale-110 hero-image image-optimized"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
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
              <h2 className="chanoly-heading text-3xl sm:text-4xl md:text-6xl tracking-widest mb-6 md:mb-8 transition-colors duration-500 font-bold drop-shadow-lg font-showg text-chanoly">
                QUALITY POLICY
              </h2>
            </div>

            <div
              className="space-y-4 md:space-y-6 leading-relaxed text-lg md:text-xl drop-shadow-lg"
              style={{ color: "rgba(45, 75, 75, 1)" }}
            >
              <p className="transition-colors duration-300 font-bold">
                Chanoly Noodle is committed to providing customers with fresh fusion cuisine by bringing together flavors from around the world. We strive to exceed customer expectations by delivering consistently high-quality food and outstanding service in a clean, safe, and welcoming environment.
              </p>
              <p className="transition-colors duration-300 font-bold">
                Chanoly Noodle ensures compliance with all legal and regulatory requirements and is dedicated to the continual improvement of its Quality Management System through regular staff training, performance monitoring and customer feedback.
              </p>
              <p className="transition-colors duration-300 font-bold">
                This commitment supports our vision to be a leading name in fusion cuisine and a benchmark for quality and customer care in the restaurant industry.
              </p>
            </div>

            {/* Orange decorative element at bottom */}
            <div className="flex justify-center pt-4">
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-chanoly to-transparent rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
