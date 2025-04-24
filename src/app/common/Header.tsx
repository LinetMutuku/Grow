'use client';

import React, { useState } from 'react';
import { FiBell, FiShare2, FiChevronDown } from 'react-icons/fi';

interface HeaderProps {
    title: string;
    subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
    const [showNotifications, setShowNotifications] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [showProfile, setShowProfile] = useState(false);

    return (
        <header className="bg-white px-6 py-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-xl manrope-600">{title}</h1>
                    {subtitle && <p className="text-sm dm-sans-400 text-gray-500">{subtitle}</p>}
                </div>

                <div className="flex space-x-4 items-center">
                    {/* Notifications */}
                    <div className="relative">
                        <button
                            className="p-2 rounded-full border border-gray-100 hover:bg-gray-100"
                            onClick={() => setShowNotifications(!showNotifications)}
                        >
                            <FiBell className="w-5 h-5" />
                        </button>

                        {showNotifications && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                                <div className="px-4 py-2 text-sm">New notifications</div>
                            </div>
                        )}
                    </div>

                    {/* Progress */}
                    {/* <div className="relative">
                        <button
                            className="flex items-center space-x-1 px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50"
                            onClick={() => setShowDetails(!showDetails)}
                        >
                            <span>58%</span>
                            <FiChevronDown className="w-4 h-4" />
                        </button>

                        {showDetails && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                                <div className="px-4 py-2 text-sm">View details</div>
                            </div>
                        )}
                    </div> */}

                    {/* Share Button */}
                    {/* <button className="flex items-center space-x-1 px-3 py-1 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600">
                        <FiShare2 className="w-4 h-4" />
                        <span>Share</span>
                    </button> */}

                    {/* Profile */}
                    {/* <div className="relative">
                        <button
                            className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center"
                            onClick={() => setShowProfile(!showProfile)}
                        >
                            U
                        </button>

                        {showProfile && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                                <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">Profile</button>
                                <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">Settings</button>
                                <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">Logout</button>
                            </div>
                        )}
                    </div> */}
                </div>
            </div>
        </header>
    );
};

export default Header;