"use client";
import { EventsDocument } from "@/prismicio-types";
import React from "react";
import EachEvents from "./EachEvents";
import Pagination from "@/components/Pagination";
import EmptyEventsState from "@/components/EmptyEventsState";

interface Props {
    events: EventsDocument[];
    currentPage: number;
    totalPages: number;
}
const MainEventPage = ({ events, currentPage, totalPages }: Props) => {
    const handlePageChange = (newPage: number) => {
        // This will be handled by Next.js routing
        const url = new URL(window.location.href);
        url.searchParams.set("page", newPage.toString());
        window.location.href = url.toString();
    };
    return (
        <div className='events-page'>
            <div className='container'>
                <div className='row'>
                    {events?.length ? (
                        events.map((event) => (
                            <EachEvents key={event.uid} event={event} />
                        ))
                    ) : (
                        <EmptyEventsState />
                    )}
                </div>
                {events?.length > 0 && (
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                        showFirstLast={true}
                        maxVisiblePages={5}
                    />
                )}
            </div>
        </div>
    );
};

export default MainEventPage;
