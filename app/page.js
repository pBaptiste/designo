import Banner from './(home)/Banner'
import ProjectLink from './(shared)/ProjectLink'
import Illustration from './(home)/Illustration'
import CallToAction from './(shared)/CallToAction'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col lg:mx-[165px]">
      <Banner />

      <section className='px-6 md:px-10 lg:px-0 my-[120px] lg:my-[160px] grid gap-6 lg:grid-cols-2'>
        <ProjectLink title="WEB DESIGN" text="VIEW PROJECTS" link='/webdesign' bgImg='bg-sm-web md:bg-md-web lg:bg-lg-web lg:row-span-2'/>
        <ProjectLink title="APP DESIGN" text="VIEW PROJECTS" link='/appdesign' bgImg='bg-sm-app md:bg-md-app lg:bg-lg-app'/>
        <ProjectLink title="GRAPHIC DESIGN" text="VIEW PROJECTS" link='/graphicdesign' bgImg='bg-sm-graphic md:bg-md-graphic lg:bg-lg-graphic'/>
      </section>

       <section className='px-6 md:px-10 lg:px-0 grid lg:grid-cols-3 gap-20 md:gap-8 mb-[120px] lg:mb-[160px]'>
        <Illustration src='/assets/home/desktop/illustration-passionate.svg' styles='' title='PASSIONATE' text='Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.'/>
        <Illustration src='/assets/home/desktop/illustration-resourceful.svg' styles='matrix_3' title='RESOURCEFUL' text='Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.'/>
        <Illustration src='/assets/home/desktop/illustration-friendly.svg' styles='matrix_2' title='FRIENDLY' text='We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.'/>
      </section>

      <section className='relative px-6 md:px-10 top-[189px] md:top-[80px] lg:top-[90px]'>
         <CallToAction />
      </section>
     
    </main>
  )
}
