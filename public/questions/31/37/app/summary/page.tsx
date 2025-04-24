import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { MiniQuiz } from "@/components/mini-quiz"

export default function SummaryPage() {
  return (
    <div className="container max-w-4xl py-12">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">📚 Wrap Up and Reflect!</h1>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Page 9/9</span>
            <Progress value={100} className="w-24" />
          </div>
        </div>
      </div>

      <Card className="mb-8 p-6">
        <h2 className="mb-4 text-2xl font-semibold">Key Takeaways</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-3 rounded-md bg-muted p-4">
            <span className="text-2xl">📝</span>
            <p className="font-medium">Understand inequalities with "at least" and "no less than" as meaning ≥.</p>
          </div>

          <div className="flex items-center gap-3 rounded-md bg-muted p-4">
            <span className="text-2xl">🧮</span>
            <p className="font-medium">Test numbers by substituting into inequalities and comparing.</p>
          </div>

          <div className="flex items-center gap-3 rounded-md bg-muted p-4">
            <span className="text-2xl">🌎</span>
            <p className="font-medium">Interpret real-world contexts correctly with mathematical models.</p>
          </div>
        </div>
      </Card>

      <Card className="mb-8 p-6">
        <h2 className="mb-4 text-2xl font-semibold">Mini-Quiz</h2>
        <p className="mb-6 text-muted-foreground">Test your understanding with these quick questions.</p>
        <MiniQuiz />
      </Card>

      <Card className="mb-8 p-6">
        <h2 className="mb-4 text-2xl font-semibold">Create Your Own</h2>
        <p className="mb-4 text-muted-foreground">Create your own scenario leading to an inequality like:</p>
        <div className="flex items-center justify-center p-4">
          <div className="text-2xl font-medium">
            5<i>x</i> ≥ 250
          </div>
        </div>
        <div className="mt-4 rounded-md bg-muted p-4">
          <p className="font-medium">Think about a real-world situation where this inequality would be useful.</p>
        </div>
      </Card>

      <Card className="mb-8 p-6 flex flex-col items-center justify-center">
        <div className="h-24 w-24 rounded-full bg-primary/20 flex items-center justify-center mb-4">
          <span className="text-5xl">🏆</span>
        </div>
        <h2 className="text-2xl font-semibold text-center">Congratulations!</h2>
        <p className="text-center mt-2">You've earned the "Inequality Solver" badge!</p>
      </Card>

      <div className="flex justify-between">
        <Link href="/far-transfer">
          <Button variant="outline">Previous: Different Situation</Button>
        </Link>
        <Link href="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
    </div>
  )
}
