import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-green-800 mb-6">Log Splitting and Exponential Growth</h1>
          <p className="text-lg mb-8 text-green-700">
            An interactive journey to understand exponential growth through log splitting
          </p>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-green-800 mb-4">🎯 Learning Goals</h2>
            <ul className="text-left space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Visualize and understand log splitting in a real-world context</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Build a mathematical model for exponential growth</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Apply your knowledge to similar problems</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Transfer your understanding to different contexts</span>
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <img
              src="/lumberjack-cartoon.png"
              alt="Log splitting illustration"
              className="rounded-lg mx-auto shadow-md"
            />
          </div>

          <Link href="/page/1">
            <Button size="lg" className="bg-green-700 hover:bg-green-800">
              Start Learning <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
