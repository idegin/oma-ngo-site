import React from "react";
import EachBlogPost from "./EachBlogPost";
import EmptyBlogState from "./EmptyBlogState";
import { BlogDocument } from "@/prismicio-types";

type BlogSectionProps = {
    blogData: BlogDocument[];
};

export default function BlogSection({ blogData }: BlogSectionProps) {
    return (
        <>
            <section className='news-one'>
                <div className='container'>
                    <div className='section-title text-center'>
                        <span className='section-title__tagline'>
                            News & articles
                        </span>
                        <h2 className='section-title__title'>
                            Directly from the <br /> latest news and articles
                        </h2>
                    </div>
                    <div className='row'>
                        {blogData?.length ? (
                            blogData.map((blog) => (
                                <EachBlogPost key={blog.id} blog={blog} />
                            ))
                        ) : (
                            <EmptyBlogState />
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}
