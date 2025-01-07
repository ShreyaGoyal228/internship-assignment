"use client";
import { useState } from "react";
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogTitle } from "./ui/alert-dialog";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { UpdateScoresCard } from "./update-score-card";
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

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
                        <Button variant="mainBtn" size="sm"
                            onClick={() => setOpen(!open)}
                        >
                            Update
                        </Button>
                    </div>
                </CardContent>
            </Card>
            <AlertDialog open={open} onOpenChange={setOpen}>
                <AlertDialogContent aria-describedby="score-card-description" className="w-[60%] xl:w-1/2 2xl:w-[40%]">
                    <VisuallyHidden id="score-card-description">
                        <AlertDialogTitle>Update quiz score form</AlertDialogTitle>
                        <AlertDialogDescription>Update quiz scores and feedback for HTML assessment</AlertDialogDescription>
                    </VisuallyHidden>
                    <UpdateScoresCard handleCloseDialog={() => setOpen(false)} />
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}
