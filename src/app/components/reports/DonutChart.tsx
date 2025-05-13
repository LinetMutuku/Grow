import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const styles = `
.custom-legend {
  margin-top: -20px !important;
}
.donut-segment {
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1)); /* Add shadow to donut segments */
}
`;

const data = [
  { name: 'Project Success', value: 80 },
  { name: 'Failed Projects', value: 20 },
];

const COLORS = ['#6B911B', '#B2D072']; // Green for success, light gray for failed

const DonutChart = () => {
  const renderLegend = (value) => {
    return <span style={{ color: 'black', fontSize: '10px'}}>{value}</span>;
  };

  return (
    <div style={{ width: '100%', height: 270 }}>
     <div className="text-sm dm-sans-500 text-[#1E1E1ECC] mb-3">Project Success Rate vs Failed Projects</div>
     <style>{styles}</style>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
             className="donut-segment"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend 
            formatter={renderLegend}
            layout="horizontal" // Horizontal layout for legend
            verticalAlign="bottom" // Place legend below the chart
            align="left" // Center the legend
               />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DonutChart;