import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-screen py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Unit Rate Calculator</h1>
      <p className="text-xl text-center mb-12 max-w-2xl">
        Learn how to calculate unit rates through an interactive, step-by-step approach using real-world examples.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle>Learn Unit Rates</CardTitle>
            <CardDescription>Step-by-step interactive lessons</CardDescription>
          </CardHeader>
          <CardContent>
            <img
              src="/placeholder.svg?key=h7576"
              alt="Interactive learning"
              className="rounded-md w-full h-48 object-cover mb-4"
            />
            <p>Follow our guided lessons to understand how unit rates work in everyday situations.</p>
          </CardContent>
          <CardFooter>
            <Link href="/lesson/1" className="w-full">
              <Button className="w-full">Start Learning</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle>Practice Problems</CardTitle>
            <CardDescription>Apply what you've learned</CardDescription>
          </CardHeader>
          <CardContent>
            <img
              src="/placeholder.svg?key=89gas"
              alt="Practice problems"
              className="rounded-md w-full h-48 object-cover mb-4"
            />
            <p>Test your understanding with various practice problems on unit rates.</p>
          </CardContent>
          <CardFooter>
            <Link href="/practice" className="w-full">
              <Button variant="outline" className="w-full">
                Practice Now
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle>Unit Rate Calculator</CardTitle>
            <CardDescription>Calculate any unit rate</CardDescription>
          </CardHeader>
          <CardContent>
            <img
              src="/calculator-division.png"
              alt="Calculator"
              className="rounded-md w-full h-48 object-cover mb-4"
            />
            <p>Use our calculator to find unit rates for any quantities you provide.</p>
          </CardContent>
          <CardFooter>
            <Link href="/calculator" className="w-full">
              <Button variant="secondary" className="w-full">
                Open Calculator
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-12 text-center">
        <p className="text-muted-foreground">
          Perfect for students learning about rates, division, and real-world math applications.
        </p>
      </div>
    </div>
  )
}
