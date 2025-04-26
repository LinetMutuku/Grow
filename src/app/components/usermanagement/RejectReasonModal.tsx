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
        <div className="fixed inset-0 z-[100] overflow-y-auto pointer-events-none">
            <div className="flex min-h-screen items-center justify-center p-4">
                <div className="relative bg-white rounded-lg shadow-2xl max-w-2xl w-full transform transition-all pointer-events-auto">
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
                    <div className="p-6">
                        <h3 className="text-lg font-medium text-red-600 mb-6">
                            Reason for Rejection User Registration
                        </h3>

                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Rejection reason
                            </label>
                            <textarea
                                value={reason}
                                onChange={(e) => setReason(e.target.value)}
                                placeholder="let us know why you are rejecting the user registration"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                                rows={4}
                            />
                        </div>

                        <button
                            onClick={handleSubmit}
                            disabled={!reason.trim()}
                            className={`w-full py-3 px-4 rounded-md text-white font-medium transition-colors ${
                                reason.trim()
                                    ? 'bg-red-600 hover:bg-red-700'
                                    : 'bg-gray-300 cursor-not-allowed'
                            }`}
                        >
                            Reject Registration
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RejectReasonModal;