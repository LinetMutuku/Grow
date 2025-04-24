
'use client';

import React, { useRef, useEffect, useState } from 'react';

const ReasonModal = ({ isOpen, onClose, onSubmit, type = 'suspension' }) => {
    const [reason, setReason] = useState('');
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

    const handleSubmit = () => {
        onSubmit(reason);
        setReason(''); // Reset reason after submission
    };

    if (!isOpen) return null;

    const title = type === 'suspension' ? 'Reason for Suspension' : 'Reason for Reactivation';
    const buttonText = type === 'suspension' ? 'Suspend User' : 'Reactivate User';
    const placeholderText = type === 'suspension' ? 'Please add reason for suspending this account' : 'Please add reason for reactivating this account';

    return (
        <div className="fixed inset-0 flex items-center justify-center z-[9999]">
            <div
                ref={modalRef}
                className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl border border-gray-100"
                style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.08)' }}
            >
                <div className="border-b p-6 bg-gradient-to-r from-green-50 to-white">
                    <div className="flex justify-between items-center">
                        <h3 className="text-xl font-semibold text-green-700 flex items-center">
                            <span className="bg-green-100 p-2 rounded-full mr-3">
                                {type === 'suspension' ? (
                                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                ) : (
                                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                )}
                            </span>
                            {title}
                        </h3>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-gray-600 bg-white rounded-full flex items-center justify-center h-8 w-8 transition-colors shadow-sm"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="p-8">
                    <div className="mb-8">
                        <div className="flex items-center mb-4">
                            <div className="h-10 w-1 bg-green-500 rounded-full mr-3"></div>
                            <h4 className="text-lg font-medium text-gray-800">Reason Information</h4>
                        </div>

                        <p className="text-gray-600 mb-4 pl-4 border-l-2 border-gray-100">{placeholderText}</p>

                        <div className="relative">
                            <textarea
                                className="w-full border border-gray-300 rounded-xl p-4 h-32 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                placeholder="Enter your reason here..."
                                value={reason}
                                onChange={(e) => setReason(e.target.value)}
                            />
                            <div className="absolute bottom-4 right-4 text-gray-400 text-sm">
                                {reason.length} characters
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between gap-3">
                        <button
                            onClick={onClose}
                            className="py-3 px-6 bg-white border border-gray-300 text-gray-700 text-base font-medium rounded-md hover:bg-gray-50 transition-colors shadow-sm"
                        >
                            Cancel
                        </button>

                        <button
                            onClick={handleSubmit}
                            disabled={!reason.trim()}
                            className={`py-3 px-6 ${
                                type === 'suspension'
                                    ? (reason.trim() ? 'bg-orange-500 hover:bg-orange-600' : 'bg-gray-300 cursor-not-allowed')
                                    : (reason.trim() ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-300 cursor-not-allowed')
                            } text-white text-base font-medium rounded-md transition-colors shadow-sm`}
                        >
                            {buttonText}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReasonModal;
