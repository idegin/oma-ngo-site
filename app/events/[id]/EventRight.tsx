import React from 'react'

type Props = {}

export default function EventRight({ }: Props) {
    return (
        <>
            <div className="event-details__right">
                <div className="event-details__info">
                    <ul className="list-unstyled event-details__info-list">
                        <li>
                            <span>Time:</span>
                            <p>8:00 am to 12:30 pm</p>
                        </li>
                        <li>
                            <span>Date:</span>
                            <p>23 May, 2022</p>
                        </li>
                        <li>
                            <span>Category:</span>
                            <p>Health, Medical</p>
                        </li>
                        <li>
                            <span>Location:</span>
                            <p>Broklyn, New York</p>
                        </li>
                    </ul>
                    <div className="event-details__social">
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-pinterest-p"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div className="event-details__map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
                        className="event-details-map__one" allowFullScreen></iframe>
                </div>
            </div>
        </>
    )
}