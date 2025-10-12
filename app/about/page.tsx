import AboutUsSection from '@/components/AboutUsSection'
import CTASection2 from '@/components/CTASection2'
import FAQSection from '@/components/FAQSection'
import PageHeroSection from '@/components/PageHeroSection'
import PeopleSection from '@/components/PeopleSection'
import React from 'react'

type Props = {}

export default function page({ }: Props) {
    return (
        <>
            <PageHeroSection />
            <AboutUsSection />
            <CTASection2 />
            <FAQSection />
            <PeopleSection />
        </>
    )
}