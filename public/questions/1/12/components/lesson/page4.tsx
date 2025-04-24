"use client"

import { useState } from "react"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import { Button } from "@/components/ui/button"

export default function Page4() {
  const [formula, setFormula] = useState({
    l: false,
    w: false,
  })

  const [showHints, setShowHints] = useState(false)

  const onDragEnd = (result: any) => {
    if (!result.destination) return

    const { draggableId } = result
    if (draggableId === "l-value") {
      setFormula((prev) => ({ ...prev, l: true }))
    } else if (draggableId === "w-value") {
      setFormula((prev) => ({ ...prev, w: true }))
    }
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold text-blue-600 mb-6">🔍 Let's Set Up the Math!</h1>

      <div className="mb-8 text-center max-w-xl">
        <p className="text-lg mb-4">Now we'll use the formula 2(l + w) with our rectangle's measurements.</p>
        <p className="text-lg">Drag the values into the formula to replace the variables.</p>
      </div>

      <div className="relative w-full max-w-md h-64 mb-8 border-4 border-blue-400 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <div className="text-xl mb-4">Rectangle</div>
          <div className="flex justify-center items-center space-x-8">
            <div className="text-center">
              <div className="text-green-600 font-bold text-xl">l = 3 meters</div>
            </div>
            <div className="text-center">
              <div className="text-yellow-600 font-bold text-xl">w = 2 meters</div>
            </div>
          </div>
        </div>

        {/* Side labels */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white px-2 font-bold text-green-600">
          l = 3m
        </div>
        <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 bg-white px-2 font-bold text-yellow-600">
          w = 2m
        </div>
      </div>

      <div className="w-full max-w-lg">
        <div className="text-xl font-bold mb-4 text-center">
          Perimeter = 2(
          <span
            className={`inline-block w-8 h-8 ${formula.l ? "bg-green-100 border-green-400" : "bg-gray-100 border-gray-300"} border-2 rounded text-center`}
          >
            {formula.l ? "3" : ""}
          </span>
          +
          <span
            className={`inline-block w-8 h-8 ${formula.w ? "bg-yellow-100 border-yellow-400" : "bg-gray-100 border-gray-300"} border-2 rounded text-center`}
          >
            {formula.w ? "2" : ""}
          </span>
          )
        </div>

        <DragDropContext onDragEnd={onDragEnd}>
          <div className="flex justify-center space-x-8 mb-6">
            {!formula.l && (
              <Droppable droppableId="l-value-source">
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    <Draggable draggableId="l-value" index={0}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="w-12 h-12 bg-green-100 border-2 border-green-400 rounded-lg flex items-center justify-center text-xl font-bold cursor-move"
                        >
                          3
                        </div>
                      )}
                    </Draggable>
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            )}

            {!formula.w && (
              <Droppable droppableId="w-value-source">
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    <Draggable draggableId="w-value" index={0}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="w-12 h-12 bg-yellow-100 border-2 border-yellow-400 rounded-lg flex items-center justify-center text-xl font-bold cursor-move"
                        >
                          2
                        </div>
                      )}
                    </Draggable>
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            )}
          </div>

          <Droppable droppableId="formula-target">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps} className="h-12">
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>

        {formula.l && formula.w && (
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-lg font-medium mb-2">Great! Now we have:</p>
            <p className="text-xl font-bold text-blue-700 mb-4">Perimeter = 2(3 + 2)</p>

            <Button onClick={() => setShowHints(!showHints)} variant="outline" className="w-full">
              {showHints ? "Hide Hints" : "Show Hints"}
            </Button>

            {showHints && (
              <div className="mt-4 space-y-2">
                <p className="font-medium">Hint Questions:</p>
                <p>1. What is (3 + 2)?</p>
                <p>2. What do you get when you multiply that result by 2?</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
