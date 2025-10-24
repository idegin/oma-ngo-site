import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots
{
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://africapital.org';

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/api/',
                    '/slice-simulator/',
                    '/_next/',
                    '/admin/',
                    '/private/',
                ],
            },
            {
                userAgent: 'GPTBot',
                disallow: '/',
            },
            {
                userAgent: 'ChatGPT-User',
                disallow: '/',
            },
            {
                userAgent: 'CCBot',
                disallow: '/',
            },
            {
                userAgent: 'anthropic-ai',
                disallow: '/',
            },
            {
                userAgent: 'AI2Bot',
                disallow: '/',
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
        host: baseUrl,
    };
}
