import PageHeroSection from "@/components/PageHeroSection";
import { getBlogBySlug } from "@/lib/queries/blog.query";
import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
    params: Promise<{
        slug: string;
    }>;
}
const page = async ({ params }: Props) => {
    const { slug } = await params;
    const client = createClient();
    const { blog, latestBlogs } = await getBlogBySlug(client, slug);

    if (!blog) {
        notFound();
    }

    return (
        <div>
            <PageHeroSection />
        </div>
    );
};

export default page;
