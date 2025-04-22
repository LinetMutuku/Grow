'use client';

import React from 'react';

interface StatCardProps {
    label: string;
    value: string | number;
    colorScheme?: string;
    iconNumber?: string;
}

const StatCard: React.FC<StatCardProps> = ({
                                               label,
                                               value,
                                               colorScheme = 'green',
                                               iconNumber = '2'
                                           }) => {
    const getBgColor = (color: string) => {
        switch (color) {
            case 'green':
                return 'bg-green-50 border-green-100';
            case 'orange':
                return 'bg-orange-50 border-orange-100';
            case 'red':
                return 'bg-red-50 border-red-100';
            case 'blue':
                return 'bg-blue-50 border-blue-100';
            default:
                return 'bg-green-50 border-green-100';
        }
    };

    const getTextColor = (color: string) => {
        switch (color) {
            case 'green':
                return 'text-green-500';
            case 'orange':
                return 'text-orange-500';
            case 'red':
                return 'text-red-500';
            case 'blue':
                return 'text-blue-500';
            default:
                return 'text-green-500';
        }
    };

    const bgColor = getBgColor(colorScheme);
    const textColor = getTextColor(colorScheme);

    return (
        <div className={`p-3 rounded-md border ${bgColor} mb-2 relative`}>
            <span className="absolute top-2 right-2 text-gray-400 text-xs">{iconNumber}</span>
            <p className="text-xs text-gray-500 uppercase tracking-wide">
                {label}
            </p>
            <p className={`text-xl font-bold ${textColor} mt-1`}>
                {value}
            </p>
        </div>
    );
};

const UserStats = () => {
    return (
        <div className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
                <StatCard
                    label="VERIFICATION PENDING"
                    value="13,000"
                    colorScheme="green"
                />
                <StatCard
                    label="SUSPENDED ACCOUNTS"
                    value="1,628"
                    colorScheme="orange"
                />
                <StatCard
                    label="ISSUE PENDING ATTENTION"
                    value="128"
                    colorScheme="red"
                />
                <StatCard
                    label="ISSUES RESOLVED"
                    value="1,628"
                    colorScheme="blue"
                />
            </div>

            <button
                type="button"
                className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm font-medium"
            >
                View All Users
            </button>
        </div>
    );
};

export default UserStats;