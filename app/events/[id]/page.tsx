import PageHeroSection from '@/components/PageHeroSection'
import React from 'react'
import EventLeft from './EventLeft'
import EventRight from './EventRight'

export default function page() {
    return (
        <>
            <PageHeroSection />
            <div className='event-details'>
                <div className="container">
                    <div className="row">
                        <div className='col-xl-8 col-lg-7'>
                            <EventLeft />
                        </div>
                        <div className='col-xl-4 col-lg-5'>
                            <EventRight />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
