"use client"

import { useState } from "react"
import { Play } from "lucide-react"

import { PageLayout } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function StoryPage() {
  const [animationState, setAnimationState] = useState<"initial" | "separate" | "together">("initial")

  const handleStartAnimation = () => {
    setAnimationState("separate")
    setTimeout(() => {
      setAnimationState("together")
    }, 3000)
  }

  return (
    <PageLayout>
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-6 text-3xl font-bold text-center">🧹 Cleaning Up — Faster Together!</h1>

        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="mb-6 aspect-video relative bg-blue-50 rounded-lg overflow-hidden">
              {animationState === "initial" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src="/sweeping-together.png" alt="Kitchen scene" className="w-full h-full object-cover" />
                </div>
              )}

              {animationState === "separate" && (
                <div className="absolute inset-0 flex items-center justify-around">
                  <div className="text-center">
                    <img
                      src="/solitary-kitchen-sweep.png"
                      alt="You sweeping alone"
                      className="rounded-full mb-2 border-2 border-blue-300"
                    />
                    <p className="font-medium">You: 6 minutes</p>
                  </div>
                  <div className="text-center">
                    <img
                      src="/placeholder.svg?height=200&width=200&query=brother sweeping kitchen floor alone"
                      alt="Brother sweeping alone"
                      className="rounded-full mb-2 border-2 border-green-300"
                    />
                    <p className="font-medium">Brother: 8 minutes</p>
                  </div>
                </div>
              )}

              {animationState === "together" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=300&width=600&query=two people sweeping kitchen floor together"
                    alt="Sweeping together"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 right-4 bg-white/80 p-2 rounded-lg">
                    <p className="font-bold text-green-600">Faster together!</p>
                  </div>
                </div>
              )}
            </div>

            <div className="prose max-w-none">
              <p className="text-lg">
                You need to sweep the kitchen floor. Alone, it takes you{" "}
                <strong className="text-blue-600">6 minutes</strong>. Your brother, a bit slower, takes{" "}
                <strong className="text-green-600">8 minutes</strong> to do it alone.
              </p>
              <p className="text-lg font-medium mt-4">What happens if you both sweep at the same time?</p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button size="lg" onClick={handleStartAnimation} disabled={animationState !== "initial"} className="gap-2">
            <Play className="h-4 w-4" />
            Start Cleaning!
          </Button>
        </div>
      </div>
    </PageLayout>
  )
}
