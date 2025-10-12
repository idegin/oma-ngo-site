import React from 'react'

type Props = {}

export default function PageHeroSection({ }: Props) {
    return (
        <>
            <section className="page-header">
                <div className="page-header-bg" style={{ backgroundImage: 'url(/assets/images/backgrounds/page-header-bg.jpg)' }}>
                </div>
                <div className="container">
                    <div className="page-header__inner">
                        <ul className="thm-breadcrumb list-unstyled">
                            <li><a href="index.html">Home</a></li>
                            <li><span>/</span></li>
                            <li className="active">News</li>
                        </ul>
                        <h2>Latest news</h2>
                    </div>
                </div>
            </section>
        </>
    )
}