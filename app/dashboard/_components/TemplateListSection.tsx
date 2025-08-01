"use client"

import React, { useEffect, useState } from 'react'
import Templates from '@/app/(data)/Templates'
import TemplateCard from './TemplateCard'

export interface TEMPLATE {
    name: string,
    desc: string,
    category: string,
    icon: string,
    slug: string,
    aiPrompt: string,
    form?: FORM[]
}

export interface FORM {
    label: string,
    field: string,
    name: string,
    required?: boolean
}

const TemplateListSection = ({userSearchInput}: any) => {

    const [templateList, setTemplateList] = useState(Templates)

    useEffect(() => {
        if(userSearchInput){
            const filterData = Templates.filter(item => 
                item.name.toLowerCase().includes(userSearchInput.toLowerCase())
            )
            setTemplateList(filterData)
        }
        else {
            setTemplateList(Templates)
        }
    }, [userSearchInput])

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10'>
        {templateList.map((item:TEMPLATE, index:number) => (
            <TemplateCard key={item.slug || index} {...item} />
        ))}
    </div>
  )
}

export default TemplateListSection