import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { WhoWeWorkWith } from "@/components/landing/WhoWeWorkWith";
import { WhatWeDo } from "@/components/landing/WhatWeDo";
import { CreatorSection } from "@/components/landing/CreatorSection";
import { CredibilitySection } from "@/components/landing/CredibilitySection";
import { ClientDiscovery } from "@/components/landing/ClientDiscovery";
import { Footer } from "@/components/landing/Footer";
import { StandardsSection } from "@/components/landing/StandardsSection";
import Reveal from "@/components/Reveal";

const Index = () => {
  return (
    <>
      <Navbar />

      <main>

        <Reveal>
          <HeroSection />
        </Reveal>

        <Reveal>
          <CredibilitySection />
        </Reveal>

        <Reveal>
          <StandardsSection />
        </Reveal>

        <Reveal>
          <WhoWeWorkWith />
        </Reveal>

        <Reveal>
          <WhatWeDo />
        </Reveal>

        <Reveal>
          <ClientDiscovery />
        </Reveal>

        <Reveal>
          <CreatorSection />
        </Reveal>

      </main>

      <Reveal>
        <Footer />
      </Reveal>
    </>
  );
};

export default Index;