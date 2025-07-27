import React from 'react'
import { Search } from 'lucide-react'
import { UserButton } from '@clerk/nextjs'

const Header = () => {
  return (
    <div className='p-5 ml-3 pb-7 items-center shadow-sm border-b-1 flex justify-between bg-[rgb(16, 24, 40)]'>
        <div className='flex gap-2 items-center p-2 shadow-sm border rounded-md max-w-lg'>
            <Search className='text-white' />
            <input type="text" placeholder='Search...' className='outline-none text-white' />
        </div>
        <div className='flex gap-5 items-center'>
            <h2 className='bg-primary p-1 rounded-full text-xs text-white px-2'>🔥 Join Membership just for $9.99/month</h2>
          <UserButton />
        </div>
    </div>
  )
}

export default Header