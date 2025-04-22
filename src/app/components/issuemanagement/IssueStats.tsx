'use client';

import React from 'react';

const IssueStats = () => {
    return (
        <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-gray-500 text-sm uppercase">Open Issues</p>
                <p className="text-2xl font-bold mt-1">370</p>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-gray-500 text-sm uppercase">Pending Issues</p>
                <p className="text-2xl font-bold mt-1">128</p>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-gray-500 text-sm uppercase">Resolved Issues</p>
                <p className="text-2xl font-bold mt-1">1,628</p>
            </div>
        </div>
    );
};

export default IssueStats;