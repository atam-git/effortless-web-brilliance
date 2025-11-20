const Footer = () => {
  return (
    <footer className="bg-dark-bg text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">D</span>
              </div>
              <span className="font-bold text-xl">DESIGNHUB</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Creating stunning digital experiences that drive business growth.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>E-commerce</li>
              <li>Branding</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>About Us</li>
              <li>Portfolio</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/30 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 DesignHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
