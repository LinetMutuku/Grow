'use client';
import React, { useState, useEffect } from 'react';
import Sidebar from '../../common/Sidebar';
import Header from '../../common/Header';
import ProfileTab from '@/app/components/settings/ProfileTab';
import NotificationTab from '@/app/components/settings/NotificationTab';
import BillingTab from '@/app/components/settings/BillingTab';

const Settings =   () => {

    const [loading, setLoading] = useState(true);
    const [activeTab,setActiveTab]= useState('profile')

    useEffect(() => {
        // Simulate data loadinga
        setTimeout(() => {
            setLoading(false);
        }, 800); // Adjust loading time as needed
    }, [])


    // Blue wave loading spinner
    if (loading) {
        return (
            <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-50">
                {/* Simple line spinner */}
                <div className="w-12 flex justify-between">
                    <div className="w-1 h-5 bg-blue-600 animate-[wave_1s_ease-in-out_infinite]" style={{ animationDelay: '0s' }}></div>
                    <div className="w-1 h-5 bg-blue-600 animate-[wave_1s_ease-in-out_infinite]" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-1 h-5 bg-blue-600 animate-[wave_1s_ease-in-out_infinite]" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-1 h-5 bg-blue-600 animate-[wave_1s_ease-in-out_infinite]" style={{ animationDelay: '0.3s' }}></div>
                    <div className="w-1 h-5 bg-blue-600 animate-[wave_1s_ease-in-out_infinite]" style={{ animationDelay: '0.4s' }}></div>
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
        <div className="flex h-screen bg-white text-black">
            {/* Animated Sidebar */}
             <Sidebar />
            {/* ---------------- */}

            {/* Main content area */}
            <div className="flex-1 overflow-auto w-full transition-all duration-300 ease-in-out ml-20 md:ml-64">

                {/* Header */}
                <Header
                    title="Settings"
                    subtitle="Your account settings, all in one place."
                />
                {/* ------ */}

                {/* Settings Management content */}
                <div className="px-6">
                 <div className='text-xl  text-[#1E1E1ECC] font-medium my-5 dm-sans-500'>Account Settings</div>
                   <div className="mt-5 flex gap-7">
                     <div className="w-3/12">
                     <div onClick={()=>setActiveTab('profile')} className={`${activeTab === 'profile' && 'bg-gray-50 border-l-3 border-[#6B911B]'} mb-3 px-4 py-3 dm-sans-400 text-[#141414]`}>Manage Profile</div>
                     <div onClick={()=>setActiveTab('notification')} className={`${activeTab === 'notification' && 'bg-gray-50 border-l-3 border-[#6B911B]'} mb-3 px-4 py-3 dm-sans-400 text-[#141414]`}>Notitfication Preference</div>
                     <div onClick={()=>setActiveTab('billing')} className={`${activeTab === 'billing' && 'bg-gray-50 border-l-3 border-[#6B911B]'} mb-3 px-4 py-3 dm-sans-400 text-[#141414]`}>Billing Information</div>
                     </div>
                     <div className="w-9/12 px-4 border border-gray-200 rounded">
                      {activeTab === 'profile' && <ProfileTab/>}
                      {activeTab === 'notification' && <NotificationTab/> }
                      {activeTab === 'billing' && <BillingTab/> }
                     </div>
                   </div>
                 </div>
                {/* ----------------------- */}
            </div>
            {/* ----------------- */}
        </div>
    );
};

export default Settings;