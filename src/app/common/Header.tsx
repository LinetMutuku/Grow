'use client';

import React, { useState, useEffect } from 'react';
import { FiBell } from 'react-icons/fi';

interface HeaderProps {
    title: string;
    subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
    const [showNotifications, setShowNotifications] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Close notifications when clicking outside
    useEffect(() => {
        if (showNotifications) {
            const handleClickOutside = (event: MouseEvent) => {
                const target = event.target as HTMLElement;
                const notificationButton = document.querySelector('.notification-button');
                const notificationMenu = document.querySelector('.notification-menu');

                if (notificationButton &&
                    notificationMenu &&
                    !notificationButton.contains(target) &&
                    !notificationMenu.contains(target)) {
                    setShowNotifications(false);
                }
            };

            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }
    }, [showNotifications]);

    return (
        <header className={`bg-white px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200 ${isMobileView ? 'mt-12' : ''}`}>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div className="mb-2 sm:mb-0">
                    <h1 className="text-lg sm:text-xl manrope-600">{title}</h1>
                    {subtitle && <p className="text-xs sm:text-sm dm-sans-400 text-gray-500">{subtitle}</p>}
                </div>

                <div className="flex space-x-4 items-center self-end sm:self-auto">
                    {/* Notifications */}
                    <div className="relative">
                        <button
                            className="notification-button p-2 rounded-full border border-gray-100 hover:bg-gray-100"
                            onClick={() => setShowNotifications(!showNotifications)}
                        >
                            <FiBell className="w-5 h-5" />
                        </button>

                        {showNotifications && (
                            <div className="notification-menu absolute right-0 mt-2 w-48 sm:w-64 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                                <div className="px-4 py-3 border-b border-gray-100">
                                    <h3 className="text-sm font-medium">Notifications</h3>
                                </div>
                                <div className="px-4 py-2 text-sm text-gray-500">No new notifications</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;