import Image from "next/image";

export function AboutHero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about-chanoly-bg.jpg"
          alt="About Chanoly background - warm outdoor dining scene with smoothie and noodles"
          fill
          sizes="100vw"
          quality={90}
          priority
          className="object-cover hero-image image-optimized"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70"></div>
      </div>

      <div className="text-center max-w-4xl px-4 md:px-6 relative z-10">
        <h1 className="chanoly-title mb-6 tracking-wider">
          <span className="text-3xl sm:text-4xl md:text-6xl font-showg">
            ABOUT
          </span>
          <br />
          <span className="text-chanoly drop-shadow-lg text-3xl sm:text-4xl md:text-6xl font-showg">
            CHANOLY
          </span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-95 drop-shadow-lg">
          Discover the story behind our passion for authentic Asian cuisine and
          exceptional dining experiences.
        </p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="#our-story"
            className="px-6 py-3 rounded-md bg-chanoly text-white hover:brightness-110 transition-optimized"
          >
            Read Our Story
          </a>
          <a
            href="/contact"
            className="px-6 py-3 rounded-md border border-white/70 hover:bg-white/10 transition-optimized"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
