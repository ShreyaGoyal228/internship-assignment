'use client'
import { useScoreStore } from "@/store/scoreStore"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { LineChart, Line, XAxis } from 'recharts';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";

export const ComparisonGraph = () => {
    const percentileData = [
        { percentile: "0", students: 1 },
        { percentile: "10", students: 2 },
        { percentile: "25", students: 4 },
        { percentile: "29", students: 8 },
        { percentile: "40", students: 14 },
        { percentile: "50", students: 18 },
        { percentile: "53", students: 16 },
        { percentile: "60", students: 6 },
        { percentile: "75", students: 4 },
        { percentile: "87", students: 5 },
        { percentile: "100", students: 1 }
    ]
    const chartConfig = {
        students: {
            label: "numberOfStudent : ",
            color: "#875bea",
        }
    } satisfies ChartConfig

    const { percentile } = useScoreStore((state) => state.quizData)
    return (
        <>
            <Card className="w-full bg-gray-100 flex flex-col gap-4 lg:gap-5">
                <CardHeader className="px-4 pt-4 lg:pt-6">
                    <CardTitle className="text-base lg:text-lg 2xl:text-xl font-bold text-black">Comparison Graph</CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-4 lg:pb-6">
                    <p className="text-gray-600 font-bold text-sm lg:text-base 2xl:text-lg
          ">
                        You scored {percentile}% percentile{" "}
                        <span className="font-medium ">which is {percentile < 72 ? "lower then" : percentile == 72 ? "equals to" : "greater then"} the average percentile 72% of all engineers who took this assesssment.</span>
                    </p>
                    <div className="relative ">
                        <ChartContainer config={chartConfig} className="h-[200px] md:h-[250px] lg:h-[350px] w-full ">
                            <LineChart
                                data={percentileData}
                            >
                                <XAxis
                                    dataKey="percentile"
                                    tickLine={true}
                                    axisLine={true}
                                    ticks={["0", "25", "50", "75", "100"]}
                                    stroke="#000000"
                                />
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent hideIndicator innerClassName="text-[#875bea]" className=" border border-gray-400 border-opacity-50 rounded-none" />}
                                />

                                <Line
                                    dataKey="students"
                                    type="monotone"
                                    stroke="var(--color-students)"
                                    strokeWidth={1}
                                    dot={{
                                        r: 3,
                                    }}
                                    activeDot={{
                                        r: 5,
                                    }}
                                />
                                <line
                                    x1={`${percentile}%`}
                                    y1="0"
                                    x2={`${percentile}%`}
                                    y2="90%"
                                    stroke="#6b7280"
                                    strokeWidth={1}
                                    className="opacity-40"

                                />
                            </LineChart>
                        </ChartContainer>
                        <div
                            className="absolute text-sm text-gray-500 font-semibold"
                            style={{
                                left: `${percentile}%`,
                                top: '40px',
                                transform: 'translateX(-50%)',

                            }}
                        >
                            your percentile
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}