import PageHeroSection from "@/components/PageHeroSection";
import React from "react";
import EachProgramsLG from "./(components)/EachProgramsLG";
import { createClient } from "@/prismicio";
import { getPrograms } from "@/lib/queries/programs.query";
import Pagination from "@/components/Pagination";
import MainProgramsPage from "./(components)/MainProgramsPage";

interface PageProps {
    searchParams: Promise<{
        page: number;
    }>;
}
export default async function page({ searchParams }: PageProps) {
    const { page } = await searchParams;
    const currentPage = page || 1;
    const client = createClient();
    const { programs, totalPages } = await getPrograms(client, currentPage, 10);

    return (
        <>
            <PageHeroSection />
            <MainProgramsPage
                programs={programs}
                currentPage={currentPage}
                totalPages={totalPages}
            />
        </>
    );
}
