import { UserProfile } from '@clerk/nextjs'
import React from 'react'

const Settings = () => {
  return (
    <div className='flex items-center justify-center h-full'>
        <UserProfile />
    </div>
  )
}

export default Settings