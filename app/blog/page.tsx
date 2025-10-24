import EachBlogPost from "@/components/EachBlogPost";
import PageHeroSection from "@/components/PageHeroSection";
import { createClient } from "@/prismicio";
import { getBlog } from "@/lib/queries/blog.query";
import React from "react";
import MainBlogPage from "./(components)/MainBlogPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog - AfriCapital",
    description:
        "Read the latest insights, success stories, and expert advice on African entrepreneurship. Stay updated with AfriCapital's blog for business tips, mentorship guidance, and startup resources.",
    keywords: [
        "African entrepreneurship blog",
        "business tips Africa",
        "startup advice",
        "entrepreneurship insights",
        "business mentorship",
        "African business success stories",
        "startup resources",
        "business training blog",
    ],
    openGraph: {
        title: "Blog - AfriCapital",
        description:
            "Read the latest insights, success stories, and expert advice on African entrepreneurship.",
        url: "/blog",
        images: [
            {
                url: "/brand/logo-black.png",
                width: 1200,
                height: 630,
                alt: "AfriCapital Blog - Entrepreneurship Insights",
            },
        ],
    },
    twitter: {
        title: "Blog - AfriCapital",
        description:
            "Read the latest insights, success stories, and expert advice on African entrepreneurship.",
        images: ["/brand/logo-black.png"],
    },
    alternates: {
        canonical: "/blog",
    },
};

type Props = {
    searchParams: Promise<{
        page: number;
    }>;
};

export const dynamic = "force-dynamic";
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
