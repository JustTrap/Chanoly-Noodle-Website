"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import React from "react";
import Link from "next/link";

type Props = {
  showScrollMenu: boolean;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  onOpenFullMenu: () => void;
};

export function HomeHeader({
  showScrollMenu,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  onOpenFullMenu,
}: Props) {
  return (
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
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
            className="chanoly-nav hover:text-chanoly transition-all duration-300 text-base font-semibold tracking-wider hover:scale-105"
          >
            ABOUT
          </Link>
          <button
            onClick={onOpenFullMenu}
            className="chanoly-nav hover:text-chanoly transition-all duration-300 text-base font-semibold tracking-wider hover:scale-105"
          >
            OUR MENU
          </button>

          {/* Center Logo - New Header Logo */}
          <Link href="/" className="flex items-center group mx-8">
            <div className="w-32 h-12 md:w-40 md:h-16 transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
              <Image
                src="/images/chanoly-noodle-center-logo2.png"
                alt="Chanoly Noodle Logo"
                width={160}
                height={64}
                className="object-contain transition-all duration-300 group-hover:brightness-110"
              />
            </div>
          </Link>

          <Link
            href="/branches"
            className="chanoly-nav hover:text-chanoly transition-all duration-300 text-base font-semibold tracking-wider hover:scale-105"
          >
            BRANCHES
          </Link>
          <Link
            href="/contact"
            className="chanoly-nav hover:text-chanoly transition-all duration-300 text-base font-semibold tracking-wider hover:scale-105"
          >
            CONTACT US
          </Link>
        </nav>

        {/* Right side - removed VISIT & TASTE button */}
        <div className="w-20 md:w-24"></div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm border-t border-gray-800">
          <nav className="flex flex-col space-y-4 p-6">
            <Link
              href="/about"
              className="chanoly-nav hover:text-chanoly transition-all duration-300 text-base font-semibold tracking-wider py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ABOUT
            </Link>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenFullMenu();
              }}
              className="chanoly-nav hover:text-chanoly transition-all duration-300 text-base font-semibold tracking-wider py-2 text-left"
            >
              OUR MENU
            </button>
            <Link
              href="/branches"
              className="chanoly-nav hover:text-chanoly transition-all duration-300 text-base font-semibold tracking-wider py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              BRANCHES
            </Link>
            <Link
              href="/contact"
              className="chanoly-nav hover:text-chanoly transition-all duration-300 text-base font-semibold tracking-wider py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CONTACT US
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
