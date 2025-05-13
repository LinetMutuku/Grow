import Image from 'next/image'
import React from 'react'
import Form from "next/form"
import { MdOutlineMailOutline } from "react-icons/md";

export default function page() {
  return (
    <div>
      <div className="flex">
        <div className="hidden md:block md:w-6/12 h-screen farmer-bg">
        </div>
        <div className="w-full md:w-6/12 min-h-[100vh] flex justify-center items-center bg-white px-8">
          <div className='flex-1'>
            <div className='flex gap-2 items-center'>
            <Image src="/padlock.svg" alt='' width={45} height={45} /> <div className="flex gap-3"><div className='dm-sans-400 text-[2.09rem] text-[#1E1E1E] '>Forgot Password?</div></div>
            </div>
            
            {/* form------ */}
            <Form action="" className='mt-6'>

                <div className='dm-sans-400 text-[#1E1E1E]'>
                    <label htmlFor="email" className='block mb-[4px]'>Email Address</label>
                    <div className='flex gap-2 items-center border p-2 mb-5 rounded-md border-gray-300'>
                    <MdOutlineMailOutline/> <input type="text" className='text-sm text-gray-600 focus:outline-none' placeholder='Enter Full Name' />
                    </div> 
                </div>

                <button className='p-3 mt-3 block w-full dm-sans-400 cursor-pointer rounded-md text-white text-lg bg-[#6B911B]'>Continue</button>
            </Form>
            {/* ------- */}
          </div>
        </div>
      </div>
    </div>
  )
}
