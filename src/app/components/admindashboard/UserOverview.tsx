'use client';

import React, { useState } from 'react';
import { FiSearch, FiSliders, FiChevronLeft, FiChevronRight, FiEye } from 'react-icons/fi';

// Sample user data
const usersData = [
    { id: 1, name: 'April Dave', email: 'April@gmail.com', status: 'Active', investments: 200, dateRegistered: 'Jan 05, 2025' },
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

    // Filter users based on search term
    const filteredUsers = usersData.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Get current users for pagination
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

    // Change page
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    // Get status badge color
    const getStatusColor = (status: string) => {
        switch (status.toLowerCase()) {
            case 'active':
                return 'bg-green-100 text-green-800';
            case 'suspended':
                return 'bg-red-100 text-red-800';
            case 'pending':
                return 'bg-yellow-100 text-yellow-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="bg-white p-3 rounded-md shadow-sm">
            <h2 className="text-base font-medium mb-3">User Overview</h2>

            <div className="flex justify-between mb-3">
                <div className="relative max-w-xs">
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

                <button
                    type="button"
                    className="p-1 rounded-md hover:bg-gray-100 text-gray-500"
                >
                    <FiSliders className="text-gray-600 h-4 w-4" />
                </button>
            </div>

            <div className="overflow-x-auto border border-gray-100 rounded-md">
                <table className="min-w-full divide-y divide-gray-200 text-xs">
                    <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            USER NAME
                        </th>
                        <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            USER EMAIL
                        </th>
                        <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            USER STATUS
                        </th>
                        <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            # OF INV
                        </th>
                        <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            DATE REGISTERED
                        </th>
                        <th scope="col" className="relative px-3 py-2">
                            <span className="sr-only">Actions</span>
                        </th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {currentUsers.map((user) => (
                        <tr key={user.id} className="hover:bg-gray-50">
                            <td className="px-3 py-2 whitespace-nowrap text-xs font-medium text-gray-900">
                                {user.name}
                            </td>
                            <td className="px-3 py-2 whitespace-nowrap text-xs text-gray-500">
                                {user.email}
                            </td>
                            <td className="px-3 py-2 whitespace-nowrap">
                  <span className={`px-2 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(user.status)}`}>
                    {user.status}
                  </span>
                            </td>
                            <td className="px-3 py-2 whitespace-nowrap text-xs text-gray-500">
                                {user.investments}
                            </td>
                            <td className="px-3 py-2 whitespace-nowrap text-xs text-gray-500">
                                {user.dateRegistered}
                            </td>
                            <td className="px-3 py-2 whitespace-nowrap text-right text-xs font-medium">
                                <button className="text-gray-400 hover:text-green-600">
                                    <FiEye className="w-4 h-4" />
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            <div className="flex justify-between items-center mt-3">
                <button
                    className="flex items-center px-2 py-1 text-xs border border-gray-300 rounded-md bg-white hover:bg-gray-50 disabled:opacity-50"
                    disabled={currentPage === 1}
                    onClick={() => paginate(currentPage - 1)}
                >
                    <FiChevronLeft className="mr-1 h-3 w-3" />
                    Previous
                </button>

                <div className="flex space-x-1">
                    {[1, 2, 3, 8, 9, 10].map((number, index) => {
                        if (index === 3) {
                            return <span key="dots" className="flex items-center justify-center w-6 h-6 text-xs">...</span>;
                        }
                        return (
                            <button
                                key={number}
                                className={`w-6 h-6 flex items-center justify-center rounded-md text-xs ${
                                    currentPage === number
                                        ? 'bg-green-500 text-white'
                                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                                }`}
                                onClick={() => paginate(number)}
                            >
                                {number}
                            </button>
                        );
                    })}
                </div>

                <button
                    className="flex items-center px-2 py-1 text-xs border border-gray-300 rounded-md bg-white hover:bg-gray-50 disabled:opacity-50"
                    onClick={() => paginate(currentPage + 1)}
                >
                    Next
                    <FiChevronRight className="ml-1 h-3 w-3" />
                </button>
            </div>
        </div>
    );
};

export default UserOverview;