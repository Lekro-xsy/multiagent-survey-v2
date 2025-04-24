import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-3xl w-full bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-8 text-center">
          <h1 className="text-3xl font-bold text-blue-600 mb-6">Interactive Perimeter Learning</h1>
          <p className="text-lg mb-8">
            Learn how to calculate the perimeter of rectangles through an interactive, step-by-step experience designed
            to build deep understanding.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-blue-100 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-700">Understand</h3>
              <p>Visualize what perimeter means in real-world contexts</p>
            </div>
            <div className="bg-green-100 p-4 rounded-lg">
              <h3 className="font-semibold text-green-700">Learn</h3>
              <p>Discover how the formula 2(l+w) models the situation</p>
            </div>
            <div className="bg-yellow-100 p-4 rounded-lg">
              <h3 className="font-semibold text-yellow-700">Apply</h3>
              <p>Use your knowledge to solve different perimeter problems</p>
            </div>
          </div>

          <Link href="/lesson/1">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Start Learning
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="bg-blue-600 p-4 text-white text-center">
          <p>Perfect for students learning about perimeter and geometric formulas</p>
        </div>
      </div>
    </main>
  )
}
