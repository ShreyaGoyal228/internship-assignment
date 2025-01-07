import { HtmlQuizCard } from "@/components/html-quiz-card";
import { QuickStatsCard } from "@/components/quick-stats-card";
import { SyllabusAnalysisCard } from "@/components/syallbus-wise-analysis";


export default function Home() {
    return (
        <>
            <div className="flex flex-col xl:flex-row gap-8 2xl:gap-9">
                 {/* left side divs */}
                <div className="flex flex-col gap-7 xl:w-[61%]">
                    <HtmlQuizCard />
                    <QuickStatsCard />
                </div>
                {/* right side divs */}
                <div className="flex flex-col xl:gap-7 2xl:gap-9 xl:w-[37%]">
                    <SyllabusAnalysisCard />
                </div>
            </div>
        </>
    );
}
