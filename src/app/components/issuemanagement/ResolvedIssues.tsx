'use client';

import React, { useState } from 'react';
import { FiSearch, FiSliders, FiArrowUpRight, FiEye, FiEdit2, FiRefreshCw, FiArchive } from 'react-icons/fi';
import IssueDetailsModal from './IssueDetailsModal';
import IssueFilterModal from './IssueFilterModal';

const ResolvedIssues = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedIssues, setSelectedIssues] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const [selectedIssue, setSelectedIssue] = useState(null);
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
    const issuesPerPage = 7;

    // Sample data for resolved issues with various statuses
    const resolvedIssues = [
        {
            id: '12345',
            reporter: 'Rice Black',
            status: 'Resolved',
            resolution: 'Fixed',
            priority: 'High',
            type: 'Rice Issues',
            date: 'Jan 05, 2025',
            resolvedBy: 'John Okafor',
            resolvedDate: 'Jan 08, 2025'
        },
        {
            id: '56789',
            reporter: 'Peter Cass',
            status: 'Closed',
            resolution: 'Won\'t Fix',
            priority: 'Medium',
            type: 'Millet Issues',
            date: 'Jan 05, 2025',
            resolvedBy: 'Sarah Mills',
            resolvedDate: 'Jan 07, 2025'
        },
        {
            id: '78904',
            reporter: 'Michael Brown',
            status: 'Resolved',
            resolution: 'Duplicate',
            priority: 'Low',
            type: 'Beans Issues',
            date: 'Jan 05, 2025',
            resolvedBy: 'Michael Chang',
            resolvedDate: 'Jan 09, 2025'
        },
        {
            id: '12346',
            reporter: 'Cocoa Sheen',
            status: 'Closed',
            resolution: 'Completed',
            priority: 'Critical',
            type: 'Cocoa Issues',
            date: 'Jan 05, 2025',
            resolvedBy: 'Amina Kone',
            resolvedDate: 'Jan 10, 2025'
        },
        {
            id: '45678',
            reporter: 'Suliat Nton',
            status: 'Resolved',
            resolution: 'Fixed',
            priority: 'High',
            type: 'Yam Issues',
            date: 'Jan 05, 2025',
            resolvedBy: 'David Novak',
            resolvedDate: 'Jan 11, 2025'
        },
        {
            id: '34512',
            reporter: 'Lisa Morgan',
            status: 'Closed',
            resolution: 'Not Reproducible',
            priority: 'Medium',
            type: 'Cassava Issues',
            date: 'Jan 05, 2025',
            resolvedBy: 'Emma Wilson',
            resolvedDate: 'Jan 12, 2025'
        },
        {
            id: '67890',
            reporter: 'James Baker',
            status: 'Resolved',
            resolution: 'Fixed',
            priority: 'Low',
            type: 'Rice Issues',
            date: 'Jan 05, 2025',
            resolvedBy: 'Carlos Rodriguez',
            resolvedDate: 'Jan 13, 2025'
        },
        {
            id: '89123',
            reporter: 'Emma Thompson',
            status: 'Closed',
            resolution: 'Cannot Reproduce',
            priority: 'Critical',
            type: 'Beans Issues',
            date: 'Jan 05, 2025',
            resolvedBy: 'Alex Johnson',
            resolvedDate: 'Jan 14, 2025'
        }
    ];

    // Status badge colors
    const getStatusBadgeClass = (status) => {
        switch (status) {
            case 'Resolved':
                return 'bg-green-100 text-green-800';
            case 'Closed':
                return 'bg-purple-100 text-purple-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    // Resolution badge colors
    const getResolutionBadgeClass = (resolution) => {
        switch (resolution) {
            case 'Fixed':
                return 'bg-blue-50 text-blue-700 border border-blue-200';
            case 'Won\'t Fix':
                return 'bg-red-50 text-red-700 border border-red-200';
            case 'Duplicate':
                return 'bg-orange-50 text-orange-700 border border-orange-200';
            case 'Completed':
                return 'bg-emerald-50 text-emerald-700 border border-emerald-200';
            case 'Not Reproducible':
            case 'Cannot Reproduce':
                return 'bg-gray-50 text-gray-700 border border-gray-200';
            default:
                return 'bg-gray-50 text-gray-700 border border-gray-200';
        }
    };

    // Priority badge colors
    const getPriorityBadgeClass = (priority) => {
        switch (priority) {
            case 'Critical':
                return 'bg-red-100 text-red-800 border border-red-200';
            case 'High':
                return 'bg-orange-100 text-orange-800 border border-orange-200';
            case 'Medium':
                return 'bg-yellow-100 text-yellow-800 border border-yellow-200';
            case 'Low':
                return 'bg-green-100 text-green-800 border border-green-200';
            default:
                return 'bg-gray-100 text-gray-800 border border-gray-200';
        }
    };

    // Filter issues based on search term
    const filteredIssues = resolvedIssues.filter(issue => {
        return (
            issue.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            issue.reporter.toLowerCase().includes(searchTerm.toLowerCase()) ||
            issue.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
            issue.resolvedBy.toLowerCase().includes(searchTerm.toLowerCase()) ||
            issue.resolution.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    // Calculate pagination
    const indexOfLastIssue = currentPage * issuesPerPage;
    const indexOfFirstIssue = indexOfLastIssue - issuesPerPage;
    const currentIssues = filteredIssues.slice(indexOfFirstIssue, indexOfLastIssue);
    const totalPages = Math.ceil(filteredIssues.length / issuesPerPage);

    // Handle checkbox selection
    const handleSelectIssue = (issueId) => {
        if (selectedIssues.includes(issueId)) {
            setSelectedIssues(selectedIssues.filter(id => id !== issueId));
        } else {
            setSelectedIssues([...selectedIssues, issueId]);
        }
    };

    // Handle select all issues
    const handleSelectAllIssues = () => {
        if (selectedIssues.length === currentIssues.length) {
            setSelectedIssues([]);
        } else {
            setSelectedIssues(currentIssues.map(issue => issue.id));
        }
    };

    const handleOpenDetails = (issue) => {
        setSelectedIssue(issue);
        setIsDetailsModalOpen(true);
    };

    const handleApplyFilters = (filters) => {
        // Implement your filter logic here
        console.log('Applied filters:', filters);
    };

    return (
        <div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div className="relative w-full sm:w-96">
                    <input
                        type="text"
                        placeholder="Search by ID, reporter, resolution..."
                        className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>

                <div className="flex space-x-2 w-full sm:w-auto">
                    <button
                        className="p-1 rounded-md hover:bg-gray-100 text-gray-500"
                        onClick={() => setIsFilterModalOpen(true)}
                    >
                        <FiSliders className="text-gray-600 h-4 w-4" />
                    </button>
                    <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 font-medium">
                        Export
                    </button>
                </div>
            </div>

            {selectedIssues.length > 0 && (
                <div className="bg-gray-50 p-3 mb-4 rounded-lg flex justify-between items-center">
                    <span className="text-sm text-gray-600">{selectedIssues.length} issues selected</span>
                    <div className="flex space-x-2">
                        <button className="px-3 py-1 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                            Export Selected
                        </button>
                        <button className="px-3 py-1 text-sm bg-blue-50 text-blue-600 border border-blue-200 rounded-md hover:bg-blue-100">
                            <FiRefreshCw className="inline-block mr-1" size={12} />
                            Reopen
                        </button>
                        <button className="px-3 py-1 text-sm bg-red-50 text-red-600 border border-red-200 rounded-md hover:bg-red-100">
                            <FiArchive className="inline-block mr-1" size={12} />
                            Archive
                        </button>
                    </div>
                </div>
            )}

            <div className="bg-white overflow-hidden shadow-sm rounded-lg">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-3 py-3 text-left">
                                <input
                                    type="checkbox"
                                    className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                                    checked={selectedIssues.length === currentIssues.length && currentIssues.length > 0}
                                    onChange={handleSelectAllIssues}
                                />
                            </th>
                            <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                ID
                            </th>
                            <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Reporter
                            </th>
                            <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
                            </th>
                            <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Resolution
                            </th>
                            <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Type
                            </th>
                            <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Resolved By
                            </th>
                            <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Resolved Date
                            </th>
                            <th scope="col" className="relative px-3 py-3">
                                <span className="sr-only">Actions</span>
                            </th>
                        </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                        {currentIssues.map((issue) => (
                            <tr key={issue.id} className="hover:bg-gray-50">
                                <td className="px-3 py-4 whitespace-nowrap">
                                    <input
                                        type="checkbox"
                                        className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                                        checked={selectedIssues.includes(issue.id)}
                                        onChange={() => handleSelectIssue(issue.id)}
                                    />
                                </td>
                                <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {issue.id}
                                </td>
                                <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-700">
                                    {issue.reporter}
                                </td>
                                <td className="px-3 py-4 whitespace-nowrap">
                    <span className={`px-2.5 py-1 text-xs rounded-full font-medium ${getStatusBadgeClass(issue.status)}`}>
                      {issue.status}
                    </span>
                                </td>
                                <td className="px-3 py-4 whitespace-nowrap">
                    <span className={`px-2.5 py-1 text-xs rounded-full font-medium ${getResolutionBadgeClass(issue.resolution)}`}>
                      {issue.resolution}
                    </span>
                                </td>
                                <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-700">
                                    {issue.type}
                                </td>
                                <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-700">
                                    {issue.resolvedBy}
                                </td>
                                <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {issue.resolvedDate}
                                </td>
                                <td className="px-3 py-4 whitespace-nowrap text-right text-sm font-medium relative">
                                    <button
                                        className="text-gray-400 hover:text-gray-600 focus:outline-none"
                                        onClick={() => handleOpenDetails(issue)}
                                    >
                                        <FiArrowUpRight size={20} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex justify-between items-center mt-4">
                    <div className="text-sm text-gray-500">
                        Showing {indexOfFirstIssue + 1} to {Math.min(indexOfLastIssue, filteredIssues.length)} of {filteredIssues.length} issues
                    </div>

                    <div className="flex items-center space-x-1">
                        <button
                            className="flex items-center px-3 py-1.5 border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(currentPage - 1)}
                        >
                            Previous
                        </button>

                        <div className="flex items-center">
                            {[...Array(Math.min(totalPages, 5))].map((_, index) => {
                                // Logic for showing pagination with ellipsis
                                let pageNumber = index + 1;
                                if (totalPages > 5 && currentPage > 3 && index === 0) {
                                    return (
                                        <button
                                            key={index}
                                            className="px-3 py-1.5 border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50 mx-0.5"
                                            onClick={() => setCurrentPage(1)}
                                        >
                                            1
                                        </button>
                                    );
                                }
                                if (totalPages > 5 && currentPage > 3 && index === 1) {
                                    return <span key={index} className="px-2">...</span>;
                                }

                                if (totalPages > 5 && currentPage > 3 && currentPage < totalPages - 2) {
                                    pageNumber = currentPage - 1 + index;
                                }

                                if (totalPages > 5 && currentPage > totalPages - 3 && index < 3) {
                                    pageNumber = totalPages - 4 + index;
                                }

                                return (
                                    <button
                                        key={index}
                                        className={`px-3 py-1.5 border rounded-md text-sm mx-0.5 ${
                                            currentPage === pageNumber
                                                ? 'bg-green-600 text-white border-green-600'
                                                : 'text-gray-600 border-gray-300 hover:bg-gray-50'
                                        }`}
                                        onClick={() => setCurrentPage(pageNumber)}
                                    >
                                        {pageNumber}
                                    </button>
                                );
                            })}

                            {totalPages > 5 && currentPage < totalPages - 2 && (
                                <>
                                    <span className="px-2">...</span>
                                    <button
                                        className="px-3 py-1.5 border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50 mx-0.5"
                                        onClick={() => setCurrentPage(totalPages)}
                                    >
                                        {totalPages}
                                    </button>
                                </>
                            )}
                        </div>

                        <button
                            className="flex items-center px-3 py-1.5 border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage(currentPage + 1)}
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}

            <IssueDetailsModal
                isOpen={isDetailsModalOpen}
                onClose={() => setIsDetailsModalOpen(false)}
                issue={selectedIssue}
            />

            <IssueFilterModal
                isOpen={isFilterModalOpen}
                onClose={() => setIsFilterModalOpen(false)}
                onApplyFilters={handleApplyFilters}
            />
        </div>
    );
};

export default ResolvedIssues;