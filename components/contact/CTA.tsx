"use client";
import { Button } from "@/components/ui/button";
import React from "react";

export function ContactCTA() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-br from-chanoly to-chanoly text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="chanoly-heading text-3xl md:text-5xl font-light mb-6 tracking-wider font-showg">
          READY TO VISIT?
        </h2>
        <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
          Experience the authentic taste of Asia at any of our convenient
          locations. Book your table today or simply walk in!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            className="border border-white text-white bg-transparent px-6 py-3 tracking-wider transition-all duration-300 hover:scale-105 rounded-lg"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "white";
              e.currentTarget.style.color = "rgb(249, 115, 22)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "white";
            }}
            onClick={() => (window.location.href = "/branches")}
          >
            VIEW ALL BRANCHES
          </Button>

          <Button
            className="border border-white text-white bg-transparent px-6 py-3 tracking-wider transition-all duration-300 hover:scale-105 rounded-lg"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "white";
              e.currentTarget.style.color = "rgb(249, 115, 22)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "white";
            }}
            onClick={() => window.open("tel:601")}
          >
            CALL NOW
          </Button>
        </div>
      </div>
    </section>
  );
}
