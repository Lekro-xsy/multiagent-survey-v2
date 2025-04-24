"use client"

import { useState } from "react"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"

type Fact = {
  id: string
  content: string
  category: string | null
}

export default function FactOrganizer() {
  const [facts, setFacts] = useState<Fact[]>([
    { id: "fact-1", content: "Facing pages are consecutive integers", category: null },
    { id: "fact-2", content: "Their product is 306", category: null },
    { id: "fact-3", content: "The left page is one less than the right page", category: null },
  ])

  const [categories, setCategories] = useState([
    { id: "page-numbers", name: "Page Numbers Relationship" },
    { id: "product", name: "Product Information" },
  ])

  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)

  const onDragEnd = (result: any) => {
    const { source, destination } = result

    // Dropped outside a droppable area
    if (!destination) return

    // Create a copy of facts
    const newFacts = [...facts]
    const movedFact = newFacts.find((fact) => fact.id === result.draggableId)

    if (movedFact) {
      // Update the category
      movedFact.category = destination.droppableId === "facts" ? null : destination.droppableId
    }

    setFacts(newFacts)
  }

  const checkAnswer = () => {
    // Check if facts are correctly categorized
    const isCorrect = facts.every((fact) => {
      if (fact.id === "fact-1" || fact.id === "fact-3") {
        return fact.category === "page-numbers"
      } else if (fact.id === "fact-2") {
        return fact.category === "product"
      }
      return false
    })

    setIsCorrect(isCorrect)
  }

  const resetFacts = () => {
    setFacts(facts.map((fact) => ({ ...fact, category: null })))
    setIsCorrect(null)
  }

  return (
    <div className="space-y-6">
      <DragDropContext onDragEnd={onDragEnd}>
        {/* Facts to organize */}
        <div className="mb-6">
          <h3 className="mb-2 text-lg font-medium text-slate-800">Facts:</h3>
          <Droppable droppableId="facts">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="min-h-20 rounded-md border border-dashed border-slate-300 bg-slate-50 p-4"
              >
                {facts
                  .filter((fact) => fact.category === null)
                  .map((fact, index) => (
                    <Draggable key={fact.id} draggableId={fact.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="mb-2 rounded-md bg-white p-3 shadow-sm"
                        >
                          {fact.content}
                        </div>
                      )}
                    </Draggable>
                  ))}
                {provided.placeholder}
                {facts.filter((fact) => fact.category === null).length === 0 && (
                  <p className="text-center text-sm text-slate-500">Drag facts here</p>
                )}
              </div>
            )}
          </Droppable>
        </div>

        {/* Categories */}
        <div className="grid gap-4 md:grid-cols-2">
          {categories.map((category) => (
            <div key={category.id} className="space-y-2">
              <h3 className="text-lg font-medium text-slate-800">{category.name}:</h3>
              <Droppable droppableId={category.id}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="min-h-32 rounded-md border border-dashed border-slate-300 bg-slate-50 p-4"
                  >
                    {facts
                      .filter((fact) => fact.category === category.id)
                      .map((fact, index) => (
                        <Draggable key={fact.id} draggableId={fact.id} index={index}>
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="mb-2 rounded-md bg-white p-3 shadow-sm"
                            >
                              {fact.content}
                            </div>
                          )}
                        </Draggable>
                      ))}
                    {provided.placeholder}
                    {facts.filter((fact) => fact.category === category.id).length === 0 && (
                      <p className="text-center text-sm text-slate-500">Drop facts here</p>
                    )}
                  </div>
                )}
              </Droppable>
            </div>
          ))}
        </div>
      </DragDropContext>

      <div className="flex justify-center space-x-4">
        <Button onClick={checkAnswer} className="bg-blue-600 hover:bg-blue-700">
          Check Organization
        </Button>
        <Button onClick={resetFacts} variant="outline">
          Reset
        </Button>
      </div>

      {isCorrect !== null && (
        <div className={`mt-4 rounded-md p-4 ${isCorrect ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}>
          <div className="flex items-center">
            {isCorrect ? (
              <>
                <Check className="mr-2 h-5 w-5 text-green-600" />
                <p className="font-medium">Correct! You've organized the facts properly.</p>
              </>
            ) : (
              <>
                <X className="mr-2 h-5 w-5 text-red-600" />
                <p className="font-medium">Not quite right. Try again!</p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
