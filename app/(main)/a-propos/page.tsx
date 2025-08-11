"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Heart,
  Target,
  Users,
  Award,
  MapPin,
  Home,
  MessageSquare,
  Shield,
  TrendingUp,
  Globe,
  Star,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

// Données de l'équipe
const teamMembers = [
  {
    nom: "Fatou Koné",
    role: "Fondatrice & CEO",
    avatar: "/team/fatou.jpg",
    description:
      "Passionnée par l'innovation sociale, Fatou a créé ColabColoc CI pour faciliter l'accès au logement en Côte d'Ivoire.",
    linkedin: "#",
    email: "fatou@colabcoloc.ci",
  },
  {
    nom: "Kouassi Yao",
    role: "CTO & Développeur",
    avatar: "/team/kouassi.jpg",
    description:
      "Expert en développement web et mobile, Kouassi s'assure que la plateforme soit performante et sécurisée.",
    linkedin: "#",
    email: "kouassi@colabcoloc.ci",
  },
  {
    nom: "Aminata Diallo",
    role: "Responsable Marketing",
    avatar: "/team/aminata.jpg",
    description:
      "Spécialiste du marketing digital, Aminata développe notre présence en ligne et notre communauté.",
    linkedin: "#",
    email: "aminata@colabcoloc.ci",
  },
  {
    nom: "Sékou Traoré",
    role: "Responsable Support",
    avatar: "/team/sekou.jpg",
    description:
      "Sékou et son équipe s'assurent que chaque utilisateur ait une expérience exceptionnelle.",
    linkedin: "#",
    email: "sekou@colabcoloc.ci",
  },
];

// Statistiques
const stats = [
  { label: "Utilisateurs actifs", value: "5,000+", icon: Users },
  { label: "Annonces publiées", value: "2,500+", icon: Home },
  { label: "Colocations réussies", value: "1,200+", icon: Heart },
  { label: "Villes couvertes", value: "15+", icon: MapPin },
];

// Valeurs
const values = [
  {
    title: "Confiance",
    description:
      "Nous vérifions chaque profil pour garantir la sécurité de notre communauté.",
    icon: Shield,
  },
  {
    title: "Communauté",
    description:
      "Nous créons des liens durables entre colocataires et favorisons l'entraide.",
    icon: Users,
  },
  {
    title: "Innovation",
    description:
      "Nous développons constamment de nouvelles fonctionnalités pour améliorer votre expérience.",
    icon: TrendingUp,
  },
  {
    title: "Impact local",
    description:
      "Nous contribuons au développement économique et social de la Côte d'Ivoire.",
    icon: Globe,
  },
];

export default function AProposPage() {
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
              <Link href="/a-propos" className="text-foreground font-medium">
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
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              À propos de ColabColoc CI
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Nous révolutionnons la colocation en Côte d'Ivoire en créant des
              liens durables et en facilitant l'accès au logement pour tous.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Nous contacter</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/colocations">Voir les annonces</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Notre histoire */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Notre histoire</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    ColabColoc CI est né d'un constat simple : trouver un
                    logement abordable et de qualité en Côte d'Ivoire est un
                    défi quotidien pour de nombreux étudiants et jeunes
                    professionnels.
                  </p>
                  <p>
                    En 2023, Fatou Koné, alors étudiante à l'INPHB, a vécu cette
                    difficulté de première main. Après avoir passé des mois à
                    chercher une colocation convenable, elle a décidé de créer
                    une solution qui faciliterait la mise en relation entre
                    personnes cherchant un logement et celles ayant une chambre
                    disponible.
                  </p>
                  <p>
                    Aujourd'hui, ColabColoc CI est devenu la plateforme de
                    référence pour la colocation en Côte d'Ivoire, avec des
                    milliers d'utilisateurs satisfaits et une communauté en
                    pleine croissance.
                  </p>
                </div>
              </div>
              <div className="bg-muted/30 rounded-lg p-8">
                <div className="w-full h-64 bg-muted/20 rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Image de l'équipe</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Notre mission */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Notre mission</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Faciliter l'accès au logement en Côte d'Ivoire en créant une
                communauté de confiance où chacun peut trouver sa place.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <Card key={value.title} className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Statistiques */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Nos chiffres</h2>
              <p className="text-lg text-muted-foreground">
                La confiance de milliers d'utilisateurs en Côte d'Ivoire
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Notre équipe */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Notre équipe</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Une équipe passionnée qui travaille chaque jour pour améliorer
                votre expérience de colocation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member) => (
                <Card key={member.nom} className="text-center">
                  <CardContent className="pt-6">
                    <Avatar className="w-20 h-20 mx-auto mb-4">
                      <AvatarImage src={member.avatar} />
                      <AvatarFallback>
                        {member.nom
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="font-semibold mb-1">{member.nom}</h3>
                    <p className="text-sm text-primary mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground mb-4">
                      {member.description}
                    </p>
                    <div className="flex justify-center gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`mailto:${member.email}`}>Email</Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={member.linkedin}>LinkedIn</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Témoignages */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Ce qu'en disent nos utilisateurs
              </h2>
              <p className="text-lg text-muted-foreground">
                Découvrez les témoignages de notre communauté
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-4">
                    "Grâce à ColabColoc CI, j'ai trouvé une super coloc à Angré
                    en moins d'une semaine ! L'équipe est très réactive et les
                    profils sont sérieux."
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback>M</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">Marie K.</p>
                      <p className="text-sm text-muted-foreground">
                        Étudiante, Abidjan
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-4">
                    "Excellente plateforme ! J'ai pu louer ma chambre libre
                    rapidement et j'ai trouvé un colocataire parfait. Je
                    recommande vivement !"
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback>K</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">Kouassi Y.</p>
                      <p className="text-sm text-muted-foreground">
                        Ingénieur, Yamoussoukro
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-4">
                    "Service client exceptionnel et interface très intuitive.
                    J'ai trouvé ma colocation idéale en quelques jours
                    seulement."
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback>A</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">Aminata D.</p>
                      <p className="text-sm text-muted-foreground">
                        Professionnelle, Bouaké
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Rejoignez notre communauté
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Des milliers d'Ivoiriens ont déjà trouvé leur colocataire idéal.
              Et vous ?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/signup">Créer mon compte</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link href="/contact">Nous contacter</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

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
