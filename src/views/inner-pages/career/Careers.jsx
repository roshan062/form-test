import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import HeaderDefault from "../../../components/header/HeaderDefault";
import CareerCard from "../../../components/career/CareerCard";
import Footer from "../../../components/footer/Footer";
import CopyRight from "../../../components/footer/copyright/CopyRight";

const Careers = () => {
    return (
        <div>
            <Helmet>
                <title>Multi Cloud Ai - Career</title>
            </Helmet>
            {/* End Page SEO Content */}

            <HeaderDefault />
            {/* End Header */}


            {/* <!--Post Media--> */}
            <div className="ptf-single-post__media">
                <div className="container-xxl">
                    <img
                        src="/assets/img/career/career.jpg"
                        alt="blog post"
                        loading="lazy"
                    />
                </div>
            </div>
            <div className="ptf-main">
                <div className="ptf-page ptf-page--pricing">
                    <section>
                        {/* <!--Spacer--> */}
                        <div
                            className="ptf-spacer"
                            style={{ "--ptf-xxl": "5rem", "--ptf-md": "5rem" }}
                        ></div>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-10">
                                    {/* <!--Animated Block--> */}
                                    <div
                                        className="ptf-animated-block"
                                        data-aos="fade"
                                        data-aos-delay="0"
                                    >
                                        <h1 className="large-heading">Career Options in Multi Cloud Ai</h1>
                                        {/* <!--Spacer--> */}
                                        <div
                                            className="ptf-spacer"
                                            style={{ "--ptf-xxl": "2.5rem" }}
                                        ></div>
                                        <h5 className="large-heading">
                                            Open- Job Opportunities
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--Spacer--> */}
                        <div
                            className="ptf-spacer"
                            style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
                        ></div>
                    </section>
                    {/* End pricing top section title */}

                    <section>
                        <div className="container">
                            <div
                                className="row"
                                style={{ "--bs-gutter-x": "2rem", "--bs-gutter-y": "2.5rem" }}
                            >
                                <CareerCard />
                            </div>
                            <div
                                className="ptf-spacer"
                                style={{ "--ptf-xxl": "6.875rem", "--ptf-md": "3.4375rem" }}
                            ></div>
                            {/* <!--Animated Block--> */}
                            <div
                                className="ptf-animated-block"
                                data-aos="fade"
                                data-aos-delay="0"
                            >
                                <p className="fz-24">
                                    You have a large team? {" "}
                                    <Link
                                        className="has-accent-4 text-decoration-underline"
                                        to="/contact"
                                    >
                                        Contact us
                                    </Link>
                                    {" "}    for information about more enterprise options.
                                </p>
                            </div>
                        </div>
                        {/* <!--Spacer--> */}
                        <div
                            className="ptf-spacer"
                            style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
                        ></div>
                    </section>
                </div>
            </div>

            {/*=============================================
               Start Footer
              ============================================== */}
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
    );
};

export default Careers;
