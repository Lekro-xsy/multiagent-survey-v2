"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Car, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function ContextPage() {
  const [carPosition, setCarPosition] = useState(0)
  const [started, setStarted] = useState(false)

  const startTrip = () => {
    setStarted(true)
    let position = 0
    const interval = setInterval(() => {
      position += 5
      setCarPosition(position)
      if (position >= 100) {
        clearInterval(interval)
      }
    }, 100)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-100">
      <div className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" className="flex items-center gap-1">
                <ArrowLeft className="h-4 w-4" /> Back
              </Button>
            </Link>
            <div className="text-sm text-slate-500">Page 1 of 9</div>
          </div>

          <div className="mb-4 rounded-xl bg-amber-50 p-6 shadow-lg">
            <h1 className="mb-6 flex items-center gap-2 text-3xl font-bold text-slate-800">
              <Car className="h-8 w-8 text-amber-600" /> Can You Make It on One Tank?
            </h1>

            <div className="mb-8 flex flex-col gap-6 md:flex-row">
              <div className="flex-1">
                <div className="relative mb-6 rounded-xl bg-white p-4 shadow-md">
                  <img
                    src="/road-trip-ready.png"
                    alt="Car packed for a road trip"
                    className="mx-auto h-auto max-w-full rounded-lg"
                  />
                </div>

                <div className="rounded-xl bg-white p-4 shadow-md">
                  <h2 className="mb-3 text-xl font-semibold text-slate-700">Your Road Trip Challenge</h2>
                  <p className="mb-3 text-slate-600">
                    You're about to take a <span className="font-semibold text-amber-600">350-mile trip</span>. Before
                    you go, you check your car's fuel efficiency:
                  </p>
                  <ul className="mb-4 space-y-2 pl-5">
                    <li className="text-slate-600">
                      You used <span className="font-semibold text-amber-600">10.5 gallons</span> of gas to travel{" "}
                      <span className="font-semibold text-amber-600">200 miles</span> last time.
                    </li>
                    <li className="text-slate-600">
                      Your tank holds <span className="font-semibold text-amber-600">18 gallons</span> when full.
                    </li>
                  </ul>
                  <p className="mb-4 text-lg font-medium text-slate-700">Will 18 gallons be enough for this trip?</p>
                </div>
              </div>
            </div>

            <div className="mb-6 rounded-xl bg-white p-4 shadow-md">
              <h3 className="mb-3 text-lg font-medium text-slate-700">Trip Visualization</h3>
              <div className="relative mb-2 h-8">
                <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <MapPin className="h-5 w-5" />
                </div>
                {started && (
                  <div className="absolute top-1" style={{ left: `${carPosition}%`, transform: "translateX(-50%)" }}>
                    <Car className="h-6 w-6 text-amber-600" />
                  </div>
                )}
                <div className="absolute right-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-700">
                  <MapPin className="h-5 w-5" />
                </div>
              </div>
              <Progress value={carPosition} className="h-2 w-full" />
              <div className="mt-2 flex justify-between">
                <span className="text-sm text-slate-500">Start</span>
                <span className="text-sm text-slate-500">350 miles</span>
              </div>
              <div className="mt-4 flex justify-center">
                <Button
                  onClick={startTrip}
                  disabled={started && carPosition < 100}
                  className="bg-amber-600 hover:bg-amber-700"
                >
                  {!started ? "Start the Trip" : carPosition < 100 ? "Driving..." : "Restart Trip"}
                </Button>
              </div>
            </div>

            <div className="flex justify-end">
              <Link href="/breakdown">
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
