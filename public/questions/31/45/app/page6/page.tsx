"use client"

import { useState } from "react"
import { PageLayout } from "@/components/page-layout"
import { TrackDiagram } from "@/components/track-diagram"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Page6() {
  const [showAnimation, setShowAnimation] = useState(false)

  return (
    <PageLayout pageNumber={6} totalPages={9} title="🎯 Check Your Work!">
      <Card>
        <CardContent className="pt-6">
          <div className="mb-6 space-y-6">
            <h2 className="text-xl font-semibold">Solution Walkthrough:</h2>

            <div className="rounded-lg bg-slate-50 p-4">
              <h3 className="mb-2 font-medium">Step 1: Convert speed to yards/second</h3>
              <div className="space-y-2">
                <p>25 miles/hour × 1760 yards/mile ÷ 3600 seconds/hour</p>
                <p>= (25 × 1760) ÷ 3600</p>
                <p>= 44,000 ÷ 3600</p>
                <p>≈ 12.22 yards/second</p>
              </div>
            </div>

            <div className="rounded-lg bg-slate-50 p-4">
              <h3 className="mb-2 font-medium">Step 2: Calculate time using distance ÷ speed</h3>
              <div className="space-y-2">
                <p>Time = Distance ÷ Speed</p>
                <p>Time = 50 yards ÷ 12.22 yards/second</p>
                <p>Time ≈ 4.1 seconds</p>
              </div>
            </div>

            <div className="rounded-lg bg-green-50 p-4">
              <h3 className="mb-2 font-medium text-green-800">Final Answer:</h3>
              <p className="text-lg font-semibold text-green-800">
                It takes about 4.1 seconds for the car to reach the finish line.
              </p>
            </div>

            <div className="text-center">
              <Button onClick={() => setShowAnimation(true)} disabled={showAnimation}>
                Show Animation
              </Button>
            </div>

            {showAnimation && (
              <div className="mt-4">
                <p className="mb-2 text-center text-sm text-muted-foreground">
                  The car takes approximately 4.1 seconds to reach the finish line
                </p>
                <TrackDiagram animate={true} />
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </PageLayout>
  )
}
