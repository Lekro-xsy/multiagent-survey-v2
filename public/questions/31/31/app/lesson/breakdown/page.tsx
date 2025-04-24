"use client"

import { useState } from "react"
import { PageContainer } from "@/components/page-container"
import { PageNavigation } from "@/components/page-navigation"
import { Button } from "@/components/ui/button"
import { DragDropContext, Draggable, Droppable } from "@/components/drag-drop"

export default function BreakdownPage() {
  const [facts, setFacts] = useState([
    { id: "fact1", content: "Farm 1: 17 pecks", category: null },
    { id: "fact2", content: "Farm 2: 2 × 17 = 34 pecks", category: null },
    { id: "fact3", content: "1 bushel = 4 pecks", category: null },
  ])

  const [isCorrect, setIsCorrect] = useState(false)
  const [hasChecked, setHasChecked] = useState(false)

  const handleDragEnd = (result) => {
    if (!result.destination) return

    const items = Array.from(facts)
    const [reorderedItem] = items.splice(result.source.index, 1)

    reorderedItem.category = result.destination.droppableId

    items.splice(result.destination.index, 0, reorderedItem)

    setFacts(items)
  }

  const checkAnswer = () => {
    const isFirstStepCorrect =
      facts.some((fact) => fact.id === "fact1" && fact.category === "firstStep") &&
      facts.some((fact) => fact.id === "fact2" && fact.category === "firstStep")

    const isSecondStepCorrect = facts.some((fact) => fact.id === "fact3" && fact.category === "secondStep")

    setIsCorrect(isFirstStepCorrect && isSecondStepCorrect)
    setHasChecked(true)
  }

  return (
    <PageContainer title="🧩 What Information Do We Know?" pageNumber={2} totalPages={9}>
      <div className="flex flex-col items-center">
        <div className="bg-amber-50 p-6 rounded-lg shadow-md max-w-2xl mb-8">
          <h2 className="text-2xl font-bold text-red-700 mb-4">Problem Facts:</h2>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li className="text-lg">Farm 1: 17 pecks</li>
            <li className="text-lg">Farm 2: 2 × 17 = 34 pecks</li>
            <li className="text-lg">1 bushel = 4 pecks</li>
          </ul>

          <div className="bg-yellow-100 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Important Tip:</h3>
            <p className="text-lg">First find total pecks, then convert to bushels.</p>
          </div>
        </div>

        <div className="w-full max-w-2xl mb-8">
          <h2 className="text-xl font-bold text-center mb-4">Sort the facts into the correct steps:</h2>

          <DragDropContext onDragEnd={handleDragEnd}>
            <div className="flex flex-col md:flex-row gap-6">
              <Droppable droppableId="facts">
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="bg-gray-100 p-4 rounded-lg flex-1 min-h-[150px]"
                  >
                    <h3 className="font-bold mb-2">Facts:</h3>
                    {facts
                      .filter((fact) => fact.category === null)
                      .map((fact, index) => (
                        <Draggable key={fact.id} draggableId={fact.id} index={index}>
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="bg-white p-3 mb-2 rounded border border-gray-300 cursor-move"
                            >
                              {fact.content}
                            </div>
                          )}
                        </Draggable>
                      ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>

              <div className="flex flex-col gap-6 flex-1">
                <Droppable droppableId="firstStep">
                  {(provided) => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className="bg-blue-100 p-4 rounded-lg min-h-[100px]"
                    >
                      <h3 className="font-bold mb-2">First Step (Find total pecks):</h3>
                      {facts
                        .filter((fact) => fact.category === "firstStep")
                        .map((fact, index) => (
                          <Draggable key={fact.id} draggableId={fact.id} index={index}>
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className="bg-white p-3 mb-2 rounded border border-gray-300 cursor-move"
                              >
                                {fact.content}
                              </div>
                            )}
                          </Draggable>
                        ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>

                <Droppable droppableId="secondStep">
                  {(provided) => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className="bg-green-100 p-4 rounded-lg min-h-[100px]"
                    >
                      <h3 className="font-bold mb-2">Second Step (Convert to bushels):</h3>
                      {facts
                        .filter((fact) => fact.category === "secondStep")
                        .map((fact, index) => (
                          <Draggable key={fact.id} draggableId={fact.id} index={index}>
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className="bg-white p-3 mb-2 rounded border border-gray-300 cursor-move"
                              >
                                {fact.content}
                              </div>
                            )}
                          </Draggable>
                        ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            </div>
          </DragDropContext>
        </div>

        {!hasChecked ? (
          <Button onClick={checkAnswer} className="bg-blue-600 hover:bg-blue-700 mb-8">
            Check My Answer
          </Button>
        ) : (
          <div className={`p-4 rounded-lg mb-8 ${isCorrect ? "bg-green-100" : "bg-red-100"}`}>
            <p className="text-lg font-medium">
              {isCorrect ? "Great job! You've correctly organized the facts." : "Not quite right. Try again!"}
            </p>
          </div>
        )}

        <PageNavigation prevHref="/lesson/context" nextHref="/lesson/visualization" nextDisabled={!isCorrect} />
      </div>
    </PageContainer>
  )
}
