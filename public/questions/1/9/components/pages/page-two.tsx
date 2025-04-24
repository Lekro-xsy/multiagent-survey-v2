"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Info } from "lucide-react"

interface PageTwoProps {
  onNext: () => void
}

export default function PageTwo({ onNext }: PageTwoProps) {
  const [activeCard, setActiveCard] = useState<number | null>(null)

  const cards = [
    {
      title: "A log splits into 2 pieces every time",
      description: "Each log becomes exactly 2 pieces when split",
      visual: (
        <div className="flex items-center justify-center gap-4">
          <div className="w-16 h-8 bg-amber-800 rounded"></div>
          <div className="text-xl">→</div>
          <div className="flex gap-2">
            <div className="w-8 h-8 bg-amber-800 rounded"></div>
            <div className="w-8 h-8 bg-amber-800 rounded"></div>
          </div>
        </div>
      ),
    },
    {
      title: "After each split, each piece is split again",
      description: "Every piece gets split in the next round",
      visual: (
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-8 bg-amber-800 rounded"></div>
            <div className="text-xl">→</div>
            <div className="flex gap-2">
              <div className="w-8 h-8 bg-amber-800 rounded"></div>
              <div className="w-8 h-8 bg-amber-800 rounded"></div>
            </div>
          </div>
          <div className="text-xl">↓</div>
          <div className="flex items-center justify-center gap-4">
            <div className="flex gap-2">
              <div className="w-8 h-8 bg-amber-800 rounded"></div>
              <div className="w-8 h-8 bg-amber-800 rounded"></div>
            </div>
            <div className="text-xl">→</div>
            <div className="flex gap-2">
              <div className="w-4 h-8 bg-amber-800 rounded"></div>
              <div className="w-4 h-8 bg-amber-800 rounded"></div>
              <div className="w-4 h-8 bg-amber-800 rounded"></div>
              <div className="w-4 h-8 bg-amber-800 rounded"></div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "The process repeats 5 times",
      description: "We'll go through 5 complete rounds of splitting",
      visual: (
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="text-sm font-medium mb-1">Round 1</div>
            <div className="w-8 h-4 bg-amber-800 rounded mb-2"></div>
            <div className="text-sm font-medium mb-1">Round 2</div>
            <div className="w-8 h-4 bg-amber-800 rounded mb-2"></div>
            <div className="text-sm font-medium mb-1">Round 3</div>
            <div className="w-8 h-4 bg-amber-800 rounded mb-2"></div>
            <div className="text-sm font-medium mb-1">Round 4</div>
            <div className="w-8 h-4 bg-amber-800 rounded mb-2"></div>
            <div className="text-sm font-medium mb-1">Round 5</div>
            <div className="w-8 h-4 bg-amber-800 rounded"></div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">🔎 Understand the Game Rules!</h1>

      <div className="grid gap-4 md:grid-cols-3 mb-8">
        {cards.map((card, index) => (
          <Card
            key={index}
            className={`p-4 cursor-pointer transition-all duration-300 hover:shadow-md ${
              activeCard === index ? "ring-2 ring-green-500 shadow-md" : ""
            }`}
            onClick={() => setActiveCard(index)}
          >
            <h3 className="font-bold text-green-700 mb-2">{card.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{card.description}</p>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeCard === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {card.visual}
            </div>
          </Card>
        ))}
      </div>

      <div className="bg-amber-50 p-4 rounded-lg mb-8 flex items-start">
        <Info className="text-amber-600 mr-2 mt-1 flex-shrink-0" />
        <p className="text-amber-800">
          Click on each card above to see a visual example of how the log splitting works!
        </p>
      </div>

      <div className="text-center">
        <Button size="lg" className="bg-green-700 hover:bg-green-800" onClick={onNext}>
          Continue
        </Button>
      </div>
    </div>
  )
}
