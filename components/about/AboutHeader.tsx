"use client";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

type AboutHeaderProps = {
  showScrollMenu: boolean;
  onOpenFullMenu: () => void;
};

export function AboutHeader({
  showScrollMenu,
  onOpenFullMenu,
}: AboutHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Header - Only visible when scroll menu is hidden */}
      <header
        className={`text-white py-4 md:py-12 px-4 md:px-8 fixed w-full top-0 z-[9999] bg-transparent transition-transform duration-300 ease-in-out ${
          !showScrollMenu ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:text-chanoly order-1"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>

          {/* Mobile Logo */}
          <Link href="/" className="flex items-center group md:hidden order-2">
            <div className="w-10 h-6 mr-2 transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/images/chanoly-logo.png"
                alt="Chanoly Noodle Logo"
                width={40}
                height={24}
                className="object-contain transition-all duration-300 group-hover:brightness-110"
              />
            </div>
          </Link>

          {/* Desktop Navigation with Center Logo */}
          <nav className="hidden md:flex items-center justify-center space-x-12 mx-auto order-2">
            <Link
              href="/about"
              className="chanoly-nav hover:text-chanoly transition-all duration-300 text-base font-semibold tracking-wider hover:scale-105 font-showg"
            >
              ABOUT
            </Link>
            <button
              onClick={onOpenFullMenu}
              className="chanoly-nav hover:text-chanoly transition-all duration-300 text-base font-semibold tracking-wider hover:scale-105 font-showg"
            >
              OUR MENU
            </button>

            {/* Center Logo - New Header Logo */}
            <Link href="/" className="flex items-center group mx-8">
              <div className="w-32 h-12 md:w-40 md:h-16 transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
                <Image
                  src="/images/chanoly-noodle-center-logo21.png"
                  alt="Chanoly Noodle Logo"
                  width={160}
                  height={64}
                  className="object-contain transition-all duration-300 group-hover:brightness-110"
                />
              </div>
            </Link>

            <Link
              href="/branches"
              className="chanoly-nav hover:text-chanoly transition-all duration-300 text-base font-semibold tracking-wider hover:scale-105 font-showg"
            >
              BRANCHES
            </Link>
            <Link
              href="/contact"
              className="chanoly-nav hover:text-chanoly transition-all duration-300 text-base font-semibold tracking-wider hover:scale-105 font-showg"
            >
              Contact Us
            </Link>
          </nav>

          {/* Visit Button - Right - REMOVED */}
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm border-t border-gray-800">
            <nav className="flex flex-col space-y-4 p-6">
              <Link
                href="/about"
                className="chanoly-nav hover:text-chanoly transition-all duration-300 text-base font-semibold tracking-wider py-2 font-showg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ABOUT
              </Link>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenFullMenu();
                }}
                className="chanoly-nav hover:text-chanoly transition-all duration-300 text-base font-semibold tracking-wider py-2 text-left font-showg"
              >
                OUR MENU
              </button>
              <Link
                href="/branches"
                className="chanoly-nav hover:text-chanoly transition-all duration-300 text-base font-semibold tracking-wider py-2 font-showg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                BRANCHES
              </Link>
              <Link
                href="/contact"
                className="chanoly-nav hover:text-chanoly transition-all duration-300 text-base font-semibold tracking-wider py-2 font-showg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* MEGA Animated Logo - Far Left Corner - INDEPENDENT from header */}
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
                ? "animate-logo-float animate-logo-glow animate-logo-pulse animate-logo-tilt animate-logo-breath animate-logo-wave animate-logo-sparkle animate-logo-morph animate-logo-bounce animate-logo-elastic-bounce animate-logo-rubber-band animate-logo-jello animate-logo-wobble animate-logo-heartbeat"
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

      {/* Scroll Menu - Top Right Corner - INDEPENDENT from header */}
      <div
        className={`hidden md:block fixed top-4 right-4 z-[9998] transition-all duration-700 ease-out ${
          showScrollMenu
            ? "opacity-100 translate-x-0 scale-100 animate-logo-slide-in"
            : "opacity-0 translate-x-4 scale-95"
        }`}
      >
        <div className="relative">
          {/* Hamburger Menu Button - Independent */}
          <button
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className={`group p-3 rounded-lg backdrop-blur-sm border transition-all duration-300 hover:scale-110 ${
              showScrollMenu
                ? "animate-logo-float animate-logo-glow animate-logo-pulse animate-logo-breath"
                : ""
            }`}
            style={{
              background:
                "linear-gradient(135deg, rgba(45, 75, 75, 0.9) 0%, rgba(35, 65, 65, 0.9) 100%)",
              borderColor: "rgba(249, 115, 22, 0.3)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgb(249, 115, 22)";
              (e.currentTarget as HTMLButtonElement).style.background =
                "linear-gradient(135deg, rgba(249, 115, 22, 0.9) 0%, rgba(249, 115, 22, 0.7) 100%)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(249, 115, 22, 0.3)";
              (e.currentTarget as HTMLButtonElement).style.background =
                "linear-gradient(135deg, rgba(45, 75, 75, 0.95) 0%, rgba(35, 65, 65, 0.95) 100%)";
            }}
          >
            {/* Animated Hamburger Lines */}
            <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
              <div
                className={`w-6 h-0.5 bg-white transition-all duration-300 group-hover:bg-chanoly ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></div>
              <div
                className={`w-6 h-0.5 bg-white transition-all duration-300 group-hover:bg-chanoly ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              ></div>
              <div
                className={`w-6 h-0.5 bg-white transition-all duration-300 group-hover:bg-chanoly ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></div>
            </div>
          </button>

          {/* Dropdown Menu */}
          {isMobileMenuOpen && (
            <div
              className="absolute top-full right-0 mt-2 w-64 rounded-lg backdrop-blur-sm border shadow-2xl animate-fade-in-up"
              style={{
                background:
                  "linear-gradient(135deg, rgba(45, 75, 75, 0.95) 0%, rgba(35, 65, 65, 0.95) 100%)",
                borderColor: "rgba(249, 115, 22, 0.3)",
              }}
            >
              <nav className="flex flex-col p-4 space-y-3">
                <Link
                  href="/about"
                  className="chanoly-nav text-white hover:text-chanoly transition-all duration-300 text-sm font-semibold tracking-wider py-3 px-4 rounded-lg hover:bg-white/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  ABOUT
                </Link>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenFullMenu();
                  }}
                  className="chanoly-nav text-white hover:text-chanoly transition-all duration-300 text-sm font-semibold tracking-wider py-3 px-4 rounded-lg hover:bg-white/10 text-left"
                >
                  OUR MENU
                </button>
                <Link
                  href="/branches"
                  className="chanoly-nav text-white hover:text-chanoly transition-all duration-300 text-sm font-semibold tracking-wider py-3 px-4 rounded-lg hover:bg-white/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  BRANCHES
                </Link>
                <Link
                  href="/contact"
                  className="chanoly-nav text-white hover:text-chanoly transition-all duration-300 text-sm font-semibold tracking-wider py-3 px-4 rounded-lg hover:bg-white/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </nav>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
