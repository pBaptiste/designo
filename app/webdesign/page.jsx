import React from 'react'
import DesignPageBanner from '../(shared)/DesignPageBanner'
import DesignProjectCard from '../(shared)/DesignProjectCard'
import ProjectLink from '../(shared)/ProjectLink'
import CallToAction from '../(shared)/CallToAction'

const WebDesign = () => {
    return (
        <main className='relative min-h-screen'>
            <DesignPageBanner
                title='Web Design'
                text='We build websites that serve as powerful marketing tools and bring memorable brand experiences.'
                patterns='bg-web-intro-pattern bg-top-left md:bg-right lg:rotate-[-180] z-[10]' />

            <section className='mx-6 lg:mx-[165px] items-center flex flex-col lg:flex-row lg:flex-wrap lg:justify-start gap-10 lg:gap-x-[20px] lg:gap-y-8 md:gap-8 mb-24 md:mb-[120px] lg:mb-[160px]'>
                <DesignProjectCard src='/assets/web-design/desktop/image-express.jpg' title='EXPRESS' text="A multi-carrier shipping website for ecommerce businesses" />
                <DesignProjectCard src='/assets/web-design/desktop/image-transfer.jpg' title='TRANSFER' text='Site for low-cost money transfers and sending money within seconds' />
                <DesignProjectCard src='/assets/web-design/desktop/image-photon.jpg' title='PHOTON' text='A state-of-the-art music player with high-resolution audio and DSP effects' />

                <DesignProjectCard src='/assets/web-design/desktop/image-builder.jpg' title='BUILDER' text="Connects users with local contractors based on their location" />
                <DesignProjectCard src='/assets/web-design/desktop/image-blogr.jpg' title='BLOGR' text='Blogr is a platform for creating an online blog or publication' />
                <DesignProjectCard src='/assets/web-design/desktop/image-camp.jpg' title='CAMP' text='Get expert training in coding, data, design, and digital marketing' />
            </section>

            <section className='px-6 md:px-10 lg:px-[165px] my-[96px] md:my-[120px] lg:my-[160px] grid gap-6 lg:grid-cols-2'>
                <ProjectLink title="GRAPHIC DESIGN" text="VIEW PROJECTS" link='/graphicdesign' bgImg='bg-sm-graphic md:bg-md-graphic lg:bg-lg-graphic' />
                <ProjectLink title="APP DESIGN" text="VIEW PROJECTS" link='/appdesign' bgImg='bg-sm-app md:bg-md-app lg:bg-lg-app' />
            </section>

            <section className='relative px-6 md:px-10 xl:px-[165px] top-[189px] md:top-[80px] lg:top-[90px]'>
                <CallToAction />
            </section>

        </main>
    )
}

export default WebDesign