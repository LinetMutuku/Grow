"use client"
import { useRouter} from "next/navigation";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ActionBtn from "./ActionBtn";

export default function FlaggedTable({currentPage}:{currentPage:number}) {
    const securityData = [
        { id: 1, alertType: 'Investment Summary', userName: 'April Dave', date: 'Mar 2025', status:"resolved"},
        { id: 2, alertType: 'User Growth Report', userName: 'Rice Black', date: 'Mar 2025', status:"pending"},
        { id: 3, alertType: 'Investment Summary', userName: 'Cocoa Sheen', date: 'April - Mar 2025', status:"resolved"},
        { id: 4, alertType: 'Project Funding Stats', userName: 'Suilat Nton', date: 'May - Mar 2025', status:"pending"},
        { id: 5, alertType: 'Investment Summary', userName: 'Adeolu Nelson', date: 'June - Mar 2025', status:"resolved"},
        { id: 6, alertType: 'Investment Summary', userName: 'Bean Kyle', date: 'Feb 2025', status:"pending"},
        { id: 7, alertType: 'ROI Distribution', userName: 'Peter Cass', date: 'Dec - Mar 2025', status: "resolved"},
        { id: 8, alertType: 'Investment Summary', userName: 'Piper Mills', date: 'Feb - Mar 2025', status:"resolved"},
        { id: 9, alertType: 'Investment Summary', userName: 'Piper Mills', date: 'Feb - Mar 2025', status:"resolved"},
        { id: 10, alertType: 'Investment Summary', userName: 'Piper Mills', date: 'Feb - Mar 2025', status:"resolved"},
        { id: 11, alertType: 'Investment Summary', userName: 'Piper Mills', date: 'Feb - Mar 2025', status:"resolved"},
        { id: 12, alertType: 'Investment Summary', userName: 'Piper Mills', date: 'Feb - Mar 2025', status:"resolved"},
        { id: 13, alertType: 'Investment Summary', userName: 'Piper Mills', date: 'Feb - Mar 2025', status:"resolved"},
        { id: 14, alertType: 'Investment Summary', userName: 'Piper Mills', date: 'Feb - Mar 2025', status:"resolved"},
        { id: 15, alertType: 'Investment Summary', userName: 'Piper Mills', date: 'Feb - Mar 2025', status:"resolved"},
        { id: 1, alertType: 'Investment Summary', userName: 'April Dave', date: 'Mar 2025', status:"resolved"},
        { id: 2, alertType: 'User Growth Report', userName: 'Rice Black', date: 'Mar 2025', status:"pending"},
        { id: 3, alertType: 'Investment Summary', userName: 'Cocoa Sheen', date: 'April - Mar 2025', status:"resolved"},
        { id: 4, alertType: 'Project Funding Stats', userName: 'Suilat Nton', date: 'May - Mar 2025', status:"pending"},
        { id: 5, alertType: 'Investment Summary', userName: 'Adeolu Nelson', date: 'June - Mar 2025', status:"resolved"},
        { id: 6, alertType: 'Investment Summary', userName: 'Bean Kyle', date: 'Feb 2025', status:"pending"},
        { id: 7, alertType: 'ROI Distribution', userName: 'Peter Cass', date: 'Dec - Mar 2025', status: "resolved"},
        { id: 8, alertType: 'Investment Summary', userName: 'Piper Mills', date: 'Feb - Mar 2025', status:"resolved"},
        { id: 9, alertType: 'Investment Summary', userName: 'Piper Mills', date: 'Feb 2025', status:"resolved"},
        { id: 10, alertType: 'Investment Summary', userName: 'Piper Mills', date: 'Feb 2025', status:"resolved"},
        { id: 11, alertType: 'Investment Summary', userName: 'Piper Mills', date: 'Feb 2025', status:"resolved"},
        { id: 12, alertType: 'Investment Summary', userName: 'Piper Mills', date: 'Feb 2025', status:"resolved"},
        { id: 13, alertType: 'Investment Summary', userName: 'Piper Mills', date: 'Feb 2025', status:"resolved"},
        { id: 14, alertType: 'Investment Summary', userName: 'Piper Mills', date: 'Feb 2025', status:"resolved"},
        { id: 15, alertType: 'Investment Summary', userName: 'Piper Mills', date: 'Feb 2025', status:"resolved"},
        { id: 15, alertType: 'Investment Summary', userName: 'Piper Mills', date: 'Feb 2025', status:"resolved"},
        { id: 1, alertType: 'Investment Summary', userName: 'April Dave', date: 'Mar 2025', status:"resolved"},
        { id: 2, alertType: 'User Growth Report', userName: 'Rice Black', date: 'Mar 2025', status:"png"},
        { id: 3, alertType: 'Investment Summary', userName: 'Cocoa Sheen', date: 'April - Mar 2025', status:"resolved"},
        { id: 4, alertType: 'Project Funding Stats', userName: 'Suilat Nton', date: 'May - Mar 2025', status:"png"},
        { id: 5, alertType: 'Investment Summary', userName: 'Adeolu Nelson', date: 'June - Mar 2025', status:"resolved"},
        { id: 6, alertType: 'Investment Summary', userName: 'Bean Kyle', date: 'Feb 2025', status:"png"},
        { id: 7, alertType: 'ROI Distribution', userName: 'Peter Cass', date: 'Dec - Mar 2025', status: "resolved"},
        { id: 8, alertType: 'Investment Summary', userName: 'Piper Mills', date: 'Feb - Mar 2025', status:"resolved"},
        { id: 9, alertType: 'Investment Summary', userName: 'Piper Mills', date: 'Feb - Mar 2025', status:"resolved"},
        { id: 10, alertType: 'Investment Summary', userName: 'Piper Mills', date: 'Feb - Mar 2025', status:"resolved"},
        { id: 11, alertType: 'Investment Summary', userName: 'Piper Mills', date: 'Feb - Mar 2025', status:"resolved"},
        { id: 12, alertType: 'Investment Summary', userName: 'Piper Mills', date: 'Feb - Mar 2025', status:"resolved"},
        { id: 13, alertType: 'Investment Summary', userName: 'Piper Mills', date: 'Feb - Mar 2025', status:"resolved"},
        { id: 14, alertType: 'Investment Summary', userName: 'Piper Mills', date: 'Feb - Mar 2025', status:"resolved"},
        { id: 15, alertType: 'Investment Summary', userName: 'Piper Mills', date: 'Feb - Mar 2025', status:"resolved"}
       ];

      const router = useRouter()
      const totalCount = securityData.length
      const perPage = 5
      const totalPages = Math.ceil(totalCount / perPage)
     
      let page = currentPage || 1
      const [activePage,setActivePage] = useState(1)
    
      const start = (page - 1) * perPage
      const end = start + perPage
    
      const currentData = securityData .slice(start,end)

      const paginate = (num:number)=>{
        setActivePage(num)
        router.push(`/admindashboard/security?currentPage=${num}`)
      }
  return (
    <div>
      <div className="mt-6 mb-3 overflow-x-auto">
        <table className='w-[100%] max-w-[1100px]'>
            <thead className='bg-gray-50 dm-sans-500 text-[#4F5144] text-left'>
             <th className='font-normal text-sm py-[10px] pl-6'>Alert Type</th>
             <th className='font-normal text-sm py-[10px] pl-6'>User name</th>
             <th className='font-normal text-sm py-[10px] pl-6'>Date</th>
             <th className='font-normal text-sm py-[10px] pl-6'>Status</th>
             <th className='font-normal text-sm py-[10px] pl-6'> </th>
            </thead>
            <tbody className='text-[#4F5144]'>
            {currentData.map((item)=>(
            <tr key={item.id} className="hover:bg-gray-50 border-b border-gray-200">
                <td className='dm-sans-400 text-sm py-4 pl-6'>{item.alertType}</td>
                <td className='dm-sans-400 text-sm py-4 pl-6'>{item.userName}</td>
                <td className='dm-sans-400 text-sm py-4 pl-6'>{item.date}</td>
                <td className='dm-sans-400 text-sm py-4 pl-6'><span className={`${item.status === 'resolved' ? 'bg-[#ECFDF3]' : 'bg-[#FEF9C3]'} rounded-2xl text-xs capitalize px-3 py-[4px]`}>{item.status}</span></td>
                <td className='dm-sans-400 text-sm py-4 pl-6'><ActionBtn/></td>
            </tr> 
            ))}
            </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="my-3">
        <div className="flex justify-between items-center">
         <button 
          className="border px-3 py-[6px] rounded dm-sans-500 flex items-center gap-2 text-[#344054] text-sm border-gray-200"
          disabled={currentPage === 1 || page === 1}
          onClick={()=>
          { 
            page -= 1
            setActivePage(page)
            router.push(`/admindashboard/security?currentPage=${page}`)}}>
            <FaArrowLeft/> Previous
         </button>
         
          <div className="flex-1 flex justify-center">
            <div onClick={()=>paginate(1)} className={`${activePage === 1 && 'text-white bg-[#6B911B]'} w-8 h-8 rounded-md cursor-pointer flex justify-center items-center text=[#667085]`}><div >1</div></div>
            {totalPages >= 2 && <div onClick={()=>paginate(2) } className={`${activePage === 2 && 'text-white bg-[#6B911B]'} w-8 h-8 rounded-md cursor-pointer flex justify-center items-center text=[#667085]`}><div >2</div></div>}
            {totalPages >= 3 && <div onClick={()=>paginate(3) } className={`${activePage === 3 && 'text-white bg-[#6B911B]'} w-8 h-8 rounded-md cursor-pointer flex justify-center items-center text=[#667085]`}><div >3</div></div>}
            <span className="mx-2">...</span>
            {totalPages >= 4 && <div onClick={()=>paginate(totalPages - 2) } className={`${activePage === totalPages - 2 && 'text-white bg-[#6B911B]'} w-8 h-8 rounded-md cursor-pointer flex justify-center items-center text=[#667085]`}><div >{totalPages - 2}</div></div>}
            {totalPages >= 5 && <div onClick={()=>paginate(totalPages - 1) } className={`${activePage === totalPages - 1 && 'text-white bg-[#6B911B]'} w-8 h-8 rounded-md cursor-pointer flex justify-center items-center text=[#667085]`}><div >{totalPages - 1}</div></div>}
            {totalPages >= 6 && <div onClick={()=>paginate(totalPages) } className={`${activePage === totalPages && 'text-white bg-[#6B911B]'} w-8 h-8 rounded-md cursor-pointer flex justify-center items-center text=[#667085]`}><div >{totalPages}</div></div>}
            
          </div>

         <button 
         className="border px-3 py-[6px] rounded dm-sans-500 flex items-center gap-2 text-[#344054] text-sm border-gray-200"
          disabled={currentPage === totalPages}
          onClick={()=>
           { 
            page += 1
            setActivePage(page)
            router.push(`/admindashboard/security?currentPage=${page}`)}}>
              Next <FaArrowRight/>
         </button>
         </div>
      </div>
      {/* ----------- */}
    </div>
  )
}
