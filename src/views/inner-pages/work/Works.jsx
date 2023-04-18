import React from "react";
import { Helmet } from "react-helmet";
import HeaderDefault from "../../../components/header/HeaderDefault";
import CopyRight from "../../../components/footer/copyright/CopyRight";
import Footer from "../../../components/footer/Footer";
import WorkPortfolio from "../../../components/portfolio/WorkPortfolio";

const Works = () => {
    return (
        <div className="ptf-site-wrapper animsition ptf-is--works-carousel">
            <Helmet>
                <title>Multi Cloud Ai - Case Studie</title>
            </Helmet>
            {/* End Page SEO Content */}
            <div className="ptf-site-wrapper__inner">
                <HeaderDefault />
                {/* End  HeaderHomeDefault */}

                <div className="main">
                    <section>
                        {/* spacer */}
                        <div
                            className="ptf-spacer"
                            style={{ "--ptf-xxl": "5rem", "--ptf-md": "5rem" }}
                        ></div>
                        <div className="container-xxl">
                            <div className="row align-items-center">
                                <div className="col-12 col-md-9">
                                    {/* <!--Animated Block--> */}
                                    <div
                                        className="ptf-animated-block"
                                        data-aos="fade"
                                        data-aos-delay="0"
                                    >
                                        <h2 className="h1 large-heading d-inline-flex">
                                            Latest Case Studies
                                        </h2>
                                    </div>
                                </div>
                                <div className="col-12 col-md-3 text-md-end">
                                    {/* <!--Spacer--> */}
                                    <div
                                        className="ptf-spacer"
                                        style={{ "--ptf-md": "1.875rem" }}
                                    ></div>

                                </div>
                            </div>
                            {/* <!--Spacer--> */}
                            <div
                                className="ptf-spacer"
                                style={{ "--ptf-xxl": "6.25rem" }}
                            ></div>
                            {/* <!--Animated Block--> */}
                            <div
                                className="ptf-animated-block"
                                data-aos="fade"
                                data-aos-delay="0"
                            >
                                {/* <!--Content Slider--> */}
                                <WorkPortfolio />
                            </div>
                        </div>
                        {/* <!--Spacer--> */}
                        <div
                            className="ptf-spacer"
                            style={{ "--ptf-xxl": "10rem", "--ptf-md": "9rem" }}
                        ></div>
                    </section>

                    {/* End .ptf-page */}
                </div>
            </div>
            {/* End .main */}

            {/* <!--Footer--> */}
            <footer className="ptf-footer ptf-footer--style-1">
                <div className="container-xxl">
                    <div className="ptf-footer__top">
                        <Footer />
                    </div>
                    <div className="ptf-footer__bottom">
                        <CopyRight />
                    </div>
                </div>
            </footer>
        </div>
        // End .ptf-is--blog-grid
    );
};

export default Works;
