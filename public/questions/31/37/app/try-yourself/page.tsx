import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { TryYourself } from "@/components/try-yourself"

export default function TryYourselfPage() {
  return (
    <div className="container max-w-4xl py-12">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">✍️ Try It Yourself!</h1>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Page 5/9</span>
            <Progress value={55} className="w-24" />
          </div>
        </div>
      </div>

      <Card className="mb-8 p-6">
        <h2 className="mb-4 text-2xl font-semibold">Solve the Problem</h2>
        <div className="mb-6 rounded-md bg-muted p-4">
          <p className="font-medium">Let's check if selling 147 tickets is enough to meet the fundraising goal.</p>
          <div className="mt-2 flex items-center justify-center">
            <div className="text-xl font-medium">
              2.80<i>x</i> ≥ 395, where <i>x</i> = 147
            </div>
          </div>
        </div>

        <TryYourself />
      </Card>

      <div className="flex justify-between">
        <Link href="/guided-steps">
          <Button variant="outline">Previous: Guided Steps</Button>
        </Link>
        <Link href="/solution">
          <Button>Next: Check the Solution</Button>
        </Link>
      </div>
    </div>
  )
}
