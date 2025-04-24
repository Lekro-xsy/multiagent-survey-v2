import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-gradient-to-r from-green-400 to-teal-500 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white">Math in Motion: Distance, Speed & Time</h1>
          <p className="mt-2 text-white/80">An interactive learning journey</p>
        </div>
      </header>

      <main className="container mx-auto flex-1 px-4 py-8">
        <div className="mx-auto max-w-3xl">
          <Card className="border-2 border-green-200 shadow-lg">
            <CardHeader className="bg-green-50">
              <CardTitle className="text-2xl text-green-800">Welcome to Your Math Adventure!</CardTitle>
              <CardDescription>
                Learn how to solve real-world problems using distance, speed, and time relationships.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="mb-6 rounded-lg bg-green-100 p-4">
                <p className="text-green-800">In this interactive lesson, you'll learn how to:</p>
                <ul className="mt-2 space-y-2 pl-5">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-green-600">•</span>
                    <span>Understand the relationship between distance, speed, and time</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-green-600">•</span>
                    <span>Set up mathematical models for real-world problems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-green-600">•</span>
                    <span>Solve problems involving unit conversions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-green-600">•</span>
                    <span>Apply your knowledge to different scenarios</span>
                  </li>
                </ul>
              </div>

              <div className="relative mx-auto mb-6 h-64 overflow-hidden rounded-lg">
                <img
                  src="/smartwatch-route-prep.png"
                  alt="Runner preparing for a jog"
                  className="h-full w-full object-cover"
                />
              </div>

              <p className="text-center text-lg font-medium text-gray-700">Ready to start your learning journey?</p>
            </CardContent>
            <CardFooter className="flex justify-center pb-6">
              <Link href="/page1">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Begin Lesson
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </main>

      <footer className="bg-gray-100 py-4 text-center text-sm text-gray-600">
        Interactive Math Learning Module © {new Date().getFullYear()}
      </footer>
    </div>
  )
}
