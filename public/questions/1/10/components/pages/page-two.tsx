"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"

export function PageTwo() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [droppedItems, setDroppedItems] = useState<string[]>([])

  const infoCards = [
    {
      id: "airplane-size",
      title: "🛫 Size of Airplane",
      details: "Small planes (regional), Medium (domestic), Large (international)",
    },
    {
      id: "distance",
      title: "📏 Distance in Miles",
      details: "How far you're traveling affects the price",
    },
    {
      id: "ticket-price",
      title: "💵 Ticket Prices",
      details: "Partially based on distance, but other factors matter too",
    },
    {
      id: "time-of-day",
      title: "🕒 Time of Day",
      details: "Morning and evening flights may have different prices",
    },
    {
      id: "day-of-week",
      title: "📅 Day of Week",
      details: "Weekend flights might cost more than weekday flights",
    },
  ]

  const handleDragEnd = (result: any) => {
    if (!result.destination) return

    const itemId = result.draggableId
    if (!droppedItems.includes(itemId) && result.destination.droppableId === "important-box") {
      setDroppedItems([...droppedItems, itemId])
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-center text-3xl font-bold text-sky-700">🧩 Let's Understand the Situation!</h1>

      <p className="text-center text-lg">
        What factors might affect the price of an airplane ticket? Explore the cards below to learn more.
      </p>

      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <h2 className="mb-3 text-xl font-semibold text-sky-700">Information Cards:</h2>
            <Droppable droppableId="info-cards">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-3">
                  {infoCards.map((card, index) => (
                    <Draggable key={card.id} draggableId={card.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={`cursor-grab ${droppedItems.includes(card.id) ? "opacity-50" : ""}`}
                        >
                          <Card
                            className="transition-all hover:shadow-md"
                            onMouseEnter={() => setHoveredCard(card.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                          >
                            <CardContent className="p-4">
                              <h3 className="text-lg font-medium">{card.title}</h3>
                              {hoveredCard === card.id && <p className="mt-2 text-sm text-gray-600">{card.details}</p>}
                            </CardContent>
                          </Card>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold text-sky-700">What Matters for Price?</h2>
            <Droppable droppableId="important-box">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="min-h-[300px] rounded-lg border-2 border-dashed border-sky-300 bg-sky-50 p-4"
                >
                  {droppedItems.length === 0 ? (
                    <p className="text-center text-gray-500">Drag important factors here</p>
                  ) : (
                    <div className="space-y-2">
                      {droppedItems.map((itemId) => {
                        const card = infoCards.find((c) => c.id === itemId)
                        return (
                          <Card key={itemId} className="bg-white">
                            <CardContent className="p-3">
                              <h3 className="text-md font-medium">{card?.title}</h3>
                              <p className="mt-1 text-sm text-gray-600">{card?.details}</p>
                            </CardContent>
                          </Card>
                        )
                      })}
                    </div>
                  )}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </div>
      </DragDropContext>

      <div className="mt-4 text-center text-sm text-gray-500">
        Hover over cards to see details. Drag important factors to the box on the right.
      </div>
    </div>
  )
}
