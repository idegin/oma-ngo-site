import { BlogDocument } from "@/prismicio-types";
import moment from "moment";
import React from "react";

type EachBlogPostProps = {
    blog: BlogDocument;
};

export default function EachBlogPost({ blog }: EachBlogPostProps) {
    return (
        <>
            <div
                className='col-xl-4 col-lg-4 wow fadeInUp'
                data-wow-delay='100ms'
            >
                <div className='news-one__single'>
                    <div className='news-one__img'>
                        <img
                            src={blog?.data?.featured_image?.url as string}
                            alt={blog?.data?.title as string}
                        />
                    </div>
                    <div className='news-one__content-box'>
                        <div className='news-one__content-inner'>
                            <div className='news-one__content'>
                                <ul className='list-unstyled news-one__meta'>
                                    <li>
                                        <a href={`/blog/${blog?.uid}`}>
                                            <i className='far fa-user-circle'></i>{" "}
                                            Admin
                                        </a>
                                    </li>
                                    {/* <li><a href="news-details.html"><i className="fas fa-comments"></i> 2
                                        Comments</a>
                                    </li> */}
                                </ul>
                                <h3 className='news-one__title'>
                                    <a href={`/blog/${blog?.uid}`}>
                                        {blog?.data?.title}
                                    </a>
                                </h3>
                            </div>
                            <div className='news-one__bottom'>
                                <div className='news-one__read-more'>
                                    <a href={`/blog/${blog?.uid}`}>
                                        {" "}
                                        <span className='icon-right-arrow'></span>{" "}
                                        Read More
                                    </a>
                                </div>
                                <div className='news-one__share'>
                                    <a href='#'>
                                        <i className='fas fa-share-alt'></i>
                                    </a>
                                </div>
                            </div>
                            <div className='news-one__social-box'>
                                <ul className='list-unstyled news-one__social'>
                                    <li>
                                        <a href='#'>
                                            <i className='fab fa-facebook-f'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#'>
                                            <i className='fab fa-twitter'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#'>
                                            <i className='fab fa-dribbble'></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='news-one__date'>
                            {/*  */}
                            <p>
                                {moment(blog?.first_publication_date).format(
                                    "DD MMM, YYYY"
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
