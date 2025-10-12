import EachBlogPost from '@/components/EachBlogPost'
import PageHeroSection from '@/components/PageHeroSection'
import React from 'react'

type Props = {}

export default function page({ }: Props) {
    return (
        <>
            <PageHeroSection />
            <section className="news-page">
                <div className="container">
                    <div className="row">
                        <EachBlogPost />
                        <EachBlogPost />
                        <EachBlogPost />
                        <EachBlogPost />
                    </div>
                </div>
            </section>
        </>
    )
}