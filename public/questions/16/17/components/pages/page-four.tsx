"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd"

interface PageFourProps {
  onNext: () => void
}

interface MathItem {
  id: string
  content: string
}

export function PageFour({ onNext }: PageFourProps) {
  const [items, setItems] = useState<MathItem[]>([
    { id: "41.4", content: "41.4" },
    { id: "3", content: "3" },
    { id: "7", content: "7" },
  ])

  const [rateNumerator, setRateNumerator] = useState<MathItem[]>([])
  const [rateDenominator, setRateDenominator] = useState<MathItem[]>([])
  const [timeValue, setTimeValue] = useState<MathItem[]>([])

  const [isRateCorrect, setIsRateCorrect] = useState(false)
  const [isTimeCorrect, setIsTimeCorrect] = useState(false)

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
    if (source.droppableId === "items") {
      setItems((prev) => prev.filter((item) => item.id !== draggedItem.id))
    } else if (source.droppableId === "rateNumerator") {
      setRateNumerator((prev) => prev.filter((item) => item.id !== draggedItem.id))
    } else if (source.droppableId === "rateDenominator") {
      setRateDenominator((prev) => prev.filter((item) => item.id !== draggedItem.id))
    } else if (source.droppableId === "timeValue") {
      setTimeValue((prev) => prev.filter((item) => item.id !== draggedItem.id))
    }

    // Add to destination
    if (destination.droppableId === "items") {
      setItems((prev) => [...prev, draggedItem])
    } else if (destination.droppableId === "rateNumerator") {
      setRateNumerator([draggedItem]) // Only allow one item
    } else if (destination.droppableId === "rateDenominator") {
      setRateDenominator([draggedItem]) // Only allow one item
    } else if (destination.droppableId === "timeValue") {
      setTimeValue([draggedItem]) // Only allow one item
    }

    // Check if correct
    setTimeout(() => {
      const isRateNumeratorCorrect = rateNumerator.some((item) => item.id === "41.4")
      const isRateDenominatorCorrect = rateDenominator.some((item) => item.id === "3")
      setIsRateCorrect(isRateNumeratorCorrect && isRateDenominatorCorrect)

      const isTimeValueCorrect = timeValue.some((item) => item.id === "7")
      setIsTimeCorrect(isTimeValueCorrect)
    }, 100)
  }

  const findItemById = (id: string): MathItem | undefined => {
    return [...items, ...rateNumerator, ...rateDenominator, ...timeValue].find((item) => item.id === id)
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-indigo-600">🧮 How Do We Set It Up?</h1>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Step 1: Find the Rate</h2>
            <p className="mb-4">First, we need to find how many miles per hour the cyclist travels.</p>

            <div className="flex items-center justify-center mb-6">
              <div className="text-center">
                <div className="text-lg font-medium mb-2">Rate =</div>
                <Droppable droppableId="rateNumerator">
                  {(provided) => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className="w-24 h-12 bg-gray-50 border-2 border-dashed border-gray-300 flex items-center justify-center mb-1"
                    >
                      {rateNumerator.map((item, index) => (
                        <Draggable key={item.id} draggableId={item.id} index={index}>
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="p-1 bg-white border border-gray-200 rounded"
                            >
                              {item.content} miles
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
                <div className="w-24 h-1 bg-black"></div>
                <Droppable droppableId="rateDenominator">
                  {(provided) => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className="w-24 h-12 bg-gray-50 border-2 border-dashed border-gray-300 flex items-center justify-center mt-1"
                    >
                      {rateDenominator.map((item, index) => (
                        <Draggable key={item.id} draggableId={item.id} index={index}>
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="p-1 bg-white border border-gray-200 rounded"
                            >
                              {item.content} hours
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>

              <div className="ml-6 text-lg">= {isRateCorrect ? "13.8 miles/hour" : "?"}</div>
            </div>

            {isRateCorrect && (
              <div className="bg-green-50 p-3 rounded-lg border border-green-200 text-green-700">
                Correct! The rate is 41.4 miles ÷ 3 hours = 13.8 miles per hour.
              </div>
            )}
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Step 2: Multiply Rate by New Time</h2>
            <p className="mb-4">Now, multiply the rate by the new time to find the total distance.</p>

            <div className="flex items-center justify-center mb-6">
              <div className="text-lg">Distance = 13.8 miles/hour ×</div>
              <Droppable droppableId="timeValue">
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="w-20 h-12 bg-gray-50 border-2 border-dashed border-gray-300 flex items-center justify-center mx-2"
                  >
                    {timeValue.map((item, index) => (
                      <Draggable key={item.id} draggableId={item.id} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="p-1 bg-white border border-gray-200 rounded"
                          >
                            {item.content} hours
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              <div className="text-lg">= {isTimeCorrect && isRateCorrect ? "96.6 miles" : "?"}</div>
            </div>

            {isTimeCorrect && isRateCorrect && (
              <div className="bg-green-50 p-3 rounded-lg border border-green-200 text-green-700">
                Correct! The distance is 13.8 miles/hour × 7 hours = 96.6 miles.
              </div>
            )}
          </Card>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-medium mb-3">Available Values</h3>

          <Droppable droppableId="items">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="flex flex-wrap gap-2 p-4 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300"
              >
                {items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="p-2 bg-white border border-gray-200 rounded shadow-sm cursor-move"
                      >
                        {item.content}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
                {items.length === 0 && <p className="text-gray-400 text-center w-full">All values have been used</p>}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>

      <div className="flex justify-end">
        <Button
          onClick={onNext}
          className="bg-indigo-600 hover:bg-indigo-700"
          disabled={!isRateCorrect || !isTimeCorrect}
        >
          Continue to Solving
        </Button>
      </div>
    </div>
  )
}
