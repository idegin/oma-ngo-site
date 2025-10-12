import React from 'react'
import EachBlogPost from './EachBlogPost'

type Props = {}

export default function BlogSection({ }: Props) {
    return (
        <>
            <section className="news-one">
                <div className="container">
                    <div className="section-title text-center">
                        <span className="section-title__tagline">News & articles</span>
                        <h2 className="section-title__title">Directly from the <br /> latest news and articles
                        </h2>
                    </div>
                    <div className="row">

                        <EachBlogPost />
                        <EachBlogPost />
                        <EachBlogPost />

                    </div>
                </div>
            </section>
        </>
    )
}