"use client";
import { useState } from "react";
import { AlertDialog, AlertDialogContent } from "./ui/alert-dialog";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { UpdateScoresCard } from "./update-score-card";
export function HtmlQuizCard() {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <Card className="">
                <CardContent className="py-6 px-4 2xl:py-7 2xl:px-5 ">
                    <div className="flex items-center justify-between gap-6">
                        <div className="flex flex-row gap-5 2xl:gap-8 items-center">
                            <div className="flex-shrink-0 size-[60px] 2xl:size-[80px] relative">
                                <Image src="/html-logo.png" alt="HTML Logo" fill={true} className="rounded-md" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h2 className="text-lg 2xl:text-xl font-bold text-black">Hyper Text Markup Language</h2>
                                <p className="text-base 2xl:text-lg text-gray-600">Questions: 08 | Duration: 15mins | Submitted on 5 June 2021</p>
                            </div>
                        </div>
                        <Button
                            onClick={() => setOpen(!open)}
                            className="px-6 py-5 2xl:px-8 2xl:py-6 font-bold text-sm 2xl:text-base bg-blue-900 text-white border-2 border-black hover:bg-blue-800"
                        >
                            Update
                        </Button>
                    </div>
                </CardContent>
            </Card>
            <AlertDialog open={open} onOpenChange={setOpen}>
                <AlertDialogContent>
                    <UpdateScoresCard />
                    {/* <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter> */}
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}
