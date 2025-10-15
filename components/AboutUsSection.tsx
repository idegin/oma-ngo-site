import React from 'react'

type Props = {}

export default function AboutUsSection({ }: Props) {
    return (
        <>
            <section className="about-one">
            <div className="about-one__shape-box-1">
                <div className="about-one__shape-1"
                    style={{ backgroundImage: "url(/assets/images/shapes/about-one-shape-1.png)" }}></div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-one__left">
                            <div className="about-one__img-box wow slideInLeft" data-wow-delay="100ms"
                                data-wow-duration="2500ms">
                                <div className="about-one__img">
                                    <img src="/ai/Image_fx (10).jpg" alt=""/>
                                    {/* <img src="/assets/images/resources/about-one-img-1.jpg" alt=""/> */}
                                </div>
                                <div className="about-one__img-border"></div>
                                <div className="about-one__curved-circle-box">
                                    <div className="curved-circle">
                                        <span className="curved-circle--item">
                                            {/* 25 YEARS EXPERIENCE OXPINS CHARITY CENTER */}
                                        </span>
                                    </div>
                                    <div className="about-one__curved-circle-icon">
                                        <img src="/brand/icon.png" alt="" className='h-[8rem]' />
                                    </div>
                                </div>
                                <div className="about-one__shape-2 zoom-fade">
                                    <img src="/assets/images/shapes/about-one-shape-2.png" alt=""/>
                                </div>
                                <div className="about-one__shape-3 float-bob-y">
                                    <img src="/assets/images/shapes/about-one-shape-3.png" alt=""/>
                                </div>
                                <div className="about-one__shape-4 zoominout">
                                    <img src="/assets/images/shapes/about-one-shape-4.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-one__right">
                            <div className="section-title text-left">
                                <span className="section-title__tagline">Welcome to AfriCapital</span>
                                <h2 className="section-title__title">Building Africa's Wealth, Together.</h2>
                            </div>
                            <p className="about-one__text">
                                We empower African entrepreneurs with the skills, tools, and networks they need to build sustainable businesses. Our impact is about more than moving money—it's about investing in the people and ideas that will drive economic growth and transform communities across the continent.
                            </p>
                            <div className="about-one__fund">
                                <p className="about-one__fund-text">We've equipped over <span>15,000</span> entrepreneurs across
                                    <span>20</span> African nations, benefiting over <br/> <span>1,200</span> sustainable businesses.</p>
                            </div>
                            <ul className="list-unstyled about-one__points">
                                <li>
                                    <div className="icon">
                                        <span className="icon-volunteer"></span>
                                    </div>
                                    <div className="text">
                                        <h5><a href="become-volunteer.html">Join our mission</a></h5>
                                        <p>Share your expertise as a mentor or partner to help business leaders thrive.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-solidarity"></span>
                                    </div>
                                    <div className="text">
                                        <h5><a href="donate-now.html">Fuel an enterprise</a></h5>
                                        <p>Provide resources and training that turn ideas into thriving businesses.</p>
                                    </div>
                                </li>
                            </ul>
                            <a href="/about" className="thm-btn about-one__btn">Discover More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}