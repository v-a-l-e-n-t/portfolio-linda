import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink } from "lucide-react";
import lindaSpeaking1 from "@/assets/linda-speaking-1.jpg";
import lindaSpeaking2 from "@/assets/linda-speaking-2.jpg";
import lindaSpeaking3 from "@/assets/linda-speaking-3.jpg";

const videos = [
  {
    title: "Animation Événementielle - Conférence",
    description: "Animation d'une conférence sur l'intégration africaine",
    thumbnail: lindaSpeaking1,
    duration: "15:20"
  },
  {
    title: "Présentation Face Caméra",
    description: "Présentation corporate pour entreprise",
    thumbnail: lindaSpeaking2,
    duration: "3:45"
  },
  {
    title: "Animation de Table Ronde",
    description: "Modération d'un panel d'experts",
    thumbnail: lindaSpeaking3,
    duration: "25:10"
  }
];

const VideoGallery = () => {
  return (
    <section id="videos" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Vidéos & Présentations</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez mon travail en situation réelle
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <Button size="lg" className="rounded-full h-16 w-16 p-0">
                    <Play className="h-6 w-6" />
                  </Button>
                </div>
                <div className="absolute top-4 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">{video.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{video.description}</p>
                <Button variant="outline" size="sm" className="w-full">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Voir sur YouTube
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
