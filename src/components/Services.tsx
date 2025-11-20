import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic, Video, Users, Headphones } from "lucide-react";

const services = [
  {
    icon: Mic,
    title: "Voix Off",
    description: "Publicités, documentaires, e-learning, corporate. Une voix chaleureuse et polyvalente adaptée à tous vos besoins.",
    features: ["Publicité dynamique", "Corporate professionnel", "Documentaire narratif", "E-learning pédagogique"]
  },
  {
    icon: Video,
    title: "Présentation Caméra",
    description: "Captez l'attention de votre audience avec une présence professionnelle et authentique face caméra.",
    features: ["Vidéos corporate", "Tutoriels", "Témoignages", "Présentations produits"]
  },
  {
    icon: Users,
    title: "Animation Événementielle",
    description: "Donnez du rythme à vos événements avec une animation dynamique qui engage votre public.",
    features: ["Conférences", "Lancements produits", "Soirées d'entreprise", "Tables rondes"]
  },
  {
    icon: Headphones,
    title: "Coaching & Conseils",
    description: "Améliorez votre présence vocale et votre aisance face caméra avec des conseils personnalisés.",
    features: ["Coaching vocal", "Media training", "Prise de parole", "Confiance en soi"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Mes Prestations</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des solutions professionnelles adaptées à vos besoins de communication
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <span className="text-primary mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
