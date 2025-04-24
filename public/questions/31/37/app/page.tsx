import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="container flex min-h-screen flex-col items-center justify-center py-12">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Inequality Learning Journey</h1>
        <p className="mb-8 text-lg text-muted-foreground">
          Learn how to solve inequalities through an interactive drama club fundraising scenario
        </p>
      </div>

      <div className="grid w-full max-w-5xl gap-6 md:grid-cols-3">
        {pages.map((page, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{page.title}</CardTitle>
              <CardDescription>{page.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="aspect-video rounded-md bg-muted/50 flex items-center justify-center">{page.icon}</div>
            </CardContent>
            <CardFooter>
              <Link href={page.href} className="w-full">
                <Button className="w-full">{index === 0 ? "Start Learning" : "Continue"}</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

const pages = [
  {
    title: "The Drama Club's Fundraising Challenge",
    description: "Learn about the context and problem",
    href: "/context",
    icon: <span className="text-4xl">🎭</span>,
  },
  {
    title: "Breaking Down the Problem",
    description: "Identify the important information",
    href: "/breakdown",
    icon: <span className="text-4xl">🧩</span>,
  },
  {
    title: "Visualizing the Inequality",
    description: "Understand what the inequality means",
    href: "/visualize",
    icon: <span className="text-4xl">📊</span>,
  },
]
