import Image from 'next/image';
import { HiOutlineUser } from "react-icons/hi2";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLock } from "react-icons/ci";

export default function ProfileTab() {
  return (
    <div>
       {/* profile picture--- */}
       <div className="flex justify-between items-center">
            <div className="flex gap-5 mt-5 items-center">
             <Image src="/user.png" alt='' width={100} height={100}/>
             <div>
                <div className="dm-sans-500 text-[#1E1E1E] mb-1">Profile Picture</div>
                <div className="dm-sans-400 text-[#1E1E1ECC] text-sm">PNG.JPEG under 20mb</div>
             </div>
            </div>
            <div className="flex gap-3">
             <button className='px-3 py-1 dm-sans-500 text-[#6B911B] rounded-md border border-[#6B911B]'>Change Profile</button>
             <button className='px-3 py-1 dm-sans-500 text-[#6B911B]'>Remove</button>
            </div>
        </div>
        {/* ------------------ */}

        <div className='text-xl  text-[#1E1E1ECC] font-medium mt-10 dm-sans-500'>Edit Pofile Information</div>
        {/* form inputs----------- */}
        <div className="mt-5">

        <div className='dm-sans-400 text-[#1E1E1E]'>
            <label htmlFor="Fullname" className='block mb-[4px]'>Full Name</label>
            <div className='flex gap-2 items-center border p-2 mb-5 rounded-md border-gray-300'>
            <HiOutlineUser/> <input type="text" className='text-sm text-gray-600 focus:outline-none' placeholder='Enter Full Name' />
            </div> 
        </div>

        <div className='dm-sans-400 text-[#1E1E1E]'>
            <label htmlFor="email" className='block mb-[4px]'>Email Address</label>
            <div className='flex gap-2 items-center border p-2 mb-5 rounded-md border-gray-300'>
            <MdOutlineMailOutline/> <input type="text" className='text-sm text-gray-600 focus:outline-none' placeholder='Enter Full Name' />
            </div> 
        </div>

        <div className='dm-sans-400 text-[#1E1E1E]'>
            <label htmlFor="email" className='block mb-[4px]'>Current Password</label>
            <div className='flex gap-2 items-center border p-2 mb-5 rounded-md border-gray-300'>
            <CiLock /> <input type="text" className='text-sm text-gray-600 focus:outline-none' placeholder='Enter Full Name' />
            </div> 
        </div>

        <div className='dm-sans-400 text-[#1E1E1E]'>
            <label htmlFor="email" className='block mb-[4px]'>New Password</label>
            <div className='flex gap-2 items-center border p-2 mb-5 rounded-md border-gray-300'>
            <CiLock /> <input type="text" className='text-sm text-gray-600 focus:outline-none' placeholder='Enter Full Name' />
            </div> 
        </div>
        
        </div>
        {/* --------------- */}

        {/* Submit btn----- */}
        <div className="flex gap-3 mt-30 mb-5">
            <button className='px-3 py-1 dm-sans-500 bg-[#6B911B] cursor-pointer text-white rounded-md border'>Save Changes</button>
            <button className='px-3 py-1 dm-sans-500 text-[] cursor-pointer'>Delete Account</button>
        </div>
        {/* --------------- */}
    </div>
  )
}
