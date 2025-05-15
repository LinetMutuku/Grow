import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { month: 'Jan', monthlyFunds: 4500000, averageInvestment: 3000000 },
    { month: 'Feb', monthlyFunds: 4250000, averageInvestment: 2750000 },
    { month: 'Mar', monthlyFunds: 3750000, averageInvestment: 2750000 },
    { month: 'Apr', monthlyFunds: 3250000, averageInvestment: 2500000 },
    { month: 'May', monthlyFunds: 4500000, averageInvestment: 2750000 },
    { month: 'Jun', monthlyFunds: 4000000, averageInvestment: 2750000 },
];

const BarChartt = () => {
    // Removed the unused renderLegend function to fix ESLint error

    return (
        <div style={{ width: '100%', height: 270 }}>
            <div className="flex justify-between items-center">
                <div className="text-sm dm-sans-500">Monthly Funds Raised vs Average Investment per Project</div>
                <div className=' dm-sans-500 border px-2 pb-[2px] rounded border-gray-300'>
                    <select name="" id="" className="flex-1 text-sm text-gray-600" >
                        <option value="">Monthly</option>
                        <option value="">Yearly</option>
                    </select>
                </div>
            </div>
            <div className="flex items-center gap-3 dm-sans-400 text-[10px] text-[#222222]">
                <div className='flex items-center gap-2'><div className="w-[9px] h-[9px] rounded-full bg-[#6B911B]"></div> Monthly Funds</div>
                <div className='flex items-center gap-2'><div className="w-[9px] h-[9px] rounded-full bg-[#B2D072]"></div> Average Investment</div>
            </div>

            <ResponsiveContainer>
                <BarChart
                    data={data}
                    margin={{ top: 30, right: 20, left: 0, bottom: 0 }}
                    barGap={4}
                    barCategoryGap={10}
                >
                    <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                    <YAxis
                        domain={[0, 4750000]}
                        ticks={[0, 500000, 1000000, 1500000, 2000000, 2500000, 2750000, 3000000, 3250000, 3500000, 3750000, 4000000, 4250000, 4500000, 4750000]} // Added more ticks below 2.5M
                        tickFormatter={(value) => `₦${value / 1000000}M`}
                        tick={{ fontSize: 12 }}
                        tickMargin={5}
                    />
                    <Tooltip formatter={(value) => `₦${value.toLocaleString()}`} />
                    <Bar
                        dataKey="monthlyFunds"
                        fill="#6B911B"
                        name="Monthly Funds"
                        barSize={20}
                    />
                    <Bar
                        dataKey="averageInvestment"
                        fill="#B2D072"
                        name="Average Investment"
                        barSize={20}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BarChartt;