'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    FiHome,
    FiUsers,
    FiFolder,
    FiDollarSign,
    FiFileText,
    FiShield,
    FiList,
    FiSettings,
    FiChevronDown,
    FiMenu,
    FiChevronLeft,
    FiChevronRight
} from 'react-icons/fi';

const menuItems = [
    { name: 'Dashboard', icon: FiHome, path: '/' },
    { name: 'User Management', icon: FiUsers, path: '/admindashboard/users' },
    { name: 'Projects', icon: FiFolder, path: '/admindashboard/projects' },
    { name: 'Investments', icon: FiDollarSign, path: '/admindashboard/investments' },
    { name: 'Reports', icon: FiFileText, path: '/admindashboard/reports' },
    { name: 'Security', icon: FiShield, path: '/admindashboard/security' },
    { name: 'Audit Log', icon: FiList, path: '/admindashboard/audit' },
];

interface AnimatedSidebarProps {
    companyName?: string;
}

const AnimatedSidebar: React.FC<AnimatedSidebarProps> = ({ companyName = "GROW" }) => {
    const pathname = usePathname();
    const [collapsed, setCollapsed] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <>
            {/* Mobile Menu Button */}
            {isMobileView && (
                <button
                    onClick={toggleMobileMenu}
                    className="fixed top-4 left-4 z-30 p-2 rounded-md bg-green-500 text-white shadow-lg"
                    aria-label="Toggle mobile menu"
                >
                    <FiMenu size={24} />
                </button>
            )}

            {/* Overlay for mobile */}
            {isMobileView && mobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-20"
                    onClick={toggleMobileMenu}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 h-screen bg-white border-r border-gray-200 shadow-lg z-20
          transition-all duration-300 ease-in-out
          ${isMobileView
                    ? mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    : collapsed ? 'w-20' : 'w-64'
                }`}
            >
                {/* Logo Header */}
                <div className="h-20 flex items-center justify-between px-4 border-b border-gray-200">
                    {!collapsed && (
                        <h1 className="text-xl font-bold text-green-500 transition-opacity duration-300">
                            {companyName}
                        </h1>
                    )}
                    {collapsed && !isMobileView && (
                        <div className="mx-auto">
                            <span className="text-2xl font-bold text-green-500">{companyName.charAt(0)}</span>
                        </div>
                    )}
                    {!isMobileView && (
                        <button
                            onClick={toggleSidebar}
                            className={`p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-transform duration-300 ${collapsed ? 'rotate-180 ml-auto' : ''}`}
                        >
                            <FiChevronLeft size={18} />
                        </button>
                    )}
                    {isMobileView && (
                        <button
                            onClick={toggleMobileMenu}
                            className="p-2 rounded-full hover:bg-gray-100 text-gray-500"
                        >
                            <FiChevronLeft size={18} />
                        </button>
                    )}
                </div>

                {/* Menu Items */}
                <div className="p-3 overflow-y-auto h-[calc(100vh-80px-80px)]">
                    <p className={`text-xs text-gray-500 mb-3 px-3 ${collapsed ? 'text-center' : ''}`}>
                        {!collapsed ? 'Menu' : '•••'}
                    </p>
                    <nav className="space-y-2">
                        {menuItems.map((item) => {
                            const isActive = (item.path === '/' && pathname === '/') ||
                                (item.path !== '/' && pathname === item.path) ||
                                (item.path !== '/' && pathname?.startsWith(item.path));

                            return (
                                <Link
                                    href={item.path}
                                    key={item.name}
                                    className={`
                    flex items-center px-3 py-3 rounded-md transition-all duration-200
                    ${isActive
                                        ? 'bg-green-50 text-green-600 border-l-4 border-green-500'
                                        : 'text-gray-700 hover:bg-gray-100 hover:translate-x-1'
                                    }
                  `}
                                >
                                    <item.icon className={`${collapsed ? 'mx-auto' : 'mr-3'}`} size={20} />
                                    {!collapsed && <span className="text-sm truncate">{item.name}</span>}

                                    {/* Tooltip for collapsed state */}
                                    {collapsed && (
                                        <div className="absolute left-full ml-6 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50 whitespace-nowrap">
                                            {item.name}
                                        </div>
                                    )}
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                {/* Settings */}
                <div className="px-3 py-2 border-t border-gray-100">
                    <Link
                        href="/admindashboard/settings"
                        className={`
              flex items-center px-3 py-3 rounded-md transition-all duration-200
              ${pathname === '/admindashboard/settings'
                            ? 'bg-green-50 text-green-600 border-l-4 border-green-500'
                            : 'text-gray-700 hover:bg-gray-100 hover:translate-x-1'
                        }
            `}
                    >
                        <FiSettings className={`${collapsed ? 'mx-auto' : 'mr-3'}`} size={20} />
                        {!collapsed && <span className="text-sm">Settings</span>}
                    </Link>
                </div>

                {/* User Profile */}
                <div className="absolute bottom-0 left-0 right-0 p-3 border-t border-gray-200 bg-gray-50">
                    <div className="relative">
                        <button
                            className={`w-full flex items-center space-x-3 p-2 rounded-md cursor-pointer hover:bg-gray-100 transition-all ${showUserMenu ? 'bg-gray-100' : ''}`}
                            onClick={() => setShowUserMenu(!showUserMenu)}
                        >
                            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center relative overflow-hidden">
                                <img
                                    src="/aisha.jpg"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>';
                                    }}
                                />
                                <div className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full border border-white"></div>
                            </div>

                            {!collapsed && (
                                <>
                                    <div className="flex-1 text-left">
                                        <p className="text-sm font-medium">Aisha Danjuma</p>
                                        <p className="text-xs text-gray-500 truncate max-w-[120px]">aisha_admin@cosmos.com</p>
                                    </div>
                                    <FiChevronDown
                                        className={`transition-transform duration-200 ${showUserMenu ? 'rotate-180' : ''}`}
                                        size={16}
                                    />
                                </>
                            )}
                        </button>

                        {showUserMenu && (
                            <div className={`absolute bottom-full ${collapsed ? 'left-0' : 'left-1/2 -translate-x-1/2'} mb-2 w-48 bg-white rounded-md shadow-lg py-1 border border-gray-200 transform transition-all duration-200 ease-out`}>
                                <Link href="/profile" className="flex items-center px-4 py-2 text-sm hover:bg-gray-100">
                                    <span className="h-6 w-6 mr-2 rounded-full bg-gray-100 flex items-center justify-center">
                                        <FiUsers size={12} />
                                    </span>
                                    Profile
                                </Link>
                                <Link href="/settings" className="flex items-center px-4 py-2 text-sm hover:bg-gray-100">
                                    <span className="h-6 w-6 mr-2 rounded-full bg-gray-100 flex items-center justify-center">
                                        <FiSettings size={12} />
                                    </span>
                                    Settings
                                </Link>
                                <div className="my-1 border-t border-gray-100"></div>
                                <Link href="/logout" className="flex items-center px-4 py-2 text-sm text-red-500 hover:bg-red-50">
                                    <span className="h-6 w-6 mr-2 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                            <polyline points="16 17 21 12 16 7"></polyline>
                                            <line x1="21" y1="12" x2="9" y2="12"></line>
                                        </svg>
                                    </span>
                                    Logout
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </aside>

            {/* Expand button for collapsed state */}
            {collapsed && !isMobileView && (
                <button
                    onClick={toggleSidebar}
                    className="fixed bottom-8 left-16 z-30 p-2 rounded-full bg-green-500 text-white shadow-lg opacity-0 hover:opacity-100 focus:opacity-100 transition-opacity"
                    aria-label="Expand sidebar"
                >
                    <FiChevronRight size={16} />
                </button>
            )}
        </>
    );
};

export default AnimatedSidebar;