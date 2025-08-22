"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MapPin, ExternalLink } from "lucide-react";
import type { Branch } from "./types";

export function BranchCard({ branch }: { branch: Branch }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={branch.image || "/placeholder.svg"}
          alt={branch.shortName}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          quality={85}
          loading="lazy"
          className="object-cover transition-transform duration-300 hover:scale-110 image-optimized"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-all duration-300"></div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-3 line-clamp-2">
          {branch.shortName}
        </h3>

        <div className="flex items-start mb-4">
          <MapPin className="w-4 h-4 text-chanoly mt-1 mr-2 flex-shrink-0" />
          <p className="text-sm text-gray-600 leading-relaxed">
            {branch.address}
          </p>
        </div>

        <Button
          className="w-full text-xs font-bold tracking-wider transition-all duration-300 hover:scale-105 rounded-none flex items-center justify-center"
          style={{
            backgroundColor: "rgb(249, 115, 22)",
            color: "rgba(45, 75, 75, 1)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(45, 75, 75, 1)";
            e.currentTarget.style.color = "rgb(249, 115, 22)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgb(249, 115, 22)";
            e.currentTarget.style.color = "rgba(45, 75, 75, 1)";
          }}
          onClick={() => window.open(branch.mapLink, "_blank")}
        >
          VIEW ON MAP
          <ExternalLink className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
}
