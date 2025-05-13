"use client"
import { useRouter} from "next/navigation";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { PiArrowLineUpRightThin } from "react-icons/pi";

export default function AuditTable({currentPage}:{currentPage:number}) {
    const securityData = [
        { id: 1, aactionTime: '3:32 AM', adminName: 'April Dave', date: 'Mar 2025', actionType:"approval",affectedUser:"mike"},
        { id: 2, aactionTime: '06:40 PM', adminName: 'Rice Black', date: 'Mar 2025', actionType:"rejection",affectedUser:"mike"},
        { id: 3, aactionTime: '3:32 AM', adminName: 'Cocoa Sheen', date: 'April - Mar 2025', actionType:"approval",affectedUser:"mike"},
        { id: 4, aactionTime: '07:09 AM', adminName: 'Suilat Nton', date: 'May - Mar 2025', actionType:"pending",affectedUser:"mike"},
        { id: 5, aactionTime: '3:32 AM', adminName: 'Adeolu Nelson', date: 'June - Mar 2025', actionType:"approval",affectedUser:"mike"},
        { id: 6, aactionTime: '3:32 AM', adminName: 'Bean Kyle', date: 'Feb 2025', actionType:"rejection",affectedUser:"anny"},
        { id: 7, aactionTime: '07:22 PM', adminName: 'Peter Cass', date: 'Dec - Mar 2025', actionType: "approval",affectedUser:"john doe"},
        { id: 8, aactionTime: '3:32 AM', adminName: 'Piper Mills', date: 'Feb - Mar 2025', actionType:"approval",affectedUser:"chris adams"},
        { id: 9, aactionTime: '4:30 PM', adminName: 'Piper Mills', date: 'Feb - Mar 2025', actionType:"approval",affectedUser:"chris adams"},
        { id: 10, aactionTime: '4:30 PM', adminName: 'Piper Mills', date: 'Feb - Mar 2025', actionType:"approval",affectedUser:"chris adams"},
        { id: 11, aactionTime: '4:30 PM', adminName: 'Piper Mills', date: 'Feb - Mar 2025', actionType:"approval",affectedUser:"chris adams"},
        { id: 12, aactionTime: '4:30 PM', adminName: 'Piper Mills', date: 'Feb - Mar 2025', actionType:"approval",affectedUser:"chris adams"},
        { id: 13, aactionTime: '4:30 PM', adminName: 'Piper Mills', date: 'Feb - Mar 2025', actionType:"suspension",affectedUser:"chris adams"},
        { id: 14, aactionTime: '4:30 PM', adminName: 'Piper Mills', date: 'Feb - Mar 2025', actionType:"suspension",affectedUser:"chris adams"},
        { id: 15, aactionTime: '03:08 AM', adminName: 'Piper Mills', date: 'Feb - Mar 2025', actionType:"suspension",affectedUser:"beke kames"},
        { id: 1, aactionTime: '03:08 AM', adminName: 'April Dave', date: 'Mar 2025', actionType:"suspension",affectedUser:"kunle mike"},
        { id: 2, aactionTime: '06:40 PM', adminName: 'Rice Black', date: 'Mar 2025', actionType:"rejection",affectedUser:"kunle mike"},
        { id: 3, aactionTime: '03:08 AM', adminName: 'Cocoa Sheen', date: 'April - Mar 2025', actionType:"suspension",affectedUser:"kunle mike"},
        { id: 4, aactionTime: '07:09 AM', adminName: 'Suilat Nton', date: 'May - Mar 2025', actionType:"rejection",affectedUser:"kunle mike"},
        { id: 5, aactionTime: '03:08 AM', adminName: 'Adeolu Nelson', date: 'June - Mar 2025', actionType:"suspension",affectedUser:"kunle mike"},
        { id: 6, aactionTime: '03:08 AM', adminName: 'Bean Kyle', date: 'Feb 2025', actionType:"rejection",affectedUser:"kunle mike"},
        { id: 7, aactionTime: '07:22 PM', adminName: 'Peter Cass', date: 'Dec - Mar 2025', actionType: "suspension",affectedUser:"efe miller"},
        { id: 8, aactionTime: '03:08 AM', adminName: 'Piper Mills', date: 'Feb - Mar 2025', actionType:"approval",affectedUser:"efe miller"},
        { id: 9, aactionTime: '03:08 AM', adminName: 'Piper Mills', date: 'Feb 2025', actionType:"approval",affectedUser:"efe miller"},
        { id: 10, aactionTime: '03:08 AM', adminName: 'Piper Mills', date: 'Feb 2025', actionType:"approval",affectedUser:"efe miller"},
        { id: 11, aactionTime: '03:08 AM', adminName: 'Piper Mills', date: 'Feb 2025', actionType:"approval",affectedUser:"efe miller"},
        { id: 12, aactionTime: '03:08 AM', adminName: 'Piper Mills', date: 'Feb 2025', actionType:"approval",affectedUser:"efe miller"},
        { id: 13, aactionTime: '03:08 AM', adminName: 'Piper Mills', date: 'Feb 2025', actionType:"approval",affectedUser:"efe miller"},
        { id: 14, aactionTime: '11:22 AM', adminName: 'Piper Mills', date: 'Feb 2025', actionType:"approval",affectedUser:"sammy lamul"},
        { id: 15, aactionTime: '11:22 AM', adminName: 'Piper Mills', date: 'Feb 2025', actionType:"rejection",affectedUser:"sammy lamul"},
        { id: 15, aactionTime: '11:22 AM', adminName: 'Piper Mills', date: 'Feb 2025', actionType:"rejection",affectedUser:"sammy lamul"},
        { id: 1, aactionTime: '11:22 AM', adminName: 'April Dave', date: 'Mar 2025', actionType:"rejection",affectedUser:"sammy lamul"},
        { id: 2, aactionTime: '06:40 PM', adminName: 'Rice Black', date: 'Mar 2025', actionType:"approval",affectedUser:"sammy lamul"},
        { id: 3, aactionTime: '11:22 AM', adminName: 'Cocoa Sheen', date: 'April - Mar 2025', actionType:"rejection",affectedUser:"sammy lamul"},
        { id: 4, aactionTime: '07:09 AM', adminName: 'Suilat Nton', date: 'May - Mar 2025', actionType:"rejection",affectedUser:"sammy lamul"},
        { id: 5, aactionTime: '11:22 AM', adminName: 'Adeolu Nelson', date: 'June - Mar 2025', actionType:"rejection",affectedUser:"james"},
        { id: 6, aactionTime: '11:22 AM', adminName: 'Bean Kyle', date: 'Feb 2025', actionType:"approval",affectedUser:"james"},
        { id: 7, aactionTime: '07:22 PM', adminName: 'Peter Cass', date: 'Dec - Mar 2025', actionType: "rejection",affectedUser:"timmy tomboro"},
        { id: 8, aactionTime: '11:22 AM', adminName: 'Piper Mills', date: 'Feb - Mar 2025', actionType:"suspesion",affectedUser:"samuel kane"},
        { id: 9, aactionTime: '11:22 AM', adminName: 'Piper Mills', date: 'Feb - Mar 2025', actionType:"suspesion",affectedUser:"samuel kane"},
        { id: 10, aactionTime: '11:22 AM', adminName: 'Piper Mills', date: 'Feb - Mar 2025', actionType:"suspesion",affectedUser:"samuel kane"},
        { id: 11, aactionTime: '12:00 PM', adminName: 'Piper Mills', date: 'Feb - Mar 2025', actionType:"suspesion",affectedUser:"samuel kane"},
        { id: 12, aactionTime: '12:00 PM', adminName: 'Piper Mills', date: 'Feb - Mar 2025', actionType:"suspesion",affectedUser:"samuel kane"},
        { id: 13, aactionTime: '12:00 PM', adminName: 'Piper Mills', date: 'Feb - Mar 2025', actionType:"suspesion",affectedUser:"samuel kane"},
        { id: 14, aactionTime: '12:00 PM', adminName: 'Piper Mills', date: 'Feb - Mar 2025', actionType:"suspesion",affectedUser:"samuel kane"},
        { id: 15, aactionTime: '12:00 PM', adminName: 'Piper Mills', date: 'Feb - Mar 2025', actionType:"suspesion",affectedUser:"samuel kane"}
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
        router.push(`/admindashboard/audit?currentPage=${num}`)
      }
  return (
    <div>
      <div className="mt-6 mb-3 overflow-x-auto">
        <table className='w-[100%] max-w-[1100px] border-spacing-4 border-separate'>
            <thead className='dm-sans-500 text-[#4F5144] text-left'>
                <tr>
                    <th className='font-normal text-sm py-[10px] pl-6 bg-[#FCFCFC] border-b border-gray-100'>DATE</th>
                    <th className='font-normal text-sm py-[10px] pl-6 bg-[#FCFCFC] border-b border-gray-100'>TIME OF ACTION</th>
                    <th className='font-normal text-sm py-[10px] pl-6'>ADMIN NAME</th>
                    <th className='font-normal text-sm py-[10px] pl-6 bg-[#FCFCFC] border-b border-gray-100'>ACTION TYPE</th>
                    <th className='font-normal text-sm py-[10px] pl-6'>AFFECTED USER</th>
                    <th className='font-normal text-sm py-[10px] pl-6 bg-[#FCFCFC] border-b border-gray-100'> </th> 
                </tr>

            </thead>
            <tbody className='text-[#4F5144]'>
            {currentData.map((item)=>(
            <tr key={item.id} className="hover:bg-gray-50">
                <td className='dm-sans-400 text-sm py-4 pl-6 border-b border-gray-100'>{item.date}</td>
                <td className='dm-sans-400 text-sm py-4 pl-6 border-b border-gray-100'>{item.aactionTime}</td>
                <td className='dm-sans-400 text-sm py-4 pl-6 border-b border-gray-100'>{item.adminName}</td>
                <td className='dm-sans-400 text-sm py-4 pl-6 border-b border-gray-100'><span className={`${item.actionType === 'approval' ? 'bg-[#ECFDF3]' : 'bg-[#FEF9C3]'} rounded-2xl text-xs capitalize px-3 py-[4px]`}>{item.actionType}</span></td>
                <td className='dm-sans-400 text-sm py-4 pl-6 border-b border-gray-100'>{item.affectedUser}</td>
                <td className='dm-sans-400 text-sm py-4 pl-6 border-b border-gray-100'><PiArrowLineUpRightThin size={20} /></td>
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
            router.push(`/admindashboard/audit?currentPage=${page}`)}}>
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
            router.push(`/admindashboard/audit?currentPage=${page}`)}}>
              Next <FaArrowRight/>
         </button>
         </div>
      </div>
      {/* ----------- */}
    </div>
  )
}
