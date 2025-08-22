"use client";
import React from "react";
import { Gift } from "lucide-react";

export function HomeSpecialOffers() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-br from-chanoly via-chanoly to-chanoly text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8 md:mb-12">
          <h2 className="chanoly-title text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-wider">
            Special Offers
          </h2>
          <div className="w-32 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-lg md:text-xl opacity-90 font-normal">
            Discover our amazing deals and promotions
          </p>
        </div>

        <div className="flex flex-col items-center space-y-8 md:space-y-12">
          {/* Animated Gift Icon */}
          <div className="relative">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center animate-gift-bounce animate-gift-glow">
              <Gift className="w-10 h-10 md:w-12 md:h-12 text-chanoly" />
            </div>
          </div>

          {/* Coming Soon Content */}
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-semibold">Coming Soon</h3>
            <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed opacity-90">
              Exciting new dishes and special offers are on their way! Stay
              tuned for our upcoming menu additions.
            </p>
          </div>

          {/* Future offers placeholder */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-3xl mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg:white/20 transition-all duration-300">
              <h4 className="text-xl font-semibold mb-3">Weekend Special</h4>
              <p className="text-sm opacity-80">
                Coming Soon - Exclusive weekend menu with special pricing
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg:white/20 transition-all duration-300">
              <h4 className="text-xl font-semibold mb-3">Loyalty Program</h4>
              <p className="text-sm opacity-80">
                Coming Soon - Earn points with every visit and unlock rewards
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
