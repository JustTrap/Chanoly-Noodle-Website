import { AboutHero } from "@/components/about/AboutHero";
import { OurStory } from "@/components/about/OurStory";
import { Vision } from "@/components/about/Vision";
import { Mission } from "@/components/about/Mission";
import { Gallery } from "@/components/about/Gallery";
import { Values } from "@/components/about/Values";
import { Journey } from "@/components/about/Journey";
import { AboutFooter } from "@/components/about/AboutFooter";
import { Header } from "@/components/Header";

export default function page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <AboutHero />

      <OurStory />

      <Vision />

      <Mission />

      <Gallery />

      <Values />

      <Journey />

      <AboutFooter />
    </div>
  );
}
