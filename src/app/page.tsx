import Hero from "@/components/home/Hero";
import PillarsSection from "@/components/home/PillarsSection";
import BrandEcosystem from "@/components/home/BrandEcosystem";
import RadiosHighlight from "@/components/home/RadiosHighlight";
import ContactCTA from "@/components/home/ContactCTA";
import FounderConnection from "@/components/home/FounderConnection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <PillarsSection />
        <BrandEcosystem />
        <RadiosHighlight />
        <ContactCTA />
        <FounderConnection />
      </div>
    </>
  );
}