import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-blue-50">
      <div className="container mx-auto px-4 py-12">
        <header className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-pink-600">Algebraic Expressions Learning Module</h1>
          <p className="text-lg text-gray-700">
            Learn about algebraic expressions through a real-world flower sale scenario
          </p>
        </header>

        <div className="mx-auto max-w-3xl">
          <Card className="overflow-hidden border-2 border-pink-200 shadow-lg">
            <div className="relative h-64 w-full">
              <Image src="/school-flower-stall.png" alt="Students selling flowers" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h2 className="mb-4 text-2xl font-bold text-pink-600">Interactive Learning Journey</h2>
              <p className="mb-6 text-gray-700">
                This interactive module will guide you through understanding algebraic expressions using a real-world
                scenario. You'll learn to distinguish between expressions like 3n + 20 and 3(n + 20) while exploring a
                flower sale fundraiser.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-100 text-pink-600">
                    1
                  </div>
                  <p className="text-gray-700">Explore a real-world scenario</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-100 text-pink-600">
                    2
                  </div>
                  <p className="text-gray-700">Learn to distinguish between different expressions</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-100 text-pink-600">
                    3
                  </div>
                  <p className="text-gray-700">Apply your knowledge to new scenarios</p>
                </div>
              </div>
              <div className="mt-8 flex justify-center">
                <Link href="/lesson/1">
                  <Button className="bg-pink-600 hover:bg-pink-700">Start Learning</Button>
                </Link>
              </div>
            </div>
          </Card>

          <div className="mt-12 text-center">
            <h3 className="mb-4 text-xl font-semibold text-gray-700">What You'll Learn</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-lg bg-white p-4 shadow">
                <div className="mb-2 text-pink-600">🧩</div>
                <h4 className="mb-2 font-semibold">Problem Breakdown</h4>
                <p className="text-sm text-gray-600">Organize and understand fixed vs. variable costs</p>
              </div>
              <div className="rounded-lg bg-white p-4 shadow">
                <div className="mb-2 text-pink-600">🔍</div>
                <h4 className="mb-2 font-semibold">Expression Comparison</h4>
                <p className="text-sm text-gray-600">Visualize the difference between similar expressions</p>
              </div>
              <div className="rounded-lg bg-white p-4 shadow">
                <div className="mb-2 text-pink-600">🚀</div>
                <h4 className="mb-2 font-semibold">Real-World Application</h4>
                <p className="text-sm text-gray-600">Apply algebraic concepts to different scenarios</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
