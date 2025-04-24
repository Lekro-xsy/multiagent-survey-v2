import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { DragDropFacts } from "@/components/drag-drop-facts"

export default function BreakdownPage() {
  return (
    <div className="container max-w-4xl py-12">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">🧩 What Are We Given?</h1>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Page 2/9</span>
            <Progress value={22} className="w-24" />
          </div>
        </div>
      </div>

      <Card className="mb-8 p-6">
        <h2 className="mb-4 text-2xl font-semibold">Important Facts</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-3 rounded-md bg-muted p-4">
            <span className="text-2xl">🎟️</span>
            <p className="font-medium">
              Ticket price: <span className="text-primary font-bold">$2.80</span> each
            </p>
          </div>
          <div className="flex items-center gap-3 rounded-md bg-muted p-4">
            <span className="text-2xl">🎯</span>
            <p className="font-medium">
              Goal: <span className="text-primary font-bold">at least $395</span>
            </p>
          </div>
        </div>
      </Card>

      <Card className="mb-8 p-6">
        <h2 className="mb-4 text-2xl font-semibold">The Inequality</h2>
        <div className="flex items-center justify-center p-4">
          <div className="text-3xl font-medium">
            2.80<i>x</i> ≥ 395
          </div>
        </div>
        <div className="mt-4 rounded-md bg-muted p-4">
          <p>
            <span className="font-semibold">Where:</span> <i>x</i> represents the number of tickets they need to sell
          </p>
        </div>
      </Card>

      <Card className="mb-8 p-6">
        <h2 className="mb-4 text-2xl font-semibold">Organize the Information</h2>
        <p className="mb-4 text-muted-foreground">Drag each piece of information to the correct category.</p>
        <DragDropFacts />
      </Card>

      <div className="flex justify-between">
        <Link href="/context">
          <Button variant="outline">Previous: Context Story</Button>
        </Link>
        <Link href="/visualize">
          <Button>Next: Visualizing the Inequality</Button>
        </Link>
      </div>
    </div>
  )
}
