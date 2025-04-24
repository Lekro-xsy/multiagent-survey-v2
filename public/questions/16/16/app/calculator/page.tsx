"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Calculator, Divide } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CalculatorPage() {
  const [numerator, setNumerator] = useState("")
  const [denominator, setDenominator] = useState("")
  const [numeratorUnit, setNumeratorUnit] = useState("items")
  const [denominatorUnit, setDenominatorUnit] = useState("units")
  const [result, setResult] = useState<number | null>(null)
  const [error, setError] = useState("")

  const handleCalculate = () => {
    setError("")

    if (!numerator || !denominator) {
      setError("Please enter both values")
      return
    }

    const num = Number.parseFloat(numerator)
    const den = Number.parseFloat(denominator)

    if (isNaN(num) || isNaN(den)) {
      setError("Please enter valid numbers")
      return
    }

    if (den === 0) {
      setError("Cannot divide by zero")
      return
    }

    setResult(num / den)
  }

  return (
    <div className="container py-8 px-4">
      <div className="flex items-center mb-6">
        <Link href="/">
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </Link>
        <h1 className="text-2xl font-bold ml-4">Unit Rate Calculator</h1>
      </div>

      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calculator className="h-5 w-5 mr-2" />
              Unit Rate Calculator
            </CardTitle>
            <CardDescription>Enter two quantities to calculate their unit rate</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2">
                    <Label htmlFor="numerator">First Quantity (Total)</Label>
                    <Input
                      id="numerator"
                      type="number"
                      placeholder="e.g., 190"
                      value={numerator}
                      onChange={(e) => setNumerator(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="numerator-unit">Unit</Label>
                    <Select value={numeratorUnit} onValueChange={setNumeratorUnit}>
                      <SelectTrigger id="numerator-unit">
                        <SelectValue placeholder="Select unit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="items">items</SelectItem>
                        <SelectItem value="calories">calories</SelectItem>
                        <SelectItem value="miles">miles</SelectItem>
                        <SelectItem value="dollars">dollars</SelectItem>
                        <SelectItem value="pages">pages</SelectItem>
                        <SelectItem value="gallons">gallons</SelectItem>
                        <SelectItem value="custom">custom</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                    <Divide className="h-6 w-6 text-gray-600" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2">
                    <Label htmlFor="denominator">Second Quantity (Per Unit)</Label>
                    <Input
                      id="denominator"
                      type="number"
                      placeholder="e.g., 30"
                      value={denominator}
                      onChange={(e) => setDenominator(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="denominator-unit">Unit</Label>
                    <Select value={denominatorUnit} onValueChange={setDenominatorUnit}>
                      <SelectTrigger id="denominator-unit">
                        <SelectValue placeholder="Select unit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="units">units</SelectItem>
                        <SelectItem value="minutes">minutes</SelectItem>
                        <SelectItem value="hours">hours</SelectItem>
                        <SelectItem value="days">days</SelectItem>
                        <SelectItem value="pounds">pounds</SelectItem>
                        <SelectItem value="gallons">gallons</SelectItem>
                        <SelectItem value="custom">custom</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {error && <div className="bg-red-50 border border-red-200 p-3 rounded-md text-red-800">{error}</div>}

              <Button className="w-full" onClick={handleCalculate}>
                Calculate Unit Rate
              </Button>

              {result !== null && (
                <div className="bg-green-50 border border-green-200 p-4 rounded-md">
                  <h3 className="font-medium text-green-800 mb-2">Result:</h3>
                  <div className="text-2xl font-bold">
                    {result.toFixed(2)} {numeratorUnit} per {denominatorUnit}
                  </div>
                  <p className="mt-2 text-sm text-green-700">
                    This means for every 1 {denominatorUnit}, you have {result.toFixed(2)} {numeratorUnit}.
                  </p>
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              variant="outline"
              onClick={() => {
                setNumerator("")
                setDenominator("")
                setResult(null)
                setError("")
              }}
            >
              Clear
            </Button>
            <Link href="/lesson/1">
              <Button variant="secondary">Learn More About Unit Rates</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
