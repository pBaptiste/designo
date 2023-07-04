"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev)
    }

    return (
        <header>
            <nav className='relative bg-white px-6 md:px-10 lg:px-[165px] pt-[35px] pb-[34px] md:py-16 lg:py-[71px] flex justify-between items-center z-50'>
                {/* Logo */}
                <Link href='/'>
                    <Image
                        src='/assets/shared/desktop/logo-dark.png'
                        alt='light background logo'
                        width={202}
                        height={27} />
                </Link>

                {/* Mobile Menu Button */}
                <button className='relative md:hidden' onClick={toggleMenu}>
                    {
                        isMenuOpen

                            ?
                            <Image
                                src='/assets/shared/mobile/icon-close.svg'
                                alt='hamburger icon'
                                width={20}
                                height={20}
                            />
                            :

                            <Image
                                src='/assets/shared/mobile/icon-hamburger.svg'
                                alt='hamburger icon'
                                width={24}
                                height={20}
                            />
                    }
                </button>
                {/* Mobile Menu */}
                {isMenuOpen && <>
                    <div className='absolute top-24 left-0 px-6 py-12 bg-custom-black text-white flex flex-col gap-8 w-full z-20'>
                        <Link href='/about' onClick={toggleMenu} className='text-2xl leading-8 tracking-[0.125rem] uppercase'>Our Company</Link>
                        <Link href='/locations' onClick={toggleMenu} className='text-2xl leading-8 tracking-[0.125rem] uppercase'>Locations</Link>
                        <Link href='/contact' onClick={toggleMenu} className='text-2xl leading-8 tracking-[0.125rem] uppercase'>Contact</Link>
                    </div>

                </>
                }

                {/* Page Links */}
                <ul className='hidden md:flex gap-[42px]'>
                    <li><Link href='/about' className='text-dark-grey text-[0.875rem] leading-[0.875rem] tracking-[0.125rem] uppercase cursor-pointer hover:underline'>Our Company</Link></li>
                    <li><Link href='/locations' className='text-dark-grey text-[0.875rem] leading-[0.875rem] tracking-[0.125rem] uppercase cursor-pointer hover:underline'>Locations</Link></li>
                    <li><Link href='/contact' className='text-dark-grey text-[0.875rem] leading-[0.875rem] tracking-[0.125rem] uppercase cursor-pointer hover:underline'>Contact</Link></li>
                </ul>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMenuOpen &&
                <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10'></div>
            }
        </header >
    )
}

export default Navbar