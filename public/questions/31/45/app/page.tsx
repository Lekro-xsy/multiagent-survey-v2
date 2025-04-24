import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="container flex min-h-screen flex-col items-center justify-center py-12">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Interactive Math Learning Module</h1>
        <p className="mb-8 text-xl text-muted-foreground">
          Learn about speed, distance, and time through an engaging parallel motion problem
        </p>
      </div>

      <Card className="w-full max-w-3xl">
        <CardHeader>
          <CardTitle className="text-2xl">The Car and the Sprinter</CardTitle>
          <CardDescription>
            A step-by-step guide to solving a real-world math problem involving parallel motion
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="rounded-lg bg-muted p-4">
              <h3 className="mb-2 font-medium">What you'll learn:</h3>
              <ul className="ml-6 list-disc space-y-1">
                <li>Converting between different units of measurement</li>
                <li>Applying the distance, speed, and time relationship</li>
                <li>Connecting mathematical models to real-world scenarios</li>
                <li>Solving problems involving parallel motion</li>
              </ul>
            </div>
            <div className="rounded-lg bg-muted p-4">
              <h3 className="mb-2 font-medium">Module Structure:</h3>
              <ol className="ml-6 list-decimal space-y-1">
                <li>Context story: Car and Track Situation</li>
                <li>Problem breakdown: Identify key numbers</li>
                <li>Visualizing the situation with a diagram</li>
                <li>Guide building the time-distance-speed model</li>
                <li>Student writes and solves the model</li>
                <li>Reveal solution and explanation</li>
                <li>Near transfer: Similar parallel running problem</li>
                <li>Far transfer: Different setting, same structure</li>
                <li>Summary and mini-quiz</li>
              </ol>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Link href="/page1" className="w-full">
            <Button className="w-full">
              Start Learning
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
