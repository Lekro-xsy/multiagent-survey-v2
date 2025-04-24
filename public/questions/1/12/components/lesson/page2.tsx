"use client"

import { useState } from "react"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import { Card } from "@/components/ui/card"

export default function Page2() {
  const [formula, setFormula] = useState({ l: false, w: false })

  const onDragEnd = (result: any) => {
    if (!result.destination) return

    const { draggableId } = result
    if (draggableId === "l") {
      setFormula((prev) => ({ ...prev, l: true }))
    } else if (draggableId === "w") {
      setFormula((prev) => ({ ...prev, w: true }))
    }
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold text-blue-600 mb-6">🧩 Let's Understand the Problem!</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl mb-8">
        <div className="flex flex-col space-y-4">
          <Card className="p-4 bg-blue-50 border-blue-200">
            <h3 className="font-semibold text-blue-700 mb-1">Shape</h3>
            <p className="text-lg">➡️ Rectangle</p>
          </Card>

          <Card className="p-4 bg-green-50 border-green-200">
            <h3 className="font-semibold text-green-700 mb-1">Length (l)</h3>
            <p className="text-lg">➡️ 3 meters</p>
          </Card>

          <Card className="p-4 bg-yellow-50 border-yellow-200">
            <h3 className="font-semibold text-yellow-700 mb-1">Width (w)</h3>
            <p className="text-lg">➡️ 2 meters</p>
          </Card>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="relative w-64 h-40 border-4 border-blue-400 rounded-lg mb-4">
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 bg-white px-2">
              <span className="text-green-600 font-bold">w = 2m</span>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white px-2">
              <span className="text-green-600 font-bold">l = 3m</span>
            </div>
          </div>

          <p className="text-lg font-medium mb-2">Formula for perimeter:</p>
          <div className="text-2xl font-bold flex items-center space-x-2 mb-6">
            <span>2(</span>
            <div
              className={`w-8 h-8 border-2 ${formula.l ? "bg-green-100 border-green-400" : "border-gray-300"} rounded flex items-center justify-center`}
            >
              {formula.l ? "l" : ""}
            </div>
            <span>+</span>
            <div
              className={`w-8 h-8 border-2 ${formula.w ? "bg-yellow-100 border-yellow-400" : "border-gray-300"} rounded flex items-center justify-center`}
            >
              {formula.w ? "w" : ""}
            </div>
            <span>)</span>
          </div>
        </div>
      </div>

      <div className="w-full max-w-md">
        <p className="text-center mb-4">Drag the variables into the formula:</p>

        <DragDropContext onDragEnd={onDragEnd}>
          <div className="flex justify-center space-x-8 mb-4">
            {!formula.l && (
              <Droppable droppableId="l-source">
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    <Draggable draggableId="l" index={0}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="w-12 h-12 bg-green-100 border-2 border-green-400 rounded-lg flex items-center justify-center text-xl font-bold cursor-move"
                        >
                          l
                        </div>
                      )}
                    </Draggable>
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            )}

            {!formula.w && (
              <Droppable droppableId="w-source">
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    <Draggable draggableId="w" index={0}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="w-12 h-12 bg-yellow-100 border-2 border-yellow-400 rounded-lg flex items-center justify-center text-xl font-bold cursor-move"
                        >
                          w
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
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-center">
            <p className="text-green-700">
              Great job! Now you understand what variables we need for the perimeter formula.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
