"use client"
import Image from 'next/image'
import {useState} from 'react'

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"

export default function Page() {
  const [otp, setOtp] = useState("");

  const handleChange = (value: string) => {
    setOtp(value);
    console.log("OTP:", value); // Log the OTP value
  };

  return (
    <div>
      <div className="flex">
        <div className="hidden md:block md:w-6/12 h-screen farmer-bg">
        </div>
         <div className="w-full md:w-6/12 bg-white">
         <div className="">
          <div className="min-h-[100vh] flex justify-center items-center">
           <div className='flex-1 px-8'>

            <div className='flex gap-2 items-center'>
            <Image src="/padlock.svg" alt='' width={45} height={45} /> <div className="flex gap-3"><div className='dm-sans-400 text-[2.09rem] text-[#1E1E1E] '>Forgot Password?</div></div>
            </div>
            
            {/* form------ */}
            <form action="" className='mt-6 w-full'>
            <div>
              <div className="text-[#1E1E1E] dm-sans-400 mb-3">Enter Verification Code</div>
              <InputOTP maxLength={6} value={otp} onChange={handleChange}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} className='bg-[#F9F9FA] h-12 w-10 md:w-20 md:h-24 !rounded-xl border border-[#D6E5B4] mr-3 text-2xl' />
                  <InputOTPSlot index={1} className='bg-[#F9F9FA] h-12 w-10 md:w-20 md:h-24 !rounded-xl border border-[#D6E5B4] mr-3 text-2xl'/>
                  <InputOTPSlot index={2} className='bg-[#F9F9FA] h-12 w-10 md:w-20 md:h-24 !rounded-xl border border-[#D6E5B4] text-lg'/>
                </InputOTPGroup>
                <InputOTPSeparator className='w-[36px] md:w-[58px] h-[6px] text-white bg-[#CADDA0]' />
                <InputOTPGroup>
                  <InputOTPSlot index={3} className='bg-[#F9F9FA] h-12 w-10 md:w-20 md:h-24 !rounded-xl border border-[#D6E5B4] mr-3 text-2xl'/>
                  <InputOTPSlot index={4} className='bg-[#F9F9FA] h-12 w-10 md:w-20 md:h-24 !rounded-xl border border-[#D6E5B4] mr-3 text-2xl'/>
                  <InputOTPSlot index={5} className='bg-[#F9F9FA] h-12 w-10 md:w-20 md:h-24 !rounded-xl border border-[#D6E5B4] mr-3 text-2xl'/>
                </InputOTPGroup>
              </InputOTP>
              <div className="flex items-center justify-between mt-5">
               <div className='dm-sans-400 text-xs text-[#1E1E1ECC]'>Resend code in  <span className='text-[#6B911B] '>2min</span> </div>
               <button className='bg-[#6B911B40] px-2 py-2 cursor-pointer rounded-md text-[#1E1E1E4D] text-xs'>Resend Code</button>
              </div>
             </div>

              <button className='p-3 mt-10 block w-full dm-sans-400 cursor-pointer rounded-md text-white text-lg bg-[#6B911B]'>Verify</button>
            </form>
            {/* ------- */}
           </div>
          </div>
         </div>
         </div>
      </div>
    </div>
  )
}

