import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-12">
      <div className="container mx-auto px-4">
        <Card className="mx-auto max-w-4xl shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-blue-800">Math Modeling Journey</CardTitle>
            <CardDescription className="text-lg">Learn how to model and solve real-world math problems</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-6 pb-8 text-center">
            <div className="rounded-lg bg-blue-50 p-6 shadow-inner">
              <h2 className="mb-4 text-2xl font-semibold text-blue-700">Saving for a Subwoofer</h2>
              <p className="mb-6 text-lg">
                In this interactive lesson, you'll learn how to model a real-life savings problem using mathematics.
                You'll discover how to:
              </p>
              <ul className="mb-6 space-y-2 text-left">
                <li className="flex items-center">
                  <span className="mr-2 text-blue-500">✓</span> Break down a problem into key facts
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-blue-500">✓</span> Visualize savings over time
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-blue-500">✓</span> Create a mathematical model
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-blue-500">✓</span> Solve equations and apply them to new situations
                </li>
              </ul>
            </div>
            <div className="w-full max-w-md">
              <Link href="/page1">
                <Button className="w-full bg-blue-600 py-6 text-lg hover:bg-blue-700">Start Learning Journey</Button>
              </Link>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center border-t bg-blue-50 px-6 py-4">
            <p className="text-sm text-blue-600">A step-by-step approach to mathematical modeling</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
