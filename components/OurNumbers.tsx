import React from 'react'

type Props = {}

export default function OurNumbers({ }: Props) {
    return (
        <>
            <section className="counter-one">
                <div className="container">
                    <div className="counter-one__inner">
                        <div className="counter-one-bg" data-jarallax data-speed="0.2" data-imgposition="50% 0%"
                            style={{ backgroundImage: "url(assets/images/backgrounds/counter-one-bg.jpg)" }}></div>
                        <ul className="list-unstyled counter-one__list">
                            <li className="counter-one__single">
                                <div className="counter-one__count-box">
                                    <h3 className="odometer" data-count="15000">15,000</h3>
                                    <span className="counter-one__letter">+</span>
                                </div>
                                <p className="counter-one__text">Entrepreneurs Equipped</p>
                            </li>
                            <li className="counter-one__single">
                                <div className="counter-one__count-box">
                                    <h3 className="odometer" data-count="1200">1,200</h3>
                                    <span className="counter-one__letter">+</span>
                                </div>
                                <p className="counter-one__text">Businesses Launched</p>
                            </li>
                            <li className="counter-one__single">
                                <div className="counter-one__count-box">
                                    <h3 className="odometer" data-count="20">20</h3>
                                    <span className="counter-one__letter">+</span>
                                </div>
                                <p className="counter-one__text">Countries Served</p>
                            </li>
                            <li className="counter-one__single">
                                <div className="counter-one__count-box">
                                    <h3 className="odometer" data-count="500">500</h3>
                                    <span className="counter-one__letter">+</span>
                                </div>
                                <p className="counter-one__text">Mentors & Partners</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}