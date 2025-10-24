import Head from "next/head";
import { SEOConfig } from "@/lib/seo";

interface SEOHeadProps {
    config: SEOConfig;
    structuredData?: any;
}

export default function SEOHead({ config, structuredData }: SEOHeadProps) {
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
    } = config;

    return (
        <Head>
            {/* Basic Meta Tags */}
            <title>{title}</title>
            <meta name='description' content={description} />
            {keywords && <meta name='keywords' content={keywords.join(", ")} />}
            {canonical && <link rel='canonical' href={canonical} />}

            {/* Robots */}
            {robots && (
                <meta
                    name='robots'
                    content={`${robots.index ? "index" : "noindex"}, ${robots.follow ? "follow" : "nofollow"}`}
                />
            )}

            {/* Verification */}
            {verification?.google && (
                <meta
                    name='google-site-verification'
                    content={verification.google}
                />
            )}
            {verification?.yandex && (
                <meta
                    name='yandex-verification'
                    content={verification.yandex}
                />
            )}
            {verification?.yahoo && (
                <meta name='msvalidate.01' content={verification.yahoo} />
            )}

            {/* Open Graph */}
            {openGraph && (
                <>
                    <meta
                        property='og:type'
                        content={openGraph.type || "website"}
                    />
                    <meta
                        property='og:title'
                        content={openGraph.title || title}
                    />
                    <meta
                        property='og:description'
                        content={openGraph.description || description}
                    />
                    {openGraph.url && (
                        <meta property='og:url' content={openGraph.url} />
                    )}
                    {openGraph.image && (
                        <meta property='og:image' content={openGraph.image} />
                    )}
                    {openGraph.imageAlt && (
                        <meta
                            property='og:image:alt'
                            content={openGraph.imageAlt}
                        />
                    )}
                    {openGraph.siteName && (
                        <meta
                            property='og:site_name'
                            content={openGraph.siteName}
                        />
                    )}
                </>
            )}

            {/* Twitter Card */}
            {twitter && (
                <>
                    <meta
                        name='twitter:card'
                        content={twitter.card || "summary_large_image"}
                    />
                    <meta
                        name='twitter:title'
                        content={twitter.title || title}
                    />
                    <meta
                        name='twitter:description'
                        content={twitter.description || description}
                    />
                    {twitter.image && (
                        <meta name='twitter:image' content={twitter.image} />
                    )}
                    {twitter.creator && (
                        <meta
                            name='twitter:creator'
                            content={twitter.creator}
                        />
                    )}
                    {twitter.site && (
                        <meta name='twitter:site' content={twitter.site} />
                    )}
                </>
            )}

            {/* Structured Data */}
            {structuredData && (
                <script
                    type='application/ld+json'
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(structuredData, null, 2),
                    }}
                />
            )}

            {/* Language Alternates */}
            {alternates?.languages &&
                Object.entries(alternates.languages).map(([lang, url]) => (
                    <link
                        key={lang}
                        rel='alternate'
                        hrefLang={lang}
                        href={url}
                    />
                ))}
        </Head>
    );
}
