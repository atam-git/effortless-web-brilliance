import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import ParallaxGallery from "@/components/ParallaxGallery";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ParallaxGallery />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default Index;
