import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function ProblemBreakdownPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-yellow-100">
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <h1 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">🧩 What Are the Key Details?</h1>
            <p className="text-xl text-gray-600">Breaking down the problem into important facts</p>
          </div>

          <div className="mb-8 overflow-hidden rounded-xl bg-white p-6 shadow-lg">
            <h2 className="mb-6 text-2xl font-semibold text-gray-800">Key Facts</h2>

            <div className="mb-8 grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-xl font-medium text-gray-800">Mileage Charges</h3>
                <div className="space-y-3">
                  <Card className="bg-yellow-100 p-4 shadow-sm">
                    <p className="font-medium">$3.20 for the first 1/5 mile</p>
                  </Card>
                  <Card className="bg-yellow-100 p-4 shadow-sm">
                    <p className="font-medium">$0.45 for each additional 1/5 mile</p>
                  </Card>
                  <Card className="bg-yellow-100 p-4 shadow-sm">
                    <p className="font-medium">Trip distance: 3.8 miles</p>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-xl font-medium text-gray-800">Traffic Charges</h3>
                <div className="space-y-3">
                  <Card className="bg-blue-100 p-4 shadow-sm">
                    <p className="font-medium">$0.20 per minute for stopped time</p>
                  </Card>
                  <Card className="bg-blue-100 p-4 shadow-sm">
                    <p className="font-medium">Stopped time: 6 minutes</p>
                  </Card>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-gray-100 p-4">
              <h3 className="mb-2 text-lg font-medium text-gray-800">Why separate the charges?</h3>
              <p className="text-gray-700">
                Breaking the problem into two parts (mileage and traffic charges) makes it easier to solve. We'll
                calculate each part separately, then combine them for the final answer.
              </p>
            </div>
          </div>

          <div className="flex justify-between">
            <Link href="/">
              <Button variant="outline" className="flex items-center gap-2">
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>
            </Link>
            <Link href="/visualizing-charges">
              <Button className="group bg-yellow-500 text-black hover:bg-yellow-600">
                Next
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
