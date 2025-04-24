"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calculator, Check } from "lucide-react"

type DragItem = {
  id: string
  value: string
  placed: boolean
  correctPosition: string
}

export function GuidedSetup() {
  const [dragItems, setDragItems] = useState<DragItem[]>([
    { id: "item1", value: "32", placed: false, correctPosition: "first-class-passengers" },
    { id: "item2", value: "860", placed: false, correctPosition: "first-class-price" },
    { id: "item3", value: "298", placed: false, correctPosition: "coach-passengers" },
    { id: "item4", value: "360", placed: false, correctPosition: "coach-price" },
    { id: "item5", value: "+", placed: false, correctPosition: "plus" },
  ])

  const [dropZones, setDropZones] = useState({
    "first-class-passengers": { value: "", correct: false },
    "first-class-price": { value: "", correct: false },
    "coach-passengers": { value: "", correct: false },
    "coach-price": { value: "", correct: false },
    plus: { value: "", correct: false },
  })

  const [allCorrect, setAllCorrect] = useState(false)
  const [showHint, setShowHint] = useState(false)

  const handleDragStart = (e: React.DragEvent, id: string) => {
    e.dataTransfer.setData("text/plain", id)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent, position: string) => {
    e.preventDefault()
    const id = e.dataTransfer.getData("text/plain")
    const item = dragItems.find((item) => item.id === id)

    if (!item) return

    // Update the drop zone
    const newDropZones = {
      ...dropZones,
      [position]: {
        value: item.value,
        correct: item.correctPosition === position,
      },
    }

    setDropZones(newDropZones)

    // Update the drag item
    setDragItems(dragItems.map((item) => (item.id === id ? { ...item, placed: true } : item)))

    // Check if all positions are correct
    const allPositionsCorrect = Object.values(newDropZones).every((zone) => zone.correct)
    setAllCorrect(allPositionsCorrect)
  }

  const resetExercise = () => {
    setDragItems(dragItems.map((item) => ({ ...item, placed: false })))
    setDropZones({
      "first-class-passengers": { value: "", correct: false },
      "first-class-price": { value: "", correct: false },
      "coach-passengers": { value: "", correct: false },
      "coach-price": { value: "", correct: false },
      plus: { value: "", correct: false },
    })
    setAllCorrect(false)
    setShowHint(false)
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold flex items-center">
          <Calculator className="mr-2 h-6 w-6" /> Building the Revenue Equation
        </h2>
        <p className="text-gray-600">Drag the numbers and operators to build the complete revenue model.</p>
      </div>

      <Card className="p-6 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="font-semibold text-yellow-800">Revenue from first class:</h3>
            <div className="flex items-center justify-center text-2xl space-x-4">
              <div
                className={`w-16 h-16 flex items-center justify-center border-2 ${dropZones["first-class-passengers"].value ? (dropZones["first-class-passengers"].correct ? "border-green-300 bg-green-50" : "border-red-300 bg-red-50") : "border-dashed border-gray-300"} rounded-lg`}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, "first-class-passengers")}
              >
                {dropZones["first-class-passengers"].value}
              </div>
              <span>×</span>
              <div
                className={`w-16 h-16 flex items-center justify-center border-2 ${dropZones["first-class-price"].value ? (dropZones["first-class-price"].correct ? "border-green-300 bg-green-50" : "border-red-300 bg-red-50") : "border-dashed border-gray-300"} rounded-lg`}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, "first-class-price")}
              >
                {dropZones["first-class-price"].value}
              </div>
            </div>
            {dropZones["first-class-passengers"].value && dropZones["first-class-price"].value && (
              <div className="text-center text-lg">
                {dropZones["first-class-passengers"].value} × {dropZones["first-class-price"].value} ={" "}
                {Number(dropZones["first-class-passengers"].value) * Number(dropZones["first-class-price"].value)}
              </div>
            )}
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-blue-800">Revenue from coach:</h3>
            <div className="flex items-center justify-center text-2xl space-x-4">
              <div
                className={`w-16 h-16 flex items-center justify-center border-2 ${dropZones["coach-passengers"].value ? (dropZones["coach-passengers"].correct ? "border-green-300 bg-green-50" : "border-red-300 bg-red-50") : "border-dashed border-gray-300"} rounded-lg`}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, "coach-passengers")}
              >
                {dropZones["coach-passengers"].value}
              </div>
              <span>×</span>
              <div
                className={`w-16 h-16 flex items-center justify-center border-2 ${dropZones["coach-price"].value ? (dropZones["coach-price"].correct ? "border-green-300 bg-green-50" : "border-red-300 bg-red-50") : "border-dashed border-gray-300"} rounded-lg`}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, "coach-price")}
              >
                {dropZones["coach-price"].value}
              </div>
            </div>
            {dropZones["coach-passengers"].value && dropZones["coach-price"].value && (
              <div className="text-center text-lg">
                {dropZones["coach-passengers"].value} × {dropZones["coach-price"].value} ={" "}
                {Number(dropZones["coach-passengers"].value) * Number(dropZones["coach-price"].value)}
              </div>
            )}
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-sky-800">Total revenue:</h3>
            <div className="flex items-center justify-center text-2xl space-x-4">
              <span>(</span>
              <div className="text-center">32 × 860</div>
              <span>)</span>
              <div
                className={`w-16 h-16 flex items-center justify-center border-2 ${dropZones["plus"].value ? (dropZones["plus"].correct ? "border-green-300 bg-green-50" : "border-red-300 bg-red-50") : "border-dashed border-gray-300"} rounded-lg`}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, "plus")}
              >
                {dropZones["plus"].value}
              </div>
              <span>(</span>
              <div className="text-center">298 × 360</div>
              <span>)</span>
            </div>
            {dropZones["first-class-passengers"].value &&
              dropZones["first-class-price"].value &&
              dropZones["coach-passengers"].value &&
              dropZones["coach-price"].value &&
              dropZones["plus"].value && (
                <div className="text-center text-lg">
                  ({dropZones["first-class-passengers"].value} × {dropZones["first-class-price"].value}){" "}
                  {dropZones["plus"].value} ({dropZones["coach-passengers"].value} × {dropZones["coach-price"].value}) ={" "}
                  {Number(dropZones["first-class-passengers"].value) * Number(dropZones["first-class-price"].value) +
                    Number(dropZones["coach-passengers"].value) * Number(dropZones["coach-price"].value)}
                </div>
              )}
          </div>
        </div>
      </Card>

      <div className="bg-white p-4 rounded-lg border border-gray-200">
        <h3 className="font-semibold mb-2">Available Numbers and Operators</h3>
        <div className="flex flex-wrap gap-2">
          {dragItems.map(
            (item) =>
              !item.placed && (
                <div
                  key={item.id}
                  className="w-12 h-12 flex items-center justify-center bg-white border-2 border-gray-300 rounded-lg cursor-move"
                  draggable
                  onDragStart={(e) => handleDragStart(e, item.id)}
                >
                  {item.value}
                </div>
              ),
          )}
        </div>
      </div>

      {allCorrect && (
        <div className="bg-green-50 p-4 rounded-lg border border-green-200 flex items-center">
          <Check className="h-5 w-5 text-green-600 mr-2" />
          <p className="text-green-800">Perfect! You've correctly built the revenue equation.</p>
        </div>
      )}

      <div className="flex justify-between">
        <Button variant="outline" onClick={() => setShowHint(!showHint)}>
          {showHint ? "Hide Hint" : "Show Hint"}
        </Button>
        <Button variant="outline" onClick={resetExercise}>
          Reset
        </Button>
      </div>

      {showHint && (
        <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
          <h3 className="font-semibold text-amber-800">Hint</h3>
          <p className="text-amber-700">
            Remember that we need to add the revenue from both sections to get the total revenue.
          </p>
        </div>
      )}
    </div>
  )
}
