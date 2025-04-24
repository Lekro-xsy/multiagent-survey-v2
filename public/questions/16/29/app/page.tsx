"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, ChevronLeft, Car, Fuel, Calculator, Check, X } from "lucide-react"

export default function MathLearningExperience() {
  const [currentPage, setCurrentPage] = useState(1)
  const [miles, setMiles] = useState(0)
  const [studentExpression, setStudentExpression] = useState("")
  const [studentExplanation, setStudentExplanation] = useState("")
  const [studentDomain, setStudentDomain] = useState("")
  const [studentDomainExplanation, setStudentDomainExplanation] = useState("")
  const [transferExpression, setTransferExpression] = useState("")
  const [transferDomain, setTransferDomain] = useState("")
  const [farTransferExpression, setFarTransferExpression] = useState("")
  const [farTransferDomain, setFarTransferDomain] = useState("")
  const [quizAnswer, setQuizAnswer] = useState("")
  const [domainAnswer, setDomainAnswer] = useState("")
  const [storyAnswer, setStoryAnswer] = useState("")

  const totalPages = 10

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const calculateGasUsed = (miles: number) => {
    return miles / 24
  }

  const calculateGasLeft = (miles: number) => {
    return 16 - miles / 24
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                Page {currentPage} of {totalPages}
              </span>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" onClick={prevPage} disabled={currentPage === 1}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={nextPage} disabled={currentPage === totalPages}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {currentPage === 1 && (
            <CardTitle className="text-2xl flex items-center gap-2">
              <Car className="h-6 w-6" /> How Far Can You Go?
            </CardTitle>
          )}

          {currentPage === 2 && (
            <CardTitle className="text-2xl flex items-center gap-2">🧩 What Information Do We Have?</CardTitle>
          )}

          {currentPage === 3 && (
            <CardTitle className="text-2xl flex items-center gap-2">📊 How Is Gas Used While Driving?</CardTitle>
          )}

          {currentPage === 4 && (
            <CardTitle className="text-2xl flex items-center gap-2">🧮 Building the Expression!</CardTitle>
          )}

          {currentPage === 5 && <CardTitle className="text-2xl flex items-center gap-2">✍️ Now You Try!</CardTitle>}

          {currentPage === 6 && (
            <CardTitle className="text-2xl flex items-center gap-2">
              🧠 For Which Values of x Does This Make Sense?
            </CardTitle>
          )}

          {currentPage === 7 && (
            <CardTitle className="text-2xl flex items-center gap-2">✍️ Your Turn: Write the Domain!</CardTitle>
          )}

          {currentPage === 8 && (
            <CardTitle className="text-2xl flex items-center gap-2">🎯 Let's Check Everything!</CardTitle>
          )}

          {currentPage === 9 && (
            <CardTitle className="text-2xl flex items-center gap-2">🔄 Try Similar Problems</CardTitle>
          )}

          {currentPage === 10 && (
            <CardTitle className="text-2xl flex items-center gap-2">📚 Reflect on Your Learning!</CardTitle>
          )}

          {currentPage === 1 && (
            <CardDescription>Let's explore a real-world math problem about planning a road trip.</CardDescription>
          )}
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Page 1: Context Story */}
          {currentPage === 1 && (
            <div className="space-y-6">
              <div className="relative rounded-lg overflow-hidden h-60 bg-slate-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="/placeholder.svg?key=o4k22"
                    alt="Car on highway with gas gauge"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg border">
                <h3 className="text-lg font-medium mb-4">You're starting a long highway trip.</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Fuel className="h-5 w-5 text-orange-500" />
                    Your gas tank holds 16 gallons
                  </li>
                  <li className="flex items-center gap-2">
                    <Car className="h-5 w-5 text-green-500" />
                    Your car travels 24 miles per gallon
                  </li>
                </ul>
                <div className="mt-4 font-medium">How much gas will be left in the tank after driving x miles?</div>
              </div>

              <Button className="w-full" onClick={nextPage}>
                Start the Engine
              </Button>
            </div>
          )}

          {/* Page 2: Breaking Down the Problem */}
          {currentPage === 2 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Given Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 p-2 bg-green-50 rounded-md">
                        <Fuel className="h-5 w-5 text-orange-500" />
                        Gas tank = 16 gallons
                      </li>
                      <li className="flex items-center gap-2 p-2 bg-green-50 rounded-md">
                        <Car className="h-5 w-5 text-green-500" />
                        24 miles per gallon
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Need to Find</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="p-2 bg-blue-50 rounded-md flex items-center gap-2">
                      <Calculator className="h-5 w-5 text-blue-500" />
                      Expression for gas left after x miles
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h3 className="font-medium text-yellow-800">Hint:</h3>
                <p className="text-yellow-700">
                  We need to figure out how much gas is used for driving x miles, then subtract from the full tank.
                </p>
              </div>
            </div>
          )}

          {/* Page 3: Visualizing Gas Usage */}
          {currentPage === 3 && (
            <div className="space-y-6">
              <div className="bg-slate-50 p-6 rounded-lg border">
                <h3 className="text-lg font-medium mb-4">Visualize Gas Consumption</h3>
                <p className="mb-4">
                  As you drive, your gas tank gradually empties. Your car uses 1 gallon for every 24 miles.
                </p>

                <div className="space-y-2 mb-4">
                  <Label htmlFor="miles">Miles Driven: {miles}</Label>
                  <Slider
                    id="miles"
                    min={0}
                    max={384}
                    step={24}
                    value={[miles]}
                    onValueChange={(value) => setMiles(value[0])}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Gas Used: {calculateGasUsed(miles).toFixed(2)} gallons</span>
                    <span>Gas Left: {calculateGasLeft(miles).toFixed(2)} gallons</span>
                  </div>

                  <div className="h-8 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-green-500 transition-all duration-500"
                      style={{ width: `${(1 - miles / 384) * 100}%` }}
                    ></div>
                  </div>

                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Full (16 gal)</span>
                    <span>Empty (0 gal)</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h3 className="font-medium text-blue-800">Key Question:</h3>
                <p className="text-blue-700">If you drive x miles, how many gallons of gas have been used?</p>
              </div>
            </div>
          )}

          {/* Page 4: Guide Building the Expression */}
          {currentPage === 4 && (
            <div className="space-y-6">
              <div className="bg-slate-50 p-6 rounded-lg border">
                <h3 className="text-lg font-medium mb-4">Building the Expression Step by Step</h3>

                <div className="space-y-4">
                  <div className="p-3 border rounded-md">
                    <h4 className="font-medium mb-2">Step 1: Calculate gallons used for x miles</h4>
                    <div className="flex items-center gap-2">
                      <span>Gallons used = </span>
                      <div className="border-b-2 border-black px-2">x</div>
                      <span>÷</span>
                      <div className="border-b-2 border-black px-2">24</div>
                      <span> = </span>
                      <div className="border-b-2 border-black px-2">x/24</div>
                    </div>
                  </div>

                  <div className="p-3 border rounded-md">
                    <h4 className="font-medium mb-2">Step 2: Calculate gas left in tank</h4>
                    <div className="flex items-center gap-2">
                      <span>Gas left = Full tank - Gallons used</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <span>Gas left = </span>
                      <div className="border-b-2 border-black px-2">16</div>
                      <span>-</span>
                      <div className="border-b-2 border-black px-2">x/24</div>
                    </div>
                  </div>

                  <div className="p-3 border-2 border-green-500 rounded-md bg-green-50">
                    <h4 className="font-medium mb-2">Final Expression:</h4>
                    <div className="flex items-center gap-2">
                      <span>Gas left = </span>
                      <div className="px-2 font-bold">16 - x/24</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h3 className="font-medium text-yellow-800">Concept Tip:</h3>
                <p className="text-yellow-700">
                  We subtract the gas used from the full tank to find how much gas remains.
                </p>
              </div>
            </div>
          )}

          {/* Page 5: Student Writes Expression */}
          {currentPage === 5 && (
            <div className="space-y-6">
              <div className="bg-slate-50 p-6 rounded-lg border">
                <h3 className="text-lg font-medium mb-4">Now It's Your Turn!</h3>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="expression" className="block mb-2">
                      Write the expression for gas left after driving x miles:
                    </Label>
                    <Input
                      id="expression"
                      placeholder="Example: 16 - x/24"
                      value={studentExpression}
                      onChange={(e) => setStudentExpression(e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="explanation" className="block mb-2">
                      Explain your reasoning:
                    </Label>
                    <textarea
                      id="explanation"
                      className="w-full p-2 border rounded-md"
                      rows={3}
                      placeholder="I divided miles driven by miles per gallon to find gallons used, then subtracted from the full tank."
                      value={studentExplanation}
                      onChange={(e) => setStudentExplanation(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>

              {studentExpression && studentExplanation && (
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-green-800">Great job!</h3>
                      <p className="text-green-700">
                        You've written an expression and explained your reasoning. Let's continue to explore the domain.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Page 6: Guide Thinking About Domain */}
          {currentPage === 6 && (
            <div className="space-y-6">
              <div className="bg-slate-50 p-6 rounded-lg border">
                <h3 className="text-lg font-medium mb-4">Understanding the Domain</h3>

                <div className="space-y-4">
                  <div className="p-3 border rounded-md">
                    <h4 className="font-medium mb-2">Critical Thinking Questions:</h4>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>Can x be negative? (Can you drive negative miles?)</li>
                      <li>What is the maximum value of x before running out of gas?</li>
                      <li>What happens if x is greater than the maximum distance?</li>
                    </ul>
                  </div>

                  <div className="p-3 border rounded-md">
                    <h4 className="font-medium mb-2">Maximum Distance Calculation:</h4>
                    <div className="space-y-2">
                      <div>Full tank = 16 gallons</div>
                      <div>Miles per gallon = 24</div>
                      <div>Maximum distance = 16 × 24 = 384 miles</div>
                    </div>
                  </div>

                  <div className="p-3 border-2 border-blue-500 rounded-md bg-blue-50">
                    <h4 className="font-medium mb-2">Domain Conclusion:</h4>
                    <div className="font-bold">0 ≤ x ≤ 384</div>
                    <div className="text-sm text-gray-600 mt-1">The miles driven must be between 0 and 384 miles.</div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="domain-slider">Explore valid values of x:</Label>
                <Slider
                  id="domain-slider"
                  min={-50}
                  max={450}
                  step={10}
                  value={[miles]}
                  onValueChange={(value) => setMiles(value[0])}
                />
                <div className="flex justify-between text-sm">
                  <span>-50</span>
                  <span>0</span>
                  <span>384</span>
                  <span>450</span>
                </div>

                <div className="mt-2 p-3 rounded-md bg-gray-100">
                  <div className="flex items-center gap-2">
                    <span>Current x value: {miles}</span>
                    {miles < 0 && (
                      <span className="text-red-500 text-sm flex items-center gap-1">
                        <X className="h-4 w-4" /> Invalid: Can't drive negative miles
                      </span>
                    )}
                    {miles > 384 && (
                      <span className="text-red-500 text-sm flex items-center gap-1">
                        <X className="h-4 w-4" /> Invalid: Out of gas
                      </span>
                    )}
                    {miles >= 0 && miles <= 384 && (
                      <span className="text-green-500 text-sm flex items-center gap-1">
                        <Check className="h-4 w-4" /> Valid value
                      </span>
                    )}
                  </div>
                  {miles >= 0 && miles <= 384 && (
                    <div className="mt-1">Gas left: {calculateGasLeft(miles).toFixed(2)} gallons</div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Page 7: Student Writes Domain */}
          {currentPage === 7 && (
            <div className="space-y-6">
              <div className="bg-slate-50 p-6 rounded-lg border">
                <h3 className="text-lg font-medium mb-4">Your Turn: Write the Domain!</h3>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="domain" className="block mb-2">
                      Write the domain of the expression (use ≤ for "less than or equal to"):
                    </Label>
                    <Input
                      id="domain"
                      placeholder="Example: 0 ≤ x ≤ 384"
                      value={studentDomain}
                      onChange={(e) => setStudentDomain(e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="domain-explanation" className="block mb-2">
                      Explain your reasoning:
                    </Label>
                    <textarea
                      id="domain-explanation"
                      className="w-full p-2 border rounded-md"
                      rows={3}
                      placeholder="The miles driven must be between 0 and 384 because..."
                      value={studentDomainExplanation}
                      onChange={(e) => setStudentDomainExplanation(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>

              {studentDomain && studentDomainExplanation && (
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-green-800">Great job!</h3>
                      <p className="text-green-700">
                        You've identified the domain and explained your reasoning. Let's check the complete solution.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Page 8: Solution and Explanation */}
          {currentPage === 8 && (
            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-medium mb-4 text-green-800">Complete Solution</h3>

                <div className="space-y-4">
                  <div className="p-3 bg-white rounded-md border">
                    <h4 className="font-medium mb-2">Expression for gas left:</h4>
                    <div className="font-bold text-lg">16 - x/24</div>
                  </div>

                  <div className="p-3 bg-white rounded-md border">
                    <h4 className="font-medium mb-2">Domain:</h4>
                    <div className="font-bold text-lg">0 ≤ x ≤ 384</div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-lg font-medium mb-4 text-blue-800">Detailed Explanation</h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Why this expression?</h4>
                    <p>
                      We start with a full tank (16 gallons) and subtract the amount used. Since the car gets 24 miles
                      per gallon, we divide the miles driven (x) by 24 to get the gallons used.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium">Why this domain?</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Lower bound: Miles driven can't be negative, so x &gt;= 0</li>
                      <li>Upper bound: The car can go at most 16 × 24 = 384 miles on a full tank</li>
                      <li>If x &gt; 384, the car would run out of gas, making the expression invalid</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Page 9: Transfer Problems */}
          {currentPage === 9 && (
            <div className="space-y-6">
              <Tabs defaultValue="near">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="near">Near Transfer</TabsTrigger>
                  <TabsTrigger value="far">Far Transfer</TabsTrigger>
                </TabsList>

                <TabsContent value="near" className="space-y-4 mt-4">
                  <div className="bg-slate-50 p-6 rounded-lg border">
                    <h3 className="text-lg font-medium mb-4">Similar Problem</h3>
                    <p className="mb-4">
                      Another car has a 20-gallon tank and travels 30 miles per gallon. Write the expression for gas
                      left after driving x miles, and state the domain.
                    </p>

                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="transfer-expression" className="block mb-2">
                          Expression:
                        </Label>
                        <Input
                          id="transfer-expression"
                          placeholder="Example: 20 - x/30"
                          value={transferExpression}
                          onChange={(e) => setTransferExpression(e.target.value)}
                        />
                      </div>

                      <div>
                        <Label htmlFor="transfer-domain" className="block mb-2">
                          Domain:
                        </Label>
                        <Input
                          id="transfer-domain"
                          placeholder="Example: 0 ≤ x ≤ 600"
                          value={transferDomain}
                          onChange={(e) => setTransferDomain(e.target.value)}
                        />
                      </div>
                    </div>

                    {transferExpression && transferDomain && (
                      <div className="mt-4 p-3 bg-green-50 rounded-md border border-green-200">
                        <div className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5" />
                          <div>
                            <p className="text-green-700">
                              Great! The expression is 20 - x/30 and the domain is 0 ≤ x ≤ 600 (since 20 gallons × 30
                              mpg = 600 miles maximum range).
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="far" className="space-y-4 mt-4">
                  <div className="bg-slate-50 p-6 rounded-lg border">
                    <h3 className="text-lg font-medium mb-4">Different Context Problem</h3>
                    <p className="mb-4">
                      A printer starts with 500 sheets of paper. It uses up 2 sheets per page printed (front and back
                      printing). Write an expression for sheets left after printing x pages, and explain the domain.
                    </p>

                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="far-transfer-expression" className="block mb-2">
                          Expression:
                        </Label>
                        <Input
                          id="far-transfer-expression"
                          placeholder="Example: 500 - 2x"
                          value={farTransferExpression}
                          onChange={(e) => setFarTransferExpression(e.target.value)}
                        />
                      </div>

                      <div>
                        <Label htmlFor="far-transfer-domain" className="block mb-2">
                          Domain:
                        </Label>
                        <Input
                          id="far-transfer-domain"
                          placeholder="Example: 0 ≤ x ≤ 250"
                          value={farTransferDomain}
                          onChange={(e) => setFarTransferDomain(e.target.value)}
                        />
                      </div>
                    </div>

                    {farTransferExpression && farTransferDomain && (
                      <div className="mt-4 p-3 bg-green-50 rounded-md border border-green-200">
                        <div className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5" />
                          <div>
                            <p className="text-green-700">
                              Excellent! The expression is 500 - 2x and the domain is 0 ≤ x ≤ 250 (since 500 sheets ÷ 2
                              sheets per page = 250 pages maximum).
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          )}

          {/* Page 10: Summary and Quiz */}
          {currentPage === 10 && (
            <div className="space-y-6">
              <div className="bg-slate-50 p-6 rounded-lg border">
                <h3 className="text-lg font-medium mb-4">Summary of Key Concepts</h3>

                <ul className="space-y-2 list-disc pl-5">
                  <li>Create expressions by subtracting consumption from starting amount</li>
                  <li>Consider real-world constraints when determining domains</li>
                  <li>Apply the same mathematical structure to different contexts</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <h3 className="text-lg font-medium mb-4 text-purple-800">Mini-Quiz</h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Which is the correct expression for gas left?</h4>
                    <div className="space-y-2 mt-2">
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="quiz-option-1"
                          name="quiz-answer"
                          value="16 - x/24"
                          checked={quizAnswer === "16 - x/24"}
                          onChange={() => setQuizAnswer("16 - x/24")}
                        />
                        <label htmlFor="quiz-option-1">16 - x/24</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="quiz-option-2"
                          name="quiz-answer"
                          value="16 - 24x"
                          checked={quizAnswer === "16 - 24x"}
                          onChange={() => setQuizAnswer("16 - 24x")}
                        />
                        <label htmlFor="quiz-option-2">16 - 24x</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="quiz-option-3"
                          name="quiz-answer"
                          value="16/24 - x"
                          checked={quizAnswer === "16/24 - x"}
                          onChange={() => setQuizAnswer("16/24 - x")}
                        />
                        <label htmlFor="quiz-option-3">16/24 - x</label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium">Why must we limit x between 0 and 384?</h4>
                    <textarea
                      className="w-full p-2 border rounded-md mt-2"
                      rows={2}
                      placeholder="Your answer..."
                      value={domainAnswer}
                      onChange={(e) => setDomainAnswer(e.target.value)}
                    ></textarea>
                  </div>

                  <div>
                    <h4 className="font-medium">
                      Creative Task: Write a real-world story that fits the expression 1000 - 3x
                    </h4>
                    <textarea
                      className="w-full p-2 border rounded-md mt-2"
                      rows={3}
                      placeholder="Your story..."
                      value={storyAnswer}
                      onChange={(e) => setStoryAnswer(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>

              {quizAnswer && domainAnswer && storyAnswer && (
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <div className="flex items-start gap-2">
                    <div className="bg-green-500 text-white p-2 rounded-full">🏆</div>
                    <div>
                      <h3 className="font-medium text-green-800">Congratulations!</h3>
                      <p className="text-green-700">
                        You've earned the "Real-World Math Master" badge for completing this learning experience!
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </CardContent>

        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={prevPage} disabled={currentPage === 1}>
            Previous
          </Button>
          <Button onClick={nextPage} disabled={currentPage === totalPages}>
            {currentPage === totalPages - 1 ? "Finish" : "Next"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
