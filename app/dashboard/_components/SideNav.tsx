"use client"

import { FileClock, Home, Menu, Settings, WalletCards } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import Link from 'next/link'
import UsageTrack from './UsageTrack'

const SideNav = () => {

    const MenuList = [
        {
            name: 'Home',
            icon: Home,
            path: '/dashboard',
        },
        {
            name: 'History',
            icon: FileClock,
            path: '/dashboard/history',
        },
        {
            name: 'Billing',
            icon: WalletCards,
            path: '/dashboard/billing',
        },
        {
            name: 'Settings',
            icon: Settings,
            path: '/dashboard/settings',
        },
    ]

    const path = usePathname();
    useEffect(() => {
        console.log(path)
    }, [])

  return (
    <div className='h-screen p-5 shadow-xl border-r border-gray-700 text-white bg-transparent'>
        <div className='flex justify-center'>
            <Image src="/logo.svg" alt="Logo" width={120} height={100} />
        </div>
        <hr className='my-6 border' />
        <div className='mt-3'>
            {MenuList.map((menu, index) => (
                <Link href={menu.path} className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center ${path == menu.path && 'bg-primary text-white'}`} key={index}>
                    <menu.icon className='w-6 h-6' />
                    <h2 className='text-lg'>{menu.name}</h2>
                </Link>
            ))}
        </div>
        <div className="absolute bottom-10 left-0 w-full">
            <UsageTrack />
        </div>
    </div>
  )
}

export default SideNav