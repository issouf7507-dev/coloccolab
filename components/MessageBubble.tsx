import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface MessageBubbleProps {
  message: {
    id: string
    texte: string
    timestamp: string
    isMe: boolean
  }
  contact?: {
    nom: string
    avatar?: string
  }
}

export function MessageBubble({ message, contact }: MessageBubbleProps) {
  return (
    <div className={cn(
      "flex gap-2 mb-4",
      message.isMe ? "flex-row-reverse" : "flex-row"
    )}>
      {!message.isMe && contact && (
        <Avatar className="w-8 h-8">
          <AvatarImage src={contact.avatar} alt={contact.nom} />
          <AvatarFallback>{contact.nom.charAt(0)}</AvatarFallback>
        </Avatar>
      )}
      
      <div className={cn(
        "flex flex-col max-w-[70%]",
        message.isMe ? "items-end" : "items-start"
      )}>
        <div className={cn(
          "rounded-lg px-3 py-2 text-sm",
          message.isMe 
            ? "bg-primary text-primary-foreground" 
            : "bg-muted text-foreground"
        )}>
          {message.texte}
        </div>
        
        <span className="text-xs text-muted-foreground mt-1">
          {message.timestamp}
        </span>
      </div>
    </div>
  )
} 