import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="container flex min-h-screen flex-col items-center justify-center py-12">
      <div className="mx-auto flex max-w-3xl flex-col items-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Interactive Algebra Learning</h1>
          <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Learn algebraic problem-solving through real-world examples and interactive exercises
          </p>
        </div>
        <div className="w-full max-w-md space-y-2">
          <Card>
            <CardHeader>
              <CardTitle>🎓 Studying More Each Year!</CardTitle>
              <CardDescription>
                Follow Bartholomew's journey through college and learn algebraic problem-solving
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center">
                <img src="/placeholder.svg?key=429rj" alt="Student studying in library" className="rounded-lg" />
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/lesson/1" className="w-full">
                <Button className="w-full">
                  Start Learning
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
