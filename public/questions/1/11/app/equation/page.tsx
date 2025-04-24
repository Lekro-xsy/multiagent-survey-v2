"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageLayout } from "@/components/page-layout"
import { Card } from "@/components/ui/card"

interface DragItem {
  id: string
  text: string
  position: number | null
}

export default function EquationPage() {
  const [dragItems, setDragItems] = useState<DragItem[]>([
    { id: "x", text: "x", position: null },
    { id: "7x", text: "7x", position: null },
    { id: "equals", text: "=", position: null },
    { id: "plus", text: "+", position: null },
    { id: "208", text: "208", position: null },
  ])

  const [dropZones, setDropZones] = useState<(string | null)[]>([null, null, null, null, null])

  const handleDragStart = (e: React.DragEvent, id: string) => {
    e.dataTransfer.setData("id", id)
  }

  const handleDrop = (e: React.DragEvent, index: number) => {
    e.preventDefault()
    const id = e.dataTransfer.getData("id")

    // Update dropzones
    const newDropZones = [...dropZones]

    // If there's already an item in this position, put it back in the available items
    if (newDropZones[index] !== null) {
      const itemToReturn = newDropZones[index]
      setDragItems((prev) => prev.map((item) => (item.id === itemToReturn ? { ...item, position: null } : item)))
    }

    newDropZones[index] = id
    setDropZones(newDropZones)

    // Update the item's position
    setDragItems((prev) => prev.map((item) => (item.id === id ? { ...item, position: index } : item)))
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const isCorrect = () => {
    const correctOrder = ["7x", "plus", "x", "equals", "208"]
    return dropZones.every((id, index) => id === correctOrder[index])
  }

  return (
    <PageLayout title="🧮 Building the Height Equation" pageNumber={4} totalPages={9}>
      <div className="space-y-8">
        <div className="bg-blue-50 p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-3">Setting Up the Equation</h2>
          <p>Let's use variables to represent the heights and set up an equation.</p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              Let <span className="font-mono font-bold">x</span> = flagpole height (in feet)
            </li>
            <li>
              Building height = <span className="font-mono font-bold">7x</span> (7 times the flagpole height)
            </li>
            <li>
              Total height = <span className="font-mono font-bold">208</span> feet
            </li>
          </ul>
        </div>

        <div className="bg-yellow-50 p-6 rounded-xl">
          <h3 className="text-lg font-bold mb-4">Drag the terms to build the equation:</h3>
          <p className="mb-4">Building height + Flagpole height = Total height</p>

          <div className="flex justify-center items-center gap-4 h-16 mb-8">
            {dropZones.map((item, index) => (
              <div
                key={index}
                className="w-16 h-16 border-2 border-dashed border-gray-400 rounded flex items-center justify-center bg-white"
                onDrop={(e) => handleDrop(e, index)}
                onDragOver={handleDragOver}
              >
                {item && dragItems.find((di) => di.id === item)?.text}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {dragItems
              .filter((item) => item.position === null)
              .map((item) => (
                <div
                  key={item.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, item.id)}
                  className="w-16 h-16 bg-blue-600 text-white rounded flex items-center justify-center font-bold cursor-move"
                >
                  {item.text}
                </div>
              ))}
          </div>
        </div>

        {isCorrect() && (
          <Card className="p-4 bg-green-100">
            <h3 className="font-bold text-green-800 mb-2">Correct!</h3>
            <p>You've set up the equation correctly: 7x + x = 208</p>
            <p className="mt-2">This can be simplified to: 8x = 208</p>
          </Card>
        )}

        <div className="flex justify-between mt-6">
          <Link href="/visualize">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" /> Previous
            </Button>
          </Link>

          <Link href="/solve">
            <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700" disabled={!isCorrect()}>
              Next <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  )
}
