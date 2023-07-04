import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SocialLinks from './SocialLinks'

const Footer = () => {
    //pt-16 md:pt-20 lg:pt-[72px]
    //pt-[253px] md:pt-[166px] lg:pt-[144px]
    return (
        <footer className='flex flex-col bg-custom-black px-6 md:px-[39px] lg:px-[165px] pt-[253px] md:pt-[166px] lg:pt-[144px]  pb-16'>

            <div className='flex flex-col md:flex-row gap-8 md:gap-10 items-center mb-10 justify-between w-full'>
                <div className='w-[202px] cursor-pointer'>
                    <Link href='/'>
                        <Image
                            src='/assets/shared/desktop/logo-light.png'
                            alt="dark background logo"
                            width={202}
                            height={27} />
                    </Link>
                </div>

                <div className='w-full md:hidden border-t border-white border-opacity-10'></div>

                <ul className='flex flex-col md:flex-row gap-8 md:gap-12 items-center'>
                    <li><Link href='/about' className='text-white text-[0.875rem] leading-[0.875rem] tracking-[0.125rem] uppercase cursor-pointer hover:underline'>Our Company</Link></li>
                    <li><Link href='/locations' className='text-white text-[0.875rem] leading-[0.875rem] tracking-[0.125rem] uppercase cursor-pointer hover:underline'>Locations</Link></li>
                    <li><Link href='/contact' className='text-white text-[0.875rem] leading-[0.875rem] tracking-[0.125rem] uppercase cursor-pointer hover:underline'>Contact</Link></li>
                </ul>
            </div>

            <div className='hidden md:block w-full border-t border-white border-opacity-10 mb-[31px]'></div>

            <div className='flex flex-col md:flex-row items-center gap-10 md:gap-0 md:justify-between text-white text-opacity-50 text-center md:text-left'>
                <div className='lg:mr-6'>
                    <p className='font-bold leading-[1.625rem]'>Designo Central Office</p>
                    <p className='leading-[1.625rem]'>3886 Wellington Street</p>
                    <p className='leading-[1.625rem]'>Toronto, Ontario M9C 3J5</p>
                </div>

                <div>
                    <p className='font-bold'>Contact Us (Central Office)</p>
                    <p className='leading-[1.625rem]'>P : +1 253-863-8967</p>
                    <p className='leading-[1.625rem]'>M : contact@designo.co</p>
                </div>

                <div className='md:self-end lg:ml-[197px]'>
                    {/* <SocialLink link='facebook.com' src='/assets/shared/desktop/icon-facebook.svg' w={24} h={24} /> */}
                    <SocialLinks />
                </div>
            </div>

        </footer>
    )
}

export default Footer