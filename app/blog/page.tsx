import EachBlogPost from "@/components/EachBlogPost";
import PageHeroSection from "@/components/PageHeroSection";
import { createClient } from "@/prismicio";
import { getBlog } from "@/lib/queries/blog.query";
import React from "react";
import MainBlogPage from "./(components)/MainBlogPage";

type Props = {
    searchParams: Promise<{
        page: number;
    }>;
};

export default async function page({ searchParams }: Props) {
    const { page } = await searchParams;
    const currentPage = page || 1;
    const client = createClient();
    const { blog, totalPages } = await getBlog(client, currentPage, 10);
    return (
        <>
            <PageHeroSection />
            <MainBlogPage
                blog={blog}
                totalPages={totalPages}
                currentPage={currentPage}
            />
        </>
    );
}
