"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { MenuCard } from "./menu/menu-card";
import { menuData } from "@/lib/data";
import Image from "next/image";
import { cdnImage } from "@/lib/cdn";

interface FullMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FullMenu({ isOpen, onClose }: FullMenuProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[99999] bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="flex items-center justify-center min-h-screen p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto relative">
          {/* Chanoly Watermark - Centered in the middle */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20 z-20 pointer-events-none">
            <Image
              src={cdnImage("/images/chanoly-noodle-logo.png")}
              alt="Chanoly Watermark"
              width={600}
              height={600}
              className="w-[600px] h-[600px] object-contain"
              priority={false}
              loading="lazy"
              quality={40}
            />
          </div>

          <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center z-30">
            <h2 className="text-4xl font-black text-chanoly font-showg">
              CHANOLY NOODLE MENU
            </h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="hover:bg-gray-100 z-40 relative"
            >
              <X className="w-6 h-6" />
            </Button>
          </div>

          <div className="p-6 relative z-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuData.map((section, i) => (
                <MenuCard
                  key={i}
                  title={section.category}
                  items={section.items}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
