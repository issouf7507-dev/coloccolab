"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AnnonceCard } from "@/components/AnnonceCard"
import { 
  Plus, 
  MessageSquare, 
  Heart, 
  Eye, 
  TrendingUp,
  Users,
  Home,
  Euro
} from "lucide-react"
import Link from "next/link"

// Données mockées
const stats = [
  { title: "Mes annonces", value: "3", icon: Home, color: "text-blue-600" },
  { title: "Messages reçus", value: "12", icon: MessageSquare, color: "text-green-600" },
  { title: "Vues totales", value: "156", icon: Eye, color: "text-purple-600" },
  { title: "Favoris", value: "8", icon: Heart, color: "text-red-600" },
]

const recentAnnonces = [
  {
    id: "1",
    title: "Colocation sympa dans le 11ème",
    description: "Appartement lumineux de 80m² avec balcon, proche du métro. Recherche colocataire calme et propre.",
    ville: "Paris 11ème",
    budget: 650,
    disponibilite: "1er septembre 2024",
    auteur: {
      nom: "Marie",
      age: 28,
      avatar: "/avatars/marie.jpg"
    }
  },
  {
    id: "2",
    title: "Studio partagé près de la fac",
    description: "Studio de 35m² bien équipé, idéal pour étudiant. Quartier calme et bien desservi.",
    ville: "Lyon 7ème",
    budget: 450,
    disponibilite: "15 août 2024",
    auteur: {
      nom: "Thomas",
      age: 22,
      avatar: "/avatars/thomas.jpg"
    }
  }
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Tableau de bord</h1>
          <p className="text-muted-foreground">
            Bienvenue ! Voici un aperçu de votre activité
          </p>
        </div>
        <Button asChild>
          <Link href="/listing/new">
            <Plus className="w-4 h-4 mr-2" />
            Nouvelle annonce
          </Link>
        </Button>
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className={`w-4 h-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                +12% par rapport au mois dernier
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Graphique d'activité */}
      <Card>
        <CardHeader>
          <CardTitle>Activité récente</CardTitle>
          <CardDescription>
            Évolution de vos vues et contacts sur les 7 derniers jours
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center bg-muted/20 rounded-lg">
            <div className="text-center text-muted-foreground">
              <TrendingUp className="w-12 h-12 mx-auto mb-2" />
              <p>Graphique d'activité</p>
              <p className="text-sm">Intégration future avec Chart.js</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Actions rapides */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold">Nouveaux messages</h3>
                <p className="text-sm text-muted-foreground">3 messages non lus</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold">Nouveaux favoris</h3>
                <p className="text-sm text-muted-foreground">2 personnes intéressées</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold">Nouveaux contacts</h3>
                <p className="text-sm text-muted-foreground">5 demandes de contact</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Annonces récentes */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Mes annonces récentes</h2>
          <Button variant="outline" asChild>
            <Link href="/dashboard/annonces">
              Voir toutes
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recentAnnonces.map((annonce) => (
            <AnnonceCard
              key={annonce.id}
              {...annonce}
              onContact={() => console.log("Contacter:", annonce.id)}
              onView={() => console.log("Voir:", annonce.id)}
            />
          ))}
        </div>
      </div>

      {/* Conseils */}
      <Card>
        <CardHeader>
          <CardTitle>💡 Conseils pour optimiser vos annonces</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-sm">Ajoutez des photos de qualité pour attirer plus de visiteurs</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-sm">Répondez rapidement aux messages pour augmenter vos chances</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-sm">Mettez à jour régulièrement vos annonces pour rester visible</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 