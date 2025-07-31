import HeroSection from "@/components/HeroSection";
import TimelineSection from "@/components/TimelineSection";
import MusicSection from "@/components/MusicSection";
import BusinessSection from "@/components/BusinessSection";
import InsightsSection from "@/components/InsightsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TimelineSection />
      <MusicSection />
      <BusinessSection />
      <InsightsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
