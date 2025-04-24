import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { PyramidVisualization } from "@/components/pyramid-visualization"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContextPage() {
  return (
    <div className="container py-8">
      <Card className="mx-auto max-w-4xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">🧱🔺 Building a Brick Pyramid!</CardTitle>
          <CardDescription>Let's explore a real-world math problem</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="rounded-lg bg-muted p-6">
                <h2 className="mb-4 text-xl font-semibold">Cindy is building a pyramid.</h2>
                <ul className="space-y-2">
                  <li>Each brick weighs 5 kilograms.</li>
                  <li>The number of bricks per layer is:</li>
                  <li className="ml-4">Bottom (1st) layer: 36 bricks</li>
                  <li className="ml-4">2nd layer: 25 bricks</li>
                  <li className="ml-4">3rd layer: 16 bricks</li>
                  <li className="ml-4">and so on.</li>
                </ul>
                <div className="mt-4 rounded-md bg-yellow-100 p-3 text-center">
                  <p className="font-medium">What is the mass of the fifth layer of the pyramid?</p>
                </div>
              </div>
              <div className="rounded-lg bg-blue-50 p-4">
                <h3 className="mb-2 font-medium text-blue-700">Why This Matters</h3>
                <p className="text-sm text-blue-600">
                  This problem helps us practice recognizing patterns and applying mathematical operations to solve
                  real-world problems.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <PyramidVisualization animated={true} />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href="/">
            <Button variant="outline">Back to Home</Button>
          </Link>
          <Link href="/breakdown">
            <Button className="gap-2">
              Next: Break Down the Problem <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
