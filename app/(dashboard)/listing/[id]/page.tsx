"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  ArrowLeft, 
  MessageSquare, 
  Heart, 
  Share2, 
  MapPin, 
  Euro, 
  Calendar,
  Home,
  Users,
  Star,
  Phone,
  Mail
} from "lucide-react"
import Link from "next/link"

// Données mockées pour l'annonce
const annonceMock = {
  id: "1",
  title: "Colocation sympa dans le 11ème",
  description: "Appartement lumineux de 80m² avec balcon, proche du métro. Recherche colocataire calme et propre. L'appartement est situé dans un quartier vivant avec de nombreux commerces et restaurants. Les transports en commun sont excellents avec plusieurs lignes de métro et bus à proximité. L'appartement dispose d'une cuisine équipée, d'un salon spacieux et de deux chambres. La chambre disponible fait 12m² avec un grand placard. Les charges sont incluses dans le loyer. Idéal pour un étudiant ou jeune professionnel.",
  ville: "Paris 11ème",
  budget: 650,
  disponibilite: "1er septembre 2024",
  surface: "80",
  nbChambres: "2",
  typeLogement: "Appartement",
  auteur: {
    nom: "Marie",
    age: 28,
    avatar: "/avatars/marie.jpg",
    description: "Étudiante en master de communication, j'aime la musique, la cuisine et les sorties culturelles. Je recherche une colocataire sympa et respectueuse.",
    note: 4.8,
    nbAvis: 12,
    online: true
  },
  photos: [
    "/photos/appart1.jpg",
    "/photos/appart2.jpg",
    "/photos/appart3.jpg"
  ],
  equipements: [
    "Cuisine équipée",
    "Balcon",
    "Ascenseur",
    "Internet fibre",
    "Chauffage inclus",
    "Charges incluses"
  ]
}

export default function ListingDetailPage({ params }: { params: { id: string } }) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [selectedPhoto, setSelectedPhoto] = useState(0)

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm" asChild>
          <Link href="/dashboard">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour
          </Link>
        </Button>
        <div className="flex-1">
          <h1 className="text-2xl font-bold">{annonceMock.title}</h1>
          <p className="text-muted-foreground">{annonceMock.ville}</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Share2 className="w-4 h-4" />
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => setIsFavorite(!isFavorite)}
          >
            <Heart className={`w-4 h-4 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
          </Button>
        </div>
      </div>

      {/* Photos */}
      <Card>
        <CardContent className="p-0">
          <div className="aspect-video bg-muted relative">
            <img
              src={annonceMock.photos[selectedPhoto] || "/placeholder.jpg"}
              alt={annonceMock.title}
              className="w-full h-full object-cover rounded-t-lg"
            />
          </div>
          {annonceMock.photos.length > 1 && (
            <div className="p-4 flex gap-2 overflow-x-auto">
              {annonceMock.photos.map((photo, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedPhoto(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedPhoto === index ? 'border-primary' : 'border-transparent'
                  }`}
                >
                  <img
                    src={photo}
                    alt={`Photo ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Informations principales */}
        <div className="lg:col-span-2 space-y-6">
          {/* Description */}
          <Card>
            <CardHeader>
              <CardTitle>Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {annonceMock.description}
              </p>
            </CardContent>
          </Card>

          {/* Détails du logement */}
          <Card>
            <CardHeader>
              <CardTitle>Détails du logement</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center gap-2">
                  <Home className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">{annonceMock.typeLogement}</p>
                    <p className="text-xs text-muted-foreground">Type</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 text-muted-foreground">📏</div>
                  <div>
                    <p className="text-sm font-medium">{annonceMock.surface}m²</p>
                    <p className="text-xs text-muted-foreground">Surface</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">{annonceMock.nbChambres}</p>
                    <p className="text-xs text-muted-foreground">Chambres</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">{annonceMock.disponibilite}</p>
                    <p className="text-xs text-muted-foreground">Disponible</p>
                  </div>
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
              <div className="grid grid-cols-2 gap-2">
                {annonceMock.equipements.map((equipement) => (
                  <div key={equipement} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">{equipement}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Prix et contact */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Euro className="w-5 h-5" />
                {annonceMock.budget}€/mois
              </CardTitle>
              <CardDescription>
                Charges incluses
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full" size="lg">
                <MessageSquare className="w-4 h-4 mr-2" />
                Contacter
              </Button>
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1">
                  <Phone className="w-4 h-4" />
                </Button>
                <Button variant="outline" className="flex-1">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Profil de l'auteur */}
          <Card>
            <CardHeader>
              <CardTitle>À propos de {annonceMock.auteur.nom}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={annonceMock.auteur.avatar} alt={annonceMock.auteur.nom} />
                  <AvatarFallback>{annonceMock.auteur.nom.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="font-medium">{annonceMock.auteur.nom}</p>
                    {annonceMock.auteur.online && (
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{annonceMock.auteur.age} ans</p>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{annonceMock.auteur.note}</span>
                    <span className="text-xs text-muted-foreground">
                      ({annonceMock.auteur.nbAvis} avis)
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground">
                {annonceMock.auteur.description}
              </p>
              
              <Button variant="outline" className="w-full">
                Voir le profil complet
              </Button>
            </CardContent>
          </Card>

          {/* Localisation */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Localisation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm font-medium mb-2">{annonceMock.ville}</p>
              <div className="h-32 bg-muted rounded-lg flex items-center justify-center">
                <p className="text-sm text-muted-foreground">Carte interactive</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 