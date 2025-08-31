import Image from "next/image";

export function BranchesHero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/DSC05955.jpg"
          alt="Sizzling dish with green mojito representing our branches"
          fill
          sizes="100vw"
          quality={85}
          priority
          className="object-cover hero-image image-optimized"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="text-center max-w-4xl px-4 md:px-6 relative z-10">
        <h1 className="chanoly-title mb-6 tracking-wider font-semibold">
          <span className="text-3xl sm:text-4xl md:text-6xl font-showg">
            OUR
          </span>
          <br />
          <span className="text-chanoly text-3xl sm:text-4xl md:text-6xl font-showg">
            BRANCHES
          </span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">
          Find your nearest Chanoly location and experience authentic Asian
          cuisine across Addis Ababa.
        </p>
      </div>
    </section>
  );
}
