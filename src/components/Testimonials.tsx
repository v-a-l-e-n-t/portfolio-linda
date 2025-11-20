import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marie Kouassi",
    role: "Directrice Marketing, TechCorp CI",
    content: "Linda a donné vie à notre campagne publicitaire avec une énergie incroyable. Sa voix dynamique et professionnelle a vraiment fait la différence.",
    rating: 5
  },
  {
    name: "Jean-Paul Dié",
    role: "Organisateur d'événements",
    content: "Une animatrice exceptionnelle ! Linda a su captiver notre audience pendant toute la conférence. Son professionnalisme et sa spontanéité créent une atmosphère unique.",
    rating: 5
  },
  {
    name: "Aminata Traoré",
    role: "Productrice, MediaPlus",
    content: "Nous travaillons régulièrement avec Linda pour nos voix off. Toujours ponctuelle, à l'écoute, et avec une qualité de livraison irréprochable. Une vraie professionnelle.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Témoignages Clients</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ce que mes clients disent de notre collaboration
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                <div className="border-t pt-4">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
