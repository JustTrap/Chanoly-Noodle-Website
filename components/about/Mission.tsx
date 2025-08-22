"use client";
import Image from "next/image";

export function Mission() {
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Clean green background matching footer */}
      <div className="absolute inset-0 z-0" style={{ background: "rgba(45, 75, 75, 1)" }}></div>

      {/* Orange Design Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Top right orange accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-chanoly opacity-20 rounded-full -translate-y-32 translate-x-32"></div>
        
        {/* Bottom left orange accent */}
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-chanoly opacity-15 rounded-full translate-y-24 -translate-x-24"></div>
        
        {/* Center orange decorative element */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-4 border-chanoly opacity-10 rounded-full"></div>
        
        {/* Orange corner accents */}
        <div className="absolute top-8 right-8 w-16 h-16 bg-chanoly opacity-25 transform rotate-45"></div>
        <div className="absolute bottom-8 left-8 w-12 h-12 bg-chanoly opacity-20 transform rotate-45"></div>
        
        {/* Floating orange dots */}
        <div className="absolute top-20 left-20 w-3 h-3 bg-chanoly opacity-30 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-32 w-2 h-2 bg-chanoly opacity-25 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-32 w-4 h-4 bg-chanoly opacity-20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="grid md:grid-cols-2 min-h-screen relative z-10">
        {/* Left Side - Full Height Image */}
        <div className="relative group overflow-hidden h-64 md:h-auto">
          <Image
            src="/images/vision-mission-dining.jpg"
            alt="Chanoly's mission to provide fresh fusion foods"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Orange overlay on image */}
          <div className="absolute inset-0 bg-gradient-to-br from-chanoly/20 to-transparent"></div>
        </div>

        {/* Right Side - Content */}
        <div className="flex items-center justify-center p-6 md:p-12 relative">
          {/* Orange accent behind content */}
          <div className="absolute inset-0 bg-gradient-to-l from-chanoly/10 to-transparent rounded-2xl"></div>
          
          <div className="space-y-8 md:space-y-10 max-w-lg relative z-10">
            <div className="relative">
              {/* Orange underline accent */}
              <div className="absolute -bottom-2 left-0 w-24 h-1 bg-chanoly rounded-full"></div>
              <h2 className="chanoly-heading text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-widest mb-6 md:mb-8 hover:text-chanoly transition-colors duration-500 drop-shadow-lg">
                OUR MISSION
              </h2>
            </div>
            
            <div className="space-y-4 md:space-y-6 text-white leading-relaxed text-base md:text-lg drop-shadow-lg">
              <p className="hover:text-chanoly transition-colors duration-300 font-bold relative">
                <span className="absolute -left-4 top-2 w-2 h-2 bg-chanoly rounded-full opacity-80"></span>
                Provide our customers fresh fusion foods by bringing together
                flavours around the world, creating unique culinary experiences
                that celebrate both traditional and contemporary tastes.
              </p>
              <p className="hover:text-chanoly transition-colors duration-300 font-bold relative">
                <span className="absolute -left-4 top-2 w-2 h-2 bg-chanoly rounded-full opacity-80"></span>
                We are committed to sourcing the finest ingredients, maintaining
                the highest standards of quality, and delivering exceptional
                service that exceeds expectations.
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
