import React from 'react'
import FilterBtn from '@/app/components/FilterBtn';
import { BiSearch } from 'react-icons/bi';
import Form from 'next/form'

export default function SearchForm() {
  return (
    <Form action="/" scroll={false} className='flex border items-center px-4  border-gray-200 rounded w-full'>
        <BiSearch className='mr-2 size-6 text-[#00000080]'/>
        <input name='query' className='flex-1 text-xs border-0 py-2 text-[#00000080] focus:outline-0' placeholder='Search...'/>
        {/* Filter btn */}
        <FilterBtn/>
        {/* ---------- */}
    </Form>
  )
}
