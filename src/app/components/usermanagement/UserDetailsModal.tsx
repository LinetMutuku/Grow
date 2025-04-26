import React, { useState } from 'react';
import { FiX, FiDownload } from 'react-icons/fi';
import ConfirmUserModal from './ConfirmUserModal';
import RejectReasonModal from './RejectReasonModal';

const UserDetailsModal = ({ isOpen, onClose, user }) => {
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [confirmType, setConfirmType] = useState('verify');
    const [showRejectReasonModal, setShowRejectReasonModal] = useState(false);

    if (!isOpen) return null;

    const handleVerifyClick = () => {
        setConfirmType('verify');
        setShowConfirmModal(true);
    };

    const handleRejectClick = () => {
        setConfirmType('reject');
        setShowConfirmModal(true);
    };

    const handleConfirm = () => {
        if (confirmType === 'verify') {
            // Call API to verify user
            console.log('Verifying user...');
            setShowConfirmModal(false);
            onClose();
        } else {
            // Show reject reason modal
            setShowConfirmModal(false);
            setShowRejectReasonModal(true);
        }
    };

    const handleRejectSubmit = (reason) => {
        // Call API to reject user with reason
        console.log('Rejecting user with reason:', reason);
        setShowRejectReasonModal(false);
        onClose();
    };

    return (
        <>
            <div className="fixed inset-0 z-50 overflow-y-auto pointer-events-none">
                <div className="flex min-h-screen items-center justify-center p-4">
                    <div className="relative bg-white rounded-lg shadow-2xl max-w-2xl w-full transform transition-all pointer-events-auto">
                        {/* Header */}
                        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                            <h2 className="text-lg font-semibold text-gray-700">New User Document Check</h2>
                            <button
                                onClick={onClose}
                                className="text-gray-400 hover:text-gray-500 transition-colors"
                            >
                                <FiX className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            {/* User Info */}
                            <div className="flex items-center space-x-4 mb-6">
                                <img
                                    src="/api/placeholder/56/56"
                                    alt="User Avatar"
                                    className="w-14 h-14 rounded-full object-cover"
                                />
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900">{user?.name || 'Adeolu Nelson'}</h3>
                                    <p className="text-gray-500">{user?.email || 'adeolu@gmail.com'}</p>
                                    <p className="text-gray-500">+234 701 123 4567</p>
                                </div>
                            </div>

                            {/* Status Badges */}
                            <div className="grid grid-cols-3 gap-4 mb-6">
                                <div className="border border-gray-200 rounded-lg p-4">
                                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">ACCOUNT STATUS</p>
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-50 text-yellow-700">
                    Pending
                  </span>
                                </div>
                                <div className="border border-gray-200 rounded-lg p-4">
                                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">USER STATUS</p>
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-50 text-yellow-700">
                    Pending
                  </span>
                                </div>
                                <div className="border border-gray-200 rounded-lg p-4 bg-yellow-50">
                                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">KNOWN ISSUES</p>
                                    <p className="text-2xl font-bold text-gray-900">0</p>
                                </div>
                            </div>

                            {/* Verification Document */}
                            <div className="mb-6">
                                <h4 className="text-sm font-semibold text-gray-900 mb-3">Verification Document</h4>
                                <div className="flex items-center justify-between border border-gray-200 rounded-lg p-3">
                                    <span className="text-gray-600">NIN</span>
                                    <div className="flex items-center space-x-2">
                                        <button className="inline-flex items-center px-3 py-1 border border-gray-300 rounded text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                            View
                                        </button>
                                        <button className="text-gray-400 hover:text-gray-500">
                                            <FiDownload className="h-5 w-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* User Information & Investment Details */}
                            <div className="grid grid-cols-2 gap-6 mb-6">
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-900 mb-3">User Information</h4>
                                    <div className="space-y-2">
                                        <div className="flex">
                                            <span className="text-gray-500 w-24">Address</span>
                                            <span className="text-gray-900">Lagos, Nigeria</span>
                                        </div>
                                        <div className="flex">
                                            <span className="text-gray-500 w-24">Occupation:</span>
                                            <span className="text-gray-900">Product Designer</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Investment Details</h4>
                                    <div className="space-y-2">
                                        <div className="flex">
                                            <span className="text-gray-500 w-24">Reg Date:</span>
                                            <span className="text-gray-900">March 1, 2025</span>
                                        </div>
                                        <div className="flex">
                                            <span className="text-gray-500 w-24">End Date:</span>
                                            <span className="text-gray-900">December 31, 2025</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Note */}
                            <div className="mb-6">
                                <h4 className="text-sm font-semibold text-gray-900 mb-2">Note</h4>
                                <p className="text-gray-600">Any note or message should go here</p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex space-x-4">
                                <button
                                    onClick={handleVerifyClick}
                                    className="flex-1 bg-green-600 text-white px-4 py-3 rounded-md font-medium hover:bg-green-700 transition-colors"
                                >
                                    Verify User
                                </button>
                                <button
                                    onClick={handleRejectClick}
                                    className="flex-1 border border-red-600 text-red-600 px-4 py-3 rounded-md font-medium hover:bg-red-50 transition-colors"
                                >
                                    Reject User Registration
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Confirm Modal */}
            <ConfirmUserModal
                isOpen={showConfirmModal}
                onClose={() => setShowConfirmModal(false)}
                onConfirm={handleConfirm}
                type={confirmType}
            />

            {/* Reject Reason Modal */}
            <RejectReasonModal
                isOpen={showRejectReasonModal}
                onClose={() => setShowRejectReasonModal(false)}
                onSubmit={handleRejectSubmit}
            />
        </>
    );
};

export default UserDetailsModal;