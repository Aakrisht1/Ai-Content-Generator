import { Search } from 'lucide-react'
import React from 'react'

const SearchSection = ({onSearchInput}: any) => {
  return (
    <div className='p-10 bg-transparent text-white flex-col items-center justify-center text-center'>
        <h2 className='text-3xl font-bold'>Browse All Templates</h2>
        <p>What would you like to create today?</p>
        <div className='w-full flex justify-center'>
            <div className='flex gap-2 items-center p-2 border rounded-md bg-white my-5 w-[50%]'>
                <Search className='text-primary' />
                <input type="text" placeholder='Search templates...'
                onChange={(event) => onSearchInput(event.target.value)} className='bg-transparent w-full outline-none text-black' />
            </div>
        </div>
    </div>
  )
}

export default SearchSection