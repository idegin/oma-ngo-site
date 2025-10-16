'use client'
import React, { useEffect, useState } from 'react'

type Props = {}

interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

const faqItems: FAQItem[] = [
    {
        id: 1,
        question: "What is the main goal of AfriCapital?",
        answer: "AfriCapital exists to bridge the gap between ambition and opportunity for African entrepreneurs. We empower them with education, mentorship, and resources to start, grow, and scale sustainable businesses that drive economic growth across Africa and the diaspora."
    },
    {
        id: 2,
        question: "What kind of programs do you offer?",
        answer: "Our programs are built on four key pillars: Learning & Development (courses, workshops), Access & Empowerment (tool grants, startup kits), Mentorship & Community (peer networks, mentors), and Visibility & Opportunities (showcases, events) for African businesses."
    },
    {
        id: 3,
        question: "Who is eligible for your programs?",
        answer: "Our programs are designed for aspiring and existing entrepreneurs across Africa and the African diaspora. Whether you are just starting out or looking to scale your business, we offer tailored support to help you achieve your goals."
    },
    {
        id: 4,
        question: "How is my donation used?",
        answer: "Your donation directly fuels our mission. It helps fund essential resources like startup toolkits and business grants, supports our free training programs, and builds the mentorship network that connects entrepreneurs with vital knowledge and opportunities."
    }
];

export default function FAQSection({ }: Props) {
    const [show, setShow] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setShow(true);
        }, 2000);
    }, [])

    const handleToggle = (index: number) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    if (!show) return false;

    return (
        <>
            <section className="faq-one">
                <div className="faq-one-shape-1" style={{ backgroundImage: "url(assets/images/shapes/faq-one-shape-1.png)" }}></div>
                <div className="faq-one-bg md:w-[807px] max-w-[100vw] w-full" style={{ backgroundImage: "url(assets/images/backgrounds/faq-one-bg.png)" }}></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="faq-one__left">
                                <div className="section-title text-left">
                                    <span className="section-title__tagline">Frequently Asked Questions</span>
                                    <h2 className="section-title__title">
                                        Get Clear Answers on Empowering African Entrepreneurs
                                    </h2>
                                </div>
                                <p className="faq-one__text-1">
                                    Find detailed information on how our programs provide critical training, resources, and funding to help businesses thrive.
                                </p>
                                <a href="/about" className="thm-btn faq-one__btn">
                                    Learn How to Apply
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="faq-one__right">
                                <div className="accrodion-grp" data-grp-name="faq-one-accrodion">
                                    {faqItems.map((item, index) => (
                                        <div
                                            key={item.id}
                                            className={`accrodion ${activeIndex === index ? 'active' : ''} ${index === faqItems.length - 1 ? 'last-chiled' : ''}`}
                                            onClick={() => handleToggle(index)}
                                        >
                                            <div className="accrodion-title">
                                                <h4>{item.question}</h4>
                                            </div>
                                            <div className="accrodion-content">
                                                <div className="inner">
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
    )
}