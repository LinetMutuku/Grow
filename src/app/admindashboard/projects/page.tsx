'use client';

import React, { useState, useEffect } from 'react';
import Sidebar from '../../common/Sidebar';
import Header from '../../common/Header';
import ProjectOverview from '../../components/projects/ProjectOverview';
import ProjectTable from '../../components/projects/ProjectTable';

const ProjectManagementPage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate data loading
        setTimeout(() => {
            setLoading(false);
        }, 1200); // Adjust loading time as needed
    }, []);

    // Wave loading spinner (same as User Management)
    if (loading) {
        return (
            <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-50">
                {/* Simple line spinner */}
                <div className="w-12 flex justify-between">
                    <div className="w-1 h-5 bg-indigo-600 animate-[wave_1s_ease-in-out_infinite]" style={{ animationDelay: '0s' }}></div>
                    <div className="w-1 h-5 bg-indigo-600 animate-[wave_1s_ease-in-out_infinite]" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-1 h-5 bg-indigo-600 animate-[wave_1s_ease-in-out_infinite]" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-1 h-5 bg-indigo-600 animate-[wave_1s_ease-in-out_infinite]" style={{ animationDelay: '0.3s' }}></div>
                    <div className="w-1 h-5 bg-indigo-600 animate-[wave_1s_ease-in-out_infinite]" style={{ animationDelay: '0.4s' }}></div>
                </div>
                <p className="text-gray-600 text-sm mt-4">Loading</p>
                <style jsx>{`
                    @keyframes wave {
                        0%, 100% { transform: scaleY(1); }
                        50% { transform: scaleY(2); }
                    }
                `}</style>
            </div>
        );
    }

    return (
        <div className="flex h-screen bg-gray-50 text-black">
            {/* Animated Sidebar */}
            <Sidebar />

            {/* Main content area */}
            <div
                className="flex-1 overflow-auto w-full transition-all duration-300 ease-in-out ml-20 md:ml-64"
            >
                {/* Header */}
                <Header
                    title="Project Management"
                    subtitle="Track, manage, and oversee all investment projects with ease."
                />

                {/* Project Management content */}
                <div className="p-6">
                    {/* Project Overview */}
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-medium">Project Overview</h2>
                        <button className="px-4 py-2 bg-green-600 text-white rounded-md flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                            </svg>
                            Add Project
                        </button>
                    </div>

                    <ProjectOverview />

                    {/* Project Table */}
                    <div className="bg-white rounded-md shadow-sm mt-6">
                        <ProjectTable />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectManagementPage;