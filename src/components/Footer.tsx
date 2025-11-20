import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-background via-muted/30 to-background border-t border-border/50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="font-bold text-2xl mb-3">
              <span className="text-primary">Linda</span> <span className="text-foreground">N'DRI</span>
            </div>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed max-w-md">
              Professionnelle de la voix off, présentation et animation événementielle.
              Une énergie dynamique au service de vos projets.
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-muted hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-muted hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-muted hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-muted hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Navigation</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#demos" className="text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Démos Voix Off</span>
                </a>
              </li>
              <li>
                <a href="#videos" className="text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Vidéos</span>
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Services</span>
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">À Propos</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Contact</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact rapide */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Contact</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p className="hover:text-primary transition-colors cursor-pointer">
                contact@lindandri.com
              </p>
              <p className="hover:text-primary transition-colors cursor-pointer">
                +33 6 XX XX XX XX
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Linda N'DRI. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-primary transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
