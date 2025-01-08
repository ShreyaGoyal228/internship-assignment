"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { useScoreStore } from "@/store/scoreStore"
const chartData = [
  { name: "Scored Marks", scores: 12, fill: "var(--color-scored)" },
  { name: "Remaining Marks", scores: 3, fill: "var(--color-remaining)" },
]

const chartConfig = {
  scored: {
    label: "Scored Marks",
    color: "hsl(var(--chart-1))",
  },
  remaining: {
    label: " Remaining Marks ",
    color: "hsl(var(--chart-2))",
  },
  
} satisfies ChartConfig

export function Component() {
     const totalQuestions = 15;
        const { score } = useScoreStore((state) => state.quizData);
        const needsImprovement = score <= 10;


  return (
    <Card className="w-full flex flex-col  gap-4">
        <CardHeader className="flex flex-row items-center justify-between px-8 pt-8">
                <h2 className="text-lg 2xl:text-xl font-bold text-black">Question Analysis</h2>
                <span className="text-base 2xl:text-lg font-bold text-blue-600">{score}/{totalQuestions}</span>
              </CardHeader>
      <CardContent className=" pb-12 px-8">
      <p className="text-gray-600 font-bold text-base 2xl:text-lg
          ">
            You scored {score} questions correct out of {totalQuestions}.
            <span className="font-medium">{needsImprovement && " However, it still needs some improvements."}</span>
          </p>
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent className="flex gap-3" hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="scores"
              nameKey="name"
              innerRadius={60}
              strokeWidth={5}
            >
            
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
