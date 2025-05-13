"use client"
import Image from 'next/image'

export default function FilterBtn() {
  return (
    <div className='relative cursor-pointer'>
       <Image src="/instant_mix.svg" alt="" width={15} height={15}/>
    </div>
  )
}
