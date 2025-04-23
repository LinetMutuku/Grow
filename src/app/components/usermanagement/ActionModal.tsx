'use client';

import React, { useState, useRef, useEffect } from 'react';
import ConfirmationModal from './ConfirmationModal';

const ActionModal = ({ isOpen, onClose, onAction, userStatus }) => {
    const modalRef = useRef(null);

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

    // This function is called when an action button is clicked
    const handleActionClick = (action) => {
        console.log(`Action clicked: ${action}`); // Debug log

        // Instead of managing the confirmation modal here, pass the action directly to parent
        if (action === 'reactivate' || action === 'suspend') {
            onAction(action); // Let parent component handle showing confirmation modal
            onClose(); // Close the action dropdown
        } else if (action === 'viewDetails') {
            onAction(action);
            onClose();
        }
    };

    // We're no longer handling confirmation in this component
    // Instead, we'll let the parent component handle it directly

    // Remove the unused state and variables since we're now handling it at the parent level

    return (
        <>
            {isOpen && (
                <div className="absolute right-8 top-10 z-[9999] w-64">
                    <div
                        ref={modalRef}
                        className="bg-white rounded-lg shadow-xl p-4 border border-gray-100"
                        style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }}
                    >
                        <button
                            onClick={() => handleActionClick('reactivate')}
                            className="w-full text-left py-3 px-4 text-sm font-medium rounded-lg mb-2 transition-all duration-150 flex items-center hover:bg-green-50 text-gray-700 hover:text-green-600"
                        >
                            <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Reactivate User</span>
                        </button>

                        <button
                            onClick={() => handleActionClick('suspend')}
                            className="w-full text-left py-3 px-4 text-sm font-medium rounded-lg mb-2 transition-all duration-150 flex items-center hover:bg-red-50 text-gray-700 hover:text-red-600"
                        >
                            <svg className="w-5 h-5 mr-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            <span>Suspend User</span>
                        </button>

                        <button
                            onClick={() => handleActionClick('viewDetails')}
                            className="w-full text-left py-3 px-4 text-sm font-medium rounded-lg transition-all duration-150 flex items-center bg-green-600 hover:bg-green-700 text-white"
                        >
                            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            <span>View User Details</span>
                        </button>
                    </div>
                </div>
            )}

            {/* No longer rendering ConfirmationModal here - it's handled by parent */}
        </>
    );
};

export default ActionModal;