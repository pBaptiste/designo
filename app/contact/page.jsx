import React from 'react'
import ContactForm from './(contact)/ContactForm'
import ContactLinkCard from '../(shared)/ContactLinkCard'

const Contact = () => {

    return (
        <main className='flex flex-col md:items-center md:px-10 lg:px-[165px]'>

            <ContactForm />

            <section className='py-[120px] lg:py-[160px] w-full flex flex-col lg:flex-row gap-12 md:gap-20 lg:gap-0 lg:justify-between'>
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

        </main>
    )
}

export default Contact