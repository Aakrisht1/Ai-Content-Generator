"use client"

import React, {useState} from 'react'
import { TEMPLATE } from '../../../_components/TemplateListSection'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Loader2Icon } from 'lucide-react'

interface PROPS {
  selectedTemplate?: TEMPLATE,
  userFormInput: any,
  loading: boolean
}

const FormSection = ({selectedTemplate, userFormInput, loading}: PROPS) => {

    const [formData, setFormData] = useState<any>()

    const handleInputChange = (event:any) => {
        const { name, value } = event.target
        setFormData({...formData, [name]: value })
    }

    const onSubmit = (e:any) => {
        e.preventDefault()
        userFormInput(formData)
    }

  return (
    <div className='p-5 shadow-md border rounded-lg bg-[#1b2431]'>
        {/* @ts-ignore */}
        <Image src={selectedTemplate?.icon} alt='logo' width={70} height={70} />
        <h2 className='font-bold text-2xl mb-2 text-white'>{selectedTemplate?.name}</h2>
        <p className='text-gray-400 text-sm'>{selectedTemplate?.desc}</p>

        <form className='mt-6'onSubmit={onSubmit}>
            {selectedTemplate?.form?.map((item, index) => (
                <div className='my-2 flex flex-col gap-2 mb-7'>
                    <label className='text-white font-semibold'>{item.label}</label>
                    {item.field =='input'?
                        <Input name={item.name} required={item?.required}
                        onChange={handleInputChange} className='text-white' />
                    : item.field == 'textarea'?
                        <Textarea name={item.name} required={item?.required}
                        onChange={handleInputChange} className='text-white' /> : null
                    }
                </div>
            ))}
            <Button type='submit' className='w-full py-6' disabled={loading}>
                {loading && <Loader2Icon className='animate-spin' />}
                Generate Content</Button>
        </form>
    </div>
  )
}

export default FormSection