import React from "react";
import Slider from "react-slick";

const testimonialContent = [
    {
        avatar: "twitter-avatar",
        name: "Sherry Eshrati",
        email: "@sherry.eshrati",
        hightlightText: "@best-work",
        date: "15 Oct, 2022",
        description: `Great team to work with, very flexible and knowledgeable!`,
    },
    {
        avatar: "twitter-avatar-2",
        name: "Jamie Simmons",
        email: "@jamie.simmons",
        hightlightText: "@awesome",
        date: "11 Feb, 2019",
        description: `Raj did a great job for us in a timely manner and with quality. I would highly recommend hiring him.`,
    },
    {
        avatar: "comment-avatar-1",
        name: "Damien Mills",
        email: "@daniel.mills",
        hightlightText: "@design",
        date: "12 July, 2020",
        description: ` Raj worked on a number of projects for us with a constant changing scope and brief. His commitment to
    our projects and completing the task was second to none. Highly recommend. `,
    },
    {
        avatar: "comment-avatar-1",
        name: "Mark Robinowitz",
        email: "@mark.robinowitz",
        hightlightText: "@flexible",
        date: "18 Mar, 2021",
        description: `Raj was great to work with, extremely communicative, fast and efficient, flexible with complex product requirements for work with
    Google app scripts. `,
    },
    {
        avatar: "comment-avatar-1",
        name: "Chris Gollnick",
        email: "@chris.gollnick",
        hightlightText: "@development",
        date: "2 Feb, 2022",
        description: `Raj is dedicated and diligent coder and had really helped us in the implementation of our google based
    efficiency system, thanks Raj! `,
    },
    {
        avatar: "comment-avatar-1",
        name: "Andrew Gillespie",
        email: "@andrew.gillespie",
        hightlightText: "@design",
        date: "24 Dec, 2022",
        description: `Excellent work, highly recommend `,
    },
];

const TestimonialForHome = () => {
    const settings = {
        dots: true,
        arrow: false,
        infinite: true,
        speed: 900,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <>
            <Slider {...settings} className="arrow-none">
                {testimonialContent.map((val, i) => (
                    <div className="swiper-slide" key={i}>
                        <div
                            className="ptf-twitter-review ptf-twitter-review--style-1"
                            key={i}
                        >
                            <div className="ptf-twitter-review__header">
                                <div className="ptf-twitter-review__meta">
                                    <h6 className="ptf-twitter-review__author">{val.name}</h6>
                                    <div className="ptf-twitter-review__info">
                                        <a href="mailto:ibthemes21@gmail.com">{val.email}</a> -{" "}
                                        {val.date}
                                    </div>
                                </div>
                                <div className="ptf-twitter-review__icon">
                                    <i className="socicon-twitter"></i>
                                </div>
                            </div>
                            <div className="ptf-twitter-review__content">
                                <p>
                                    <a
                                        href="https://twitter.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {val.hightlightText}
                                    </a>{" "}
                                    - {val.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </>
    );
};

export default TestimonialForHome;
