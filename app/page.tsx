import AboutUsSection from '@/components/AboutUsSection'
import BlogSection from '@/components/BlogSection'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import HeroSection from '@/components/HeroSection'
import OurNumbers from '@/components/OurNumbers'
import React from 'react'

export default function page() {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <FAQSection />
      <OurNumbers />
      <BlogSection />
      <CTASection />
    </>
  )
}
