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

export default function Home() {
  return (
    <>
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
    </>
  );
}
