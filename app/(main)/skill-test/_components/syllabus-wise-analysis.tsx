import React from 'react'
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils"

interface SyllabusAnalysisProps {
    title: string;
    data: {
        name: string;
        percent: number;
    }[]
}
const SyllabusAnalysis: React.FC<SyllabusAnalysisProps> = ({ title, data }) => {
    // style the progress bar colors based on the percentage
    const progressColor = (percent: number) => {
        if (percent <= 50) {
            return ["text-red-500","bg-red-500", "bg-red-500/10"]
        } else if (percent <= 70 && percent > 50) {
           return ["text-orange-500", "bg-orange-500", "bg-orange-500/10"]
        } else if (percent <= 90 && percent > 70) {
            return ["text-blue-500", "bg-blue-500", "bg-blue-500/10"]
        }
        return ["text-green-500", "bg-green-500", "bg-green-500/10"]
    }


    console.log('html stuff', data)

    return (
        <div className="flex flex-col p-6 border rounded-md">
            <div className="text-black font-semibold text-lg">{title}</div>
            <div className="flex flex-col mt-4 gap-y-2">
                {data.map((item, index) => {
                    const currentColor = progressColor(item.percent)
                    
                    return (
                        <div className="flex flex-col items-start justify-center py-2 gap-y-2" key={index}>
                            <div className="">{item.name}</div>
                            <div className="flex justify-between w-full gap-x-4 items-center">
                                <Progress value={item.percent} className={cn("text-sm", currentColor[2])} color={currentColor[1]} />
                                <div className={currentColor[0]}>{item.percent}%</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SyllabusAnalysis
