import React from 'react'
import DesignPageBanner from '../(shared)/DesignPageBanner'
import DesignProjectCard from '../(shared)/DesignProjectCard'
import ProjectLink from '../(shared)/ProjectLink'
import CallToAction from '../(shared)/CallToAction'

const GraphicDesign = () => {
    return (
        <main className='relative min-h-screen'>
            <DesignPageBanner
                title='Graphic Design'
                text='We deliver eye-catching branding materials that are tailored to meet your business objectives.'
                patterns='bg-graphic-intro-pattern bg-top-left md:bg-right lg:bg-left md:rotate-180 lg:scale-x-[-1] md:rotate-[-180] z-[10]' />

            <section className='mx-6 lg:mx-[165px] items-center flex flex-col lg:flex-row lg:flex-wrap lg:justify-start gap-10 lg:gap-x-[20px] lg:gap-y-8 md:gap-8 mb-24 md:mb-[120px] lg:mb-[160px]'>
                <DesignProjectCard src='/assets/graphic-design/desktop/image-change.jpg' title='TIM BROWN' text="A book cover designed for Tim Brown’s new release, ‘Change’" />
                <DesignProjectCard src='/assets/graphic-design/desktop/image-boxed-water.jpg' title='BOXED WATER' text='A simple packaging concept made for Boxed Water' />
                <DesignProjectCard src='/assets/graphic-design/desktop/image-science.jpg' title='SCIENCE!' text='A poster made in collaboration with the Federal Art Project' />
            </section>

            <section className='px-6 md:px-10 lg:px-[165px] my-[96px] md:my-[120px] lg:my-[160px] grid gap-6 lg:grid-cols-2'>
                <ProjectLink title="WEB DESIGN" text="VIEW PROJECTS" link='/webdesign' bgImg='bg-sm-web md:bg-md-web lg:bg-lg-web' />
                <ProjectLink title="APP DESIGN" text="VIEW PROJECTS" link='/appdesign' bgImg='bg-sm-app md:bg-md-app lg:bg-lg-app' />
            </section>

            <section className='relative px-6 md:px-10 xl:px-[165px] top-[189px] md:top-[80px] lg:top-[90px]'>
                <CallToAction />
            </section>

        </main>
    )
}

export default GraphicDesign