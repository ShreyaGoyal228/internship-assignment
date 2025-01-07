import { UpdateScoreForm } from "./form/update-score-form";
import { Card, CardHeader, CardContent, CardTitle } from "./ui/card";
import Image from "next/image";

export function UpdateScoresCard() {
    return (
        <Card className="w-full max-w-3xl border-none shadow-transparent">
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-2xl font-bold text-black">Update Scores</CardTitle>
                <div className="relative aspect-square h-10 w-10">
                    <Image src="/html-logo.png" alt="HTML Logo" fill objectFit="contain" />
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                <UpdateScoreForm />
            </CardContent>
        </Card>
    );
}
