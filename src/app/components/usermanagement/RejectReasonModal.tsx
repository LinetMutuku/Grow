import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';

const RejectReasonModal = ({ isOpen, onClose, onSubmit }) => {
    const [reason, setReason] = useState('');

    if (!isOpen) return null;

    const handleSubmit = () => {
        if (reason.trim()) {
            onSubmit(reason);
            setReason('');
        }
    };

    return (
        <div className="fixed inset-0 z-[100] overflow-y-auto">
            {/* Added semi-transparent black overlay */}
            <div className="fixed inset-0 bg-black/40" onClick={onClose} />

            {/* Dialog content container - Added flex centering */}
            <div className="flex min-h-screen items-center justify-center p-4">
                <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full transform transition-all">
                    {/* Decorative top bar - makes it visually distinctive */}
                    <div className="bg-gradient-to-r from-red-500 to-red-600 h-2 rounded-t-2xl" />

                    {/* Header */}
                    <div className="px-6 pt-6 pb-2 flex justify-between items-center">
                        <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                            <span className="bg-red-100 p-2 rounded-full mr-3">
                                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </span>
                            Reason for Rejection
                        </h3>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-gray-600 bg-white rounded-full flex items-center justify-center h-8 w-8 transition-colors shadow-sm"
                        >
                            <FiX className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                        <div className="mb-6">
                            <div className="flex items-center mb-4">
                                <div className="h-10 w-1 bg-red-500 rounded-full mr-3"></div>
                                <h4 className="text-lg font-medium text-gray-800">Rejection Information</h4>
                            </div>

                            <p className="text-gray-600 mb-4 pl-4 border-l-2 border-gray-100">
                                Please provide a reason for rejecting this user registration
                            </p>

                            <div className="relative">
                                <textarea
                                    value={reason}
                                    onChange={(e) => setReason(e.target.value)}
                                    placeholder="Explain why you are rejecting this registration..."
                                    className="w-full border border-gray-300 rounded-xl p-4 h-32 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                                    rows={4}
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
                                    reason.trim()
                                        ? 'bg-red-600 hover:bg-red-700'
                                        : 'bg-gray-300 cursor-not-allowed'
                                } text-white text-base font-medium rounded-md transition-colors shadow-sm`}
                            >
                                Reject Registration
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RejectReasonModal;
