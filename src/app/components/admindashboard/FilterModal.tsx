'use client';

import React, { useState, useRef, useEffect } from 'react';

// Define the props interface for TypeScript
interface FilterModalProps {
    isOpen: boolean;
    onClose: () => void;
    onFilterChange: (filter: string) => void;
}

const FilterModal: React.FC<FilterModalProps> = ({ isOpen, onClose, onFilterChange }) => {
    const [selectedFilter, setSelectedFilter] = useState('all');
    const modalRef = useRef<HTMLDivElement>(null);

    // Close modal when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    const handleFilterSelect = (filter: string) => {
        setSelectedFilter(filter);
        onFilterChange(filter);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="absolute top-12 right-0 z-50 w-60">
            <div
                ref={modalRef}
                className="bg-white rounded-lg shadow-lg p-3 border border-gray-100"
                style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.06)' }}
            >
                <h2 className="text-sm font-semibold mb-2 text-gray-800 border-b pb-2">Filter Users</h2>

                <div className="space-y-1">
                    <button
                        onClick={() => handleFilterSelect('all')}
                        className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors duration-150 flex items-center ${
                            selectedFilter === 'all'
                                ? 'bg-green-50 text-green-700 border-l-2 border-green-500'
                                : 'hover:bg-gray-50 text-gray-700 border-l-2 border-transparent'
                        }`}
                    >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>All Active Users</span>
                    </button>

                    <button
                        onClick={() => handleFilterSelect('pending')}
                        className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors duration-150 flex items-center ${
                            selectedFilter === 'pending'
                                ? 'bg-yellow-50 text-yellow-700 border-l-2 border-yellow-500'
                                : 'hover:bg-gray-50 text-gray-700 border-l-2 border-transparent'
                        }`}
                    >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>All Pending Users</span>
                    </button>

                    <button
                        onClick={() => handleFilterSelect('suspended')}
                        className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors duration-150 flex items-center ${
                            selectedFilter === 'suspended'
                                ? 'bg-red-50 text-red-700 border-l-2 border-red-500'
                                : 'hover:bg-gray-50 text-gray-700 border-l-2 border-transparent'
                        }`}
                    >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>All Suspended Users</span>
                    </button>
                </div>

                <div className="flex justify-end mt-3 pt-2 border-t border-gray-100">
                    <button
                        onClick={onClose}
                        className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors duration-150 text-xs font-medium"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FilterModal;