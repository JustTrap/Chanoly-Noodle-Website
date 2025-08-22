"use client";

import { FullMenu } from "@/components/full-menu";
import { useState, useEffect } from "react";
import {
  HomeHeader,
  HomeFloatingLogo,
  HomeScrollMenu,
  HomeHero,
  HomeOurStory,
  // HomeVisionMission,
  // HomeMenuSection, // Removed OUR SELECTED MENUS section
  HomeReviews,
  HomeSpecialOffers,
  HomeFooter,
} from "@/components/home";
import { ImageCarousel } from "../carousel";

export function HottoRestaurant() {
  const [isFullMenuOpen, setIsFullMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showLeftLogo, setShowLeftLogo] = useState(false);
  const [showScrollMenu, setShowScrollMenu] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowScrollTop(scrollPosition > 300);

      // Show left logo and scroll menu when reaching the "Our Story" section (after hero section)
      const shouldShow = scrollPosition > window.innerHeight * 0.8;
      setShowLeftLogo(shouldShow);
      setShowScrollMenu(shouldShow);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <HomeHeader
        showScrollMenu={showScrollMenu}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        onOpenFullMenu={() => setIsFullMenuOpen(true)}
      />

      {/* MEGA Animated Logo - Far Left Corner - INDEPENDENT from header */}
      <HomeFloatingLogo showLeftLogo={showLeftLogo} />

      {/* Scroll Menu - Top Right Corner - INDEPENDENT from header */}
      <HomeScrollMenu
        showScrollMenu={showScrollMenu}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        onOpenFullMenu={() => setIsFullMenuOpen(true)}
      />

      <HomeHero onOpenFullMenu={() => setIsFullMenuOpen(true)} />

      <HomeOurStory />

      {/* <HomeVisionMission /> */}

      {/* HomeMenuSection removed - OUR SELECTED MENUS section no longer exists */}

      <ImageCarousel />

      <HomeReviews onOpenFullMenu={() => setIsFullMenuOpen(true)} />

      <HomeSpecialOffers />

      <HomeFooter />

      {/* Full Menu Modal */}
      <FullMenu
        isOpen={isFullMenuOpen}
        onClose={() => setIsFullMenuOpen(false)}
      />
      
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-chanoly hover:bg-chanoly text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
          style={{
            backgroundColor: "rgb(249, 115, 22)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(45, 75, 75, 1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgb(249, 115, 22)";
          }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
