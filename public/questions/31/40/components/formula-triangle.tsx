"use client"

interface FormulaTriangleProps {
  selectedFormula: string | null
  setSelectedFormula: (formula: string) => void
}

export function FormulaTriangle({ selectedFormula, setSelectedFormula }: FormulaTriangleProps) {
  return (
    <div className="relative mx-auto h-64 w-64">
      {/* Triangle background */}
      <div className="absolute left-1/2 top-0 h-0 w-0 -translate-x-1/2 border-l-[120px] border-r-[120px] border-t-[208px] border-l-transparent border-r-transparent border-t-gray-200"></div>

      {/* Distance (top) */}
      <button
        className={`absolute left-1/2 top-4 -translate-x-1/2 rounded-lg px-4 py-2 text-center font-medium transition-colors ${
          selectedFormula === "distance" ? "bg-blue-600 text-white" : "bg-white hover:bg-gray-100"
        }`}
        onClick={() => setSelectedFormula("distance")}
      >
        Distance
      </button>

      {/* Speed (bottom left) */}
      <button
        className={`absolute bottom-4 left-1/4 -translate-x-1/2 rounded-lg px-4 py-2 text-center font-medium transition-colors ${
          selectedFormula === "speed" ? "bg-purple-600 text-white" : "bg-white hover:bg-gray-100"
        }`}
        onClick={() => setSelectedFormula("speed")}
      >
        Speed
      </button>

      {/* Time (bottom right) */}
      <button
        className={`absolute bottom-4 right-1/4 translate-x-1/2 rounded-lg px-4 py-2 text-center font-medium transition-colors ${
          selectedFormula === "time" ? "bg-green-600 text-white" : "bg-white hover:bg-gray-100"
        }`}
        onClick={() => setSelectedFormula("time")}
      >
        Time
      </button>

      {/* Formula display */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/3 text-center">
        {selectedFormula === "distance" && (
          <div className="rounded-lg bg-blue-100 p-2 text-blue-800">
            <p className="font-medium">Distance = Speed × Time</p>
          </div>
        )}

        {selectedFormula === "speed" && (
          <div className="rounded-lg bg-purple-100 p-2 text-purple-800">
            <p className="font-medium">Speed = Distance ÷ Time</p>
          </div>
        )}

        {selectedFormula === "time" && (
          <div className="rounded-lg bg-green-100 p-2 text-green-800">
            <p className="font-medium">Time = Distance ÷ Speed</p>
          </div>
        )}

        {!selectedFormula && (
          <div className="rounded-lg bg-gray-100 p-2 text-gray-800">
            <p className="font-medium">Click to see formulas</p>
          </div>
        )}
      </div>
    </div>
  )
}
