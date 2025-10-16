import React from 'react'

type Props = {}

export default function EachEvents({ }: Props) {
    return (
        <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="events-one__single">
                <div className="events-one__img">
                    {/* <img src="https://dummyimage.com/400x400" alt="" /> */}
                    <div className='min-h-[30rem] w-full' style={{ backgroundImage: `url(https://dummyimage.com/400x400)`}} />
                    <div className="events-one__date">
                        <p>23 May, 2022</p>
                    </div>
                    <div className="events-one__content">
                        <ul className="list-unstyled events-one__meta">
                            <li><i className="fas fa-clock"></i>8:00pm</li>
                            <li><i className="fas fa-map-marker-alt"></i>New York</li>
                        </ul>
                        <h3 className="events-one__title"><a href="/events/3">Play for the
                            world
                            with us</a></h3>
                    </div>
                </div>
            </div>
        </div>
    )
}