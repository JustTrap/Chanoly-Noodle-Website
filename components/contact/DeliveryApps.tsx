"use client";
import Image from "next/image";
import Link from "next/link";

function StoreBadges({ appStoreUrl, playUrl }: { appStoreUrl: string; playUrl: string }) {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      <Link href={appStoreUrl} target="_blank" rel="noopener noreferrer" aria-label="Download on the App Store">
        <img
          src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
          alt="Download on the App Store"
          className="h-10 md:h-12 w-auto hover:opacity-90 transition-opacity"
          loading="lazy"
        />
      </Link>
      <Link href={playUrl} target="_blank" rel="noopener noreferrer" aria-label="Get it on Google Play">
        <img
          src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
          alt="Get it on Google Play"
          className="h-14 md:h-[4.5rem] w-auto hover:opacity-90 transition-opacity"
          loading="lazy"
        />
      </Link>
    </div>
  );
}

function AppCard({
  title,
  description,
  imageUrl,
  appStoreUrl,
  playUrl,
}: {
  title: string;
  description: string;
  imageUrl: string;
  appStoreUrl: string;
  playUrl: string;
}) {
  return (
    <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
      <div className="relative w-full max-w-[220px] md:max-w-[260px] mx-auto aspect-[4/3] rounded-lg overflow-hidden shadow-md bg-white p-3">
        <Image src={imageUrl} alt={title} fill className="object-contain" sizes="(max-width: 768px) 90vw, 40vw" />
      </div>
      <div>
        <h3 className="chanoly-heading text-xl md:text-2xl text-gray-900 mb-2 tracking-wider font-showg">{title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-base">{description}</p>
        <StoreBadges appStoreUrl={appStoreUrl} playUrl={playUrl} />
      </div>
    </div>
  );
}

export function DeliveryApps() {
  return (
    <section className="py-8 md:py-12 px-4 md:px-6 bg-white">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Chanoly Delivery - Direct Call */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="relative w-full max-w-[220px] md:max-w-[260px] mx-auto aspect-[4/3] rounded-lg overflow-hidden shadow-md bg-white p-3">
            <Image
              src="https://qisrodlshohwwddmzrng.supabase.co/storage/v1/object/public/Pictures%20and%20vids/Chnaoly-Delivery2.jpg"
              alt="Chanoly Delivery"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 90vw, 40vw"
            />
          </div>
          <div>
            <h3 className="chanoly-heading text-xl md:text-2xl text-gray-900 mb-2 tracking-wider font-showg">Order with Chanoly Delivery</h3>
            <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-base">Call directly and get your order delivered fast.</p>
            <a
              href="tel:601"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-md transition-all duration-300 hover:scale-[1.02]"
              style={{ backgroundColor: "rgb(249, 115, 22)", color: "rgba(45, 75, 75, 1)" }}
              aria-label="Call Chanoly Delivery at 601"
            >
              Call 601
            </a>
          </div>
        </div>

        <AppCard
          title="Order with Beu Delivery"
          description="Get your favorite Chanoly dishes delivered fast with the Beu Delivery app. Download on your device and place your order in seconds."
          imageUrl="https://qisrodlshohwwddmzrng.supabase.co/storage/v1/object/public/Pictures%20and%20vids/Beu%20Delivery.jpg"
          appStoreUrl="https://apps.apple.com/us/app/beu-lite/id1577071426"
          playUrl="https://play.google.com/store/apps/details?id=com.xmt.beu.applite"
        />

        <AppCard
          title="Order with Deliver Addis"
          description="Prefer Deliver Addis? Order Chanoly meals through the Deliver Addis app and enjoy reliable delivery service across the city."
          imageUrl="https://qisrodlshohwwddmzrng.supabase.co/storage/v1/object/public/Pictures%20and%20vids/Deliver-Addis.jpg"
          appStoreUrl="https://apps.apple.com/fm/app/deliver-addis/id1503459669"
          playUrl="https://play.google.com/store/apps/details?id=com.deliveraddis.deliveraddis&pcampaignid=web_share"
        />

      </div>
    </section>
  );
}


