import { CategoriesDocument, EventsDocument } from "@/prismicio-types";
import moment from "moment";
import React from "react";

type Props = {
    event: EventsDocument;
};

export default function EventRight({ event }: Props) {
    const category = event?.data?.category as unknown as CategoriesDocument;
    return (
        <>
            <div className='event-details__right'>
                <div className='event-details__info'>
                    <ul className='list-unstyled event-details__info-list'>
                        <li>
                            <span>Time:</span>
                            <p>8:00 am to 12:30 pm</p>
                        </li>
                        <li>
                            <span>Date:</span>
                            <p>
                                {moment(event?.data?.date).format(
                                    "DD MMM, YYYY"
                                )}
                            </p>
                        </li>
                        <li>
                            <span>Category:</span>
                            <p>{category?.data?.title}</p>
                        </li>
                        {event?.data?.location && (
                            <li>
                                <span>Location:</span>
                                <p>{event?.data?.location}</p>
                            </li>
                        )}
                    </ul>
                    <div className='event-details__social'>
                        <a href='#'>
                            <i className='fab fa-twitter'></i>
                        </a>
                        <a href='#'>
                            <i className='fab fa-facebook'></i>
                        </a>
                        <a href='#'>
                            <i className='fab fa-pinterest-p'></i>
                        </a>
                        <a href='#'>
                            <i className='fab fa-instagram'></i>
                        </a>
                    </div>
                </div>
                {event?.data?.map_link && (
                    <div className='event-details__map'>
                        <iframe
                            src={event?.data?.map_link?.url || ""}
                            className='event-details-map__one'
                            allowFullScreen
                        ></iframe>
                    </div>
                )}
            </div>
        </>
    );
}
