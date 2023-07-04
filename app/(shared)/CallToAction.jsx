import React from 'react'
import CustomBtn from './CustomBtn'

const CallToAction = () => {
    //mx-6 md:mx-10 lg:mx-0
    return (
        <div className={`bg-peach flex flex-col lg:flex-row items-center lg:gap-6 lg:justify-between px-6 md:px-[150px] lg:px-[6rem] py-16 md:py-[3.563rem] rounded-[0.938rem] bg-call-to-action bg-center`}>
            <div className='flex flex-col items-center lg:items-start'>
                <h2 className='font-medium text-[2rem] md:text-[2.5rem] text-center lg:text-left text-white leading-9 md:leading-10 mb-[6px] md:mb-4 max-w-[279px] md:max-w-[335px]'>Let’s talk about your project</h2>
                <p className='text-[.938rem] md:text-base leading-[1.563rem] md:leading-[1.625rem] text-center lg:text-left text-white mb-8 max-w-[279px] md:max-w-[457px]'>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
            </div>

            <CustomBtn styles='bg-white flex-none hover:bg-light-peach text-dark-grey hover:text-white' text='Get In Touch' link='/contact' />

        </div>
    )
}

export default CallToAction