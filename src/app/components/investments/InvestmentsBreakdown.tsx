'use client';

import React, { useState } from 'react';
import { FiMoreVertical, FiChevronLeft, FiChevronRight, FiSearch } from 'react-icons/fi';

// Sample investments data
const investmentsData = [
    { id: 1, investorName: 'John Doe', projectName: 'April Maize Cycle', amount: '₦500,000', expectedROI: '25%', investmentDate: 'Jan 10, 2025', status: 'Active' },
    { id: 2, investorName: 'Jane Smith', projectName: 'Rice Platform', amount: '₦1,300,000', expectedROI: '20%', investmentDate: 'Jan 10, 2025', status: 'Completed' },
    { id: 3, investorName: 'David Johnson', projectName: 'Cocoa Season', amount: '₦900,000', expectedROI: '30%', investmentDate: 'Jan 10, 2025', status: 'Pending' },
    { id: 4, investorName: 'Sarah Williams', projectName: 'Cassava Cycle', amount: '₦600,000', expectedROI: '22%', investmentDate: 'Jan 10, 2025', status: 'Completed' },
    { id: 5, investorName: 'Michael Brown', projectName: 'Tomato Project', amount: '₦500,000', expectedROI: '18%', investmentDate: 'Jan 10, 2025', status: 'Active' },
    { id: 6, investorName: 'Tracy Okoro', projectName: 'Bean Cycle', amount: '₦450,000', expectedROI: '28%', investmentDate: 'Jan 10, 2025', status: 'Completed' },
    { id: 7, investorName: 'Aliyah David', projectName: 'Plantain Season', amount: '₦700,000', expectedROI: '24%', investmentDate: 'Jan 10, 2025', status: 'Pending' },
    { id: 8, investorName: 'Ola Benson', projectName: 'Pepper Season', amount: '₦500,000', expectedROI: '26%', investmentDate: 'Jan 10, 2025', status: 'Completed' },
];

const InvestmentsBreakdown = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const investmentsPerPage = 8;
    const filteredInvestments = investmentsData.filter(investment =>
        investment.investorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        investment.projectName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastInvestment = currentPage * investmentsPerPage;
    const indexOfFirstInvestment = indexOfLastInvestment - investmentsPerPage;
    const currentInvestments = filteredInvestments.slice(indexOfFirstInvestment, indexOfLastInvestment);

    const totalPages = Math.ceil(filteredInvestments.length / investmentsPerPage);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    // Get status color
    const getStatusColor = (status: string) => {
        switch (status.toLowerCase()) {
            case 'active':
                return 'text-blue-500';
            case 'completed':
                return 'text-green-500';
            case 'pending':
                return 'text-yellow-500';
            default:
                return 'text-gray-500';
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">All Investments</h3>

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
                            Investor Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Project Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Amount Invested
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Expected ROI
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Investment Date
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
                    {currentInvestments.map((investment) => (
                        <tr key={investment.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {investment.investorName}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {investment.projectName}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {investment.amount}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {investment.expectedROI}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {investment.investmentDate}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className={`font-medium ${getStatusColor(investment.status)}`}>
                    {investment.status}
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

export default InvestmentsBreakdown;