"use client";
import { Button } from "@/components/ui/button";

export function BranchesCTA() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-br from-chanoly to-chanoly text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="chanoly-heading text-3xl md:text-5xl font-light mb-6 tracking-wider font-showg">
          READY TO DINE?
        </h2>
        <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
          Visit any of our locations for an unforgettable Asian dining
          experience. No reservations needed - just walk in and enjoy!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            className="border border-white text-white bg-transparent px-6 py-3 tracking-wider transition-all duration-300 hover:scale-105 rounded-none text-sm font-bold"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "white";
              e.currentTarget.style.color = "rgb(249, 115, 22)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "white";
            }}
            onClick={() => (window.location.href = "/contact")}
          >
            CONTACT US
          </Button>

          <Button
            className="border border-white text-white bg-transparent px-6 py-3 tracking-wider transition-all duration-300 hover:scale-105 rounded-none text-sm font-bold"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "white";
              e.currentTarget.style.color = "rgb(249, 115, 22)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "white";
            }}
            onClick={() => (window.location.href = "/")}
          >
            VIEW MENU
          </Button>
        </div>
      </div>
    </section>
  );
}
