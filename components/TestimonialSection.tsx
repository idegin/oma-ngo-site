"use client";
import React, { useState, useEffect } from "react";
import { TestimonialDocument } from "@/prismicio-types";

type Props = {
    testimonials: TestimonialDocument[];
};

interface Testimonial {
    id: number;
    name: string;
    role: string;
    image: string;
    text: string;
}

// Clone items for infinite loop

export default function TestimonialSection({ testimonials }: Props) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const itemsPerView = 1;
    const itemWidth = 570;
    const itemMargin = 50;
    const totalWidth = (itemWidth + itemMargin) * testimonials.length;

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            handleNext();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex, isAutoPlaying]);

    const handleNext = () => {
        setCurrentIndex((prev) => {
            if (prev >= testimonials.length) {
                return 0;
            }
            return prev + 1;
        });
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => {
            if (prev <= 0) {
                return testimonials.length - 1;
            }
            return prev - 1;
        });
    };

    const getItemClass = (index: number) => {
        if (index === currentIndex) {
            return "owl-item active";
        } else if (
            index === currentIndex - 1 ||
            (currentIndex === 0 && index === testimonials.length - 1)
        ) {
            return "owl-item cloned";
        }
        return "owl-item";
    };

    const translateX = -(currentIndex * (itemWidth + itemMargin));

    return (
        <>
            <section className='testimonial-one max-w-screen'>
                <div
                    className='testimonial-one-bg jarallax'
                    data-jarallax=''
                    data-speed='0.2'
                    data-imgposition='50% 0%'
                    style={{
                        backgroundImage:
                            "url(/assets/images/backgrounds/testimonial-one-bg.jpg)",
                    }}
                ></div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-6 col-lg-6'>
                            <div className='testimonial-one__left'>
                                <div className='section-title text-left'>
                                    <span className='section-title__tagline'>
                                        Impact Stories
                                    </span>
                                    <h2 className='section-title__title'>
                                        Hear from Our Entrepreneurs
                                    </h2>
                                </div>
                                <p className='testimonial-one__text-1'>
                                    Discover how African business owners are
                                    transforming their ventures and communities
                                    through access to knowledge, resources, and
                                    networks.
                                </p>
                                {/* <a href="#" className="thm-btn testimonial-one__btn">all testimonials</a> */}
                            </div>
                        </div>
                        <div className='col-xl-6 col-lg-6'>
                            <div className='testimonial-one__right'>
                                <div className='testimonial-one__img-1 zoom-fade md:block hidden'>
                                    <img
                                        src='/assets/images/testimonial/testimonial-img-1.jpg'
                                        alt='Testimonial decoration'
                                    />
                                </div>
                                <div className='testimonial-one__img-1 testimonial-one__img-2 zoom-fade md:block hidden'>
                                    <img
                                        src='/assets/images/testimonial/testimonial-img-2.jpg'
                                        alt='Testimonial decoration'
                                    />
                                </div>
                                <div className='testimonial-one__img-1 testimonial-one__img-3 zoom-fade md:block hidden'>
                                    <img
                                        src='/assets/images/testimonial/testimonial-img-3.jpg'
                                        alt='Testimonial decoration'
                                    />
                                </div>
                                <div className='testimonial-one__img-1 testimonial-one__img-4 zoom-fade md:block hidden'>
                                    <img
                                        src='/assets/images/testimonial/testimonial-img-4.jpg'
                                        alt='Testimonial decoration'
                                    />
                                </div>
                                <div
                                    className='testimonial-one__carousel owl-carousel owl-theme thm-owl__carousel owl-loaded owl-drag'
                                    onMouseEnter={() => setIsAutoPlaying(false)}
                                    onMouseLeave={() => setIsAutoPlaying(true)}
                                >
                                    <div className='owl-stage-outer'>
                                        <div
                                            className='owl-stage'
                                            style={{
                                                transform: `translate3d(${translateX}px, 0px, 0px)`,
                                                transition: "all 0.5s ease 0s",
                                                width: `${totalWidth}px`,
                                            }}
                                        >
                                            {testimonials.map(
                                                (testimonial, index) => (
                                                    <div
                                                        key={`${testimonial.id}-${index}`}
                                                        className={getItemClass(
                                                            index
                                                        )}
                                                        style={{
                                                            width: `${itemWidth}px`,
                                                            marginRight: `${itemMargin}px`,
                                                            maxWidth: "100vw",
                                                        }}
                                                    >
                                                        <div className='item max-w-[93vw]'>
                                                            <div className='testimonial-one__single'>
                                                                <div
                                                                    className='testimonial-one__shape-1'
                                                                    style={{
                                                                        backgroundImage:
                                                                            "url(/assets/images/shapes/testimonial-one-shape-1.png)",
                                                                    }}
                                                                ></div>
                                                                <div className='testimonial-one__client-img'>
                                                                    <img
                                                                        src={
                                                                            testimonial
                                                                                .data
                                                                                .image
                                                                                .url as string
                                                                        }
                                                                        alt={
                                                                            testimonial
                                                                                .data
                                                                                .name as string
                                                                        }
                                                                        className='w-full h-full object-cover'
                                                                    />
                                                                </div>
                                                                <div className='testimonial-one__client-info'>
                                                                    <h3 className='testimonial-one__client-name'>
                                                                        {
                                                                            testimonial
                                                                                ?.data
                                                                                ?.name
                                                                        }
                                                                    </h3>
                                                                    <p className='testimonial-one__client-sub-title'>
                                                                        {
                                                                            testimonial
                                                                                ?.data
                                                                                .designation
                                                                        }
                                                                    </p>
                                                                </div>
                                                                <div className='testimonial-one__quote'>
                                                                    <span className='icon-double-quotes'></span>
                                                                </div>
                                                                <p className='testimonial-one__text-2'>
                                                                    {
                                                                        testimonial
                                                                            ?.data
                                                                            ?.message
                                                                    }
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className='owl-nav mt-3'>
                                    <button
                                        type='button'
                                        role='presentation'
                                        className='owl-prev bg-white h-10 w-10 rounded-xl'
                                        onClick={handlePrev}
                                        aria-label='Previous testimonial'
                                    >
                                        <span className='icon-left-arrow'></span>
                                    </button>
                                    <button
                                        type='button'
                                        role='presentation'
                                        className='owl-next bg-white h-10 w-10 rounded-xl'
                                        onClick={handleNext}
                                        aria-label='Next testimonial'
                                    >
                                        <span className='icon-right-arrow'></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
