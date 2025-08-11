"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  DollarSign,
  Home,
  Users,
  Phone,
  Mail,
  MessageSquare,
  Heart,
  Share2,
  Star,
  Wifi,
  Car,
  Bike,
  Coffee,
  BookOpen,
  Music,
  Tv,
  Utensils,
} from "lucide-react";
import Link from "next/link";

// Données mockées pour une annonce détaillée
const annonceDetail = {
  id: "1",
  title: "Colocation sympa à Cocody",
  description: `Appartement lumineux de 80m² avec balcon, proche de la Riviera. 
  
  Nous recherchons un colocataire calme et propre pour rejoindre notre colocation de 3 personnes. L'appartement est situé dans un quartier résidentiel calme, à 5 minutes à pied de la Riviera et des transports en commun.
  
  L'appartement comprend :
  • 3 chambres (dont 1 disponible)
  • 1 salle de bain partagée
  • 1 cuisine équipée
  • 1 salon avec balcon
  • 1 buanderie
  
  Le loyer inclut :
  • L'eau et l'électricité
  • La connexion internet
  • Le ménage commun
  • Les charges`,
  ville: "Cocody, Abidjan",
  adresse: "Rue des Jardins, Cocody",
  budget: 150000,
  disponibilite: "1er septembre 2024",
  surface: "80m²",
  chambres: 3,
  colocataires: 2,
  type: "Appartement",
  etage: "3ème étage",
  ascenseur: true,
  auteur: {
    nom: "Fatou",
    age: 28,
    avatar: "/avatars/fatou.jpg",
    profession: "Ingénieure informatique",
    description:
      "J'aime la cuisine, la lecture et les sorties culturelles. Je recherche quelqu'un de propre et respectueux.",
    telephone: "+225 07 12 34 56 78",
    email: "fatou@example.com",
    verifie: true,
    membreDepuis: "2023",
    note: 4.8,
    avis: 12,
  },
  photos: [
    "/photos/salon.jpg",
    "/photos/chambre.jpg",
    "/photos/cuisine.jpg",
    "/photos/balcon.jpg",
  ],
  equipements: [
    { nom: "WiFi", icone: Wifi },
    { nom: "Cuisine équipée", icone: Utensils },
    { nom: "Machine à laver", icone: Car },
    { nom: "Balcon", icone: Home },
    { nom: "Ascenseur", icone: Bike },
    { nom: "Parking", icone: Car },
  ],
  preferences: [
    "Non-fumeur",
    "Pas d'animaux",
    "Étudiant ou jeune professionnel",
    "Personne calme et propre",
  ],
  regles: [
    "Pas de fête après 22h",
    "Ménage en rotation",
    "Respect du calme",
    "Pas d'invités sans prévenir",
  ],
};

export default function AnnonceDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fr-FR").format(price) + " FCFA";
  };

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
              <Link href="/colocations" className="text-foreground font-medium">
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
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
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
        {/* Bouton retour */}
        <div className="mb-6">
          <Button variant="ghost" asChild>
            <Link href="/colocations">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux annonces
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Colonne principale */}
          <div className="lg:col-span-2 space-y-6">
            {/* Galerie photos */}
            <Card>
              <CardContent className="p-0">
                <div className="relative">
                  <div className="aspect-video bg-muted/30 rounded-t-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Photo principale</p>
                  </div>

                  {/* Miniatures */}
                  <div className="flex gap-2 p-4">
                    {annonceDetail.photos.map((_, index) => (
                      <div
                        key={index}
                        className={`w-16 h-16 bg-muted/30 rounded cursor-pointer flex items-center justify-center ${
                          currentPhoto === index ? "ring-2 ring-primary" : ""
                        }`}
                        onClick={() => setCurrentPhoto(index)}
                      >
                        <p className="text-xs text-muted-foreground">
                          Photo {index + 1}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Informations principales */}
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl mb-2">
                      {annonceDetail.title}
                    </CardTitle>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{annonceDetail.ville}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>Disponible {annonceDetail.disponibilite}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsFavorite(!isFavorite)}
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          isFavorite ? "fill-red-500 text-red-500" : ""
                        }`}
                      />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none">
                  <p className="whitespace-pre-line">
                    {annonceDetail.description}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Détails du logement */}
            <Card>
              <CardHeader>
                <CardTitle>Détails du logement</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <Home className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <p className="font-semibold">{annonceDetail.surface}</p>
                    <p className="text-sm text-muted-foreground">Surface</p>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <Users className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <p className="font-semibold">{annonceDetail.chambres}</p>
                    <p className="text-sm text-muted-foreground">Chambres</p>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <Users className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <p className="font-semibold">
                      {annonceDetail.colocataires}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Colocataires
                    </p>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <DollarSign className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <p className="font-semibold">
                      {formatPrice(annonceDetail.budget)}
                    </p>
                    <p className="text-sm text-muted-foreground">Loyer/mois</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Équipements */}
            <Card>
              <CardHeader>
                <CardTitle>Équipements inclus</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {annonceDetail.equipements.map((equipement) => (
                    <div
                      key={equipement.nom}
                      className="flex items-center gap-2"
                    >
                      <equipement.icone className="w-4 h-4 text-primary" />
                      <span>{equipement.nom}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Préférences et règles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Préférences</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {annonceDetail.preferences.map((pref) => (
                      <li key={pref} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span>{pref}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Règles de vie</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {annonceDetail.regles.map((regle) => (
                      <li key={regle} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span>{regle}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Colonne latérale */}
          <div className="space-y-6">
            {/* Carte de contact */}
            <Card>
              <CardHeader>
                <CardTitle>Contacter {annonceDetail.auteur.nom}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={annonceDetail.auteur.avatar} />
                    <AvatarFallback>
                      {annonceDetail.auteur.nom[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">
                      {annonceDetail.auteur.nom}, {annonceDetail.auteur.age} ans
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {annonceDetail.auteur.profession}
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">
                        {annonceDetail.auteur.note}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        ({annonceDetail.auteur.avis} avis)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button className="w-full" size="lg">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Envoyer un message
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Appeler
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Mail className="w-4 h-4 mr-2" />
                    Envoyer un email
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Informations sur l'auteur */}
            <Card>
              <CardHeader>
                <CardTitle>À propos de {annonceDetail.auteur.nom}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {annonceDetail.auteur.description}
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Membre depuis</span>
                    <span>{annonceDetail.auteur.membreDepuis}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Profil vérifié
                    </span>
                    <span className="text-green-600">✓</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Localisation */}
            <Card>
              <CardHeader>
                <CardTitle>Localisation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm font-medium">{annonceDetail.ville}</p>
                  <p className="text-sm text-muted-foreground">
                    {annonceDetail.adresse}
                  </p>
                  <div className="w-full h-32 bg-muted/30 rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground text-sm">Carte</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
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
