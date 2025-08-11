import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, Euro, Calendar, User } from "lucide-react";

interface AnnonceCardProps {
  id: string;
  title: string;
  description: string;
  ville: string;
  budget: number;
  disponibilite: string;
  auteur: {
    nom: string;
    age: number;
    avatar?: string;
  };
  onContact?: () => void;
  onView?: () => void;
}

export function AnnonceCard({
  id,
  title,
  description,
  ville,
  budget,
  disponibilite,
  auteur,
  onContact,
  onView,
}: AnnonceCardProps) {
  // Fonction pour formater les prix en FCFA
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fr-FR").format(price) + " FCFA";
  };

  return (
    <Card
      className="w-full max-w-sm hover:shadow-lg transition-shadow cursor-pointer"
      onClick={onView}
    >
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <Avatar>
            <AvatarImage src={auteur.avatar} alt={auteur.nom} />
            <AvatarFallback>{auteur.nom.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{auteur.nom}</p>
            <p className="text-sm text-muted-foreground">{auteur.age} ans</p>
          </div>
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription className="line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="flex items-center gap-2 text-sm">
          <MapPin className="h-4 w-4 text-muted-foreground" />
          <span>{ville}</span>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <div className="h-4 w-4 text-muted-foreground">💰</div>
          <span className="font-medium">{formatPrice(budget)}/mois</span>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span>Disponible le {disponibilite}</span>
        </div>
      </CardContent>

      <CardFooter className="flex gap-2">
        <Button
          variant="outline"
          className="flex-1"
          onClick={(e) => {
            window.location.href = `/colocations/${id}`;
            // e.stopPropagation();
            // onView?.();
          }}
        >
          Voir plus
        </Button>
        <Button
          className="flex-1"
          onClick={(e) => {
            e.stopPropagation();
            onContact?.();
          }}
        >
          Contacter
        </Button>
      </CardFooter>
    </Card>
  );
}
