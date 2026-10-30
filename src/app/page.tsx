import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/home/HeroSection";
import { LoanGlanceSection } from "@/components/home/LoanGlanceSection";
import { PlatformTabsSection } from "@/components/home/PlatformTabsSection";
import { WhyTrustSection } from "@/components/home/WhyTrustSection";
import { LoanSupportSection } from "@/components/home/LoanSupportSection";
import { LenderMarquee } from "@/components/home/LenderMarquee";
import { DestinationsSection } from "@/components/home/DestinationsSection";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { ReferFriendSection } from "@/components/home/ReferFriendSection";
import { JourneySection } from "@/components/home/JourneySection";
import { FaqSection } from "@/components/home/FaqSection";
import { LoanApprovalBanner } from "@/components/layout/LoanApprovalBanner";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <LoanGlanceSection />
      <PlatformTabsSection />
      <WhyTrustSection />
      <LoanSupportSection />
      <LenderMarquee />
      <DestinationsSection />
      <TestimonialSection />
      <ReferFriendSection />
      <JourneySection />
      <FaqSection />
      <LoanApprovalBanner />
      <Footer />
    </main>
  );
}
