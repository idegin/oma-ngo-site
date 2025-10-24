import { AllDocumentTypes } from "@/prismicio-types";
import * as prismic from "@prismicio/client";


export const getBlog = async (client: prismic.Client<AllDocumentTypes>, currentPage: number, perPage: number, category?: string) =>
{
    try {

        const filters = [];

        if (category) {
            const categoryData = await client.getByUID("categories", category);
            filters.push(prismic.filter.at("my.blog.category", categoryData.id));

        }

        const blog = await client.getByType("blog", {
            pageSize: perPage,
            page: currentPage,
            filters: filters,
            orderings: {
                field: "document.first_publication_date",
                direction: "desc",
            },
            graphQuery: `
            {
                blog{
                    title
                    featured_image
                    excerpt
                    category{
                        title
                    }
                }
            }
            `
        });
        return {
            blog: blog.results,
            totalPages: blog.total_pages
        };
    } catch (error) {
        console.error("Error fetching blog:", error);
        return {
            blog: [],
            totalPages: 0
        };
    }
};

export const getBlogBySlug = async (client: prismic.Client<AllDocumentTypes>, slug: string) =>
{
    try {
        const blog = await client.getByUID("blog", slug);

        const latestBlogs = await client.getByType("blog", {
            pageSize: 3,
            filters: [ prismic.filter.not('my.blog.uid', slug) ],
            orderings: {
                field: "document.first_publication_date",
                direction: "desc",
            },
            graphQuery: `
            {
                blog{
                    title
                    featured_image
                    excerpt
                    category{
                        title
                    }
                }
            }
            `
        });

        const categories = await client.getByType("categories");

        return { blog, latestBlogs: latestBlogs.results, categories: categories.results };
    } catch (error) {
        console.error("Error fetching blog by slug:", error);
        return {
            blog: null,
            latestBlogs: [],
            categories: []
        };
    }
};
