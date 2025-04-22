'use client';

import React, { useState } from 'react';

type Tab = 'active' | 'pending' | 'suspended';

const UserTabs = () => {
    const [activeTab, setActiveTab] = useState<Tab>('active');

    return (
        <div className="border-b border-gray-200">
            <div className="flex space-x-1 p-4">
                <button
                    className={`px-4 py-2 text-sm font-medium rounded-md ${
                        activeTab === 'active'
                            ? 'bg-white text-green-600 border border-gray-200 shadow-sm'
                            : 'text-gray-600 hover:text-gray-800'
                    }`}
                    onClick={() => setActiveTab('active')}
                >
                    Active Users
                </button>
                <button
                    className={`px-4 py-2 text-sm font-medium rounded-md ${
                        activeTab === 'pending'
                            ? 'bg-white text-green-600 border border-gray-200 shadow-sm'
                            : 'text-gray-600 hover:text-gray-800'
                    }`}
                    onClick={() => setActiveTab('pending')}
                >
                    User Verification Pending
                </button>
                <button
                    className={`px-4 py-2 text-sm font-medium rounded-md ${
                        activeTab === 'suspended'
                            ? 'bg-white text-green-600 border border-gray-200 shadow-sm'
                            : 'text-gray-600 hover:text-gray-800'
                    }`}
                    onClick={() => setActiveTab('suspended')}
                >
                    Suspended Users
                </button>
            </div>

            <div className="p-4 border-t border-gray-200">
                <h3 className="text-lg font-medium mb-4">
                    {activeTab === 'active' && 'Active Users'}
                    {activeTab === 'pending' && 'User Verification Pending'}
                    {activeTab === 'suspended' && 'Suspended Users'}
                </h3>

                <div className="flex justify-between mb-4">
                    <div className="relative max-w-xs">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            className="bg-white border border-gray-300 pl-10 pr-4 py-2 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-500 w-full"
                            placeholder="Search..."
                        />
                    </div>

                    <button
                        type="button"
                        className="px-3 py-2 text-sm font-medium rounded-md border border-gray-300 hover:bg-gray-50 flex items-center"
                    >
                        <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                        </svg>
                        Export
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserTabs;