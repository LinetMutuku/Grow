
import Sidebar from '../../common/Sidebar';
import Header from '../../common/Header';
import SecurityTables from '@/app/components/security/SecurityTables';

type SearchParam=
{
  searchParams:Promise<{currentPage:string}>
}

const Security = async ({searchParams}:SearchParam) => {
    const stringQuery = (await searchParams).currentPage
    const currentPage = Number(stringQuery)
    return (
        <div className="flex h-screen bg-white text-black">
            {/* Animated Sidebar */}
             <Sidebar />
            {/* ---------------- */}
                       
            {/* Main content area */}
            <div className="flex-1 overflow-auto w-full transition-all duration-300 ease-in-out ml-20 md:ml-64">

                {/* Header */}
                <Header
                    title="Security & Compliance"
                    subtitle="Monitor security alerts, enforce compliance, and track suspicious activities."/>
                {/* ------ */}

                {/* Security Management content */}
                <div className="px-6">
                  
                    {/* Key performance insite*/}
                    <div className='text-xl  text-[#1E1E1ECC] font-medium my-5 dm-sans-500'>Security Insights</div>

                    <div className='flex mt-10 border-b border-dotted border-blue-500'>
                      <div className='w-full md:w-3/12 border-r border-[#0000001A] mb-6'>
                        <h3 className='text-xs font-semibold text-[#00000080] manrope-500 tracking-[1.2px]'>ACTIVE SECURITY ALERTS</h3>
                        <h1 className='text-xl text-[#1E1E1ECC] font-medium mt-[6px] dm-sans-500'>₦20</h1>
                      </div>
                      <div className='w-full md:w-3/12 border-r border-[#0000001A] pl-6 mb-6'>
                        <h3 className='text-xs font-semibold text-[#00000080] manrope-500 tracking-[1.2px]'>FLAGGED TRANSACTIONS</h3>
                        <h1 className='text-xl text-[#1E1E1ECC] font-medium mt-[6px] dm-sans-500'>8</h1>
                      </div>
                      <div className='w-full md:w-3/12 border-r border-[#0000001A] pl-6 manrope-500 mb-6'>
                        <h3 className='text-xs font-semibold text-[#00000080] tracking-[1.2px]'>PENDING VERIFICATION</h3>
                        <h1 className='text-xl text-[#1E1E1ECC] font-medium mt-[6px] dm-sans-500'>20</h1>
                      </div>
                      <div className='w-full md:w-3/12 border-[#0000001A] pl-6 manrope-500 mb-6'>
                        <h3 className='text-xs font-semibold text-[#00000080] tracking-[1.2px]'>COMPLIANCE CHECKS</h3>
                        <h1 className='text-xl text-[#1E1E1ECC] font-medium mt-[6px] dm-sans-500'>95%</h1>
                      </div>
                    </div>
                    {/* --------------------- */}

                    {/* Security tables */}
                    <SecurityTables currentPage={currentPage}/>
                    {/* --------------- */}

                </div>
                {/* ----------------------- */}
            </div>
            {/* ----------------- */}
        </div>
    );
};

export default Security;