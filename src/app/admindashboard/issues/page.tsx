'use client';

import React, { useState, useEffect } from 'react';
import Sidebar from '../../common/Sidebar';
import Header from '../../common/Header';
import IssueStats from '@/app/components/issuemanagement/IssueStats';
import OpenIssues from '@/app/components/issuemanagement/OpenIssues';
import PendingIssues from '@/app/components/issuemanagement/PendingIssues';
import ResolvedIssues from '@/app/components/issuemanagement/ResolvedIssues';

const IssuesPage = () => {
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('open');

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
                    title="Issue Management"
                    subtitle="Track issues, monitor status, and manage reports seamlessly."
                />

                {/* Issue Management content */}
                <div className="p-6">
                    {/* Issue Stats */}
                    <IssueStats />

                    {/* Issue Tabs and Content */}
                    <div className="bg-white rounded-lg shadow-sm mt-6">
                        <div className="border-b border-gray-200">
                            <div className="flex">
                                <button
                                    className={`px-6 py-3 text-sm font-medium ${
                                        activeTab === 'open'
                                            ? 'text-green-600 border-b-2 border-green-600 bg-green-50'
                                            : 'text-gray-500 hover:text-gray-700'
                                    }`}
                                    onClick={() => setActiveTab('open')}
                                >
                                    Open Issues
                                </button>
                                <button
                                    className={`px-6 py-3 text-sm font-medium ${
                                        activeTab === 'pending'
                                            ? 'text-green-600 border-b-2 border-green-600 bg-green-50'
                                            : 'text-gray-500 hover:text-gray-700'
                                    }`}
                                    onClick={() => setActiveTab('pending')}
                                >
                                    Pending Issues
                                </button>
                                <button
                                    className={`px-6 py-3 text-sm font-medium ${
                                        activeTab === 'resolved'
                                            ? 'text-green-600 border-b-2 border-green-600 bg-green-50'
                                            : 'text-gray-500 hover:text-gray-700'
                                    }`}
                                    onClick={() => setActiveTab('resolved')}
                                >
                                    Resolved Issues
                                </button>
                            </div>
                        </div>

                        <div className="p-4">
                            {activeTab === 'open' && <OpenIssues />}
                            {activeTab === 'pending' && <PendingIssues />}
                            {activeTab === 'resolved' && <ResolvedIssues />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IssuesPage;