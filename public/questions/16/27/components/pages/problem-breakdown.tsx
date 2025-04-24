"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"

export default function ProblemBreakdown() {
  const [givenInfo, setGivenInfo] = useState<string[]>([])
  const [needToFind, setNeedToFind] = useState<string[]>([])
  const [availableCards, setAvailableCards] = useState([
    { id: "almonds-price", content: "🍬 Almonds: $2.59/lb", category: "given" },
    { id: "peanuts-price", content: "🥜 Peanuts: $1.69/lb", category: "given" },
    { id: "total-weight", content: "⚖️ Total weight: 10 pounds", category: "given" },
    { id: "almonds-weight", content: "❓ Almonds weight = variable a", category: "given" },
    { id: "peanuts-weight", content: "❓ Peanuts weight = ?", category: "find" },
    { id: "total-cost", content: "💰 Total cost = ?", category: "find" },
  ])

  const onDragEnd = (result: any) => {
    if (!result.destination) return

    const { source, destination, draggableId } = result
    const card = availableCards.find((c) => c.id === draggableId)

    if (!card) return

    // Remove from available cards
    setAvailableCards(availableCards.filter((c) => c.id !== draggableId))

    // Add to appropriate destination
    if (destination.droppableId === "given") {
      setGivenInfo([...givenInfo, card.content])
    } else if (destination.droppableId === "find") {
      setNeedToFind([...needToFind, card.content])
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">🧩 What Are We Given?</h1>
        <p className="text-lg">Drag the cards to organize the information</p>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Available cards */}
          <Card className="p-4 bg-gray-50 border-gray-200">
            <h2 className="font-bold text-lg mb-4">Information Cards</h2>
            <Droppable droppableId="available">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-2 min-h-[200px]">
                  {availableCards.map((card, index) => (
                    <Draggable key={card.id} draggableId={card.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="p-3 bg-white rounded-md shadow-sm border border-gray-200 cursor-move"
                        >
                          {card.content}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </Card>

          {/* Given information */}
          <Card className="p-4 bg-green-50 border-green-200">
            <h2 className="font-bold text-lg mb-4">Given Information</h2>
            <Droppable droppableId="given">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-2 min-h-[200px]">
                  {givenInfo.map((info, index) => (
                    <div key={index} className="p-3 bg-white rounded-md shadow-sm border border-green-200">
                      {info}
                    </div>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </Card>

          {/* Need to find */}
          <Card className="p-4 bg-blue-50 border-blue-200">
            <h2 className="font-bold text-lg mb-4">What We Need to Find</h2>
            <Droppable droppableId="find">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-2 min-h-[200px]">
                  {needToFind.map((info, index) => (
                    <div key={index} className="p-3 bg-white rounded-md shadow-sm border border-blue-200">
                      {info}
                    </div>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </Card>
        </div>
      </DragDropContext>

      <div className="bg-yellow-100 p-4 rounded-lg mt-6">
        <p className="font-medium">
          <strong>Tip:</strong> In algebra, we use variables (like a) to represent unknown quantities. We'll use a to
          represent the pounds of almonds in our mix.
        </p>
      </div>
    </div>
  )
}
