import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface ConversationPreviewProps {
  id: string
  contact: {
    nom: string
    avatar?: string
    online?: boolean
  }
  dernierMessage: {
    texte: string
    timestamp: string
    isMe: boolean
  }
  nonLus?: number
  isActive?: boolean
  onClick?: () => void
}

export function ConversationPreview({
  id,
  contact,
  dernierMessage,
  nonLus = 0,
  isActive = false,
  onClick
}: ConversationPreviewProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors hover:bg-accent",
        isActive && "bg-accent"
      )}
      onClick={onClick}
    >
      <div className="relative">
        <Avatar>
          <AvatarImage src={contact.avatar} alt={contact.nom} />
          <AvatarFallback>{contact.nom.charAt(0)}</AvatarFallback>
        </Avatar>
        {contact.online && (
          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
        )}
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <p className="font-medium truncate">{contact.nom}</p>
          <span className="text-xs text-muted-foreground">{dernierMessage.timestamp}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <p className={cn(
            "text-sm truncate",
            dernierMessage.isMe ? "text-muted-foreground" : "text-foreground",
            nonLus > 0 && !dernierMessage.isMe && "font-medium"
          )}>
            {dernierMessage.isMe && "Vous: "}{dernierMessage.texte}
          </p>
          
          {nonLus > 0 && (
            <div className="flex-shrink-0 ml-2">
              <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-medium text-white bg-primary rounded-full">
                {nonLus > 99 ? "99+" : nonLus}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 