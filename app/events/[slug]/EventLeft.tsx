import React from "react";
import { EventsDocument } from "@/prismicio-types";
import moment from "moment";
import { PrismicRichText } from "@prismicio/react";

type Props = {
    event: EventsDocument;
};

export default function EventLeft({ event }: Props) {
    return (
        <div className='event-details__left'>
            <div className='event-details__top'>
                <div className='event-details__date'>
                    <p>{moment(event?.data?.date).format("DD MMM, YYYY")}</p>
                </div>
                <h3 className='event-details__title'>{event?.data?.title}</h3>

                <div className='event-details__content'>
                    <PrismicRichText field={event?.data?.content} />
                </div>
                {/* <p className='event-details__text-1'>
                    Neque porro est qui dolorem ipsum quia quaed inventore
                    veritatis et quasi architecto beatae vitae dicta sunt
                    explicabo. Aelltes port lacus quis enim var sed efficitur
                    turpis gilla sed sit amet finibus eros. Lorem Ipsum is
                    simply dummy text of the printing and typesetting industry.
                </p>
                <p className='event-details__text-2'>
                    Biophilia is the idea that humans possess an innate tendency
                    to seek connections with nature. The term translates
                </p>
                <p className='event-details__text-3'>
                    When an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. Aelltes port
                    lacus quis enim var sed efficitur turpis gilla sed sit amet
                    finibus eros.
                </p> */}
            </div>
            <div className='event-details__bottom'>
                <div className='event-details__btn-box'>
                    <a
                        // @ts-ignore
                        href={event?.data?.event_link?.url || ""}
                        className='thm-btn event-details__btn'
                    >
                        Reserve Your Seat
                    </a>
                </div>
            </div>
        </div>
    );
}
