"use client"
import { useState } from "react";
import Form from "next/form"
import { HiOutlineUser } from "react-icons/hi2";
import { CiCalendar, CiCreditCard1, CiBank } from "react-icons/ci";
import { GoPlusCircle } from "react-icons/go";
import Image from "next/image";
import { IoCloseCircleOutline } from "react-icons/io5";
import { MdOutlinePin } from "react-icons/md";

export default function BillingTab() {
   const [accountModal,setAccountModal] = useState(false)
   const [cardModal,setCardModal] = useState(false)
  return (
    <div>
       <div className='text-xl  text-[#1E1E1ECC] font-medium mt-6 dm-sans-500'>Update Your Billing Informationence</div>

       <Form className="mt-5" action="">
        {/* Card details------- */}
        <div className="mt-5">
         <div className="text-[#1E1E1E] text-lg dm-sans-500 mb-4">Card Details</div>

         <div className="flex justify-between gap-5 items-center">
          <div className="w-full md:w-6/12">
             <div className='dm-sans-400'>
                <label htmlFor="Fullname" className='block mb-[4px] text-[#1E1E1E]'>Name on your Card</label>
                <div className='flex gap-2 items-center border p-2 mb-5 rounded-md border-gray-300'>
                <HiOutlineUser/> <input type="text" className='text-sm text-gray-600 focus:outline-none' placeholder='Timmy James' />
                </div> 
             </div>
          </div>
          <div className="w-full md:w-6/12">
             <div className='dm-sans-400'>
                <label htmlFor="Fullname" className='block mb-[4px] text-[#1E1E1E]'>Expiry</label>
                <div className='flex gap-2 items-center border p-2 mb-5 rounded-md border-gray-300'>
                <CiCalendar /> <input type="text" className='text-sm  text-gray-600 focus:outline-none' placeholder='02/2025' />
                </div> 
             </div>
          </div>
         </div>
         
         <div className="flex justify-between gap-5  items-center">
          <div className="w-full md:w-6/12">
             <div className='dm-sans-400'>
                <label htmlFor="Fullname" className='block mb-[4px] text-[#1E1E1E]'>Card Number</label>
                <div className='flex gap-2 items-center border p-2 mb-5 rounded-md border-gray-300'>
                 <Image src="/mastercard.png" alt="" width={20} height={20}/> 
                 <input type="text" className='text-sm  text-gray-600 focus:outline-none' placeholder='2344-5678-8909-9873' />
                </div> 
             </div>
          </div>
          <div className="w-full md:w-6/12">
             <div className='dm-sans-400'>
                <label htmlFor="Fullname" className='block mb-[4px] text-[#1E1E1E]'>CVV</label>
                <div className='flex gap-2 items-center border p-2 mb-5 rounded-md border-gray-300'>
                <CiCreditCard1 /> <input type="text" className='text-sm  text-gray-600 focus:outline-none' placeholder='786' />
                </div> 
             </div>
          </div>
         </div>
         <div className="flex justify-end">
            <button 
             onClick={()=>setCardModal(true)}
             className="flex items-center gap-[7px] cursor-pointer text-sm text-[#6B911B] dm-sans-500"><GoPlusCircle size={18} /> Add New Card</button>
         </div>
        </div>
        {/* card Details-------- */}

        {/* Bank account details------- */}
        <div className="mt-5">
         <div className="text-[#1E1E1E] text-lg dm-sans-500 mb-4">Bank Account Details</div>

         <div className="flex justify-between gap-5 items-center">
          <div className="w-full md:w-6/12">
             <div className='dm-sans-400'>
                <label htmlFor="Fullname" className='block mb-[4px] text-[#1E1E1E]'>Account Holder Name</label>
                <div className='flex gap-2 items-center border p-2 mb-5 rounded-md border-gray-300'>
                <HiOutlineUser/> <input type="text" className='text-sm  text-gray-600 focus:outline-none' placeholder='Timmy James' />
                </div> 
             </div>
          </div>
          <div className="w-full md:w-6/12">
             <div className='dm-sans-400'>
                <label htmlFor="Fullname" className='block mb-[4px] text-[#1E1E1E]'>Bank Name</label>
                <div className='flex gap-2 items-center border p-2 mb-5 rounded-md border-gray-300'>
                 <CiBank/>
                 <select name="" id="" className="flex-1 text-gray-600">
                    <option value="">Access Bank</option>
                    <option value="">UBA Bank</option>
                    <option value="">Citi Bank</option>
                    <option value="">Eco Bank</option>
                 </select>
                </div> 
             </div>
          </div>
         </div>
         
         <div className="flex justify-between gap-5 items-center">
          <div className="w-full md:w-6/12">
             <div className='dm-sans-400'>
                <label htmlFor="Fullname" className='block mb-[4px] text-[#1E1E1E]'>Account Number</label>
                <div className='flex gap-2 items-center border p-2 mb-5 rounded-md border-gray-300'>
                 <MdOutlinePin /> 
                 <input type="text" className='text-sm  text-gray-600 focus:outline-none' placeholder='2349054264' />
                </div> 
             </div>
          </div>
          <div className="w-full md:w-6/12">
             <div className='dm-sans-400'>
                <label htmlFor="Fullname" className='block mb-[4px] text-[#1E1E1E]'>Account Type</label>
                <div className='flex gap-2 items-center border p-2 mb-5 rounded-md border-gray-300'>
                 <CiBank/>
                 <select name="" id="" className="flex-1 text-gray-600" >
                    <option value="">Current</option>
                    <option value="">Savings</option>
                 </select>
                </div> 
             </div>
          </div>
         </div>
         <div className="flex justify-end">
            <button 
             onClick={()=>setAccountModal(true)}
             className="flex items-center gap-[7px] cursor-pointer text-sm text-[#6B911B] dm-sans-500"><GoPlusCircle size={18} /> Add Bank Account</button>
         </div>
        </div>
        {/* card Details-------- */}

       {/* Submit btn----- */}
          <div className="flex gap-3 mt-20 mb-5">
            <button className='px-3 py-1 dm-sans-500 bg-[#6B911B] cursor-pointer text-white rounded-md border'>Save Changes</button>
          </div>
       {/* --------------- */}
       </Form>

    
        {/* bank account modal */}
        {accountModal && (
        <div className="fixed w-full flex justify-center items-center h-screen dark-overlay left-0 z-[20] top-0">
            <div className="min-h-[80vh] bg-white w-[35%] rounded-lg">
             <div className="flex px-6 pt-4 justify-between items-center pb-6">
                <div className="text-xl text-[#1E1E1E] dm-sans-500">Bank Account Details</div>
                {/* close btn */}
                <div   onClick={()=>setAccountModal(false)}className="cursor-pointer">
                    <IoCloseCircleOutline size={25} className='text-gray-400'/>
                </div>
                {/* --------- */}
             </div>
    
             {/* form--- */}
             <div className="px-6">
              <Form action="">
               <div className='dm-sans-400'>
                 <label htmlFor="Fullname" className='block mb-[4px] text-[#1E1E1E]'>Account Holder Name</label>
                 <div className='flex gap-2 items-center border p-2 mb-5 rounded-md border-gray-300'>
                 <HiOutlineUser/> <input type="text" className='text-sm  text-gray-600 focus:outline-none' placeholder='eg Timmy James' />
                </div> 
               </div>

               <div className='dm-sans-400'>
                <label htmlFor="Fullname" className='block mb-[4px] text-[#1E1E1E]'>Bank Name</label>
                <div className='flex gap-2 items-center border p-2 mb-5 rounded-md border-gray-300'>
                  <CiBank/>
                  <select name="" id="" className="flex-1 text-gray-600">
                    <option value="">Select your bank</option>
                    <option value="">Access Bank</option>
                    <option value="">UBA Bank</option>
                    <option value="">Citi Bank</option>
                    <option value="">Eco Bank</option>
                  </select>
                 </div> 
                </div>

                <div className='dm-sans-400'>
                 <label htmlFor="Fullname" className='block mb-[4px] text-[#1E1E1E]'>Account Number</label>
                 <div className='flex gap-2 items-center border p-2 mb-5 rounded-md border-gray-300'>
                  <MdOutlinePin /> 
                  <input type="text" className='text-sm focus:outline-none text-gray-600' placeholder='2349054264' />
                 </div> 
                </div>

                <div className='dm-sans-400'>
                 <label htmlFor="Fullname" className='block mb-[4px] text-[#1E1E1E]'>Account Type</label>
                 <div className='flex gap-2 items-center border p-2 mb-5 rounded-md border-gray-300'>
                   <CiBank/>
                   <select name="" id="" className="flex-1 text-gray-600">
                    <option value="">Select account type</option>
                    <option value="">Current</option>
                    <option value="">Savings</option>
                   </select>
                  </div> 
                 </div>

                  {/* Submit btn----- */}
                  <div className="flex gap-3 mt-15 mb-5 items-center">
                    <button className='px-3 py-1 dm-sans-500 border border-[#6B911B] text-[#6B911B] rounded-md cursor-pointer'>Cancle</button>
                    <button className='px-3 py-1 dm-sans-500 bg-[#6B911B] cursor-pointer text-white rounded-md border'>Save Changes</button>
                  </div>
                  {/* --------------- */}
              </Form>
              </div>
             {/* ------- */}
            </div>
        </div>
        )}
        {/* ----------------- */}

            
        {/* card details modal */}
        {cardModal && (
        <div className="fixed w-full flex justify-center items-center h-screen dark-overlay left-0 z-[20] top-0">
            <div className="min-h-[80vh] bg-white w-[35%] rounded-lg">
             <div className="flex px-6 pt-4 justify-between items-center pb-6">
                <div className="text-xl text-[#1E1E1E] dm-sans-500">Card Details</div>
                {/* close btn */}
                <div   onClick={()=>setCardModal(false)}className="cursor-pointer">
                    <IoCloseCircleOutline size={25} className='text-gray-400'/>
                </div>
                {/* --------- */}
             </div>
    
             {/* form--- */}
             <div className="px-6">
              <Form action="">
              <div className='dm-sans-400'>
                <label htmlFor="Fullname" className='block mb-[4px] text-[#1E1E1E]'>Name on your Card</label>
                <div className='flex gap-2 items-center border p-2 mb-5 rounded-md border-gray-300'>
                <HiOutlineUser/> <input type="text" className='text-sm  text-gray-600 focus:outline-none' placeholder='eg Timmy James' />
                </div> 
              </div>

               <div className='dm-sans-400'>
                <label htmlFor="Fullname" className='block mb-[4px] text-[#1E1E1E]'>Expiry</label>
                <div className='flex gap-2 items-center border p-2 mb-5 rounded-md border-gray-300'>
                <CiCalendar /> <input type="text" className='text-sm  text-gray-600 focus:outline-none' placeholder='02/2025' />
                </div> 
               </div>

               <div className='dm-sans-400'>
                <label htmlFor="Fullname" className='block mb-[4px] text-[#1E1E1E]'>Card Number</label>
                <div className='flex gap-2 items-center border p-2 mb-5 rounded-md border-gray-300'>
                 <Image src="/mastercard.png" alt="" width={20} height={20}/> 
                 <input type="text" className='text-sm  text-gray-600 focus:outline-none' placeholder='2344-5678-8909-9873' />
                </div> 
               </div>

               <div className='dm-sans-400'>
                 <label htmlFor="Fullname" className='block mb-[4px] text-[#1E1E1E]'>CVV</label>
                 <div className='flex gap-2 items-center border p-2 mb-5 rounded-md border-gray-300'>
                  <CiCreditCard1 /> <input type="text" className='text-sm  text-gray-600 focus:outline-none' placeholder='786' />
                 </div> 
               </div>

               {/* Submit btn----- */}
                <div className="flex gap-3 mt-15 mb-5 items-center">
                  <button className='px-3 py-1 dm-sans-500 border border-[#6B911B] text-[#6B911B] rounded-md cursor-pointer'>Cancle</button>
                  <button className='px-3 py-1 dm-sans-500 bg-[#6B911B] cursor-pointer text-white rounded-md border'>Save Changes</button>
                </div>
               {/* --------------- */}
              </Form>
              </div>
             {/* ------- */}
            </div>
        </div>
        )}
        {/* ----------------- */}
    </div>
  )
}
