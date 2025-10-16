import React from 'react'

type Props = {}

export default function EventLeft({ }: Props) {
    return (
        <div className='event-details__left'>
            <div className="event-details__top">
                <div className="event-details__date">
                    <p>23 May, 2022</p>
                </div>
                <h3 className="event-details__title">Play for the world</h3>
                <p className="event-details__text-1">Neque porro est qui dolorem ipsum quia quaed inventore
                    veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus
                    quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is
                    simply dummy text of the printing and typesetting industry.</p>
                <p className="event-details__text-2">Biophilia is the idea that humans possess an innate
                    tendency to seek connections with nature. The term translates</p>
                <p className="event-details__text-3">When an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining essentially unchanged.
                    Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus
                    eros.</p>
            </div>
            <div className='event-details__bottom'>
                <div className="event-details__btn-box">
                    <a href="/reservation" className="thm-btn event-details__btn">
                        Reserve Your Seat
                    </a>
                </div>
            </div>
        </div>
    )
}