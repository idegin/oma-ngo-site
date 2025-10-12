import React from 'react'

type Props = {}

export default function ContactInfo({ }: Props) {
    return (
        <>
            <section className="contact-one">
                <div className="container">
                    <div className="contact-one__inne">
                        <ul className="list-unstyled contact-one__list">
                            <li className="contact-one__single">
                                <div className="contact-one__icon">
                                    <span className="icon-phone-call"></span>
                                </div>
                                <div className="contact-one__content">
                                    <p className="contact-one__sub-title">Helpline</p>
                                    <h3 className="contact-one__number"><a href="tel:980009630">+ 98 (000) - 9630</a></h3>
                                </div>
                            </li>
                            <li className="contact-one__single">
                                <div className="contact-one__icon">
                                    <span className="icon-message"></span>
                                </div>
                                <div className="contact-one__content">
                                    <p className="contact-one__sub-title">Send email</p>
                                    <h3 className="contact-one__number"><a
                                        href="mailto:needhelp@company.com">needhelp@company.com</a></h3>
                                </div>
                            </li>
                            <li className="contact-one__single">
                                <div className="contact-one__icon">
                                    <span className="icon-location"></span>
                                </div>
                                <div className="contact-one__content">
                                    <p className="contact-one__sub-title">380 St Kilda Road</p>
                                    <h3 className="contact-one__number">Melbourne, Australia</h3>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}