"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { PageContainer } from "@/components/page-container"
import { PageNavigation } from "@/components/page-navigation"

export default function ContextPage() {
  const [animationPlayed, setAnimationPlayed] = useState(false)

  const playAnimation = () => {
    setAnimationPlayed(true)
  }

  return (
    <PageContainer title="🍎🧺 How Many Bushels of Apples?" pageNumber={1} totalPages={9}>
      <div className="flex flex-col items-center">
        <div className="relative w-full max-w-2xl mb-8">
          <img
            src="/apple-abundance.png"
            alt="Farmer's Market Apple Stands"
            className="w-full h-auto rounded-lg shadow-md"
          />

          {animationPlayed && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/80 p-4 rounded-lg shadow-md">
                <p className="text-lg font-medium text-green-700">People are buying apples! 🍎</p>
              </div>
            </div>
          )}
        </div>

        <div className="bg-amber-50 p-6 rounded-lg shadow-md max-w-2xl mb-8">
          <h2 className="text-2xl font-bold text-red-700 mb-4">The Story:</h2>
          <p className="text-lg mb-4">
            At a farmer's market, one farm sells <span className="font-bold text-red-600">17 pecks</span> of apples.
          </p>
          <p className="text-lg mb-4">
            Another farm sells <span className="font-bold text-red-600">twice as many</span> apples.
          </p>
          <p className="text-lg mb-4">How many bushels did the two farms sell altogether?</p>
          <p className="text-lg font-medium bg-yellow-100 p-2 rounded">(Remember: 1 bushel = 4 pecks.)</p>
        </div>

        {!animationPlayed ? (
          <Button onClick={playAnimation} className="bg-green-600 hover:bg-green-700 mb-8" size="lg">
            Visit the Market!
          </Button>
        ) : (
          <div className="mb-8">
            <p className="text-lg text-center text-gray-700 mb-4">
              Now that you've seen the market, let's break down the problem!
            </p>
          </div>
        )}

        <PageNavigation prevHref="/" nextHref="/lesson/breakdown" nextDisabled={!animationPlayed} />
      </div>
    </PageContainer>
  )
}
