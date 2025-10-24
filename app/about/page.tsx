import AboutUsSection from "@/components/AboutUsSection";
import CTASection2 from "@/components/CTASection2";
import FAQSection from "@/components/FAQSection";
import PageHeroSection from "@/components/PageHeroSection";
import PeopleSection from "@/components/PeopleSection";
import { getFaqStaticProps } from "@/lib/queries/static-queries.query";
import { createClient } from "@/prismicio";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us - AfriCapital",
    description:
        "Learn about AfriCapital's mission to empower African entrepreneurs through business training, mentorship, and resources. Discover our story, team, and impact across Africa.",
    keywords: [
        "about AfriCapital",
        "African entrepreneurship",
        "business training Africa",
        "mentorship programs",
        "NGO mission",
        "economic development Africa",
        "startup support",
        "entrepreneurship training",
    ],
    openGraph: {
        title: "About Us - AfriCapital",
        description:
            "Learn about AfriCapital's mission to empower African entrepreneurs through business training, mentorship, and resources.",
        url: "/about",
        images: [
            {
                url: "/brand/logo-black.png",
                width: 1200,
                height: 630,
                alt: "About AfriCapital - Empowering African Entrepreneurs",
            },
        ],
    },
    twitter: {
        title: "About Us - AfriCapital",
        description:
            "Learn about AfriCapital's mission to empower African entrepreneurs through business training, mentorship, and resources.",
        images: ["/brand/logo-black.png"],
    },
    alternates: {
        canonical: "/about",
    },
};

type Props = {};

export default async function page({}: Props) {
    const client = createClient();
    const faqData = await getFaqStaticProps(client);

    return (
        <>
            <PageHeroSection
                title='About Us'
                breadcrumb={[{ label: "About Us", href: "/about" }]}
            />
            <AboutUsSection />
            <CTASection2 />
            <FAQSection data={faqData} />
            {/*<PeopleSection />*/}
        </>
    );
}
