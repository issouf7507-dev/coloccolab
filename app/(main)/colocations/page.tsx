"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AnnonceCard } from "@/components/AnnonceCard";
import { Search, Filter, MapPin, Calendar, DollarSign } from "lucide-react";
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
  {
    id: "4",
    title: "Appartement moderne à Treichville",
    description:
      "Appartement moderne de 60m², 2 chambres, cuisine équipée. Proche du port et des commerces.",
    ville: "Treichville, Abidjan",
    budget: 180000,
    disponibilite: "1er novembre 2024",
    auteur: {
      nom: "Moussa",
      age: 25,
      avatar: "/avatars/moussa.jpg",
    },
  },
  {
    id: "5",
    title: "Colocation étudiante à Bouaké",
    description:
      "Maison de 4 chambres pour étudiants, proche de l'université. Ambiance conviviale.",
    ville: "Bouaké",
    budget: 80000,
    disponibilite: "1er décembre 2024",
    auteur: {
      nom: "Kadidja",
      age: 23,
      avatar: "/avatars/kadidja.jpg",
    },
  },
  {
    id: "6",
    title: "Studio meublé à Grand-Bassam",
    description:
      "Studio meublé de 30m² avec vue sur la lagune. Idéal pour jeune professionnel.",
    ville: "Grand-Bassam",
    budget: 90000,
    disponibilite: "1er janvier 2025",
    auteur: {
      nom: "Sékou",
      age: 27,
      avatar: "/avatars/sekou.jpg",
    },
  },
];

export default function ColocationsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [maxBudget, setMaxBudget] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handleContact = (annonceId: string) => {
    console.log("Contacter annonce:", annonceId);
  };

  const handleViewAnnonce = (annonceId: string) => {
    console.log("Voir annonce:", annonceId);
  };

  // Filtrage des annonces
  const filteredAnnonces = annoncesMock.filter((annonce) => {
    const matchesSearch =
      annonce.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      annonce.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCity =
      !selectedCity ||
      annonce.ville.toLowerCase().includes(selectedCity.toLowerCase());
    const matchesBudget = !maxBudget || annonce.budget <= parseInt(maxBudget);

    return matchesSearch && matchesCity && matchesBudget;
  });

  // Pagination
  const totalPages = Math.ceil(filteredAnnonces.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentAnnonces = filteredAnnonces.slice(startIndex, endIndex);

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
        {/* En-tête de la page */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Trouvez votre colocation</h1>
          <p className="text-muted-foreground">
            {filteredAnnonces.length} annonce
            {filteredAnnonces.length > 1 ? "s" : ""} disponible
            {filteredAnnonces.length > 1 ? "s" : ""} en Côte d'Ivoire
          </p>
        </div>

        {/* Filtres */}
        <div className="bg-muted/30 rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Rechercher..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Ville"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Budget max (FCFA)"
                type="number"
                value={maxBudget}
                onChange={(e) => setMaxBudget(e.target.value)}
                className="pl-10"
              />
            </div>

            <Button className="w-full">
              <Filter className="w-4 h-4 mr-2" />
              Filtrer
            </Button>
          </div>
        </div>

        {/* Grille des annonces */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentAnnonces.map((annonce) => (
            <AnnonceCard
              key={annonce.id}
              {...annonce}
              onContact={() => handleContact(annonce.id)}
              onView={() => handleViewAnnonce(annonce.id)}
            />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2">
            <Button
              variant="outline"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              Précédent
            </Button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                onClick={() => setCurrentPage(page)}
                className="w-10 h-10 p-0"
              >
                {page}
              </Button>
            ))}

            <Button
              variant="outline"
              onClick={() =>
                setCurrentPage(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
            >
              Suivant
            </Button>
          </div>
        )}

        {/* Message si aucune annonce */}
        {filteredAnnonces.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-muted/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-12 h-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Aucune annonce trouvée
            </h3>
            <p className="text-muted-foreground mb-4">
              Essayez de modifier vos critères de recherche
            </p>
            <Button
              onClick={() => {
                setSearchTerm("");
                setSelectedCity("");
                setMaxBudget("");
              }}
            >
              Réinitialiser les filtres
            </Button>
          </div>
        )}
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
