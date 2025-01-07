import { HtmlQuizCard } from "@/components/html-quiz-card";
import { QuickStatsCard } from "@/components/quick-stats-card";
import { Header } from "@/components/shared/header";
import { Sidebar } from "@/components/shared/sidebar";
import { SyllabusAnalysisCard } from "@/components/syallbus-wise-analysis";

import Image from "next/image";

export default function Home() {
    return (
        <>
            {/* left side divs */}
            <div className="flex flex-row gap-8 2xl:gap-9">
                <div className="flex flex-col gap-7 w-[61%]">
                    <HtmlQuizCard />
                    <QuickStatsCard />
                </div>
                {/* right side divs */}
                <div className="flex flex-col xl:gap-7 2xl:gap-9 w-[37%]">
                    <SyllabusAnalysisCard />
                </div>
            </div>
        </>
    );
}
