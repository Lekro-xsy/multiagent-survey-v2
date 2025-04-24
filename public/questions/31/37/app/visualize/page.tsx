import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { InequalityVisualizer } from "@/components/inequality-visualizer"

export default function VisualizePage() {
  return (
    <div className="container max-w-4xl py-12">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">📊 Understanding the Goal</h1>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Page 3/9</span>
            <Progress value={33} className="w-24" />
          </div>
        </div>
      </div>

      <Card className="mb-8 p-6">
        <h2 className="mb-4 text-2xl font-semibold">Visualizing the Inequality</h2>
        <div className="mb-6 rounded-md bg-muted p-4">
          <p className="font-medium">"At least" means "greater than or equal to" (≥).</p>
          <p className="mt-2">
            The drama club needs to raise <span className="font-bold">at least $395</span>, which means the total amount
            must be <span className="font-bold">greater than or equal to $395</span>.
          </p>
        </div>

        <div className="mb-4 flex items-center justify-center">
          <div className="text-3xl font-medium">
            2.80<i>x</i> ≥ 395
          </div>
        </div>

        <div className="rounded-md bg-muted p-4">
          <p>
            <span className="font-semibold">Where:</span> <i>x</i> represents the number of tickets they need to sell
          </p>
        </div>
      </Card>

      <Card className="mb-8 p-6">
        <h2 className="mb-4 text-2xl font-semibold">Try Different Values</h2>
        <p className="mb-6 text-muted-foreground">
          Move the slider to see how many tickets lead to different fundraising amounts.
        </p>
        <InequalityVisualizer ticketPrice={2.8} goal={395} />
      </Card>

      <div className="flex justify-between">
        <Link href="/breakdown">
          <Button variant="outline">Previous: Breaking Down the Problem</Button>
        </Link>
        <Link href="/guided-steps">
          <Button>Next: Guided Steps for Testing</Button>
        </Link>
      </div>
    </div>
  )
}
