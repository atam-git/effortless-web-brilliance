import { Button } from "@/components/ui/button";
import { Layers } from "lucide-react";
import heroVisual from "@/assets/hero-3d-visual.png";
import Navigation from "./Navigation";
import { useState } from "react";

const HeroSection = () => {
  const [crazyMode, setCrazyMode] = useState(false);

  return (
    <div className="w-full h-screen bg-dark-bg p-6">
      <Navigation />
      {/* Cross Shape */}
      <svg width="0" height="0">
        <defs>
          <clipPath id="crossClip" clipPathUnits="objectBoundingBox">
            <path d="M 0.266,0 L 0.733,0 Q 0.75,0 0.75,0.026 L 0.75,0.063 Q 0.75,0.09 0.766,0.09 L 0.983,0.09 Q 1,0.09 1,0.115 L 1,0.974 Q 1,1 0.983,1 L 0.766,1 Q 0.75,1 0.75,0.974 L 0.75,0.952 Q 0.75,0.926 0.733,0.926 L 0.266,0.926 Q 0.25,0.926 0.25,0.952 L 0.25,0.974 Q 0.25,1 0.233,1 L 0.016,1 Q 0,1 0,0.974 L 0,0.115 Q 0,0.09 0.016,0.09 L 0.233,0.09 Q 0.25,0.09 0.25,0.063 L 0.25,0.026 Q 0.25,0 0.266,0 Z" />
          </clipPath>
        </defs>
      </svg>
      {/* Cross Shape Wrapper */}
      <div className="w-full h-full">
        <div className="cross-clip bg-cream-bg w-full h-full">
          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            {/* Left Content */}
            <div className="space-y-6 lg:space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-foreground">
                  <span className="inline-flex items-start gap-2 mb-2">
                    <Layers
                      className="text-orange-accent mt-2 flex-shrink-0"
                      size={32}
                      strokeWidth={2.5}
                    />
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
                  We create stunning digital experiences that help your business
                  grow. From design to deployment, we handle everything so you
                  can focus on what matters.
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

          {/* Crazy Mode Toggle */}
          <div className="absolute bottom-6 right-6 flex items-center gap-3 bg-dark-bg text-cream-bg px-4 py-2 rounded-full text-sm">
            <span>Crazy mode:</span>
            <div className="flex gap-2">
              <button
                onClick={() => setCrazyMode(true)}
                className={`px-3 py-1 rounded-full transition-colors ${
                  crazyMode ? "bg-cream-bg text-dark-bg" : "bg-transparent"
                }`}
              >
                On
              </button>
              <button
                onClick={() => setCrazyMode(false)}
                className={`px-3 py-1 rounded-full transition-colors ${
                  !crazyMode ? "bg-cream-bg text-dark-bg" : "bg-transparent"
                }`}
              >
                Off
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
