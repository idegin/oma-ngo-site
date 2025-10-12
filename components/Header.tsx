"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type Props = {}

export default function Header({ }: Props) {
    const pathname = usePathname();
    const navLinks: {
        label: string;
        href: string;
    }[] = [
            { label: 'Home', href: '/' },
            { label: 'About Us', href: '/about' },
            { label: 'Our Programs', href: '/programs' },
            { label: 'Impact', href: '/impact' },
            { label: 'Blog', href: '/blog' },
            { label: 'Contact', href: '/contact' },
        ]

    return (
        <div className='grid grid-cols-1 max-w-screen'>
            <header className="main-header max-w-screen">
                <nav className="main-menu">
                    <div className="main-menu__wrapper">
                        <div className="main-menu__wrapper-inner">
                            <div className="main-menu__left">
                                <div className="main-menu__logo">
                                    <Link href="/">
                                        <img src="/brand/logo-black.png" alt="logo" />
                                    </Link>
                                </div>
                                <div className="main-menu__shape-1 float-bob-x">
                                    <img src="/assets/images/shapes/main-menu-shape-1.png" alt="" />
                                </div>
                            </div>
                            <div className="main-menu__right">
                                <div className="main-menu__right-top">
                                    <div className="main-menu__right-top-left">
                                        <div className="main-menu__volunteers">
                                            <div className="main-menu__volunteers-icon">
                                                <img src="/assets/images/icon/main-menu-heart-icon.png" alt="" />
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
                                            {
                                                navLinks.map((link) => (
                                                    <li className={`dropdown ${pathname.includes(link.href) ? 'current' : ''}`} key={link.href}>
                                                        <a href={link.href}>{link.label}</a>
                                                    </li>
                                                ))
                                            }
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
                                            <div className="main-menu__btn-box">
                                                <Link href="/donate" className="main-menu__btn max-w-[200px] w-[200px]"> <span
                                                    className="fa fa-heart"></span> Donate
                                                    now</Link>
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