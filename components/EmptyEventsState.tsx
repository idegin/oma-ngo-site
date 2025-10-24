import React from "react";

export default function EmptyEventsState() {
    return (
        <>
            <div className='col-12'>
                <div className='empty-events-state text-center py-5'>
                    <div className='empty-events-state__icon mb-4 grid place-items-center'>
                        <svg
                            width='80'
                            height='80'
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            className='empty-events-state__svg'
                        >
                            <path
                                d='M8 2v5'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            />
                            <path
                                d='M16 2v5'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            />
                            <path
                                d='M3 9h18'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            />
                            <path
                                d='M19 9v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            />
                            <path
                                d='M8 15h8'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            />
                            <path
                                d='M8 19h8'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            />
                        </svg>
                    </div>

                    <div className='empty-events-state__content'>
                        <h3 className='empty-events-state__title mb-3'>
                            No Events Scheduled
                        </h3>
                        <p className='empty-events-state__description mb-4'>
                            We're planning exciting events and workshops. Check
                            back soon for upcoming opportunities to connect and
                            learn!
                        </p>

                        {/* <a
                            href='/contact'
                            className='thm-btn empty-events-state__btn'
                        >
                            Get Notified About Events
                        </a> */}
                    </div>
                </div>
            </div>
        </>
    );
}
