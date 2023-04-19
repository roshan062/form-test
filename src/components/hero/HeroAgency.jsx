import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import ModalVideo from "react-modal-video";

const HeroAgency = () => {
    const [isOpen, setOpen] = useState(false);

    const settings = {
        dots: true,
        arrow: true,
        infinite: true,
        fade: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        // adaptiveHeight: true,
    };

    const getStartedHandler = function () {
        document.querySelector("#popup").style.visibility = "visible";
    }

    return (
        <>
            <Slider {...settings}>
                <div className="ptf-showcase-image image-1">
                    <div className="ptf-showcase-slide">
                        <div className="container">
                            <h1 className="fz-50 fz-70--lg lh-1 has-white-color text-center">
                                <span className="has-accent-1"> Web & Mobile </span> App<br />
                                Development Company
                            </h1>

                            {/* <!--Spacer--> */}
                            <div
                                className="ptf-spacer"
                                style={{ "--ptf-xxl": "2.125rem" }}
                            ></div>

                            <p
                                className="fz-20 has-white-color text-center"
                                style={{ maxWidth: "34.375rem", margin: "0 auto" }}
                            >
                                Full stack Development, We are expertise in designs and develops perfect website,
                                web apps, digital products and marketing.
                            </p>

                            {/* <!--Spacer--> */}
                            <div
                                className="ptf-spacer"
                                style={{ "--ptf-xxl": "3.625rem" }}
                            ></div>

                            <div className="d-flex justify-content-center">
                                {/* <!--Button--> */}
                                <Link className="ptf-btn ptf-btn--primary" onClick={getStartedHandler}>
                                    Get Started
                                </Link>
                                {/* <!--Button--> */}
                                <Link
                                    className="ptf-btn ptf-btn--secondary"
                                    to="/services"
                                    style={{ marginLeft: "2rem" }}
                                >
                                    Our Services
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End .ptf-showcase-image */}

                <div className="ptf-showcase-image image-2">
                    <div className="ptf-showcase-slide">
                        <div className="container">
                            <h1 className="fz-50 fz-60--lg lh-1 has-white-color text-center">
                                <span className="has-accent-1">Google Sheets</span> and <br />
                                Google Apps Script Automation
                            </h1>
                            {/* <!--Spacer--> */}
                            <div
                                className="ptf-spacer"
                                style={{ "--ptf-xxl": "2.125rem" }}
                            ></div>
                            <p
                                className="fz-20 has-white-color text-center"
                                style={{ maxWidth: "34.375rem", margin: "0 auto" }}
                            >
                                Google Sheets Dashboard, Data Visualization Report with
                                Highly precise and creative report.
                            </p>
                            <div
                                className="ptf-spacer"
                                style={{ "--ptf-xxl": "3.625rem" }}
                            ></div>
                            <div className="d-flex justify-content-center">
                                {/* <!--Button--> */}
                                <Link className="ptf-btn ptf-btn--primary" onClick={getStartedHandler}>
                                    Get Started
                                </Link>
                                {/* <!--Button--> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* End .ptf-showcase-image */}

                <div className="ptf-showcase-image image-3">
                    <div className="ptf-showcase-slide">
                        <div className="container">
                            <h1 className="fz-50 fz-60--lg lh-1 has-white-color">
                                <span className="has-accent-1"> Digital</span> Marketing
                                Agency
                            </h1>
                            {/* <!--Spacer--> */}
                            <div
                                className="ptf-spacer"
                                style={{ "--ptf-xxl": "3.125rem" }}
                            ></div>
                            <p
                                className="fz-24 has-white-color"
                                style={{ maxWidth: "34.375rem" }}
                            >
                                We design marketing campaigns that help your cause create impact. Proven results.
                            </p>
                            {/* <!--Spacer--> */}
                            <div
                                className="ptf-spacer"
                                style={{ "--ptf-xxl": "3.625rem" }}
                            ></div>
                            <div className="d-flex">
                                {/* <!--Button--> */}
                                <Link className="ptf-btn ptf-btn--primary" onClick={getStartedHandler}>
                                    Get Started
                                </Link>
                                {/* <!--Video Button--> */}
                                <div
                                    className="ptf-video-button"
                                    onClick={() => setOpen(true)}
                                    style={{
                                        "--ptf-title-color": "var(--ptf-color-white)",
                                        marginLeft: "2rem",
                                    }}
                                >
                                    <Link rel="nofollow">
                                        <i className="lnil lnil-play"></i>
                                    </Link>
                                    <div className="ptf-video-button__title">
                                        View our <br />
                                        story
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End .ptf-showcase-image */}
            </Slider>
            <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId="xFSDexQhCUY"
                onClose={() => setOpen(false)}
            />
            {/* End Youtube Modal video */}
        </>
    );
};

export default HeroAgency;
