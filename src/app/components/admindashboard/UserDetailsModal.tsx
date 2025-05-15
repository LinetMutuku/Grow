'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FiX, FiDownload } from 'react-icons/fi';
import { SuspendConfirmationDialog, DeleteConfirmationDialog } from './ConfirmationDialog';

interface UserDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    user: {
        id: number;
        name: string;
        email: string;
        phone?: string;
        status: string;
        totalFund?: string;
        investments: number;
        dateRegistered: string;
        issuesRaised?: number;
        issuesResolved?: number;
        project?: {
            name: string;
            location: string;
            description: string;
            status: string;
            investment: string;
            expectedROI: string;
            startDate: string;
            endDate: string;
        };
    };
}

const UserDetailsModal: React.FC<UserDetailsModalProps> = ({ isOpen, onClose, user }) => {
    const [showSuspendDialog, setShowSuspendDialog] = useState(false);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);

    if (!isOpen) return null;

    const handleSuspend = (reason?: string) => {
        // Add your suspend logic here
        console.log('User suspended:', user.id, 'Reason:', reason);
        setShowSuspendDialog(false);
        onClose();
    };

    const handleDelete = (reason?: string) => {
        // Add your delete logic here
        console.log('User deleted:', user.id, 'Reason:', reason);
        setShowDeleteDialog(false);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            {/* Transparent overlay */}
            <div className="fixed inset-0" onClick={onClose} />

            {/* Modal */}
            <div className="flex min-h-full items-center justify-center p-4">
                <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-xl transform transition-all">
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-gray-100">
                        <div className="flex items-center space-x-4">
                            <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                                {/* Solution 1: Use a local placeholder image */}
                                <div className="text-2xl font-bold text-gray-500">
                                    {user.name.charAt(0)}
                                </div>

                                {/* Solution 2: Use Image with unoptimized (uncomment if you add the domain to next.config.js)
                                <Image
                                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=April"
                                    alt={user.name}
                                    width={56}
                                    height={56}
                                    className="object-cover"
                                    unoptimized
                                />
                                */}
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
                                <p className="text-sm text-gray-500">{user.email}</p>
                                <p className="text-sm text-gray-500">{user.phone || '+234 701 123 4567'}</p>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <FiX className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                        {/* Stats Grid - First Row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div className="bg-[#FFF8E6] p-4 rounded-lg">
                                <p className="text-xs text-gray-600 uppercase mb-1">TOTAL FUND INVESTED</p>
                                <p className="text-xl font-bold text-[#A07B00]">{user.totalFund || '13,000,000'}</p>
                            </div>
                            <div className="bg-[#EEF4FF] p-4 rounded-lg">
                                <p className="text-xs text-gray-600 uppercase mb-1">NUMBER OF INVESTMENTS</p>
                                <p className="text-xl font-bold text-[#2B4580]">{user.investments}</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <p className="text-xs text-gray-600 uppercase mb-1">ACCOUNT STATUS</p>
                                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-[#E8F5E9] text-[#2E7D32]">
                                    Active
                                </span>
                            </div>
                        </div>

                        {/* Stats Grid - Second Row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                            <div className="bg-[#FFEBEE] p-4 rounded-lg">
                                <p className="text-xs text-gray-600 uppercase mb-1">ISSUES RAISED PENDING ATTENTION</p>
                                <p className="text-xl font-bold text-[#D32F2F]">{user.issuesRaised || '3'}</p>
                            </div>
                            <div className="bg-[#FFF8E6] p-4 rounded-lg">
                                <p className="text-xs text-gray-600 uppercase mb-1">ISSUES RESOLVED</p>
                                <p className="text-xl font-bold text-[#A07B00]">{user.issuesResolved || '12'}</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <p className="text-xs text-gray-600 uppercase mb-1">USER STATUS</p>
                                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-[#E8F5E9] text-[#2E7D32]">
                                    Verified
                                </span>
                            </div>
                        </div>

                        {/* Verification Document */}
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Verification Document</h3>
                            <div className="flex items-center justify-between border border-gray-200 rounded-lg p-4">
                                <div>
                                    <p className="text-sm font-medium text-gray-900">NIN</p>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <button className="text-sm font-medium text-gray-900 hover:text-gray-700">View</button>
                                    <button className="text-gray-400 hover:text-gray-600">
                                        <FiDownload className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Recent Project & Investment Details */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            {/* Recent Project */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Recent Project</h3>
                                <div className="space-y-3">
                                    <div>
                                        <p className="text-sm text-gray-600">Project Name :</p>
                                        <p className="text-sm font-medium text-gray-900">{user.project?.name || 'Rice Farming In'}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Location :</p>
                                        <p className="text-sm font-medium text-gray-900">{user.project?.location || 'Kaduna, Nigeria'}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Description :</p>
                                        <p className="text-sm font-medium text-gray-900">{user.project?.description || 'Rice Investment'}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Status :</p>
                                        <p className="text-sm font-medium text-gray-900">{user.project?.status || 'Active'}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Investment Details */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Investment Details</h3>
                                <div className="space-y-3">
                                    <div>
                                        <p className="text-sm text-gray-600">Investment:</p>
                                        <p className="text-sm font-medium text-gray-900">{user.project?.investment || '₦10,000,000'}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Expected ROI:</p>
                                        <p className="text-sm font-medium text-gray-900">{user.project?.expectedROI || '25%'}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Start Date:</p>
                                        <p className="text-sm font-medium text-gray-900">{user.project?.startDate || 'March 1, 2025'}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">End Date:</p>
                                        <p className="text-sm font-medium text-gray-900">{user.project?.endDate || 'December 31, 2025'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Note */}
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Note</h3>
                            <p className="text-sm text-gray-600">Account Active and Viable</p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-4">
                            <button
                                onClick={() => setShowSuspendDialog(true)}
                                className="flex-1 px-4 py-3 bg-[#FFF8E6] text-[#A07B00] rounded-lg font-medium hover:bg-[#FFF3CC] transition-colors"
                            >
                                Suspend Account
                            </button>
                            <button
                                onClick={() => setShowDeleteDialog(true)}
                                className="flex-1 px-4 py-3 bg-[#FFEBEE] text-[#D32F2F] rounded-lg font-medium hover:bg-[#FFCDD2] transition-colors"
                            >
                                Delete Account
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Confirmation Dialogs */}
            <SuspendConfirmationDialog
                isOpen={showSuspendDialog}
                onClose={() => setShowSuspendDialog(false)}
                onConfirm={handleSuspend}
            />
            <DeleteConfirmationDialog
                isOpen={showDeleteDialog}
                onClose={() => setShowDeleteDialog(false)}
                onConfirm={handleDelete}
            />
        </div>
    );
};

export default UserDetailsModal;