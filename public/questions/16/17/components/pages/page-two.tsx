"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd"

interface PageTwoProps {
  onNext: () => void
}

interface InfoCard {
  id: string
  content: string
  type: string
}

export function PageTwo({ onNext }: PageTwoProps) {
  const [infoCards, setInfoCards] = useState<InfoCard[]>([
    { id: "distance", content: "📏 Distance: 41.4 miles", type: "data" },
    { id: "time", content: "⏱️ Time: 3 hours", type: "data" },
    { id: "question", content: "❓ Find: Distance for 7 hours", type: "question" },
  ])

  const [knownData, setKnownData] = useState<InfoCard[]>([])
  const [questionAsked, setQuestionAsked] = useState<InfoCard[]>([])
  const [isCorrect, setIsCorrect] = useState(false)

  const onDragEnd = (result: any) => {
    const { source, destination } = result

    // Dropped outside the list
    if (!destination) {
      return
    }

    // Find the dragged item
    const draggedItem = findItemById(result.draggableId)
    if (!draggedItem) return

    // Remove from source
    if (source.droppableId === "infoCards") {
      setInfoCards((prev) => prev.filter((item) => item.id !== draggedItem.id))
    } else if (source.droppableId === "knownData") {
      setKnownData((prev) => prev.filter((item) => item.id !== draggedItem.id))
    } else if (source.droppableId === "questionAsked") {
      setQuestionAsked((prev) => prev.filter((item) => item.id !== draggedItem.id))
    }

    // Add to destination
    if (destination.droppableId === "infoCards") {
      setInfoCards((prev) => [...prev, draggedItem])
    } else if (destination.droppableId === "knownData") {
      setKnownData((prev) => [...prev, draggedItem])
    } else if (destination.droppableId === "questionAsked") {
      setQuestionAsked((prev) => [...prev, draggedItem])
    }

    // Check if correct
    setTimeout(() => {
      const isDataCorrect =
        knownData.some((item) => item.id === "distance") && knownData.some((item) => item.id === "time")
      const isQuestionCorrect = questionAsked.some((item) => item.id === "question")

      setIsCorrect(isDataCorrect && isQuestionCorrect)
    }, 100)
  }

  const findItemById = (id: string): InfoCard | undefined => {
    return [...infoCards, ...knownData, ...questionAsked].find((item) => item.id === id)
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-blue-600">🧩 What Information Do We Have?</h1>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-3">Information Cards</h2>
            <Droppable droppableId="infoCards">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="min-h-[100px] bg-gray-50 p-4 rounded-lg border-2 border-dashed border-gray-300"
                >
                  {infoCards.map((card, index) => (
                    <Draggable key={card.id} draggableId={card.id} index={index}>
                      {(provided) => (
                        <Card
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="p-3 mb-2 cursor-move bg-white"
                        >
                          {card.content}
                        </Card>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                  {infoCards.length === 0 && <p className="text-gray-400 text-center">Drag cards here</p>}
                </div>
              )}
            </Droppable>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-3">Known Data</h2>
              <Droppable droppableId="knownData">
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="min-h-[100px] bg-blue-50 p-4 rounded-lg border-2 border-dashed border-blue-300"
                  >
                    {knownData.map((card, index) => (
                      <Draggable key={card.id} draggableId={card.id} index={index}>
                        {(provided) => (
                          <Card
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="p-3 mb-2 cursor-move bg-white"
                          >
                            {card.content}
                          </Card>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                    {knownData.length === 0 && <p className="text-gray-400 text-center">Drag known data here</p>}
                  </div>
                )}
              </Droppable>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Question Asked</h2>
              <Droppable droppableId="questionAsked">
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="min-h-[100px] bg-green-50 p-4 rounded-lg border-2 border-dashed border-green-300"
                  >
                    {questionAsked.map((card, index) => (
                      <Draggable key={card.id} draggableId={card.id} index={index}>
                        {(provided) => (
                          <Card
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="p-3 mb-2 cursor-move bg-white"
                          >
                            {card.content}
                          </Card>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                    {questionAsked.length === 0 && <p className="text-gray-400 text-center">Drag question here</p>}
                  </div>
                )}
              </Droppable>
            </div>
          </div>
        </div>
      </DragDropContext>

      <div className="flex justify-between items-center">
        {isCorrect && (
          <div className="text-green-600 font-semibold">
            Great job! You've correctly identified the known data and the question.
          </div>
        )}
        <Button onClick={onNext} className="bg-blue-600 hover:bg-blue-700" disabled={!isCorrect}>
          Continue to Visualization
        </Button>
      </div>
    </div>
  )
}
