"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function ContextStory() {
  const [showAnimation, setShowAnimation] = useState(false)

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">🏈 Making a Perfect Snack Mix!</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-6 items-center">
        <div>
          <Image
            src="/grocery-nut-aisle.png"
            alt="Don shopping for nuts"
            width={400}
            height={300}
            className="rounded-lg shadow-md"
          />
        </div>

        <Card className="p-6 bg-amber-50 border-amber-200">
          <p className="text-lg">
            Don wants to prepare <strong>10 pounds</strong> of a snack mix for a football playoff party. The mix will
            contain:
          </p>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>
              Toffee-coated peanuts (cost: <strong>$1.69/lb</strong>)
            </li>
            <li>
              Toffee-coated almonds (cost: <strong>$2.59/lb</strong>)
            </li>
          </ul>
          <p className="text-lg font-medium">How can we model the amounts and the total cost?</p>
        </Card>
      </div>

      <div className="mt-8 text-center">
        <Button size="lg" className="bg-amber-500 hover:bg-amber-600" onClick={() => setShowAnimation(true)}>
          Fill the Mix!
        </Button>

        {showAnimation && (
          <div className="mt-6 relative h-64 border-4 border-amber-700 rounded-full max-w-md mx-auto overflow-hidden">
            <div className="absolute bottom-0 w-full bg-amber-300 transition-all duration-3000 h-0 animate-fill-bowl"></div>
            <div className="absolute bottom-0 w-full flex justify-center">
              <div className="text-center p-4 font-bold text-amber-800">Filling up with peanuts and almonds...</div>
            </div>
          </div>
        )}
      </div>

      <div className="bg-blue-100 p-4 rounded-lg mt-6">
        <p className="font-medium">
          In this lesson, we'll learn how to use algebra to model this real-world situation!
        </p>
      </div>
    </div>
  )
}
