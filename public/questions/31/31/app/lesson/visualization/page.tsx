"use client"

import { useState } from "react"
import { PageContainer } from "@/components/page-container"
import { PageNavigation } from "@/components/page-navigation"
import { Button } from "@/components/ui/button"

export default function VisualizationPage() {
  const [droppedPecks, setDroppedPecks] = useState(0)
  const [isDragActive, setIsDragActive] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const handleDragStart = () => {
    setIsDragActive(true)
  }

  const handleDragEnd = () => {
    setIsDragActive(false)
  }

  const handleDrop = () => {
    if (droppedPecks < 4) {
      setDroppedPecks(droppedPecks + 1)

      if (droppedPecks === 3) {
        setIsComplete(true)
      }
    }
  }

  const resetDemo = () => {
    setDroppedPecks(0)
    setIsComplete(false)
  }

  return (
    <PageContainer title="📊 Visualizing the Apples" pageNumber={3} totalPages={9}>
      <div className="flex flex-col items-center">
        <div className="bg-amber-50 p-6 rounded-lg shadow-md max-w-2xl mb-8">
          <h2 className="text-2xl font-bold text-red-700 mb-4">Key Concept:</h2>
          <p className="text-lg mb-4">
            <span className="font-bold">4 pecks = 1 bushel</span> (grouping by 4)
          </p>
          <p className="text-lg">Understanding this conversion is key to solving our problem!</p>
        </div>

        <div className="w-full max-w-3xl mb-8">
          <h2 className="text-xl font-bold text-center mb-6">Drag 4 peck baskets into the bushel container:</h2>

          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            <div className="flex flex-wrap gap-4 justify-center">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-24 h-24 rounded-lg flex items-center justify-center cursor-grab 
                    ${i < 4 - droppedPecks ? "bg-red-100 border-2 border-red-400" : "opacity-30 bg-gray-100 cursor-not-allowed"}`}
                  draggable={i < 4 - droppedPecks}
                  onDragStart={i < 4 - droppedPecks ? handleDragStart : undefined}
                  onDragEnd={handleDragEnd}
                >
                  <div className="text-center">
                    <img src="/apple-basket-still-life.png" alt="Peck of apples" className="mx-auto mb-1" />
                    <span className="text-sm font-medium">1 Peck</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-4xl font-bold">→</div>

            <div
              className={`w-40 h-40 rounded-lg border-2 border-dashed flex items-center justify-center
                ${isDragActive ? "border-green-500 bg-green-50" : "border-gray-400 bg-gray-50"}`}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault()
                handleDrop()
              }}
            >
              <div className="text-center">
                {droppedPecks > 0 ? (
                  <>
                    <img src="/overflowing-apple-barrel.png" alt="Bushel of apples" className="mx-auto mb-1" />
                    <span className="text-sm font-medium">{droppedPecks}/4 Pecks</span>
                    {isComplete && <div className="mt-2 text-green-600 font-bold">= 1 Bushel!</div>}
                  </>
                ) : (
                  <span className="text-gray-500">Drop Pecks Here</span>
                )}
              </div>
            </div>
          </div>

          {isComplete && (
            <div className="mt-8 text-center">
              <div className="bg-green-100 p-4 rounded-lg inline-block">
                <p className="text-lg font-medium text-green-700 mb-2">
                  Great job! You've filled 1 bushel with 4 pecks.
                </p>
                <Button onClick={resetDemo} variant="outline" className="border-green-500 text-green-600">
                  Try Again
                </Button>
              </div>
            </div>
          )}
        </div>

        <PageNavigation prevHref="/lesson/breakdown" nextHref="/lesson/setup" nextDisabled={!isComplete} />
      </div>
    </PageContainer>
  )
}
