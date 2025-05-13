import Sidebar from '../../common/Sidebar';
import Header from '../../common/Header';
import DownloadLogBtn from '@/app/components/audit/DownloadLogBtn';
import LogHistory from '@/app/components/audit/LogHistory';

type SearchParam=
{
  searchParams:Promise<{currentPage:string}>
}

const Audit = async ({searchParams}:SearchParam) => {

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
                    title="Audit Log"
                    subtitle="Track and review system activities in real time."
                />
                {/* ------ */}

                {/* Audit Management content */}
                <div className="px-6">

                    {/* audit summary */}
                    <div className="flex justify-between items-center">
                      <div className='text-xl  text-[#1E1E1ECC] font-medium my-5 dm-sans-500'>Activity Summary</div>
                      <DownloadLogBtn/>
                    </div>

                    <div className='flex mt-10 border-b border-dotted border-blue-500'>
                      <div className='w-full md:w-3/12 border-r border-[#0000001A] mb-5'>
                        <h3 className='text-xs font-semibold text-[#00000080] manrope-500 tracking-[1.2px]'>Total Admin<br/> Actions Logged</h3>
                        <h1 className='text-xl text-[#1E1E1ECC] font-medium mt-[6px] dm-sans-500'>370</h1>
                      </div>
                      <div className='w-full md:w-3/12 border-r border-[#0000001A] pl-6 mb-5'>
                        <h3 className='text-xs font-semibold text-[#00000080] manrope-500 tracking-[1.2px]'>Actions in the<br/> Last 24 Hours</h3>
                        <h1 className='text-xl text-[#1E1E1ECC] font-medium mt-[6px] dm-sans-500'>30</h1>
                      </div>
                      <div className='w-full md:w-3/12 border-r border-[#0000001A] pl-6 mb-5'>
                        <h3 className='text-xs font-semibold text-[#00000080] manrope-500 tracking-[1.2px]'>Most Frequent<br/> Action Type</h3>
                        <h1 className='text-xl text-[#1E1E1ECC] font-medium mt-[6px] dm-sans-500'>7</h1>
                      </div>
                    </div>
                    {/* --------------------- */}

                    {/*Audit Log history*/}
                    <LogHistory currentPage={currentPage}/>
                    {/* ------------------ */}
                </div>
                {/* ----------------------- */}
            </div>
            {/* ----------------- */}
        </div>
    );
};

export default Audit;