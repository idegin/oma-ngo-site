import AboutUsSection from '@/components/AboutUsSection'
import HeroSection from '@/components/HeroSection'
import BlogSection from '@/components/BlogSection'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import OurNumbers from '@/components/OurNumbers'
import React from 'react'
import CTASection2 from '@/components/CTASection2'
import OurProgramsSection from '@/components/OurProgramsSection'
import ClientsLogoSection from '@/components/ClientsLogoSection'
import TestimonialSection from '@/components/TestimonialSection'
import ProgramsSection from "@/components/ProgramsSection";

export default function page() {
    return (
        <>
            <HeroSection/>
            <AboutUsSection/>
            <CTASection2/>
            {/*<OurProgramsSection/>*/}
            <FAQSection/>
            <OurNumbers/>
            <ClientsLogoSection/>
            <ProgramsSection/>
            <BlogSection/>
            <TestimonialSection/>
            <CTASection/>
        </>
    )
}
