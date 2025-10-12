import React from 'react'

type Props = {}

export default function Header({ }: Props) {
    return (
        <div className='grid grid-cols-1 max-w-screen'>
            <header className="main-header max-w-screen">
                <nav className="main-menu">
                    <div className="main-menu__wrapper">
                        <div className="main-menu__wrapper-inner">
                            <div className="main-menu__left">
                                <div className="main-menu__logo">
                                    <a href="index.html"><img src="assets/images/resources/logo-1.png" alt="" /></a>
                                </div>
                                <div className="main-menu__shape-1 float-bob-x">
                                    <img src="assets/images/shapes/main-menu-shape-1.png" alt="" />
                                </div>
                            </div>
                            <div className="main-menu__right">
                                <div className="main-menu__right-top">
                                    <div className="main-menu__right-top-left">
                                        <div className="main-menu__volunteers">
                                            <div className="main-menu__volunteers-icon">
                                                <img src="assets/images/icon/main-menu-heart-icon.png" alt="" />
                                            </div>
                                            <div className="main-menu__volunteers-text-box">
                                                <p className="main-menu__volunteers-text"><a href="become-volunteer.html">Become
                                                    a
                                                    <span>volunteers</span></a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-menu__right-top-right">
                                        <div className="main-menu__right-top-address">
                                            <ul className="list-unstyled main-menu__right-top-address-list">
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-phone-call"></span>
                                                    </div>
                                                    <div className="content">
                                                        <p>Helpline</p>
                                                        <h5><a href="tel:980009630">+ 98 (000) - 9630</a></h5>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-message"></span>
                                                    </div>
                                                    <div className="content">
                                                        <p>Send email</p>
                                                        <h5><a href="mailto:needhelp@company.com">needhelp@company.com</a>
                                                        </h5>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-location"></span>
                                                    </div>
                                                    <div className="content">
                                                        <p>380 St Kilda Road</p>
                                                        <h5>Melbourne, Australia</h5>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="main-menu__right-top-social">
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fab fa-facebook"></i></a>
                                            <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                            <a href="#"><i className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="main-menu__right-bottom">
                                    <div className="main-menu__main-menu-box">
                                        <a href="#" className="mobile-nav__toggler"><i className="fa fa-bars"></i></a>
                                        <ul className="main-menu__list">
                                            <li className="megamenu current megamenu-clickable megamenu-clickable--toggler">
                                                <a href="index.html">Demos</a>
                                                <ul>
                                                    <li>
                                                        <div className="megamenu-popup">
                                                            <a href="#" className="megamenu-clickable--close"><span className="icon-close"></span></a>
                                                            <div className="megamenu-popup__content">
                                                                <div className="demo-one">
                                                                    <div className="container">
                                                                        <div className="row">
                                                                            <div className="col-md-6 col-lg-4">
                                                                                <div className="demo-one__card">
                                                                                    <div className="demo-one__image">
                                                                                        <img width="370" height="431" src="assets/images/home-showcase/home-1-1.png"
                                                                                            alt="Home Page 01" />
                                                                                        <div className="demo-one__btns">
                                                                                            <a href="index.html" className="thm-btn">Multi Page </a>
                                                                                            <a href="index-one-page.html" className="thm-btn">One Page</a>
                                                                                            <a href="index-dark.html" className="thm-btn">Dark Page</a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="demo-one__content">
                                                                                        <h3 className="demo-one__title">
                                                                                            <a href="index.html">Home Page 01</a>
                                                                                        </h3>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-6 col-lg-4">
                                                                                <div className="demo-one__card">
                                                                                    <div className="demo-one__image">
                                                                                        <img width="370" height="431" src="assets/images/home-showcase/home-1-2.png"
                                                                                            alt="Home Page 02" />
                                                                                        <div className="demo-one__btns">
                                                                                            <a href="index2.html" className="thm-btn">Multi Page </a>
                                                                                            <a href="index2-one-page.html" className="thm-btn">One
                                                                                                Page</a>
                                                                                            <a href="index2-dark.html" className="thm-btn">Dark Page</a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="demo-one__content">
                                                                                        <h3 className="demo-one__title">
                                                                                            <a href="index2.html">Home Page 02</a>
                                                                                        </h3>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-6 col-lg-4">
                                                                                <div className="demo-one__card">
                                                                                    <div className="demo-one__image">
                                                                                        <img width="370" height="431" src="assets/images/home-showcase/home-1-3.png"
                                                                                            alt="Home page 03" />
                                                                                        <div className="demo-one__btns">
                                                                                            <a href="index3.html" className="thm-btn">Multi Page </a>
                                                                                            <a href="index3-one-page.html" className="thm-btn">One
                                                                                                Page</a>
                                                                                            <a href="index3-dark.html" className="thm-btn">Dark Page</a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="demo-one__content">
                                                                                        <h3 className="demo-one__title">
                                                                                            <a href="index3.html">Home Page 03</a>
                                                                                        </h3>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-6 col-lg-4">
                                                                                <div className="demo-one__card">
                                                                                    <div className="demo-one__image">
                                                                                        <img width="370" height="431" src="assets/images/home-showcase/home-1-4.png"
                                                                                            alt="Home page 04" />
                                                                                        <div className="demo-one__btns">
                                                                                            <a href="index4.html" className="thm-btn">Multi Page </a>
                                                                                            <a href="index4-one-page.html" className="thm-btn">One
                                                                                                Page</a>
                                                                                            <a href="index4-dark.html" className="thm-btn">Dark Page</a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="demo-one__content">
                                                                                        <h3 className="demo-one__title">
                                                                                            <a href="index4.html">Home Page 04</a>
                                                                                        </h3>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-6 col-lg-4">
                                                                                <div className="demo-one__card">
                                                                                    <div className="demo-one__image">
                                                                                        <img width="370" height="431" src="assets/images/home-showcase/home-1-5.png"
                                                                                            alt="Home page 05" />
                                                                                        <div className="demo-one__btns">
                                                                                            <a href="index5.html" className="thm-btn">Multi Page </a>
                                                                                            <a href="index5-one-page.html" className="thm-btn">One
                                                                                                Page</a>
                                                                                            <a href="index5-dark.html" className="thm-btn">Dark Page</a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="demo-one__content">
                                                                                        <h3 className="demo-one__title">
                                                                                            <a href="index5.html">Home Page 05</a>
                                                                                        </h3>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-6 col-lg-4">
                                                                                <div className="demo-one__card">
                                                                                    <div className="demo-one__image">
                                                                                        <img width="370" height="431" src="assets/images/home-showcase/home-1-6.png"
                                                                                            alt="Home Boxed" />
                                                                                        <div className="demo-one__btns">
                                                                                            <a href="index-boxed.html" className="thm-btn">View
                                                                                                Page</a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="demo-one__content">
                                                                                        <h3 className="demo-one__title">
                                                                                            <a href="index-boxed.html">Home Boxed</a>
                                                                                        </h3>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-6 col-lg-4">
                                                                                <div className="demo-one__card">
                                                                                    <div className="demo-one__image">
                                                                                        <img width="370" height="431" src="assets/images/home-showcase/home-1-7.png"
                                                                                            alt="Home RTL" />
                                                                                        <div className="demo-one__btns">
                                                                                            <a href="index-rtl.html#googtrans(en%7car)" className="thm-btn">View Page</a>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="demo-one__content">
                                                                                        <h3 className="demo-one__title">
                                                                                            <a href="index-rtl.html#googtrans(en%7car)">Home RTL</a>
                                                                                        </h3>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown">
                                                <a href="#">Pages</a>
                                                <ul>
                                                    <li><a href="about.html">About</a></li>
                                                    <li><a href="volunteer.html">Volunteer</a></li>
                                                    <li><a href="become-volunteer.html">Become volunteer</a></li>
                                                    <li><a href="volunteer-carousel.html">Volunteer carousel</a></li>
                                                    <li><a href="gallery.html">Gallery</a></li>
                                                    <li><a href="gallery-carousel.html">Gallery carousel</a></li>
                                                    <li><a href="faq.html">FAQs</a></li>
                                                    <li><a href="404.html">404 Error</a></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown">
                                                <a href="#">Donations</a>
                                                <ul>
                                                    <li><a href="donation.html">Donation</a></li>
                                                    <li><a href="donations-list.html">Donation list</a></li>
                                                    <li><a href="donation-carousel.html">Donation carousel</a></li>
                                                    <li><a href="donation-details.html">Donation details</a></li>
                                                    <li><a href="donate-now.html">Donate Now</a></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown">
                                                <a href="#">Events</a>
                                                <ul>
                                                    <li><a href="events.html">Events</a></li>
                                                    <li><a href="events-carousel.html">Events carousel</a></li>
                                                    <li><a href="event-details.html">Event details</a></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown">
                                                <a href="#">News</a>
                                                <ul>
                                                    <li><a href="news.html">News</a></li>
                                                    <li><a href="news-carousel.html">News carousel</a></li>
                                                    <li><a href="news-sidebar.html">News right sidebar</a></li>
                                                    <li><a href="news-sidebar-left.html">News left sidebar</a></li>
                                                    <li><a href="news-details.html">News details</a></li>
                                                    <li className="dropdown">
                                                        <a href="#">News Grid</a>
                                                        <ul className="sub-menu">
                                                            <li><a href="blog-grid.html">No Sidebar</a></li>
                                                            <li><a href="blog-grid-left.html">Left Sidebar</a></li>
                                                            <li><a href="blog-grid-right.html">Right Sidebar</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown">
                                                <a href="products.html">Shop</a>
                                                <ul>
                                                    <li><a href="products.html">Shop</a></li>
                                                    <li><a href="product-details.html">Product details</a></li>
                                                    <li><a href="cart.html">Cart</a></li>
                                                    <li><a href="checkout.html">Checkout</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="contact.html">Contact</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="main-menu__main-menu-content-box">
                                        <div className="main-menu__search-cat-btn-box">
                                            <div className="main-menu__search-box">
                                                <a href="#"
                                                    className="main-menu__search search-toggler icon-magnifying-glass"></a>
                                            </div>
                                            <div className="main-menu__cat-box">
                                                <a href="cart.html" className="main-menu__cart icon-shopping-cart"></a>
                                            </div>
                                            <div className="main-menu__btn-box" style={{ maxWidth: "200px" }}>
                                                <a style={{ maxWidth: "200px" }} href="donate-now.html" className="main-menu__btn max-w-[200px] w-[200px]"> <span
                                                    className="fa fa-heart"></span> Donate
                                                    now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="stricky-header stricked-menu main-menu">
                <div className="sticky-header__content"></div>
            </div>
        </div>
    )
}