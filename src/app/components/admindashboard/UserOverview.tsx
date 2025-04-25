'use client';

import React, { useState } from 'react';
import { FiSearch, FiSliders, FiChevronLeft, FiChevronRight, FiArrowUpRight } from 'react-icons/fi';
import FilterModal from './FilterModal';
import UserDetailsModal from './UserDetailsModal';

// Sample user data - expanded with more details
const usersData = [
    {
        id: 1,
        name: 'April Dave',
        email: 'April@gmail.com',
        phone: '+234 701 123 4567',
        status: 'Active',
        investments: 200,
        dateRegistered: 'Jan 05, 2025',
        totalFund: '13,000,000',
        issuesRaised: 3,
        issuesResolved: 12,
        project: {
            name: 'Rice Farming In',
            location: 'Kaduna, Nigeria',
            description: 'Rice Investment',
            status: 'Active',
            investment: '₦10,000,000',
            expectedROI: '25%',
            startDate: 'March 1, 2025',
            endDate: 'December 31, 2025'
        }
    },
    { id: 2, name: 'Rice Black', email: 'Rice@gmail.com', status: 'Suspended', investments: 250, dateRegistered: 'Jan 05, 2025' },
    { id: 3, name: 'Cocoa Sheen', email: 'Cocoa@gmail.com', status: 'Active', investments: 157, dateRegistered: 'Jan 05, 2025' },
    { id: 4, name: 'Suilat Nton', email: 'Suilat@gmail.com', status: 'Pending', investments: 182, dateRegistered: 'Jan 05, 2025' },
    { id: 5, name: 'Adeolu Nelson', email: 'adeolu@gmail.com', status: 'Active', investments: 22, dateRegistered: 'Jan 05, 2025' },
    { id: 6, name: 'Brian Kyle', email: 'Kyle@gmail.com', status: 'Active', investments: 304, dateRegistered: 'Jan 05, 2025' },
    { id: 7, name: 'Peter Cass', email: 'Peter@gmail.com', status: 'Suspended', investments: 25, dateRegistered: 'Jan 05, 2025' },
    { id: 8, name: 'Piper Mills', email: 'Mills@gmail.com', status: 'Active', investments: 201, dateRegistered: 'Jan 05, 2025' },
];

interface UserOverviewProps {
    maxUsers?: number;
}

const UserOverview: React.FC<UserOverviewProps> = ({ maxUsers = 8 }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = maxUsers;
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
    const [activeFilter, setActiveFilter] = useState('all');
    const [selectedUser, setSelectedUser] = useState(null);
    const [isUserDetailsModalOpen, setIsUserDetailsModalOpen] = useState(false);

    // Filter users based on search term and active filter
    const filteredUsers = usersData.filter(user => {
        // First apply search filter
        const matchesSearch =
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase());

        // Then apply status filter
        if (activeFilter === 'all') return matchesSearch;
        if (activeFilter === 'pending') return matchesSearch && user.status === 'Pending';
        if (activeFilter === 'suspended') return matchesSearch && user.status === 'Suspended';
        if (activeFilter === 'active') return matchesSearch && user.status === 'Active';

        return matchesSearch;
    });

    // Get current users for pagination
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

    // Change page
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    // Handle filter change
    const handleFilterChange = (filter) => {
        setActiveFilter(filter);
        setCurrentPage(1); // Reset to first page when filter changes
    };

    // Handle user details modal
    const handleViewUser = (user) => {
        setSelectedUser(user);
        setIsUserDetailsModalOpen(true);
    };

    // Get status badge color
    const getStatusColor = (status: string) => {
        switch (status.toLowerCase()) {
            case 'active':
                return 'bg-green-100 text-green-700';
            case 'suspended':
                return 'bg-red-100 text-red-700';
            case 'pending':
                return 'bg-yellow-100 text-yellow-700';
            default:
                return 'bg-gray-100 text-gray-700';
        }
    };

    // Get filter status text for display
    const getFilterStatusText = () => {
        switch (activeFilter) {
            case 'pending':
                return 'Pending Users';
            case 'suspended':
                return 'Suspended Users';
            case 'active':
                return 'Active Users';
            default:
                return 'User Overview';
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-sm">
            <div className="p-4">
                <h2 className="text-lg font-semibold mb-4">{getFilterStatusText()}</h2>

                <div className="flex items-center justify-between">
                    <div className="relative w-64">
                        <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                            <FiSearch className="text-gray-400 h-3 w-3" />
                        </div>
                        <input
                            type="text"
                            className="bg-gray-100 pl-7 pr-3 py-1 rounded-md text-xs w-full focus:outline-none focus:ring-1 focus:ring-green-500"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="relative">
                        <button
                            type="button"
                            className="p-1 rounded-md hover:bg-gray-100 text-gray-500"
                            onClick={() => setIsFilterModalOpen(!isFilterModalOpen)}
                        >
                            <FiSliders className="text-gray-600 h-4 w-4" />
                        </button>

                        {/* Place filter modal here for proper positioning */}
                        {isFilterModalOpen && (
                            <FilterModal
                                isOpen={isFilterModalOpen}
                                onClose={() => setIsFilterModalOpen(false)}
                                onFilterChange={handleFilterChange}
                            />
                        )}
                    </div>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                    <thead>
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            USER NAME
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            USER EMAIL
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            USER STATUS
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            # OF INV
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            DATE REGISTERED
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Actions</span>
                        </th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {currentUsers.map((user) => (
                        <tr key={user.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {user.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {user.email}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-3 py-1 inline-flex text-xs leading-5 font-medium rounded-full ${getStatusColor(user.status)}`}>
                                        {user.status}
                                    </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {user.investments}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {user.dateRegistered}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right">
                                <button
                                    className="text-gray-400 hover:text-gray-600"
                                    onClick={() => handleViewUser(user)}
                                >
                                    <FiArrowUpRight className="w-5 h-5" />
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {filteredUsers.length > 0 ? (
                <div className="flex justify-between items-center mt-4 px-4 pb-4">
                    <button
                        className="flex items-center px-3 py-2 text-sm border border-gray-300 rounded-md bg-white hover:bg-gray-50 disabled:opacity-50"
                        disabled={currentPage === 1}
                        onClick={() => paginate(currentPage - 1)}
                    >
                        <FiChevronLeft className="mr-1 h-4 w-4" />
                        Previous
                    </button>

                    <div className="flex space-x-2">
                        {Array.from({ length: Math.min(6, Math.ceil(filteredUsers.length / usersPerPage)) }, (_, i) => i + 1).map((number) => (
                            <button
                                key={number}
                                className={`w-8 h-8 flex items-center justify-center rounded-md text-sm ${
                                    currentPage === number
                                        ? 'bg-green-500 text-white'
                                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                                }`}
                                onClick={() => paginate(number)}
                            >
                                {number}
                            </button>
                        ))}
                    </div>

                    <button
                        className="flex items-center px-3 py-2 text-sm border border-gray-300 rounded-md bg-white hover:bg-gray-50 disabled:opacity-50"
                        disabled={currentPage === Math.ceil(filteredUsers.length / usersPerPage)}
                        onClick={() => paginate(currentPage + 1)}
                    >
                        Next
                        <FiChevronRight className="ml-1 h-4 w-4" />
                    </button>
                </div>
            ) : (
                <div className="text-center py-4 text-gray-500 text-sm">
                    No users found matching your criteria
                </div>
            )}

            {/* User Details Modal */}
            {isUserDetailsModalOpen && selectedUser && (
                <UserDetailsModal
                    isOpen={isUserDetailsModalOpen}
                    onClose={() => setIsUserDetailsModalOpen(false)}
                    user={selectedUser}
                />
            )}
        </div>
    );
};

export default UserOverview;