import React from 'react'
import LocationInfoCard from './(locations)/LocationInfoCard'
import CallToAction from '../(shared)/CallToAction'

const Locations = () => {
    return (
        <main className='flex flex-col md:px-10 lg:px-[165px]'>

            <section className='flex flex-col  md:items-center gap-10 md:gap-[120px] xl:gap-8 mb-[120px] xl:mb-[160px] xl:w-full'>
                <LocationInfoCard
                    bgImg='bg-sm-locations-canada xl:bg-lg-locations-canada xl:order-2'
                    location='Canada'
                    officeName='Designo Central Office'
                    street='3886 Wellington Street'
                    address='Toronto, Ontario M9C 3J5'
                    contactTitle='Contact'
                    phone='P : +1 253-863-8967'
                    email='M : contact@designo.co'
                />
                <LocationInfoCard
                    bgImg='bg-sm-locations-australia xl:bg-lg-locations-australia'
                    location='Australia'
                    officeName='Designo AU Office'
                    street='19 Balonne Street'
                    address='New South Wales 2443'
                    contactTitle='Contact'
                    phone='P : (02) 6720 9092'
                    email='M : contact@designo.au'
                />
                <LocationInfoCard
                    bgImg='bg-sm-locations-uk xl:bg-lg-locations-uk xl:order-2'
                    location='United Kingdom'
                    officeName='Designo UK Office'
                    street='13  Colorado Way'
                    address='Rhyd-y-fro SA8 9GA'
                    contactTitle='Contact'
                    phone='P : 078 3115 1400'
                    email='M : contact@designo.uk'
                />
            </section>

            <section className='relative px-6 md:px-0 top-[189px] md:top-[80px] lg:top-[90px]'>
                <CallToAction />
            </section>
        </main>
    )
}

export default Locations