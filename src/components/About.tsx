import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import lindaPortrait from "@/assets/linda-portrait.jpg";

const values = [
  "Authenticité dans chaque prestation",
  "Professionnalisme et ponctualité",
  "Écoute et adaptation aux besoins clients",
  "Énergie positive et engagement total",
  "Excellence dans l'exécution"
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden">
              <img 
                src={lindaPortrait} 
                alt="Linda N'DRI"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Accent decoration */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/10 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">À Propos</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Passionnée par l'art de la communication vocale et visuelle, je mets mon énergie et mon professionnalisme au service de vos projets depuis plus de 5 ans.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Ma polyvalence me permet d'intervenir sur des projets variés : de la voix off publicitaire dynamique à l'animation d'événements corporates, en passant par la présentation face caméra. Mon objectif : donner vie à votre message avec authenticité et impact.
            </p>

            <Card className="p-6 mb-8">
              <h3 className="font-semibold text-xl mb-4">Mes Valeurs</h3>
              <ul className="space-y-3">
                {values.map((value, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{value}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 text-center">
                <div className="text-2xl font-bold text-primary mb-1">Français</div>
                <div className="text-sm text-muted-foreground">Langue maternelle</div>
              </Card>
              <Card className="p-4 text-center">
                <div className="text-2xl font-bold text-primary mb-1">Studio Pro</div>
                <div className="text-sm text-muted-foreground">Équipement haute qualité</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
