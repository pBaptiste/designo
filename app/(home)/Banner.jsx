import React from 'react'
import CustomBtn from '../(shared)/CustomBtn'
import Image from 'next/image'

const Banner = () => {
    return (
        <section className='relative px-6 md:px-[58px] xl:pl-[95px] pt-20 md:pt-[3.75rem] pb-[451px] xl:py-[145px] bg-peach flex flex-col items-center xl:items-start lg:rounded-[15px] overflow-hidden bg-hero-img bg-no-repeat bg-center-bottom xl:bg-top-right'>
            <div className='absolute w-full h-full top-0 left-0 bg-hero-pattern bg-no-repeat bg-hero-mobile md:bg-hero-tablet xl:bg-hero-desktop z-10'>
            </div>
            <h1 className='font-medium text-[2rem] md:text-5xl leading-9 md:leading-[3rem] text-center xl:text-left text-white mb-[0.875rem] xl:mb-7 md:mb-2 max-w-[327px] md:max-w-[573px] xl:w-[50%] z-20'>Award-winning custom designs and digital branding solutions</h1>
            <p className='text-[0.938rem] md:text-base leading-[1.563rem] md:leading-[1.625rem] text-center xl:text-left text-white mb-6 md:mb-[1.188rem] xl:mb-10 max-w-[327px] md:max-w-[445px] xl:w-[50%] z-20'>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
            <CustomBtn styles='bg-white  hover:bg-light-peach text-dark-grey hover:text-white z-20' text='Learn more' link='/about' />
        </section>
    )
}

export default Banner