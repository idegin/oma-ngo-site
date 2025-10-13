import React from 'react'

type Props = {}

export default function CTASection2({ }: Props) {
    return (
        <>
            <section className="become-volunteer-one">
                <div className="become-volunteer-one__bg-box">
                    <div className="become-volunteer-one__bg jarallax" data-jarallax data-speed="0.2" data-imgPosition="50% 0%"
                        style={{ backgroundImage: "url(assets/images/backgrounds/become-volunteer-one-bg.jpg)" }}></div>
                </div>
                <div className="become-volunteer-one__shape-1"
                    style={{ backgroundImage: "url(assets/images/shapes/become-volunteer-shape-1.png)" }}></div>
                <div className="container">
                    <div className="become-volunteer-one__inner">
                        <p className="become-volunteer-one__sub-title">Invest in Africa's Future</p>
                        <h3 className="become-volunteer-one__title">Your Donation Fuels Sustainable Businesses<br/> and Stronger Communities.
                        </h3>
                        <div className="become-volunteer-one__btn-box">
                            <a href="/donate" className="thm-btn become-volunteer-one__btn">Donate Now</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}