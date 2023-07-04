import React from 'react'
import Image from 'next/image'

const LocationInfoCard = ({ bgImg, location, officeName, street, address, contactTitle, phone, email, }) => {
    return (
        <div className='flex flex-col xl:flex-row md:gap-[30px] md:w-[689px] xl:w-full'>
            <div className={`${bgImg} bg-no-repeat bg-cover w-full h-[320px] xl:w-[350px] xl:h-[326px] md:rounded-[15px] xl:flex-none`}>
            </div>

            <div className='relative bg-[#FDF3F0] text-center md:text-left text-dark-grey py-20 md:py-[5.5rem] md:px-[4.625rem] xl:pl-[95px] xl:pr-0 md:rounded-[0.938rem] xl:basis-full'>
                <div className='absolute top-0 left-0 w-full h-full bg-three-circle-pattern bg-no-repeat md:bg-location-tablet xl:bg-location-desktop'></div>
                <h2 className='font-medium text-peach text-[2rem] md:text-[2.5rem] leading-9 md:leading-[3rem] mb-6 z-10'>{location}</h2>

                <div className='flex flex-col md:flex-row gap-6 md:gap-32 text-[.938rem] md:text-base leading-[1.563rem] md:leading-[1.625rem] z-10'>
                    <div className=''>
                        <p className='font-bold'>{officeName}</p>
                        <p>{street}</p>
                        <p>{address}</p>
                    </div>

                    <div className=''>
                        <p className='font-bold'>{contactTitle}</p>
                        <p>{phone}</p>
                        <p>{email}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LocationInfoCard