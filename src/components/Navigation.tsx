import { Button } from "@/components/ui/button";
import { Layers, ChevronDown } from "lucide-react";
import { useState } from "react";
import NDSLogo from "@/assets/NDS-Logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
    { name: "Contact us", href: "#contact" },
  ];

  return (
    <div className="w-full absolute -top-6 left-0 px-4 sm:px-6 pt-4 sm:pt-6 z-10">
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between px-6 sm:px-8 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={NDSLogo} alt="NDS Logo" className="h-14" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-24">
          <div className="flex items-center gap-1 px-6 py-2.5 rounded-full">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground hover:text-secondary transition-colors text-sm font-medium px-3"
              >
                {link.name}
              </a>
            ))}
          </div>
          <button className="flex items-center gap-2 text-cream-bg text-sm">
            <span>English</span>
            <ChevronDown size={16} />
          </button>
          <Button variant="hero" size="default" className="rounded-full">
            Let's Connect
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-cream-bg"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 12h18M3 6h18M3 18h18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-cream-bg hover:text-secondary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button
            variant="hero"
            size="default"
            className="w-full mt-4 rounded-full"
          >
            Let's Connect
          </Button>
        </div>
      )}
    </div>
  );
};

export default Navigation;
