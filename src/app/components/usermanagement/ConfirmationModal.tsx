'use client';

import React, { useRef, useEffect, useState } from 'react';
import ReasonModal from './ReasonModal';

const ConfirmationModal = ({ isOpen, onClose, onConfirmResult, title, actionText, actionType }) => {
    const modalRef = useRef(null);
    const [reasonModalOpen, setReasonModalOpen] = useState(false);

    // Close modal when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
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

    const handleConfirm = () => {
        // Close confirmation modal and open reason modal
        setReasonModalOpen(true);
    };

    // Handle reason submission from the reason modal
    const handleReasonSubmit = (reason) => {
        setReasonModalOpen(false);
        // Pass the confirmed status and reason back to parent component
        onConfirmResult(true, reason);
    };

    if (!isOpen && !reasonModalOpen) return null;

    return (
        <>
            {isOpen && !reasonModalOpen && (
                <div className="fixed inset-0 z-[60] overflow-y-auto">
                    {/* Overlay - Added the semi-transparent black background */}
                    <div className="fixed inset-0 bg-black/30" onClick={onClose} />

                    {/* Dialog content container - Added flex centering */}
                    <div className="flex min-h-full items-center justify-center p-4">
                        <div
                            ref={modalRef}
                            className="relative bg-white rounded-xl shadow-2xl w-full max-w-md transform transition-all"
                        >
                            {/* Close button - Styled to match your existing modals */}
                            <button
                                onClick={onClose}
                                className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Content */}
                            <div className="p-6 text-center">
                                {actionType === 'suspend' ? (
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
                                ) : (
                                    <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-[#E8F5E9] mb-4">
                                        <svg
                                            className="w-8 h-8 text-[#2E7D32]"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </div>
                                )}

                                {/* Message */}
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {title || "Are you sure you want to reactivate the selected account?"}
                                </h3>

                                {/* Confirm Button */}
                                <button
                                    onClick={handleConfirm}
                                    className={`w-full mt-6 px-4 py-3 ${
                                        actionType === 'reactivate'
                                            ? 'bg-[#2E7D32] hover:bg-[#1B5E20]'
                                            : 'bg-[#F59E0B] hover:bg-[#D97706]'
                                    } text-white rounded-lg font-medium transition-colors`}
                                >
                                    {actionText || "Yes, Reactivate User"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Reason Modal */}
            <ReasonModal
                isOpen={reasonModalOpen}
                onClose={() => {
                    setReasonModalOpen(false);
                    onClose(); // Close confirmation modal too
                }}
                onSubmit={handleReasonSubmit}
                type={actionType === 'reactivate' ? 'reactivation' : 'suspension'}
            />
        </>
    );
};

export default ConfirmationModal;