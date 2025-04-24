import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-sky-100">
      <div className="container mx-auto px-4 py-12">
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold text-center text-sky-700 mb-6">Interactive Math Learning: Unit Rates</h1>

            <div className="flex justify-center mb-8">
              <img src="/vibrant-highway-adventure.png" alt="Road trip illustration" className="rounded-lg" />
            </div>

            <div className="space-y-4 text-center">
              <p className="text-lg">Welcome to this interactive lesson on unit rates! You'll learn how to:</p>

              <ul className="text-left max-w-md mx-auto space-y-2">
                <li className="flex items-center">
                  <span className="bg-green-100 text-green-800 font-bold rounded-full w-6 h-6 flex items-center justify-center mr-2">
                    ✓
                  </span>
                  Understand what unit rates mean in real-world contexts
                </li>
                <li className="flex items-center">
                  <span className="bg-green-100 text-green-800 font-bold rounded-full w-6 h-6 flex items-center justify-center mr-2">
                    ✓
                  </span>
                  Set up and solve unit rate problems
                </li>
                <li className="flex items-center">
                  <span className="bg-green-100 text-green-800 font-bold rounded-full w-6 h-6 flex items-center justify-center mr-2">
                    ✓
                  </span>
                  Apply your knowledge to different scenarios
                </li>
                <li className="flex items-center">
                  <span className="bg-green-100 text-green-800 font-bold rounded-full w-6 h-6 flex items-center justify-center mr-2">
                    ✓
                  </span>
                  Practice with interactive examples and quizzes
                </li>
              </ul>
            </div>

            <div className="mt-8 flex justify-center">
              <Link href="/context">
                <Button className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-6 text-lg rounded-full">
                  Start Learning!
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
