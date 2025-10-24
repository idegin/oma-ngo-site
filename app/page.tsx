import AboutUsSection from "@/components/AboutUsSection";
import HeroSection from "@/components/HeroSection";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import OurNumbers from "@/components/OurNumbers";
import React from "react";
import CTASection2 from "@/components/CTASection2";
import OurProgramsSection from "@/components/OurProgramsSection";
import ClientsLogoSection from "@/components/ClientsLogoSection";
import TestimonialSection from "@/components/TestimonialSection";
import ProgramsSection from "@/components/ProgramsSection";
import { createClient } from "@/prismicio";
import {
    getClientsLogoStaticProps,
    getFaqStaticProps,
    getMetricsStaticProps,
    getTestimonials,
} from "@/lib/queries/static-queries.query";
import { getPrograms } from "@/lib/queries/programs.query";
import { getBlog } from "@/lib/queries/blog.query";

export const dynamic = "force-dynamic";
export default async function page() {
    const client = createClient();
    const [
        faqData,
        metricsData,
        clientsLogoData,
        programsData,
        blogData,
        testimonialsData,
    ] = await Promise.all([
        getFaqStaticProps(client),
        getMetricsStaticProps(client),
        getClientsLogoStaticProps(client),
        getPrograms(client, 1, 3),
        getBlog(client, 1, 3),
        getTestimonials(client),
    ]);

    console.log("Clients Logo Data:", clientsLogoData);

    return (
        <>
            <HeroSection />
            <AboutUsSection />
            <CTASection2 />
            {/*<OurProgramsSection/>*/}
            <FAQSection data={faqData} />
            <OurNumbers metric={metricsData} />
            <ClientsLogoSection clientsData={clientsLogoData} />
            <ProgramsSection programsData={programsData.programs} />
            <BlogSection blogData={blogData.blog} />
            <TestimonialSection testimonials={testimonialsData} />
            <CTASection />
        </>
    );
}
