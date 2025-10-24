import { MetadataRoute } from 'next';
import { createClient } from '@/prismicio';
import { getBlog } from '@/lib/queries/blog.query';
import { getPrograms } from '@/lib/queries/programs.query';
import { getEvents } from '@/lib/queries/events.query';

export default async function sitemap(): Promise<MetadataRoute.Sitemap>
{
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://africapital.org';
    const client = createClient();

    // Static pages
    const staticPages = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/programs`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/events`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/donate`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
    ];

    try {
        // Dynamic pages - Blog posts
        const blogData = await getBlog(client, 1, 100); // Get up to 100 blog posts
        const blogPages = blogData?.blog?.map((post: any) => ({
            url: `${baseUrl}/blog/${post.uid}`,
            lastModified: new Date(post.last_publication_date),
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        })) || [];

        // Dynamic pages - Programs
        const programsData = await getPrograms(client, 1, 100); // Get up to 100 programs
        const programPages = programsData?.programs?.map((program: any) => ({
            url: `${baseUrl}/programs/${program.uid}`,
            lastModified: new Date(program.last_publication_date),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        })) || [];

        // Dynamic pages - Events
        const eventsData = await getEvents(client, 1, 100); // Get up to 100 events
        const eventPages = eventsData?.events?.map((event: any) => ({
            url: `${baseUrl}/events/${event.uid}`,
            lastModified: new Date(event.last_publication_date),
            changeFrequency: 'weekly' as const,
            priority: 0.6,
        })) || [];

        return [ ...staticPages, ...blogPages, ...programPages, ...eventPages ];
    } catch (error) {
        console.error('Error generating sitemap:', error);
        return staticPages;
    }
}
