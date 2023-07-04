import React from 'react'
import DesignPageBanner from '../(shared)/DesignPageBanner'
import DesignProjectCard from '../(shared)/DesignProjectCard'
import ProjectLink from '../(shared)/ProjectLink'
import CallToAction from '../(shared)/CallToAction'

const AppDesign = () => {
    return (
        <main className='relative min-h-screen'>
            <DesignPageBanner
                title='App Design'
                text='Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.'
                patterns='bg-app-intro-pattern bg-top-left md:bg-right lg:bg-left md:scale-x-[-1] md:rotate-180 lg:scale-1 lg:rotate-[-180] z-[10]' />

            <section className='mx-6 lg:mx-[165px] items-center flex flex-col lg:flex-row lg:flex-wrap lg:justify-start gap-10 lg:gap-x-[20px] lg:gap-y-8 md:gap-8 mb-24 md:mb-[120px] lg:mb-[160px]'>
                <DesignProjectCard src='/assets/app-design/desktop/image-airfilter.jpg' title='AIRFILTER' text='Solving the problem of poor indoor air quality by filtering the air' />
                <DesignProjectCard src='/assets/app-design/desktop/image-eyecam.jpg' title='EYECAM' text='Product that lets you edit your favorite photos and videos at any time' />
                <DesignProjectCard src='/assets/app-design/desktop/image-faceit.jpg' title='FACEIT' text='Get to meet your favorite internet superstar with the faceit app' />
                <DesignProjectCard src='/assets/app-design/desktop/image-todo.jpg' title='TODO' text='A todo app that features cloud sync with light and dark mode' />
                <DesignProjectCard src='/assets/app-design/desktop/image-loopstudios.jpg' title='LOOPSTUDIOS' text='A VR experience app made for Loopstudios' />
            </section>

            <section className='px-6 md:px-10 lg:px-[165px] my-[96px] md:my-[120px] lg:my-[160px] grid gap-6 lg:grid-cols-2'>
                <ProjectLink title="WEB DESIGN" text="VIEW PROJECTS" link='/webdesign' bgImg='bg-sm-web md:bg-md-web lg:bg-lg-web' />
                <ProjectLink title="GRAPHIC DESIGN" text="VIEW PROJECTS" link='/graphicdesign' bgImg='bg-sm-graphic md:bg-md-graphic lg:bg-lg-graphic' />
            </section>

            <section className='relative px-6 md:px-10 xl:px-[165px] top-[189px] md:top-[80px] lg:top-[90px]'>
                <CallToAction />
            </section>

        </main>
    )
}

export default AppDesign