import SimplePieChart from "@/components/simple-pie-chart"
import React from 'react'

interface QuestionAnalysisProps {
    numberOfQuestions: number;
}

const QuestionAnalysis:React.FC<QuestionAnalysisProps> = ( { numberOfQuestions }) => {
    return (
        <div className="w-full flex max-h-fit flex-col justify-center items-center border rounded-md p-6">
            <div className="flex flex-col w-full">
                <div className="flex justify-between items-center">
                    <h1 className="text-black font-semibold">Question Analysis</h1>
                    <div className="flex h-10 w-10 rounded-full text-secondary items-center justify-center text-sm font-semibold text-nowrap">{numberOfQuestions}/15</div>
                </div>
                <p className="text-xs text-gray-500"><b>You scored {numberOfQuestions} Correct out of 15.</b> However it still needs improvement.</p>
            </div>
            <div className="w-full">
                <div className="w-full">

                    <SimplePieChart solved={numberOfQuestions} />
                </div>
            </div>
        </div>
    )
}

export default QuestionAnalysis
