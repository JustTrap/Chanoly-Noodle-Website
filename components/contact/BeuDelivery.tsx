"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function BeuDelivery() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-lg">
          <Image
            src="https://qisrodlshohwwddmzrng.supabase.co/storage/v1/object/public/Pictures%20and%20vids/Beu%20Delivery.jpg"
            alt="Beu Delivery app"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={85}
            priority={false}
          />
        </div>
        <div>
          <h3 className="chanoly-heading text-3xl md:text-5xl text-gray-900 mb-4 tracking-wider font-showg">
            Order with Beu Delivery
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Get your favorite Chanoly dishes delivered fast with the Beu Delivery app.
            Download on your device and place your order in seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="https://play.google.com/store/apps/details?id=com.xmt.beu.applite"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-chanoly hover:brightness-110 text-white">
                Get it on Google Play
              </Button>
            </Link>
            <Link
              href="https://apps.apple.com/us/app/beu-lite/id1577071426"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="border-gray-300">
                Download on the App Store
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


