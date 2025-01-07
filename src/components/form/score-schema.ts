import { z } from "zod";

export const updateScoreSchema = z.object({
    rank: z.coerce.number({ message: "Rank is required." }).int({ message: "Rank must be a valid integer." }).gte(1,{message:"Rank must be a valid integer."}),
    percentile: z.coerce.number({ message: "Percentile is required." }).gte(1,{message:"Percentile must be valid number."}).max(100, { message: "Percentile can't be greater than 100" }),
    score: z.coerce
        .number()
        .min(1,{message:"Score must be a valid integer."})
        .gte(0, { message: "Score cannot be a negative integer." })
        .max(15, { message: "Score cannot be greater than 15." }),
});
