import { UpdateScoreForm } from "./form/update-score-form";
import { Card, CardHeader, CardContent, CardTitle } from "./ui/card";
import Image from "next/image";

export function UpdateScoresCard({handleCloseDialog}:{handleCloseDialog:()=>void}) {
    return (
        <Card className="w-full border-none shadow-transparent flex flex-col gap-5">
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-2xl font-bold text-black">Update Scores</CardTitle>
                <div className="relative aspect-square h-10 w-10">
                    <Image src="/html-logo.png" alt="HTML Logo" fill objectFit="contain" />
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                <UpdateScoreForm handleClose={handleCloseDialog}/>
            </CardContent>
        </Card>
    );
}
