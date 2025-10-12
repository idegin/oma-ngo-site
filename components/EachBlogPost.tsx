import React from 'react'

type Props = {}

export default function EachBlogPost({ }: Props) {
    return (
        <>
            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">
                <div className="news-one__single">
                    <div className="news-one__img">
                        <img src="assets/images/blog/news-1-1.jpg" alt="" />
                    </div>
                    <div className="news-one__content-box">
                        <div className="news-one__content-inner">
                            <div className="news-one__content">
                                <ul className="list-unstyled news-one__meta">
                                    <li><a href="news-details.html"><i className="far fa-user-circle"></i> Admin</a>
                                    </li>
                                    <li><a href="news-details.html"><i className="fas fa-comments"></i> 2
                                        Comments</a>
                                    </li>
                                </ul>
                                <h3 className="news-one__title"><a href="news-details.html">How does the
                                    malnutrition
                                    affect children?</a></h3>
                            </div>
                            <div className="news-one__bottom">
                                <div className="news-one__read-more">
                                    <a href="news-details.html"> <span className="icon-right-arrow"></span> Read
                                        More</a>
                                </div>
                                <div className="news-one__share">
                                    <a href="#"><i className="fas fa-share-alt"></i></a>
                                </div>
                            </div>
                            <div className="news-one__social-box">
                                <ul className="list-unstyled news-one__social">
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fab fa-dribbble"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="news-one__date">
                            <p>23 May, 2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}