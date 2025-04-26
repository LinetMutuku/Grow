'use client';

import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';

interface FilterModalProps {
    isOpen: boolean;
    onClose: () => void;
    onApplyFilters: (filters: FilterState) => void;
}

export interface FilterState {
    userStatus: string[];
    issueType: string[];
}

const IssueFilterModal: React.FC<FilterModalProps> = ({ isOpen, onClose, onApplyFilters }) => {
    const [filters, setFilters] = useState<FilterState>({
        userStatus: [],
        issueType: [],
    });

    if (!isOpen) return null;

    const handleStatusToggle = (status: string) => {
        const newFilters = {
            ...filters,
            userStatus: filters.userStatus.includes(status)
                ? filters.userStatus.filter(s => s !== status)
                : [...filters.userStatus, status]
        };
        setFilters(newFilters);
        onApplyFilters(newFilters);  // Apply immediately
    };

    const handleIssueTypeToggle = (type: string) => {
        const newFilters = {
            ...filters,
            issueType: filters.issueType.includes(type)
                ? filters.issueType.filter(t => t !== type)
                : [...filters.issueType, type]
        };
        setFilters(newFilters);
        onApplyFilters(newFilters);  // Apply immediately
    };

    return (
        <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-lg shadow-lg z-50 border border-gray-200">
            {/* Header */}
            <div className="px-3 py-2 border-b border-gray-200">
                <div className="flex justify-between items-center">
                    <h3 className="text-sm font-semibold text-gray-900">Filter</h3>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600"
                    >
                        <FiX size={16} />
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="p-3">
                {/* User Status Section */}
                <div className="mb-3">
                    <h4 className="text-xs font-semibold text-gray-900 mb-1.5">USER STATUS</h4>
                    <div className="space-y-1">
                        {['All Active Users', 'All Pending Users', 'All Suspended Users'].map(status => (
                            <button
                                key={status}
                                onClick={() => handleStatusToggle(status)}
                                className={`w-full text-left px-2 py-1.5 border rounded-md text-xs transition-all
                                  ${filters.userStatus.includes(status)
                                    ? 'bg-green-600 text-white border-green-600'
                                    : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                                }`}
                            >
                                {status}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Issue Type Section */}
                <div>
                    <h4 className="text-xs font-semibold text-gray-900 mb-1.5">ISSUE TYPE</h4>
                    <div className="space-y-1">
                        {['Rice Issue', 'Millet Issue', 'Yam Issue', 'Beans Issue',
                            'Cocoa Issue', 'Cassava Issue'].map(type => (
                            <button
                                key={type}
                                onClick={() => handleIssueTypeToggle(type)}
                                className={`w-full text-left px-2 py-1.5 border rounded-md text-xs transition-all
                                  ${filters.issueType.includes(type)
                                    ? 'bg-green-600 text-white border-green-600'
                                    : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                                }`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IssueFilterModal;