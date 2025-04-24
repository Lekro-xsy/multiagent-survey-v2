"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function WeightVisualization() {
  const [almondsWeight, setAlmondsWeight] = useState(5)
  const peanutsWeight = 10 - almondsWeight

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">📏 Understanding the Weight Relationship</h1>
        <p className="text-lg">Move the slider to see how the weights relate</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 items-center">
        <div>
          <Card className="p-6 bg-gray-50">
            <div className="flex justify-between items-center mb-4">
              <div className="text-center">
                <Image
                  src="/pile-of-almonds.png"
                  alt="Almonds"
                  width={100}
                  height={100}
                  className="mx-auto rounded-full"
                />
                <p className="font-bold mt-2">Almonds</p>
                <p className="text-2xl font-bold text-amber-600">{almondsWeight} lbs</p>
              </div>

              <div className="text-4xl font-bold">+</div>

              <div className="text-center">
                <Image
                  src="/shelled-peanuts-pile.png"
                  alt="Peanuts"
                  width={100}
                  height={100}
                  className="mx-auto rounded-full"
                />
                <p className="font-bold mt-2">Peanuts</p>
                <p className="text-2xl font-bold text-amber-600">{peanutsWeight} lbs</p>
              </div>

              <div className="text-4xl font-bold">=</div>

              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-amber-200 flex items-center justify-center mx-auto">
                  <span className="text-3xl font-bold">10</span>
                </div>
                <p className="font-bold mt-2">Total</p>
                <p className="text-2xl font-bold text-amber-600">10 lbs</p>
              </div>
            </div>

            <div className="mt-8">
              <p className="mb-2 font-medium">Adjust almonds weight (a):</p>
              <Slider
                value={[almondsWeight]}
                min={0}
                max={10}
                step={0.5}
                onValueChange={(value) => setAlmondsWeight(value[0])}
              />
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="p-6 bg-blue-50 border-blue-200">
            <h3 className="text-xl font-bold mb-4">The Weight Relationship</h3>
            <div className="space-y-4">
              <p>
                If we call the weight of almonds <strong>a</strong>, then:
              </p>
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <p className="text-xl font-mono">Almonds weight = a</p>
                <p className="text-xl font-mono">Peanuts weight = 10 - a</p>
              </div>
              <p>This is because the total weight must be 10 pounds.</p>
            </div>
          </Card>

          <Card className="p-6 bg-yellow-100 border-yellow-200">
            <h3 className="text-lg font-bold mb-2">Guiding Idea</h3>
            <p>
              When we know the total amount and one part, we can find the other part by
              <strong> subtracting</strong> from the total.
            </p>
          </Card>
        </div>
      </div>
    </div>
  )
}
