'use client';

import React, { useState, useEffect } from 'react';
import Sidebar from '../common/Sidebar';
import Header from '../common/Header';
import KeyMetrics from '../components/admindashboard/KeyMetrics';
import InvestmentFlow from '../components/admindashboard/InvestmentFlow';
import UserOverview from '../components/admindashboard/UserOverview';
import UserStats from '../components/admindashboard/UserStats';
import RecentActivities from '../components/admindashboard/RecentActivities';

const AdminDashboardPage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate data loading
        setTimeout(() => {
            setLoading(false);
        }, 1000); // Adjust loading time as needed
    }, []);

    // Loading spinner component
    const LoadingSpinner = () => (
        <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-50">
            <div className="relative w-24 h-24">
                {/* Main spinner rings */}
                <div className="absolute top-0 left-0 right-0 bottom-0 rounded-full border-4 border-t-purple-500 border-r-transparent border-b-purple-200 border-l-purple-300 animate-spin"></div>
                <div className="absolute top-3 left-3 right-3 bottom-3 rounded-full border-4 border-t-transparent border-r-purple-400 border-b-purple-500 border-l-transparent animate-spin animation-delay-150"></div>
                <div className="absolute top-6 left-6 right-6 bottom-6 rounded-full border-4 border-t-purple-300 border-r-purple-200 border-b-transparent border-l-purple-500 animate-spin animation-delay-300"></div>

                {/* Central pulsing element */}
                <div className="absolute top-10 left-10 right-10 bottom-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 animate-pulse"></div>
            </div>

            <div className="mt-8 text-center">
                <p className="text-purple-700 font-semibold text-lg">Loading Dashboard</p>
                <p className="text-gray-500 text-sm mt-2">Preparing your admin dashboard...</p>
            </div>

            {/* Small dots animation at the bottom */}
            <div className="flex items-center justify-center mt-6 space-x-2">
                <div className="h-2.5 w-2.5 rounded-full bg-purple-600 animate-bounce" style={{ animationDelay: '0s' }}></div>
                <div className="h-2.5 w-2.5 rounded-full bg-purple-600 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="h-2.5 w-2.5 rounded-full bg-purple-600 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>

            <style jsx>{`
                @keyframes delayedSpin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                .animation-delay-150 {
                    animation-delay: 0.15s;
                }
                .animation-delay-300 {
                    animation-delay: 0.3s;
                }
            `}</style>
        </div>
    );

    if (loading) {
        return <LoadingSpinner />;
    }

    return (
        <div className="flex min-h-screen bg-gray-50 text-black">
            {/*  Sidebar */}
            <Sidebar />

            {/* Main content area */}
            <div
                className="flex-1 overflow-auto w-full transition-all duration-300 ease-in-out ml-20 md:ml-64"
            >
                {/* Header */}
                <Header
                    title="Admin Dashboard"
                    subtitle="Manage security, compliance, reports and transactions."
                />

                {/* Dashboard content */}
                <div className="p-6 bg-gray-50">
                    <KeyMetrics />
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                        <div className="lg:col-span-3 space-y-6">
                            <InvestmentFlow />
                            <UserOverview />
                        </div>
                        <div className="space-y-6">
                            <UserStats />
                            <RecentActivities />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboardPage;