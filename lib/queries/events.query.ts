import { AllDocumentTypes, EventsDocument, } from "@/prismicio-types";
import * as prismic from "@prismicio/client";


export const getEvents = async (client: prismic.Client<AllDocumentTypes>, currentPage: number, perPage: number) =>
{
    try {
        const events = await client.getByType("events", {
            pageSize: perPage,
            page: currentPage,
            orderings: {
                field: "document.first_publication_date",
                direction: "desc",
            },
            graphQuery: `
            {
                events{
                    title
                    event_image
                    excerpt
                    date
                    start_time
                    end_time
                    location
                }
            }
            `
        });
        return {
            events: events.results,
            totalPages: events.total_pages
        };
    }
    catch (error) {
        console.error("Error fetching events:", error);
        return {
            events: [],
            totalPages: 0
        };
    }
};


export const getEventBySlug = async (client: prismic.Client<AllDocumentTypes>, slug: string) =>
{
    try {
        const eventData = await client.getByUID("events", slug, {
            fetchLinks: [ "categories.title" ],
            graphQuery: `
            `
        });
        return eventData as EventsDocument;
    }

    catch (error) {
        console.error("Error fetching event by slug:", error);
        return null;
    }
};
