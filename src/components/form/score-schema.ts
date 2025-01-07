import { z } from "zod";

export const updateScoreSchema = {
    rank: z.coerce.number().int().gte(1).min(1, { message: "Rank is required" }),
    percentile: z.coerce.number().int().min(1, { message: "Percentile is required" }).max(100, { message: "Percentile can't be greater than 100" }),
    score: z.coerce.number().int().min(1, { message: "Score is required" }).max(15, { message: "Score cannot be greater than 15" }),
};
