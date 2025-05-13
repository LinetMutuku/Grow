import {useState} from 'react'
import Image from 'next/image';
import {IoCloseCircleOutline } from 'react-icons/io5'
import { IoIosArrowBack } from "react-icons/io";

export default function ActionBtn() {

    const [isActive,setIsActive] = useState(false)
    const [isModalActive,setIsModalActive] = useState(false)
    const [isStatusModalActive,setIsStatusModalActive] = useState(false)
  
  return (
    <div className='relative'>
        <Image 
         onClick={()=>setIsActive(!isActive)}
         src="/horizontal-dot.svg" className='cursor-pointer' alt='' width={3} height={17} 
         />

        {/*Action btn modal------ */}
        {isActive && (
         <div className="absolute z-[10] flex items-center min-h-[100px] -bottom-[130px] -left-[150px] bg-white shadow rounded-lg px-6 w-full min-w-[150px]">
          <ul className='flex-1 dm-sans-500 my-6 text-right'>
            <li  onClick={()=>setIsModalActive(true)}
                 className='text-xs py-3 border-b border-gray-200 text-[#424242] cursor-pointer'>
              View Details
            </li>
            <li 
            onClick={()=>setIsStatusModalActive(true)}
            className='text-xs py-3 text-[#424242] cursor-pointer flex justify-between items-center'> <IoIosArrowBack /> Mark Status</li>
          </ul>
         </div>
       )}
       {/* ----------- */}

    {/* security alert modal */}
    {isModalActive && (
    <div className="fixed w-full flex justify-center items-center h-screen dark-overlay left-0 z-[20] top-0">
        <div className="min-h-[80vh] bg-white w-[35%] rounded-lg">
         <div className="flex px-6 pt-4 justify-between items-center border-b border-gray-200 pb-6">
            <div className="text-2xl text-[#6B911B] dm-sans-500">Security Alert</div>
            {/* close btn */}
            <div   onClick={()=>setIsModalActive(false)}className="cursor-pointer">
                <IoCloseCircleOutline className='text-gray-400 size-8'/>
            </div>
            {/* --------- */}
         </div>

         <div className="my-5">
            <div className="px-7">
              <div className="text-[#1E1E1E] dm-sans-500">Overview</div>
              <div className='my-3 text-[#1E1E1EBF] text-sm dm-sans-400'>
                <div className='mb-2'>Alert Type: Unusual Login Attempt</div>
                <div className='mb-2'>User: JOhn Doe</div>
                <div className='mb-2'>Date: March 1 2025</div>
                <div className='mb-2'>Status: Resolved</div>
              </div>
            </div>
         </div>
         <div className="my-5">
            <div className="px-7">
              <div className="text-[#1E1E1E] dm-sans-500">Activity Timeline</div>
              <div className='my-3 text-[#1E1E1EBF] text-sm dm-sans-500'>
                <div className='mb-2'>10:30 AM: User attempted login from a new device</div>
                <div className='mb-2'>10:31 AM: Failed login attempt (Incorrect Password)</div>
                <div className='mb-2'>10:32 AM: Successful login after second attempt</div>
                <div className='mb-2'>10:33 AM : Alert triggered for unusual activity</div>
              </div>
            </div>
         </div>

         <div className="my-5">
            <div className="px-7">
              <div className="text-[#1E1E1E] dm-sans-500">Activity Timeline</div>
              <div className="flex gap-2 mt-3">
               <div className='flex gap-2'><input type="radio" name='pending' value="pending" className='text-black bg-black' /> Pending</div>
               <div className='flex gap-2'><input type="radio" name='resolved' value="resolved" /> Resolved</div>
              </div>
            </div>
         </div>
        </div>

    </div>
    )}
    {/* ----------------- */}

    {/* mark status modal */}
    {isStatusModalActive && (
      <div className="fixed w-full flex justify-center items-center h-screen dark-overlay left-0 z-[20] top-0">
        <div className="flex items-center min-h-[100px] bg-white shadow rounded-lg px-6 w-full max-w-[220px]">
          <ul className='flex-1 dm-sans-500 my-4'>
            <li className='text-xs flex gap-3 mt-3 items-center py-2 border-b border-gray-200 text-[#424242] cursor-pointer'>
                <input type="checkbox" className='' /> <span>Pending</span>
            </li>
            <li className='text-xs flex gap-3 mt-3 items-center py-2 text-[#424242] cursor-pointer'>
                <input type="checkbox" /> <span>Resolved</span>
            </li>
            <li className="mt-5 flex justify-center gap-3">
              <button className='bg-[#6B911B] cursor-pointer px-6 text-xs text-white rounded py-2'>Apply</button>
              <button className='px-6 text-xs cursor-pointer text-[#6B911B] border border-[#6B911B] rounded py-2'>Reset</button>
            </li>
          </ul>
        </div>
         {/* close btn */}
          <div onClick={()=>setIsStatusModalActive(false)}className="absolute right-[50px] top-[30px] cursor-pointer">
            <IoCloseCircleOutline className='text-white size-10'/>
          </div>
        {/* --------- */}
      </div>
    )}
    {/* ----------------- */}
</div>
  )
}
