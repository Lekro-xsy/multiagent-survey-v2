import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-red-50">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-red-700 mb-4">Interactive Math Learning</h1>
          <p className="text-lg text-gray-700">Explore real-world math problems through interactive lessons</p>
        </div>

        <Card className="mx-auto max-w-3xl shadow-lg border-2 border-red-200 overflow-hidden">
          <div className="bg-red-600 p-4 text-white">
            <h2 className="text-2xl font-bold">Featured Lesson</h2>
          </div>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-1/3">
                <div className="rounded-lg overflow-hidden">
                  <img src="/market-apples.png" alt="Apples at Farmer's Market" className="w-full h-auto" />
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-bold text-red-700 mb-2">🍎 How Many Bushels of Apples?</h3>
                <p className="text-gray-700 mb-4">
                  Learn about unit conversion by solving a real-world problem about selling apples at a farmer's market.
                </p>
                <ul className="mb-6 text-gray-600">
                  <li className="flex items-center mb-2">
                    <span className="mr-2">✓</span> Convert between pecks and bushels
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="mr-2">✓</span> Solve multi-step word problems
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span> Apply math to real-world scenarios
                  </li>
                </ul>
                <Link href="/lesson/context">
                  <Button className="bg-red-600 hover:bg-red-700">Start Lesson</Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
