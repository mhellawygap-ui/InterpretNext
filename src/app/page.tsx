import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { TrustedBar } from "@/components/sections/TrustedBar";
import { Stats } from "@/components/sections/Stats";
import { ServiceFinder } from "@/components/sections/ServiceFinder";
import { Industries } from "@/components/sections/Industries";
import { LanguageMarquee } from "@/components/sections/LanguageMarquee";
import { WhyUs } from "@/components/sections/WhyUs";
import { Tiers } from "@/components/sections/Tiers";
import { Compliance } from "@/components/sections/Compliance";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonial } from "@/components/sections/Testimonial";
import { GetStarted } from "@/components/sections/GetStarted";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustedBar />
        <Stats />
        <ServiceFinder />
        <Industries />
        <LanguageMarquee />
        <WhyUs />
        <Tiers />
        <Compliance />
        <HowItWorks />
        <Testimonial />
        <GetStarted />
      </main>
      <Footer />
    </>
  );
}
