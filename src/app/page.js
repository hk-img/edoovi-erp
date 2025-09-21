import AdvanceFeatures from "@/components/advanceFeatures/AdvanceFeatures";
import AiFeatures from "@/components/aiFeatures/AiFeatures";
import AwardCarousel from "@/components/awardCarousel/AwardCarousel";
import Faq from "@/components/faq/Faq";
import HeroBanner from "@/components/heroBanner/HeroBanner";
import LatestInsight from "@/components/latestInsight/LatestInsight";
import Result from "@/components/result/Result";
import Testimonial from "@/components/testimonial/Testimonial";
import TrustedLogo from "@/components/trustedLogo/TrustedLogo";
import WhyChoose from "@/components/whyChoose/WhyChoose";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <Result />
      <AiFeatures />
      <AdvanceFeatures />
      <WhyChoose />
      <AwardCarousel />
      <TrustedLogo />
      <LatestInsight />
      <Testimonial />
      <Faq />
    </>
  );
}
