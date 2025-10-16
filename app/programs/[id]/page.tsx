import React from 'react'
import ProgramDetailsLeft from './ProgramDetailsLeft'
import PageHeroSection from '@/components/PageHeroSection'
import ProgramRight from './ProgramRight'

type Props = {}

export default function page({ }: Props) {
    return (
        <>
            <PageHeroSection />
            <div className='donation-details'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-8 col-lg-7'>
                            <ProgramDetailsLeft />
                        </div>
                        <div className='col-xl-4 col-lg-5'>
                            <ProgramRight />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}