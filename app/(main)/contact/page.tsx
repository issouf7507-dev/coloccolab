"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  HelpCircle,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    sujet: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'envoi
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Simuler un succès
    setSubmitStatus("success");
    setIsSubmitting(false);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        nom: "",
        email: "",
        telephone: "",
        sujet: "",
        message: "",
      });
      setSubmitStatus("idle");
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "contact@colabcoloc.ci",
      description: "Réponse sous 24h",
    },
    {
      icon: Phone,
      title: "Téléphone",
      value: "+225 27 22 49 49 49",
      description: "Lun-Ven, 8h-18h",
    },
    {
      icon: MapPin,
      title: "Adresse",
      value: "Cocody, Abidjan",
      description: "Côte d'Ivoire",
    },
    {
      icon: Clock,
      title: "Horaires",
      value: "Lundi - Vendredi",
      description: "8h00 - 18h00 (GMT)",
    },
  ];

  const faqQuick = [
    {
      question: "Comment créer mon compte ?",
      answer: "Cliquez sur 'S'inscrire' en haut à droite et suivez les étapes.",
    },
    {
      question: "Comment publier une annonce ?",
      answer:
        "Connectez-vous et cliquez sur 'Publier une annonce' dans votre tableau de bord.",
    },
    {
      question: "Comment contacter un colocataire ?",
      answer: "Cliquez sur 'Contacter' sur l'annonce qui vous intéresse.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">
                  C
                </span>
              </div>
              <Link
                href="/"
                className="text-xl font-bold hover:text-primary transition-colors"
              >
                ColabColoc CI
              </Link>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Accueil
              </Link>
              <Link
                href="/colocations"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Colocations
              </Link>
              <Link
                href="/faq"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                FAQ
              </Link>
              <Link
                href="/a-propos"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                À propos
              </Link>
              <Link href="/contact" className="text-foreground font-medium">
                Contact
              </Link>
            </nav>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" asChild>
                <Link href="/login">Se connecter</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/signup">S'inscrire</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Contenu principal */}
      <main className="container mx-auto px-4 py-8">
        {/* En-tête de la page */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Notre équipe est là pour vous aider. N'hésitez pas à nous contacter
            pour toute question ou assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Informations de contact */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Nos coordonnées</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{info.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {info.value}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Réseaux sociaux</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    asChild
                  >
                    <Link href="#">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Facebook
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    asChild
                  >
                    <Link href="#">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Instagram
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    asChild
                  >
                    <Link href="#">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      LinkedIn
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Questions rapides</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {faqQuick.map((item, index) => (
                    <div
                      key={index}
                      className="border-b border-border last:border-b-0 pb-4 last:pb-0"
                    >
                      <h4 className="font-medium text-sm mb-1">
                        {item.question}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                  <Button variant="link" className="p-0 h-auto text-sm" asChild>
                    <Link href="/faq">Voir toutes les questions →</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Formulaire de contact */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Envoyez-nous un message</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Remplissez le formulaire ci-dessous et nous vous répondrons
                  dans les plus brefs délais.
                </p>
              </CardHeader>
              <CardContent>
                {submitStatus === "success" ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      Message envoyé !
                    </h3>
                    <p className="text-muted-foreground">
                      Nous vous répondrons dans les plus brefs délais.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="nom"
                          className="block text-sm font-medium mb-2"
                        >
                          Nom complet *
                        </label>
                        <Input
                          id="nom"
                          name="nom"
                          type="text"
                          required
                          value={formData.nom}
                          onChange={handleInputChange}
                          placeholder="Votre nom complet"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium mb-2"
                        >
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="votre@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="telephone"
                          className="block text-sm font-medium mb-2"
                        >
                          Téléphone
                        </label>
                        <Input
                          id="telephone"
                          name="telephone"
                          type="tel"
                          value={formData.telephone}
                          onChange={handleInputChange}
                          placeholder="+225 07 12 34 56 78"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="sujet"
                          className="block text-sm font-medium mb-2"
                        >
                          Sujet *
                        </label>
                        <Input
                          id="sujet"
                          name="sujet"
                          type="text"
                          required
                          value={formData.sujet}
                          onChange={handleInputChange}
                          placeholder="Objet de votre message"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Décrivez votre question ou votre demande..."
                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      />
                    </div>

                    {submitStatus === "error" && (
                      <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg">
                        <AlertCircle className="w-4 h-4" />
                        <span className="text-sm">
                          Une erreur est survenue. Veuillez réessayer.
                        </span>
                      </div>
                    )}

                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Envoyer le message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Section FAQ rapide */}
        <div className="mt-16">
          <Card>
            <CardContent className="py-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">
                  Questions fréquentes
                </h3>
                <p className="text-muted-foreground">
                  Trouvez rapidement des réponses aux questions les plus
                  courantes
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <HelpCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Comment ça marche ?</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Découvrez comment utiliser ColabColoc CI pour trouver votre
                    colocataire idéal.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/faq">En savoir plus</Link>
                  </Button>
                </div>

                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Support technique</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Besoin d'aide avec la plateforme ? Notre équipe technique
                    est là pour vous.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/faq">Obtenir de l'aide</Link>
                  </Button>
                </div>

                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Sécurité</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Découvrez comment nous protégeons vos données et
                    garantissons votre sécurité.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/a-propos">En savoir plus</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/50 py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 ColabColoc CI. Tous droits réservés.</p>
          <p className="text-sm mt-2">
            La plateforme de colocation de référence en Côte d'Ivoire
          </p>
        </div>
      </footer>
    </div>
  );
}
