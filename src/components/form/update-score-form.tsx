"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { updateScoreSchema } from "./score-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useScoreStore } from "@/store/scoreStore";

export const UpdateScoreForm = ({ handleClose }: { handleClose: () => void }) => {
    const updateQuizData = useScoreStore((state) => state.updateQuizData);
    const quizData = useScoreStore((state) => state.quizData);
    console.log("quizData in store is", quizData);
    const form = useForm<z.infer<typeof updateScoreSchema>>({
        resolver: zodResolver(updateScoreSchema),
        defaultValues: {
            rank: quizData.rank,
            score: quizData.score,
            percentile: quizData.percentile,
        },
    });

    function onSubmit(data: z.infer<typeof updateScoreSchema>) {
        updateQuizData(data.rank, data.percentile, data.score);
        handleClose();
        console.log("html quiz data updated and the data is", quizData);
    }
    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="rank"
                        render={({ field }) => (
                            <FormItem className="flex justify-between items-center">
                                <div className="flex flex-row gap-5 items-start">
                                    <div className="flex items-center justify-center text-base text-white bg-blue-900 rounded-full size-6 min-w-6">1</div>
                                    <FormLabel className="text-base">Update your <span className="font-bold">Rank</span></FormLabel>
                                </div>
                                <div>
                                    <FormControl>
                                        <Input type="number" {...field} onChange={field.onChange} />
                                    </FormControl>
                                    <FormMessage />
                                </div>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="percentile"
                        render={({ field }) => (
                            <FormItem className="flex justify-between items-center">
                                 <div className="flex flex-row gap-5 items-start">
                                    <div className="flex items-center justify-center text-base text-white bg-blue-900 rounded-full size-6 min-w-6">2</div>
                                    <FormLabel className="text-base">Update your <span className="font-bold">Percentile</span></FormLabel>
                                </div>
                                <div>
                                <FormControl>
                                    <Input type="number" {...field} onChange={field.onChange} />
                                </FormControl>
                                <FormMessage />
                                </div>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="score"
                        render={({ field }) => (
                            <FormItem className="flex justify-between items-center">
                                <div className="flex flex-row gap-5 items-start">
                                    <div className="flex items-center justify-center text-base text-white bg-blue-900 rounded-full size-6 min-w-6">3</div>
                                    <FormLabel className="text-base">Update your <span className="font-bold">Current Score (out of 15)</span></FormLabel>
                                </div> 
                                <div>
                                <FormControl>
                                    <Input type="number" {...field} onChange={field.onChange} />
                                </FormControl>
                                <FormMessage />
                                </div>
                            </FormItem>
                        )}
                    />
                    <div className="flex items-center justify-end gap-3">
                    <Button variant={"mainOutlineBtn"} onClick={() => handleClose}>Cancel</Button>
                    <Button type="submit" variant={"mainBtn"}>Submit</Button>
                    </div>
                </form>
            </Form>
        </>
    );
};
