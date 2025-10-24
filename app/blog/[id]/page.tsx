import PageHeroSection from "@/components/PageHeroSection";

export default function Page() {
    return <>
        <PageHeroSection/>
        <section className={'news-details'}>
            <div className="container">
                <div className={'row'}>
                    <div className={'col-xl-8 col-lg-7'}>
                        <div className="news-details__left">
                            <div className="news-details__img">
                                <img src="https://dummyimage.com/720x400" alt=""/>
                                <div className="news-details__date">
                                    <p>23 May, 2022</p>
                                </div>
                            </div>
                            <div className="news-details__content">
                                <ul className="list-unstyled news-details__meta">
                                    <li><a href="news-details.html"><i className="far fa-user-circle"></i> Admin</a>
                                    </li>
                                    <li><a href="news-details.html"><i className="fas fa-comments"></i> 2
                                        Comments</a>
                                    </li>
                                </ul>
                                <h3 className="news-details__title">How does the malnutrition affect children?</h3>
                                <p className="news-details__text-1">There are many variations of passages of Lorem Ipsum
                                    available, but the majority have suffered alteration in some form, by injected
                                    humour, or randomised words which don't look even slightly believable. If you are
                                    going to use a passage of Lorem Ipsum. Class aptent taciti sociosqu ad litora
                                    torquent per conubia nostra, per inceptos himenaeos. Vestibulum sollicitudin varius
                                    mauris non dignissim. Sed quis iaculis est. Nulla quam neque, interdum vitae
                                    fermentum lacinia, interdum eu magna. Mauris non posuere tellus. Donec quis euismod
                                    tellus. Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id
                                    magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit.
                                    Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor. Mauris gravida
                                    lacus metus, ac sagittis tortor hendrerit sit amet. Aenean dictum eget nulla in
                                    pharetra. Vestibulum vulputate vehicula mattis. Vivamus dictum nec dui porta rutrum.
                                    Nam erat felis, mattis ac massa at, aliquet tincidunt eros.</p>
                                <p className="news-details__text-2">Nulla quam neque, interdum vitae fermentum lacinia,
                                    interdum eu magna. Mauris non posuere tellus. Donec quis euismod tellus. Nam vel
                                    lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit
                                    sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id
                                    hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor. Mauris gravida lacus
                                    metus, ac sagittis tortor hendrerit sit simply free text amet.</p>
                            </div>
                            <div className="news-details__bottom">
                                <p className="news-details__tags">
                                    <span>Tags</span>
                                    <a href="#">fundraising</a>
                                    <a href="#">charity</a>
                                </p>
                                <div className="news-details__social-list">
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-facebook"></i></a>
                                    <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'col-xl-4 col-lg-5'}>
                        <div className={'sidebar'}>
                            <div className="sidebar__single sidebar__post">
                                <div className="sidebar-shape-1"
                                     style={{backgroundImage: "url(assets/images/shapes/sidebar-shape-1.png)"}}></div>
                                <h3 className="sidebar__title">Latest posts</h3>
                                <ul className="sidebar__post-list list-unstyled">
                                    <li>
                                        <div className="sidebar__post-image">
                                            <img src="assets/images/blog/lp-1-1.jpg" alt=""/>
                                        </div>
                                        <div className="sidebar__post-content">
                                            <h3>
                                                <span className="sidebar__post-content-meta"><i
                                                    className="fas fa-user-circle"></i> By admin</span>
                                                <a href="news-details.html">Promoting the rights
                                                    of children</a>
                                            </h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="sidebar__post-image">
                                            <img src="assets/images/blog/lp-1-2.jpg" alt=""/>
                                        </div>
                                        <div className="sidebar__post-content">
                                            <h3>
                                                <span className="sidebar__post-content-meta"><i
                                                    className="fas fa-user-circle"></i> By admin</span>
                                                <a href="news-details.html">There are many variations of</a>
                                            </h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="sidebar__post-image">
                                            <img src="assets/images/blog/lp-1-3.jpg" alt=""/>
                                        </div>
                                        <div className="sidebar__post-content">
                                            <h3>
                                                <span className="sidebar__post-content-meta"><i
                                                    className="fas fa-user-circle"></i> By admin</span>
                                                <a href="news-details.html">Bring to the table win-win survival</a>
                                            </h3>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="sidebar__single sidebar__category">
                                <div className="sidebar-shape-1"
                                     style={{backgroundImage: "url(assets/images/shapes/sidebar-shape-1.png)"}}></div>
                                <h3 className="sidebar__title">Categories</h3>
                                <ul className="sidebar__category-list list-unstyled">
                                    <li><a href="news-details.html">Donations <span className="icon-right-arrow"></span></a>
                                    </li>
                                    <li className="active"><a href="news-details.html">Charity <span
                                        className="icon-right-arrow"></span></a></li>
                                    <li><a href="news-details.html">Fundraising <span
                                        className="icon-right-arrow"></span></a>
                                    </li>
                                    <li><a href="news-details.html">Food & Water <span
                                        className="icon-right-arrow"></span></a></li>
                                    <li><a href="news-details.html">Kids Education <span
                                        className="icon-right-arrow"></span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}
