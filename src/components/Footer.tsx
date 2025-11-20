import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="font-bold text-xl mb-4">
              <span className="text-primary">Linda</span> N'DRI
            </div>
            <p className="text-sm opacity-80">
              Voix Off • Présentatrice • Animatrice
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#demos" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">Démos Voix Off</a></li>
              <li><a href="#videos" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">Vidéos</a></li>
              <li><a href="#services" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">Services</a></li>
              <li><a href="#about" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">À Propos</a></li>
              <li><a href="#contact" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">Suivez-moi</h3>
            <div className="flex space-x-4">
              <a href="#" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm opacity-80">
          <p>© {currentYear} Linda N'DRI. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
