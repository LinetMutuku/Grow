"use client"
import Image from 'next/image';
import {useState} from 'react'
import { GoPlusCircle } from 'react-icons/go';
import {IoCloseCircleOutline } from 'react-icons/io5'
import { LuDownload } from "react-icons/lu";

export default function DownloadLogBtn() {
  const [logModalActive,setLogModalActive] = useState(false)
  const [approvalModal,setApprovalModal] = useState(false)
  const [successModal,setSuccessModal] = useState(false)
  return (
    <div>
      <button 
       onClick={()=>setLogModalActive(true)}
       className='flex items-center gap-2 px-2 cursor-pointer py-1 dm-sans-500 bg-[#6B911B] text-white rounded'><GoPlusCircle size={18} /> Download Log</button>

           {/* audit LOg modal */}
           {logModalActive && (
           <div className="fixed w-full flex justify-center overflow-hidden items-center h-screen dark-overlay left-0 z-[20] top-0">
               <div className="h-[80vh] overflow-y-scroll bg-white md:w-[37%] w-[96%] rounded-lg custom-scrollbar">
                <div className="flex px-6 pt-4 justify-between items-center border-b border-gray-200 pb-6">
                   <div className="text-2xl text-[#6B911B] dm-sans-500">Action Details</div>
                   {/* close btn */}
                   <div   onClick={()=>setLogModalActive(false)}className="cursor-pointer">
                       <IoCloseCircleOutline className='text-gray-400 size-8'/>
                   </div>
                   {/* --------- */}
                </div>
       
                <div className="my-5 px-6">
                   <div className="flex items-center gap-2">
                    <Image src="/user2.png" alt='' width={92} height={92}/>
                    <div>
                        <div className="text-[#00000080] text-sm dm-sans-500">Actioned preformed by:</div>
                        <div className="dm-sans-500 text-xl flex items-start gap-2">Young Mann <Image src="/verified.png" alt='' width={12} height={12} /></div>
                        <div className="text-[#00000080] text-sm dm-sans-500">Youngmann@cosmos.com | +234 5895 68956</div>
                    </div>
                   </div>
                   <div className="flex justify-between mt-5 gap-2 items-center">
                    <div className="w-full md:w-4/12 bg-[#F7F9F3] px-4 py-2 rounded-md mb-2">
                       <div className='tracking-wider manrope-500 text-[10px] text-[#00000080]'>PERFORMER<br/> ROLE</div>
                       <div className="text-[#6B911B] dm-sans-500">Verified Admin</div>
                    </div>
                    <div className="w-full md:w-4/12 bg-[#F7F9F3] px-4 py-2 rounded-md mb-2">
                       <div className='tracking-wider manrope-500 text-[10px] text-[#00000080]'>DATE OF<br/> ACTION</div>
                       <div className="text-[#474747]  dm-sans-500">12/2/2025</div>
                    </div>
                    <div className="w-full md:w-4/12 bg-[#F7F9F3] px-4 py-2 rounded-md mb-2">
                       <div className='tracking-wider manrope-500 text-[10px] text-[#00000080]'>TIME OF<br/> ACTION</div>
                       <span className="text-[#474747]  dm-sans-500">4:08 PM</span> <span className='text-xs'>(WAT)</span>
                    </div>
                   </div>

                   <div className="mt-5">
                    <div className="dm-sans-500 text-[#1E1E1E]">Description of Action</div>
                    <div className="mt-4 dm-sans-400 text-sm text-[#1E1E1EBF]">Write short or detailed description of action that was carried out. e.g., Admin John Doe suspended User123 for violating platform policies.</div>
                    <div className='mt-3 dm-sans-400 text-sm text-[#1E1E1EBF]'>User was given a warning before suspension due to multiple violations.</div>
                   </div>

                   <div className="mt-5">
                    <div className="dm-sans-500 text-[#1E1E1E]">Note to Consider (If Applicable):</div>
                    <textarea name="" id="" className='bg-[#F9F9F9] w-full text-[#1E1E1EBF] text-sm p-2 h-24 mt-3 rounded border border-gray-400 ' placeholder='Write a descriptive note in case you need to keep something on this action taken.'>

                    </textarea>
                   </div>

                   <div className="flex gap-3 mt-5 items-center">
                    <div className="dm-sans-500 text-[#1E1E1E]">Supporting Document / Link:</div>
                     <div className="flex gap-3 items-center">
                        <div className="bg-[#E6E6E6] px-3 py-1 rounded-2xl text-sm dm-sans-500 text-black">View</div>
                        <LuDownload />
                     </div>
                   </div>

                   {/* Submit btn----- */}
                   <div className="flex gap-3 mt-15 mb-5 items-center">
                    <button 
                    onClick={()=>setLogModalActive(false)}
                    className='px-3 py-[6px] flex-1 dm-sans-500 border border-[#6B911B] text-[#6B911B] rounded cursor-pointer'>Cancle</button>
                    <button
                     onClick={()=>setApprovalModal(true)}
                     className='px-3 py-[6px] flex-1 dm-sans-500 bg-[#6B911B] cursor-pointer text-white rounded border'>Save</button>
                  </div>
                  {/* --------------- */}
                </div>
               </div>
       
           </div>
           )}
           {/* ----------------- */}

            {/* audit LOg approval modal */}
             {approvalModal && (
              <div className="fixed w-full flex justify-center overflow-hidden items-center h-screen dark-overlay left-0 z-[21] top-0">
                <div className="relative bg-white md:w-[35%] w-[96%] rounded-lg px-6">
                    {/* close btn */}
                    <div   onClick={()=>setApprovalModal(false)}className="cursor-pointer absolute right-6 top-4">
                        <IoCloseCircleOutline className='text-gray-400 size-8'/>
                    </div>
                    {/* --------- */}
                    <div className="mt-5">
                       <Image src='/hourglass.png' alt='' width={50} height={50} className='mx-auto'/> 
                       <div className="dm-sans-500 text-[#1E1E1E] text-center px-4 mt-4">Please confirm that you want to<br/> update the selected action.</div>
                       <button 
                       onClick={()=>{
                        setSuccessModal(true);
                        setApprovalModal(false)
                       }}
                       className='text-center w-full dm-sans-500 text-sm rounded mb-5 mt-4 block p-3 text-white bg-[#6B911B] '>Yes, Please Update</button>
                    </div>
                    </div>
                </div>
              )}
            {/* ----------------- */}

             {/* success modal modal */}
             {successModal && (
              <div className="fixed w-full flex justify-center overflow-hidden items-center h-screen dark-overlay left-0 z-[21] top-0">
                <div className="relative bg-white md:w-[35%] w-[96%] rounded-lg px-6">
                    {/* close btn */}
                    <div   onClick={()=>setSuccessModal(false)}className="cursor-pointer absolute right-6 top-4">
                        <IoCloseCircleOutline className='text-gray-400 size-8'/>
                    </div>
                    {/* --------- */}
                    <div className="mt-5">
                       <Image src='/checked.png' alt='' width={50} height={50} className='mx-auto'/> 
                       <div className="dm-sans-500 text-[#1E1E1E] text-center px-4 mt-4">Action Successfully Updated</div>
                     <p className='dm-sans-400 text-sm text-[#00000080] text-center mt-3 mb-4'>You have updated the selected<br/> action successfully</p>
                    </div>
                    </div>
                </div>
              )}
            {/* ----------------- */}
    </div>
  )
}
