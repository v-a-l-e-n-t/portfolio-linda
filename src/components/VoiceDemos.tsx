import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Download } from "lucide-react";

const demos = [
  {
    title: "Publicité Dynamique",
    description: "Voix énergique et captivante pour campagnes publicitaires",
    duration: "0:30",
    category: "Commercial"
  },
  {
    title: "Corporate Professionnel",
    description: "Ton posé et crédible pour communications d'entreprise",
    duration: "1:15",
    category: "Corporate"
  },
  {
    title: "Documentaire Narratif",
    description: "Narration fluide et engageante pour contenus éducatifs",
    duration: "2:00",
    category: "Documentaire"
  },
  {
    title: "E-Learning",
    description: "Voix pédagogique et rassurante pour formations en ligne",
    duration: "1:30",
    category: "Formation"
  },
  {
    title: "Storytelling",
    description: "Narration émotionnelle pour raconter votre histoire",
    duration: "1:45",
    category: "Créatif"
  }
];

const VoiceDemos = () => {
  return (
    <section id="demos" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Démos Voix Off</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez la polyvalence de ma voix à travers différents styles
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {demos.map((demo, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {demo.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{demo.duration}</span>
                </div>
                <CardTitle className="text-lg">{demo.title}</CardTitle>
                <CardDescription>{demo.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Audio player placeholder */}
                <div className="bg-muted/30 rounded-lg p-4 mb-4">
                  <div className="flex items-center space-x-3">
                    <Button size="sm" variant="ghost" className="h-10 w-10 rounded-full p-0">
                      <Play className="h-4 w-4" />
                    </Button>
                    <div className="flex-1">
                      <div className="h-1 bg-muted rounded-full overflow-hidden">
                        <div className="h-full w-0 bg-primary rounded-full" />
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">0:00</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Télécharger
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg">
            Demander une démo personnalisée
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VoiceDemos;
