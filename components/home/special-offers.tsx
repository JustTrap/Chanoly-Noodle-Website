"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Gift } from "lucide-react";

export function HomeSpecialOffers() {
  const [showFront, setShowFront] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFront((prev) => !prev);
    }, showFront ? 9500 : 4000); // Front shows for 9.5 seconds, back shows for 4 seconds

    return () => clearInterval(interval);
  }, [showFront]);

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-br from-chanoly via-chanoly to-chanoly text-white relative overflow-hidden">
      {/* Header Section - Centered */}
      <div className="text-center mb-12 md:mb-16 max-w-6xl mx-auto">
        <h2 className="chanoly-title text-4xl sm:text-5xl md:text-6xl mb-4 tracking-wider font-showg">
          Special Offers
        </h2>
        <div className="w-32 h-1 bg-white mx-auto mb-6"></div>
        <p className="text-lg md:text-xl opacity-90 font-normal">
          Discover our amazing deals and promotions
        </p>
      </div>

      {/* Main Content - Grid Layout with Fixed Columns */}
      <div className="grid grid-cols-[400px_1fr] gap-16 max-w-6xl mx-auto">
        {/* Left Side - Food Image - First Column */}
        <div className="w-[400px]">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl w-[400px]">
            <Image
              src="/images/Instagram-screenshot.jpg"
              alt="Special Offers"
              width={500}
              height={500}
              className="w-[400px] object-cover"
              quality={60}
              priority={true}
              loading="eager"
            />
            {/* Subtle overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Right Side - Loyalty Card - Second Column */}
        <div className="flex flex-col items-center justify-center space-y-8">
          {/* Loyalty Card */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl w-[750px] h-[475px]">
            {/* Front Card */}
            <Image
              src="https://qisrodlshohwwddmzrng.supabase.co/storage/v1/object/public/Pictures%20and%20vids/Loyality%20Card%20Front%20A.png"
              alt="Loyalty Card Front"
              width={750}
              height={475}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-2000 ${
                showFront ? "opacity-100 blur-0" : "opacity-0 blur-md"
              }`}
              quality={85}
              priority={true}
              loading="eager"
            />
            {/* Back Card */}
            <Image
              src="https://qisrodlshohwwddmzrng.supabase.co/storage/v1/object/public/Pictures%20and%20vids/Loyality%20Card%20Back.png"
              alt="Loyalty Card Back"
              width={750}
              height={475}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-2000 ${
                !showFront ? "opacity-100 blur-0" : "opacity-0 blur-md"
              }`}
              quality={85}
              priority={true}
              loading="eager"
            />
          </div>

          {/* Loyalty Program Title */}
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-semibold font-showg mb-4">
              Loyalty Program
            </h3>
            <p className="text-lg md:text-xl opacity-90 font-normal max-w-md">
              Earn points with every visit and unlock exclusive rewards!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
