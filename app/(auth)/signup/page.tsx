"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { UserPlus, Mail, Lock, User, MapPin, Euro, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function SignupPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    prenom: "",
    age: "",
    ville: "",
    budget: "",
    typeLogement: ""
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleNextStep = () => {
    if (step === 1 && formData.email && formData.password && formData.confirmPassword) {
      setStep(2)
    } else if (step === 2 && formData.prenom && formData.age && formData.ville) {
      handleSubmit()
    }
  }

  const handleSubmit = async () => {
    setIsLoading(true)
    
    // Simulation d'une inscription
    setTimeout(() => {
      setIsLoading(false)
      // Rediriger vers le dashboard
      console.log("Inscription réussie")
    }, 1000)
  }

  const canProceed = () => {
    if (step === 1) {
      return formData.email && formData.password && formData.confirmPassword && formData.password === formData.confirmPassword
    }
    if (step === 2) {
      return formData.prenom && formData.age && formData.ville
    }
    return false
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour à l'accueil
        </Link>
        
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">C</span>
          </div>
          <h1 className="text-2xl font-bold">ColabColoc</h1>
        </div>
        <p className="text-muted-foreground">Créez votre compte en quelques étapes</p>
      </div>

      {/* Indicateur de progression */}
      <div className="flex items-center justify-center gap-2">
        <div className={`w-3 h-3 rounded-full ${step >= 1 ? 'bg-primary' : 'bg-muted'}`} />
        <div className={`w-3 h-3 rounded-full ${step >= 2 ? 'bg-primary' : 'bg-muted'}`} />
      </div>

      {/* Formulaire d'inscription */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">
            {step === 1 ? "Créer un compte" : "Vos préférences"}
          </CardTitle>
          <CardDescription>
            {step === 1 
              ? "Commencez par créer votre compte" 
              : "Aidez-nous à vous proposer les meilleures annonces"
            }
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          {step === 1 ? (
            <form onSubmit={(e) => { e.preventDefault(); handleNextStep(); }} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">
                  Mot de passe
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    required
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="text-sm font-medium">
                  Confirmer le mot de passe
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                    required
                    className="pl-10"
                  />
                </div>
                {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                  <p className="text-sm text-red-500">Les mots de passe ne correspondent pas</p>
                )}
              </div>
              
              <Button type="submit" className="w-full" disabled={!canProceed()}>
                Continuer
              </Button>
            </form>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); handleNextStep(); }} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="prenom" className="text-sm font-medium">
                  Prénom
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    id="prenom"
                    type="text"
                    placeholder="Votre prénom"
                    value={formData.prenom}
                    onChange={(e) => handleInputChange("prenom", e.target.value)}
                    required
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="age" className="text-sm font-medium">
                  Âge
                </label>
                <Input
                  id="age"
                  type="number"
                  placeholder="25"
                  value={formData.age}
                  onChange={(e) => handleInputChange("age", e.target.value)}
                  required
                  min="18"
                  max="100"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="ville" className="text-sm font-medium">
                  Ville de recherche
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    id="ville"
                    type="text"
                    placeholder="Paris, Lyon, Bordeaux..."
                    value={formData.ville}
                    onChange={(e) => handleInputChange("ville", e.target.value)}
                    required
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="budget" className="text-sm font-medium">
                  Budget mensuel (€)
                </label>
                <div className="relative">
                  <Euro className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    id="budget"
                    type="number"
                    placeholder="600"
                    value={formData.budget}
                    onChange={(e) => handleInputChange("budget", e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="typeLogement" className="text-sm font-medium">
                  Type de logement souhaité
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
              
              <div className="flex gap-2">
                <Button 
                  type="button" 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => setStep(1)}
                >
                  Retour
                </Button>
                <Button 
                  type="submit" 
                  className="flex-1" 
                  disabled={!canProceed() || isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Création...
                    </div>
                  ) : (
                    <>
                      <UserPlus className="w-4 h-4 mr-2" />
                      Créer mon compte
                    </>
                  )}
                </Button>
              </div>
            </form>
          )}
          
          {step === 1 && (
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Déjà un compte ?{" "}
                <Link href="/login" className="text-primary hover:underline">
                  Se connecter
                </Link>
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
} 