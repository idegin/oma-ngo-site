import React from 'react'

type Props = {}

export default function PeopleSection({ }: Props) {
    return (
        <>
            <section className="team-one">
                <div className="container">
                    <div className="section-title text-center">
                        <span className="section-title__tagline">Our expert team</span>
                        <h2 className="section-title__title">Meet the team behind <br /> their success story</h2>
                    </div>
                    <div className="row">

                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                            <div className="team-one__single">
                                <div className="team-one__img">
                                    <img src="assets/images/team/team-1-1.jpg" alt="" />
                                    <div className="team-one__social">
                                        <a href="#"><i className="fab fa-facebook"></i></a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="team-one__content">
                                    <h3 className="team-one__name"><a href="team-details.html">Sarah albert</a></h3>
                                    <p className="team-one__sub-title">Volunteer</p>
                                </div>
                            </div>
                        </div>


                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                            <div className="team-one__single">
                                <div className="team-one__img">
                                    <img src="assets/images/team/team-1-2.jpg" alt="" />
                                    <div className="team-one__social">
                                        <a href="#"><i className="fab fa-facebook"></i></a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="team-one__content">
                                    <h3 className="team-one__name"><a href="team-details.html">Kevin martin</a></h3>
                                    <p className="team-one__sub-title">Volunteer</p>
                                </div>
                            </div>
                        </div>


                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                            <div className="team-one__single">
                                <div className="team-one__img">
                                    <img src="assets/images/team/team-1-3.jpg" alt="" />
                                    <div className="team-one__social">
                                        <a href="#"><i className="fab fa-facebook"></i></a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="team-one__content">
                                    <h3 className="team-one__name"><a href="team-details.html">Aleesha eve</a></h3>
                                    <p className="team-one__sub-title">Volunteer</p>
                                </div>
                            </div>
                        </div>


                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                            <div className="team-one__single">
                                <div className="team-one__img">
                                    <img src="assets/images/team/team-1-4.jpg" alt="" />
                                    <div className="team-one__social">
                                        <a href="#"><i className="fab fa-facebook"></i></a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="team-one__content">
                                    <h3 className="team-one__name"><a href="team-details.html">David cooper</a></h3>
                                    <p className="team-one__sub-title">Volunteer</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}