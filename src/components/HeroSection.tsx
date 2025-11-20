import { Button } from "@/components/ui/button";
import { Layers } from "lucide-react";
import heroVisual from "@/assets/hero-3d-visual.png";
import Navigation from "./Navigation";
import { useState } from "react";

const HeroSection = () => {
  const [crazyMode, setCrazyMode] = useState(false);

  return (
    <section className="min-h-screen bg-cream-bg flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Dark Outer Container */}
      <div className="w-full max-w-7xl bg-dark-bg rounded-[3rem] overflow-hidden shadow-2xl">
        {/* Navigation integrated at top */}
        <Navigation />
        
        {/* Morphing Hero Content */}
        <div className="bg-cream-bg rounded-t-[3rem] -mt-2 p-6 sm:p-8 lg:p-12 relative">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            {/* Left Content */}
            <div className="space-y-6 lg:space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-foreground">
                  <span className="inline-flex items-start gap-2 mb-2">
                    <Layers className="text-orange-accent mt-2 flex-shrink-0" size={32} strokeWidth={2.5} />
                    <span>Own A Stunning Website</span>
                  </span>
                  <br />
                  Without Lifting A Finger
                </h1>
              </div>

              <div className="space-y-4 max-w-md">
                <Button 
                  variant="brutal" 
                  size="lg" 
                  className="text-base rounded-xl"
                >
                  <span className="mr-2">●</span> Contact Us
                </Button>
                <p className="text-muted-foreground text-sm leading-relaxed border-l-2 border-muted pl-4">
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
                  alt="3D layered design illustration showcasing modern web design"
                  className="w-full h-auto drop-shadow-2xl animate-float"
                />
              </div>
            </div>
          </div>

          {/* Crazy Mode Toggle - Bottom Right */}
          <div className="absolute bottom-6 right-6 flex items-center gap-3 bg-dark-bg text-cream-bg px-4 py-2 rounded-full text-sm">
            <span>Crazy mode:</span>
            <div className="flex gap-2">
              <button
                onClick={() => setCrazyMode(true)}
                className={`px-3 py-1 rounded-full transition-colors ${
                  crazyMode ? 'bg-cream-bg text-dark-bg' : 'bg-transparent'
                }`}
              >
                On
              </button>
              <button
                onClick={() => setCrazyMode(false)}
                className={`px-3 py-1 rounded-full transition-colors ${
                  !crazyMode ? 'bg-cream-bg text-dark-bg' : 'bg-transparent'
                }`}
              >
                Off
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
