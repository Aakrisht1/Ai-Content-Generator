import React from 'react'
import { TEMPLATE } from './TemplateListSection'
import Image from 'next/image'
import Link from 'next/link'

const TemplateCard = (item: TEMPLATE) => {
  return (
    <Link href={`/dashboard/content/${item.slug}`} className='w-full'>
    <div className='p-5 shadow-md rounded-md border bg-[#1b2431] flex-col gap-3 cursor-pointer hover:scale-105 transition-all'>
        <Image src={item.icon} alt='icon' width={50} height={50} />
        <h2 className='font-semibold text-md text-white'>{item.name}</h2>
        <p className='text-gray-400 line-clamp-3'>{item.desc}</p>
    </div>
    </Link>
  )
}

export default TemplateCard