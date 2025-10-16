import PageHeroSection from '@/components/PageHeroSection'
import React from 'react'
import EachEvents from './EachEvents'

export default function page() {
    return (
        <>
            <PageHeroSection />
            <div className='events-page'>
                <div className='container'>
                    <div className='row'>
                        <EachEvents />
                        <EachEvents />
                        <EachEvents />
                        <EachEvents />
                    </div>
                </div>
            </div>
        </>
    )
}
