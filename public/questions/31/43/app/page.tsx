import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-gradient-to-r from-amber-100 to-amber-200 py-6">
        <div className="container flex items-center justify-between">
          <h1 className="text-2xl font-bold text-amber-900">Math in Motion</h1>
          <nav className="hidden space-x-4 md:flex">
            <Link href="/" className="text-amber-900 hover:text-amber-700">
              Home
            </Link>
            <Link href="/about" className="text-amber-900 hover:text-amber-700">
              About
            </Link>
            <Link href="/lessons" className="text-amber-900 hover:text-amber-700">
              Lessons
            </Link>
          </nav>
        </div>
      </header>

      <main className="container flex-1 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold">Distance, Time & Speed</h1>
            <p className="text-xl text-muted-foreground">An interactive journey through real-world math problems</p>
          </div>

          <Card className="mb-8 overflow-hidden">
            <div className="relative h-48 bg-amber-100">
              <div className="absolute inset-0 bg-[url('/whimsical-bakery-ride.png')] bg-cover bg-center opacity-80"></div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white p-4">
                <h2 className="text-2xl font-bold text-amber-900">The Bakery Truck Problem</h2>
              </div>
            </div>
            <CardContent className="pt-6">
              <p className="mb-4">
                Follow the journey of a bakery truck as it makes deliveries throughout the day. Learn how to calculate
                the total distance traveled using time and speed information.
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Visualize the timeline of events</li>
                <li>Calculate driving time from a complex schedule</li>
                <li>Apply the distance formula to real-world scenarios</li>
                <li>Practice with similar problems</li>
              </ul>
            </CardContent>
            <CardFooter className="flex justify-end border-t bg-muted/20 px-6 py-4">
              <Link href="/lesson/1">
                <Button className="bg-amber-600 hover:bg-amber-700">
                  Start Lesson <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Learning Objectives</CardTitle>
                <CardDescription>What you'll master in this lesson</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Identify relevant information in word problems</li>
                  <li>Calculate total time and driving time</li>
                  <li>Apply the distance formula: Distance = Speed × Time</li>
                  <li>Transfer problem-solving skills to new scenarios</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Prerequisites</CardTitle>
                <CardDescription>Skills you should already have</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Basic arithmetic operations</li>
                  <li>Understanding of time units (hours, minutes)</li>
                  <li>Familiarity with the concept of speed</li>
                  <li>Converting between time formats (e.g., 1.75 hours = 1 hour 45 minutes)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="border-t bg-muted py-6">
        <div className="container text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Math in Motion. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
