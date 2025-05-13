"use client"
import {useState} from 'react'
import { RiArrowUpDoubleFill } from "react-icons/ri";
import { IoMdFunnel } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { PiNavigationArrowFill } from "react-icons/pi";
import { CiCalendar } from "react-icons/ci";
import Form from 'next/form'
import { BiSearch } from 'react-icons/bi';
import AuditTable from '@/app/components/audit/AuditTable';

export default function LogHistory({currentPage}:{currentPage:number}) {

  const [searchTab,setSearchTab] = useState(false)

  return (
    <div className="mt-10 ">
    <div className="flex relative justify-between items-center bg-[#F8F8F8] py-5 px-6">
        <div className="dm-sans-500 text-[#1E1E1ECC] text-xl">Admin Activity Log & History</div>

        <div className="flex max-w-[350px] items-center gap-2 w-full">
         {/* search form */}
          <Form action="/" scroll={false} className='flex border items-center px-4  border-gray-300 rounded w-full'>
            <BiSearch className='mr-2 size-6 text-[#00000080]'/>
            <input name='query' className='flex-1 text-xs border-0 py-2 text-[#00000080] focus:outline-0' placeholder='Search...'/>

            {/* advance search btn */}
            <div>
             <RiArrowUpDoubleFill 
             onClick={()=>setSearchTab(!searchTab)}
             className='text-[#00000080] border-l-2 cursor-pointer border-gray-200 pl-[6px] w-7 h-5' />

             {/* advance search panel */}
             {searchTab && (
                <div className="absolute left-0 w-full min-h-[35vh] bg-white -top-[230px] shadow-md border border-gray-100 rounded px-6">
                 <div className="flex gap-3 items-center mt-5 pb-[18px] border-b border-gray-100">
                  <IoMdFunnel /> <div className="dm-san-500 text-lg">Advance search and filter</div>
                 </div>
                 
                 <div className="flex flex-wrap md:flex-nowrap justify-between gap-5 items-center mt-2">
                 <div className="w-full md:w-4/12">
                    <div className='dm-sans-500'>
                        <label htmlFor="admin name" className='mb-[8px] flex items-center gap-2 text-xs text-[#1E1E1E]'><FaUser width={10} height={14}/> Admin Name</label>
                        <div className='flex gap-2 items-center border p-2 mb-2 bg-[#CCCCCC] rounded-md border-gray-400'>
                         <input type="text" className='text-sm  text-gray-600 focus:outline-none' placeholder='Search by admin name' />
                        </div> 
                    </div>
                 </div>

                 <div className="w-full md:w-4/12">
                    <div className='dm-sans-500'>
                        <label htmlFor="action type" className='mb-[8px] flex items-center gap-2 text-xs text-[#1E1E1E]'><PiNavigationArrowFill size={15} /> Action Type</label>
                        <div className='flex gap-2 items-center border p-2 mb-2 bg-[#CCCCCC] rounded-md border-gray-400'>
                         <select name="" id="" className="flex-1 text-sm text-gray-600">
                            <option value="">Select action type</option>
                            <option value="">action 1</option>
                            <option value="">action 2</option>
                         </select>
                        </div> 
                    </div>
                 </div>

                 
                 <div className="w-full md:w-4/12">
                    <div className='dm-sans-500'>
                        <label htmlFor="searcg ny date" className='mb-[8px] flex items-center gap-2 text-xs text-[#1E1E1E]'><CiCalendar size={12} /> Search By Date</label>
                        <div className='flex gap-2 items-center border p-2 mb-2 bg-[#CCCCCC] rounded-md border-gray-400'>
                         <select name="" id="" className="flex-1 text-sm text-gray-600">
                            <option value="">Search date  <i>(range)</i></option>
                            <option value="">action 1</option>
                            <option value="">action 2</option>
                         </select>
                        </div> 
                    </div>
                 </div>

                 </div>

                 <div className="mt-5 flex items-center flex-wrap md:flex-nowrap">
                    <div className="w-full md:w-6/12">
                     <div className="flex gap-2 items-center"><CiCalendar size={12} /> <div className="text-[#475466] text-xs dm-sans-500">Date Of action</div></div>
                     <div className="flex gap-4 mt-2 mb-7">
                     <div><input type="radio" className='mr-[6px]' /> <span className='text-[#757F8D] text-xs dm-sans-400'>Today</span></div>
                     <div><input type="radio" className='mr-[6px]' /> <span className='text-[#757F8D] text-xs dm-sans-400'>7 Days Ago</span></div>
                     <div><input type="radio" className='mr-[6px]' /> <span className='text-[#757F8D] text-xs dm-sans-400'>This month</span></div>
                     <div><input type="radio" className='mr-[6px]' /> <span className='text-[#757F8D] text-xs dm-sans-400'>Custom</span></div>
                     </div>
                    </div>

                    <div className="w-full md:w-6/12">
                     <div className="flex gap-2 items-center"><CiCalendar size={12} /> <div className="text-[#475466] text-xs dm-sans-500">Sort by</div></div>
                     <div className="flex gap-4 mt-2 mb-7">
                     <div><input type="checkbox" className='mr-[6px]' /> <span className='text-[#757F8D] text-xs dm-sans-400'>New to old</span></div>
                     <div><input type="checkbox" className='mr-[6px]' /> <span className='text-[#757F8D] text-xs dm-sans-400'>Old to new</span></div>
                     </div>
                    </div>
                 </div>
                </div>
             )}
             {/* ------------------- */}

            </div>
            {/* ---------- */}

           </Form>
          {/* ----------- */}
        </div>
    </div>

    {/* Table------------- */}
    <AuditTable currentPage={currentPage}/>
    {/* ------------------ */}
</div>
  )
}
