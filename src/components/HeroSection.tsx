import { Button } from "@/components/ui/button";
import { Layers } from "lucide-react";
import Navigation from "./Navigation";
import { useState } from "react";
import "./HeroSection.css";

const HeroSection = () => {
  const [crazyMode, setCrazyMode] = useState(false);

  return (
    <div className="w-full h-screen bg-dark-bg p-6">
      <Navigation />
      {/* Cross Shape*/}
      <svg width="0" height="0">
        <defs>
          <clipPath id="crossClip" clipPathUnits="objectBoundingBox">
            <path
              d="M 0.2,0 L 0.8,0
             Q 0.82,0 0.82,0.04 L 0.82,0.08 
             Q 0.82,0.12 0.84,0.12 L 0.98,0.12 
             Q 1,0.12 1,0.16 L 1,0.84 
             Q 1,0.88 0.98,0.88 L 0.84,0.88 
             Q 0.82,0.88 0.82,0.92 L 0.82,0.96 
             Q 0.82,1 0.8,1 L 0.03,1 
             Q 0,1 0,0.94 L 0,0.16 
             Q 0,0.12 0.02,0.12 L 0.16,0.12 
             Q 0.18,0.12 0.18,0.08 L 0.18,0.04 
             Q 0.18,0 0.2,0 Z"
            />
          </clipPath>
        </defs>
      </svg>
      {/* Cross Shape Wrapper */}
      <div className="w-full h-full">
        <div className="cross-clip bg-cream-bg w-full h-full flex items-end p-12">
          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 lg:space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-foreground">
                  <span className="inline-flex items-start gap-2 mb-2">
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
              </div>
            </div>

            {/* Right Visual */}
            <div className="hero-image">
              <div className="layered-graphic">
                <div className="layer layer-1" />
                <div className="layer layer-2" />
                <div className="layer layer-3" />
                <div className="layer layer-4" />
                <div className="layer layer-5" />
                <div className="eye-sensor">
                  <div className="eye-inner">
                    <div className="eye-shine" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
