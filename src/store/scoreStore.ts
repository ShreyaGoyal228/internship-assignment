import { create } from "zustand";
import { persist } from "zustand/middleware";
export type ICartStoreProps = {
    rank: number;
    percentile: number;
    score: number;
};
export type IScoreStore = {
    quizData: ICartStoreProps;
    updateQuizData: (rank: number, percentile: number, score: number) => void;
};
export const useScoreStore = create<IScoreStore>()(
    persist(
        (set) => ({
            quizData: {
                rank: 1,
                percentile: 30,
                score: 10,
            },
            updateQuizData: (rank, percentile, score) => {
                set({
                    quizData: {
                        rank: rank,
                        percentile: percentile,
                        score: score,
                    },
                });
            },
        }),
        {
            version: 2,
            name: "quiz-score-storage",
        }
    )
);
