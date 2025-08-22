"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {
  showScrollMenu: boolean;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  onOpenFullMenu: () => void;
};

export function HomeScrollMenu({
  showScrollMenu,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  onOpenFullMenu,
}: Props) {
  return (
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
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
            e.currentTarget.style.background =
              "linear-gradient(135deg, rgba(249, 115, 22, 0.9) 0%, rgba(249, 115, 22, 0.7) 100%)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(249, 115, 22, 0.3)";
            e.currentTarget.style.background =
              "linear-gradient(135deg, rgba(45, 75, 75, 0.9) 0%, rgba(35, 65, 65, 0.9) 100%)";
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
                CONTACT US
              </Link>
              <div className="border-t border-white/20 pt-3 mt-3">
                <Button
                  className="w-full text-xs font-bold tracking-wider transition-all duration-300 hover:scale-105 rounded-lg"
                  style={{
                    backgroundColor: "rgb(249, 115, 22)",
                    color: "rgba(45, 75, 75, 1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgba(45, 75, 75, 1)";
                    e.currentTarget.style.color = "rgb(249, 115, 22)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "rgb(249, 115, 22)";
                    e.currentTarget.style.color = "rgba(45, 75, 75, 1)";
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  VISIT & TASTE
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}
