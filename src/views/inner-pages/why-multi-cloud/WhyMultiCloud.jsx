import React from "react";
import { Helmet } from "react-helmet";
import HeaderDefault from "../../../components/header/HeaderDefault";
import CopyRight from "../../../components/footer/copyright/CopyRight";
import Footer from "../../../components/footer/Footer";
import ServiceList from "../../../components/list/ServiceList";
import Skills from "../../../components/skill/Skills";
import WhyClientChooseUs from "../../../components/WhyClientChooseUs";
import DeliverMore from "../../../components/DeliverMore";
import DeliveredProjectsCounter from "../../../components/counter/DeliveredProjectsCounter";
import FaqQuestions from "../../../components/faq/FaqQuestions";

const WhyMultiCloud = () => {
    return (
        <div>
            <Helmet>
                <title>Multi Cloud Ai - Why Multi Cloud Ai</title>
            </Helmet>
            {/* End Page SEO Content */}

            <HeaderDefault />
            {/* End Header */}

            <div className="ptf-main">
                <div className="ptf-page ptf-page--service-detail">
                    <section>

                        <div className="container-xxl">
                            <div className="row">
                                <div className="col-xl-9">
                                    {/* <!--Animated Block--> */}

                                </div>
                                <div
                                    className="ptf-animated-block"
                                    data-aos="fade"
                                    data-aos-delay="0"
                                >
                                    <h1 className="large-heading"
                                        style={{ margin: "50px 50px 100px 50px", textAlign: "center" }}
                                    >Choose Multi Cloud Ai</h1>
                                    <p className="h5" style={{ textAlign: "center" }}>
                                        Build Fully Custom Products For Company With A Best Class Softwares And Apps
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Top Portion */}

                    {/* <!--Spacer--> */}
                    <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "6rem" }}
                    ></div>


                    {/*=============================================
                      Why Clients Choose Us Section Starts
                      ============================================== */}
                    <section
                        className="has-accent-1-background"
                        style={{
                            backgroundImage: `url("assets/img/root/service-bubble.png")`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "100% calc(100% + 120px)",
                        }}
                    >
                        {/* <!--Spacer--> */}
                        <div
                            className="ptf-spacer"
                            style={{ "--ptf-xxl": "5rem", "--ptf-md": "5rem" }}
                        ></div>
                        <div className="container-xxl">
                            {/* <!--Animated Block--> */}
                            <div
                                className="ptf-animated-block"
                                data-aos="fade"
                                data-aos-delay="1"
                            >
                                <h1 className="has-white-color large-heading">Why Clients Choose Us</h1>
                            </div>
                            {/* <!--Spacer--> */}
                            <div
                                className="ptf-spacer"
                                style={{ "--ptf-xxl": "7.5rem", "--ptf-md": " 3.75rem" }}
                            ></div>
                            <WhyClientChooseUs />
                        </div>
                        {/* <!--Spacer--> */}
                        <div
                            className="ptf-spacer"
                            style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
                        ></div>
                    </section>


                    {/*=============================================
                      Delivered Projects, Skills & Services Section
                      ============================================== */}
                    <section>
                        {/* <!--Spacer--> */}
                        <div
                            className="ptf-spacer"
                            style={{ "--ptf-xxl": "5.625rem", "--ptf-md": "2.8125rem" }}
                        ></div>
                        <div className="container-xxl">
                            <div className="row">
                                <h3>Delivered Projects</h3>
                                <div
                                    className="ptf-spacer"
                                    style={{ "--ptf-xxl": "2rem", "--ptf-md": "2.8125rem" }}
                                ></div>
                                <div className="col-xl-8">
                                    {/* <!--Spacer--> */}
                                    <div
                                        className="ptf-spacer"
                                        style={{ "--ptf-xxl": "3.125rem" }}
                                    >
                                    </div>
                                    <div
                                        className="row"
                                        style={{
                                            "--bs-gutter-x": "0.75rem",
                                            "--bs-gutter-y": "7.5rem",
                                        }}
                                    >
                                        <DeliveredProjectsCounter />
                                    </div>
                                    {/* <!--Spacer--> */}
                                    <div
                                        className="ptf-spacer"
                                        style={{ "--ptf-xxl": "6.875rem" }}
                                    ></div>
                                    {/* <!--Animated Block--> */}
                                    <div
                                        className="ptf-animated-block"
                                        data-aos="fade"
                                        data-aos-delay="0"
                                    >
                                        <h3>Our Skills</h3>
                                    </div>
                                    {/* <!--Spacer--> */}
                                    <div
                                        className="ptf-spacer"
                                        style={{ "--ptf-xxl": "3.75rem" }}
                                    ></div>
                                    <div className="ptf-skill-box-grid">
                                        <Skills />
                                    </div>

                                    {/* <!--Spacer--> */}
                                    <div
                                        className="ptf-spacer"
                                        style={{ "--ptf-xxl": "5.625rem" }}
                                    ></div>
                                </div>

                                {/* Our Services starts */}
                                <div className="col-xl-4">
                                    <div className="ptf-sidebar ptf-sidebar--right">
                                        {/* <!--Widget--> */}
                                        <div className="ptf-widget ptf-widget-services-list">
                                            {/* <!--Animated Block--> */}
                                            <div
                                                className="ptf-animated-block"
                                                data-aos="fade"
                                                data-aos-delay="0"
                                            >
                                                <h4 className="ptf-widget-title">OUR SERVICES</h4>
                                                {/* <!--Spacer--> */}
                                                <div
                                                    className="ptf-spacer"
                                                    style={{ "--ptf-xxl": "1.875rem" }}
                                                ></div>
                                                <ServiceList />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Our Services Ends */}

                            </div>
                        </div>
                    </section>


                    {/*=============================================
                      What We Deliver More Section Starts
                      ============================================== */}
                    <section>
                        {/* Deliver more starts */}
                        <div className="container-xxl">
                            {/* <!--Spacer--> */}
                            <div
                                className="ptf-spacer"
                                style={{ "--ptf-xxl": "6.875rem" }}
                            ></div>
                            {/* <!--Animated Block--> */}
                            <div
                                className="ptf-animated-block"
                                data-aos="fade"
                                data-aos-delay="0"
                            >
                                <h2>What We Deliver More</h2>
                                {/* <!--Spacer--> */}
                                <div
                                    className="ptf-spacer"
                                    style={{ "--ptf-xxl": "3.875rem" }}
                                ></div>
                                <DeliverMore />
                            </div>
                        </div>
                    </section>


                    {/*=============================================
                      FAQs Section Starts
                      ============================================== */}
                    <section>
                        {/* <!--Spacer--> */}
                        <div
                            className="ptf-spacer"
                            style={{ "--ptf-xxl": "5rem", "--ptf-md": "5rem" }}
                        ></div>
                        <div className="container-xxl">
                            <div className="row">
                                <div className="col-xl-10">
                                    {/* <!--Animated Block--> */}
                                    <div
                                        className="ptf-animated-block"
                                    >
                                        <h2 className="large-heading">FAQs</h2>
                                        {/* <!--Spacer--> */}
                                        <div
                                            className="ptf-spacer"
                                            style={{ "--ptf-xxl": "2.5rem" }}
                                        ></div>
                                        <p className="fz-18">
                                            Here are the frequently asked questions that we have
                                            compiled to help you find the answers to the problems you
                                            are wondering.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--Spacer--> */}
                        <div
                            className="ptf-spacer"
                            style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
                        ></div>
                        <FaqQuestions />
                    </section>

                </div>
                {/* End .ptf-page */}
            </div>
            {/* End ptf-main */}
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

export default WhyMultiCloud;
