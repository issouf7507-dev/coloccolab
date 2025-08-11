"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Plus, Upload, Calendar, MapPin, Euro, Home } from "lucide-react"
import Link from "next/link"

export default function NewListingPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    ville: "",
    budget: "",
    disponibilite: "",
    typeLogement: "",
    surface: "",
    nbChambres: "",
    photos: [] as File[]
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    setFormData(prev => ({ ...prev, photos: [...prev.photos, ...files] }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulation de la création d'annonce
    setTimeout(() => {
      setIsLoading(false)
      console.log("Annonce créée:", formData)
      // Rediriger vers le dashboard
    }, 1000)
  }

  const canSubmit = formData.title && formData.description && formData.ville && formData.budget

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm" asChild>
          <Link href="/dashboard">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour
          </Link>
        </Button>
        <div>
          <h1 className="text-2xl font-bold">Créer une annonce</h1>
          <p className="text-muted-foreground">
            Partagez votre logement et trouvez le colocataire parfait
          </p>
        </div>
      </div>

      {/* Formulaire */}
      <Card>
        <CardHeader>
          <CardTitle>Détails de l'annonce</CardTitle>
          <CardDescription>
            Remplissez les informations pour créer votre annonce
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Titre */}
            <div className="space-y-2">
              <label htmlFor="title" className="text-sm font-medium">
                Titre de l'annonce *
              </label>
              <Input
                id="title"
                placeholder="Ex: Colocation sympa dans le 11ème"
                value={formData.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
                required
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-medium">
                Description *
              </label>
              <textarea
                id="description"
                placeholder="Décrivez votre logement, l'ambiance, les colocataires recherchés..."
                value={formData.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
                required
                rows={4}
                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>

            {/* Localisation et budget */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="ville" className="text-sm font-medium">
                  Ville/Quartier *
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    id="ville"
                    placeholder="Paris 11ème"
                    value={formData.ville}
                    onChange={(e) => handleInputChange("ville", e.target.value)}
                    required
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="budget" className="text-sm font-medium">
                  Budget mensuel (€) *
                </label>
                <div className="relative">
                  <Euro className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    id="budget"
                    type="number"
                    placeholder="650"
                    value={formData.budget}
                    onChange={(e) => handleInputChange("budget", e.target.value)}
                    required
                    className="pl-10"
                  />
                </div>
              </div>
            </div>

            {/* Type de logement et surface */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="typeLogement" className="text-sm font-medium">
                  Type de logement
                </label>
                <select
                  id="typeLogement"
                  value={formData.typeLogement}
                  onChange={(e) => handleInputChange("typeLogement", e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="">Sélectionnez un type</option>
                  <option value="appartement">Appartement</option>
                  <option value="maison">Maison</option>
                  <option value="studio">Studio</option>
                  <option value="chambre">Chambre</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="surface" className="text-sm font-medium">
                  Surface (m²)
                </label>
                <Input
                  id="surface"
                  type="number"
                  placeholder="80"
                  value={formData.surface}
                  onChange={(e) => handleInputChange("surface", e.target.value)}
                />
              </div>
            </div>

            {/* Nombre de chambres et disponibilité */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="nbChambres" className="text-sm font-medium">
                  Nombre de chambres
                </label>
                <Input
                  id="nbChambres"
                  type="number"
                  placeholder="3"
                  value={formData.nbChambres}
                  onChange={(e) => handleInputChange("nbChambres", e.target.value)}
                  min="1"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="disponibilite" className="text-sm font-medium">
                  Disponibilité
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    id="disponibilite"
                    type="date"
                    value={formData.disponibilite}
                    onChange={(e) => handleInputChange("disponibilite", e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
            </div>

            {/* Photos */}
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Photos du logement
              </label>
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground mb-2">
                  Glissez-déposez vos photos ici ou cliquez pour sélectionner
                </p>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                  id="photo-upload"
                />
                <label htmlFor="photo-upload">
                  <Button variant="outline" size="sm" className="cursor-pointer">
                    <Plus className="w-4 h-4 mr-2" />
                    Ajouter des photos
                  </Button>
                </label>
              </div>
              
              {formData.photos.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
                  {formData.photos.map((photo, index) => (
                    <div key={index} className="relative">
                      <img
                        src={URL.createObjectURL(photo)}
                        alt={`Photo ${index + 1}`}
                        className="w-full h-20 object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setFormData(prev => ({
                            ...prev,
                            photos: prev.photos.filter((_, i) => i !== index)
                          }))
                        }}
                        className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white rounded-full text-xs flex items-center justify-center"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Boutons */}
            <div className="flex gap-4 pt-4">
              <Button type="button" variant="outline" className="flex-1" asChild>
                <Link href="/dashboard">
                  Annuler
                </Link>
              </Button>
              <Button 
                type="submit" 
                className="flex-1" 
                disabled={!canSubmit || isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Création...
                  </div>
                ) : (
                  <>
                    <Home className="w-4 h-4 mr-2" />
                    Publier l'annonce
                  </>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
} 