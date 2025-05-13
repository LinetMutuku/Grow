'use client';
import React, { useState, useEffect } from 'react';
import Sidebar from '../../common/Sidebar';
import Header from '../../common/Header';
import ExportBtn from '@/app/components/ExportBtn';
import SearchForm from '@/app/components/SearchForm';
import ActionBtn from '@/app/components/reports/ActionBtn';
import DonutChart from '@/app/components/reports/DonutChart';
import BarChartt from '@/app/components/reports/BarChart';


const Reports =   () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate data loadinga
        setTimeout(() => {
            setLoading(false);
        }, 800); // Adjust loading time as needed
    }, [])

    // Sample user data
   const reportData = [
    { id: 1, reportType: 'Investment Summary', generatedBY: 'April Dave', dateRange: 'Jan - Mar 2025', exportFormat:"jpeg"},
    { id: 2, reportType: 'User Growth Report', generatedBY: 'Rice Black', dateRange: 'Mar - Mar 2025', exportFormat:"png"},
    { id: 3, reportType: 'Investment Summary', generatedBY: 'Cocoa Sheen', dateRange: 'April - Mar 2025', exportFormat:"jpeg"},
    { id: 4, reportType: 'Project Funding Stats', generatedBY: 'Suilat Nton', dateRange: 'May - Mar 2025', exportFormat:"png"},
    { id: 5, reportType: 'Investment Summary', generatedBY: 'Adeolu Nelson', dateRange: 'June - Mar 2025', exportFormat:"jpeg"},
    { id: 6, reportType: 'Investment Summary', generatedBY: 'Bean Kyle', dateRange: 'Jan - Feb 2025', exportFormat:"png"},
    { id: 7, reportType: 'ROI Distribution', generatedBY: 'Peter Cass', dateRange: 'Dec - Mar 2025', exportFormat: "jpeg"},
    { id: 8, reportType: 'Investment Summary', generatedBY: 'Piper Mills', dateRange: 'Feb - Mar 2025', exportFormat:"jpeg"}
   ];

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
                    title="Reports & Analytics"
                    subtitle="Generate insights on funds, investments, and platform performance."
                />
                {/* ------ */}

                {/* Report Management content */}
                <div className="px-6">

                    {/* Key performance insite*/}
                    <div className='text-xl  text-[#1E1E1ECC] font-medium my-5 dm-sans-500'> Key Performance Insights</div>
                    <div className='flex mt-10 border-b border-dotted border-blue-500'>
                      <div className='w-full md:w-3/12 border-r border-[#0000001A] mb-5'>
                        <h3 className='text-xs font-semibold text-[#00000080] manrope-500 tracking-[1.2px]'>TOTAL FUNDS RAISED</h3>
                        <h1 className='text-xl text-[#1E1E1ECC] font-medium mt-[6px] dm-sans-500'>₦250,000,000</h1>
                      </div>
                      <div className='w-full md:w-3/12 border-r border-[#0000001A] pl-6 mb-5'>
                        <h3 className='text-xs font-semibold text-[#00000080] manrope-500 tracking-[1.2px]'>AVG. INVESTMENT  PER PROJECT</h3>
                        <h1 className='text-xl text-[#1E1E1ECC] font-medium mt-[6px] dm-sans-500'>₦1,500,000</h1>
                      </div>
                      <div className='w-full md:w-3/12 border-r border-[#0000001A] pl-6 mb-5'>
                        <h3 className='text-xs font-semibold text-[#00000080] manrope-500 tracking-[1.2px]'>USER GROWTH RATE</h3>
                        <h1 className='text-xl text-[#1E1E1ECC] font-medium mt-[6px] dm-sans-500'>+15%</h1>
                      </div>
                      <div className='w-full md:w-3/12 border-[#0000001A] pl-6  mb-5'>
                        <h3 className='text-xs font-semibold text-[#00000080] manrope-500 tracking-[1.2px]'>PROJECT SUCCESS RATE</h3>
                        <h1 className='text-xl text-[#1E1E1ECC] font-medium mt-[6px] dm-sans-500'>95%</h1>
                      </div>
                    </div>
                    {/* --------------------- */}

                    {/* charts----------- */}
                    <div className="flex gap-3 flex-wrap md:flex-nowrap mt-8">
                    <div className="w-full md:w-7/12 border border-gray-200 rounded-md px-3 h-[330px] md:h-[340px] py-4">
                       <BarChartt/>
                     </div>
                     <div className="w-full md:w-5/12 border border-gray-200 rounded-md px-3 h-[340px] py-4">
                       <DonutChart/>
                     </div> 
                    </div>
                     
                    {/* ----------------- */}

                    {/* Report breakdown */}
                    <div className="mt-10 ">
                        <div className="flex justify-between">
                            <div className="dm-sans-500 text-[#1E1E1ECC] text-xl">Reports Breakdown</div>

                            <div className="flex max-w-[600px] items-center gap-2 w-full">
                             {/* search form */}
                              <SearchForm/>
                              {/* ----------- */}
                             {/* Export btn */}
                              <ExportBtn/>
                             {/* ---------- */}
                            </div>
                        </div>

                        {/* Table------------- */}
                        <div className="mt-6 mb-4 overflow-x-auto">
                         <table className='w-[100%] max-w-[1100px]'>
                            <thead className='bg-gray-50 dm-sans-500 text-[#4F5144] text-left'>
                              <th className='font-normal text-sm py-[10px] pl-6'>Report Type</th>
                              <th className='font-normal text-sm py-[10px] pl-6'>Date Range</th>
                              <th className='font-normal text-sm py-[10px] pl-6'>Generated By</th>
                              <th className='font-normal text-sm py-[10px] pl-6'>Export format</th>
                              <th className='font-normal text-sm py-[10px] pl-6'> </th>
                            </thead>
                            <tbody className='text-[#4F5144]'>
                                {reportData.map((item)=>(
                                <tr key={item.id} className="hover:bg-gray-50 border-b border-gray-200">
                                  <td className='dm-sans-400 text-sm py-4 pl-6'>{item.reportType}</td>
                                  <td className='dm-sans-400 text-sm py-4 pl-6'>{item.dateRange}</td>
                                  <td className='dm-sans-400 text-sm py-4 pl-6'>{item.generatedBY}</td>
                                  <td className='dm-sans-400 text-sm py-4 pl-6'>{item.exportFormat}</td>
                                  <td className='dm-sans-400 text-sm py-4 pl-6'><ActionBtn/></td>
                                </tr> 
                                ))}
                            </tbody>
                         </table>
                        </div>
                        {/* ------------------ */}
                    </div>
                    {/* ------------------ */}
                </div>
                {/* ----------------------- */}
            </div>
            {/* ----------------- */}
        </div>
    );
};

export default Reports;