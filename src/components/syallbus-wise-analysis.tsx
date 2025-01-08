import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
const syallbusAnalysisContent = [
    {
        heading: "HTML Tools, Forms, History",
        colorBar: "bg-blue-400",
        colorBarBg: "bg-blue-100",
        colorText: "text-blue-400",
        percentage: "80%",
    },
    {
        heading: "Tags & References in HTML",
        colorBar: "bg-orange-400",
        colorBarBg: "bg-orange-100",
        colorText: "text-orange-400",
        percentage: "60%",
    },
    {
        heading: "Tables & References in HTML",
        colorBar: "bg-red-400",
        colorBarBg: "bg-red-100",
        colorText: "text-red-400",
        percentage: "24%",
    },
    {
        heading: "Tables & CSS Basics",
        colorBar: "bg-green-400",
        colorBarBg: "bg-green-100",
        colorText: "text-green-400",
        percentage: "96%",
    },
];
export function SyllabusAnalysisCard() {
    return (
        <Card className="w-full">
            <CardHeader className="p-6 lg:p-8">
                <CardTitle className="text-base lg:text-lg 2xl:text-xl font-bold text-black">Syllabus Wise Analysis</CardTitle>
            </CardHeader>
            <CardContent className="lg:pb-12 pb-10 px-6 lg:px-8">
                <div className="space-y-6 lg:space-y-8">
                    {syallbusAnalysisContent.map((item, index) => (
                        <div key={index} className="flex flex-col gap-3 justify-start ">
                            <div className="font-medium text-gray-500 text-sm lg:text-base 2xl:text-lg">{item.heading}</div>
                            <div className="flex items-center justify-between">
                                <div className={`w-2/3 ${item.colorBarBg} rounded-full h-1.5 md:h-2.5`}>
                                    <div className={`h-1.5 md:h-2.5 rounded-full ${item.colorBar}`} style={{ width: item.percentage }}></div>
                                </div>
                                <div className={`text-sm lg:text-base 2xl:text-xl font-bold ${item.colorText}`}>{item.percentage}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
