'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

interface StatCardProps {
    label: string;
    value: string | number;
    colorScheme?: string;
    iconNumber?: string;
    onClick?: () => void;
}

const StatCard: React.FC<StatCardProps> = ({
                                               label,
                                               value,
                                               colorScheme = 'green',
                                               iconNumber = '2',
                                               onClick
                                           }) => {
    const getBgColor = (color: string) => {
        switch (color) {
            case 'green':
                return 'bg-green-50 border-green-100';
            case 'orange':
                return 'bg-orange-50 border-orange-100';
            case 'red':
                return 'bg-red-50 border-red-100';
            case 'blue':
                return 'bg-blue-50 border-blue-100';
            default:
                return 'bg-green-50 border-green-100';
        }
    };

    const getTextColor = (color: string) => {
        switch (color) {
            case 'green':
                return 'text-green-500';
            case 'orange':
                return 'text-orange-500';
            case 'red':
                return 'text-red-500';
            case 'blue':
                return 'text-blue-500';
            default:
                return 'text-green-500';
        }
    };

    const bgColor = getBgColor(colorScheme);
    const textColor = getTextColor(colorScheme);

    return (
        <div
            className={`p-3 rounded-md border ${bgColor} relative cursor-pointer hover:opacity-90 transition-opacity`}
            onClick={onClick}
        >
            <span className="absolute top-2 right-2 text-gray-400 text-xs">{iconNumber}</span>
            <p className="text-xs text-gray-500 uppercase tracking-wide">
                {label}
            </p>
            <p className={`text-xl font-bold ${textColor} mt-1`}>
                {value}
            </p>
        </div>
    );
};

const UserStats = () => {
    const router = useRouter();

    const handleViewAllUsers = () => {
        router.push('/admindashboard/users');
    };

    const handleVerificationPending = () => {
        router.push('/admindashboard/users?filter=verification_pending');
    };

    const handleSuspendedAccounts = () => {
        router.push('/admindashboard/users?filter=suspended');
    };

    const handleIssuePending = () => {
        router.push('/admindashboard/issues?filter=pending');
    };

    const handleIssuesResolved = () => {
        router.push('/admindashboard/issues?filter=resolved');
    };

    return (
        <div className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
                <StatCard
                    label="VERIFICATION PENDING"
                    value="13,000"
                    colorScheme="green"
                    onClick={handleVerificationPending}
                />
                <StatCard
                    label="SUSPENDED ACCOUNTS"
                    value="1,628"
                    colorScheme="orange"
                    onClick={handleSuspendedAccounts}
                />
                <StatCard
                    label="ISSUE PENDING ATTENTION"
                    value="128"
                    colorScheme="red"
                    onClick={handleIssuePending}
                />
                <StatCard
                    label="ISSUES RESOLVED"
                    value="1,628"
                    colorScheme="blue"
                    onClick={handleIssuesResolved}
                />
            </div>

            <button
                type="button"
                className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm font-medium"
                onClick={handleViewAllUsers}
            >
                View All Users
            </button>
        </div>
    );
};

export default UserStats;