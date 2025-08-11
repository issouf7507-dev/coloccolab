"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChevronDown,
  ChevronUp,
  Search,
  HelpCircle,
  Shield,
  Home,
  Users,
  DollarSign,
} from "lucide-react";
import Link from "next/link";

// Données FAQ organisées par catégories
const faqData = {
  general: {
    title: "Questions générales",
    icon: HelpCircle,
    questions: [
      {
        question: "Qu'est-ce que ColabColoc CI ?",
        answer:
          "ColabColoc CI est une plateforme de colocation spécialement conçue pour la Côte d'Ivoire. Nous facilitons la mise en relation entre personnes cherchant une colocation et celles ayant une chambre disponible.",
      },
      {
        question: "Comment fonctionne la plateforme ?",
        answer:
          "C'est simple ! Créez votre compte, parcourez les annonces ou publiez la vôtre, puis échangez directement avec les autres utilisateurs pour trouver votre colocataire idéal.",
      },
      {
        question: "La plateforme est-elle gratuite ?",
        answer:
          "Oui, l'inscription et l'utilisation de base sont entièrement gratuites. Nous proposons des services premium optionnels pour améliorer votre expérience.",
      },
      {
        question: "Dans quelles villes ColabColoc CI est-il disponible ?",
        answer:
          "Nous couvrons toute la Côte d'Ivoire, avec une forte présence à Abidjan, Yamoussoukro, Bouaké, San-Pédro, Grand-Bassam, Korhogo et d'autres villes principales.",
      },
    ],
  },
  securite: {
    title: "Sécurité et confiance",
    icon: Shield,
    questions: [
      {
        question: "Comment vérifiez-vous les profils ?",
        answer:
          "Nous vérifions l'identité de nos utilisateurs via plusieurs méthodes : vérification d'email, numéro de téléphone, et pour les profils premium, vérification d'identité documentaire.",
      },
      {
        question: "Que faire en cas de problème avec un colocataire ?",
        answer:
          "Notre équipe support est là pour vous aider. Contactez-nous immédiatement en cas de problème. Nous pouvons suspendre des comptes et vous accompagner dans la résolution des conflits.",
      },
      {
        question: "Mes données personnelles sont-elles protégées ?",
        answer:
          "Absolument. Nous respectons le RGPD et les lois ivoiriennes sur la protection des données. Vos informations ne sont jamais partagées sans votre consentement.",
      },
      {
        question: "Comment signaler un profil suspect ?",
        answer:
          "Utilisez le bouton 'Signaler' sur chaque profil ou annonce. Notre équipe modération examine chaque signalement dans les 24h.",
      },
    ],
  },
  logement: {
    title: "Logement et colocation",
    icon: Home,
    questions: [
      {
        question: "Comment créer une annonce de colocation ?",
        answer:
          "Connectez-vous à votre compte, cliquez sur 'Publier une annonce', remplissez le formulaire avec les détails de votre logement et vos préférences, puis publiez !",
      },
      {
        question: "Quels documents faut-il pour louer en colocation ?",
        answer:
          "Cela dépend du propriétaire, mais généralement : pièce d'identité, justificatif de revenus, caution, et parfois une garantie parentale pour les étudiants.",
      },
      {
        question: "Comment calculer le loyer en colocation ?",
        answer:
          "Le loyer est généralement divisé équitablement entre colocataires, parfois proportionnellement à la taille des chambres. Les charges (eau, électricité, internet) sont souvent partagées.",
      },
      {
        question: "Que faire en cas de conflit avec les colocataires ?",
        answer:
          "Essayez d'abord la communication directe. Si cela ne fonctionne pas, impliquez le propriétaire ou contactez notre support. Nous proposons aussi des conseils de médiation.",
      },
    ],
  },
  paiement: {
    title: "Paiements et finances",
    icon: DollarSign,
    questions: [
      {
        question: "Comment payer le loyer ?",
        answer:
          "Les paiements se font directement entre colocataires et propriétaire. Nous recommandons les virements bancaires ou les services de paiement mobile (Moov Money, Orange Money, MTN Mobile Money).",
      },
      {
        question: "ColabColoc CI prend-il une commission ?",
        answer:
          "Non, nous ne prenons aucune commission sur les loyers. Notre modèle économique repose sur les services premium et la publicité.",
      },
      {
        question: "Comment gérer les charges communes ?",
        answer:
          "Nous recommandons de créer un compte commun ou d'utiliser des applications de partage de dépenses. Les charges sont généralement divisées équitablement.",
      },
      {
        question: "Que faire si un colocataire ne paie pas ?",
        answer:
          "Contactez d'abord le colocataire concerné. Si le problème persiste, impliquez le propriétaire et notre support. Nous pouvons vous aider à résoudre la situation.",
      },
    ],
  },
  communaute: {
    title: "Communauté et support",
    icon: Users,
    questions: [
      {
        question: "Comment contacter le support ?",
        answer:
          "Vous pouvez nous contacter via le formulaire de contact, par email à support@colabcoloc.ci, ou par téléphone au +225 27 22 49 49 49 du lundi au vendredi, 8h-18h.",
      },
      {
        question: "Y a-t-il des événements de la communauté ?",
        answer:
          "Oui ! Nous organisons régulièrement des événements de networking, des ateliers sur la colocation, et des rencontres entre membres de la communauté.",
      },
      {
        question: "Comment rejoindre le groupe Facebook ?",
        answer:
          "Rejoignez notre groupe Facebook 'ColabColoc CI - Communauté' pour échanger avec d'autres membres, partager des conseils et découvrir des opportunités.",
      },
      {
        question: "Puis-je suggérer des améliorations ?",
        answer:
          "Absolument ! Nous adorons recevoir vos suggestions. Envoyez-nous vos idées via le formulaire de contact ou participez à nos sondages utilisateurs.",
      },
    ],
  },
};

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openQuestions, setOpenQuestions] = useState<Record<string, boolean>>(
    {}
  );

  const toggleQuestion = (questionKey: string) => {
    setOpenQuestions((prev) => ({
      ...prev,
      [questionKey]: !prev[questionKey],
    }));
  };

  // Filtrer les questions basées sur la recherche
  const filteredFAQ = Object.entries(faqData)
    .map(([categoryKey, category]) => {
      const filteredQuestions = category.questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchTerm.toLowerCase())
      );

      return {
        ...category,
        key: categoryKey,
        questions: filteredQuestions,
      };
    })
    .filter((category) => category.questions.length > 0);

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
              <Link href="/faq" className="text-foreground font-medium">
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
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Questions fréquentes</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trouvez rapidement les réponses à vos questions sur ColabColoc CI
          </p>
        </div>

        {/* Barre de recherche */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input
              type="text"
              placeholder="Rechercher dans la FAQ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>

        {/* Catégories FAQ */}
        <div className="space-y-8">
          {filteredFAQ.map((category) => (
            <Card key={category.key}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <category.icon className="w-5 h-5 text-primary" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.questions.map((item, index) => {
                  const questionKey = `${category.key}-${index}`;
                  const isOpen = openQuestions[questionKey];

                  return (
                    <div
                      key={questionKey}
                      className="border-b border-border last:border-b-0 pb-4 last:pb-0"
                    >
                      <button
                        onClick={() => toggleQuestion(questionKey)}
                        className="w-full text-left flex items-center justify-between py-2 hover:bg-muted/50 rounded-lg px-2 -mx-2 transition-colors"
                      >
                        <h3 className="font-medium text-left">
                          {item.question}
                        </h3>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="mt-3 pl-2">
                          <p className="text-muted-foreground leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Message si aucune question trouvée */}
        {filteredFAQ.length === 0 && searchTerm && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-muted/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-12 h-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Aucune question trouvée
            </h3>
            <p className="text-muted-foreground mb-4">
              Essayez avec d'autres mots-clés ou contactez-nous directement
            </p>
            <Button asChild>
              <Link href="/contact">Nous contacter</Link>
            </Button>
          </div>
        )}

        {/* Section contact */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="py-8">
              <h3 className="text-xl font-semibold mb-4">
                Vous ne trouvez pas votre réponse ?
              </h3>
              <p className="text-muted-foreground mb-6">
                Notre équipe support est là pour vous aider. N'hésitez pas à
                nous contacter !
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link href="/contact">Nous contacter</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/a-propos">En savoir plus sur ColabColoc CI</Link>
                </Button>
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
