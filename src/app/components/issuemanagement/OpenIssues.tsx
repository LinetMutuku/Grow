'use client';

import React, { useState } from 'react';
import { FiSearch, FiFilter, FiMoreVertical, FiEye, FiEdit2, FiArchive } from 'react-icons/fi';

const OpenIssues = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedIssues, setSelectedIssues] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const issuesPerPage = 7;

    // Sample data for open issues with various statuses
    const openIssues = [
        {
            id: '67890',
            reporter: 'April Dave',
            status: 'Active',
            priority: 'High',
            type: 'Cassava Issues',
            date: 'Jan 05, 2025',
            assignee: 'John Okafor'
        },
        {
            id: '0017',
            reporter: 'Cocoa Sheen',
            status: 'In Progress',
            priority: 'Medium',
            type: 'Cocoa Issues',
            date: 'Jan 05, 2025',
            assignee: 'Sarah Mills'
        },
        {
            id: '34567',
            reporter: 'Adeolu Nelson',
            status: 'Under Review',
            priority: 'Low',
            type: 'Yam Issues',
            date: 'Jan 05, 2025',
            assignee: 'Michael Chang'
        },
        {
            id: '45678',
            reporter: 'Bean Kyle',
            status: 'Active',
            priority: 'Critical',
            type: 'Yam Issues',
            date: 'Jan 05, 2025',
            assignee: 'Amina Kone'
        },
        {
            id: '78901',
            reporter: 'Piper Mills',
            status: 'In Progress',
            priority: 'High',
            type: 'Rice Issues',
            date: 'Jan 05, 2025',
            assignee: 'David Novak'
        },
        {
            id: '78902',
            reporter: 'John Smith',
            status: 'Active',
            priority: 'Medium',
            type: 'Rice Issues',
            date: 'Jan 05, 2025',
            assignee: 'Emma Wilson'
        },
        {
            id: '78905',
            reporter: 'Emily Wong',
            status: 'Under Review',
            priority: 'High',
            type: 'Beans Issues',
            date: 'Jan 05, 2025',
            assignee: 'Carlos Rodriguez'
        },
    ];

    // Status badge colors
    const getStatusBadgeClass = (status) => {
        switch (status) {
            case 'Active':
                return 'bg-emerald-100 text-emerald-800';
            case 'In Progress':
                return 'bg-blue-100 text-blue-800';
            case 'Under Review':
                return 'bg-purple-100 text-purple-800';
            default:
                return 'bg-gray-100 text-gray-800';
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
    const filteredIssues = openIssues.filter(issue => {
        return (
            issue.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            issue.reporter.toLowerCase().includes(searchTerm.toLowerCase()) ||
            issue.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
            issue.assignee.toLowerCase().includes(searchTerm.toLowerCase())
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

    // Toggle dropdown menu
    const toggleDropdown = (issueId) => {
        if (dropdownOpen === issueId) {
            setDropdownOpen(null);
        } else {
            setDropdownOpen(issueId);
        }
    };

    return (
        <div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div className="relative w-full sm:w-96">
                    <input
                        type="text"
                        placeholder="Search by ID, reporter, assignee..."
                        className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>

                <div className="flex space-x-2 w-full sm:w-auto">
                    <button className="flex items-center px-3 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                        <FiFilter className="mr-2" />
                        Filter
                    </button>
                    <button className="px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                        + New Issue
                    </button>
                </div>
            </div>

            {selectedIssues.length > 0 && (
                <div className="bg-gray-50 p-3 mb-4 rounded-lg flex justify-between items-center">
                    <span className="text-sm text-gray-600">{selectedIssues.length} issues selected</span>
                    <div className="flex space-x-2">
                        <button className="px-3 py-1 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                            Assign
                        </button>
                        <button className="px-3 py-1 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                            Change Status
                        </button>
                        <button className="px-3 py-1 text-sm bg-red-50 text-red-600 border border-red-200 rounded-md hover:bg-red-100">
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
                                Priority
                            </th>
                            <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Type
                            </th>
                            <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Assignee
                            </th>
                            <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Date
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
                    <span className={`px-2.5 py-1 text-xs rounded-full font-medium ${getPriorityBadgeClass(issue.priority)}`}>
                      {issue.priority}
                    </span>
                                </td>
                                <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-700">
                                    {issue.type}
                                </td>
                                <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-700">
                                    {issue.assignee}
                                </td>
                                <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {issue.date}
                                </td>
                                <td className="px-3 py-4 whitespace-nowrap text-right text-sm font-medium relative">
                                    <button
                                        className="text-gray-400 hover:text-gray-600 focus:outline-none"
                                        onClick={() => toggleDropdown(issue.id)}
                                    >
                                        <FiMoreVertical size={16} />
                                    </button>

                                    {dropdownOpen === issue.id && (
                                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                                            <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                <FiEye className="mr-2" size={14} />
                                                View Details
                                            </button>
                                            <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                <FiEdit2 className="mr-2" size={14} />
                                                Edit Issue
                                            </button>
                                            <button className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                                                <FiArchive className="mr-2" size={14} />
                                                Archive
                                            </button>
                                        </div>
                                    )}
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
        </div>
    );
};

export default OpenIssues;