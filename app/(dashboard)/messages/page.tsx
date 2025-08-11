"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ConversationPreview } from "@/components/ConversationPreview"
import { MessageBubble } from "@/components/MessageBubble"
import { 
  Send, 
  Search, 
  MoreVertical, 
  Phone, 
  Video, 
  Info,
  ArrowLeft
} from "lucide-react"

// Données mockées
const conversationsMock = [
  {
    id: "1",
    contact: {
      nom: "Marie",
      avatar: "/avatars/marie.jpg",
      online: true
    },
    dernierMessage: {
      texte: "Salut ! J'ai vu ton annonce, ça m'intéresse beaucoup",
      timestamp: "14:30",
      isMe: false
    },
    nonLus: 2
  },
  {
    id: "2",
    contact: {
      nom: "Thomas",
      avatar: "/avatars/thomas.jpg",
      online: false
    },
    dernierMessage: {
      texte: "Parfait, on peut se voir demain ?",
      timestamp: "12:15",
      isMe: true
    },
    nonLus: 0
  },
  {
    id: "3",
    contact: {
      nom: "Sophie",
      avatar: "/avatars/sophie.jpg",
      online: true
    },
    dernierMessage: {
      texte: "Merci pour les infos !",
      timestamp: "10:45",
      isMe: false
    },
    nonLus: 1
  }
]

const messagesMock = [
  {
    id: "1",
    texte: "Salut ! J'ai vu ton annonce, ça m'intéresse beaucoup",
    timestamp: "14:30",
    isMe: false
  },
  {
    id: "2",
    texte: "Salut Marie ! Ravi que ça t'intéresse 😊",
    timestamp: "14:32",
    isMe: true
  },
  {
    id: "3",
    texte: "Peux-tu me dire plus sur l'appartement ?",
    timestamp: "14:33",
    isMe: false
  },
  {
    id: "4",
    texte: "Bien sûr ! C'est un appartement de 80m² avec 2 chambres, cuisine équipée et balcon. Il est proche du métro et dans un quartier sympa.",
    timestamp: "14:35",
    isMe: true
  },
  {
    id: "5",
    texte: "Ça a l'air parfait ! On peut se voir pour une visite ?",
    timestamp: "14:37",
    isMe: false
  }
]

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState<string | null>("1")
  const [newMessage, setNewMessage] = useState("")
  const [searchTerm, setSearchTerm] = useState("")

  const currentConversation = conversationsMock.find(c => c.id === selectedConversation)
  const currentMessages = messagesMock

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      console.log("Envoi du message:", newMessage)
      setNewMessage("")
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="h-[calc(100vh-120px)] flex">
      {/* Liste des conversations */}
      <div className="w-80 border-r bg-background flex flex-col">
        <CardHeader className="border-b">
          <CardTitle className="text-lg">Messages</CardTitle>
          <div className="relative mt-2">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Rechercher..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardHeader>
        
        <div className="flex-1 overflow-y-auto">
          {conversationsMock.map((conversation) => (
            <ConversationPreview
              key={conversation.id}
              {...conversation}
              isActive={selectedConversation === conversation.id}
              onClick={() => setSelectedConversation(conversation.id)}
            />
          ))}
        </div>
      </div>

      {/* Zone de chat */}
      <div className="flex-1 flex flex-col">
        {selectedConversation ? (
          <>
            {/* Header de la conversation */}
            <CardHeader className="border-b bg-background">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="md:hidden"
                    onClick={() => setSelectedConversation(null)}
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </Button>
                  
                  <Avatar>
                    <AvatarImage src={currentConversation?.contact.avatar} alt={currentConversation?.contact.nom} />
                    <AvatarFallback>{currentConversation?.contact.nom.charAt(0)}</AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{currentConversation?.contact.nom}</h3>
                      {currentConversation?.contact.online && (
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {currentConversation?.contact.online ? "En ligne" : "Hors ligne"}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="sm">
                    <Phone className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Video className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Info className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {currentMessages.map((message) => (
                <MessageBubble
                  key={message.id}
                  message={message}
                  contact={currentConversation?.contact}
                />
              ))}
            </div>

            {/* Zone de saisie */}
            <CardContent className="border-t bg-background p-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Tapez votre message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1"
                />
                <Button 
                  onClick={handleSendMessage}
                  disabled={!newMessage.trim()}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </>
        ) : (
          // État vide - sélectionner une conversation
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-medium mb-2">Sélectionnez une conversation</h3>
              <p className="text-sm">
                Choisissez une conversation dans la liste pour commencer à discuter
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 