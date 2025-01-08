'use client'
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Trophy, FileText, Check } from "lucide-react";
import { Separator } from "./ui/separator";
import { useScoreStore } from "@/store/scoreStore";
type StatItemProps = {
    iconColor: string;
    value: string;
    label: string;
    icon: React.ElementType;
};
function StatItem({ icon: Icon, iconColor, value, label }: StatItemProps) {
    return (
        <div className="flex flex-row items-center ">
            <div className="bg-gray-100 rounded-full p-2 lg:p-3 mr-2 lg:mr-3">
                <Icon className={`h-4 w-4 xl:h-6 xl:w-6 ${iconColor}`} />
            </div>
            <div className="flex flex-col">
                <span className="font-bold text-base lg:text-lg 2xl:text-xl">{value}</span>
                <span className="text-xs lg:text-sm 2xl:text-lg text-gray-500">{label}</span>
            </div>
        </div>
    );
}

export function QuickStatsCard() {
    const quizData=useScoreStore((state)=>state.quizData);
    return (
        <Card className="w-full bg-gray-100 flex flex-col gap-3">
            <CardHeader className="px-4 pt-4 lg:pt-6">
                <CardTitle className="text-base lg:text-lg 2xl:text-xl font-bold text-black">Quick Statistics</CardTitle>
            </CardHeader>
            <CardContent className="px-4 pb-4 lg:pb-6">
                <div className="flex flex-row gap-2 lg:gap-3 justify-between items-center sm:items-start px-1.5 lg:px-2 xl:px-2.5">
                    <StatItem icon={Trophy} iconColor="text-yellow-500" value={`${quizData.rank}`} label="YOUR RANK" />
                    <Separator className="" orientation="vertical" />
                    <StatItem icon={FileText} iconColor="text-gray-500" value={`${quizData.percentile} %`} label="PERCENTILE" />
                    <Separator orientation="vertical" />
                    <StatItem icon={Check} iconColor="text-green-500" value={`${quizData.score} / 15`} label="CORRECT ANSWERS" />
                </div>
            </CardContent>
        </Card>
    );
}
