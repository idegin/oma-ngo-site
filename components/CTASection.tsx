import React from 'react'

export default function CTASection() {
    return (
        <>
            <section className="become-volunteer">
                <div className="container">
                    <div className="become-volunteer__inner">
                        <div className="become-volunteer__left">
                            <div className="section-title text-left">
                                <span className="section-title__tagline">Be a Catalyst for Change</span>
                                <h2 className="section-title__title">
                                    Your Donation Empowers African Entrepreneurs<br/> to Build and Scale
                                </h2>
                            </div>
                        </div>
                        <div className="become-volunteer__right">
                            <a href="/donate" className="thm-btn become-volunteer__btn">Donate Now</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
