import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="h-10 flex items-center">
            <img 
              src={new URL("../assets/linda-logo.png", import.meta.url).href} 
              alt="Linda N'DRI" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('demos')} className="text-sm hover:text-primary transition-colors">
              Démos
            </button>
            <button onClick={() => scrollToSection('videos')} className="text-sm hover:text-primary transition-colors">
              Vidéos
            </button>
            <button onClick={() => scrollToSection('services')} className="text-sm hover:text-primary transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('about')} className="text-sm hover:text-primary transition-colors">
              À Propos
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-sm hover:text-primary transition-colors">
              Témoignages
            </button>
          </div>

          <div className="hidden md:block">
            <Button onClick={() => scrollToSection('contact')}>
              Contact
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container mx-auto px-6 py-4 space-y-4">
            <button onClick={() => scrollToSection('demos')} className="block w-full text-left py-2 hover:text-primary transition-colors">
              Démos
            </button>
            <button onClick={() => scrollToSection('videos')} className="block w-full text-left py-2 hover:text-primary transition-colors">
              Vidéos
            </button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 hover:text-primary transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 hover:text-primary transition-colors">
              À Propos
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left py-2 hover:text-primary transition-colors">
              Témoignages
            </button>
            <Button onClick={() => scrollToSection('contact')} className="w-full">
              Contact
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
