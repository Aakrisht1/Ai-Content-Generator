"use client"

import React, { useState } from 'react'
import Header from './_components/Header';
import SideNav from './_components/SideNav';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import UpdateCreditUsageContext from '../(context)/UpdateCreditUsageContext';

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  const [totalUsage, setTotalUsage] = useState<Number>(0);
  const [updateCreditUsage, setUpdateCreditUsage] = useState<any>();

  return (
    <TotalUsageContext.Provider value={{totalUsage, setTotalUsage}}>
      <UpdateCreditUsageContext.Provider value={{updateCreditUsage, setUpdateCreditUsage}}>
    <div className='min-h-screen bg-gradient-to-b px-3 from-gray-800 to-black'>
        <div className='md:w-64 hidden md:block fixed'>
            <SideNav />
        </div>
        <div className='md:ml-64'>
            <Header />
            {children}
        </div>
    </div>
      </UpdateCreditUsageContext.Provider>
    </TotalUsageContext.Provider>
  )
}

export default layout