"use client"
import { useState } from 'react';
import ExportBtn from '@/app/components/ExportBtn';
import SearchForm from '@/app/components/SearchForm';
import SecurityTable from './SecurityTable';
import KycTable from './KycTable';
import FlaggesTable from './FlaggedTable';
import { useRouter } from 'next/navigation';

export default function SecurityTables({currentPage}:{currentPage:number}) {
  const [activeTab,setActiveTab] = useState('security')
  const router = useRouter()

  return (
    <div>
        {/* Tabs------- */}
        <div className="flex mt-6">
            <button onClick={()=> {
             router.push('/admindashboard/security/?currentPage=1')
             setActiveTab('security')}}  className={`${activeTab === 'security' && 'bg-[#FCFCFC] text-[#1E1E1E] border-b-2 border-b-[#6B911B]'} border text-[#1E1E1EA8] rounded-tr-lg rounded-tl-lg w-full max-w-[200px]  py-2 dm-sans-500 border-gray-300`}>
                Security Alerts
            </button>

            <button onClick={()=> {
             router.push('/admindashboard/security/?currentPage=1')
             setActiveTab('kyc')}}  className={`${activeTab === 'kyc' && 'bg-[#FCFCFC] border-b-2 text-[#1E1E1E] border-b-[#6B911B]'} border text-[#1E1E1EA8] rounded-tr-lg rounded-tl-lg w-full max-w-[200px]  py-2 dm-sans-500 border-gray-300`}>
                Compliance & KYC
            </button>

            <button onClick={()=> {
             router.push('/admindashboard/security/?currentPage=1')
             setActiveTab('flagged')}}  className={`${activeTab === 'flagged' && 'bg-[#FCFCFC] border-b-2 text-[#1E1E1E] border-b-[#6B911B]'} border text-[#1E1E1EA8] rounded-tr-lg rounded-tl-lg w-full max-w-[200px]  py-2 dm-sans-500 border-gray-300`}>
                Flagged Transactions
            </button>
        </div>
        {/* ----------- */}

        {/*Table & Search form*/}
        <div className="mt-6">
            <div className="flex justify-between">
                <div className="dm-sans-500 text-[#1E1E1ECC] text-xl">
                    {activeTab === 'security' && 'All Security Alert'}
                    {activeTab === 'kyc' && 'All Compliance & KYC Verification'}
                    {activeTab === 'flagged' && 'All Flagged Transactions'}
                </div>

                <div className="flex max-w-[600px] items-center gap-2 w-full">
                    {/* search form */}
                    <SearchForm/>
                    {/* ----------- */}
                    {/* Export btn */}
                    <ExportBtn/>
                    {/* ---------- */}
                </div>
            </div>

            {/* Tables------------- */}
            {activeTab === 'security' && <SecurityTable currentPage={currentPage} />}
            {activeTab === 'kyc' && <KycTable currentPage={currentPage}/>}
            {activeTab === 'flagged' && <FlaggesTable currentPage={currentPage}/>}
            {/* ------------------ */}
        </div>
        {/* ------------------ */}
    </div>
  )
}
