'use client';

import React, { useState, useEffect } from 'react';
import Sidebar from '../../common/Sidebar';
import Header from '../../common/Header';
import InvestmentOverview from '../../components/investments/InvestmentOverview';
import InvestmentTabs from '../../components/investments/InvestmentTabs';

const InvestmentPage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate data loading
        setTimeout(() => {
            setLoading(false);
        }, 1000); // Adjust loading time as needed
    }, []);

    // Blue wave loading spinner
    if (loading) {
        return (
            <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-50">
                {/* Simple line spinner */}
                <div className="w-12 flex justify-between">
                    <div className="w-1 h-5 bg-blue-600 animate-[wave_1s_ease-in-out_infinite]" style={{ animationDelay: '0s' }}></div>
                    <div className="w-1 h-5 bg-blue-600 animate-[wave_1s_ease-in-out_infinite]" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-1 h-5 bg-blue-600 animate-[wave_1s_ease-in-out_infinite]" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-1 h-5 bg-blue-600 animate-[wave_1s_ease-in-out_infinite]" style={{ animationDelay: '0.3s' }}></div>
                    <div className="w-1 h-5 bg-blue-600 animate-[wave_1s_ease-in-out_infinite]" style={{ animationDelay: '0.4s' }}></div>
                </div>
                <p className="text-gray-600 text-sm mt-4">Loading</p>
                <style jsx>{`
                    @keyframes wave {
                        0%, 100% { transform: scaleY(1); }
                        50% { transform: scaleY(2); }
                    }
                `}</style>
            </div>
        );
    }

    return (
        <div className="flex h-screen bg-gray-50 text-black">
            {/* Animated Sidebar */}
            <Sidebar />

            {/* Main content area */}
            <div
                className="flex-1 overflow-auto w-full transition-all duration-300 ease-in-out ml-20 md:ml-64"
            >
                {/* Header */}
                <Header
                    title="Investment & Fund Tracking Page"
                    subtitle="Track investments, monitor funds, and manage transactions seamlessly."
                />

                {/* Investment content */}
                <div className="p-6">
                    {/* Investment Overview */}
                    <InvestmentOverview />

                    {/* Investment Tabs and Content */}
                    <div className="bg-white rounded-md shadow-sm mt-6">
                        <InvestmentTabs />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvestmentPage;