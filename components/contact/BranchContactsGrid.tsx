import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";
import React from "react";
import Link from "next/link";
import CallNow from "./CallNow";

export type ContactBranch = {
  id: number;
  name: string;
  shortName: string;
  address: string;
  phone: string;
  image: string;
};

export function BranchContactsGrid({
  branches,
}: {
  branches: ContactBranch[];
}) {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="chanoly-heading text-3xl md:text-5xl font-light text-gray-800 mb-4 tracking-wider font-showg">
            OUR BRANCHES
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find the Chanoly location nearest to you and get in touch directly
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {branches.map((branch) => (
            <div
              key={branch.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
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

                <div className="space-y-3 mb-4">
                  <div className="flex items-start">
                    <MapPin className="w-4 h-4 text-chanoly mt-1 mr-2 flex-shrink-0" />
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {branch.address}
                    </p>
                  </div>

                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-chanoly mr-2 flex-shrink-0" />
                    <Link
                      href={`tel:${branch.phone}`}
                      className="text-sm text-gray-800 hover:text-chanoly transition-colors duration-300 font-medium"
                    >
                      {branch.phone}
                    </Link>
                  </div>
                </div>

                <CallNow branch={branch} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
