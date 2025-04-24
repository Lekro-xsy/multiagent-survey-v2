"use client"

import { useState } from "react"
import { DndContext, closestCenter, type DragEndEvent } from "@dnd-kit/core"
import { SortableContext, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { GripVertical } from "lucide-react"

import { PageLayout } from "@/components/page-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type InfoCard = {
  id: string
  content: string
  category: "individual" | "together" | "uncategorized"
}

function SortableCard({ card }: { card: InfoCard }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: card.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  const getBgColor = () => {
    switch (card.category) {
      case "individual":
        return "bg-blue-50 border-blue-200"
      case "together":
        return "bg-green-50 border-green-200"
      default:
        return "bg-white"
    }
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`p-4 mb-2 rounded-lg border ${getBgColor()} flex items-center justify-between`}
    >
      <span className="font-medium">{card.content}</span>
      <button {...attributes} {...listeners} className="cursor-grab p-1 rounded hover:bg-gray-100">
        <GripVertical className="h-4 w-4 text-gray-400" />
      </button>
    </div>
  )
}

export default function BreakdownPage() {
  const [cards, setCards] = useState<InfoCard[]>([
    { id: "you", content: "➡️ You: 6 minutes", category: "uncategorized" },
    { id: "brother", content: "➡️ Brother: 8 minutes", category: "uncategorized" },
    { id: "goal", content: "➡️ Goal: How long together?", category: "uncategorized" },
  ])

  const [categories, setCategories] = useState({
    individual: { title: "Individual Times", description: "How long each person takes alone" },
    together: { title: "Working Together Time", description: "What we need to find out" },
  })

  const [feedback, setFeedback] = useState("")

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (over) {
      const cardId = active.id as string
      const targetCategory = over.id as "individual" | "together"

      setCards(cards.map((card) => (card.id === cardId ? { ...card, category: targetCategory } : card)))
    }
  }

  const handleCheck = () => {
    const youCard = cards.find((card) => card.id === "you")
    const brotherCard = cards.find((card) => card.id === "brother")
    const goalCard = cards.find((card) => card.id === "goal")

    if (
      youCard?.category === "individual" &&
      brotherCard?.category === "individual" &&
      goalCard?.category === "together"
    ) {
      setFeedback("Great job! You've correctly categorized the information.")
    } else {
      setFeedback("Not quite right. Try again!")
    }
  }

  const uncategorizedCards = cards.filter((card) => card.category === "uncategorized")

  return (
    <PageLayout>
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-6 text-3xl font-bold text-center">🧩 Key Information at a Glance</h1>

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <Card>
              <CardHeader>
                <CardTitle>{categories.individual.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{categories.individual.description}</p>
                <SortableContext items={[]} strategy={verticalListSortingStrategy}>
                  <div id="individual" className="min-h-24 border border-dashed rounded-lg p-4">
                    {cards
                      .filter((card) => card.category === "individual")
                      .map((card) => (
                        <SortableCard key={card.id} card={card} />
                      ))}
                  </div>
                </SortableContext>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{categories.together.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{categories.together.description}</p>
                <SortableContext items={[]} strategy={verticalListSortingStrategy}>
                  <div id="together" className="min-h-24 border border-dashed rounded-lg p-4">
                    {cards
                      .filter((card) => card.category === "together")
                      .map((card) => (
                        <SortableCard key={card.id} card={card} />
                      ))}
                  </div>
                </SortableContext>
              </CardContent>
            </Card>
          </DndContext>
        </div>

        {uncategorizedCards.length > 0 && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Information Cards</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">Drag these cards to the appropriate categories above</p>
              <div className="space-y-2">
                {uncategorizedCards.map((card) => (
                  <SortableCard key={card.id} card={card} />
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        <div className="text-center">
          <Button onClick={handleCheck} size="lg">
            Check My Answer
          </Button>

          {feedback && (
            <div
              className={`mt-4 p-3 rounded-lg ${feedback.includes("Great") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
            >
              {feedback}
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  )
}
