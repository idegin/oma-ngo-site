"use client";
import { FaqsDocument } from "@/prismicio-types";
import React, { useEffect, useState } from "react";

type Props = {
    data: FaqsDocument | null;
};

export default function FAQSection({ data }: Props) {
    const [show, setShow] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setShow(true);
        }, 2000);
    }, []);

    const handleToggle = (index: number) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    if (!show) return false;

    return (
        <>
            <section className='faq-one'>
                <div
                    className='faq-one-shape-1'
                    style={{
                        backgroundImage:
                            "url(assets/images/shapes/faq-one-shape-1.png)",
                    }}
                ></div>
                <div
                    className='faq-one-bg md:w-[807px] max-w-[100vw] w-full'
                    style={{
                        backgroundImage:
                            "url(assets/images/backgrounds/faq-one-bg.png)",
                    }}
                ></div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-6 col-lg-6'>
                            <div className='faq-one__left'>
                                <div className='section-title text-left'>
                                    <span className='section-title__tagline'>
                                        Frequently Asked Questions
                                    </span>
                                    <h2 className='section-title__title'>
                                        Get Clear Answers on Empowering African
                                        Entrepreneurs
                                    </h2>
                                </div>
                                <p className='faq-one__text-1'>
                                    Find detailed information on how our
                                    programs provide critical training,
                                    resources, and funding to help businesses
                                    thrive.
                                </p>
                                <a
                                    href='/about'
                                    className='thm-btn faq-one__btn'
                                >
                                    Learn How to Apply
                                </a>
                            </div>
                        </div>
                        <div className='col-xl-6 col-lg-6'>
                            <div className='faq-one__right'>
                                <div
                                    className='accrodion-grp'
                                    data-grp-name='faq-one-accrodion'
                                >
                                    {data?.data?.items.map((item, index) => (
                                        <div
                                            key={`faq-item-${index}`}
                                            className={`accrodion ${activeIndex === index ? "active" : ""} ${index === data?.data?.items.length - 1 ? "last-chiled" : ""}`}
                                            onClick={() => handleToggle(index)}
                                        >
                                            <div className='accrodion-title'>
                                                <h4>{item.question}</h4>
                                            </div>
                                            <div className='accrodion-content'>
                                                <div className='inner'>
                                                    <p>{item.answer}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
