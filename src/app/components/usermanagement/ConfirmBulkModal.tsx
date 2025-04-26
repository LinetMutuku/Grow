'use client';

import React from 'react';
import { FiX } from 'react-icons/fi';

const ConfirmBulkModal = ({ isOpen, onClose, onConfirm, actionType, selectedCount }) => {
    if (!isOpen) return null;

    const getModalContent = () => {
        switch (actionType) {
            case 'reactivate':
                return {
                    title: `Are you sure you want to reactivate ${selectedCount} selected user accounts?`,
                    buttonText: 'Yes, Reactivate Users',
                    buttonColor: 'bg-green-600 hover:bg-green-700',
                    icon: '🏆', // Using emoji as we don't have the exact icon
                    iconBg: 'bg-green-100'
                };
            case 'suspend':
                return {
                    title: `Are you sure you want to suspend ${selectedCount} selected user accounts?`,
                    buttonText: 'Yes, Please Suspend',
                    buttonColor: 'bg-orange-500 hover:bg-orange-600',
                    icon: '⏳', // Using emoji as we don't have the exact icon
                    iconBg: 'bg-orange-100'
                };
            case 'delete':
                return {
                    title: `Are you sure you want to delete ${selectedCount} selected user accounts?`,
                    buttonText: 'Yes, Please Delete',
                    buttonColor: 'bg-red-600 hover:bg-red-700',
                    icon: '⚠️', // Using emoji as we don't have the exact icon
                    iconBg: 'bg-red-100'
                };
            default:
                return null;
        }
    };

    const content = getModalContent();
    if (!content) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg w-full max-w-md p-6 relative shadow-xl border border-gray-200">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                >
                    <FiX size={20} />
                </button>

                <div className="flex flex-col items-center text-center">
                    <div className={`w-16 h-16 rounded-full ${content.iconBg} flex items-center justify-center mb-4`}>
                        <span className="text-2xl">{content.icon}</span>
                    </div>

                    <h2 className="text-xl font-semibold text-gray-900 mb-6">
                        {content.title}
                    </h2>

                    <button
                        onClick={onConfirm}
                        className={`w-full py-3 px-4 ${content.buttonColor} text-white rounded-lg font-medium`}
                    >
                        {content.buttonText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmBulkModal;