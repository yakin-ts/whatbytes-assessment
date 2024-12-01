import React from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface SimplePieChartProps {
  solved: number;
  total?: number;
}

const COLORS = ['#0088FE', '#FF8042'];

const SimplePieChart: React.FC<SimplePieChartProps> = ({ solved, total = 15 }) => {
  const data = [
    { name: 'Solved', value: solved },
    { name: 'Unsolved', value: total - solved },
  ];

  return (
    <ResponsiveContainer width="100%" height={300} className="pt-4">
      <PieChart>
        <Pie
          dataKey="value"
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={40}
          outerRadius={80}
          fill="#82ca9d"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default SimplePieChart;