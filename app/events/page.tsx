import PageHeroSection from "@/components/PageHeroSection";
import React from "react";
import EachEvents from "./(components)/EachEvents";
import { createClient } from "@/prismicio";
import { getEvents } from "@/lib/queries/events.query";
import Pagination from "@/components/Pagination";
import MainEventPage from "./(components)/MainEventPage";
interface PageProps {
    searchParams: Promise<{
        page: number;
    }>;
}
export default async function page({ searchParams }: PageProps) {
    const { page } = await searchParams;
    const currentPage = page || 1;
    const client = createClient();
    const { events, totalPages } = await getEvents(client, currentPage, 10);

    return (
        <>
            <PageHeroSection />
            <MainEventPage
                events={events}
                currentPage={currentPage}
                totalPages={totalPages}
            />
        </>
    );
}
