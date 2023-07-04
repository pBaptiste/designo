import React from 'react'
import AboutInfoCard from './(about)/AboutInfoCard'
import ContactLinkCard from '../(shared)/ContactLinkCard'
import CallToAction from '../(shared)/CallToAction'

const About = () => {
    return (
        <main className='flex flex-col md:px-10 xl:px-[165px]'>
            <section className='flex flex-col md:items-center md:mb-[120px]'>
                <AboutInfoCard
                    bgImg='bg-sm-about-hero md:bg-md-about-hero xl:bg-lg-about-hero xl:h-[480px] md:rounded-t-[15px] xl:rounded-tl-none xl:rounded-r-[15px] xl:order-2'
                    textContainerStyle='bg-peach md:rounded-b-[15px] xl:rounded-br-none xl:rounded-l-[15px]'
                    bgPattern='bg-sm-pattern-hero-about md:bg-lg-pattern-hero-about bg-about-mobile-1 md:bg-about-tablet-1 xl:bg-bottom'
                    title='About Us'
                    titleStyle='text-white text-[2rem] md:text-5xl leading-9 md:leading-[3rem]'
                    text="Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences."
                    textStyle='text-white'
                />
            </section>

            <section className='flex flex-col md:items-center md:mb-[120px]'>
                <AboutInfoCard
                    bgImg='bg-sm-about-talent md:bg-md-about-talent xl:bg-lg-about-talent xl:h-[640px] md:rounded-t-[15px] xl:rounded-tr-none xl:rounded-l-[15px]'
                    textContainerStyle='bg-[#FDF3F0] md:rounded-b-[15px] xl:rounded-bl-none xl:rounded-r-[15px]'
                    bgPattern='bg-sm-pattern-hero-about bg-about-mobile-2 md:bg-about-tablet-2 xl:bg-about-desktop-2 opacity-[.3]'
                    title='World-class talent'
                    titleStyle='text-peach text-[2rem] leading-[2.25rem] md:text-[2.5rem] md:leading-[3rem]'
                    text={
                        <>
                            We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.
                            <br /><br />
                            Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulate their brand’s story and mission.
                        </>
                    }
                    textStyle='text-dark-grey'
                />
            </section>

            <section className='py-[120px] md:pt-0 md:pb-[160px] w-full flex flex-col xl:flex-row gap-12 md:gap-20 xl:gap-0 xl:justify-between'>
                <ContactLinkCard
                    src='/assets/shared/desktop/illustration-canada.svg'
                    alt='illustration representing Canada '
                    bgStyle='matrix_2'
                    title='Canada'
                    link='/locations' />
                <ContactLinkCard
                    src='/assets/shared/desktop/illustration-australia.svg'
                    alt='illustration representing Canada '
                    bgStyle=''
                    title='Australia'
                    link='/locations' />
                <ContactLinkCard
                    src='/assets/shared/desktop/illustration-united-kingdom.svg'
                    alt='illustration representing Canada '
                    bgStyle='matrix_3'
                    title='United Kingdom'
                    link='/locations' />
            </section>

            <section className='flex flex-col md:items-center md:mb-[160px]'>
                <AboutInfoCard
                    bgImg='bg-sm-about-real-deal md:bg-md-about-real-deal xl:bg-lg-about-real-deal xl:h-[640px] md:rounded-t-[15px] xl:rounded-tl-none xl:rounded-r-[15px] xl:order-2'
                    textContainerStyle='bg-[#FDF3F0] md:rounded-b-[15px] xl:rounded-br-none xl:rounded-l-[15px]'
                    bgPattern='bg-sm-pattern-hero-about bg-about-mobile-2 md:bg-about-tablet-2 xl:bg-about-desktop-2 opacity-[.3]'
                    title='The real deal'
                    titleStyle='text-peach text-[2rem] leading-[2.25rem] md:text-[2.5rem] md:leading-[3rem]'
                    text={
                        <>
                            As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.
                            <br /><br />
                            We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.
                        </>
                    }
                    textStyle='text-dark-grey'
                />
            </section>

            <section className='relative px-6 md:px-0 top-[189px] md:top-[80px] lg:top-[90px]'>
                <CallToAction />
            </section>

        </main>
    )
}

export default About