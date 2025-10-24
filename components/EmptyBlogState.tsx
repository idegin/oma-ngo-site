import React from "react";

export default function EmptyBlogState() {
    return (
        <>
            <div className='col-12'>
                <div className='empty-blog-state text-center py-5'>
                    <div className='empty-blog-state__icon mb-4 grid place-items-center'>
                        <svg
                            width='80'
                            height='80'
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            className='empty-blog-state__svg'
                        >
                            <path
                                d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                fill='none'
                            />
                            <path
                                d='M14 2v6h6'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            />
                            <path
                                d='M16 13H8'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            />
                            <path
                                d='M16 17H8'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            />
                            <path
                                d='M10 9H8'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            />
                        </svg>
                    </div>

                    <div className='empty-blog-state__content'>
                        <h3 className='empty-blog-state__title mb-3'>
                            No Articles Yet
                        </h3>
                        <p className='empty-blog-state__description mb-4'>
                            We're working on bringing you the latest news and
                            insights. Check back soon for updates!
                        </p>

                        {/* <a
                            href='/about'
                            className='thm-btn empty-blog-state__btn'
                        >
                            Learn More About Us
                        </a> */}
                    </div>
                </div>
            </div>
        </>
    );
}
