import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function CompletionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-blue-50">
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="rounded-full bg-green-100 p-4">
              <CheckCircle className="h-16 w-16 text-green-600" />
            </div>
          </div>

          <h1 className="mb-4 text-4xl font-bold text-pink-600">Congratulations!</h1>

          <p className="mb-8 text-lg text-gray-700">
            You've completed the Algebraic Expressions Learning Module. You now understand the difference between
            expressions like 3n + 20 and 3(n + 20) and can apply this knowledge to real-world scenarios.
          </p>

          <Card className="mb-8 border-2 border-pink-200 p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-pink-600">Key Takeaways</h2>
            <ul className="mb-6 space-y-3 text-left">
              <li className="flex items-start gap-3">
                <div className="mt-1 text-green-600">✓</div>
                <p>Understanding the difference between fixed and variable costs in algebraic expressions</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 text-green-600">✓</div>
                <p>Recognizing when to use addition (3n + 20) versus distribution (3(n + 20))</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 text-green-600">✓</div>
                <p>Applying algebraic concepts to real-world scenarios</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 text-green-600">✓</div>
                <p>Evaluating expressions by substituting values</p>
              </li>
            </ul>

            <div className="relative h-48 w-full overflow-hidden rounded-lg">
              <Image src="/celebratory-students.png" alt="Celebration" fill className="object-cover" />
            </div>
          </Card>

          <div className="flex justify-center gap-4">
            <Link href="/">
              <Button variant="outline" className="border-pink-200 text-pink-600 hover:bg-pink-50 hover:text-pink-700">
                Back to Home
              </Button>
            </Link>
            <Link href="/lesson/1">
              <Button className="bg-pink-600 hover:bg-pink-700">Start Again</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
