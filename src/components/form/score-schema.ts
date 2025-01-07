import { z } from "zod";

export const updateScoreSchema = z.object({
    rank: z.coerce.number({ message: "Rank is required." }).int({ message: "Rank must be a valid integer." }),
    percentile: z.coerce.number({ message: "Percentile is required." }).max(100, { message: "Percentile can't be greater than 100" }),
    score: z.coerce
        .number({ message: "Score is required." })
        .gte(0, { message: "Score cannot be a negative integer." })
        .max(15, { message: "Score cannot be greater than 15." }),
});
