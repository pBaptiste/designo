import React from 'react'
import CustomBtn from './CustomBtn'
import Image from 'next/image'

const ContactLinkCard = ({ src, alt, bgStyle, title, link }) => {
    return (
        <div className='flex flex-col gap-12 items-center'>
            <div className='relative'>
                <div className={`bg-small-circle-pattern bg-no-repeat w-full h-full absolute ${bgStyle} z-[-10]`}></div>
                <Image
                    src={src}
                    alt={alt}
                    width={202}
                    height={202} />
            </div>

            <div className='flex flex-col items-center'>
                <h2 className='mb-8 font-medium leading-[1.625rem] tracking-[5px] text-center text-dark-grey uppercase'>{title}</h2>
                <CustomBtn styles='bg-peach text-white hover:bg-light-peach' text='See Location' link={link} />
            </div>

        </div>
    )
}

export default ContactLinkCard