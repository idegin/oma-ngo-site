import PageHeroSection from "@/components/PageHeroSection";
import { getBlogBySlug } from "@/lib/queries/blog.query";
import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";
import React from "react";
import { Metadata } from "next";
import StructuredData from "@/components/SEO/StructuredData";

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const client = createClient();
    const { blog } = await getBlogBySlug(client, slug);

    if (!blog) {
        return {
            title: "Blog Post Not Found - AfriCapital",
            description: "The requested blog post could not be found.",
        };
    }

    const baseUrl =
        process.env.NEXT_PUBLIC_SITE_URL || "https://africapital.org";
    const postUrl = `${baseUrl}/blog/${slug}`;
    const postImage = blog.data?.featured_image?.url || "/brand/logo-black.png";

    return {
        title: blog.data?.title || "Blog Post - AfriCapital",
        description:
            blog.data?.excerpt ||
            "Read this insightful article on African entrepreneurship and business development.",
        keywords: [
            "African entrepreneurship",
            "business development",
            "startup advice",
            "entrepreneurship insights",
            "business training",
            "mentorship",
            "African business",
        ],
        authors: [{ name: "AfriCapital" }],
        openGraph: {
            title: blog.data?.title || "Blog Post - AfriCapital",
            description:
                blog.data?.excerpt ||
                "Read this insightful article on African entrepreneurship and business development.",
            url: postUrl,
            type: "article",
            publishedTime: blog.first_publication_date,
            modifiedTime: blog.last_publication_date,
            authors: ["AfriCapital"],
            images: [
                {
                    url: postImage,
                    width: 1200,
                    height: 630,
                    alt: blog.data?.title || "AfriCapital Blog Post",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: blog.data?.title || "Blog Post - AfriCapital",
            description:
                blog.data?.excerpt ||
                "Read this insightful article on African entrepreneurship and business development.",
            images: [postImage],
        },
        alternates: {
            canonical: postUrl,
        },
    };
}

export const dynamic = "force-dynamic";
const page = async ({ params }: Props) => {
    const { slug } = await params;
    const client = createClient();
    const { blog, latestBlogs } = await getBlogBySlug(client, slug);

    if (!blog) {
        notFound();
    }

    const baseUrl =
        process.env.NEXT_PUBLIC_SITE_URL || "https://africapital.org";
    const postUrl = `${baseUrl}/blog/${slug}`;

    return (
        <div>
            <StructuredData
                type='Article'
                data={{
                    headline: blog.data?.title,
                    description: blog.data?.excerpt,
                    image:
                        blog.data?.featured_image?.url ||
                        "/brand/logo-black.png",
                    datePublished: blog.first_publication_date,
                    dateModified: blog.last_publication_date,
                    author: {
                        "@type": "Person",
                        name: "AfriCapital",
                    },
                    publisher: {
                        "@type": "Organization",
                        name: "AfriCapital",
                        logo: {
                            "@type": "ImageObject",
                            url: `${baseUrl}/brand/logo-black.png`,
                        },
                    },
                    mainEntityOfPage: {
                        "@type": "WebPage",
                        "@id": postUrl,
                    },
                }}
            />
            <PageHeroSection />
        </div>
    );
};

export default page;
