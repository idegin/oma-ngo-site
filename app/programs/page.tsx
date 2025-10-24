import PageHeroSection from "@/components/PageHeroSection";
import React from "react";
import EachProgramsLG from "./(components)/EachProgramsLG";
import { createClient } from "@/prismicio";
import { getPrograms } from "@/lib/queries/programs.query";
import Pagination from "@/components/Pagination";
import MainProgramsPage from "./(components)/MainProgramsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Programs - AfriCapital",
    description:
        "Explore AfriCapital's comprehensive entrepreneurship programs designed to empower African entrepreneurs. From business training to mentorship programs, discover how we support startup success across Africa.",
    keywords: [
        "entrepreneurship programs",
        "business training programs",
        "startup mentorship",
        "African business programs",
        "entrepreneurship training",
        "business development programs",
        "startup support programs",
        "mentorship programs Africa",
    ],
    openGraph: {
        title: "Programs - AfriCapital",
        description:
            "Explore AfriCapital's comprehensive entrepreneurship programs designed to empower African entrepreneurs.",
        url: "/programs",
        images: [
            {
                url: "/brand/logo-black.png",
                width: 1200,
                height: 630,
                alt: "AfriCapital Programs - Entrepreneurship Training",
            },
        ],
    },
    twitter: {
        title: "Programs - AfriCapital",
        description:
            "Explore AfriCapital's comprehensive entrepreneurship programs designed to empower African entrepreneurs.",
        images: ["/brand/logo-black.png"],
    },
    alternates: {
        canonical: "/programs",
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
