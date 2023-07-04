import React from 'react'
import Image from 'next/image'

const Illustration = ({ src, alt, styles, title, text }) => {
    return (
        <div className='flex flex-col md:flex-row lg:flex-col md:gap-12 items-center'>
            <div className='mb-12 md:mb-0 lg:mb-12 relative'>
                <div className={`bg-small-circle-pattern bg-no-repeat w-full h-full absolute ${styles} z-[-10]`}></div>
                <Image className='z-20'
                    src={src}
                    alt={alt}
                    width={202}
                    height={202} />
            </div>

            <div>
                <h2 className='font-medium text-[1.25rem] text-dark-grey leading-[1.625rem] text-center md:text-left lg:text-center tracking-[5px] mb-8 md:mb-4 lg:mb-8'>{title}</h2>
                <p className='text-base leading-[1.625rem] text-center md:text-left lg:text-center text-dark-grey max-w-[327px] md:max-w-[439px] lg:max-w-[350px]'>{text}</p>
            </div>
        </div>
    )
}

export default Illustration