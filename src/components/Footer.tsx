import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background border-t border-border/40">
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          {/* Logo & Description */}
          <div className="md:col-span-5">
            <div className="mb-6">
              <img 
                src={new URL("../assets/linda-logo.png", import.meta.url).href} 
                alt="Linda N'DRI" 
                className="h-16 w-auto mb-4"
              />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-8">
              Professionnelle de la voix off, présentation et animation événementielle.
              Une énergie dynamique au service de vos projets.
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-11 h-11 rounded-lg bg-muted/50 hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 border border-border/30 hover:border-primary/20"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="w-11 h-11 rounded-lg bg-muted/50 hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 border border-border/30 hover:border-primary/20"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="w-11 h-11 rounded-lg bg-muted/50 hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 border border-border/30 hover:border-primary/20"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="w-11 h-11 rounded-lg bg-muted/50 hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 border border-border/30 hover:border-primary/20"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h3 className="font-semibold text-foreground mb-6 text-sm uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <a href="#demos" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm inline-block">
                  Démos Voix Off
                </a>
              </li>
              <li>
                <a href="#videos" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm inline-block">
                  Vidéos
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm inline-block">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm inline-block">
                  À Propos
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm inline-block">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h3 className="font-semibold text-foreground mb-6 text-sm uppercase tracking-wider">Contact</h3>
            <div className="space-y-4">
              <a href="mailto:contact@lindandri.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center group-hover:bg-primary/10 transition-colors border border-border/30">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="text-sm">contact@lindandri.com</span>
              </a>
              <a href="tel:+33600000000" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center group-hover:bg-primary/10 transition-colors border border-border/30">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="text-sm">+33 6 XX XX XX XX</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Linda N'DRI. Tous droits réservés.
          </p>
          <div className="flex gap-8 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Mentions légales
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
