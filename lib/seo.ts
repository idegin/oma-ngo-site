import { Metadata } from 'next';

export interface SEOConfig
{
    title: string;
    description: string;
    keywords?: string[];
    canonical?: string;
    openGraph?: {
        title?: string;
        description?: string;
        type?: 'website' | 'article';
        url?: string;
        image?: string;
        imageAlt?: string;
        siteName?: string;
    };
    twitter?: {
        card?: 'summary' | 'summary_large_image';
        title?: string;
        description?: string;
        image?: string;
        creator?: string;
        site?: string;
    };
    robots?: {
        index?: boolean;
        follow?: boolean;
        googleBot?: {
            index?: boolean;
            follow?: boolean;
            'max-video-preview'?: number;
            'max-image-preview'?: 'none' | 'standard' | 'large';
            'max-snippet'?: number;
        };
    };
    alternates?: {
        canonical?: string;
        languages?: Record<string, string>;
    };
    verification?: {
        google?: string;
        yandex?: string;
        yahoo?: string;
        other?: Record<string, string>;
    };
}

const defaultConfig: Partial<SEOConfig> = {
    openGraph: {
        type: 'website',
        siteName: 'AfriCapital',
    },
    twitter: {
        card: 'summary_large_image',
        site: '@africapital',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export function generateMetadata(config: SEOConfig): Metadata
{
    const {
        title,
        description,
        keywords,
        canonical,
        openGraph,
        twitter,
        robots,
        alternates,
        verification,
    } = { ...defaultConfig, ...config };

    const metadata: Metadata = {
        title,
        description,
        keywords: keywords?.join(', '),
        robots,
        alternates,
        verification,
    };

    // Open Graph
    if (openGraph) {
        metadata.openGraph = {
            title: openGraph.title || title,
            description: openGraph.description || description,
            type: openGraph.type || 'website',
            url: openGraph.url || canonical,
            images: openGraph.image ? [
                {
                    url: openGraph.image,
                    alt: openGraph.imageAlt || title,
                    width: 1200,
                    height: 630,
                }
            ] : undefined,
            siteName: openGraph.siteName,
        };
    }

    // Twitter Card
    if (twitter) {
        metadata.twitter = {
            card: twitter.card || 'summary_large_image',
            title: twitter.title || title,
            description: twitter.description || description,
            images: twitter.image ? [ twitter.image ] : undefined,
            creator: twitter.creator,
            site: twitter.site,
        };
    }

    return metadata;
}

export function generateStructuredData(type: 'Organization' | 'WebSite' | 'Article' | 'Event' | 'Program', data: any)
{
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://africapital.org';

    const structuredData = {
        '@context': 'https://schema.org',
        '@type': type,
        ...data,
    };

    // Add common properties based on type
    switch (type) {
        case 'Organization':
            return {
                ...structuredData,
                url: baseUrl,
                logo: `${baseUrl}/brand/logo-black.png`,
                sameAs: [
                    'https://twitter.com/africapital',
                    'https://facebook.com/africapital',
                    'https://linkedin.com/company/africapital',
                ],
            };

        case 'WebSite':
            return {
                ...structuredData,
                url: baseUrl,
                potentialAction: {
                    '@type': 'SearchAction',
                    target: `${baseUrl}/search?q={search_term_string}`,
                    'query-input': 'required name=search_term_string',
                },
            };

        case 'Article':
            return {
                ...structuredData,
                publisher: {
                    '@type': 'Organization',
                    name: 'AfriCapital',
                    logo: {
                        '@type': 'ImageObject',
                        url: `${baseUrl}/brand/logo-black.png`,
                    },
                },
                mainEntityOfPage: {
                    '@type': 'WebPage',
                    '@id': data.url || baseUrl,
                },
            };

        case 'Event':
            return {
                ...structuredData,
                organizer: {
                    '@type': 'Organization',
                    name: 'AfriCapital',
                    url: baseUrl,
                },
            };

        case 'Program':
            return {
                ...structuredData,
                provider: {
                    '@type': 'Organization',
                    name: 'AfriCapital',
                    url: baseUrl,
                },
            };
    }

    return structuredData;
}

export function generateSitemapData(pages: Array<{
    url: string;
    lastModified?: string;
    changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    priority?: number;
}>)
{
    return pages.map(page => ({
        url: page.url,
        lastModified: page.lastModified || new Date().toISOString(),
        changeFrequency: page.changeFrequency || 'weekly',
        priority: page.priority || 0.8,
    }));
}

export const defaultSEOConfig: SEOConfig = {
    title: 'AfriCapital - Empowering African Entrepreneurs',
    description: 'AfriCapital empowers African entrepreneurs with business training, mentorship, and resources to start and scale sustainable businesses. Join us in driving economic growth across Africa.',
    keywords: [
        'African entrepreneurs',
        'business training',
        'mentorship',
        'startup support',
        'economic development',
        'Africa business',
        'entrepreneurship',
        'business resources',
        'NGO',
        'non-profit',
        'AfriCapital',
    ],
    openGraph: {
        type: 'website',
        siteName: 'AfriCapital',
        image: '/brand/logo-black.png',
        imageAlt: 'AfriCapital - Empowering African Entrepreneurs',
    },
    twitter: {
        card: 'summary_large_image',
        site: '@africapital',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};
