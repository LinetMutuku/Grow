'use client';

import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';

interface ReasonModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (reason: string) => void;
    title: string;
    placeholder: string;
    buttonText: string;
    buttonColor: string;
}

const ReasonModal: React.FC<ReasonModalProps> = ({
                                                     isOpen,
                                                     onClose,
                                                     onSubmit,
                                                     title,
                                                     placeholder,
                                                     buttonText,
                                                     buttonColor
                                                 }) => {
    const [reason, setReason] = useState('');

    if (!isOpen) return null;

    const handleSubmit = () => {
        if (reason.trim()) {
            onSubmit(reason);
            setReason('');
        }
    };

    return (
        <div className="fixed inset-0 z-[70] overflow-y-auto">
            {/* Overlay */}
            <div className="fixed inset-0 bg-black/30" onClick={onClose} />

            {/* Modal */}
            <div className="flex min-h-full items-center justify-center p-4">
                <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-md transform transition-all">
                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
                    >
                        <FiX className="w-5 h-5" />
                    </button>

                    {/* Content */}
                    <div className="p-6">
                        <h2 className="text-xl font-bold text-[#6B8E23] mb-6">{title}</h2>

                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-medium mb-2">
                                Payment Information
                            </label>
                            <textarea
                                value={reason}
                                onChange={(e) => setReason(e.target.value)}
                                placeholder={placeholder}
                                className="w-full h-40 px-4 py-3 border-2 border-blue-400 rounded-lg focus:outline-none focus:border-blue-500 resize-none"
                            />
                        </div>

                        {/* Buttons */}
                        <div className="flex space-x-4">
                            <button
                                onClick={onClose}
                                className="flex-1 px-4 py-3 border-2 border-[#6B8E23] text-[#6B8E23] rounded-lg font-medium hover:bg-gray-50 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSubmit}
                                className={`flex-1 px-4 py-3 ${buttonColor} text-white rounded-lg font-medium transition-colors`}
                            >
                                {buttonText}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const SuspendReasonModal: React.FC<{
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (reason: string) => void;
}> = ({ isOpen, onClose, onSubmit }) => {
    return (
        <ReasonModal
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={onSubmit}
            title="Reason for Suspension"
            placeholder="Payment Information"
            buttonText="Suspend Account"
            buttonColor="bg-[#F59E0B] hover:bg-[#D97706]"
        />
    );
};

export const DeleteReasonModal: React.FC<{
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (reason: string) => void;
}> = ({ isOpen, onClose, onSubmit }) => {
    return (
        <ReasonModal
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={onSubmit}
            title="Reason for Deleting Account"
            placeholder="Please add reason for suspending this account"
            buttonText="Delete Account"
            buttonColor="bg-[#D32F2F] hover:bg-[#B71C1C]"
        />
    );
};