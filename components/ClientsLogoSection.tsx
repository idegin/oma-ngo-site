'use client'
import React, { useState, useEffect } from 'react'

type Props = {}

interface BrandItem {
    id: number;
    image: string;
    alt: string;
}

const brandLogos: BrandItem[] = [
    { id: 1, image: "/assets/images/brand/brand-1-1.png", alt: "Brand 1" },
    { id: 2, image: "/assets/images/brand/brand-1-2.png", alt: "Brand 2" },
    { id: 3, image: "/assets/images/brand/brand-1-3.png", alt: "Brand 3" },
    { id: 4, image: "/assets/images/brand/brand-1-4.png", alt: "Brand 4" },
    { id: 5, image: "/assets/images/brand/brand-1-5.png", alt: "Brand 5" },
    { id: 6, image: "/assets/images/brand/brand-1-6.png", alt: "Brand 6" },
];

// Duplicate the array for infinite loop effect
const allBrands = [...brandLogos, ...brandLogos];

export default function ClientsLogoSection({ }: Props) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const itemsPerView = 6;
    const itemWidth = 111.667;
    const itemMargin = 100;
    const totalWidth = (itemWidth + itemMargin) * allBrands.length;

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => {
                // When we reach the end of the first set, reset to 0 for seamless loop
                if (prev >= brandLogos.length) {
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
            <section className="brand-one">
                <div className="container">
                    <div 
                        className="thm-swiper__slider swiper-container swiper-container-initialized swiper-container-horizontal"
                        onMouseEnter={() => setIsAutoPlaying(false)}
                        onMouseLeave={() => setIsAutoPlaying(true)}
                    >
                        <div 
                            className="swiper-wrapper" 
                            style={{ 
                                transform: `translate3d(${translateX}px, 0px, 0px)`, 
                                transitionDuration: "500ms",
                                width: `${totalWidth}px`
                            }}
                        >
                            {allBrands.map((brand, index) => (
                                <div 
                                    key={`${brand.id}-${index}`} 
                                    className={getSlideClass(index)}
                                    style={{ width: `${itemWidth}px`, marginRight: `${itemMargin}px` }}
                                >
                                    <img src={brand.image} alt={brand.alt} />
                                </div>
                            ))}
                        </div>
                        <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                    </div>
                </div>
            </section>
        </>
    )
}