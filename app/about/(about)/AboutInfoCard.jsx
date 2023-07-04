import React from 'react'

const AboutInfoCard = ({ bgImg, textContainerStyle, bgPattern, title, titleStyle, text, textStyle }) => {
    return (
        <div className='flex flex-col xl:flex-row w-full md:max-w-[689px] xl:max-w-[1111px] md:rounded-[15px]'>
            <div className={`${bgImg} bg-no-repeat bg-cover w-full h-[320px] xl:w-[476px] xl:flex-none`}></div>
            <div className={`relative overflow-hidden ${textContainerStyle} flex flex-col items-center xl:items-start justify-center px-6 md:px-[58px] xl:pl-[95px] xl:pr-[82px] py-20 md:py-16`}>
                <div className={`absolute top-0 left-0 w-full h-full ${bgPattern} bg-no-repeat`}></div>
                <h2 className={`${titleStyle} font-medium text-center xl:text-left mb-6 md:mb-8 z-20`}>
                    {title}
                </h2>
                <p className={`${textStyle} text-[.938rem] md:text-base leading-[1.563rem] md:leading-[1.625rem] text-center xl:text-left md:max-w-[573px] xl:max-w-[445px] z-20`}>
                    {text}
                </p>
            </div>
        </div>
    )
}

export default AboutInfoCard