import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SolutionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-100">
      <div className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 flex items-center justify-between">
            <Link href="/solve">
              <Button variant="ghost" className="flex items-center gap-1">
                <ArrowLeft className="h-4 w-4" /> Back
              </Button>
            </Link>
            <div className="text-sm text-slate-500">Page 6 of 9</div>
          </div>

          <div className="mb-4 rounded-xl bg-amber-50 p-6 shadow-lg">
            <h1 className="mb-6 flex items-center gap-2 text-3xl font-bold text-slate-800">
              <CheckCircle className="h-8 w-8 text-amber-600" /> Let's Check Together!
            </h1>

            <div className="mb-6 rounded-xl bg-white p-4 shadow-md">
              <h2 className="mb-4 text-xl font-semibold text-slate-700">Full Solution Walkthrough</h2>

              <div className="space-y-6">
                <div className="rounded-lg bg-slate-50 p-4">
                  <h3 className="mb-3 flex items-center gap-2 text-lg font-medium text-slate-700">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
                      1
                    </div>
                    <span>Calculate miles per gallon</span>
                  </h3>

                  <div className="flex flex-col items-center gap-2 md:flex-row md:justify-center">
                    <div className="flex items-center">
                      <span className="text-lg">200 miles</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mx-2 text-lg">÷</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-lg">10.5 gallons</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mx-2 text-lg">=</span>
                    </div>
                    <div className="flex items-center">
                      <span className="rounded-md bg-emerald-100 px-3 py-1 text-lg font-bold text-emerald-700">
                        19.0 miles/gallon
                      </span>
                    </div>
                  </div>
                  <p className="mt-2 text-center text-sm text-slate-500">(Rounded to the nearest tenth)</p>
                </div>

                <div className="rounded-lg bg-slate-50 p-4">
                  <h3 className="mb-3 flex items-center gap-2 text-lg font-medium text-slate-700">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
                      2
                    </div>
                    <span>Write the general expression</span>
                  </h3>

                  <div className="text-center text-lg">
                    <span className="rounded-md bg-blue-100 px-3 py-1 font-medium text-blue-700">
                      Distance = 19.0 × g
                    </span>
                  </div>
                  <p className="mt-2 text-center text-sm text-slate-500">where g = gallons of gas</p>
                </div>

                <div className="rounded-lg bg-slate-50 p-4">
                  <h3 className="mb-3 flex items-center gap-2 text-lg font-medium text-slate-700">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
                      3
                    </div>
                    <span>Calculate the distance with a full tank</span>
                  </h3>

                  <div className="flex flex-col items-center gap-2 md:flex-row md:justify-center">
                    <div className="flex items-center">
                      <span className="text-lg">Distance</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mx-2 text-lg">=</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-lg">19.0 miles/gallon</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mx-2 text-lg">×</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-lg">18 gallons</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mx-2 text-lg">=</span>
                    </div>
                    <div className="flex items-center">
                      <span className="rounded-md bg-emerald-100 px-3 py-1 text-lg font-bold text-emerald-700">
                        342 miles
                      </span>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-slate-50 p-4">
                  <h3 className="mb-3 flex items-center gap-2 text-lg font-medium text-slate-700">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
                      4
                    </div>
                    <span>Make the decision</span>
                  </h3>

                  <div className="rounded-lg bg-amber-100 p-4 text-center">
                    <p className="text-lg font-medium text-amber-800">
                      You can travel 342 miles with a full tank — not quite enough for the 350-mile trip.
                    </p>
                    <p className="mt-2 text-lg font-bold text-amber-800">You will need to refuel during the journey!</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-lg bg-blue-100 p-4">
                <h3 className="mb-2 text-lg font-medium text-blue-700">Mathematical Insight:</h3>
                <p className="text-blue-600">
                  This problem demonstrates how to use rates and proportional relationships to make real-world
                  decisions. By finding the miles per gallon rate (19.0), we created a mathematical model that lets us
                  predict how far we can travel with any amount of fuel.
                </p>
              </div>
            </div>

            <div className="flex justify-between">
              <Link href="/solve">
                <Button variant="outline">
                  <ArrowLeft className="mr-1 h-4 w-4" /> Previous
                </Button>
              </Link>
              <Link href="/transfer1">
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  Continue <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
