'use client';

import React from 'react';

interface MetricCardProps {
    label: string;
    value: string | number;
}

const MetricCard: React.FC<MetricCardProps> = ({ label, value }) => {
    return (
        <div className="bg-white p-4 rounded-md shadow-sm border border-gray-100">
            <p className="text-xs text-gray-500 uppercase tracking-wide">{label}</p>
            <p className="text-xl font-bold text-gray-800 mt-1">{value}</p>
        </div>
    );
};

const UserOverviewMetrics = () => {
    return (
        <div>
            <h2 className="text-lg font-medium mb-4">User Overview Metric</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <MetricCard
                    label="TOTAL ACTIVE USERS"
                    value="162,370"
                />
                <MetricCard
                    label="PENDING VERIFICATIONS"
                    value="1230"
                />
                <MetricCard
                    label="SUSPENDED USERS"
                    value="73"
                />
            </div>
        </div>
    );
};

export default UserOverviewMetrics;