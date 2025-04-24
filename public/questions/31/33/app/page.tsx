import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-gradient-to-r from-teal-500 to-emerald-500 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white">Math in Context: Shipping Costs</h1>
          <p className="mt-2 text-white/90">Learn how to model real-world situations with linear equations</p>
        </div>
      </header>

      <main className="container mx-auto flex-1 px-4 py-8">
        <div className="mx-auto max-w-3xl">
          <Card className="border-2 border-teal-100 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-teal-50 to-emerald-50">
              <CardTitle className="text-2xl text-teal-800">Interactive Math Learning Module</CardTitle>
              <CardDescription>Explore how to create and use linear equations to model shipping costs</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <p className="text-lg">In this interactive lesson, you'll learn how to:</p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Identify fixed and variable costs in real-world scenarios</li>
                  <li>Create mathematical models using linear equations</li>
                  <li>Apply your knowledge to similar problems</li>
                  <li>Understand domain restrictions in context</li>
                </ul>

                <div className="mt-6 rounded-lg bg-teal-50 p-4">
                  <h3 className="text-lg font-medium text-teal-800">What you'll build:</h3>
                  <p className="mt-2">A mathematical model that calculates shipping costs based on package weight</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end bg-gradient-to-r from-teal-50 to-emerald-50 pt-4">
              <Link href="/page/1">
                <Button className="bg-teal-600 hover:bg-teal-700">
                  Start Learning <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5">
            {[...Array(10)].map((_, i) => (
              <Link key={i} href={`/page/${i + 1}`} className="block">
                <Card
                  className={`h-full border-2 ${i === 0 ? "border-teal-400 bg-teal-50" : "border-gray-200"} transition-all hover:border-teal-300 hover:shadow-md`}
                >
                  <CardHeader className="p-4">
                    <CardTitle className="text-center text-sm">Page {i + 1}</CardTitle>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t bg-gray-50 py-4">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          Interactive Math Learning Module © {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  )
}
