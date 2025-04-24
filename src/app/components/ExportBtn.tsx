"use client"
import {useState} from 'react'
import Image from 'next/image'
import {IoCloseCircleOutline } from 'react-icons/io5'

export default function ExportBtn() {
  const [isActive,setIsActive] = useState(false)
  const [isModalActive,setIsModalActive] = useState(false)
  return (
    <div className='relative'>
       <button className='bg-gray-50 border cursor-pointer px-3 py-1 flex justify-center items-center border-gray-200 text-[#00000080] text-sm dm-sans-500 rounded' 
         onClick={()=>setIsActive(!isActive)}>
         <Image src="/reports/file_export.svg" alt="" width={15} height={15} className='mr-[5px]' /> Export
       </button>

       {/*Export btn modal------ */}
       {isActive && (
         <div className="absolute z-10 flex items-center min-h-[100px] -bottom-[130px] -left-35 bg-white shadow rounded-lg px-6 w-full min-w-[150px]">
          <ul className='flex-1 dm-sans-500 my-6'>
            <li  onClick={()=>setIsModalActive(true)}
                 className='text-xs py-3 border-b border-gray-200 text-[#424242] cursor-pointer'>
              View Report
            </li>
            <li className='text-xs py-3 text-[#424242] cursor-pointer'>Download Report</li>
          </ul>
         </div>
       )}
       {/* ----------- */}

       {/* view report modal */}
       {isModalActive && (
        <div className="fixed w-full flex justify-center items-center h-screen dark-overlay left-0 z-[20] top-0">
           <div className="min-h-[80vh] bg-white w-[40%] p-2">
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, quibusdam sapiente blanditiis vel laboriosam dolores quia maxime facere asperiores sunt molestiae, doloremque fugiat, eius expedita pariatur eligendi qui voluptatem numquam dolore mollitia minima reprehenderit similique! Deleniti necessitatibus doloribus soluta at nam sunt ex molestiae maiores? Cupiditate, eius excepturi! Necessitatibus eveniet maxime sed officiis mollitia voluptatum rerum? Quia placeat beatae minima. Repellendus asperiores facere ut perspiciatis blanditiis accusantium magnam non ea numquam ducimus magni, nulla tempore tempora eaque distinctio rem pariatur maxime velit illo corrupti labore sequi esse, vel consequuntur. Sed repudiandae nostrum nemo non asperiores excepturi porro! Ratione, dignissimos culpa!
           </div>
           {/* close btn */}
            <div   onClick={()=>setIsModalActive(false)}className="absolute right-[50px] top-[30px] cursor-pointer">
              <IoCloseCircleOutline className='text-white size-10'/>
            </div>
           {/* --------- */}
         </div>
       )}
         
       {/* ----------------- */}
    </div>
  )
}
