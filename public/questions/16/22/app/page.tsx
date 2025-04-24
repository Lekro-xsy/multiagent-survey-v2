import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-gradient-to-r from-teal-500 to-emerald-600 py-6 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Math Learning Journey</h1>
          <p className="mt-2 text-lg">Interactive problem-solving with real-world applications</p>
        </div>
      </header>

      <main className="container mx-auto flex-1 px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-lg bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-teal-700">Welcome to "Selling Calculators and Radios!"</h2>
            <p className="mt-4 text-lg text-gray-700">
              In this interactive lesson, you'll learn how to solve commission-based math problems through a real-world
              scenario.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4 rounded-md bg-teal-50 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-500 text-white">1</div>
                <div>
                  <h3 className="font-semibold text-teal-700">Story Introduction</h3>
                  <p className="text-gray-600">Begin with a salesman's busy morning selling calculators and radios</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-md bg-emerald-50 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-emerald-700">Information Breakdown</h3>
                  <p className="text-gray-600">Identify what we know and what we need to find</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-md bg-teal-50 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-500 text-white">3</div>
                <div>
                  <h3 className="font-semibold text-teal-700">Visualize Earnings</h3>
                  <p className="text-gray-600">See how commission works for each product sold</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-md bg-emerald-50 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white">
                  ...
                </div>
                <div>
                  <h3 className="font-semibold text-emerald-700">And more steps...</h3>
                  <p className="text-gray-600">Continue through all 9 interactive learning pages</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <Link href="/lesson/1">
                <Button className="bg-teal-600 px-6 py-2 text-lg hover:bg-teal-700">
                  Start Learning <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>Interactive Math Learning Experience</p>
        </div>
      </footer>
    </div>
  )
}
