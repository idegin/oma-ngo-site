import PageHeroSection from "@/components/PageHeroSection";
import React from "react";
import EachEvents from "./(components)/EachEvents";
import { createClient } from "@/prismicio";
import { getEvents } from "@/lib/queries/events.query";
import Pagination from "@/components/Pagination";
import MainEventPage from "./(components)/MainEventPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Events - AfriCapital",
    description:
        "Join AfriCapital's upcoming events, workshops, and networking sessions for African entrepreneurs. Discover training programs, mentorship events, and business development opportunities across Africa.",
    keywords: [
        "entrepreneurship events",
        "business workshops Africa",
        "startup networking events",
        "entrepreneurship training events",
        "business development workshops",
        "mentorship events",
        "African business events",
        "startup conferences",
    ],
    openGraph: {
        title: "Events - AfriCapital",
        description:
            "Join AfriCapital's upcoming events, workshops, and networking sessions for African entrepreneurs.",
        url: "/events",
        images: [
            {
                url: "/brand/logo-black.png",
                width: 1200,
                height: 630,
                alt: "AfriCapital Events - Entrepreneurship Workshops",
            },
        ],
    },
    twitter: {
        title: "Events - AfriCapital",
        description:
            "Join AfriCapital's upcoming events, workshops, and networking sessions for African entrepreneurs.",
        images: ["/brand/logo-black.png"],
    },
    alternates: {
        canonical: "/events",
    },
};

interface PageProps {
    searchParams: Promise<{
        page: number;
    }>;
}
export const dynamic = "force-dynamic";
export default async function page({ searchParams }: PageProps) {
    const { page } = await searchParams;
    const currentPage = page || 1;
    const client = createClient();
    const { events, totalPages } = await getEvents(client, currentPage, 10);

    return (
        <>
            <PageHeroSection
                title='Upcoming Events'
                breadcrumb={[{ label: "Events", href: "/events" }]}
            />
            <MainEventPage
                events={events}
                currentPage={currentPage}
                totalPages={totalPages}
            />
        </>
    );
}
