import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="container flex min-h-screen flex-col items-center justify-center py-12">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Working Together Problems</h1>
        <p className="mb-8 text-xl text-muted-foreground">
          Learn how to solve math problems where people work together to complete tasks faster!
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Learn</CardTitle>
              <CardDescription>Step-by-step guidance</CardDescription>
            </CardHeader>
            <CardContent>
              <img src="/placeholder.svg?key=gaye7" alt="Students learning" className="rounded-md" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Practice</CardTitle>
              <CardDescription>Interactive exercises</CardDescription>
            </CardHeader>
            <CardContent>
              <img src="/placeholder.svg?key=f3imt" alt="Students practicing" className="rounded-md" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Master</CardTitle>
              <CardDescription>Apply to new scenarios</CardDescription>
            </CardHeader>
            <CardContent>
              <img src="/placeholder.svg?key=kgpjd" alt="Students mastering concepts" className="rounded-md" />
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <Link href="/story">
            <Button size="lg" className="gap-2">
              Start Learning
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
