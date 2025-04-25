'use client';

import React, { useState } from 'react';
import { FiSearch, FiSliders, FiArrowUpRight, FiCheckCircle, FiXCircle } from 'react-icons/fi';
import IssueDetailsModal from './IssueDetailsModal';
import IssueFilterModal from './IssueFilterModal';

const PendingIssues = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedIssues, setSelectedIssues] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const [selectedIssue, setSelectedIssue] = useState(null);
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
    const issuesPerPage = 7;

    // Sample data for pending issues
    const pendingIssues = [
        { id: '89012', reporter: 'Suliat Nton', status: 'Pending Approval', priority: 'High', type: 'Beans Issues', assignee: 'Mark Johnson', daysWaiting: 3 },
        { id: '78903', reporter: 'Sarah Johnson', status: 'Awaiting Input', priority: 'Medium', type: 'Cassava Issues', assignee: 'Lisa Wong', daysWaiting: 5 },
        { id: '78901', reporter: 'Peter Cass', status: 'On Hold', priority: 'Low', type: 'Millet Issues', assignee: 'David Chen', daysWaiting: 2 },
        { id: '67845', reporter: 'Mark Wilson', status: 'Pending Approval', priority: 'Critical', type: 'Rice Issues', assignee: 'Elena Rodriguez', daysWaiting: 7 },
        { id: '56732', reporter: 'Jane Roberts', status: 'Awaiting Input', priority: 'High', type: 'Yam Issues', assignee: 'Michael Thompson', daysWaiting: 1 },
    ];

    // Helper functions for styling badges
    const getStatusClass = status => {
        const statusClasses = {
            'Pending Approval': 'bg-amber-100 text-amber-800',
            'Awaiting Input': 'bg-indigo-100 text-indigo-800',
            'On Hold': 'bg-gray-100 text-gray-800'
        };
        return statusClasses[status] || 'bg-blue-100 text-blue-800';
    };

    const getPriorityClass = priority => {
        const priorityClasses = {
            'Critical': 'bg-red-100 text-red-800 border border-red-200',
            'High': 'bg-orange-100 text-orange-800 border border-orange-200',
            'Medium': 'bg-yellow-100 text-yellow-800 border border-yellow-200',
            'Low': 'bg-green-100 text-green-800 border border-green-200'
        };
        return priorityClasses[priority] || 'bg-gray-100 text-gray-800 border border-gray-200';
    };

    const getWaitingClass = days => days >= 5 ? 'text-red-600' : days >= 3 ? 'text-amber-600' : 'text-gray-700';

    // Filter issues based on search term
    const filteredIssues = pendingIssues.filter(issue =>
        Object.values(issue).some(val =>
            val.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    // Calculate pagination
    const indexOfLastIssue = currentPage * issuesPerPage;
    const indexOfFirstIssue = indexOfLastIssue - issuesPerPage;
    const currentIssues = filteredIssues.slice(indexOfFirstIssue, indexOfLastIssue);
    const totalPages = Math.ceil(filteredIssues.length / issuesPerPage);

    // Handle checkbox selection
    const handleSelectIssue = issueId => {
        setSelectedIssues(prev =>
            prev.includes(issueId) ? prev.filter(id => id !== issueId) : [...prev, issueId]
        );
    };

    const handleSelectAllIssues = () => {
        setSelectedIssues(
            selectedIssues.length === currentIssues.length
                ? []
                : currentIssues.map(issue => issue.id)
        );
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
            {/* Search and Filter Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div className="relative w-full sm:w-96">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                    <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>

                <div className="flex space-x-2 w-full sm:w-auto">
                    <button
                        className="p-1 rounded-md hover:bg-gray-100 text-gray-500"
                        onClick={() => setIsFilterModalOpen(true)}
                    >
                        <FiSliders className="text-gray-600 h-4 w-4" />
                    </button>
                </div>
            </div>

            {/* Selected Items Actions */}
            {selectedIssues.length > 0 && (
                <div className="bg-gray-50 p-3 mb-4 rounded-lg flex justify-between items-center">
                    <span className="text-sm text-gray-600">{selectedIssues.length} issues selected</span>
                    <div className="flex space-x-2">
                        <button className="px-3 py-1 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                            Assign
                        </button>
                        <button className="px-3 py-1 text-sm bg-green-50 text-green-600 border border-green-200 rounded-md hover:bg-green-100">
                            Approve
                        </button>
                        <button className="px-3 py-1 text-sm bg-red-50 text-red-600 border border-red-200 rounded-md hover:bg-red-100">
                            Reject
                        </button>
                    </div>
                </div>
            )}

            {/* Table */}
            <div className="bg-white overflow-hidden shadow-sm rounded-lg">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                        <tr>
                            <th className="px-3 py-3 text-left">
                                <input
                                    type="checkbox"
                                    className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                                    checked={selectedIssues.length === currentIssues.length && currentIssues.length > 0}
                                    onChange={handleSelectAllIssues}
                                />
                            </th>
                            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">Reporter</th>
                            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">Priority</th>
                            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">Assignee</th>
                            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">Waiting</th>
                            <th className="relative px-3 py-3"><span className="sr-only">Actions</span></th>
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
                                <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{issue.id}</td>
                                <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-700">{issue.reporter}</td>
                                <td className="px-3 py-4 whitespace-nowrap">
                    <span className={`px-2.5 py-1 text-xs rounded-full font-medium ${getStatusClass(issue.status)}`}>
                      {issue.status}
                    </span>
                                </td>
                                <td className="px-3 py-4 whitespace-nowrap">
                    <span className={`px-2.5 py-1 text-xs rounded-full font-medium ${getPriorityClass(issue.priority)}`}>
                      {issue.priority}
                    </span>
                                </td>
                                <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-700">{issue.type}</td>
                                <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-700">{issue.assignee}</td>
                                <td className="px-3 py-4 whitespace-nowrap text-sm">
                    <span className={`font-medium ${getWaitingClass(issue.daysWaiting)}`}>
                      {issue.daysWaiting} day{issue.daysWaiting !== 1 ? 's' : ''}
                    </span>
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

                    <div className="flex items-center space-x-2">
                        <button
                            className="px-3 py-1.5 border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-50"
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(currentPage - 1)}
                        >
                            Previous
                        </button>

                        {Array.from({ length: Math.min(totalPages, 3) }, (_, i) => (
                            <button
                                key={i}
                                className={`px-3 py-1.5 border rounded-md text-sm ${
                                    currentPage === i + 1
                                        ? 'bg-green-600 text-white border-green-600'
                                        : 'text-gray-600 border-gray-300 hover:bg-gray-50'
                                }`}
                                onClick={() => setCurrentPage(i + 1)}
                            >
                                {i + 1}
                            </button>
                        ))}

                        {totalPages > 3 && <span className="px-2">...</span>}

                        <button
                            className="px-3 py-1.5 border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-50"
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

export default PendingIssues;