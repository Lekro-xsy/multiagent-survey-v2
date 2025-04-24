import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { PyramidVisualization } from "@/components/pyramid-visualization"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function SolutionPage() {
  return (
    <div className="container py-8">
      <Card className="mx-auto max-w-4xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">🎯 Check Your Solution!</CardTitle>
          <CardDescription>Here's the complete solution to the problem</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div className="rounded-lg bg-blue-50 p-4">
                <h2 className="mb-3 text-xl font-semibold text-blue-800">Solution Walkthrough</h2>
                <h3 className="mb-2 font-medium text-blue-700">Identify the pattern:</h3>
                <ul className="space-y-1 text-blue-700">
                  <li>Layer 1: 6² = 36 bricks</li>
                  <li>Layer 2: 5² = 25 bricks</li>
                  <li>Layer 3: 4² = 16 bricks</li>
                  <li>Layer 4: 3² = 9 bricks</li>
                  <li>Layer 5: 2² = 4 bricks</li>
                </ul>

                <h3 className="mb-2 mt-4 font-medium text-blue-700">Calculate the mass:</h3>
                <p className="text-blue-700">Number of bricks in 5th layer = 4 bricks</p>
                <p className="text-blue-700">Mass of each brick = 5 kg</p>
                <p className="text-blue-700">Total mass = 4 × 5 = 20 kg</p>
              </div>

              <div className="rounded-lg bg-green-100 p-4 text-center">
                <h3 className="text-xl font-medium text-green-800">Final Answer</h3>
                <p className="mt-2 text-green-700">The fifth layer of the pyramid has a mass of 20 kilograms.</p>
              </div>

              <div className="rounded-lg bg-yellow-50 p-4">
                <h3 className="mb-2 font-medium text-yellow-800">Key Insights</h3>
                <ul className="ml-4 list-disc space-y-1 text-yellow-700">
                  <li>The pattern follows a sequence of decreasing perfect squares</li>
                  <li>Each layer's number of bricks can be calculated as (7-n)² where n is the layer number</li>
                  <li>Always multiply the number of items by the individual mass to find the total mass</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <PyramidVisualization highlightLayer={5} />
              <div className="mt-6 w-full rounded-lg bg-orange-100 p-4">
                <h3 className="mb-2 text-center font-medium text-orange-800">Visual Explanation</h3>
                <div className="flex items-center justify-center gap-4">
                  <div className="text-center">
                    <div className="flex flex-wrap justify-center">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <div
                          key={i}
                          className="m-1 h-8 w-8 rounded-sm border border-orange-600 bg-orange-400 text-center text-xs leading-8 text-white"
                        >
                          5kg
                        </div>
                      ))}
                    </div>
                    <p className="mt-2 text-sm font-medium text-orange-700">5th layer: 4 bricks × 5 kg = 20 kg</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href="/solve">
            <Button variant="outline">Previous: Solve</Button>
          </Link>
          <Link href="/similar">
            <Button className="gap-2">
              Next: Similar Problem <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
