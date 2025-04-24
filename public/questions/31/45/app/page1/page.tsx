"use client"

import { useState } from "react"
import { PageLayout } from "@/components/page-layout"
import { TrackDiagram } from "@/components/track-diagram"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Page1() {
  const [animating, setAnimating] = useState(false)

  const startAnimation = () => {
    setAnimating(true)
  }

  const handleAnimationComplete = () => {
    setAnimating(false)
  }

  return (
    <PageLayout pageNumber={1} totalPages={9} title="🚗🏃‍♂️ The Car and the Sprinter!">
      <Card>
        <CardContent className="pt-6">
          <div className="mb-6">
            <TrackDiagram animate={animating} onAnimationComplete={handleAnimationComplete} />
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">The Problem:</h2>
            <p className="text-lg">
              A car is traveling at 25 miles per hour along a road parallel to the straightaway of a middle school's
              track.
            </p>
            <p className="text-lg">
              The starter's gun fires just as the car passes an imaginary line extended from the track's starting line.
            </p>
            <p className="text-lg font-medium">
              About how many seconds does it take the car to reach a place corresponding to the finish line, which is 50
              yards away?
            </p>

            <div className="flex justify-center pt-4">
              <Button size="lg" onClick={startAnimation} disabled={animating}>
                {animating ? "Animating..." : "Start!"}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </PageLayout>
  )
}
