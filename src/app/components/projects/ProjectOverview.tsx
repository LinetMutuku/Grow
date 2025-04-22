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

const ProjectOverview = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <OverviewCard
                label="TOTAL PROJECTS"
                value="120"
            />
            <OverviewCard
                label="ACTIVE PROJECTS"
                value="75"
            />
            <OverviewCard
                label="PENDING PROJECTS"
                value="30"
            />
            <OverviewCard
                label="COMPLETED PROJECTS"
                value="15"
            />
        </div>
    );
};

export default ProjectOverview;