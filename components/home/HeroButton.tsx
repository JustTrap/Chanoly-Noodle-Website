"use client";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

type Props = {
  onOpenFullMenu?: () => void;
};

export default function HeroButton({ onOpenFullMenu }: Props) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 md:gap-6 justify-center animate-fade-in-up animation-delay-600 px-4">
      <Link href="/about">
        <Button className="border text-chanoly border-chanoly px-3 py-0.5 md:px-6 md:py-2 tracking-wider transition-all duration-300 hover:scale-105 rounded-none text-xs font-black bg-transparent hover:bg-white hover:text-chanoly">
          DISCOVER MORE
        </Button>
      </Link>
      <Button
        variant="outline"
        className="border-chanoly text-chanoly px-3 py-0.5 md:px-6 md:py-2 bg-transparent tracking-wider transition-all duration-300 hover:scale-105 rounded-none text-xs font-black hover:bg-white hover:text-chanoly"
        onClick={() => onOpenFullMenu?.()}
      >
        VISIT & TASTE
      </Button>
    </div>
  );
}
