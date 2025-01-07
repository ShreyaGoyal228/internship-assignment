"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { updateScoreSchema } from "./score-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useScoreStore } from "@/store/scoreStore";
import { useCallback } from "react";

export const UpdateScoreForm = () => {
    const updateQuizData = useScoreStore((state) => state.updateQuizData);
    const quizData = useScoreStore((state) => state.quizData);
    console.log("quizData in store is", quizData);
    const form = useForm<z.infer<typeof updateScoreSchema>>({
        resolver: zodResolver(updateScoreSchema),
        defaultValues: {
            rank: quizData.rank || 0,
            score: quizData.score || 0,
            percentile: quizData.percentile || 0,
        },
    });

    function onSubmit(data: z.infer<typeof updateScoreSchema>) {
        console.log("data is", data);
        updateQuizData(data.rank, data.percentile, data.percentile);
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
                            <FormItem>
                                <FormLabel>Update your Rank</FormLabel>
                                <FormControl>
                                    <Input type="number" {...field} onChange={field.onChange} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="percentile"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Update your Percentile</FormLabel>
                                <FormControl>
                                    <Input type="number" {...field} onChange={field.onChange} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="score"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Update your Current Score (out of 15)</FormLabel>
                                <FormControl>
                                    <Input type="number" {...field} onChange={field.onChange} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                    {/* <Button variant={"outline"}>Cancel</Button> */}
                </form>
            </Form>
        </>
    );
};
