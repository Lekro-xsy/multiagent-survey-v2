import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-100">
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex justify-center">
            <div className="rounded-full bg-amber-100 p-4">
              <img src="/classic-car-icon.png" alt="Car icon" className="h-20 w-20" />
            </div>
          </div>

          <h1 className="mb-6 text-center text-4xl font-bold text-slate-800 md:text-5xl">
            Math Journey: Can You Make It on One Tank?
          </h1>

          <div className="mb-8 rounded-xl bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-slate-700">Welcome to Your Math Adventure!</h2>
            <p className="mb-4 text-lg text-slate-600">
              In this interactive lesson, you'll learn how to use math to solve real-world problems. You'll help plan a
              road trip and figure out if you can make it to your destination on one tank of gas.
            </p>
            <p className="mb-6 text-lg text-slate-600">Along the way, you'll:</p>
            <ul className="mb-6 space-y-2 pl-6">
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-emerald-500">✓</span>
                <span>Learn to calculate unit rates</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-emerald-500">✓</span>
                <span>Build mathematical models</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-emerald-500">✓</span>
                <span>Apply math to make real-world decisions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-emerald-500">✓</span>
                <span>Transfer your skills to new situations</span>
              </li>
            </ul>
          </div>

          <div className="flex justify-center">
            <Link href="/context">
              <Button size="lg" className="bg-emerald-600 text-lg hover:bg-emerald-700">
                Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((page) => (
              <div key={page} className="rounded-lg bg-white p-4 shadow-md">
                <div className="mb-2 font-medium text-slate-700">Page {page}</div>
                <div className="h-1 w-full rounded-full bg-gray-200">
                  <div className="h-1 rounded-full bg-emerald-500" style={{ width: "0%" }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
