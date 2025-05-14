'use client';

import React, { useState } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    ReferenceLine
} from 'recharts';

// Sample data for the chart
const data = [
    { name: 'JAN', investment: 1000000 },
    { name: 'FEB', investment: 1200000 },
    { name: 'MAR', investment: 2500000 },
    { name: 'APR', investment: 3200000 },
    { name: 'MAY', investment: 2800000 },
    { name: 'JUN', investment: 4000000 },
    { name: 'JUL', investment: 3800000 },
    { name: 'AUG', investment: 3100000 },
    { name: 'SEP', investment: 4200000 },
    { name: 'OCT', investment: 3900000 },
    { name: 'NOV', investment: 4500000 },
    { name: 'DEC', investment: 5000000 },
];

type TimeFilter = 'today' | 'this_week' | 'see_data';

interface TooltipProps {
    active?: boolean;
    payload?: Array<{value: number; name?: string}>;
    label?: string;
}

const CustomTooltip = ({ active, payload, label }: TooltipProps) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white p-2 shadow-md rounded border border-gray-200 text-xs">
                <p className="font-semibold">{label}</p>
                <p className="text-green-600">
                    ₦{payload[0].value.toLocaleString()}
                </p>
            </div>
        );
    }
    return null;
};

interface DotProps {
    cx: number;
    cy: number;
    index: number;
}

const InvestmentFlow = () => {
    const [timeFilter, setTimeFilter] = useState<TimeFilter>('this_week');

    const yAxisFormatter = (value: number) => {
        return `${(value / 1000000).toFixed(1)}M`;
    };

    // Custom label component for the data point
    const CustomizedDot = (props: DotProps) => {
        const { cx, cy, index } = props;

        // Only add the custom label at JUN (index 5)
        if (index !== 5) return null;

        return (
            <g>
                <circle cx={cx} cy={cy} r={5} fill="#4CAF50" stroke="white" strokeWidth={2} />
                <foreignObject x={cx - 60} y={cy - 40} width={120} height={35}>
                    <div className="bg-green-700 text-white p-1 rounded text-xs">
                        <div className="font-semibold text-center text-[10px]">SUM INV.</div>
                        <div className="text-center text-[10px]">400,000,000</div>
                    </div>
                </foreignObject>
            </g>
        );
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium">Investment Flow</h2>
                <div className="flex items-center space-x-1">
                    <button
                        type="button"
                        className={`px-3 py-1 text-xs font-medium rounded-md ${
                            timeFilter === 'today'
                                ? 'bg-green-500 text-white'
                                : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                        }`}
                        onClick={() => setTimeFilter('today')}
                    >
                        Today
                    </button>
                    <button
                        type="button"
                        className={`px-3 py-1 text-xs font-medium rounded-md ${
                            timeFilter === 'this_week'
                                ? 'bg-green-500 text-white'
                                : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                        }`}
                        onClick={() => setTimeFilter('this_week')}
                    >
                        This week
                    </button>
                    <button
                        type="button"
                        className="px-3 py-1 text-xs font-medium rounded-md bg-green-600 text-white hover:bg-green-700"
                        onClick={() => setTimeFilter('see_data')}
                    >
                        Set Date
                    </button>
                </div>
            </div>

            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={data}
                        margin={{ top: 20, right: 30, left: 30, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 12, fill: '#666' }}
                            padding={{ left: 10, right: 10 }}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 12, fill: '#666' }}
                            tickFormatter={yAxisFormatter}
                            width={60}
                            domain={[0, 5000000]}
                            tickCount={6}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <ReferenceLine
                            x="JUN"
                            stroke="#ddd"
                            strokeDasharray="3 3"
                            strokeWidth={1}
                        />
                        <Line
                            type="monotone"
                            dataKey="investment"
                            stroke="#8BC34A"
                            strokeWidth={2}
                            fill="#E8F5E9"
                            fillOpacity={0.6}
                            activeDot={{ r: 6, fill: '#4CAF50', stroke: 'white', strokeWidth: 2 }}
                            dot={false}
                            isAnimationActive={true}
                        />
                        <Line
                            type="monotone"
                            dataKey="investment"
                            stroke="transparent"
                            dot={<CustomizedDot />}
                            activeDot={false}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className="text-center text-xs text-gray-500 mt-1">MONTHS</div>
        </div>
    );
};

export default InvestmentFlow;