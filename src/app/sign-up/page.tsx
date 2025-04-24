"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SignUpSelection() {
    const router = useRouter();
    const [selectedRole, setSelectedRole] = useState<'admin' | 'investor' | null>(null);

    const handleContinue = (e: React.FormEvent) => {
        e.preventDefault();
        if (selectedRole === 'admin') {
            router.push('/admin-signup');
        } else if (selectedRole === 'investor') {
            router.push('/investor-signup');
        } else {
            // Show error or indication that role selection is required
            alert("Please select a role to continue");
        }
    };

    return (
        <div className="flex min-h-screen bg-white">
            {/* Left Section - Image */}
            <div className="hidden md:block w-2/5 relative overflow-hidden bg-green-50">
                <div className="relative h-full w-full">
                    <Image
                        src="/assets/farmer.png"
                        alt="Farmer working in field"
                        fill
                        style={{
                            objectFit: 'cover',
                            objectPosition: 'center 30%',
                            maxWidth: '100%'
                        }}
                        priority
                    />
                </div>
            </div>

            {/* Right Section - Form */}
            <div className="w-full md:w-3/5 flex flex-col justify-center px-8 md:px-16 py-12">
                <div className="max-w-md mx-auto w-full">
                    <h1 className="text-green-700 font-semibold text-2xl mb-1 text-center">
                        Start Your Investment Journey!
                    </h1>
                    <p className="text-gray-600 mb-6 text-center">
                        Sign up on Grow as an Admin or Investor
                    </p>

                    {/* Role Selection */}
                    <div className="space-y-4 mb-6">
                        {/* Admin Option */}
                        <div
                            className={`border rounded-md p-4 cursor-pointer transition-all ${
                                selectedRole === 'admin'
                                    ? 'border-green-600 bg-green-50'
                                    : 'border-gray-300 hover:border-green-400'
                            }`}
                            onClick={() => setSelectedRole('admin')}
                        >
                            <div className="flex items-center">
                                <div
                                    className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                                        selectedRole === 'admin'
                                            ? 'bg-green-600'
                                            : 'bg-gray-200'
                                    }`}
                                >
                                    {selectedRole === 'admin' && (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    )}
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-900">Admin</h3>
                                    <p className="text-sm text-gray-500">Sign up to have access to the admin section</p>
                                </div>
                            </div>
                        </div>

                        {/* Investor Option */}
                        <div
                            className={`border rounded-md p-4 cursor-pointer transition-all ${
                                selectedRole === 'investor'
                                    ? 'border-green-600 bg-green-50'
                                    : 'border-gray-300 hover:border-green-400'
                            }`}
                            onClick={() => setSelectedRole('investor')}
                        >
                            <div className="flex items-center">
                                <div
                                    className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                                        selectedRole === 'investor'
                                            ? 'bg-green-600'
                                            : 'bg-gray-200'
                                    }`}
                                >
                                    {selectedRole === 'investor' && (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    )}
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-900">Investor</h3>
                                    <p className="text-sm text-gray-500">Unlock investment opportunities</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <form onSubmit={handleContinue}>
                        <button
                            type="submit"
                            disabled={!selectedRole}
                            className={`w-full py-2 px-4 rounded-md text-white transition-colors duration-300 ${
                                selectedRole
                                    ? 'bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2'
                                    : 'bg-gray-400 cursor-not-allowed'
                            }`}
                        >
                            Continue
                        </button>
                    </form>

                    {/* Login Link */}
                    <div className="text-center mt-6">
                        <p className="text-gray-600">
                            Already have an account? <Link href="/login" className="text-green-700 hover:text-green-800">Login</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}