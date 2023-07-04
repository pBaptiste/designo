import React from 'react'
import Link from 'next/link'

const ProjectLink = ({ title, text, link, bgImg }) => {
    return (
        <div className={`group ${bgImg} py-[5.625rem] md:py-[3.313rem] lg:py-[6.688rem] rounded-[0.938rem] flex flex-col gap-3 md:gap-6 items-center lg:justify-center bg-no-repeat bg-cover relative`}>
            <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 group-hover:bg-peach group-hover:bg-opacity-50 rounded-[0.938rem] '></div>

            <h2 className='font-medium text-white text-[1.75rem] md:text-[2.5rem] leading-9 text-center tracking-[1.4px] z-20'>{title}</h2>
            <Link href={link} className='flex items-center cursor-pointer'>
                <p className='font-medium text-white text-[.938rem] tracking-[5px] uppercase mr-[22px] z-20'>{text} </p>
                <span className='fill-[#E7816B]'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"> Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.
                        <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                    </svg>
                </span>
            </Link>

        </div>
    )
}

export default ProjectLink