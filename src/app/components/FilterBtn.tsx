"use client"
import {useState} from 'react'
import Image from 'next/image'

export default function FilterBtn() {
  const [isActive,setIsActive] = useState(false)

  return (
    <div className='relative cursor-pointer'>
       <Image src="/reports/instant_mix.svg" alt="" width={15} height={15}
         onClick={()=>setIsActive(!isActive)} />

       {/* modal------ */}
       {isActive && (
         <div className="absolute z-10 flex items-center min-h-[100px] -bottom-[190px] -left-[190px] bg-white shadow rounded-lg px-6 w-full min-w-[220px]">
          <ul className='flex-1 dm-sans-500 my-4'>
            <li className='text-xs flex gap-3 mt-3 items-center py-2 border-b border-gray-200 text-[#424242] cursor-pointer'>
                <input type="checkbox" className='' /> <span>PDF</span>
            </li>
            <li className='text-xs flex gap-3 mt-3 items-center py-2 text-[#424242] cursor-pointer'>
                <input type="checkbox" /> <span>Excel</span>
            </li>
            <li className="mt-5 flex justify-center gap-3">
               <button className='bg-[#6B911B] cursor-pointer px-6 text-xs text-white rounded py-2'>Apply</button>
               <button className='px-6 text-xs cursor-pointer text-[#6B911B] border border-[#6B911B] rounded py-2'>Reset</button>
            </li>
          </ul>
         </div>
       )}
       {/* ----------- */}
    </div>
  )
}
