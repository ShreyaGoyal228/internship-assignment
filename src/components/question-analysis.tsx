"use client"

import * as React from "react"
import { Label, Pie, PieChart } from "recharts"
import { Target } from 'lucide-react';

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { useScoreStore } from "@/store/scoreStore"


export function QuestionAnalysisCard() {
     const totalQuestions = 15;
        const { score } = useScoreStore((state) => state.quizData);
        const needsImprovement = score <= 10;

        const chartData = [
          { name: "Scored", scores: score, fill: "var(--color-scored)" },
          { name: "Remaining", scores: totalQuestions-score, fill: "var(--color-remaining)" },
        ]
        
        const chartConfig = {
          scored: {
            label: "Scored",
            color: "#2563eb",
          },
          remaining: {
            label: " Remaining",
            color: "#dbeafe",
          },
          
        } satisfies ChartConfig

  return (
    <Card className="w-full flex flex-col gap-4">
        <CardHeader className="flex flex-row items-center justify-between px-6 lg:px-8 pt-6 lg:pt-8">
                <h2 className="text-base lg:text-lg 2xl:text-xl font-bold text-black">Question Analysis</h2>
                <span className="text-sm lg:text-base 2xl:text-lg font-bold text-blue-600">{score}/{totalQuestions}</span>
              </CardHeader>
      <CardContent className="px-6 lg:px-8">
      <p className="text-gray-600 font-bold text-sm lg:text-base 2xl:text-lg
          ">
            You scored {score} question correct out of {totalQuestions}.
            <span className="font-medium">{needsImprovement && " However, it still needs some improvements."}</span>
          </p>
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square h-[200px] lg:h-[230px] "
        >
    
          <PieChart className="">
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent  hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="scores"
              nameKey="name"
              innerRadius={65}
              strokeWidth={5}
            >
            <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <g>
                        <Target
                          x={(viewBox.cx || 0)-12}
                          y={(viewBox.cy || 0) - 12}
                          className="w-6 h-6 text-blue-600"
                        />
                        {/* <text 
                          x={viewBox.cx} 
                          y={(viewBox.cy || 0) + 24} 
                          textAnchor="middle" 
                          className="fill-gray-600 text-sm"
                        >
                          Score
                        </text> */}
                      </g>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
         
  
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
