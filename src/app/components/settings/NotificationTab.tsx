import React from 'react'
import ToggleBtn from './ToggleBtn'

export default function NotificationTab() {
  return (
    <div>
     <div className='text-xl  text-[#1E1E1ECC] font-medium mt-5 dm-sans-500'>Edit Pofile Information</div>
     <div className='mt-5'>
       <div className="text-[#1E1E1E] text-lg dm-sans-500">Security Alerts</div>
       <div className="mt-4 flex justify-between items-center">
         <span className='text-[#1E1E1EB2]'>Unusual login attempts</span> 
         <ToggleBtn enabled={true}/>
       </div>
       <div className="mt-4 flex justify-between items-center">
         <span className='text-[#1E1E1EB2]'>Password change confirmation</span> 
         <ToggleBtn enabled={false}/>
       </div>
       <div className="mt-4 flex justify-between items-center">
         <span className='text-[#1E1E1EB2]'>Suspicious account activity</span> 
         <ToggleBtn enabled={true}/>
       </div>
     </div>

     <div className='mt-5'>
       <div className="text-[#1E1E1E] text-lg dm-sans-500">Transaction Notifications</div>
       <div className="mt-4 flex justify-between items-center">
         <span className='text-[#1E1E1EB2]'>Payment successful</span> 
         <ToggleBtn enabled={true}/>
       </div>
       <div className="mt-4 flex justify-between items-center">
         <span className='text-[#1E1E1EB2]'>Payment failed</span> 
         <ToggleBtn enabled={true}/>
       </div>
       <div className="mt-4 flex justify-between items-center">
         <span className='text-[#1E1E1EB2]'>Flagged transactions</span> 
         <ToggleBtn enabled={true}/>
       </div>
     </div>

     <div className='mt-5'>
       <div className="text-[#1E1E1E] text-lg dm-sans-500">User Activity</div>
       <div className="mt-4 flex justify-between items-center">
         <span className='text-[#1E1E1EB2]'>New user sign-ups</span> 
         <ToggleBtn enabled={true}/>
       </div>
       <div className="mt-4 flex justify-between items-center">
         <span className='text-[#1E1E1EB2]'>Profile update</span> 
         <ToggleBtn enabled={false}/>
       </div>
       <div className="mt-4 flex justify-between items-center">
         <span className='text-[#1E1E1EB2]'>Account verification reminders</span> 
         <ToggleBtn enabled={true}/>
       </div>
     </div>

     <div className='text-xl  text-[#1E1E1ECC] font-medium mt-10 dm-sans-500'>Edit Your Notification Preference</div>

     <div className='mt-5'>
       <div className="text-[#1E1E1E] text-lg dm-sans-500">Investment Update</div>
       <div className="mt-4 flex justify-between items-center">
         <span className='text-[#1E1E1EB2]'>Receive investment updates via email</span> 
         <ToggleBtn enabled={true}/>
       </div>
       <div className="mt-4 flex justify-between items-center">
         <span className='text-[#1E1E1EB2]'>Receive investment updates via SMS</span> 
         <ToggleBtn enabled={false}/>
       </div>
     </div>

     <div className='mt-5'>
       <div className="mt-4 flex justify-between items-center">
         <span className='text-[#1E1E1EB2]'>Notification for ROI projections</span> 
         <ToggleBtn enabled={true}/>
       </div>
       <div className="mt-4 flex justify-between items-center">
         <span className='text-[#1E1E1EB2]'>Notification for payouts </span> 
         <ToggleBtn enabled={false}/>
       </div>
     </div>
       {/* Submit btn----- */}
       <div className="flex gap-3 mt-20 mb-5">
            <button className='px-3 py-1 dm-sans-500 bg-[#6B911B] cursor-pointer text-white rounded-md border'>Save Changes</button>
        </div>
        {/* --------------- */}
    </div>
  )
}
