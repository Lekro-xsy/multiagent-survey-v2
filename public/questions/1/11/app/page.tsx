import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-100 to-blue-200 flex flex-col items-center justify-center p-4">
      <div className="max-w-3xl w-full bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="relative h-64 bg-sky-600">
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="/city-education-tower.png"
              alt="Building with flagpole illustration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="p-8">
          <h1 className="text-3xl font-bold text-center mb-6">Interactive Math: Building Height Problem</h1>

          <p className="text-lg text-center mb-8">
            Explore a step-by-step interactive lesson on solving real-world math problems involving proportional
            relationships.
          </p>

          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h2 className="font-semibold text-xl mb-2">What You'll Learn:</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>How to model real-world problems with equations</li>
                <li>Working with multiplicative relationships</li>
                <li>Solving linear equations step-by-step</li>
                <li>Applying math concepts to different scenarios</li>
              </ul>
            </div>

            <div className="flex justify-center mt-8">
              <Link href="/context">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Start Learning <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
