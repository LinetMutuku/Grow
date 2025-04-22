'use client';

import React, { useState } from 'react';
import {
    FiSearch,
} from 'react-icons/fi';

// Sample activities data
const activitiesData = [
    {
        id: 1,
        type: 'registration',
        title: 'New User Registered',
        description: 'sample@email.com',
        subtext: 'Verification Pending',
        timestamp: '11:30 AM',
        date: 'Today',
        icon: '👤',
        color: 'green',
    },
    {
        id: 2,
        type: 'verification',
        title: 'New User Verified',
        description: 'adaEden@email.com',
        subtext: 'Adam Eden',
        timestamp: '12:00 PM',
        date: 'Today',
        icon: '🔵',
        color: 'blue',
    },
    {
        id: 3,
        type: 'investment',
        title: 'New Investment',
        description: 'Sarah Lee Invested New Investment in Rice',
        timestamp: '2:00 PM',
        date: 'Today',
        icon: '💰',
        color: 'purple',
    },
    {
        id: 4,
        type: 'withdrawal',
        title: 'Withdrawal',
        description: 'Aminata withdrew ROI for second quarter',
        timestamp: '3:00 PM',
        date: 'Today',
        icon: '📥',
        color: 'teal',
    },
    {
        id: 5,
        type: 'market',
        title: 'Market Price Update',
        description: 'Maize price increased by 10% in local markets',
        timestamp: '3:30 PM',
        date: 'Today',
        icon: '📈',
        color: 'orange',
    },
    {
        id: 6,
        type: 'issue',
        title: 'Issue Reported',
        description: 'laye@gmail.com just reported an issue',
        timestamp: 'Mon',
        date: 'Yesterday',
        icon: '⚠️',
        color: 'red',
    },
    {
        id: 7,
        type: 'land',
        title: 'Land Preparation Started',
        description: '"Wheat Farming Project" began soil preparation',
        timestamp: 'Tues',
        date: 'Yesterday',
        icon: '🌱',
        color: 'yellow',
    },
    {
        id: 8,
        type: 'project',
        title: 'New Project Launched',
        description: 'Rice Farming Cycle 5 is now open for funding',
        timestamp: 'Weds',
        date: 'This week',
        icon: '🚀',
        color: 'cyan',
    },
];

type DateFilter = 'today' | 'yesterday' | 'this_week';

interface RecentActivitiesProps {
    maxActivities?: number;
}

const ActivityIcon = ({ type }: { type: string }) => {
    switch (type) {
        case 'registration':
            return (
                <div className="flex-shrink-0 w-7 h-7 bg-green-50 text-green-600 rounded-full flex items-center justify-center shadow-sm border border-green-100">
                    <span className="text-green-600 text-xs">✓</span>
                </div>
            );
        case 'verification':
            return (
                <div className="flex-shrink-0 w-7 h-7 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shadow-sm border border-blue-100">
                    <span className="text-blue-600 text-xs">➕</span>
                </div>
            );
        case 'investment':
            return (
                <div className="flex-shrink-0 w-7 h-7 bg-yellow-50 text-yellow-600 rounded-full flex items-center justify-center shadow-sm border border-yellow-100">
                    <span className="text-yellow-600 text-xs">💰</span>
                </div>
            );
        case 'withdrawal':
            return (
                <div className="flex-shrink-0 w-7 h-7 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center shadow-sm border border-teal-100">
                    <span className="text-teal-600 text-xs">📥</span>
                </div>
            );
        case 'market':
            return (
                <div className="flex-shrink-0 w-7 h-7 bg-red-50 text-red-600 rounded-full flex items-center justify-center shadow-sm border border-red-100">
                    <span className="text-red-600 text-xs">📈</span>
                </div>
            );
        default:
            return (
                <div className="flex-shrink-0 w-7 h-7 bg-gray-50 text-gray-600 rounded-full flex items-center justify-center shadow-sm border border-gray-100">
                    <span className="text-gray-600 text-xs">•</span>
                </div>
            );
    }
};

const RecentActivities: React.FC<RecentActivitiesProps> = ({ maxActivities = 6 }) => {
    const [dateFilter, setDateFilter] = useState<DateFilter>('today');

    // Filter activities based on date filter
    const filteredActivities = activitiesData.filter(activity => {
        if (dateFilter === 'today') return activity.date === 'Today';
        if (dateFilter === 'yesterday') return activity.date === 'Yesterday';
        return true; // 'this_week' shows all
    }).slice(0, maxActivities);

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="p-5 border-b border-gray-100">
                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-medium text-gray-800">Recent Activities</h2>
                    <p className="text-xs text-gray-500 font-medium">5 new activities today</p>
                </div>

                <div className="flex space-x-2 mt-4">
                    <button
                        type="button"
                        className={`px-4 py-1.5 text-xs font-medium rounded-md transition-colors ${
                            dateFilter === 'today'
                                ? 'bg-red-100 text-red-800'
                                : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                        }`}
                        onClick={() => setDateFilter('today')}
                    >
                        Today
                    </button>
                    <button
                        type="button"
                        className={`px-4 py-1.5 text-xs font-medium rounded-md transition-colors ${
                            dateFilter === 'yesterday'
                                ? 'bg-red-100 text-red-800'
                                : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                        }`}
                        onClick={() => setDateFilter('yesterday')}
                    >
                        Yesterday
                    </button>
                    <button
                        type="button"
                        className={`px-4 py-1.5 text-xs font-medium rounded-md transition-colors ${
                            dateFilter === 'this_week'
                                ? 'bg-red-100 text-red-800'
                                : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                        }`}
                        onClick={() => setDateFilter('this_week')}
                    >
                        This week
                    </button>
                </div>

                {/* Search Bar */}
                <div className="relative mt-4">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiSearch className="text-gray-400 h-4 w-4" />
                    </div>
                    <input
                        type="text"
                        className="w-full bg-gray-50 pl-9 pr-4 py-2 rounded-md text-sm border border-gray-200 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 transition-colors"
                        placeholder="Search activities..."
                    />
                </div>
            </div>

            <div className="divide-y divide-gray-100 max-h-[420px] overflow-y-auto">
                {filteredActivities.map((activity) => (
                    <div key={activity.id} className="p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex space-x-3">
                            <ActivityIcon type={activity.type} />
                            <div className="min-w-0 flex-1">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-sm font-medium text-gray-800">{activity.title}</h3>
                                    <p className="text-xs text-gray-500 font-medium">{activity.timestamp}</p>
                                </div>
                                <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
                                {activity.subtext && (
                                    <p className="text-xs text-gray-500 mt-0.5">{activity.subtext}</p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="p-3 border-t border-gray-100 text-center">
                <button className="text-sm text-red-600 hover:text-red-800 font-medium">
                    View All Activities
                </button>
            </div>
        </div>
    );
};

export default RecentActivities;