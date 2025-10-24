import { generateStructuredData } from "@/lib/seo";

interface StructuredDataProps {
    type: "Organization" | "WebSite" | "Article" | "Event" | "Program";
    data: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
    const structuredData = generateStructuredData(type, data);

    return (
        <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(structuredData, null, 2),
            }}
        />
    );
}
