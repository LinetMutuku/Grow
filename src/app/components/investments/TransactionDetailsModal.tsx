'use client';

import React from 'react';
import { FiX } from 'react-icons/fi';

interface TransactionDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    transaction: {
        id: string;
        userName: string;
        type: string;
        amount: string;
        date: string;
        status: string;
    };
}

const TransactionDetailsModal: React.FC<TransactionDetailsModalProps> = ({
                                                                             isOpen,
                                                                             onClose,
                                                                             transaction,
                                                                         }) => {
    // Get status color
    const getStatusColor = (status: string) => {
        switch (status.toLowerCase()) {
            case 'success':
                return 'text-green-500';
            case 'pending':
                return 'text-yellow-500';
            case 'completed':
                return 'text-green-500';
            default:
                return 'text-gray-500';
        }
    };

    // Handle click outside to close
    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black/20 z-50 flex items-center justify-center"
            onClick={handleBackdropClick}
        >
            <div
                className="bg-white rounded-lg shadow-lg w-[500px] max-w-[90%] overflow-hidden"
            >
                >
                <div className="flex items-center justify-between p-3 border-b border-gray-200">
                    <h2 className="text-base font-medium text-green-600">Transaction Details</h2>
                    <button
                        className="text-gray-400 hover:text-gray-500 focus:outline-none"
                        onClick={onClose}
                    >
                        <FiX className="h-5 w-5" />
                    </button>
                </div>

                <div className="p-4 max-h-[400px] overflow-y-auto">
                    <div className="border rounded-md p-4 mb-6">
                        <h3 className="font-medium mb-2">Transaction Overview</h3>
                        <div className="grid grid-cols-1 gap-3 text-sm">
                            <div>
                                <span className="text-gray-500">Transaction ID:</span> {transaction.id}
                            </div>
                            <div>
                                <span className="text-gray-500">User:</span> {transaction.userName}
                            </div>
                            <div>
                                <span className="text-gray-500">Transaction Type:</span> {transaction.type}
                            </div>
                            <div>
                                <span className="text-gray-500">Amount:</span> {transaction.amount}
                            </div>
                            <div>
                                <span className="text-gray-500">Date:</span> {transaction.date}
                            </div>
                            <div>
                                <span className="text-gray-500">Status:</span>
                                <span className={`ml-1 font-medium ${getStatusColor(transaction.status)}`}>
                    {transaction.status}
                  </span>
                            </div>
                        </div>
                    </div>

                    {transaction.type === 'Investment' && (
                        <div className="mb-6">
                            <h3 className="font-medium mb-3">Investment Details</h3>
                            <div className="text-sm text-gray-500">
                                <p>This transaction represents an investment into one of our agricultural projects. Investment transactions are processed within 24 hours of receipt.</p>
                                <p className="mt-2">Once the investment is confirmed, you will be able to track its progress through the Investments tab.</p>
                            </div>
                        </div>
                    )}

                    {transaction.type === 'ROI Payout' && (
                        <div className="mb-6">
                            <h3 className="font-medium mb-3">Payout Details</h3>
                            <div className="text-sm text-gray-500">
                                <p>This transaction represents a return on investment (ROI) payout from a completed or ongoing agricultural project.</p>
                                <p className="mt-2">ROI payouts are typically processed within 2-3 business days after being initiated.</p>
                            </div>
                        </div>
                    )}

                    {transaction.type === 'Wallet Deposit' && (
                        <div className="mb-6">
                            <h3 className="font-medium mb-3">Deposit Details</h3>
                            <div className="text-sm text-gray-500">
                                <p>This transaction represents a deposit into your platform wallet. Wallet deposits are processed immediately upon successful payment.</p>
                                <p className="mt-2">Funds in your wallet can be used for investments or withdrawn to your bank account.</p>
                            </div>
                        </div>
                    )}

                    {transaction.type === 'Withdrawal' && (
                        <div className="mb-6">
                            <h3 className="font-medium mb-3">Withdrawal Details</h3>
                            <div className="text-sm text-gray-500">
                                <p>This transaction represents a withdrawal from your platform wallet to your bank account.</p>
                                <p className="mt-2">Withdrawals are typically processed within 1-2 business days.</p>
                            </div>
                        </div>
                    )}

                    <div>
                        <h3 className="font-medium mb-3">Transaction Timeline</h3>
                        <div className="border-l-2 border-gray-200 pl-4 ml-2">
                            <div className="relative mb-4">
                                <div className="absolute -left-6 mt-1 w-4 h-4 rounded-full bg-green-500"></div>
                                <div className="text-sm">
                                    <p className="font-medium">{transaction.date}</p>
                                    <p className="text-gray-500">Transaction initiated</p>
                                </div>
                            </div>

                            {transaction.status === 'Pending' ? (
                                <div className="relative">
                                    <div className="absolute -left-6 mt-1 w-4 h-4 rounded-full bg-gray-300"></div>
                                    <div className="text-sm">
                                        <p className="font-medium">Pending</p>
                                        <p className="text-gray-500">Transaction is being processed</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="relative">
                                    <div className="absolute -left-6 mt-1 w-4 h-4 rounded-full bg-green-500"></div>
                                    <div className="text-sm">
                                        <p className="font-medium">{transaction.date}</p>
                                        <p className="text-gray-500">Transaction completed successfully</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
</div>
);
};

export default TransactionDetailsModal;