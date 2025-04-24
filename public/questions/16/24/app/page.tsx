"use client"

import { useState } from "react"
import { ChevronRight, ChevronLeft, Check, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FootballField } from "@/components/football-field"
import { HighlightShapes } from "@/components/highlight-shapes"
import { CalculationStep } from "@/components/calculation-step"
import { TransferProblem } from "@/components/transfer-problem"

export default function FootballFieldMath() {
  const [currentPage, setCurrentPage] = useState(1)
  const [radiusAnswer, setRadiusAnswer] = useState("")
  const [perimeterAnswer, setPerimeterAnswer] = useState("")
  const [areaAnswer, setAreaAnswer] = useState("")
  const [showHint, setShowHint] = useState(false)
  const [showSolution, setShowSolution] = useState(false)
  const [earnedBadge, setEarnedBadge] = useState(false)

  const totalPages = 9

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
      setShowHint(false)
      setShowSolution(false)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
      setShowHint(false)
      setShowSolution(false)
    }
  }

  const checkAnswers = () => {
    // Simple check - in a real app you'd want more robust validation
    if (
      Number.parseFloat(radiusAnswer) === 25 &&
      Math.abs(Number.parseFloat(perimeterAnswer) - 397) < 1 &&
      Math.abs(Number.parseFloat(areaAnswer) - 7962.5) < 1
    ) {
      setEarnedBadge(true)
    }
    setShowSolution(true)
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          {currentPage === 1 && (
            <>
              <CardTitle className="text-2xl">🏟️ Designing the Cougars&apos; Football Field</CardTitle>
              <CardDescription>
                Help the Cougars figure out the perimeter and area of their playing field
              </CardDescription>
            </>
          )}

          {currentPage === 2 && (
            <>
              <CardTitle className="text-2xl">🧩 Key Measurements</CardTitle>
              <CardDescription>Understanding the dimensions of our football field</CardDescription>
            </>
          )}

          {currentPage === 3 && (
            <>
              <CardTitle className="text-2xl">🖼️ See the Shapes</CardTitle>
              <CardDescription>Visualizing the composite shape of the field</CardDescription>
            </>
          )}

          {currentPage === 4 && (
            <>
              <CardTitle className="text-2xl">📏 What&apos;s the Radius of Each End?</CardTitle>
              <CardDescription>Finding the radius of the semicircular ends</CardDescription>
            </>
          )}

          {currentPage === 5 && (
            <>
              <CardTitle className="text-2xl">🛤️ Finding the Field&apos;s Border Length</CardTitle>
              <CardDescription>Calculating the perimeter of the entire field</CardDescription>
            </>
          )}

          {currentPage === 6 && (
            <>
              <CardTitle className="text-2xl">📏 How Big Is the Field?</CardTitle>
              <CardDescription>Determining the total area of the field</CardDescription>
            </>
          )}

          {currentPage === 7 && (
            <>
              <CardTitle className="text-2xl">🎯 Let&apos;s Check Your Work!</CardTitle>
              <CardDescription>Complete solution walkthrough</CardDescription>
            </>
          )}

          {currentPage === 8 && (
            <>
              <CardTitle className="text-2xl">🏃‍♂️ Running Track Challenge</CardTitle>
              <CardDescription>Apply what you&apos;ve learned to a similar problem</CardDescription>
            </>
          )}

          {currentPage === 9 && (
            <>
              <CardTitle className="text-2xl">🌊 Water Park Lazy River</CardTitle>
              <CardDescription>Apply your knowledge to a different context</CardDescription>
            </>
          )}
        </CardHeader>

        <CardContent className="space-y-6">
          {currentPage === 1 && (
            <div className="space-y-6">
              <div className="aspect-video bg-green-100 rounded-lg overflow-hidden relative">
                <FootballField />
                <div className="absolute bottom-4 left-4 bg-white/80 p-3 rounded-lg">
                  <p className="font-medium">The Cougars are ready for their big season!</p>
                  <p>Their football field has a rectangular part and curved ends like half-circles.</p>
                  <p className="mt-2">Can you help figure out the perimeter and area of their full playing field?</p>
                </div>
              </div>
            </div>
          )}

          {currentPage === 2 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Given Information:</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Rectangle width: <span className="font-medium">50 yards</span>
                    </li>
                    <li>
                      Rectangle length: <span className="font-medium">120 yards</span>
                    </li>
                    <li>
                      Use π ≈ <span className="font-medium">3.14</span>
                    </li>
                    <li>Ends are semicircles (half circles)</li>
                  </ul>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Important Relationship:</h3>
                  <p>The width of the rectangle equals the diameter of each semicircle.</p>
                  <div className="mt-4 flex justify-center">
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <p className="text-center">Width = 50 yards = Diameter</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="aspect-video bg-green-100 rounded-lg overflow-hidden">
                <FootballField showDimensions={true} />
              </div>
            </div>
          )}

          {currentPage === 3 && (
            <div className="space-y-6">
              <div className="aspect-video bg-green-100 rounded-lg overflow-hidden">
                <HighlightShapes />
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Key Concept:</h3>
                <p>
                  This football field is a <span className="font-medium">composite shape</span> made up of:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>One rectangle (middle section)</li>
                  <li>Two semicircles (the ends)</li>
                </ul>
                <p className="mt-3">The width of the rectangle equals the diameter of the semicircles.</p>
                <p className="mt-1">Therefore, the radius of each semicircle = half of the width.</p>
              </div>
            </div>
          )}

          {currentPage === 4 && (
            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Part A: Find the Radius</h3>
                <div className="space-y-4">
                  <p>We know:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Width of rectangle = 50 yards</li>
                    <li>Width = Diameter of semicircles</li>
                  </ul>

                  <div className="bg-white p-3 rounded-lg">
                    <p>Radius = Diameter ÷ 2</p>
                    <p>Radius = 50 ÷ 2 = ?</p>
                  </div>

                  <div className="pt-2">
                    <Label htmlFor="radius">What is the radius? (yards)</Label>
                    <div className="flex gap-2 mt-1">
                      <Input
                        id="radius"
                        value={radiusAnswer}
                        onChange={(e) => setRadiusAnswer(e.target.value)}
                        placeholder="Enter your answer"
                      />
                      <Button variant="outline" onClick={() => setShowHint(!showHint)}>
                        {showHint ? "Hide Hint" : "Hint"}
                      </Button>
                    </div>
                    {showHint && (
                      <p className="text-sm text-muted-foreground mt-2">
                        Remember: Diameter ÷ 2 = Radius. The diameter is 50 yards.
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="aspect-video bg-green-100 rounded-lg overflow-hidden">
                <FootballField showRadius={true} />
              </div>
            </div>
          )}

          {currentPage === 5 && (
            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Part B: Find the Perimeter</h3>
                <div className="space-y-4">
                  <p>The perimeter is the total distance around the field. We need to add:</p>

                  <CalculationStep
                    step={1}
                    title="Rectangle sides (only the length sides)"
                    formula="2 × Length = 2 × 120 = 240 yards"
                    explanation="We only count the length sides because the width sides are replaced by the curved ends"
                  />

                  <CalculationStep
                    step={2}
                    title="Semicircle perimeters (the curved ends)"
                    formula="2 × π × r = 2 × 3.14 × 25 = 157 yards"
                    explanation="Two semicircles make one full circle with circumference 2πr"
                  />

                  <CalculationStep
                    step={3}
                    title="Total perimeter"
                    formula="240 + 157 = 397 yards"
                    explanation="Add the straight sides and curved ends"
                  />

                  <div className="pt-2">
                    <Label htmlFor="perimeter">What is the perimeter? (yards)</Label>
                    <div className="flex gap-2 mt-1">
                      <Input
                        id="perimeter"
                        value={perimeterAnswer}
                        onChange={(e) => setPerimeterAnswer(e.target.value)}
                        placeholder="Enter your answer"
                      />
                      <Button variant="outline" onClick={() => setShowHint(!showHint)}>
                        {showHint ? "Hide Hint" : "Hint"}
                      </Button>
                    </div>
                    {showHint && (
                      <p className="text-sm text-muted-foreground mt-2">
                        Add the length of the straight sides (2 × 120) and the curved ends (2 × π × 25).
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="aspect-video bg-green-100 rounded-lg overflow-hidden">
                <FootballField showPerimeter={true} />
              </div>
            </div>
          )}

          {currentPage === 6 && (
            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Part C: Find the Area</h3>
                <div className="space-y-4">
                  <p>The total area is the sum of the rectangle area and the two semicircle areas:</p>

                  <CalculationStep
                    step={1}
                    title="Rectangle area"
                    formula="Length × Width = 120 × 50 = 6000 square yards"
                    explanation="Area of a rectangle is length times width"
                  />

                  <CalculationStep
                    step={2}
                    title="Semicircle areas"
                    formula="π × r² = 3.14 × 25² = 3.14 × 625 = 1962.5 square yards"
                    explanation="Two semicircles equal one full circle with area πr²"
                  />

                  <CalculationStep
                    step={3}
                    title="Total area"
                    formula="6000 + 1962.5 = 7962.5 square yards"
                    explanation="Add the rectangle area and the semicircle areas"
                  />

                  <div className="pt-2">
                    <Label htmlFor="area">What is the area? (square yards)</Label>
                    <div className="flex gap-2 mt-1">
                      <Input
                        id="area"
                        value={areaAnswer}
                        onChange={(e) => setAreaAnswer(e.target.value)}
                        placeholder="Enter your answer"
                      />
                      <Button variant="outline" onClick={() => setShowHint(!showHint)}>
                        {showHint ? "Hide Hint" : "Hint"}
                      </Button>
                    </div>
                    {showHint && (
                      <p className="text-sm text-muted-foreground mt-2">
                        Add the area of the rectangle (120 × 50) and the area of the two semicircles (π × 25²).
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="aspect-video bg-green-100 rounded-lg overflow-hidden">
                <FootballField showArea={true} />
              </div>
            </div>
          )}

          {currentPage === 7 && (
            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Complete Solution</h3>

                <Tabs defaultValue="radius" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="radius">Part A: Radius</TabsTrigger>
                    <TabsTrigger value="perimeter">Part B: Perimeter</TabsTrigger>
                    <TabsTrigger value="area">Part C: Area</TabsTrigger>
                  </TabsList>

                  <TabsContent value="radius" className="p-4 bg-white rounded-lg mt-2">
                    <h4 className="font-medium">Finding the Radius:</h4>
                    <div className="mt-2 space-y-2">
                      <p>Given:</p>
                      <ul className="list-disc pl-5">
                        <li>Width of rectangle = 50 yards</li>
                        <li>Width = Diameter of semicircles</li>
                      </ul>

                      <p className="mt-2">Calculation:</p>
                      <div className="bg-gray-50 p-2 rounded">
                        <p>Radius = Diameter ÷ 2</p>
                        <p>Radius = 50 ÷ 2 = 25 yards</p>
                      </div>

                      <p className="font-medium mt-2">Answer: Radius = 25 yards</p>
                    </div>
                  </TabsContent>

                  <TabsContent value="perimeter" className="p-4 bg-white rounded-lg mt-2">
                    <h4 className="font-medium">Finding the Perimeter:</h4>
                    <div className="mt-2 space-y-2">
                      <p>Step 1: Rectangle sides (only length sides)</p>
                      <div className="bg-gray-50 p-2 rounded">
                        <p>2 × Length = 2 × 120 = 240 yards</p>
                      </div>

                      <p className="mt-2">Step 2: Semicircle perimeters (curved ends)</p>
                      <div className="bg-gray-50 p-2 rounded">
                        <p>2 × π × r = 2 × 3.14 × 25 = 157 yards</p>
                      </div>

                      <p className="mt-2">Step 3: Total perimeter</p>
                      <div className="bg-gray-50 p-2 rounded">
                        <p>Perimeter = 240 + 157 = 397 yards</p>
                      </div>

                      <p className="font-medium mt-2">Answer: Perimeter ≈ 397 yards</p>
                    </div>
                  </TabsContent>

                  <TabsContent value="area" className="p-4 bg-white rounded-lg mt-2">
                    <h4 className="font-medium">Finding the Area:</h4>
                    <div className="mt-2 space-y-2">
                      <p>Step 1: Rectangle area</p>
                      <div className="bg-gray-50 p-2 rounded">
                        <p>Length × Width = 120 × 50 = 6000 square yards</p>
                      </div>

                      <p className="mt-2">Step 2: Semicircle areas</p>
                      <div className="bg-gray-50 p-2 rounded">
                        <p>π × r² = 3.14 × 25² = 3.14 × 625 = 1962.5 square yards</p>
                      </div>

                      <p className="mt-2">Step 3: Total area</p>
                      <div className="bg-gray-50 p-2 rounded">
                        <p>Area = 6000 + 1962.5 = 7962.5 square yards</p>
                      </div>

                      <p className="font-medium mt-2">Answer: Area ≈ 7962.5 square yards</p>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="mt-6 flex justify-center">
                  <Button onClick={checkAnswers}>Check My Answers</Button>
                </div>

                {showSolution && (
                  <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-600" />
                      <h4 className="font-medium">Final Answers:</h4>
                    </div>
                    <ul className="list-disc pl-8 mt-2">
                      <li>Radius = 25 yards</li>
                      <li>Perimeter ≈ 397 yards</li>
                      <li>Area ≈ 7962.5 square yards</li>
                    </ul>

                    {earnedBadge && (
                      <div className="mt-4 flex items-center justify-center gap-3 p-3 bg-amber-50 rounded-lg">
                        <Award className="h-8 w-8 text-amber-500" />
                        <div>
                          <p className="font-medium">Congratulations!</p>
                          <p>You&apos;ve earned the &quot;Field Engineer&quot; badge! 🏟️🎖️</p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {currentPage === 8 && (
            <TransferProblem
              title="Running Track Challenge"
              description="A running track has straight sides 100 meters long and ends shaped like semicircles with diameter 40 meters."
              image="/athletic-oval.png"
              straightLength={100}
              diameter={40}
              unit="meters"
            />
          )}

          {currentPage === 9 && (
            <TransferProblem
              title="Water Park Lazy River"
              description="A lazy river at a water park has straight sides 150 ft long and curved ends shaped like semicircles with diameter 30 ft."
              image="/straight-river-bend.png"
              straightLength={150}
              diameter={30}
              unit="feet"
            />
          )}
        </CardContent>

        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={prevPage} disabled={currentPage === 1}>
            <ChevronLeft className="mr-2 h-4 w-4" /> Previous
          </Button>

          <div className="text-sm text-muted-foreground">
            Page {currentPage} of {totalPages}
          </div>

          <Button onClick={nextPage} disabled={currentPage === totalPages}>
            Next <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
