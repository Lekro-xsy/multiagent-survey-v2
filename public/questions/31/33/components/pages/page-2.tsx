"use client"

import { useState } from "react"
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import { CheckCircle, Info, PuzzleIcon as PuzzlePiece } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Define the fact items
const facts = [
  { id: "fact-1", content: "$0.43 for the first ounce", type: "fixed" },
  { id: "fact-2", content: "$0.29 for each additional ounce", type: "variable" },
  { id: "fact-3", content: "Whole numbers x ≥ 1", type: "domain" },
]

export default function Page2() {
  const [items, setItems] = useState(facts)
  const [bins, setBins] = useState({
    facts: facts.map((f) => f.id),
    fixed: [],
    variable: [],
    domain: [],
  })
  const [checked, setChecked] = useState(false)
  const [correct, setCorrect] = useState(false)

  const handleDragEnd = (result: any) => {
    const { source, destination } = result

    // Dropped outside a droppable area
    if (!destination) return

    // Same position
    if (source.droppableId === destination.droppableId && source.index === destination.index) return

    // Get the item being dragged
    const itemId = result.draggableId
    const item = items.find((i) => i.id === itemId)

    if (!item) return

    // Create new bins state
    const newBins = { ...bins }

    // Remove from source
    newBins[source.droppableId as keyof typeof bins] = newBins[source.droppableId as keyof typeof bins].filter(
      (id) => id !== itemId,
    )

    // Add to destination
    newBins[destination.droppableId as keyof typeof bins].splice(destination.index, 0, itemId)

    setBins(newBins)
  }

  const handleCheck = () => {
    setChecked(true)

    // Check if facts are in correct bins
    const isCorrect = items.every((item) => {
      const binType = Object.keys(bins).find((bin) => bins[bin as keyof typeof bins].includes(item.id))
      return binType === item.type
    })

    setCorrect(isCorrect)
  }

  const handleReset = () => {
    setBins({
      facts: facts.map((f) => f.id),
      fixed: [],
      variable: [],
      domain: [],
    })
    setChecked(false)
    setCorrect(false)
  }

  return (
    <div className="space-y-6">
      <Card className="border-2 border-teal-100 shadow-md">
        <CardHeader className="bg-gradient-to-r from-teal-50 to-emerald-50">
          <CardTitle className="flex items-center text-2xl text-teal-800">
            <PuzzlePiece className="mr-2 h-6 w-6 text-teal-600" />
            What Information Do We Know?
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <p className="mb-6 text-lg">
            Drag each piece of information to the correct category to help us understand the shipping cost structure.
          </p>

          <DragDropContext onDragEnd={handleDragEnd}>
            <div className="mb-8 rounded-lg border-2 border-dashed border-teal-200 bg-teal-50 p-4">
              <h3 className="mb-4 text-center text-lg font-medium text-teal-800">Facts</h3>
              <Droppable droppableId="facts" direction="horizontal">
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="flex flex-wrap justify-center gap-2"
                  >
                    {bins.facts.map((id, index) => {
                      const fact = items.find((item) => item.id === id)
                      if (!fact) return null

                      return (
                        <Draggable key={id} draggableId={id} index={index}>
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="rounded-lg bg-white p-3 shadow-sm"
                            >
                              {fact.content}
                            </div>
                          )}
                        </Draggable>
                      )
                    })}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-lg border-2 border-teal-200 p-4">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-lg font-medium text-teal-800">Fixed Cost</h3>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-5 w-5 text-teal-600" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>The cost that doesn't change with weight</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Droppable droppableId="fixed">
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className="min-h-24 rounded-lg border-2 border-dashed border-gray-200 p-2"
                    >
                      {bins.fixed.map((id, index) => {
                        const fact = items.find((item) => item.id === id)
                        if (!fact) return null

                        return (
                          <Draggable key={id} draggableId={id} index={index}>
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className={`mb-2 rounded-lg p-3 shadow-sm ${
                                  checked ? (fact.type === "fixed" ? "bg-green-100" : "bg-red-100") : "bg-white"
                                }`}
                              >
                                {fact.content}
                              </div>
                            )}
                          </Draggable>
                        )
                      })}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>

              <div className="rounded-lg border-2 border-teal-200 p-4">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-lg font-medium text-teal-800">Variable Cost</h3>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-5 w-5 text-teal-600" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>The cost that changes with weight</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Droppable droppableId="variable">
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className="min-h-24 rounded-lg border-2 border-dashed border-gray-200 p-2"
                    >
                      {bins.variable.map((id, index) => {
                        const fact = items.find((item) => item.id === id)
                        if (!fact) return null

                        return (
                          <Draggable key={id} draggableId={id} index={index}>
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className={`mb-2 rounded-lg p-3 shadow-sm ${
                                  checked ? (fact.type === "variable" ? "bg-green-100" : "bg-red-100") : "bg-white"
                                }`}
                              >
                                {fact.content}
                              </div>
                            )}
                          </Draggable>
                        )
                      })}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>

              <div className="rounded-lg border-2 border-teal-200 p-4">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-lg font-medium text-teal-800">Domain</h3>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-5 w-5 text-teal-600" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>The valid values for x (weight)</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Droppable droppableId="domain">
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className="min-h-24 rounded-lg border-2 border-dashed border-gray-200 p-2"
                    >
                      {bins.domain.map((id, index) => {
                        const fact = items.find((item) => item.id === id)
                        if (!fact) return null

                        return (
                          <Draggable key={id} draggableId={id} index={index}>
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className={`mb-2 rounded-lg p-3 shadow-sm ${
                                  checked ? (fact.type === "domain" ? "bg-green-100" : "bg-red-100") : "bg-white"
                                }`}
                              >
                                {fact.content}
                              </div>
                            )}
                          </Draggable>
                        )
                      })}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            </div>

            {checked && (
              <div className={`mt-6 rounded-lg p-4 ${correct ? "bg-green-100" : "bg-amber-100"}`}>
                <div className="flex items-center">
                  {correct ? (
                    <>
                      <CheckCircle className="mr-2 h-5 w-5 text-green-600" />
                      <p className="font-medium text-green-800">
                        Great job! You've correctly identified the components of our shipping cost model.
                      </p>
                    </>
                  ) : (
                    <>
                      <Info className="mr-2 h-5 w-5 text-amber-600" />
                      <p className="font-medium text-amber-800">
                        Not quite right. Try again by looking at which costs are fixed and which vary with the package
                        weight.
                      </p>
                    </>
                  )}
                </div>
              </div>
            )}

            <div className="mt-6 flex justify-center gap-4">
              {!checked ? (
                <Button
                  onClick={handleCheck}
                  className="bg-teal-600 hover:bg-teal-700"
                  disabled={bins.facts.length > 0}
                >
                  Check My Answer
                </Button>
              ) : (
                <Button onClick={handleReset} variant="outline">
                  Try Again
                </Button>
              )}
            </div>
          </DragDropContext>
        </CardContent>
      </Card>
    </div>
  )
}
