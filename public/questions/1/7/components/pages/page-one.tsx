"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { PyramidAnimation } from "@/components/pyramid-animation"

export default function PageOne() {
  const [showAnimation, setShowAnimation] = useState(false)

  return (
    <div className="space-y-6">
      <h2 className="text-center text-2xl font-bold text-blue-800">🛒📦 How Many Cartons?</h2>

      <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
        <div className="w-full md:w-1/2">
          <Card className="overflow-hidden p-2">
            {showAnimation ? (
              <PyramidAnimation rows={25} />
            ) : (
              <div className="relative h-[300px] w-full">
                <Image
                  src="/cola-carton-pyramid.png"
                  alt="Cola carton pyramid display"
                  fill
                  className="object-contain"
                />
              </div>
            )}
          </Card>
        </div>

        <div className="w-full space-y-4 md:w-1/2">
          <div className="rounded-lg bg-blue-50 p-4 text-lg">
            <p className="mb-2">At a grocery store, a clerk creates a display pyramid using 12-pack cartons of cola.</p>
            <ul className="ml-5 list-disc space-y-2">
              <li>
                There are <strong>25 cartons</strong> at the bottom row.
              </li>
              <li>
                Each layer above has <strong>one fewer carton</strong> than the one below.
              </li>
              <li>
                There is <strong>1 carton</strong> at the top.
              </li>
            </ul>
            <p className="mt-4 font-bold text-blue-800">How many cartons are needed in total?</p>
          </div>

          <Button
            onClick={() => setShowAnimation(true)}
            className="w-full bg-green-600 hover:bg-green-700"
            disabled={showAnimation}
          >
            Build the Display!
          </Button>
        </div>
      </div>

      {showAnimation && (
        <div className="rounded-lg bg-yellow-50 p-4">
          <p className="text-center text-lg font-medium text-yellow-800">
            Notice how the pyramid builds up layer by layer, with each row having one fewer carton than the row below
            it.
          </p>
        </div>
      )}
    </div>
  )
}
