'use client';

import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import ConfirmBulkModal from './ConfirmBulkModal';

const BulkActionModal = ({ isOpen, onClose, onAction, selectedCount }) => {
    const [confirmModalOpen, setConfirmModalOpen] = useState(false);
    const [pendingAction, setPendingAction] = useState(null);

    if (!isOpen) return null;

    const handleActionClick = (action) => {
        setPendingAction(action);
        setConfirmModalOpen(true);
    };

    const handleConfirm = () => {
        if (pendingAction) {
            onAction(pendingAction);
        }
        setConfirmModalOpen(false);
        setPendingAction(null);
    };

    const handleCloseConfirm = () => {
        setConfirmModalOpen(false);
        setPendingAction(null);
    };

    return (
        <>
            <div className="absolute right-0 bottom-full mb-2 w-72 bg-white rounded-lg shadow-lg z-50 border border-gray-200">
                <div className="p-4">
                    <div className="flex justify-end mb-2">
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-gray-600"
                        >
                            <FiX size={20} />
                        </button>
                    </div>

                    <div className="space-y-2">
                        <button
                            onClick={() => handleActionClick('reactivate')}
                            className="w-full py-2.5 px-4 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 text-left text-sm"
                        >
                            Reactivate Selected Accounts
                        </button>

                        <button
                            onClick={() => handleActionClick('suspend')}
                            className="w-full py-2.5 px-4 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 text-left text-sm"
                        >
                            Suspend Selected Accounts
                        </button>

                        <button
                            onClick={() => handleActionClick('delete')}
                            className="w-full py-2.5 px-4 bg-red-50 border border-red-200 rounded-lg text-red-600 hover:bg-red-100 text-left text-sm"
                        >
                            Delete Selected Accounts
                        </button>
                    </div>
                </div>
            </div>

            <ConfirmBulkModal
                isOpen={confirmModalOpen}
                onClose={handleCloseConfirm}
                onConfirm={handleConfirm}
                actionType={pendingAction}
                selectedCount={selectedCount}
            />
        </>
    );
};

export default BulkActionModal;