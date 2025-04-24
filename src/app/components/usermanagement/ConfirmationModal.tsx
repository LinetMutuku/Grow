
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
                <div className="fixed inset-0 flex items-center justify-center z-[9999]">
                    <div
                        ref={modalRef}
                        className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative border border-gray-100"
                        style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.08)' }}
                    >
                        <div className="absolute -top-3 -right-3 bg-white rounded-full p-1 shadow-md">
                            <button
                                onClick={onClose}
                                className="text-gray-400 hover:text-gray-600 bg-white rounded-full flex items-center justify-center h-8 w-8 transition-colors"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="p-8 text-center">
                            {actionType === 'suspend' ? (
                                <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-orange-50 mb-6 border-4 border-orange-100">
                                    <svg className="h-12 w-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                </div>
                            ) : (
                                <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-50 mb-6 border-4 border-green-100">
                                    <svg className="h-12 w-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                            )}

                            <p className="text-gray-800 text-xl font-medium mb-8">
                                {title || "Are you sure you want to reactivate the selected account?"}
                            </p>

                            <div className="flex flex-col gap-3">
                                <button
                                    onClick={handleConfirm}
                                    className={`w-full py-3 px-6 ${
                                        actionType === 'reactivate'
                                            ? 'bg-green-600 hover:bg-green-700'
                                            : 'bg-orange-500 hover:bg-orange-600'
                                    } text-white text-base font-medium rounded-md transition-colors duration-200`}
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
