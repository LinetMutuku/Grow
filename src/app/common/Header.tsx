'use client';

import React, { useState } from 'react';
import { FiBell } from 'react-icons/fi';

interface HeaderProps {
    title: string;
    subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
    const [showNotifications, setShowNotifications] = useState(false);


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
                </div>
            </div>
        </header>
    );
};

export default Header;