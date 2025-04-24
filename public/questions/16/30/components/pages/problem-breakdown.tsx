"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"

interface ProblemBreakdownProps {
  onComplete: () => void
}

export function ProblemBreakdown({ onComplete }: ProblemBreakdownProps) {
  const [facts, setFacts] = useState([
    { id: "fact-1", content: "2 pounds = $8.50", category: "unsorted" },
    { id: "fact-2", content: "4.5 pounds = unknown cost", category: "unsorted" },
  ])

  const [isCorrect, setIsCorrect] = useState(false)
  const [hasChecked, setHasChecked] = useState(false)

  const onDragEnd = (result: any) => {
    const { destination, source, draggableId } = result

    // If there's no destination or the item was dropped back where it started
    if (!destination || destination.droppableId === source.droppableId) {
      return
    }

    // Update the category of the dragged fact
    const updatedFacts = facts.map((fact) => {
      if (fact.id === draggableId) {
        return { ...fact, category: destination.droppableId }
      }
      return fact
    })

    setFacts(updatedFacts)
  }

  const checkAnswer = () => {
    const isFactOneKnown = facts.find((f) => f.id === "fact-1")?.category === "known"
    const isFactTwoFind = facts.find((f) => f.id === "fact-2")?.category === "find"

    setIsCorrect(isFactOneKnown && isFactTwoFind)
    setHasChecked(true)

    if (isFactOneKnown && isFactTwoFind) {
      onComplete()
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-orange-800">🧩 What Information Do We Have?</h2>

      <p className="text-lg">
        Let&apos;s organize what we know and what we need to find. Drag each fact to the correct category.
      </p>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="font-semibold">Facts:</h3>
            <Droppable droppableId="unsorted">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="min-h-[100px] rounded-lg border border-dashed border-orange-300 bg-orange-50 p-4"
                >
                  {facts
                    .filter((fact) => fact.category === "unsorted")
                    .map((fact, index) => (
                      <Draggable key={fact.id} draggableId={fact.id} index={index}>
                        {(provided) => (
                          <Card
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="mb-2 cursor-move"
                          >
                            <CardContent className="flex p-4">
                              <span className="mr-2 text-orange-800">🥩</span>
                              {fact.content}
                            </CardContent>
                          </Card>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                  {facts.filter((fact) => fact.category === "unsorted").length === 0 && (
                    <p className="text-center text-sm text-gray-500">Drag facts here</p>
                  )}
                </div>
              )}
            </Droppable>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="font-semibold">Known:</h3>
              <Droppable droppableId="known">
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="min-h-[80px] rounded-lg border border-dashed border-green-300 bg-green-50 p-4"
                  >
                    {facts
                      .filter((fact) => fact.category === "known")
                      .map((fact, index) => (
                        <Draggable key={fact.id} draggableId={fact.id} index={index}>
                          {(provided) => (
                            <Card
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="mb-2 cursor-move bg-green-100"
                            >
                              <CardContent className="flex p-4">
                                <span className="mr-2 text-green-800">✓</span>
                                {fact.content}
                              </CardContent>
                            </Card>
                          )}
                        </Draggable>
                      ))}
                    {provided.placeholder}
                    {facts.filter((fact) => fact.category === "known").length === 0 && (
                      <p className="text-center text-sm text-gray-500">Drop known facts here</p>
                    )}
                  </div>
                )}
              </Droppable>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Find:</h3>
              <Droppable droppableId="find">
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="min-h-[80px] rounded-lg border border-dashed border-blue-300 bg-blue-50 p-4"
                  >
                    {facts
                      .filter((fact) => fact.category === "find")
                      .map((fact, index) => (
                        <Draggable key={fact.id} draggableId={fact.id} index={index}>
                          {(provided) => (
                            <Card
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="mb-2 cursor-move bg-blue-100"
                            >
                              <CardContent className="flex p-4">
                                <span className="mr-2 text-blue-800">?</span>
                                {fact.content}
                              </CardContent>
                            </Card>
                          )}
                        </Draggable>
                      ))}
                    {provided.placeholder}
                    {facts.filter((fact) => fact.category === "find").length === 0 && (
                      <p className="text-center text-sm text-gray-500">Drop facts to find here</p>
                    )}
                  </div>
                )}
              </Droppable>
            </div>
          </div>
        </div>
      </DragDropContext>

      <div className="mt-6 flex justify-center">
        <Button onClick={checkAnswer} className="bg-orange-600 hover:bg-orange-700">
          Check My Answer
        </Button>
      </div>

      {hasChecked && (
        <div className={`mt-4 rounded-lg p-4 ${isCorrect ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
          {isCorrect ? (
            <p className="font-medium">Great job! You correctly identified what we know and what we need to find.</p>
          ) : (
            <p className="font-medium">
              Not quite right. Try again! Remember, we know the cost of 2 pounds, and we need to find the cost of 4.5
              pounds.
            </p>
          )}
        </div>
      )}
    </div>
  )
}
