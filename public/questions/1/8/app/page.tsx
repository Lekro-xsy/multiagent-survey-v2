"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BookOpen, Calculator, CheckCircle, ChevronRight, Store } from "lucide-react"

export default function BookstoreDiscount() {
  const [activeTab, setActiveTab] = useState("context")
  const [numBooks, setNumBooks] = useState("")
  const [newTotal, setNewTotal] = useState("")
  const [savings, setSavings] = useState("")
  const [showSolution, setShowSolution] = useState(false)

  const goToNextTab = (current: string) => {
    const tabs = ["context", "breakdown", "modeling", "setup", "solve", "solution", "transfer1", "transfer2", "summary"]
    const currentIndex = tabs.indexOf(current)
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1])
    }
  }

  const checkAnswer = () => {
    if (
      numBooks === "12" &&
      (Number.parseFloat(newTotal) === 12.05 || newTotal === "12.05") &&
      (Number.parseFloat(savings) === 1.8 || savings === "1.80" || savings === "1.8")
    ) {
      setShowSolution(true)
    }
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">📚🏷️ How Much Do You Save?</h1>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-4xl mx-auto">
        <TabsList className="grid grid-cols-3 md:grid-cols-9 mb-8">
          <TabsTrigger value="context">1</TabsTrigger>
          <TabsTrigger value="breakdown">2</TabsTrigger>
          <TabsTrigger value="modeling">3</TabsTrigger>
          <TabsTrigger value="setup">4</TabsTrigger>
          <TabsTrigger value="solve">5</TabsTrigger>
          <TabsTrigger value="solution">6</TabsTrigger>
          <TabsTrigger value="transfer1">7</TabsTrigger>
          <TabsTrigger value="transfer2">8</TabsTrigger>
          <TabsTrigger value="summary">9</TabsTrigger>
        </TabsList>

        {/* Page 1: Context Story */}
        <TabsContent value="context">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Context Story — Buying Books
              </CardTitle>
              <CardDescription>Let's understand the problem</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <img
                    src="/used-bookstore-browse.png"
                    alt="A customer browsing stacks of second-hand books at a cozy bookstore"
                    className="rounded-lg w-full h-auto mb-4"
                  />
                </div>
                <div className="flex-1 space-y-4">
                  <p>At a used-book store, paperback books sell for $1.30 each.</p>
                  <p>A $0.25 discount applies for every book beyond 5 bought.</p>
                  <p>Last week, a customer spent $13.85 for some books.</p>
                  <p>This week, the store has a sale:</p>
                  <p>Each book is $1.15, with the same discount rule.</p>
                  <p className="font-bold">How much would the customer save if they bought the same books this week?</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={() => goToNextTab("context")}>
                Go Book Shopping! <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Page 2: Breaking Down the Problem */}
        <TabsContent value="breakdown">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                Organizing the Information
              </CardTitle>
              <CardDescription>Let's break down what we know</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4 border p-4 rounded-lg">
                  <h3 className="font-bold text-lg">Old Purchase (Last Week)</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Regular price: $1.30 per book</li>
                    <li>First 5 books: Full price</li>
                    <li>After 5 books: $0.25 discount per book</li>
                    <li>Total spent: $13.85</li>
                  </ul>
                </div>
                <div className="space-y-4 border p-4 rounded-lg">
                  <h3 className="font-bold text-lg">Sale Purchase (This Week)</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Sale price: $1.15 per book</li>
                    <li>First 5 books: Full sale price</li>
                    <li>After 5 books: $0.25 discount per book</li>
                    <li>Total spent: ? (To be calculated)</li>
                  </ul>
                </div>
                <div className="md:col-span-2 bg-amber-50 p-4 rounded-lg">
                  <h3 className="font-bold text-lg">Important Tip:</h3>
                  <p>
                    We need to first find how many books the customer bought last week before we can calculate the
                    savings.
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={() => goToNextTab("breakdown")}>
                Next Step <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Page 3: Modeling Last Week's Purchase */}
        <TabsContent value="modeling">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                How Many Books Were Bought?
              </CardTitle>
              <CardDescription>Let's model last week's purchase</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-bold">Step-by-step modeling:</h3>
                  <ol className="list-decimal pl-5 space-y-3">
                    <li>Pay full price ($1.30) for first 5 books</li>
                    <li>Pay discounted price ($1.30 - $0.25 = $1.05) for additional books</li>
                    <li>Let x = total number of books bought</li>
                    <li>Set up an equation to find x</li>
                  </ol>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">The Equation:</h3>
                  <div className="space-y-4">
                    <p>Total = (Price per book × First 5 books) + (Discounted price × Additional books)</p>
                    <p>$13.85 = ($1.30 × 5) + ($1.05 × (x - 5))</p>
                    <p>$13.85 = $6.50 + $1.05(x - 5)</p>
                    <p>$13.85 - $6.50 = $1.05(x - 5)</p>
                    <p>$7.35 = $1.05(x - 5)</p>
                    <p>$7.35 ÷ $1.05 = x - 5</p>
                    <p>7 = x - 5</p>
                    <p className="font-bold">x = 12</p>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="font-bold">The customer bought 12 books last week.</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={() => goToNextTab("modeling")}>
                Next Step <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Page 4: Guided Setup for This Week's Purchase */}
        <TabsContent value="setup">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Store className="h-5 w-5" />
                Setting Up the Sale Price Calculation
              </CardTitle>
              <CardDescription>Let's calculate the cost with the sale price</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-bold">This week's prices:</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Full price this week: $1.15 per book</li>
                    <li>Discounted price after 5 books: $1.15 - $0.25 = $0.90 per additional book</li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Setting up the equation:</h3>
                  <div className="space-y-4">
                    <p>New Total = (Sale price × First 5 books) + (Discounted sale price × Additional books)</p>
                    <p>New Total = ($1.15 × 5) + ($0.90 × (12 - 5))</p>
                    <p>New Total = $5.75 + $0.90 × 7</p>
                    <p>New Total = $5.75 + $6.30</p>
                    <p>New Total = $12.05</p>
                  </div>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg">
                  <h3 className="font-bold">Calculating the savings:</h3>
                  <p>Savings = Old Total - New Total</p>
                  <p>Savings = $13.85 - $12.05 = $1.80</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={() => goToNextTab("setup")}>
                Your Turn to Solve <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Page 5: Student Writes and Solves */}
        <TabsContent value="solve">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                Your Turn to Solve!
              </CardTitle>
              <CardDescription>Try solving the problem yourself</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="numBooks">How many books did the customer buy?</Label>
                    <Input
                      id="numBooks"
                      value={numBooks}
                      onChange={(e) => setNumBooks(e.target.value)}
                      placeholder="Enter number of books"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="newTotal">What is the new total cost this week?</Label>
                    <Input
                      id="newTotal"
                      value={newTotal}
                      onChange={(e) => setNewTotal(e.target.value)}
                      placeholder="Enter dollar amount (e.g., 12.05)"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="savings">How much would the customer save?</Label>
                    <Input
                      id="savings"
                      value={savings}
                      onChange={(e) => setSavings(e.target.value)}
                      placeholder="Enter dollar amount (e.g., 1.80)"
                    />
                  </div>
                </div>

                {showSolution && (
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <p className="font-bold text-green-600">Correct! Great job!</p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={checkAnswer}>
                Check Answer
              </Button>
              <Button onClick={() => goToNextTab("solve")}>
                See Full Solution <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Page 6: Reveal Full Solution and Explanation */}
        <TabsContent value="solution">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Check Your Work!
              </CardTitle>
              <CardDescription>Full solution and explanation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Step 1: Find how many books were bought</h3>
                  <div className="space-y-2">
                    <p>Set up: ($1.30 × 5) + ($1.05 × (x - 5)) = $13.85</p>
                    <p>Solve: $6.50 + $1.05(x - 5) = $13.85</p>
                    <p>$1.05(x - 5) = $7.35</p>
                    <p>x - 5 = 7</p>
                    <p className="font-bold">x = 12</p>
                    <p>Customer bought 12 books.</p>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Step 2: Calculate the sale total</h3>
                  <div className="space-y-2">
                    <p>($1.15 × 5) + ($0.90 × 7) = $5.75 + $6.30 = $12.05</p>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Step 3: Calculate the savings</h3>
                  <div className="space-y-2">
                    <p>$13.85 - $12.05 = $1.80</p>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-bold">Final Answer:</h3>
                  <p>The customer would save $1.80 if they bought the same books this week.</p>
                </div>

                <div className="flex justify-center">
                  <div className="flex gap-4">
                    <div className="border p-4 rounded-lg w-48">
                      <h4 className="font-bold text-center mb-2">Last Week</h4>
                      <p className="text-center">12 Books</p>
                      <p className="text-center font-bold">$13.85</p>
                    </div>
                    <div className="border p-4 rounded-lg w-48">
                      <h4 className="font-bold text-center mb-2">This Week</h4>
                      <p className="text-center">12 Books</p>
                      <p className="text-center font-bold">$12.05</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={() => goToNextTab("solution")}>
                Try Similar Problem <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Page 7: Near Transfer — Similar Bookstore Challenge */}
        <TabsContent value="transfer1">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Another Bookstore Discount!
              </CardTitle>
              <CardDescription>Try a similar problem</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">New Scenario:</h3>
                  <p>A bookstore sells novels for $2.00 each, with a $0.40 discount after 6 books.</p>
                  <p>Last week a customer spent $18.80.</p>
                  <p>This week, the novel price drops to $1.80.</p>
                  <p className="font-bold">How much would they save buying the same number of novels?</p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold">Try to solve this problem:</h3>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Find how many novels the customer bought last week</li>
                    <li>Calculate the new total with the sale price</li>
                    <li>Find the savings</li>
                  </ol>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg">
                  <h3 className="font-bold">Hint:</h3>
                  <p>Use the same approach as before. First set up an equation to find the number of books.</p>
                  <p>For the first 6 books: Full price of $2.00 each</p>
                  <p>For additional books: Discounted price of $1.60 each</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={() => goToNextTab("transfer1")}>
                Try Different Context <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Page 8: Far Transfer — Different Context, Same Math */}
        <TabsContent value="transfer2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Store className="h-5 w-5" />
                Same Math, New Story!
              </CardTitle>
              <CardDescription>Apply the same math to a different context</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">New Scenario:</h3>
                  <p>A bakery sells muffins for $2.50 each, with a $0.50 discount after 5 muffins.</p>
                  <p>Last week, a customer spent $22.50.</p>
                  <p>This week, the muffin price drops to $2.20.</p>
                  <p className="font-bold">How much would they save?</p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold">Recognize the pattern:</h3>
                  <p>
                    This problem has the same mathematical structure as our bookstore problems, but in a different
                    context.
                  </p>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Find how many muffins the customer bought last week</li>
                    <li>Calculate the new total with the sale price</li>
                    <li>Find the savings</li>
                  </ol>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg">
                  <h3 className="font-bold">Key insight:</h3>
                  <p>The mathematical model is the same regardless of whether we're buying books or muffins!</p>
                  <p>This is the power of mathematical modeling - the same approach works across different contexts.</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={() => goToNextTab("transfer2")}>
                Summary <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Page 9: Summary and Mini-Quiz */}
        <TabsContent value="summary">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Review and Reflect!
              </CardTitle>
              <CardDescription>Summarize what we've learned</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Key Learning Points:</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Understand layered pricing (full price + discount rules)</li>
                    <li>Solve for quantities first, then totals</li>
                    <li>Always model multi-step purchases carefully</li>
                    <li>The same mathematical model can be applied to different real-world contexts</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold">Mini-Quiz:</h3>
                  <div className="space-y-4">
                    <div className="p-3 border rounded-lg">
                      <p className="font-medium">
                        What's the formula to calculate total cost when discounts apply after N items?
                      </p>
                      <div className="mt-2 space-y-2">
                        <div className="flex items-center">
                          <input type="radio" id="q1a" name="q1" className="mr-2" />
                          <label htmlFor="q1a">Total = (Regular price × All items)</label>
                        </div>
                        <div className="flex items-center">
                          <input type="radio" id="q1b" name="q1" className="mr-2" />
                          <label htmlFor="q1b">
                            Total = (Regular price × N) + (Discounted price × (Total items - N))
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="radio" id="q1c" name="q1" className="mr-2" />
                          <label htmlFor="q1c">Total = (Regular price × N) - (Discount × All items)</label>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 border rounded-lg">
                      <p className="font-medium">True or False: "The discount applies to all books purchased."</p>
                      <div className="mt-2 space-y-2">
                        <div className="flex items-center">
                          <input type="radio" id="q2a" name="q2" className="mr-2" />
                          <label htmlFor="q2a">True</label>
                        </div>
                        <div className="flex items-center">
                          <input type="radio" id="q2b" name="q2" className="mr-2" />
                          <label htmlFor="q2b">False</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <h3 className="font-bold mb-2">Congratulations!</h3>
                  <p>You've earned the "Smart Shopper Saver" badge! 🏆</p>
                  <p className="text-sm mt-2">You now understand how to model and solve multi-step pricing problems.</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button onClick={() => setActiveTab("context")}>Start Over</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
