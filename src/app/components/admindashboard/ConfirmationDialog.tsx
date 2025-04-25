'use client';

import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import { SuspendReasonModal, DeleteReasonModal } from './ReasonModals';

interface ConfirmationDialogProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (reason?: string) => void;
}

export const SuspendConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
                                                                                 isOpen,
                                                                                 onClose,
                                                                                 onConfirm
                                                                             }) => {
    const [showReasonModal, setShowReasonModal] = useState(false);

    if (!isOpen) return null;

    const handleSuspendClick = () => {
        setShowReasonModal(true);
    };

    const handleSubmitReason = (reason: string) => {
        onConfirm(reason);
        setShowReasonModal(false);
        onClose();
    };

    return (
        <>
            <div className="fixed inset-0 z-[60] overflow-y-auto">
                {/* Overlay */}
                <div className="fixed inset-0 bg-black/30" onClick={onClose} />

                {/* Dialog */}
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
                        <div className="p-6 text-center">
                            {/* Warning Icon */}
                            <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-[#FFF8E6] mb-4">
                                <svg
                                    className="w-8 h-8 text-[#A07B00]"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                    />
                                </svg>
                            </div>

                            {/* Message */}
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Are you sure you want to suspend the selected User account?
                            </h3>

                            {/* Confirm Button */}
                            <button
                                onClick={handleSuspendClick}
                                className="w-full mt-6 px-4 py-3 bg-[#F59E0B] text-white rounded-lg font-medium hover:bg-[#D97706] transition-colors"
                            >
                                Yes, Please Suspend
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <SuspendReasonModal
                isOpen={showReasonModal}
                onClose={() => setShowReasonModal(false)}
                onSubmit={handleSubmitReason}
            />
        </>
    );
};

export const DeleteConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
                                                                                isOpen,
                                                                                onClose,
                                                                                onConfirm
                                                                            }) => {
    const [showReasonModal, setShowReasonModal] = useState(false);

    if (!isOpen) return null;

    const handleDeleteClick = () => {
        setShowReasonModal(true);
    };

    const handleSubmitReason = (reason: string) => {
        onConfirm(reason);
        setShowReasonModal(false);
        onClose();
    };

    return (
        <>
            <div className="fixed inset-0 z-[60] overflow-y-auto">
                {/* Overlay */}
                <div className="fixed inset-0 bg-black/30" onClick={onClose} />

                {/* Dialog */}
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
                        <div className="p-6 text-center">
                            {/* Warning Icon */}
                            <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-[#FFEBEE] mb-4">
                                <svg
                                    className="w-8 h-8 text-[#D32F2F]"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                    />
                                </svg>
                            </div>

                            {/* Message */}
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Are you sure you want to delete the selected user account?
                            </h3>

                            {/* Confirm Button */}
                            <button
                                onClick={handleDeleteClick}
                                className="w-full mt-6 px-4 py-3 bg-[#D32F2F] text-white rounded-lg font-medium hover:bg-[#B71C1C] transition-colors"
                            >
                                Yes, Please Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <DeleteReasonModal
                isOpen={showReasonModal}
                onClose={() => setShowReasonModal(false)}
                onSubmit={handleSubmitReason}
            />
        </>
    );
};