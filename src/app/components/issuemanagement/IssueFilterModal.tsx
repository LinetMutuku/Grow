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
        setFilters(prev => ({
            ...prev,
            userStatus: prev.userStatus.includes(status)
                ? prev.userStatus.filter(s => s !== status)
                : [...prev.userStatus, status]
        }));
    };

    const handleIssueTypeToggle = (type: string) => {
        setFilters(prev => ({
            ...prev,
            issueType: prev.issueType.includes(type)
                ? prev.issueType.filter(t => t !== type)
                : [...prev.issueType, type]
        }));
    };

    const handleApply = () => {
        onApplyFilters(filters);
        onClose();
    };

    const handleClear = () => {
        setFilters({
            userStatus: [],
            issueType: [],
        });
    };

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-lg shadow-xl w-[300px] p-4"
                onClick={e => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-sm font-medium text-gray-600 uppercase">Filter</h3>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600"
                    >
                        <FiX size={18} />
                    </button>
                </div>

                {/* User Status Section */}
                <div className="mb-6">
                    <h4 className="text-xs font-medium text-gray-500 uppercase mb-3">User Status</h4>
                    <div className="space-y-2">
                        {['All Active Users', 'All Pending Users', 'All Suspended Users'].map(status => (
                            <button
                                key={status}
                                onClick={() => handleStatusToggle(status)}
                                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors
                  ${filters.userStatus.includes(status)
                                    ? 'bg-green-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                {status}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Issue Type Section */}
                <div className="mb-6">
                    <h4 className="text-xs font-medium text-gray-500 uppercase mb-3">Issue Type</h4>
                    <div className="space-y-2">
                        {['Rice Issue', 'Millet Issue', 'Yam Issue', 'Beans Issue',
                            'Cocoa Issue', 'Cassava Issue'].map(type => (
                            <button
                                key={type}
                                onClick={() => handleIssueTypeToggle(type)}
                                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors
                  ${filters.issueType.includes(type)
                                    ? 'bg-green-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between gap-3">
                    <button
                        onClick={handleClear}
                        className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md
                     hover:bg-gray-50 text-sm"
                    >
                        Clear
                    </button>
                    <button
                        onClick={handleApply}
                        className="flex-1 px-4 py-2 bg-green-600 text-white rounded-md
                     hover:bg-green-700 text-sm"
                    >
                        Apply
                    </button>
                </div>
            </div>
        </div>
    );
};

export default IssueFilterModal;