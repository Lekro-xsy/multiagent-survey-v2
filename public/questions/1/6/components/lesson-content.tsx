"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, CheckCircle2, ShoppingCart, PenTool, Folder, Coffee } from "lucide-react"
import MathEquation from "@/components/math-equation"
import ShoppingAnimation from "@/components/shopping-animation"
import DragDropEquation from "@/components/drag-drop-equation"

interface LessonContentProps {
  currentPage: number
}

export default function LessonContent({ currentPage }: LessonContentProps) {
  const [numPacks, setNumPacks] = useState("")
  const [septTotal, setSeptTotal] = useState("")
  const [difference, setDifference] = useState("")
  const [showSolution, setShowSolution] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)

  const checkAnswer = () => {
    const isNumPacksCorrect = Number.parseFloat(numPacks) === 7
    const isSeptTotalCorrect = Math.abs(Number.parseFloat(septTotal) - 9.6) < 0.01
    const isDifferenceCorrect = Math.abs(Number.parseFloat(difference) - 1.05) < 0.01

    setIsCorrect(isNumPacksCorrect && isSeptTotalCorrect && isDifferenceCorrect)
  }

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-indigo-800">
              <PenTool className="h-6 w-6" />
              <span>Shopping for Pens</span>
            </h2>

            <div className="relative mx-auto h-48 w-full max-w-md overflow-hidden rounded-lg bg-indigo-50">
              <ShoppingAnimation />
            </div>

            <div className="rounded-lg bg-blue-50 p-4 text-indigo-900">
              <p className="mb-3 text-lg font-medium">
                In March, a customer spent $8.55 for some 12-packs of pens, priced at $1.35 each.
              </p>
              <p className="mb-3">Customers buying more than 4 packs got a $0.30 discount on each additional pack.</p>
              <p className="mb-3">In September, the price per pack rose to $1.50, with the same discount rule.</p>
              <p className="font-medium">
                If the customer bought the same number of packs, how much more did they pay in September?
              </p>
            </div>

            <Button
              className="mx-auto flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700"
              onClick={() => setShowHint(!showHint)}
            >
              <ShoppingCart className="h-4 w-4" />
              Go Shopping!
            </Button>

            {showHint && (
              <div className="rounded-md bg-indigo-100 p-3 text-sm text-indigo-800">
                <p>Think about how to find the number of packs first, then calculate the new total.</p>
              </div>
            )}
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-indigo-800">🧩 Key Information</h2>

            <Tabs defaultValue="march" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="march">March</TabsTrigger>
                <TabsTrigger value="september">September</TabsTrigger>
              </TabsList>
              <TabsContent value="march" className="rounded-md border border-indigo-200 p-4">
                <ul className="space-y-2 text-indigo-900">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Price per pack: $1.35
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Discount: $0.30 off per extra pack after 4
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Total spent: $8.55
                  </li>
                </ul>
              </TabsContent>
              <TabsContent value="september" className="rounded-md border border-indigo-200 p-4">
                <ul className="space-y-2 text-indigo-900">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Price per pack: $1.50
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Discount policy unchanged: $0.30 off per extra pack after 4
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Same number of packs as March
                  </li>
                </ul>
              </TabsContent>
            </Tabs>

            <div className="rounded-lg bg-yellow-50 p-4">
              <h3 className="mb-2 font-semibold text-amber-800">Important Tip:</h3>
              <p className="text-amber-800">We need to figure out how many packages were bought first.</p>
            </div>

            <div className="rounded-lg bg-indigo-50 p-4">
              <h3 className="mb-2 font-semibold text-indigo-800">Our Strategy:</h3>
              <ol className="ml-5 list-decimal space-y-2 text-indigo-800">
                <li>Use March information to find the number of packs bought</li>
                <li>Apply September prices to the same number of packs</li>
                <li>Calculate the difference between the two totals</li>
              </ol>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-indigo-800">📊 How Did March's Total Add Up?</h2>

            <div className="rounded-lg bg-indigo-50 p-4">
              <h3 className="mb-3 font-semibold text-indigo-800">Step-by-step visualization:</h3>

              <div className="mb-4 flex flex-wrap items-center justify-center gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="flex h-16 w-16 items-center justify-center rounded-md bg-indigo-200 text-center text-sm font-medium text-indigo-800"
                  >
                    Pack {i}
                    <br />
                    $1.35
                  </div>
                ))}
                <div className="text-xl font-bold text-indigo-800">+</div>
                {[5, 6, 7].map((i) => (
                  <div
                    key={i}
                    className="flex h-16 w-16 items-center justify-center rounded-md bg-green-200 text-center text-sm font-medium text-green-800"
                  >
                    Pack {i}
                    <br />
                    $1.05
                  </div>
                ))}
              </div>

              <div className="mb-4 rounded-md bg-white p-3 text-center">
                <p className="text-indigo-800">First 4 packs at full price: 4 × $1.35 = $5.40</p>
                <p className="text-green-800">Additional packs with discount: 3 × $1.05 = $3.15</p>
                <Separator className="my-2" />
                <p className="font-bold text-indigo-900">Total: $5.40 + $3.15 = $8.55</p>
              </div>
            </div>

            <div className="rounded-lg bg-blue-50 p-4">
              <h3 className="mb-3 font-semibold text-indigo-800">Math Focus:</h3>
              <p className="mb-2 text-indigo-800">Find the number of packs:</p>
              <p className="mb-3 text-center text-indigo-800">Let x = number of packs</p>

              <p className="mb-2 text-indigo-800">Setup equation based on cost:</p>
              <div className="mb-3 text-center">
                <MathEquation equation="Total = (Price × 4) + (Discounted Price × (x - 4))" />
              </div>

              <p className="mb-2 text-indigo-800">Substitute the values:</p>
              <div className="mb-3 text-center">
                <MathEquation equation="8.55 = (1.35 × 4) + (1.05 × (x - 4))" />
              </div>

              <p className="mb-2 text-indigo-800">Solve for x:</p>
              <div className="space-y-1 text-center">
                <MathEquation equation="8.55 = 5.40 + 1.05(x - 4)" />
                <MathEquation equation="8.55 = 5.40 + 1.05x - 4.20" />
                <MathEquation equation="8.55 = 1.20 + 1.05x" />
                <MathEquation equation="7.35 = 1.05x" />
                <MathEquation equation="x = 7" />
              </div>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-indigo-800">🧮 Model the September Purchase</h2>

            <div className="rounded-lg bg-indigo-50 p-4">
              <h3 className="mb-3 font-semibold text-indigo-800">Now we know:</h3>
              <p className="mb-3 text-center text-indigo-900 font-medium">The customer bought 7 packs of pens</p>

              <h3 className="mb-2 font-semibold text-indigo-800">September prices:</h3>
              <ul className="mb-4 space-y-2 text-indigo-800">
                <li>• Regular price: $1.50 per pack</li>
                <li>• Discounted price: $1.20 per pack (after first 4)</li>
                <li>• Same number of packs: 7</li>
              </ul>
            </div>

            <div className="rounded-lg bg-blue-50 p-4">
              <h3 className="mb-3 font-semibold text-indigo-800">Build the September equation:</h3>

              <div className="mb-4 flex flex-wrap items-center justify-center gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="flex h-16 w-16 items-center justify-center rounded-md bg-indigo-200 text-center text-sm font-medium text-indigo-800"
                  >
                    Pack {i}
                    <br />
                    $1.50
                  </div>
                ))}
                <div className="text-xl font-bold text-indigo-800">+</div>
                {[5, 6, 7].map((i) => (
                  <div
                    key={i}
                    className="flex h-16 w-16 items-center justify-center rounded-md bg-green-200 text-center text-sm font-medium text-green-800"
                  >
                    Pack {i}
                    <br />
                    $1.20
                  </div>
                ))}
              </div>

              <DragDropEquation />

              <div className="mt-4 rounded-md bg-white p-3">
                <p className="text-center text-indigo-800">Total = (1.50 × 4) + (1.20 × 3)</p>
                <p className="text-center text-indigo-800">Total = 6.00 + 3.60 = $9.60</p>
              </div>
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-indigo-800">✍️ You Try It!</h2>

            <div className="rounded-lg bg-indigo-50 p-4">
              <h3 className="mb-3 font-semibold text-indigo-800">Solve the problem:</h3>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="numPacks" className="text-indigo-800">
                    How many packs of pens did the customer buy?
                  </Label>
                  <Input
                    id="numPacks"
                    type="number"
                    placeholder="Enter number"
                    value={numPacks}
                    onChange={(e) => setNumPacks(e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="septTotal" className="text-indigo-800">
                    What was the total cost in September? ($)
                  </Label>
                  <Input
                    id="septTotal"
                    type="number"
                    step="0.01"
                    placeholder="Enter amount"
                    value={septTotal}
                    onChange={(e) => setSeptTotal(e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="difference" className="text-indigo-800">
                    How much more did the customer pay in September? ($)
                  </Label>
                  <Input
                    id="difference"
                    type="number"
                    step="0.01"
                    placeholder="Enter amount"
                    value={difference}
                    onChange={(e) => setDifference(e.target.value)}
                    className="mt-1"
                  />
                </div>

                <Button onClick={checkAnswer} className="w-full bg-indigo-600 hover:bg-indigo-700">
                  Check My Answer
                </Button>

                {isCorrect !== null && (
                  <div
                    className={`mt-2 rounded-md p-3 ${isCorrect ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                  >
                    {isCorrect ? (
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5" />
                        <span>Great job! Your answer is correct.</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <AlertCircle className="h-5 w-5" />
                        <span>Not quite right. Try again or check the solution.</span>
                      </div>
                    )}
                  </div>
                )}

                <Button variant="outline" onClick={() => setShowHint(!showHint)} className="w-full">
                  {showHint ? "Hide Hint" : "Show Hint"}
                </Button>

                {showHint && (
                  <div className="rounded-md bg-yellow-50 p-3 text-amber-800">
                    <p>Remember to:</p>
                    <ul className="ml-5 list-disc">
                      <li>Solve the March equation to find the number of packs</li>
                      <li>Use the same number of packs for September</li>
                      <li>Calculate September total using the new prices</li>
                      <li>Find the difference between the two totals</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        )

      case 6:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-indigo-800">🎯 Check Your Solution!</h2>

            <Button onClick={() => setShowSolution(!showSolution)} className="w-full bg-indigo-600 hover:bg-indigo-700">
              {showSolution ? "Hide Solution" : "Show Solution"}
            </Button>

            {showSolution && (
              <div className="rounded-lg bg-indigo-50 p-4">
                <h3 className="mb-3 font-semibold text-indigo-800">Solution Walkthrough:</h3>

                <div className="mb-4 space-y-3 rounded-md bg-white p-3">
                  <h4 className="font-medium text-indigo-800">Step 1: Solve for March</h4>
                  <p className="text-indigo-800">Set up the equation:</p>
                  <div className="text-center">
                    <MathEquation equation="8.55 = (1.35 × 4) + (1.05 × (x - 4))" />
                    <MathEquation equation="8.55 = 5.40 + 1.05(x - 4)" />
                    <MathEquation equation="8.55 = 5.40 + 1.05x - 4.20" />
                    <MathEquation equation="8.55 = 1.20 + 1.05x" />
                    <MathEquation equation="7.35 = 1.05x" />
                    <MathEquation equation="x = 7" />
                  </div>
                  <p className="font-medium text-indigo-800">The customer bought 7 packs of pens.</p>
                </div>

                <div className="mb-4 space-y-3 rounded-md bg-white p-3">
                  <h4 className="font-medium text-indigo-800">Step 2: Calculate September total</h4>
                  <p className="text-indigo-800">Using the same number of packs (7):</p>
                  <div className="text-center">
                    <MathEquation equation="Total = (1.50 × 4) + (1.20 × (7 - 4))" />
                    <MathEquation equation="Total = (1.50 × 4) + (1.20 × 3)" />
                    <MathEquation equation="Total = 6.00 + 3.60" />
                    <MathEquation equation="Total = 9.60" />
                  </div>
                </div>

                <div className="mb-4 space-y-3 rounded-md bg-white p-3">
                  <h4 className="font-medium text-indigo-800">Step 3: Find the difference</h4>
                  <div className="text-center">
                    <MathEquation equation="Difference = 9.60 - 8.55" />
                    <MathEquation equation="Difference = 1.05" />
                  </div>
                  <p className="font-medium text-indigo-800">The customer paid $1.05 more in September.</p>
                </div>

                <div className="mt-4 rounded-md bg-green-100 p-3 text-green-800">
                  <p className="font-bold">Final Answer:</p>
                  <p>The customer paid $1.05 more in September than in March.</p>
                </div>
              </div>
            )}

            <div className="rounded-lg bg-blue-50 p-4">
              <h3 className="mb-3 font-semibold text-indigo-800">Visual Recap:</h3>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-md bg-white p-3 shadow-sm">
                  <h4 className="mb-2 text-center font-medium text-indigo-800">March Receipt</h4>
                  <div className="space-y-1 text-sm">
                    <p className="flex justify-between">
                      <span>4 packs @ $1.35</span>
                      <span>$5.40</span>
                    </p>
                    <p className="flex justify-between">
                      <span>3 packs @ $1.05</span>
                      <span>$3.15</span>
                    </p>
                    <Separator className="my-1" />
                    <p className="flex justify-between font-medium">
                      <span>Total</span>
                      <span>$8.55</span>
                    </p>
                  </div>
                </div>

                <div className="rounded-md bg-white p-3 shadow-sm">
                  <h4 className="mb-2 text-center font-medium text-indigo-800">September Receipt</h4>
                  <div className="space-y-1 text-sm">
                    <p className="flex justify-between">
                      <span>4 packs @ $1.50</span>
                      <span>$6.00</span>
                    </p>
                    <p className="flex justify-between">
                      <span>3 packs @ $1.20</span>
                      <span>$3.60</span>
                    </p>
                    <Separator className="my-1" />
                    <p className="flex justify-between font-medium">
                      <span>Total</span>
                      <span>$9.60</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-md bg-indigo-100 p-3 text-center text-indigo-800">
                <p className="font-medium">Difference: $9.60 - $8.55 = $1.05</p>
              </div>
            </div>
          </div>
        )

      case 7:
        return (
          <div className="space-y-6">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-indigo-800">
              <Folder className="h-6 w-6" />
              <span>Another Shopping Challenge!</span>
            </h2>

            <div className="rounded-lg bg-indigo-50 p-4">
              <h3 className="mb-3 font-semibold text-indigo-800">Similar Discount Shopping:</h3>

              <div className="mb-4 rounded-md bg-white p-3">
                <p className="mb-3 text-indigo-800">
                  A store sells folders at $2.00 each. Buy more than 5, and you get $0.50 off for each additional
                  folder.
                </p>
                <p className="mb-3 text-indigo-800">A customer buys 8 folders.</p>
                <p className="mb-3 font-medium text-indigo-800">Questions:</p>
                <ol className="ml-5 list-decimal space-y-2 text-indigo-800">
                  <li>What's the total cost?</li>
                  <li>What would the cost be if the price rises to $2.20 but discount rule stays the same?</li>
                  <li>How much more would the customer pay after the price increase?</li>
                </ol>
              </div>

              <div className="space-y-4">
                <Button onClick={() => setShowHint(!showHint)} variant="outline" className="w-full">
                  {showHint ? "Hide Hint" : "Need a Hint?"}
                </Button>

                {showHint && (
                  <div className="rounded-md bg-yellow-50 p-3 text-amber-800">
                    <p className="mb-2 font-medium">Hint:</p>
                    <p>Use the same approach as the pen problem:</p>
                    <ul className="ml-5 list-disc">
                      <li>First 5 folders at full price</li>
                      <li>Remaining 3 folders at discounted price</li>
                      <li>Calculate both scenarios and find the difference</li>
                    </ul>
                  </div>
                )}

                <Button
                  onClick={() => setShowSolution(!showSolution)}
                  className="w-full bg-indigo-600 hover:bg-indigo-700"
                >
                  {showSolution ? "Hide Solution" : "Show Solution"}
                </Button>

                {showSolution && (
                  <div className="mt-2 space-y-3 rounded-md bg-white p-3 text-indigo-800">
                    <h4 className="font-medium">Solution:</h4>

                    <div>
                      <p className="font-medium">Original price:</p>
                      <div className="text-center">
                        <MathEquation equation="Total = (2.00 × 5) + (1.50 × (8 - 5))" />
                        <MathEquation equation="Total = 10.00 + 4.50" />
                        <MathEquation equation="Total = $14.50" />
                      </div>
                    </div>

                    <div>
                      <p className="font-medium">After price increase:</p>
                      <div className="text-center">
                        <MathEquation equation="Total = (2.20 × 5) + (1.70 × (8 - 5))" />
                        <MathEquation equation="Total = 11.00 + 5.10" />
                        <MathEquation equation="Total = $16.10" />
                      </div>
                    </div>

                    <div>
                      <p className="font-medium">Difference:</p>
                      <div className="text-center">
                        <MathEquation equation="Difference = 16.10 - 14.50" />
                        <MathEquation equation="Difference = $1.60" />
                      </div>
                      <p className="mt-2 font-medium text-green-700">
                        The customer would pay $1.60 more after the price increase.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )

      case 8:
        return (
          <div className="space-y-6">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-indigo-800">
              <Coffee className="h-6 w-6" />
              <span>Same Math, Different Story!</span>
            </h2>

            <div className="rounded-lg bg-indigo-50 p-4">
              <h3 className="mb-3 font-semibold text-indigo-800">Far Transfer — Different Setting, Same Math:</h3>

              <div className="mb-4 rounded-md bg-white p-3">
                <p className="mb-3 text-indigo-800">
                  At a bakery, muffins cost $1.80 each. Buy more than 6, and extra muffins cost $1.50 each.
                </p>
                <p className="mb-3 text-indigo-800">
                  Later, the price rises to $2.00 each, with the same discount policy.
                </p>
                <p className="mb-3 font-medium text-indigo-800">
                  Question: How much more would buying 9 muffins cost after the price rise?
                </p>
              </div>

              <div className="space-y-4">
                <div className="rounded-md bg-blue-100 p-3">
                  <h4 className="mb-2 font-medium text-indigo-800">Your Turn to Solve:</h4>
                  <p className="text-indigo-800">
                    Try to solve this problem using the same approach we've been practicing.
                  </p>
                  <p className="mt-2 text-sm text-indigo-700">
                    Remember to identify the full-price items and the discounted items in each scenario.
                  </p>
                </div>

                <Button
                  onClick={() => setShowSolution(!showSolution)}
                  className="w-full bg-indigo-600 hover:bg-indigo-700"
                >
                  {showSolution ? "Hide Solution" : "Show Solution"}
                </Button>

                {showSolution && (
                  <div className="mt-2 space-y-3 rounded-md bg-white p-3 text-indigo-800">
                    <h4 className="font-medium">Solution:</h4>

                    <div>
                      <p className="font-medium">Original price:</p>
                      <div className="text-center">
                        <MathEquation equation="Total = (1.80 × 6) + (1.50 × (9 - 6))" />
                        <MathEquation equation="Total = 10.80 + 4.50" />
                        <MathEquation equation="Total = $15.30" />
                      </div>
                    </div>

                    <div>
                      <p className="font-medium">After price increase:</p>
                      <div className="text-center">
                        <MathEquation equation="Total = (2.00 × 6) + (1.70 × (9 - 6))" />
                        <MathEquation equation="Total = 12.00 + 5.10" />
                        <MathEquation equation="Total = $17.10" />
                      </div>
                    </div>

                    <div>
                      <p className="font-medium">Difference:</p>
                      <div className="text-center">
                        <MathEquation equation="Difference = 17.10 - 15.30" />
                        <MathEquation equation="Difference = $1.80" />
                      </div>
                      <p className="mt-2 font-medium text-green-700">
                        The customer would pay $1.80 more after the price increase.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="rounded-lg bg-yellow-50 p-4">
              <h3 className="mb-2 font-semibold text-amber-800">Key Insight:</h3>
              <p className="text-amber-800">
                Notice how the same mathematical structure applies to different scenarios:
              </p>
              <ul className="ml-5 list-disc space-y-1 text-amber-800">
                <li>Pens with discount after 4 packs</li>
                <li>Folders with discount after 5 folders</li>
                <li>Muffins with discount after 6 muffins</li>
              </ul>
              <p className="mt-2 text-amber-800">
                The formula is always: (Full price × threshold) + (Discounted price × remaining items)
              </p>
            </div>
          </div>
        )

      case 9:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-indigo-800">📚 Wrap Up and Reflect</h2>

            <div className="rounded-lg bg-indigo-50 p-4">
              <h3 className="mb-3 font-semibold text-indigo-800">Key Learning Points:</h3>

              <ul className="mb-4 space-y-2 text-indigo-800">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  Identify multi-step pricing structures
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  Carefully model full-price vs. discount-price items
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  Compare total costs between two scenarios
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  Apply the same mathematical structure to different contexts
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-blue-50 p-4">
              <h3 className="mb-3 font-semibold text-indigo-800">Mini-Quiz:</h3>

              <div className="space-y-4">
                <div>
                  <p className="mb-2 font-medium text-indigo-800">
                    1. When does the discount apply in our pen problem?
                  </p>
                  <RadioGroup defaultValue="after4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="all" id="all" />
                      <Label htmlFor="all">To all packs purchased</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="after4" id="after4" />
                      <Label htmlFor="after4">Only to packs after the first 4</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="first4" id="first4" />
                      <Label htmlFor="first4">Only to the first 4 packs</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <p className="mb-2 font-medium text-indigo-800">
                    2. True or False: The discount applies to all packs bought.
                  </p>
                  <RadioGroup defaultValue="false">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="true" id="true" />
                      <Label htmlFor="true">True</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="false" id="false" />
                      <Label htmlFor="false">False</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <p className="mb-2 font-medium text-indigo-800">
                    3. What's the general formula for these types of problems?
                  </p>
                  <div className="rounded-md bg-white p-3 text-center">
                    <MathEquation equation="Total = (Full Price × Threshold) + (Discounted Price × (Total Items - Threshold))" />
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-green-50 p-4 text-center">
              <h3 className="mb-2 font-semibold text-green-800">Congratulations!</h3>
              <p className="mb-4 text-green-800">You've earned the "Smart Shopper Math Badge" 🏆</p>
              <p className="text-green-800">
                You can now apply these mathematical modeling skills to solve real-world discount problems!
              </p>
            </div>
          </div>
        )

      default:
        return <div>Page not found</div>
    }
  }

  return <div className="min-h-[400px]">{renderPage()}</div>
}
