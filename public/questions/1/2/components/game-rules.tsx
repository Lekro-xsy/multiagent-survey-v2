"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function GameRules() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    "One student tells 3 students",
    "Each of those 3 students tells 3 new students",
    "Each new student tells 3 more new students",
    "The pattern continues...",
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-center text-blue-700">What Are the Game Rules?</h1>

      <div className="bg-blue-50 p-6 rounded-lg">
        <div className="flex flex-col items-center space-y-8">
          <div className="w-full max-w-2xl">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex items-center ${index < steps.length - 1 ? "mb-8" : ""}`}
                onMouseEnter={() => setActiveStep(index)}
              >
                <div
                  className={`z-10 flex items-center justify-center w-10 h-10 rounded-full ${activeStep >= index ? "bg-blue-600" : "bg-gray-300"} transition-colors duration-300`}
                >
                  <span className="text-white font-bold">{index + 1}</span>
                </div>

                {index < steps.length - 1 && (
                  <div
                    className={`absolute top-10 left-5 w-0.5 h-8 ${activeStep > index ? "bg-blue-600" : "bg-gray-300"} transition-colors duration-300`}
                  ></div>
                )}

                <div className="ml-4 flex-1">
                  <div
                    className={`font-medium ${activeStep >= index ? "text-blue-800" : "text-gray-500"} transition-colors duration-300`}
                  >
                    {step}
                  </div>

                  {activeStep === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 bg-white p-3 rounded-lg shadow-sm"
                    >
                      {index === 0 && (
                        <div className="flex justify-center space-x-8">
                          <div className="flex flex-col items-center">
                            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                              1
                            </div>
                            <div className="mt-2 text-sm">First student</div>
                          </div>
                          <div className="flex items-center">
                            <svg width="50" height="20" viewBox="0 0 50 20">
                              <path d="M0 10 H 50" stroke="black" strokeWidth="2" />
                              <path d="M 40 5 L 50 10 L 40 15" fill="none" stroke="black" strokeWidth="2" />
                            </svg>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="flex space-x-2">
                              {[1, 2, 3].map((i) => (
                                <div
                                  key={i}
                                  className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold"
                                >
                                  {i}
                                </div>
                              ))}
                            </div>
                            <div className="mt-2 text-sm">3 new students</div>
                          </div>
                        </div>
                      )}

                      {index === 1 && (
                        <div className="flex justify-center">
                          <div className="flex flex-col items-center">
                            <div className="flex space-x-2">
                              {[1, 2, 3].map((i) => (
                                <div
                                  key={i}
                                  className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold"
                                >
                                  {i}
                                </div>
                              ))}
                            </div>
                            <div className="mt-4 flex space-x-4">
                              {[1, 2, 3].map((i) => (
                                <div key={i} className="flex flex-col items-center">
                                  <div className="flex space-x-1">
                                    {[1, 2, 3].map((j) => (
                                      <div
                                        key={j}
                                        className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-xs"
                                      >
                                        {j}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {index === 2 && (
                        <div className="text-center">
                          <p>Each of the 9 students from the previous round tells 3 new students.</p>
                          <p className="mt-2 font-semibold">That's 9 × 3 = 27 new students in this round!</p>
                        </div>
                      )}

                      {index === 3 && (
                        <div className="text-center">
                          <p>
                            The pattern continues with each student telling exactly 3 new students who haven't heard the
                            message yet.
                          </p>
                          <p className="mt-2 font-semibold">This creates an exponential growth pattern!</p>
                        </div>
                      )}
                    </motion.div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg w-full text-center">
            <p className="text-lg font-medium">
              Remember: Each student tells exactly 3 NEW students who haven't heard the message yet!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
