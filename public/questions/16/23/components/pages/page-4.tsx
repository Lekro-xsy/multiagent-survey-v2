"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"

export default function Page4() {
  const [expressionParts, setExpressionParts] = useState({
    available: [
      { id: "2.65", content: "2.65", type: "number" },
      { id: "15", content: "15", type: "number" },
      { id: "19", content: "19", type: "number" },
      { id: "times1", content: "×", type: "operator" },
      { id: "times2", content: "×", type: "operator" },
      { id: "plus", content: "+", type: "operator" },
      { id: "open1", content: "(", type: "bracket" },
      { id: "open2", content: "(", type: "bracket" },
      { id: "close1", content: ")", type: "bracket" },
      { id: "close2", content: ")", type: "bracket" },
    ],
    expression: Array(10).fill(null),
  })

  const handleDragEnd = (result) => {
    if (!result.destination) return

    const { source, destination } = result

    // Copy the state
    const newState = { ...expressionParts }

    if (source.droppableId === "available" && destination.droppableId === "expression") {
      // Move from available to expression
      const [movedItem] = newState.available.splice(source.index, 1)
      newState.expression[destination.index] = movedItem
    } else if (source.droppableId === "expression" && destination.droppableId === "available") {
      // Move from expression back to available
      const movedItem = newState.expression[source.index]
      newState.expression[source.index] = null
      newState.available.push(movedItem)
    } else if (source.droppableId === "expression" && destination.droppableId === "expression") {
      // Reorder within expression
      const movedItem = newState.expression[source.index]
      newState.expression[source.index] = null
      newState.expression[destination.index] = movedItem
    }

    setExpressionParts(newState)
  }

  const resetExpression = () => {
    setExpressionParts({
      available: [
        { id: "2.65", content: "2.65", type: "number" },
        { id: "15", content: "15", type: "number" },
        { id: "19", content: "19", type: "number" },
        { id: "times1", content: "×", type: "operator" },
        { id: "times2", content: "×", type: "operator" },
        { id: "plus", content: "+", type: "operator" },
        { id: "open1", content: "(", type: "bracket" },
        { id: "open2", content: "(", type: "bracket" },
        { id: "close1", content: ")", type: "bracket" },
        { id: "close2", content: ")", type: "bracket" },
      ],
      expression: Array(10).fill(null),
    })
  }

  const checkExpression = () => {
    // Get the non-null items from the expression
    const filledExpression = expressionParts.expression.filter((item) => item !== null)

    // Convert to a string for comparison
    const expressionString = filledExpression.map((item) => item.content).join("")

    // Check if it matches the target expression
    const targetExpression = "(2.65×15)+(2.65×19)"
    const normalizedExpression = expressionString.replace(/\s/g, "")

    return normalizedExpression === targetExpression.replace(/\s/g, "")
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-emerald-700">🧮 How Should We Write It Mathematically?</h2>

        <Card className="p-6">
          <h3 className="mb-4 text-lg font-semibold">Step-by-Step:</h3>

          <div className="mb-6 space-y-4">
            <div className="rounded-lg bg-emerald-50 p-4">
              <p className="mb-2 font-medium">Earnings from calculators =</p>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-emerald-600">2.65</span>
                <span className="text-lg">×</span>
                <span className="text-lg font-bold text-emerald-600">15</span>
              </div>
            </div>

            <div className="rounded-lg bg-emerald-50 p-4">
              <p className="mb-2 font-medium">Earnings from pocket radios =</p>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-emerald-600">2.65</span>
                <span className="text-lg">×</span>
                <span className="text-lg font-bold text-emerald-600">19</span>
              </div>
            </div>

            <div className="rounded-lg bg-emerald-50 p-4">
              <p className="mb-2 font-medium">Total commission =</p>
              <p>(subtotal 1) + (subtotal 2)</p>
            </div>
          </div>

          <h3 className="mb-4 text-lg font-semibold">Build the Expression:</h3>

          <div className="mb-6 rounded-lg border-2 border-dashed border-emerald-300 p-4">
            <p className="mb-2 text-center font-medium text-emerald-700">
              Drag the numbers and operations into the correct positions:
            </p>

            <Droppable droppableId="expression" direction="horizontal">
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="flex min-h-[60px] items-center justify-center gap-1 rounded-lg bg-white p-3 shadow-inner"
                >
                  {expressionParts.expression.map((item, index) => (
                    <Draggable
                      key={`expr-${index}`}
                      draggableId={item ? `expr-${item.id}-${index}` : `empty-${index}`}
                      index={index}
                      isDragDisabled={!item}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={`flex h-10 w-10 items-center justify-center rounded-md border ${
                            item
                              ? item.type === "number"
                                ? "border-emerald-500 bg-emerald-100 text-emerald-700"
                                : item.type === "operator"
                                  ? "border-blue-500 bg-blue-100 text-blue-700"
                                  : "border-gray-500 bg-gray-100 text-gray-700"
                              : "border-gray-300 bg-gray-50"
                          }`}
                        >
                          {item ? item.content : ""}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>

          <div className="mb-6">
            <h3 className="mb-2 text-lg font-semibold">Available Items:</h3>
            <Droppable droppableId="available" direction="horizontal">
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="flex flex-wrap gap-2 rounded-lg bg-gray-100 p-3"
                >
                  {expressionParts.available.map((item, index) => (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={`flex h-10 w-10 cursor-grab items-center justify-center rounded-md border ${
                            item.type === "number"
                              ? "border-emerald-500 bg-emerald-100 text-emerald-700"
                              : item.type === "operator"
                                ? "border-blue-500 bg-blue-100 text-blue-700"
                                : "border-gray-500 bg-gray-100 text-gray-700"
                          }`}
                        >
                          {item.content}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>

          <div className="mt-6 rounded-lg bg-emerald-50 p-4">
            <h3 className="mb-2 text-lg font-semibold text-emerald-700">Target Expression:</h3>
            <p className="text-center text-xl font-bold">(2.65×15)+(2.65×19)</p>
          </div>

          <div className="mt-4 flex justify-center gap-4">
            <Button
              variant="outline"
              onClick={resetExpression}
              className="border-emerald-500 text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700"
            >
              Reset
            </Button>

            <Button
              onClick={checkExpression}
              className="bg-emerald-600 hover:bg-emerald-700"
              disabled={expressionParts.expression.some((item) => item === null)}
            >
              Check Expression
            </Button>
          </div>
        </Card>
      </div>
    </DragDropContext>
  )
}
