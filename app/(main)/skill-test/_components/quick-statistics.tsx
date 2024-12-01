import React from 'react'
import { useStore } from "@/hooks/useStore";

const QuickStatistics: React.FC = () => {
    const { rank, score, numberOfQuestions } = useStore();
    return (
        <div className="text-xs sm:text-sm md:text-md flex flex-col border rounded-md p-6 gap-y-4">
            <h1 className="text-black font-semibold">Quick Statistics</h1>
            <div className="flex items-center divide-x w-full justify-around">

                <div className="flex w-full justify-center gap-x-1" >
                    <div className="text-xl p-2 bg-gray-200 rounded-full">🏆</div>
                    <div className="flex flex-col items-start justify-start">
                        <span className="text-black font-semibold">{rank}</span>
                        <span className="text-xs uppercase line-clamp-1">your rank</span>
                    </div>
                </div>
                <div className="flex w-full justify-center gap-x-1" >
                    <div className="text-xl p-2 bg-gray-200 rounded-full">🗒</div>
                    <div className="flex flex-col items-start justify-start">
                        <span className="text-black font-semibold">{score}%</span>
                        <span className="text-xs uppercase line-clamp-1">Percentile</span>
                    </div>
                </div>
                <div className="flex w-full justify-center gap-x-1" >
                    <div className="text-xl p-2 bg-gray-200 rounded-full">✅</div>
                    <div className="flex flex-col items-start justify-start">
                        <span className="text-black font-semibold">{numberOfQuestions} / 15</span>
                        <span className="text-xs uppercase line-clamp-1">Correct Answers</span>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default QuickStatistics
