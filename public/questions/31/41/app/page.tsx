import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-gradient-to-r from-purple-700 to-purple-900 py-6 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Math in Action: Inequalities</h1>
          <p className="mt-2 text-lg">Learn how to use inequalities to solve real-world problems</p>
        </div>
      </header>

      <main className="container mx-auto flex-1 px-4 py-8">
        <Card className="mx-auto max-w-4xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">🎸 Can Tony Cover His Payments?</CardTitle>
            <CardDescription>
              A step-by-step interactive lesson on using inequalities to solve real-world problems
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="relative mx-auto aspect-video max-w-2xl overflow-hidden rounded-xl bg-muted">
              <img
                src="/melody-mart-assistance.png"
                alt="Tony working at a music store, selling CDs and helping customers"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="mx-auto max-w-2xl space-y-4 text-center">
              <h2 className="text-xl font-semibold">Tony's Challenge:</h2>
              <p className="text-lg">Tony needs to earn at least $150 a week to pay for his car and insurance.</p>
              <p className="text-lg">He earns $10 a day plus $2 for each CD sold.</p>
              <p className="text-lg">He works 5 days a week.</p>
              <p className="text-lg font-medium">How many CDs must Tony sell to meet his goal?</p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Link href="/problem-breakdown">
              <Button size="lg" className="gap-2">
                Help Tony Earn <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </main>

      <footer className="bg-gray-100 py-4 text-center text-sm text-gray-600">
        <div className="container mx-auto">
          <p>Interactive Math Lesson: Inequalities Through Real-World Problems</p>
        </div>
      </footer>
    </div>
  )
}
