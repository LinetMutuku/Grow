'use client';

import React, { useState } from 'react';
import { FiMoreVertical, FiChevronLeft, FiChevronRight, FiSearch } from 'react-icons/fi';

// Sample transactions data
const transactionsData = [
    { id: 'TXN001234', userName: 'John Doe', type: 'Wallet Deposit', amount: '₦1,000,000', date: 'Jan 10, 2025', status: 'Success' },
    { id: 'TXN001235', userName: 'Jane Smith', type: 'Investment', amount: '₦500,000', date: 'Jan 10, 2025', status: 'Success' },
    { id: 'TXN001236', userName: 'David Johnson', type: 'ROI Payout', amount: '₦150,000', date: 'Jan 10, 2025', status: 'Pending' },
    { id: 'TXN001237', userName: 'Sarah Williams', type: 'Withdrawal', amount: '₦200,000', date: 'Jan 10, 2025', status: 'Success' },
    { id: 'TXN001238', userName: 'Michael Brown', type: 'Investment', amount: '₦800,000', date: 'Jan 10, 2025', status: 'Pending' },
    { id: 'TXN001239', userName: 'Tracy Okoro', type: 'Investment', amount: '₦300,000', date: 'Jan 10, 2025', status: 'Success' },
    { id: 'TXN001240', userName: 'Aliyah David', type: 'ROI Payout', amount: '₦120,000', date: 'Jan 10, 2025', status: 'Pending' },
    { id: 'TXN001241', userName: 'Ola Benson', type: 'Wallet Deposit', amount: '₦500,000', date: 'Jan 10, 2025', status: 'Completed' },
];

const FinancialTransactions = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const transactionsPerPage = 8;
    const filteredTransactions = transactionsData.filter(transaction =>
        transaction.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        transaction.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        transaction.id.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastTransaction = currentPage * transactionsPerPage;
    const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
    const currentTransactions = filteredTransactions.slice(indexOfFirstTransaction, indexOfLastTransaction);

    const totalPages = Math.ceil(filteredTransactions.length / transactionsPerPage);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

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

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">All Transactions</h3>

                <div className="flex items-center">
                    <div className="relative mr-2">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FiSearch className="text-gray-400 h-4 w-4" />
                        </div>
                        <input
                            type="text"
                            className="bg-white border border-gray-300 rounded-md py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <button
                        type="button"
                        className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                        <span>Export</span>
                    </button>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Transaction ID
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            User Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Transaction Type
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Amount
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Date
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                            <span className="sr-only">Actions</span>
                        </th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {currentTransactions.map((transaction) => (
                        <tr key={transaction.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {transaction.id}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {transaction.userName}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {transaction.type}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {transaction.amount}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {transaction.date}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className={`font-medium ${getStatusColor(transaction.status)}`}>
                    {transaction.status}
                  </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button className="text-gray-400 hover:text-gray-500">
                                    <FiMoreVertical className="h-5 w-5" />
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            <div className="mt-4 flex items-center justify-between">
                <button
                    onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
                    disabled={currentPage === 1}
                    className="inline-flex items-center px-3 py-1 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-green-500 disabled:opacity-50"
                >
                    <FiChevronLeft className="h-4 w-4 mr-1" />
                    Previous
                </button>

                <div className="inline-flex shadow-sm">
                    <button
                        className="inline-flex items-center justify-center w-8 h-8 border border-gray-300 rounded-l-md text-sm font-medium bg-green-500 text-white"
                    >
                        1
                    </button>
                    <button
                        className="inline-flex items-center justify-center w-8 h-8 border-t border-b border-gray-300 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                    >
                        2
                    </button>
                    <button
                        className="inline-flex items-center justify-center w-8 h-8 border-t border-b border-gray-300 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                    >
                        3
                    </button>
                    <button
                        className="inline-flex items-center justify-center w-8 h-8 border-t border-b border-gray-300 text-sm font-medium text-gray-500 bg-white"
                    >
                        ...
                    </button>
                    <button
                        className="inline-flex items-center justify-center w-8 h-8 border border-gray-300 rounded-r-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                    >
                        8
                    </button>
                </div>

                <button
                    onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
                    disabled={currentPage === totalPages}
                    className="inline-flex items-center px-3 py-1 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-green-500 disabled:opacity-50"
                >
                    Next
                    <FiChevronRight className="h-4 w-4 ml-1" />
                </button>
            </div>
        </div>
    );
};

export default FinancialTransactions;