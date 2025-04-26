'use client';

import React from 'react';

interface MetricCardProps {
    label: string;
    value: string | number;
    borderColor?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
                                                   label,
                                                   value,
                                                   borderColor = 'border-blue-500',
                                               }) => {
    return (
        <div className={`bg-white border-t-4 ${borderColor} p-3 rounded-md shadow-sm`}>
            <p className="text-xs text-gray-500 uppercase tracking-wide">{label}</p>
            <p className="text-lg font-bold text-gray-800 mt-1">{value}</p>
        </div>
    );
};

interface KeyMetricsProps {
    metrics?: {
        totalActiveUsers: number;
        totalFundInvested: string;
        returnsGenerated: string;
        withdrawalsProcessed: string;
    };
}

const KeyMetrics: React.FC<KeyMetricsProps> = ({
                                                   metrics = {
                                                       totalActiveUsers: 162370,
                                                       totalFundInvested: '₦750,500,000',
                                                       returnsGenerated: '₦930,700,022',
                                                       withdrawalsProcessed: '₦7500,003,098',
                                                   },
                                               }) => {
    return (
        <div>
            <h2 className="text-base font-medium mb-3">Key Metrics Summary</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                <MetricCard
                    label="TOTAL ACTIVE USERS"
                    value={metrics.totalActiveUsers.toLocaleString()}
                    borderColor="border-blue-500"
                />
                <MetricCard
                    label="TOTAL FUND INVESTED"
                    value={metrics.totalFundInvested}
                    borderColor="border-green-500"
                />
                <MetricCard
                    label="RETURNS GENERATED"
                    value={metrics.returnsGenerated}
                    borderColor="border-yellow-500"
                />
                <MetricCard
                    label="WITHDRAWALS PROCESSED"
                    value={metrics.withdrawalsProcessed}
                    borderColor="border-purple-500"
                />
            </div>
        </div>
    );
};

export default KeyMetrics;