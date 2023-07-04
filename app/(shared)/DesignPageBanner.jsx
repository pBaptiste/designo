import React from 'react'

const DesignPageBanner = ({ title, text, patterns }) => {
    return (
        <div className='relative bg-peach text-white flex flex-col items-center justify-center px-6 py-[6.563rem] md:py-16 mb-24 md:mb-[7.5rem] lg:mb-[10rem] md:mx-10 lg:mx-[10.313rem] md:rounded-[0.938rem]'>
            <div className={`${patterns} bg-no-repeat w-full h-full absolute`}></div>
            <h1 className='font-medium text-[2rem] md:text-5xl leading-9 md:leading-[3rem] text-center mb-6'>{title}</h1>
            <p className='text-[.938rem] md:text-base leading-[1.563rem] md:leading-[1.625rem] text-center max-w-[400px]'>{text}</p>
        </div>
    )
}

export default DesignPageBanner