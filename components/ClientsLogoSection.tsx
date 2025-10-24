"use client";
import { ClientsDocument } from "@/prismicio-types";
import React, { useState, useEffect } from "react";

type Props = {
    clientsData: ClientsDocument | null;
};

interface BrandItem {
    id: number;
    image: string;
    alt: string;
}

export default function ClientsLogoSection({ clientsData }: Props) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const itemsPerView = 6;
    const itemWidth = 111.667;
    const itemMargin = 100;
    const totalWidth =
        (itemWidth + itemMargin) * (clientsData?.data.items?.length || 0);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => {
                // When we reach the end of the first set, reset to 0 for seamless loop
                if (prev >= (clientsData?.data.items?.length || 0)) {
                    return 0;
                }
                return prev + 1;
            });
        }, 3000); // Auto-play every 3 seconds

        return () => clearInterval(interval);
    }, [currentIndex, isAutoPlaying]);

    const getSlideClass = (index: number) => {
        const visibleStart = currentIndex;
        const visibleEnd = currentIndex + itemsPerView;

        if (index === visibleStart - 1) {
            return "swiper-slide swiper-slide-prev";
        } else if (index === visibleStart) {
            return "swiper-slide swiper-slide-active";
        } else if (index === visibleStart + 1) {
            return "swiper-slide swiper-slide-next";
        } else if (index >= visibleStart && index < visibleEnd) {
            return "swiper-slide";
        }
        return "swiper-slide";
    };

    const translateX = -(currentIndex * (itemWidth + itemMargin));

    return (
        <>
            <section className='brand-one'>
                <div className='container'>
                    <div
                        className='thm-swiper__slider swiper-container swiper-container-initialized swiper-container-horizontal'
                        onMouseEnter={() => setIsAutoPlaying(false)}
                        onMouseLeave={() => setIsAutoPlaying(true)}
                    >
                        <div
                            className='swiper-wrapper'
                            style={{
                                transform: `translate3d(${translateX}px, 0px, 0px)`,
                                transitionDuration: "500ms",
                                width: `${totalWidth}px`,
                            }}
                        >
                            {clientsData?.data.items?.map((brand, index) => (
                                <div
                                    key={`${brand.name}-${index}`}
                                    className={getSlideClass(index)}
                                    style={{
                                        width: `${itemWidth}px`,
                                        marginRight: `${itemMargin}px`,
                                    }}
                                >
                                    <img
                                        src={brand.logo?.url as string}
                                        alt={brand?.name as string}
                                    />
                                </div>
                            ))}
                        </div>
                        <span
                            className='swiper-notification'
                            aria-live='assertive'
                            aria-atomic='true'
                        ></span>
                    </div>
                </div>
            </section>
        </>
    );
}
