import { Globe, ShoppingCart, Palette, TrendingUp, Server } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website & Mobile Apps",
    description: "Dynamic, responsive platforms that engage your audience across all devices.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Powerful online stores that convert visitors into loyal customers.",
  },
  {
    icon: Palette,
    title: "Corporate Branding",
    description: "Distinctive brand identities that make you stand out in the market.",
  },
  {
    icon: TrendingUp,
    title: "SEO & Marketing",
    description: "Strategic optimization to boost your visibility and drive growth.",
  },
  {
    icon: Server,
    title: "Hosting & Maintenance",
    description: "Reliable infrastructure with ongoing support to keep you running smoothly.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-cream-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-foreground mb-6">
            Full-Service Digital Solutions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to succeed online, delivered with expertise and care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-background p-8 rounded-3xl border-4 border-primary shadow-[4px_4px_0px_0px_hsl(var(--primary))] hover:shadow-[8px_8px_0px_0px_hsl(var(--primary))] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-300"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <service.icon className="text-primary" size={32} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
