import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Travaillons Ensemble</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Prêt à donner vie à votre projet ? Contactez-moi pour discuter de vos besoins
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Demander un Devis</CardTitle>
              <CardDescription>Remplissez ce formulaire et je vous répondrai dans les 24h</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input placeholder="Votre nom" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Votre email" />
                  </div>
                </div>
                <div>
                  <Input placeholder="Téléphone (optionnel)" />
                </div>
                <div>
                  <Input placeholder="Type de projet" />
                </div>
                <div>
                  <Textarea 
                    placeholder="Décrivez votre projet en quelques lignes..."
                    className="min-h-[150px]"
                  />
                </div>
                <Button className="w-full" size="lg">
                  <Send className="mr-2 h-4 w-4" />
                  Envoyer ma demande
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">contact@lindanddri.com</p>
                    <p className="text-sm text-muted-foreground mt-1">Réponse sous 24h</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">WhatsApp Business</h3>
                    <p className="text-muted-foreground">+225 XX XX XX XX XX</p>
                    <p className="text-sm text-muted-foreground mt-1">Disponible 9h-18h</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Localisation</h3>
                    <p className="text-muted-foreground">Abidjan, Côte d'Ivoire</p>
                    <p className="text-sm text-muted-foreground mt-1">Interventions nationales</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Media Kit</h3>
                <p className="text-sm mb-4 opacity-90">Téléchargez mon media kit complet avec photos HD, bio et tarifs</p>
                <Button variant="secondary" className="w-full">
                  Télécharger le Media Kit (PDF)
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
