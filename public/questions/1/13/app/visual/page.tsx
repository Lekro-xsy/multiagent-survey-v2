"use client"

import { useState } from "react"
import { Play, Pause, RotateCw } from "lucide-react"

import { PageLayout } from "@/components/page-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function VisualPage() {
  const [currentMinute, setCurrentMinute] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  // Work rates
  const yourRate = 1 / 6 // 1/6 of the job per minute
  const brotherRate = 1 / 8 // 1/8 of the job per minute
  const combinedRate = yourRate + brotherRate // Combined work per minute

  // Progress calculations
  const yourProgress = Math.min(currentMinute * yourRate * 100, 100)
  const brotherProgress = Math.min(currentMinute * brotherRate * 100, 100)
  const combinedProgress = Math.min(currentMinute * combinedRate * 100, 100)

  // Time to complete
  const timeToComplete = 1 / combinedRate // Approximately 3.43 minutes

  const handleNextMinute = () => {
    if (currentMinute < Math.ceil(timeToComplete)) {
      setCurrentMinute((prev) => prev + 1)

      if (currentMinute + 1 >= timeToComplete) {
        setIsComplete(true)
        setIsPlaying(false)
      }
    }
  }

  const handleReset = () => {
    setCurrentMinute(0)
    setIsComplete(false)
    setIsPlaying(false)
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying)

    if (!isPlaying && !isComplete) {
      const interval = setInterval(() => {
        setCurrentMinute((prev) => {
          const next = prev + 1
          if (next >= timeToComplete) {
            clearInterval(interval)
            setIsComplete(true)
            setIsPlaying(false)
            return Math.ceil(timeToComplete)
          }
          return next
        })
      }, 1000)

      return () => clearInterval(interval)
    }
  }

  return (
    <PageLayout>
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-6 text-3xl font-bold text-center">⚡ Why Does the Job Get Done Faster?</h1>

        <div className="grid gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Individual Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-blue-600">You (1/6 per minute)</span>
                    <span>{Math.min(Math.round(yourProgress), 100)}%</span>
                  </div>
                  <Progress value={yourProgress} className="h-4 bg-blue-100" indicatorClassName="bg-blue-500" />
                  <div className="mt-1 text-sm text-right">
                    {yourProgress >= 100
                      ? "Complete in 6 minutes"
                      : `${Math.round(6 - (yourProgress / 100) * 6)} minutes remaining`}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-green-600">Brother (1/8 per minute)</span>
                    <span>{Math.min(Math.round(brotherProgress), 100)}%</span>
                  </div>
                  <Progress value={brotherProgress} className="h-4 bg-green-100" indicatorClassName="bg-green-500" />
                  <div className="mt-1 text-sm text-right">
                    {brotherProgress >= 100
                      ? "Complete in 8 minutes"
                      : `${Math.round(8 - (brotherProgress / 100) * 8)} minutes remaining`}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Combined Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-purple-600">Together (1/6 + 1/8 per minute)</span>
                  <span>{Math.min(Math.round(combinedProgress), 100)}%</span>
                </div>
                <Progress value={combinedProgress} className="h-6 bg-purple-100" indicatorClassName="bg-purple-500" />
                <div className="mt-2 text-sm text-right">
                  {combinedProgress >= 100
                    ? "Complete in about 3.43 minutes"
                    : `About ${(timeToComplete - currentMinute).toFixed(2)} minutes remaining`}
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Key Insight:</h3>
                <p>
                  When working together, we add the <strong>work rates</strong>, not the times!
                </p>
                <p className="mt-2">
                  Your rate: 1/6 of the job per minute
                  <br />
                  Brother's rate: 1/8 of the job per minute
                  <br />
                  <strong>Combined rate: 1/6 + 1/8 = (8+6)/(6×8) = 14/48 ≈ 0.292 of the job per minute</strong>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center gap-4">
          <Button
            onClick={togglePlay}
            size="lg"
            variant={isPlaying ? "outline" : "default"}
            disabled={isComplete}
            className="gap-2"
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            {isPlaying ? "Pause" : "Play Animation"}
          </Button>

          <Button onClick={handleNextMinute} disabled={isComplete || isPlaying} className="gap-2">
            Next Minute
          </Button>

          <Button onClick={handleReset} variant="outline" className="gap-2">
            <RotateCw className="h-4 w-4" />
            Reset
          </Button>
        </div>

        <div className="mt-4 text-center">
          <p className="text-sm text-muted-foreground">
            Current minute: {currentMinute} {isComplete && "(Complete!)"}
          </p>
        </div>
      </div>
    </PageLayout>
  )
}
