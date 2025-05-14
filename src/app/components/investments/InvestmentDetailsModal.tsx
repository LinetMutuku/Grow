'use client';

import React from 'react';
import { FiX } from 'react-icons/fi';

interface InvestmentDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    investment: {
        investorName: string;
        projectName: string;
        amount: string;
        investmentDate: string;
        expectedROI: string;
        status: string;
    };
}

const InvestmentDetailsModal: React.FC<InvestmentDetailsModalProps> = ({
                                                                           isOpen,
                                                                           onClose,
                                                                           investment,
                                                                       }) => {
    // Calculate estimated returns based on investment amount and ROI percentage
    const calculateEstimatedReturns = () => {
        const amount = parseFloat(investment.amount.replace('₦', '').replace(',', ''));
        const roi = parseFloat(investment.expectedROI.replace('%', '')) / 100;
        const returns = amount * roi;
        return `₦${returns.toLocaleString()}`;
    };

    // Sample estimated completion date (6 months from investment date)
    const getEstimatedCompletion = () => {
        const date = new Date(investment.investmentDate);
        date.setMonth(date.getMonth() + 6);
        return `${date.toLocaleString('default', { month: 'short' })} ${date.getDate()}, ${date.getFullYear()}`;
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
                <div className="flex items-center justify-between p-3 border-b border-gray-200">
                    <h2 className="text-base font-medium text-green-600">Investment Details</h2>
                    <button
                        className="text-gray-400 hover:text-gray-500 focus:outline-none"
                        onClick={onClose}
                    >
                        <FiX className="h-5 w-5" />
                    </button>
                </div>

                <div className="p-4 max-h-[400px] overflow-y-auto">
                    <div className="border rounded-md p-4 mb-6">
                        <h3 className="font-medium mb-2">Investment Overview</h3>
                        <div className="grid grid-cols-1 gap-3 text-sm">
                            <div>
                                <span className="text-gray-500">Investor:</span> {investment.investorName}
                            </div>
                            <div>
                                <span className="text-gray-500">Project Name:</span> {investment.projectName}
                            </div>
                            <div>
                                <span className="text-gray-500">Amount Invested:</span> {investment.amount}
                            </div>
                            <div>
                                <span className="text-gray-500">Investment Date:</span> {investment.investmentDate}
                            </div>
                            <div>
                                <span className="text-gray-500">Expected ROI:</span> {investment.expectedROI}
                            </div>
                            <div>
                                <span className="text-gray-500">Status:</span>
                                <span className={`ml-1 font-medium ${
                                    investment.status === 'Active' ? 'text-blue-500' :
                                        investment.status === 'Completed' ? 'text-green-500' :
                                            investment.status === 'Pending' ? 'text-yellow-500' :
                                                'text-gray-500'
                                }`}>
                    {investment.status}
                  </span>
                            </div>
                        </div>
                    </div>

                    <div className="mb-6">
                        <h3 className="font-medium mb-3">Progress & Status</h3>
                        <div className="mb-2 flex justify-between text-sm">
                            <span className="text-gray-500">Current Progress:</span>
                            <span>60% Completed</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                            <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "60%" }}></div>
                        </div>
                        <div className="text-sm">
                            <span className="text-gray-500">Estimated Completion:</span> {getEstimatedCompletion()}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-medium mb-3">Fund Breakdown</h3>
                        <div className="border-t border-gray-200 py-3 flex justify-between">
                            <span className="text-gray-500">Initial Investment</span>
                            <span>{investment.amount}</span>
                        </div>
                        <div className="border-t border-gray-200 py-3 flex justify-between">
                            <span className="text-gray-500">Expected Returns</span>
                            <span>{calculateEstimatedReturns()}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvestmentDetailsModal;