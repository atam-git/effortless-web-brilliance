import { Button } from "@/components/ui/button";
import { Layers } from "lucide-react";
import heroVisual from "@/assets/hero-3d-visual.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-dark-bg flex items-center pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="bg-cream-bg rounded-[2.5rem] p-8 md:p-16 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-accent rounded-2xl flex items-center justify-center rotate-6 hover:rotate-12 transition-transform">
                    <Layers className="text-primary" size={24} />
                  </div>
                  <h1 className="text-5xl md:text-7xl font-black leading-tight text-foreground">
                    Own A Stunning Website
                  </h1>
                </div>
                <h2 className="text-5xl md:text-7xl font-black leading-tight text-foreground">
                  Without Lifting A Finger
                </h2>
              </div>

              <div className="space-y-4">
                <Button variant="brutal" size="lg" className="text-base">
                  Contact Us
                </Button>
                <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
                  We create stunning digital experiences that help your business grow. 
                  From design to deployment, we handle everything so you can focus on what matters.
                </p>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-lg">
                <img
                  src={heroVisual}
                  alt="3D layered design illustration"
                  className="w-full h-auto drop-shadow-2xl animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
