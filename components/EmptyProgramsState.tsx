import React from "react";

export default function EmptyProgramsState() {
    return (
        <>
            <div className='col-12'>
                <div className='empty-state text-center py-5'>
                    <div className='empty-state__icon mb-4'>
                        <div className='empty-state__icon-wrapper'>
                            <svg
                                width='120'
                                height='120'
                                viewBox='0 0 24 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                                className='empty-state__svg'
                            >
                                {/* Heart with gradient */}
                                <defs>
                                    <linearGradient
                                        id='heartGradient'
                                        x1='0%'
                                        y1='0%'
                                        x2='100%'
                                        y2='100%'
                                    >
                                        <stop
                                            offset='0%'
                                            style={{
                                                stopColor: "#ff6b6b",
                                                stopOpacity: 1,
                                            }}
                                        />
                                        <stop
                                            offset='100%'
                                            style={{
                                                stopColor: "#ff8e53",
                                                stopOpacity: 1,
                                            }}
                                        />
                                    </linearGradient>
                                </defs>
                                <path
                                    d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'
                                    fill='url(#heartGradient)'
                                    className='empty-state__heart'
                                />
                                {/* Sparkle effects */}
                                <circle
                                    cx='6'
                                    cy='8'
                                    r='1'
                                    fill='#ffd700'
                                    opacity='0.8'
                                >
                                    <animate
                                        attributeName='opacity'
                                        values='0.8;0.3;0.8'
                                        dur='2s'
                                        repeatCount='indefinite'
                                    />
                                </circle>
                                <circle
                                    cx='18'
                                    cy='12'
                                    r='1'
                                    fill='#ffd700'
                                    opacity='0.6'
                                >
                                    <animate
                                        attributeName='opacity'
                                        values='0.6;0.2;0.6'
                                        dur='2.5s'
                                        repeatCount='indefinite'
                                    />
                                </circle>
                                <circle
                                    cx='8'
                                    cy='16'
                                    r='1'
                                    fill='#ffd700'
                                    opacity='0.7'
                                >
                                    <animate
                                        attributeName='opacity'
                                        values='0.7;0.1;0.7'
                                        dur='1.8s'
                                        repeatCount='indefinite'
                                    />
                                </circle>
                                <circle
                                    cx='16'
                                    cy='6'
                                    r='1'
                                    fill='#ffd700'
                                    opacity='0.5'
                                >
                                    <animate
                                        attributeName='opacity'
                                        values='0.5;0.3;0.5'
                                        dur='2.2s'
                                        repeatCount='indefinite'
                                    />
                                </circle>
                            </svg>
                        </div>
                    </div>

                    <div className='empty-state__content'>
                        <h3 className='empty-state__title mb-3'>
                            No Programs Available Yet
                        </h3>
                        <p className='empty-state__description mb-4'>
                            We're working hard to bring you amazing empowerment
                            programs. Check back soon for opportunities to
                            transform lives and build communities!
                        </p>

                        <div className='empty-state__actions'>
                            {/* <a
                                href='/about'
                                className='thm-btn empty-state__btn mb-3'
                            >
                                Learn More About Us
                            </a> */}
                            {/* <div className='empty-state__contact'>
                                <p className='mb-2'>
                                    <i className='fas fa-envelope me-2'></i>
                                    Stay updated with our latest programs
                                </p>
                                <a
                                    href='/contact'
                                    className='empty-state__link'
                                >
                                    Contact Us for Updates
                                </a>
                            </div> */}
                        </div>
                    </div>

                    {/* Decorative elements */}
                    <div className='empty-state__decorations'>
                        <div
                            className='empty-state__shape-1'
                            style={{
                                backgroundImage:
                                    "url(/assets/images/shapes/causes-one-progress-shape-1.png)",
                                backgroundSize: "contain",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        </>
    );
}
