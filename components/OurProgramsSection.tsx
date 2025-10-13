'use client'
import React, { useState, useEffect } from 'react'

type Props = {}

interface EventItem {
    id: number;
    image: string;
    date: string;
    time: string;
    location: string;
    title: string;
}

const eventItems: EventItem[] = [
    {
        id: 1,
        image: "assets/images/events/events-1-1.jpg",
        date: "23 May, 2022",
        time: "8:00pm",
        location: "New York",
        title: "Contrary to popular belief"
    },
    {
        id: 2,
        image: "assets/images/events/events-1-2.jpg",
        date: "24 May, 2022",
        time: "9:00pm",
        location: "Los Angeles",
        title: "Join our charity event"
    },
    {
        id: 3,
        image: "assets/images/events/events-1-3.jpg",
        date: "25 May, 2022",
        time: "7:00pm",
        location: "Chicago",
        title: "Help people in need"
    },
    {
        id: 4,
        image: "assets/images/events/events-1-1.jpg",
        date: "26 May, 2022",
        time: "6:00pm",
        location: "Houston",
        title: "Making a difference together"
    },
    {
        id: 5,
        image: "assets/images/events/events-1-2.jpg",
        date: "27 May, 2022",
        time: "8:30pm",
        location: "Phoenix",
        title: "Community support program"
    },
    {
        id: 6,
        image: "assets/images/events/events-1-3.jpg",
        date: "28 May, 2022",
        time: "7:30pm",
        location: "Philadelphia",
        title: "Volunteer appreciation night"
    }
];

export default function OurProgramsSection({ }: Props) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const itemsPerView = 3;
    const itemWidth = 270;
    const itemMargin = 20;
    const totalWidth = (itemWidth + itemMargin) * eventItems.length;

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            handleNext();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex, isAutoPlaying]);

    const handleNext = () => {
        setCurrentIndex((prev) => {
            if (prev >= eventItems.length - itemsPerView) {
                return 0;
            }
            return prev + 1;
        });
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => {
            if (prev <= 0) {
                return eventItems.length - itemsPerView;
            }
            return prev - 1;
        });
    };

    const getItemClass = (index: number) => {
        if (index >= currentIndex && index < currentIndex + itemsPerView) {
            return "owl-item active";
        }
        return "owl-item";
    };

    const translateX = -(currentIndex * (itemWidth + itemMargin));

    return (
        <>
            <section className="events-one">
                <div className="events-one-shape-1" style={{ backgroundImage: "url(assets/images/shapes/events-one-shape-1.png)" }}>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4">
                            <div className="events-one__left">
                                <div className="section-title text-left">
                                    <span className="section-title__tagline">Empowerment Programs</span>
                                    <h2 className="section-title__title">Discover Our Programs</h2>
                                </div>
                                <p className="events-one__text-1">
                                    Explore training, resources, and mentorship designed to help entrepreneurs start, grow, and scale.
                                </p>
                                <a href="/programs" className="thm-btn events-one__btn">
                                    Explore Programs
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8">
                            <div className="events-one__right">
                                <div 
                                    className="events-one__carousel owl-carousel owl-theme thm-owl__carousel owl-loaded owl-drag"
                                    onMouseEnter={() => setIsAutoPlaying(false)}
                                    onMouseLeave={() => setIsAutoPlaying(true)}
                                >
                                    <div className="owl-stage-outer">
                                        <div 
                                            className="owl-stage" 
                                            style={{ 
                                                transform: `translate3d(${translateX}px, 0px, 0px)`, 
                                                transition: "all 0.5s ease 0s", 
                                                width: `${totalWidth}px` 
                                            }}
                                        >
                                            {eventItems.map((item, index) => (
                                                <EachItem 
                                                    key={item.id} 
                                                    item={item}
                                                    className={getItemClass(index)}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="owl-nav">
                                        <button 
                                            type="button" 
                                            className="owl-prev"
                                            onClick={handlePrev}
                                            aria-label="Previous"
                                        >
                                            <span className="icon-left-arrow"></span>
                                        </button>
                                        <button 
                                            type="button" 
                                            className="owl-next"
                                            onClick={handleNext}
                                            aria-label="Next"
                                        >
                                            <span className="icon-right-arrow"></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

interface EachItemProps {
    item: EventItem;
    className: string;
}

const EachItem = ({ item, className }: EachItemProps) => {
    return (
        <div className={className} style={{ width: "270px", marginRight: "20px" }}>
            <div className="item">
                <div className="events-one__single">
                    <div className="events-one__img">
                        <img src={item.image} alt={item.title} />
                        <div className="events-one__date">
                            <p>{item.date}</p>
                        </div>
                        <div className="events-one__content">
                            <ul className="list-unstyled events-one__meta">
                                <li><i className="fas fa-clock"></i>{item.time}</li>
                                <li><i className="fas fa-map-marker-alt"></i>{item.location}</li>
                            </ul>
                            <h3 className="events-one__title">
                                <a href="event-details.html">{item.title}</a>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
