'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight, FiMoreVertical } from 'react-icons/fi';
import ActionModal from './ActionModal';
import ConfirmationModal from './ConfirmationModal';
import BulkActionModal from './BulkActionModal';
import UserDetailsModal from './UserDetailsModal';

// Sample user data
const usersData = [
    { id: 1, regNo: '67890', name: 'April Dave', email: 'April@gmail.com', investments: 2, dateRegistered: 'Jan 05, 2025' },
    { id: 2, regNo: '12345', name: 'Rice Black', email: 'Rice@gmail.com', investments: 25, dateRegistered: 'Jan 05, 2025' },
    { id: 3, regNo: '23456', name: 'Cocoa Sheen', email: 'Cocoa@gmail.com', investments: 7, dateRegistered: 'Jan 05, 2025' },
    { id: 4, regNo: '89012', name: 'Suilat Nton', email: 'Suilat@gmail.com', investments: 8, dateRegistered: 'Jan 05, 2025' },
    { id: 5, regNo: '34567', name: 'Adeolu Nelson', email: 'adeolu@gmail.com', investments: 22, dateRegistered: 'Jan 05, 2025' },
    { id: 6, regNo: '45678', name: 'Bean Kyle', email: 'Kyle@gmail.com', investments: 4, dateRegistered: 'Jan 05, 2025' },
    { id: 7, regNo: '56789', name: 'Peter Cass', email: 'Peter@gmail.com', investments: 25, dateRegistered: 'Jan 05, 2025' },
    { id: 8, regNo: '78901', name: 'Piper Mills', email: 'Mills@gmail.com', investments: 2, dateRegistered: 'Jan 05, 2025' },
];

const UserTable = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedUsers, setSelectedUsers] = useState([]);
    // State for action modal
    const [actionModalOpen, setActionModalOpen] = useState(null);
    // Add state to track if confirmation/reason modals should be shown directly
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [actionType, setActionType] = useState(null);
    // State for bulk action modal
    const [showBulkActionModal, setShowBulkActionModal] = useState(false);
    // State for user details modal
    const [showUserDetailsModal, setShowUserDetailsModal] = useState(false);
    const [selectedUserDetails, setSelectedUserDetails] = useState(null);

    const usersPerPage = 8;
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = usersData.slice(indexOfFirstUser, indexOfLastUser);

    const totalPages = Math.ceil(usersData.length / usersPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const toggleSelectAll = () => {
        if (selectedUsers.length === currentUsers.length) {
            setSelectedUsers([]);
        } else {
            setSelectedUsers(currentUsers.map(user => user.id));
        }
    };

    const toggleSelectUser = (userId) => {
        if (selectedUsers.includes(userId)) {
            setSelectedUsers(selectedUsers.filter(id => id !== userId));
        } else {
            setSelectedUsers([...selectedUsers, userId]);
        }
    };

    // Action modal handlers
    const handleActionClick = (userId) => {
        // Close if already open, open if closed
        setActionModalOpen(actionModalOpen === userId ? null : userId);
    };

    const handleAction = (action, reason) => {
        const userId = actionModalOpen;
        console.log(`Performing action: ${action} on user: ${userId}, reason: ${reason}`);

        // Ensure all modals are properly handled
        if (action === 'reactivate' || action === 'suspend') {
            // Store the action type to be used in ConfirmationModal
            setActionType(action);
            // Show confirmation modal
            setShowConfirmation(true);
        } else {
            // For view details or other actions
            console.log(`Performing direct action: ${action} on user: ${userId}`);
        }

        // Here you would implement the actual functionality based on the action
        // For example, call an API to suspend/reactivate the user

        // Close the action modal but not necessarily other modals
        setActionModalOpen(null);
    };

    // Handler for when the confirmation is complete
    const handleConfirmComplete = (confirmed, reason) => {
        console.log(`Confirmation complete: ${confirmed}, reason: ${reason}`);
        setShowConfirmation(false);

        if (confirmed && reason) {
            // Perform the actual action with the reason
            console.log(`Performing ${actionType} action with reason: ${reason}`);
            // Call API here
        }
    };

    // Bulk action handlers
    const handleBulkActionClick = () => {
        setShowBulkActionModal(true);
    };

    const handleBulkAction = (action) => {
        console.log(`Performing bulk action: ${action} on users:`, selectedUsers);
        // Here you would implement the actual bulk action
        // For example, call an API to handle bulk operations

        // Close the modal
        setShowBulkActionModal(false);

        // Optionally, clear the selection after action
        // setSelectedUsers([]);
    };

    // User details modal handlers
    const handleViewUserDetails = (user) => {
        setSelectedUserDetails(user);
        setShowUserDetailsModal(true);
    };

    const handleCloseUserDetails = () => {
        setShowUserDetailsModal(false);
        setSelectedUserDetails(null);
    };

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left">
                            <input
                                type="checkbox"
                                className="h-4 w-4 text-green-600 border-gray-300 rounded"
                                checked={selectedUsers.length === currentUsers.length && currentUsers.length > 0}
                                onChange={toggleSelectAll}
                            />
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Reg No
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            User Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            User Email
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            # Of Inv
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Date Registered
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Document
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                            <span className="sr-only">Actions</span>
                        </th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {currentUsers.map((user) => (
                        <tr key={user.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <input
                                    type="checkbox"
                                    className="h-4 w-4 text-green-600 border-gray-300 rounded"
                                    checked={selectedUsers.includes(user.id)}
                                    onChange={() => toggleSelectUser(user.id)}
                                />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {user.regNo}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {user.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {user.email}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {user.investments}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {user.dateRegistered}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <button
                                    onClick={() => handleViewUserDetails(user)}
                                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-md"
                                >
                                    View
                                </button>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium relative">
                                <button
                                    className="text-gray-400 hover:text-gray-500"
                                    onClick={() => handleActionClick(user.id)}
                                >
                                    <FiMoreVertical className="h-5 w-5" />
                                </button>

                                {actionModalOpen === user.id && (
                                    <ActionModal
                                        isOpen={true}
                                        onClose={() => setActionModalOpen(null)}
                                        onAction={handleAction}
                                        userStatus="active" // You can pass the actual user status here
                                    />
                                )}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {/* Confirmation Modal - Rendered at the root level */}
            {showConfirmation && (
                <ConfirmationModal
                    isOpen={showConfirmation}
                    onClose={() => setShowConfirmation(false)}
                    onConfirmResult={handleConfirmComplete}
                    title={actionType === 'reactivate'
                        ? "Are you sure you want to reactivate the selected account?"
                        : "Are you sure you want to suspend the selected account?"}
                    actionText={actionType === 'reactivate'
                        ? "Yes, Reactivate User"
                        : "Yes, Suspend User"}
                    actionType={actionType}
                />
            )}

            {/* User Details Modal */}
            <UserDetailsModal
                isOpen={showUserDetailsModal}
                onClose={handleCloseUserDetails}
                user={selectedUserDetails}
            />

            <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                <div className="flex-1 flex justify-between sm:hidden">
                    <button
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
                    >
                        Previous
                    </button>
                    <button
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm text-gray-700">
                            Showing page <span className="font-medium">{currentPage}</span> of{' '}
                            <span className="font-medium">{totalPages}</span>
                        </p>
                    </div>
                    <div>
                        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                            <button
                                onClick={() => paginate(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                            >
                                <span className="sr-only">Previous</span>
                                <FiChevronLeft className="h-5 w-5" />
                            </button>

                            {/* Pagination buttons */}
                            {[1, 2, 3].map(num => (
                                <button
                                    key={num}
                                    onClick={() => paginate(num)}
                                    className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium ${
                                        currentPage === num ? 'bg-green-500 text-white' : 'text-gray-700 hover:bg-gray-50'
                                    }`}
                                >
                                    {num}
                                </button>
                            ))}

                            <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                                ...
                            </span>

                            {[8, 9, 10].map(num => (
                                <button
                                    key={num}
                                    onClick={() => paginate(num)}
                                    className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium ${
                                        currentPage === num ? 'bg-green-500 text-white' : 'text-gray-700 hover:bg-gray-50'
                                    }`}
                                >
                                    {num}
                                </button>
                            ))}

                            <button
                                onClick={() => paginate(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                            >
                                <span className="sr-only">Next</span>
                                <FiChevronRight className="h-5 w-5" />
                            </button>
                        </nav>
                    </div>
                </div>

                <div className="mt-4 sm:mt-0 relative">
                    <button
                        type="button"
                        onClick={handleBulkActionClick}
                        className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                        <svg className="-ml-1 mr-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        Bulk Action
                    </button>

                    {/* Bulk Action Modal - Positioned relative to the button */}
                    {showBulkActionModal && (
                        <BulkActionModal
                            isOpen={showBulkActionModal}
                            onClose={() => setShowBulkActionModal(false)}
                            onAction={handleBulkAction}
                            selectedCount={selectedUsers.length}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserTable;