import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-white py-4 shadow-sm">
        <div className="container flex items-center justify-between">
          <h1 className="text-xl font-bold">Math Learning Journey</h1>
        </div>
      </header>
      <main className="container flex-1 py-12">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight">Commission-Based Selling</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Learn how to model and solve real-world math problems with this interactive lesson
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pages.map((page, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <CardTitle>{page.title}</CardTitle>
                  <CardDescription>{page.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-32 rounded-md bg-muted/50 flex items-center justify-center">{page.icon}</div>
                </CardContent>
                <CardFooter>
                  <Link href={page.href} className="w-full">
                    <Button className="w-full">
                      Start Learning
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <footer className="border-t bg-muted/50 py-6">
        <div className="container text-center text-sm text-muted-foreground">Interactive Math Learning Experience</div>
      </footer>
    </div>
  )
}

const pages = [
  {
    title: "Commission-Based Selling",
    description: "Learn about real-world math applications",
    href: "/lesson/context",
    icon: <span className="text-4xl">💼</span>,
  },
  {
    title: "Mathematical Modeling",
    description: "Translate problems into expressions",
    href: "/lesson/context",
    icon: <span className="text-4xl">🧮</span>,
  },
  {
    title: "Problem Solving",
    description: "Apply concepts to new scenarios",
    href: "/lesson/context",
    icon: <span className="text-4xl">🧠</span>,
  },
]
