"use client"
import Image from 'next/image'

export default function ExportBtn() {
  return (
    <div className='relative'>
       <button className='bg-gray-50 border cursor-pointer px-3 py-1 flex justify-center items-center border-gray-200 text-[#00000080] text-sm dm-sans-500 rounded' >
         <Image src="/file_export.svg" alt="" width={15} height={15} className='mr-[5px]' /> Export
       </button>
    </div>
  )
}
