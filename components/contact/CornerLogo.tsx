"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function CornerLogo({ showScrollMenu }: { showScrollMenu: boolean }) {
  return (
    <div
      className={`hidden md:block fixed top-0 left-0 z-[9998] transition-all duration-700 ease-out ${
        showScrollMenu
          ? "opacity-100 translate-x-0 scale-100 animate-logo-slide-in"
          : "opacity-0 -translate-x-4 scale-95"
      }`}
    >
      <Link href="/" className="block">
        <Image
          src="/images/chanoly-logo.png"
          alt="Chanoly Noodle Logo"
          width={144}
          height={88}
          className={`object-contain logo-hover-effect ${
            showScrollMenu
              ? "animate-logo-float animate-logo-glow animate-logo-pulse animate-logo-breath animate-logo-tilt animate-logo-breath animate-logo-wave animate-logo-sparkle animate-logo-morph animate-logo-bounce animate-logo-elastic-bounce animate-logo-rubber-band animate-logo-jello animate-logo-wobble animate-logo-heartbeat"
              : ""
          }`}
          onMouseEnter={(e) => {
            e.currentTarget.classList.add("animate-logo-vibrate");
          }}
          onMouseLeave={(e) => {
            e.currentTarget.classList.remove("animate-logo-vibrate");
          }}
        />
      </Link>
    </div>
  );
}
