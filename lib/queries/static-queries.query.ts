import { AllDocumentTypes, ClientsDocument, FaqsDocument, MetricsDocument } from "@/prismicio-types";
import * as prismic from "@prismicio/client";

export const getFaqStaticProps = async (
    client: prismic.Client<AllDocumentTypes>
): Promise<FaqsDocument | null> =>
{
    try {
        const faqData = await client.getByType("faqs");
        if (!faqData.results?.length) return null;
        return faqData.results[ 0 ] as FaqsDocument;
    } catch (error) {
        console.error("Error fetching FAQ data:", error);
        return null;
    }
};

export const getMetricsStaticProps = async (
    client: prismic.Client<AllDocumentTypes>
): Promise<MetricsDocument | null> =>
{
    try {
        const metricsData = await client.getByType("metrics");
        if (!metricsData.results?.length) return null;
        return metricsData.results[ 0 ] as MetricsDocument;
    } catch (error) {
        console.error("Error fetching Metrics data:", error);
        return null;
    }
};


export const getClientsLogoStaticProps = async (
    client: prismic.Client<AllDocumentTypes>
): Promise<ClientsDocument | null> =>
{
    try {
        const clientsData = await client.getByType("clients");
        if (!clientsData.results?.length) return null;
        return clientsData.results[ 0 ] as ClientsDocument;
    } catch (error) {
        console.error("Error fetching Clients data:", error);
        return null;
    }
};
