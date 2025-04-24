import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-yellow-100">
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">🚕 A Ride Across the City</h1>
            <p className="text-xl text-gray-600">Interactive Math Problem: Taxi Fare Calculation</p>
          </div>

          <div className="mb-12 overflow-hidden rounded-xl bg-white p-6 shadow-lg">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex flex-col justify-center">
                <h2 className="mb-4 text-2xl font-semibold text-gray-800">Cindy's Taxi Ride</h2>
                <p className="mb-4 text-lg text-gray-700">Cindy took a taxi for a 3.8-mile trip. The taxi charges:</p>
                <ul className="mb-6 space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="mr-2 text-yellow-500">•</span>
                    $3.20 for the first 1/5 mile
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-yellow-500">•</span>
                    45 cents for each additional 1/5 mile
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-yellow-500">•</span>
                    20 cents per minute if stuck in traffic
                  </li>
                </ul>
                <p className="mb-6 text-lg font-medium text-gray-800">During the trip, she was stuck for 6 minutes.</p>
                <p className="mb-6 text-lg font-medium text-gray-800">How much did Cindy pay for her taxi ride?</p>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="relative h-64 w-full overflow-hidden rounded-lg">
                  <img
                    src="/placeholder.svg?key=7iiy5"
                    alt="Taxi in city traffic"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <Link href="/problem-breakdown">
                <Button className="group bg-yellow-500 text-black hover:bg-yellow-600">
                  Start Learning
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="mb-4 text-xl font-semibold text-gray-800">What You'll Learn</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2 text-yellow-500">✓</span>
                How to break down complex pricing problems into manageable parts
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-yellow-500">✓</span>
                Building mathematical expressions systematically
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-yellow-500">✓</span>
                Combining separate expressions to find total costs
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-yellow-500">✓</span>
                Applying the same mathematical thinking to different real-world scenarios
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
