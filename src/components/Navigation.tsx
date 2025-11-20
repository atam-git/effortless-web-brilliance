import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
    { name: "Contact us", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/95 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
              <span className="text-primary font-bold text-lg">D</span>
            </div>
            <span className="text-primary-foreground font-bold text-xl">DESIGNHUB</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6 bg-cream-bg px-6 py-2 rounded-full">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground hover:text-secondary transition-colors text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <Button variant="hero" size="default">
              Let's Connect
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-primary-foreground hover:text-secondary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button variant="hero" size="default" className="w-full mt-4">
              Let's Connect
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
