import PageHeroSection from '@/components/PageHeroSection'
import React from 'react'
import EachProgramsLG from './EachProgramsLG'

export default function page() {
    return (
        <>
            <PageHeroSection />
            <div className='donations-list'>
                <div className='container'>
                    <div className='donations-list__inner'>
                        <EachProgramsLG />
                        <EachProgramsLG />
                        <EachProgramsLG />
                        <EachProgramsLG />
                    </div>
                </div>
            </div>
        </>
    )
}
