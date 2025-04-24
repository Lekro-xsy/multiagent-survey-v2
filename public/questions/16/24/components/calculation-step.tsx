interface CalculationStepProps {
  step: number
  title: string
  formula: string
  explanation: string
}

export function CalculationStep({ step, title, formula, explanation }: CalculationStepProps) {
  return (
    <div className="bg-white p-3 rounded-lg">
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-700 font-medium text-sm">
          {step}
        </div>
        <h4 className="font-medium">{title}</h4>
      </div>
      <div className="mt-2 pl-8">
        <div className="bg-gray-50 p-2 rounded font-medium">{formula}</div>
        <p className="text-sm text-muted-foreground mt-1">{explanation}</p>
      </div>
    </div>
  )
}
