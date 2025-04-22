'use client';

import React from 'react';

interface OverviewCardProps {
    label: string;
    value: string | number;
}

const OverviewCard: React.FC<OverviewCardProps> = ({ label, value }) => {
    return (
        <div className="bg-white p-4 rounded-md shadow-sm border border-gray-100">
            <p className="text-xs text-gray-500 uppercase tracking-wide">{label}</p>
            <p className="text-xl font-bold text-gray-800 mt-1">{value}</p>
        </div>
    );
};

const InvestmentOverview = () => {
    return (
        <div>
            <h2 className="text-lg font-medium mb-4">Investment Overview</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <OverviewCard
                    label="TOTAL FUNDS INVESTED"
                    value="₦250,000,000"
                />
                <OverviewCard
                    label="TOTAL RETURNS GENERATED"
                    value="₦75,000,000"
                />
                <OverviewCard
                    label="TOTAL WITHDRAW"
                    value="₦100,000,000"
                />
                <OverviewCard
                    label="ACTIVE INVESTORS"
                    value="5,200"
                />
            </div>
        </div>
    );
};

export default InvestmentOverview;