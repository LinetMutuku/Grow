'use client';

import React from 'react';
import { FiDownload, FiEye, FiX } from 'react-icons/fi';

interface IssueDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    issue: {
        id: string;
        reporter: string;
        status: string;
        priority: string;
        type: string;
        date: string;
        assignee?: string;
        daysWaiting?: number;
        resolution?: string;
        resolvedBy?: string;
        resolvedDate?: string;
    };
    onMarkAsResolved?: () => void;
    onSaveContinue?: () => void;
}

const IssueDetailsModal: React.FC<IssueDetailsModalProps> = ({
                                                                 isOpen,
                                                                 onClose,
                                                                 issue,
                                                                 onMarkAsResolved,
                                                                 onSaveContinue
                                                             }) => {
    if (!isOpen || !issue) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/20">
            <div
                ref={modalRef}
                className="bg-white rounded-lg shadow-xl w-[650px] overflow-hidden"
            >
                {/* Header */}
                <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-green-700">Issues Details</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        <FiX size={20} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6">
                    {/* Reporter Section */}
                    <div className="flex items-center mb-8">
                        <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center mr-4 overflow-hidden">
                            <img
                                src={`https://ui-avatars.com/api/?name=${issue?.reporter || 'User'}&background=random`}
                                alt={issue?.reporter || 'User'}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <div className="text-sm text-gray-500 mb-1">Reporter:</div>
                            <div className="font-semibold text-lg text-gray-900">{issue?.reporter || 'Unknown'}</div>
                            <div className="text-gray-500 text-sm">{issue?.reporter ? `${issue.reporter.toLowerCase().replace(' ', '')}@gmail.com` : 'no-email'} | +234 701 123 4567</div>
                        </div>
                    </div>

                    {/* Issue Details Grid */}
                    <h3 className="text-base font-semibold text-gray-900 mb-4">Issue Details:</h3>
                    <div className="bg-gray-50 rounded-lg p-4 mb-6">
                        <div className="grid grid-cols-3 gap-6">
                            <div>
                                <div className="text-xs text-gray-500 uppercase mb-1">Issue ID Number</div>
                                <div className="text-sm font-semibold text-gray-900">{issue?.id || 'N/A'}</div>
                            </div>
                            <div>
                                <div className="text-xs text-gray-500 uppercase mb-1">Issue Type</div>
                                <div className="text-sm font-semibold text-green-700">{issue?.type || 'Unknown'}</div>
                            </div>
                            <div>
                                <div className="text-xs text-gray-500 uppercase mb-1">Date Reported</div>
                                <div className="text-sm font-semibold text-gray-900">{issue?.date || 'N/A'}</div>
                            </div>
                        </div>
                    </div>

                    {/* Full Description */}
                    <div className="mb-6">
                        <h3 className="text-base font-semibold text-gray-900 mb-2">Full Description of Issue:</h3>
                        <p className="text-sm text-gray-600">
                            A comprehensive description of the issue, including any steps to reproduce if applicable.
                        </p>
                    </div>

                    {/* Document Section */}
                    <div className="mb-6">
                        <div className="text-base font-semibold text-gray-900 mb-2">Document / Link:</div>
                        <div className="flex items-center space-x-4">
                            <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 text-sm transition-colors">
                                <span>View</span>
                            </button>
                            <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 text-sm transition-colors">
                                <FiDownload size={16} />
                            </button>
                        </div>
                    </div>

                    {/* Timeline / History */}
                    <div className="mb-6">
                        <h3 className="text-base font-semibold text-gray-900 mb-4">Issue Timeline / History</h3>
                        <div className="space-y-4">
                            <div>
                                <div className="text-sm font-semibold text-gray-900">2/1/2024:</div>
                                <div className="text-sm text-gray-600">A log of previous actions or comments related to the issue.</div>
                            </div>
                            <div>
                                <div className="text-sm font-semibold text-gray-900">2/1/2025:</div>
                                <div className="text-sm text-gray-600">Any further action taken to resolve the issue</div>
                            </div>
                            <div>
                                <div className="text-sm font-semibold text-gray-900">4/2/2025:</div>
                                <div className="text-sm text-gray-600">And again the other actions as we keep recording all action taken to resolve the issue with the appropriate date</div>
                            </div>
                        </div>
                    </div>

                    {/* Add Comment / Note */}
                    <div className="mb-6">
                        <h3 className="text-base font-semibold text-gray-900 mb-2">Add Comment / Note</h3>
                        <textarea
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                            rows={3}
                            placeholder="Admin can add internal comments or note here"
                        />
                    </div>

                    {/* Footer Buttons */}
                    <div className="flex justify-end space-x-4 pt-4">
                        <button
                            onClick={onSaveContinue}
                            className="px-6 py-2.5 border border-green-600 text-green-600 rounded-lg text-sm font-medium hover:bg-green-50 transition-colors"
                        >
                            Save and Continue Later
                        </button>
                        <button
                            onClick={onMarkAsResolved}
                            className="px-6 py-2.5 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
                        >
                            Mark As Resolved
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IssueDetailsModal;