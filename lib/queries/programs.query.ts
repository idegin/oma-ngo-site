import { AllDocumentTypes, } from "@/prismicio-types";
import * as prismic from "@prismicio/client";



export const getPrograms = async (client: prismic.Client<AllDocumentTypes>, currentPage: number, perPage: number) =>
{
    try {
        const programs = await client.getByType("program", {
            pageSize: perPage,
            page: currentPage,
            orderings: {
                field: "document.first_publication_date",
                direction: "desc",
            },
            fetchLinks: [ "categories.title" ],
            graphQuery: `{
                programs{
                title
                featured_image
                excerpt
                category{
                    title
                }
                goal
                total_enrolled
                }
            }
            `
        });

        return {
            programs: programs.results,
            totalPages: programs.total_pages
        };
    } catch (error) {
        console.error("Error fetching programs:", error);
        return {
            programs: [],
            totalPages: 0
        };
    }
};

export const getProgramsBySlug = async (client: prismic.Client<AllDocumentTypes>, slug: string) =>
{
    try {
        const program = await client.getByUID("program", slug, {
            fetchLinks: [ "categories.title" ],
            graphQuery: `
            `
        });

        console.log(program);

        const latestPrograms = await client.getByType("program", {
            pageSize: 3,
            filters: [ prismic.filter.not('my.blog.uid', slug) ],
            orderings: {
                field: "document.first_publication_date",
                direction: "desc",
            },
            fetchLinks: [ "categories.title" ],
            graphQuery: `{
                programs{
                    title
                    featured_image
                }
            }`});

        return {
            program,
            latestPrograms: latestPrograms.results
        };

    } catch (error) {
        console.error("Error fetching program by slug:", error);
        return null;
    }
};
