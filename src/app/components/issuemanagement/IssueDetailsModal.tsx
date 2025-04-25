'use client';

import React, { useRef, useEffect } from 'react';
import { FiDownload, FiEye, FiX } from 'react-icons/fi';

interface IssueDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    issue?: {
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
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
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

    if (!isOpen || !issue) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/10 overflow-y-auto">
            <div
                ref={modalRef}
                className="bg-white rounded-lg shadow-xl w-[650px] max-h-[90vh] overflow-y-auto my-4"
            >
                {/* Header */}
                <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                    <h2 className="text-lg font-semibold text-gray-900">Issues Details</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        <FiX size={20} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6">
                    {/* Reporter Section */}
                    <div className="flex items-center mb-6">
                        <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center mr-4 overflow-hidden text-white font-semibold text-xl">
                            AD
                        </div>
                        <div>
                            <div className="text-sm text-gray-500 mb-0.5">Reporter:</div>
                            <div className="font-semibold text-lg text-gray-900">April Dave</div>
                            <div className="text-gray-500 text-sm">April@gmail.com | +234 701 123 4567</div>
                        </div>
                    </div>

                    {/* Issue Details Grid */}
                    <h3 className="text-base font-semibold text-gray-900 mb-4">Issue Details:</h3>
                    <div className="bg-gray-50 rounded-lg p-4 mb-6">
                        <div className="grid grid-cols-3 gap-6">
                            <div>
                                <div className="text-xs text-gray-500 uppercase mb-1.5">Issue ID Number</div>
                                <div className="text-sm font-semibold text-gray-900">0017</div>
                            </div>
                            <div>
                                <div className="text-xs text-gray-500 uppercase mb-1.5">Issue Type</div>
                                <div className="text-sm font-semibold text-green-700">Rice Colon</div>
                            </div>
                            <div>
                                <div className="text-xs text-gray-500 uppercase mb-1.5">Date Reported</div>
                                <div className="text-sm font-semibold text-gray-900">12/2/2025</div>
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
                        <div className="text-base font-semibold text-gray-900 mb-3">Document / Link:</div>
                        <div className="flex items-center space-x-2">
                            <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 text-sm transition-colors">
                                View
                            </button>
                            <button className="flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
                                <FiDownload size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Timeline / History */}
                    <div className="mb-6">
                        <h3 className="text-base font-semibold text-gray-900 mb-4">Issue Timeline / History</h3>
                        <div className="space-y-3">
                            <div>
                                <div className="text-sm font-semibold text-gray-900 mb-0.5">2/1/2024:</div>
                                <div className="text-sm text-gray-600">A log of previous actions or comments related to the issue.</div>
                            </div>
                            <div>
                                <div className="text-sm font-semibold text-gray-900 mb-0.5">2/1/2025:</div>
                                <div className="text-sm text-gray-600">Any further action taken to resolve the issue</div>
                            </div>
                            <div>
                                <div className="text-sm font-semibold text-gray-900 mb-0.5">4/2/2025:</div>
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
                    <div className="flex justify-end space-x-4 pt-2">
                        <button
                            onClick={onSaveContinue}
                            className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
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