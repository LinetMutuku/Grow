'use client';

import React, { useState } from 'react';
import { FiMoreVertical, FiChevronLeft, FiChevronRight, FiSearch } from 'react-icons/fi';

// Sample projects data
const projectsData = [
    { id: 1, name: 'April Maze Cycle', fundingGoals: '₦5,000,000', minInvestment: '₦100,000', roi: '25%', amountRaised: '₦3,800,000', startDate: 'Jan 05, 2025', endDate: 'Jan 10, 2025', status: 'Active' },
    { id: 2, name: 'Rice Platform', fundingGoals: '₦3,000,000', minInvestment: '₦50,000', roi: '20%', amountRaised: '₦1,200,000', startDate: 'Jan 05, 2025', endDate: 'Jan 10, 2025', status: 'Completed' },
    { id: 3, name: 'Cocoa Season', fundingGoals: '₦7,500,000', minInvestment: '₦150,000', roi: '30%', amountRaised: '₦7,500,000', startDate: 'Jan 05, 2025', endDate: 'Jan 10, 2025', status: 'Pending' },
    { id: 4, name: 'Cassava Cycle', fundingGoals: '₦4,200,000', minInvestment: '₦80,000', roi: '22%', amountRaised: '₦2,500,000', startDate: 'Jan 05, 2025', endDate: 'Jan 10, 2025', status: 'Completed' },
    { id: 5, name: 'Tomato Project', fundingGoals: '₦2,500,000', minInvestment: '₦60,000', roi: '18%', amountRaised: '₦500,000', startDate: 'Jan 05, 2025', endDate: 'Jan 10, 2025', status: 'Active' },
    { id: 6, name: 'Bean Cycle', fundingGoals: '₦6,000,000', minInvestment: '₦120,000', roi: '28%', amountRaised: '₦6,000,000', startDate: 'Jan 05, 2025', endDate: 'Jan 10, 2025', status: 'Completed' },
    { id: 7, name: 'Plantain Season', fundingGoals: '₦4,500,000', minInvestment: '₦90,000', roi: '24%', amountRaised: '₦3,800,000', startDate: 'Jan 05, 2025', endDate: 'Jan 10, 2025', status: 'Pending' },
    { id: 8, name: 'Pepper Season', fundingGoals: '₦2,500,000', minInvestment: '₦60,000', roi: '26%', amountRaised: '₦500,000', startDate: 'Jan 05, 2025', endDate: 'Jan 10, 2025', status: 'Completed' },
];

const ProjectTable = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const projectsPerPage = 8;
    const filteredProjects = projectsData.filter(project =>
        project.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

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

    // Get status badge
    const getStatusBadge = (status: string) => {
        switch (status.toLowerCase()) {
            case 'active':
                return 'bg-blue-100 text-blue-800';
            case 'completed':
                return 'bg-green-100 text-green-800';
            case 'pending':
                return 'bg-yellow-100 text-yellow-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
                <h3 className="text-lg font-medium">All Projects</h3>

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
                            Project Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Funding Goals
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Min. Investment
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            ROI
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Amount Raised
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Start Date
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            End Date
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
                    {currentProjects.map((project) => (
                        <tr key={project.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {project.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {project.fundingGoals}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {project.minInvestment}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {project.roi}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {project.amountRaised}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {project.startDate}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {project.endDate}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadge(project.status)}`}>
                    {project.status}
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

            <div className="px-4 py-3 flex items-center justify-between border-t border-gray-200">
                <button
                    onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
                    disabled={currentPage === 1}
                    className="flex items-center px-3 py-1 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-green-500 disabled:opacity-50"
                >
                    <FiChevronLeft className="h-4 w-4 mr-1" />
                    Previous
                </button>

                <div className="flex">
                    {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                        const pageNumber = i + 1;
                        return (
                            <button
                                key={pageNumber}
                                onClick={() => paginate(pageNumber)}
                                className={`inline-flex items-center justify-center w-8 h-8 mx-1 ${
                                    currentPage === pageNumber
                                        ? 'bg-green-500 text-white rounded-md'
                                        : 'text-gray-700 hover:bg-gray-50 rounded-md'
                                }`}
                            >
                                {pageNumber}
                            </button>
                        );
                    })}

                    {totalPages > 5 && (
                        <>
                            <span className="inline-flex items-center justify-center w-8 h-8 mx-1">...</span>
                            <button
                                onClick={() => paginate(totalPages)}
                                className={`inline-flex items-center justify-center w-8 h-8 mx-1 ${
                                    currentPage === totalPages
                                        ? 'bg-green-500 text-white rounded-md'
                                        : 'text-gray-700 hover:bg-gray-50 rounded-md'
                                }`}
                            >
                                {totalPages}
                            </button>
                        </>
                    )}
                </div>

                <button
                    onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
                    disabled={currentPage === totalPages}
                    className="flex items-center px-3 py-1 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-green-500 disabled:opacity-50"
                >
                    Next
                    <FiChevronRight className="h-4 w-4 ml-1" />
                </button>
            </div>
        </div>
    );
};

export default ProjectTable;