import React from 'react'
import Image from 'next/image'

const DesignProjectCard = ({ src, title, text }) => {
    return (
        <div className='flex flex-col md:flex-row lg:flex-col group w-[327px] md:w-[689px] h-[478px] md:h-[310px] lg:w-[350px] lg:h-[478px] rounded-[15px] cursor-pointer'>
            <div className='relative w-[327px] h-[320px] md:w-[339px] md:h-[310px] lg:w-[350px] lg:h-[320px]'>
                <Image
                    className='rounded-t-[15px] md:rounded-tr-none md:rounded-l-[15px] lg:rounded-l-none lg:rounded-t-[15px]'
                    src={src}
                    alt="card"
                    fill />
            </div>
            <div className='flex flex-col justify-center bg-[#FDF3F0] group-hover:bg-peach rounded-b-[15px] md:rounded-b-none md:rounded-r-[15px] lg:rounded-tr-none lg:rounded-b-[15px] py-8 px-[30px] md:pl-8 md:pr-10'>
                <h2 className='font-medium text-[1.25rem] text-center group-hover:text-white text-peach leading-[1.625rem] tracking-[5px] mb-4 uppercase'>{title}</h2>
                <p className='text-base text-center text-dark-grey group-hover:text-white leading-[1.625rem] md:max-w-[277px]'>{text}</p>
            </div>
        </div>
    )
}

export default DesignProjectCard
