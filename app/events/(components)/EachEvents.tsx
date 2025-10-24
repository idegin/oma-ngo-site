import { CategoriesDocument, EventsDocument } from "@/prismicio-types";
import moment from "moment";
import React from "react";

type Props = {
    event: EventsDocument;
};

export default function EachEvents({ event }: Props) {
    const category = event?.data?.category as unknown as CategoriesDocument;
    return (
        <div className='col-xl-4 col-lg-6 col-md-6'>
            <div className='events-one__single'>
                <div className='events-one__img'>
                    {/* <img src="https://dummyimage.com/400x400" alt="" /> */}
                    <div
                        className='min-h-[30rem] w-full'
                        style={{
                            backgroundImage: `url(https://dummyimage.com/400x400)`,
                        }}
                    />
                    <div className='events-one__date'>
                        <p>
                            {moment(event?.data?.date).format("DD MMM, YYYY")}
                        </p>
                    </div>
                    <div className='events-one__content'>
                        <ul className='list-unstyled events-one__meta'>
                            <li>
                                <i className='fas fa-clock'></i>
                                {moment(event?.data?.start_time).format(
                                    "HH:mm"
                                )}
                            </li>
                            <li>
                                <i className='fas fa-map-marker-alt'></i>
                                {event?.data?.location}
                            </li>
                        </ul>
                        <h3 className='events-one__title'>
                            <a href={`/events/${event?.uid}`}>
                                {event?.data?.title}
                            </a>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
