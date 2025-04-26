import React from 'react';
import { FiX } from 'react-icons/fi';

const ConfirmUserModal = ({ isOpen, onClose, onConfirm, type = 'verify' }) => {
    if (!isOpen) return null;

    const isVerify = type === 'verify';

    return (
        <div className="fixed inset-0 z-[100] overflow-y-auto pointer-events-none">
            <div className="flex min-h-screen items-center justify-center p-4">
                <div className="relative bg-white rounded-lg shadow-2xl max-w-md w-full transform transition-all pointer-events-auto">
                    {/* Header */}
                    <div className="absolute top-4 right-4">
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-gray-500 transition-colors"
                        >
                            <FiX className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-6 pt-12">
                        <div className="flex justify-center mb-6">
                            <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                                isVerify ? 'bg-green-100' : 'bg-red-100'
                            }`}>
                                {isVerify ? (
                                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                ) : (
                                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                )}
                            </div>
                        </div>

                        <h3 className="text-lg font-medium text-center text-gray-900 mb-4">
                            {isVerify
                                ? "Please confirm that you want to approve user verification!"
                                : "Are you sure you want to reject new user registration"
                            }
                        </h3>

                        <button
                            onClick={onConfirm}
                            className={`w-full py-3 px-4 rounded-md text-white font-medium transition-colors ${
                                isVerify
                                    ? 'bg-green-600 hover:bg-green-700'
                                    : 'bg-red-600 hover:bg-red-700'
                            }`}
                        >
                            {isVerify ? 'Yes, Please Approve' : 'Yes, Please Reject!'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmUserModal;