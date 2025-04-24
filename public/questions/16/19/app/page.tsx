import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="container flex min-h-screen flex-col items-center justify-center py-12">
      <Card className="w-full max-w-3xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Unit Rates Learning Experience</CardTitle>
          <CardDescription>Learn about unit rates through an interactive journey about fuel efficiency</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-6">
          <div className="relative h-64 w-full overflow-hidden rounded-lg">
            <img
              src="/highway-fuel-check.png"
              alt="Car driving on highway with fuel gauge"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-semibold">🚗 Fueling the Journey!</h2>
            <p className="mt-4 text-lg">
              Embark on an interactive learning adventure about unit rates through the context of fuel efficiency.
              You'll solve real-world problems and master the concept of miles per gallon!
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link href="/intro">
            <Button size="lg" className="gap-2">
              Start Learning
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
