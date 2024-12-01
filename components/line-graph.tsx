"use client"

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';



interface LineGraphProps {
    studentPercentage: number;
    data: {
        score: number;
        numberOfStudents: number;
    }[];
}

const LineGraph: React.FC<LineGraphProps> = ({ studentPercentage, data}) => {
    return (
        <div className="w-full flex justify-center items-center p-5">
            <ResponsiveContainer width="100%" height={300}>
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="score" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line 
                        type="monotone" 
                        dataKey="numberOfStudents" 
                        stroke="#8884d8" 
                        activeDot={{ r: 8 }}
                    />
                    <ReferenceLine x={studentPercentage} stroke="red" label={{ position: 'top', value: `${studentPercentage}%` }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default LineGraph;