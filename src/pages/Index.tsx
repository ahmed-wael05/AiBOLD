import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { WhoWeWorkWith } from "@/components/landing/WhoWeWorkWith";
import { WhatWeDo } from "@/components/landing/WhatWeDo";
import { CreatorSection } from "@/components/landing/CreatorSection";
import { CredibilitySection } from "@/components/landing/CredibilitySection";
import { ConsultationSection } from "@/components/landing/ConsultationSection";
import { ClientDiscovery } from "@/components/landing/ClientDiscovery";
import { BuildSystemCTA } from "@/components/landing/BuildSystemCTA";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <WhoWeWorkWith />
        <WhatWeDo />
        <CredibilitySection />
        <ConsultationSection />
        <ClientDiscovery />
        <BuildSystemCTA />
        <CreatorSection />
      
      </main>

      <Footer />
    </>
  );
};

export default Index;