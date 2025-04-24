"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, ArrowLeft, HelpCircle } from "lucide-react"
import Image from "next/image"

export default function MathLearningExperience() {
  const [currentPage, setCurrentPage] = useState(1)
  const [studentAnswers, setStudentAnswers] = useState({
    page5Expression: "",
    page7Answer: "",
    page7Expression: "",
    page8Answer: "",
    page8Expression: "",
    quizAnswers: {
      q1: "",
      q2: "",
      q3: "",
      q4: "",
    },
  })

  const [showHints, setShowHints] = useState({
    page5: false,
    page7: false,
    page8: false,
  })

  const totalPages = 9

  const handleInputChange = (field, value) => {
    if (field.startsWith("quizAnswers.")) {
      const quizField = field.split(".")[1]
      setStudentAnswers({
        ...studentAnswers,
        quizAnswers: {
          ...studentAnswers.quizAnswers,
          [quizField]: value,
        },
      })
    } else {
      setStudentAnswers({
        ...studentAnswers,
        [field]: value,
      })
    }
  }

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

  const toggleHint = (page) => {
    setShowHints({
      ...showHints,
      [page]: !showHints[page],
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100 py-8">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardHeader className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
            <div className="flex justify-between items-center">
              <CardTitle className="text-2xl">Math in Real Life: Unit Conversions</CardTitle>
              <div className="text-sm font-medium bg-white text-orange-600 px-3 py-1 rounded-full">
                Page {currentPage} of {totalPages}
              </div>
            </div>
            <CardDescription className="text-white/90">
              Learning to solve problems with unit conversions
            </CardDescription>
          </CardHeader>

          <CardContent className="pt-6 pb-2">
            {/* Page 1: Introduction */}
            {currentPage === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-orange-700">🍇 Making a Delicious Raisin Snack!</h2>
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="md:w-1/2">
                    <Image
                      src="/baking-buddy.png"
                      width={400}
                      height={300}
                      alt="Child preparing raisin snack in kitchen"
                      className="rounded-lg shadow-md"
                    />
                  </div>
                  <div className="md:w-1/2 space-y-4">
                    <p className="text-lg">
                      Today, Alex is making a big batch of trail mix with raisins. He needs <strong>3 cups</strong> of
                      raisins for his recipe.
                    </p>
                    <p className="text-lg">
                      The grocery store sells raisins in boxes, with <strong>6 ounces</strong> of raisins in each box.
                    </p>
                    <p className="text-lg font-medium text-orange-700">
                      How many boxes of raisins does Alex need to buy?
                    </p>
                  </div>
                </div>
                <div className="bg-amber-100 p-4 rounded-lg border border-amber-200">
                  <p className="font-medium">To solve this problem, we'll need to:</p>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>Understand the unit conversion (cups to ounces)</li>
                    <li>Calculate the total amount of raisins needed</li>
                    <li>Determine how many boxes to buy</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Page 2: Information Clarification */}
            {currentPage === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-orange-700">📋 Let's Clarify What We Know!</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="bg-white hover:bg-amber-50 transition-colors cursor-pointer border-2 border-amber-200">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg text-orange-600">Unit Conversion</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-center">
                        <div className="text-center">
                          <p className="text-2xl font-bold">8 ounces = 1 cup</p>
                          <p className="text-sm text-gray-500 mt-2">This is our conversion rate</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white hover:bg-amber-50 transition-colors cursor-pointer border-2 border-amber-200">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg text-orange-600">Recipe Requirement</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-center">
                        <div className="text-center">
                          <p className="text-2xl font-bold">3 cups of raisins</p>
                          <p className="text-sm text-gray-500 mt-2">This is what we need for the recipe</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white hover:bg-amber-50 transition-colors cursor-pointer border-2 border-amber-200">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg text-orange-600">Package Size</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-center">
                        <div className="text-center">
                          <p className="text-2xl font-bold">6 ounces per box</p>
                          <p className="text-sm text-gray-500 mt-2">This is how raisins are sold</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-orange-100 p-4 rounded-lg mt-6">
                  <h3 className="font-bold text-orange-700 mb-2">Our Challenge:</h3>
                  <p className="text-lg">
                    We need to find out how many 6-ounce boxes of raisins are needed to get 3 cups of raisins.
                  </p>
                  <p className="mt-2">
                    Let's use <strong>x = 3 cups</strong> and write an expression to find the number of boxes.
                  </p>
                </div>
              </div>
            )}

            {/* Page 3: Understanding Unit Conversion */}
            {currentPage === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-orange-700">🔄 Understanding Ounces and Cups</h2>

                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="md:w-1/2">
                    <Image
                      src="/measuring-cup-raisins.png"
                      width={400}
                      height={300}
                      alt="Measuring cup showing 8 ounces equals 1 cup"
                      className="rounded-lg shadow-md"
                    />
                  </div>
                  <div className="md:w-1/2 space-y-4">
                    <div className="bg-white p-4 rounded-lg border border-amber-200">
                      <h3 className="font-bold text-lg text-orange-600 mb-2">Unit Conversion:</h3>
                      <p className="text-2xl font-bold text-center">8 ounces = 1 cup</p>
                    </div>

                    <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                      <h3 className="font-bold text-orange-700 mb-2">Think About It:</h3>
                      <p>If 1 cup contains 8 ounces of raisins, then:</p>
                      <ul className="list-disc list-inside space-y-1 mt-2">
                        <li>
                          2 cups would contain <strong>16 ounces</strong> (8 × 2)
                        </li>
                        <li>
                          3 cups would contain <strong>? ounces</strong>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-100 p-4 rounded-lg mt-4">
                  <h3 className="font-bold text-orange-700 mb-2">Key Insight:</h3>
                  <p className="text-lg">To convert from cups to ounces, we multiply by 8:</p>
                  <p className="text-xl font-bold text-center mt-2">Ounces = Cups × 8</p>
                </div>
              </div>
            )}

            {/* Page 4: Step-by-Step Modeling */}
            {currentPage === 4 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-orange-700">🔎 Building Our Mathematical Model Step by Step</h2>

                <div className="bg-white p-5 rounded-lg border-2 border-amber-200">
                  <h3 className="font-bold text-lg text-orange-600 mb-3">
                    Step 1: How many ounces of raisins do we need?
                  </h3>

                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-amber-100 p-3 rounded-lg text-center">
                      <p className="font-bold">3 cups</p>
                      <p className="text-xs">Amount needed</p>
                    </div>
                    <span className="text-2xl">×</span>
                    <div className="bg-amber-100 p-3 rounded-lg text-center">
                      <p className="font-bold">8 ounces/cup</p>
                      <p className="text-xs">Conversion rate</p>
                    </div>
                    <span className="text-2xl">=</span>
                    <div className="bg-orange-100 p-3 rounded-lg text-center">
                      <p className="font-bold">? ounces</p>
                      <p className="text-xs">Total ounces</p>
                    </div>
                  </div>

                  <div className="border-t border-amber-200 pt-4 mt-4">
                    <h3 className="font-bold text-lg text-orange-600 mb-3">Step 2: How many boxes do we need?</h3>

                    <div className="flex items-center gap-3">
                      <div className="bg-orange-100 p-3 rounded-lg text-center">
                        <p className="font-bold">? ounces</p>
                        <p className="text-xs">Total ounces</p>
                      </div>
                      <span className="text-2xl">÷</span>
                      <div className="bg-amber-100 p-3 rounded-lg text-center">
                        <p className="font-bold">6 ounces/box</p>
                        <p className="text-xs">Box size</p>
                      </div>
                      <span className="text-2xl">=</span>
                      <div className="bg-green-100 p-3 rounded-lg text-center">
                        <p className="font-bold">? boxes</p>
                        <p className="text-xs">Number of boxes</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-100 p-4 rounded-lg">
                  <h3 className="font-bold text-orange-700 mb-2">Putting It All Together:</h3>
                  <p className="text-lg">We can combine these steps into a single expression:</p>
                  <div className="bg-white p-3 rounded-lg mt-2 text-center">
                    <p className="text-xl font-bold">Number of boxes = (3 cups × 8 ounces/cup) ÷ 6 ounces/box</p>
                  </div>
                </div>
              </div>
            )}

            {/* Page 5: Student Input */}
            {currentPage === 5 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-orange-700">✍️ Your Turn: Write Your Solution</h2>

                <div className="bg-white p-5 rounded-lg border-2 border-amber-200">
                  <h3 className="font-bold text-lg text-orange-600 mb-3">
                    Write a complete expression to find how many boxes of raisins Alex needs:
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Your mathematical expression:
                      </label>
                      <Input
                        placeholder="Example: (3 × 8) ÷ 6"
                        value={studentAnswers.page5Expression}
                        onChange={(e) => handleInputChange("page5Expression", e.target.value)}
                        className="font-mono text-lg"
                      />
                    </div>

                    <div className="bg-amber-50 p-3 rounded-lg">
                      <p className="text-sm">
                        <strong>Hint:</strong> Remember to convert cups to ounces first, then determine how many boxes.
                      </p>
                    </div>

                    <div className="mt-4">
                      <Button
                        variant="outline"
                        className="text-orange-600 border-orange-300 hover:bg-orange-50"
                        onClick={() => toggleHint("page5")}
                      >
                        <HelpCircle className="h-4 w-4 mr-2" />
                        {showHints.page5 ? "Hide Hint" : "Need a Hint?"}
                      </Button>

                      {showHints.page5 && (
                        <div className="mt-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
                          <p>Think about these steps:</p>
                          <ol className="list-decimal list-inside space-y-1 mt-1">
                            <li>Convert 3 cups to ounces (multiply by 8)</li>
                            <li>Divide the total ounces by 6 ounces per box</li>
                            <li>Your expression should look like: (3 × 8) ÷ 6</li>
                          </ol>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="bg-orange-100 p-4 rounded-lg">
                  <h3 className="font-bold text-orange-700 mb-2">Remember:</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>8 ounces = 1 cup (conversion rate)</li>
                    <li>We need 3 cups of raisins</li>
                    <li>Each box contains 6 ounces of raisins</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Page 6: Solution Reveal */}
            {currentPage === 6 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-orange-700">🎯 The Complete Solution</h2>

                <div className="bg-white p-5 rounded-lg border-2 border-amber-200">
                  <h3 className="font-bold text-lg text-orange-600 mb-4">Step-by-Step Solution:</h3>

                  <div className="space-y-6">
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <h4 className="font-bold">Step 1: Convert cups to ounces</h4>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="bg-white p-2 rounded border border-amber-200 text-center">
                          <p className="font-bold">3 cups</p>
                        </div>
                        <span className="text-xl">×</span>
                        <div className="bg-white p-2 rounded border border-amber-200 text-center">
                          <p className="font-bold">8 ounces/cup</p>
                        </div>
                        <span className="text-xl">=</span>
                        <div className="bg-green-100 p-2 rounded border border-green-200 text-center">
                          <p className="font-bold">24 ounces</p>
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-gray-600">
                        We need a total of 24 ounces of raisins for the recipe.
                      </p>
                    </div>

                    <div className="bg-amber-50 p-4 rounded-lg">
                      <h4 className="font-bold">Step 2: Calculate how many boxes we need</h4>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="bg-white p-2 rounded border border-amber-200 text-center">
                          <p className="font-bold">24 ounces</p>
                        </div>
                        <span className="text-xl">÷</span>
                        <div className="bg-white p-2 rounded border border-amber-200 text-center">
                          <p className="font-bold">6 ounces/box</p>
                        </div>
                        <span className="text-xl">=</span>
                        <div className="bg-green-100 p-2 rounded border border-green-200 text-center">
                          <p className="font-bold">4 boxes</p>
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-gray-600">
                        We need to buy 4 boxes of raisins to have enough for the recipe.
                      </p>
                    </div>

                    <div className="bg-orange-100 p-4 rounded-lg">
                      <h4 className="font-bold text-orange-700">Complete Expression:</h4>
                      <p className="text-xl font-bold text-center mt-2">Number of boxes = (3 × 8) ÷ 6 = 24 ÷ 6 = 4</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-100 p-4 rounded-lg border border-green-200">
                  <h3 className="font-bold text-green-700 mb-2 text-center text-xl">
                    Alex needs to buy 4 boxes of raisins!
                  </h3>
                  <div className="flex justify-center mt-2">
                    <Image
                      src="/raisin-row.png"
                      width={300}
                      height={100}
                      alt="Four boxes of raisins"
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Page 7: Similar Problem */}
            {currentPage === 7 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-orange-700">🧪 Try a Similar Problem</h2>

                <div className="bg-white p-5 rounded-lg border-2 border-amber-200">
                  <h3 className="font-bold text-lg text-orange-600 mb-3">New Challenge:</h3>

                  <div className="bg-amber-50 p-4 rounded-lg">
                    <p className="text-lg">
                      Alex now wants to make a larger batch of trail mix that requires <strong>5 cups</strong> of
                      raisins.
                    </p>
                    <p className="text-lg mt-2">
                      The store still sells raisins in boxes of <strong>6 ounces</strong> each.
                    </p>
                    <p className="text-lg font-medium text-orange-700 mt-2">
                      How many boxes of raisins does Alex need to buy now?
                    </p>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Write your expression:</label>
                      <Input
                        placeholder="Your mathematical expression"
                        value={studentAnswers.page7Expression}
                        onChange={(e) => handleInputChange("page7Expression", e.target.value)}
                        className="font-mono text-lg"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Your answer (number of boxes):
                      </label>
                      <Input
                        type="number"
                        placeholder="Enter number of boxes"
                        value={studentAnswers.page7Answer}
                        onChange={(e) => handleInputChange("page7Answer", e.target.value)}
                        className="font-mono text-lg"
                      />
                    </div>

                    <div className="mt-4">
                      <Button
                        variant="outline"
                        className="text-orange-600 border-orange-300 hover:bg-orange-50"
                        onClick={() => toggleHint("page7")}
                      >
                        <HelpCircle className="h-4 w-4 mr-2" />
                        {showHints.page7 ? "Hide Hint" : "Need a Hint?"}
                      </Button>

                      {showHints.page7 && (
                        <div className="mt-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
                          <p>Follow the same steps as before:</p>
                          <ol className="list-decimal list-inside space-y-1 mt-1">
                            <li>Convert 5 cups to ounces (multiply by 8)</li>
                            <li>Divide the total ounces by 6 ounces per box</li>
                            <li>Remember to round up if you get a decimal (you can't buy a partial box)</li>
                          </ol>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="bg-orange-100 p-4 rounded-lg">
                  <h3 className="font-bold text-orange-700 mb-2">Remember:</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>8 ounces = 1 cup</li>
                    <li>Each box contains 6 ounces of raisins</li>
                    <li>You can't buy a partial box - round up if needed!</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Page 8: Transfer Problem */}
            {currentPage === 8 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-orange-700">🧠 Apply Your Knowledge to a New Situation</h2>

                <div className="bg-white p-5 rounded-lg border-2 border-amber-200">
                  <h3 className="font-bold text-lg text-orange-600 mb-3">Transfer Challenge:</h3>

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <div className="flex flex-col md:flex-row gap-4 items-center">
                      <div className="md:w-1/3">
                        <Image
                          src="/kitchen-prep.png"
                          width={200}
                          height={200}
                          alt="Orange juice bottles and measuring cups"
                          className="rounded-lg"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <p className="text-lg">
                          Sarah is making orange juice for a party. She needs <strong>4 cups</strong> of orange juice.
                        </p>
                        <p className="text-lg mt-2">
                          The store sells orange juice in bottles that contain <strong>10 ounces</strong> each.
                        </p>
                        <p className="text-lg mt-2">
                          If <strong>8 ounces = 1 cup</strong>, how many bottles of orange juice does Sarah need to buy?
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Write your expression:</label>
                      <Input
                        placeholder="Your mathematical expression"
                        value={studentAnswers.page8Expression}
                        onChange={(e) => handleInputChange("page8Expression", e.target.value)}
                        className="font-mono text-lg"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Your answer (number of bottles):
                      </label>
                      <Input
                        type="number"
                        placeholder="Enter number of bottles"
                        value={studentAnswers.page8Answer}
                        onChange={(e) => handleInputChange("page8Answer", e.target.value)}
                        className="font-mono text-lg"
                      />
                    </div>

                    <div className="mt-4">
                      <Button
                        variant="outline"
                        className="text-orange-600 border-orange-300 hover:bg-orange-50"
                        onClick={() => toggleHint("page8")}
                      >
                        <HelpCircle className="h-4 w-4 mr-2" />
                        {showHints.page8 ? "Hide Hint" : "Need a Hint?"}
                      </Button>

                      {showHints.page8 && (
                        <div className="mt-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
                          <p>This problem follows the same pattern, but with different numbers:</p>
                          <ol className="list-decimal list-inside space-y-1 mt-1">
                            <li>Convert cups to ounces (4 cups × 8 ounces/cup)</li>
                            <li>Divide by the bottle size (10 ounces/bottle)</li>
                            <li>Remember to round up if needed - you can't buy a partial bottle</li>
                          </ol>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="bg-blue-100 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-700 mb-2">Key Insight:</h3>
                  <p>
                    Notice how this problem has a different context (orange juice instead of raisins), but the
                    mathematical structure is the same:
                  </p>

                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>Convert from cups to ounces</li>
                    <li>Divide by the container size</li>
                    <li>Round up if necessary</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Page 9: Summary and Quiz */}
            {currentPage === 9 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-orange-700">📚 Summary and Knowledge Check</h2>

                <div className="bg-white p-5 rounded-lg border-2 border-amber-200">
                  <h3 className="font-bold text-lg text-orange-600 mb-3">What We've Learned:</h3>

                  <div className="space-y-4">
                    <div className="bg-amber-50 p-3 rounded-lg">
                      <h4 className="font-bold">Unit Conversion</h4>
                      <p>Converting between different units of measurement (cups to ounces)</p>
                    </div>

                    <div className="bg-amber-50 p-3 rounded-lg">
                      <h4 className="font-bold">Mathematical Modeling</h4>
                      <p>Creating expressions to represent real-world problems</p>
                    </div>

                    <div className="bg-amber-50 p-3 rounded-lg">
                      <h4 className="font-bold">Problem-Solving Process</h4>
                      <p>Breaking down complex problems into manageable steps</p>
                    </div>

                    <div className="bg-amber-50 p-3 rounded-lg">
                      <h4 className="font-bold">Transfer of Knowledge</h4>
                      <p>Applying the same mathematical structure to different contexts</p>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 p-5 rounded-lg border-2 border-orange-200">
                  <h3 className="font-bold text-lg text-orange-700 mb-4">Quick Knowledge Check:</h3>

                  <div className="space-y-6">
                    <div>
                      <p className="font-medium mb-2">1. If 8 ounces = 1 cup, how many ounces are in 2.5 cups?</p>
                      <div className="flex gap-2">
                        <Button
                          variant={studentAnswers.quizAnswers.q1 === "16" ? "default" : "outline"}
                          className={studentAnswers.quizAnswers.q1 === "16" ? "bg-orange-500 hover:bg-orange-600" : ""}
                          onClick={() => handleInputChange("quizAnswers.q1", "16")}
                        >
                          16 oz
                        </Button>
                        <Button
                          variant={studentAnswers.quizAnswers.q1 === "20" ? "default" : "outline"}
                          className={studentAnswers.quizAnswers.q1 === "20" ? "bg-orange-500 hover:bg-orange-600" : ""}
                          onClick={() => handleInputChange("quizAnswers.q1", "20")}
                        >
                          20 oz
                        </Button>
                        <Button
                          variant={studentAnswers.quizAnswers.q1 === "24" ? "default" : "outline"}
                          className={studentAnswers.quizAnswers.q1 === "24" ? "bg-orange-500 hover:bg-orange-600" : ""}
                          onClick={() => handleInputChange("quizAnswers.q1", "24")}
                        >
                          24 oz
                        </Button>
                      </div>
                    </div>

                    <div>
                      <p className="font-medium mb-2">
                        2. If you need 32 ounces of an ingredient that comes in 12-ounce packages, how many packages do
                        you need?
                      </p>
                      <div className="flex gap-2">
                        <Button
                          variant={studentAnswers.quizAnswers.q2 === "2" ? "default" : "outline"}
                          className={studentAnswers.quizAnswers.q2 === "2" ? "bg-orange-500 hover:bg-orange-600" : ""}
                          onClick={() => handleInputChange("quizAnswers.q2", "2")}
                        >
                          2 packages
                        </Button>
                        <Button
                          variant={studentAnswers.quizAnswers.q2 === "3" ? "default" : "outline"}
                          className={studentAnswers.quizAnswers.q2 === "3" ? "bg-orange-500 hover:bg-orange-600" : ""}
                          onClick={() => handleInputChange("quizAnswers.q2", "3")}
                        >
                          3 packages
                        </Button>
                        <Button
                          variant={studentAnswers.quizAnswers.q2 === "4" ? "default" : "outline"}
                          className={studentAnswers.quizAnswers.q2 === "4" ? "bg-orange-500 hover:bg-orange-600" : ""}
                          onClick={() => handleInputChange("quizAnswers.q2", "4")}
                        >
                          4 packages
                        </Button>
                      </div>
                    </div>

                    <div>
                      <p className="font-medium mb-2">
                        3. Which expression correctly calculates how many 8-ounce bottles you need to get 6 cups of
                        liquid? (Remember: 8 oz = 1 cup)
                      </p>
                      <div className="flex flex-col gap-2">
                        <Button
                          variant={studentAnswers.quizAnswers.q3 === "a" ? "default" : "outline"}
                          className={studentAnswers.quizAnswers.q3 === "a" ? "bg-orange-500 hover:bg-orange-600" : ""}
                          onClick={() => handleInputChange("quizAnswers.q3", "a")}
                        >
                          (6 × 8) ÷ 8
                        </Button>
                        <Button
                          variant={studentAnswers.quizAnswers.q3 === "b" ? "default" : "outline"}
                          className={studentAnswers.quizAnswers.q3 === "b" ? "bg-orange-500 hover:bg-orange-600" : ""}
                          onClick={() => handleInputChange("quizAnswers.q3", "b")}
                        >
                          6 ÷ 8
                        </Button>
                        <Button
                          variant={studentAnswers.quizAnswers.q3 === "c" ? "default" : "outline"}
                          className={studentAnswers.quizAnswers.q3 === "c" ? "bg-orange-500 hover:bg-orange-600" : ""}
                          onClick={() => handleInputChange("quizAnswers.q3", "c")}
                        >
                          6 × 8
                        </Button>
                      </div>
                    </div>

                    <div>
                      <p className="font-medium mb-2">
                        4. Complete this statement: To convert from cups to ounces, we...
                      </p>
                      <Input
                        placeholder="Type your answer here"
                        value={studentAnswers.quizAnswers.q4}
                        onChange={(e) => handleInputChange("quizAnswers.q4", e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-green-100 p-4 rounded-lg border border-green-200">
                  <h3 className="font-bold text-green-700 mb-2 text-center">
                    Congratulations on completing this lesson!
                  </h3>
                  <p className="text-center">
                    You've learned how to solve unit conversion problems and apply mathematical modeling to real-world
                    situations.
                  </p>
                </div>
              </div>
            )}
          </CardContent>

          <CardFooter className="flex justify-between border-t pt-4">
            <Button variant="outline" onClick={prevPage} disabled={currentPage === 1}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>

            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }).map((_, i) => (
                <div
                  key={i}
                  className={`h-2 w-2 rounded-full ${currentPage === i + 1 ? "bg-orange-500" : "bg-orange-200"}`}
                />
              ))}
            </div>

            <Button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className="bg-orange-500 hover:bg-orange-600"
            >
              Next
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
