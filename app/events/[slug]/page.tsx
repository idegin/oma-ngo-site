import PageHeroSection from "@/components/PageHeroSection";
import React from "react";
import EventLeft from "./EventLeft";
import EventRight from "./EventRight";
import { createClient } from "@/prismicio";
import { getEventBySlug } from "@/lib/queries/events.query";
import { EventsDocument } from "@/prismicio-types";

interface Props {
    params: Promise<{
        slug: string;
    }>;
}
export const dynamic = "force-dynamic";
export default async function page({ params }: Props) {
    const { slug } = await params;
    const client = createClient();
    const event = await getEventBySlug(client, slug);

    return (
        <>
            <PageHeroSection
                title={event?.data?.title || ""}
                backgroundImage={event?.data?.event_image?.url as string}
                breadcrumb={[
                    { label: "Events", href: "/events" },
                    {
                        label: event?.data?.title || "",
                        href: `/events/${slug}`,
                    },
                ]}
            />
            <div className='event-details'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-8 col-lg-7'>
                            <EventLeft event={event as EventsDocument} />
                        </div>
                        <div className='col-xl-4 col-lg-5'>
                            <EventRight event={event as EventsDocument} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
