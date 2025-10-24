import PageHeroSection from "@/components/PageHeroSection";
import { getBlogBySlug } from "@/lib/queries/blog.query";
import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";
import React from "react";
import { Metadata } from "next";
import StructuredData from "@/components/SEO/StructuredData";
import moment from "moment";
import { PrismicRichText } from "@prismicio/react";

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
    const { blog, latestBlogs, categories } = await getBlogBySlug(client, slug);

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
            <PageHeroSection
                title='Blog'
                breadcrumb={[
                    { label: "Blog", href: "/blog" },
                    {
                        label: blog.data?.title || "",
                        href: `/blog?category=${blog.uid}`,
                    },
                ]}
            />
            <section className={"news-details"}>
                <div className='container'>
                    <div className={"row"}>
                        <div className={"col-xl-8 col-lg-7"}>
                            <div className='news-details__left'>
                                <div className='news-details__img'>
                                    <img
                                        src={
                                            blog.data?.featured_image?.url ||
                                            "/brand/logo-black.png"
                                        }
                                        alt={
                                            blog.data?.title ||
                                            "AfriCapital Blog Post"
                                        }
                                    />
                                    <div className='news-details__date'>
                                        <p>
                                            {moment(
                                                blog.first_publication_date
                                            ).format("DD MMM, YYYY")}
                                        </p>
                                    </div>
                                </div>
                                <div className='news-details__content'>
                                    {/* <ul className='list-unstyled news-details__meta'>
                                        <li>
                                            <a href='news-details.html'>
                                                <i className='far fa-user-circle'></i>{" "}
                                                Admin
                                            </a>
                                        </li>
                                        <li>
                                            <a href='news-details.html'>
                                                <i className='fas fa-comments'></i>{" "}
                                                2 Comments
                                            </a>
                                        </li>
                                    </ul> */}
                                    <h3 className='news-details__title'>
                                        {blog.data?.title}
                                    </h3>
                                    <div className='news-details__text'>
                                        <PrismicRichText
                                            field={blog.data?.content}
                                        />
                                    </div>
                                </div>
                                <div className='news-details__bottom'>
                                    {/* <p className='news-details__tags'>
                                        <span>Tags</span>
                                        <a href='#'>fundraising</a>
                                        <a href='#'>charity</a>
                                    </p> */}
                                    <div className='news-details__social-list'>
                                        <a href='#'>
                                            <i className='fab fa-twitter'></i>
                                        </a>
                                        <a href='#'>
                                            <i className='fab fa-facebook'></i>
                                        </a>
                                        <a href='#'>
                                            <i className='fab fa-pinterest-p'></i>
                                        </a>
                                        <a href='#'>
                                            <i className='fab fa-instagram'></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"col-xl-4 col-lg-5"}>
                            <div className={"sidebar"}>
                                <div className='sidebar__single sidebar__post'>
                                    <div
                                        className='sidebar-shape-1'
                                        style={{
                                            backgroundImage:
                                                "url(assets/images/shapes/sidebar-shape-1.png)",
                                        }}
                                    ></div>
                                    <h3 className='sidebar__title'>
                                        Latest posts
                                    </h3>
                                    <ul className='sidebar__post-list list-unstyled'>
                                        {latestBlogs.map((latestBlog) => (
                                            <li>
                                                <div className='sidebar__post-image'>
                                                    <img
                                                        src={
                                                            latestBlog.data
                                                                ?.featured_image
                                                                ?.url ||
                                                            "/brand/logo-black.png"
                                                        }
                                                        alt={
                                                            latestBlog.data
                                                                ?.title ||
                                                            "AfriCapital Blog Post"
                                                        }
                                                    />
                                                </div>
                                                <div className='sidebar__post-content'>
                                                    <h3>
                                                        <span className='sidebar__post-content-meta'>
                                                            <i className='fas fa-user-circle'></i>{" "}
                                                            By admin
                                                        </span>
                                                        <a
                                                            href={`/blog/${latestBlog.uid}`}
                                                        >
                                                            {
                                                                latestBlog.data
                                                                    ?.title
                                                            }
                                                        </a>
                                                    </h3>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className='sidebar__single sidebar__category'>
                                    <div
                                        className='sidebar-shape-1'
                                        style={{
                                            backgroundImage:
                                                "url(assets/images/shapes/sidebar-shape-1.png)",
                                        }}
                                    ></div>
                                    <h3 className='sidebar__title'>
                                        Categories
                                    </h3>
                                    <ul className='sidebar__category-list list-unstyled'>
                                        {categories.map((category) => (
                                            <li key={category.id}>
                                                <a
                                                    href={`/blog?category=${category.uid}`}
                                                >
                                                    {category.data?.title}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default page;
