"use client"
import Image from 'next/image'
import {useState}  from 'react'
import Form from "next/form"
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";

// Renamed from 'page' to 'Page' to follow React component naming convention
export default function Page() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div>
            <div className="flex">
                <div className="hidden md:block md:w-6/12 h-screen farmer-bg">
                </div>
                <div className="w-full md:w-6/12 min-h-[100vh] flex justify-center items-center bg-white px-8">
                    <div className='flex-1'>
                        <div className='flex gap-2 items-center'>
                            <Image src="/padlock.svg" alt='' width={45} height={45} /> <div className="flex gap-3"><div className='dm-sans-400 text-[2.09rem] text-[#1E1E1E] '>Change Password!</div></div>
                        </div>

                        {/* form------ */}
                        <Form action="" className='mt-6'>

                            <div className='dm-sans-400 text-[#1E1E1E]'>
                                <label htmlFor="new password" className='block mb-[4px]'>New Password</label>
                                <div className='flex justify-between items-center border p-2 mb-5 rounded-md border-gray-300'>
                                    <div className="flex gap-2 items-center w-full">
                                        <CiLock />
                                        <input type={showPassword ? "text":"password"} className='flex-1 text-sm text-gray-600 focus:outline-none' placeholder='Enter new password' />
                                    </div>
                                    {showPassword ? <IoEyeOutline onClick={()=>setShowPassword(false)} /> :<FaRegEyeSlash onClick={()=>setShowPassword(true)} /> }
                                </div>
                            </div>

                            <div className='dm-sans-400 text-[#1E1E1E]'>
                                <label htmlFor="confirm password" className='block mb-[4px]'>Confirm Password</label>
                                <div className='flex justify-between items-center border p-2 mb-5 rounded-md border-gray-300'>
                                    <div className="flex gap-2 items-center w-full">
                                        <CiLock />
                                        <input type={showConfirmPassword ? "text":"password"} className='flex-1 text-sm text-gray-600 focus:outline-none' placeholder='Enter new password' />
                                    </div>
                                    {showConfirmPassword ? <IoEyeOutline onClick={()=>setShowConfirmPassword(false)} /> :<FaRegEyeSlash onClick={()=>setShowConfirmPassword(true)} /> }
                                </div>
                            </div>

                            <button className='p-3 mt-3 block w-full dm-sans-400 cursor-pointer rounded-md text-white text-lg bg-[#6B911B]'>Reset Password</button>
                        </Form>
                        {/* ------- */}
                    </div>
                </div>
            </div>
        </div>
    )
}