import LineGraph from "@/components/line-graph"
import React from 'react'
import { skillTestContents } from "@/contents/skill-test-content"

interface ComparisonGraphProps {
    studentPercentage: number;
};

const ComparisonGraph:React.FC<ComparisonGraphProps> = ({ studentPercentage }) => {
    return (
        <div className="flex flex-col border rounded-md p-6">
            <div className="flex w-full justify-between gap-x-4 items-center">
                <div className="flex flex-col gap-y-4">
                    <h1 className="text-black font-semibold">Comparison Graph</h1>
                    <p className="text-xs text-gray-500"><b>You scored {studentPercentage}% percentile.</b>, which is lower than the average percentile 80% of all engineers who took the test.</p>
                </div>
                <div className="flex p-1 rounded-full bg-gray-200/70 items-center justify-center">📈</div>
            </div>
            <LineGraph studentPercentage={studentPercentage} data={skillTestContents.comparisonGraph.data}/>
        </div>
    )
}

export default ComparisonGraph
