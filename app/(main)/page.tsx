"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AnnonceCard } from "@/components/AnnonceCard";
import {
  Search,
  Plus,
  LogIn,
  UserPlus,
  Home as HomeIcon,
  Users,
  MapPin,
  Shield,
  MessageSquare,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

// Données mockées pour les annonces - adaptées au contexte ivoirien
const annoncesMock = [
  {
    id: "1",
    title: "Colocation sympa à Cocody",
    description:
      "Appartement lumineux de 80m² avec balcon, proche de la Riviera. Recherche colocataire calme et propre.",
    ville: "Cocody, Abidjan",
    budget: 150000,
    disponibilite: "1er septembre 2024",
    auteur: {
      nom: "Fatou",
      age: 28,
      avatar: "/avatars/fatou.jpg",
    },
  },
  {
    id: "2",
    title: "Studio partagé près de l'ESATIC",
    description:
      "Studio de 35m² bien équipé, idéal pour étudiant. Quartier calme et bien desservi.",
    ville: "Marcory, Abidjan",
    budget: 120000,
    disponibilite: "15 août 2024",
    auteur: {
      nom: "Kouassi",
      age: 22,
      avatar: "/avatars/kouassi.jpg",
    },
  },
  {
    id: "3",
    title: "Maison avec jardin à Yamoussoukro",
    description:
      "Belle maison de 120m² avec jardin, 3 chambres. Parfait pour une colocation familiale.",
    ville: "Yamoussoukro",
    budget: 100000,
    disponibilite: "1er octobre 2024",
    auteur: {
      nom: "Aminata",
      age: 31,
      avatar: "/avatars/aminata.jpg",
    },
  },
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [maxBudget, setMaxBudget] = useState("");

  const handleContact = (annonceId: string) => {
    // Rediriger vers la page de connexion ou ouvrir la messagerie
    console.log("Contacter annonce:", annonceId);
  };

  const handleViewAnnonce = (annonceId: string) => {
    // Rediriger vers la page de détail de l'annonce
    console.log("Voir annonce:", annonceId);
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
              <Link href="/" className="text-foreground font-medium">
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
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20 h-screen flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 items-center">
            {/* Contenu texte */}
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Trouvez votre colocataire idéal en Côte d'Ivoire
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Des milliers d'Ivoiriens cherchent leur colocataire parfait.
                Rejoignez la communauté ColabColoc CI et trouvez votre logement
                idéal !
              </p>

              {/* Barre de recherche */}
              <div className="max-w-3xl mx-auto bg-background rounded-lg shadow-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      placeholder="Ville, quartier (Abidjan, Yamoussoukro...)"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>

                  <Input
                    placeholder="Budget max (FCFA/mois)"
                    type="number"
                    value={maxBudget}
                    onChange={(e) => setMaxBudget(e.target.value)}
                  />

                  <Button className="w-full">
                    <Search className="w-4 h-4 mr-2" />
                    Rechercher
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Problème */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Le problème que vous résolvez
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Trouver un logement abordable, bien situé et sécurisant n'est pas
              évident. Encore plus quand on est étudiant ou qu'on revient vivre
              en Côte d'Ivoire sans repères.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-background rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-red-600" />
              </div>
              <h4 className="font-semibold mb-2">Peu d'offres fiables</h4>
              <p className="text-muted-foreground">
                Difficile de trouver des annonces sérieuses et des propriétaires
                de confiance
              </p>
            </div>

            <div className="text-center p-6 bg-background rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💸</span>
              </div>
              <h4 className="font-semibold mb-2">Loyers trop chers en solo</h4>
              <p className="text-muted-foreground">
                Les prix des logements individuels dépassent souvent le budget
                des étudiants
              </p>
            </div>

            <div className="text-center p-6 bg-background rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold mb-2">
                Difficile de trouver un colocataire compatible
              </h4>
              <p className="text-muted-foreground">
                Pas facile de rencontrer des personnes avec qui on s'entend bien
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Solution */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Votre solution</h3>
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-8 max-w-4xl mx-auto">
              <p className="text-lg font-medium">
                Nous facilitons la mise en relation entre personnes à la
                recherche d'une colocation ou ayant une chambre disponible.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HomeIcon className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold mb-2">
                Crée ou découvre des offres de colocation
              </h4>
              <p className="text-muted-foreground">
                Publiez votre annonce ou parcourez les logements disponibles
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold mb-2">
                Échange en toute sécurité avec des profils vérifiés
              </h4>
              <p className="text-muted-foreground">
                Tous nos utilisateurs sont vérifiés pour votre tranquillité
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold mb-2">
                Cible les zones étudiantes et quartiers populaires
              </h4>
              <p className="text-muted-foreground">
                Des logements bien situés près des universités et transports
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Comment ça marche */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Comment ça marche ?</h3>
            <p className="text-lg text-muted-foreground">
              En 3 étapes simples, trouvez votre colocataire idéal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserPlus className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Inscris-toi gratuitement</h4>
              <p className="text-muted-foreground">
                Créez votre compte en quelques clics
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">
                Cherche ou propose une colocation
              </h4>
              <p className="text-muted-foreground">
                Parcourez les annonces ou créez la vôtre
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Discute et emménage !</h4>
              <p className="text-muted-foreground">
                Échangez et trouvez votre logement idéal
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Ils ont trouvé leur colocataire
            </h3>
          </div>

          <div className="bg-muted/30 rounded-lg p-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <blockquote className="text-lg italic mb-4">
                "Grâce à cette app, j'ai trouvé une super coloc à Angré en moins
                d'une semaine !"
              </blockquote>
              <p className="font-semibold">Marie, étudiante à l'INPHB</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section des annonces */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-semibold">Annonces récentes</h3>
              <p className="text-muted-foreground mt-1">
                Découvrez les meilleures colocations en Côte d'Ivoire
              </p>
            </div>
            <Button asChild>
              <Link href="/listing/new">
                <Plus className="w-4 h-4 mr-2" />
                Déposer une annonce
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {annoncesMock.map((annonce) => (
              <AnnonceCard
                key={annonce.id}
                {...annonce}
                onContact={() => handleContact(annonce.id)}
                onView={() => handleViewAnnonce(annonce.id)}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Voir toutes les annonces
            </Button>
          </div>
        </div>
      </section>

      {/* Section des villes populaires */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-semibold text-center mb-8">
            Villes populaires
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Abidjan",
              "Yamoussoukro",
              "Bouaké",
              "San-Pédro",
              "Grand-Bassam",
              "Korhogo",
            ].map((ville) => (
              <Button
                key={ville}
                variant="outline"
                className="h-16 text-sm w-full"
                asChild
              >
                <Link href={`/search?ville=${ville}`}>{ville}</Link>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Appel à l'action final */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Prêt à trouver votre colocataire ?
          </h3>
          <p className="text-lg mb-8 opacity-90">
            Rejoignez des milliers d'Ivoiriens qui ont déjà trouvé leur logement
            idéal
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/signup" className="flex items-center">
                <HomeIcon className="w-5 h-5 mr-2" />
                Trouver ma colocation maintenant
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/listing/new" className="flex items-center">
                <Plus className="w-5 h-5 mr-2" />
                Proposer une chambre
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50 py-8">
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
