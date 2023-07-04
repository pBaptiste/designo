"use client"
import React, { useState } from 'react'
import Image from 'next/image'

const ContactForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [isEmpty, setIsEmpty] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name.trim() || !email.trim() || !phone.trim() || !message.trim()) {
            setIsEmpty(true)
        }
        else {
            //form submittion
        }
    }

    return (
        <form onSubmit={handleSubmit}
            className='flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-[5.938rem] px-6 md:px-[58px] lg:px-24 py-[72px] lg:py-[55px] md:rounded-[15px] bg-peach text-white md:mt-16 md:max-w-[689px] lg:max-w-[1111px] bg-sm-pattern-contact md:bg-lg-pattern-contact bg-no-repeat bg-contact-mobile md:bg-contact-tablet lg:bg-contact-desktop'>

            <div className='text-center md:text-left '>
                <h2 className='font-medium text-[2rem] md:text-5xl leading-9 md:leading-[3rem] mb-6 md:mb-8'>Contact Us</h2>
                <p className='text-[.938rem] md:text-base leading-[1.563rem] md:leading-[1.625rem] md:max-w-[573px] lg:max-w-[445px] lg:min-w-[280px]'>Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</p>
            </div>

            <div className='pr-1 lg:w-[380px] lg:flex-none'>

                <div className='flex justify-between border-b active:border-b-[3px] hover:border-b-[3px] mb-7'>
                    <input
                        className='pl-4 pb-[11px] bg-transparent placeholder:text-white placeholder:text-opacity-50 text-[.938rem] leading-[1.563rem] grow cursor-pointer outline-none'
                        placeholder='Name'
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        type="text" />
                    {isEmpty && !name.trim() &&
                        <p className='flex items-center gap-2 text-[.75rem] leading-[1.625rem] italic mb-[11px]'>Can’t be empty
                            <span>
                                <Image
                                    src='/assets/contact/desktop/icon-error.svg'
                                    alt='error icon'
                                    width={20}
                                    height={20} />
                            </span></p>
                    }
                </div>

                <div className='flex justify-between border-b active:border-b-[3px] hover:border-b-[3px] mb-7'>
                    <input
                        className='pl-4 pb-[11px] bg-transparent placeholder:text-white placeholder:text-opacity-50 text-[.938rem] leading-[1.563rem] grow cursor-pointer outline-none'
                        placeholder='Email Address'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        type="email" />
                    {isEmpty && !email.trim() &&
                        <p className='flex items-center gap-2 text-[.75rem] leading-[1.625rem] italic mb-[11px]'>Can’t be empty<span><Image
                            src='/assets/contact/desktop/icon-error.svg'
                            alt='error icon'
                            width={20}
                            height={20} /></span></p>
                    }
                </div>

                <div className='flex justify-between border-b active:border-b-[3px] hover:border-b-[3px] mb-7'>
                    <input
                        className='pl-4 pb-[11px] bg-transparent placeholder:text-white placeholder:text-opacity-50 text-[.938rem] leading-[1.563rem] grow cursor-pointer outline-none'
                        placeholder='Phone'
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                        type='tel' />
                    {isEmpty && !phone.trim() &&
                        <p className='flex items-center gap-2 text-[.75rem] leading-[1.625rem] italic mb-[11px]'>Can’t be empty<span><Image
                            src='/assets/contact/desktop/icon-error.svg'
                            alt='error icon'
                            width={20}
                            height={20} /></span></p>
                    }
                </div>

                <div className='flex justify-between border-b active:border-b-[3px] hover:border-b-[3px]'>
                    <textarea name="" id=""
                        className='resize-none pl-4 pb-[75px] bg-transparent placeholder:text-white placeholder:text-opacity-50 text-[.938rem] leading-[1.563rem] grow cursor-pointer outline-none'
                        placeholder='Message'
                        value={message}
                        onChange={(event) => setMessage(event.target.value)} ></textarea>
                    {isEmpty && !message.trim() &&
                        <p className='flex items-center gap-2 text-[.75rem] leading-[1.625rem] italic'>Can’t be empty<span><Image
                            src='/assets/contact/desktop/icon-error.svg'
                            alt='error icon'
                            width={20}
                            height={20} /></span></p>
                    }
                </div>

                <div className='flex justify-center md:justify-end pt-10 md:pt-6'>
                    <button className='bg-white hover:bg-light-peach rounded-lg pt-[1.125rem] pb-4 pl-12 pr-[2.938rem] text-medium text-[0.938rem] text-dark-grey hover:text-white tracking-[1px] uppercase'>SUBMIT</button>
                </div>
            </div>
        </form>
    )
}

export default ContactForm