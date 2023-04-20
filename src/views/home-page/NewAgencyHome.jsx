import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import CounterAgency from "../../components/counter/CounterAgency";
import CopyRight from "../../components/footer/copyright/CopyRight";
import Footer from "../../components/footer/Footer";
import HeaderAgency from "../../components/header/HeaderAgency";
import HeroAgency from "../../components/hero/HeroAgency";
import ListOne from "../../components/list/ListOne";
import ListTwo from "../../components/list/ListTwo";
import ServiceOne from "../../components/service/ServiceOne";
import PortfolioForHome from "../../components/portfolio/PortfolioForHome";
import Team from "../../components/team/Team";
import TestimonialForHome from "../../components/testimonial/TestimonialForHome";
import BlogForHome from "../../components/blog/BlogForHome";

const NewAgencyHome = () => {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        function handleResize() {
            setIsDesktop(window.innerWidth >= 992);
        }

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <div className="ptf-site-wrapper animsition ptf-is--home-agency">
            <Helmet>
                <title>Multi Cloud Ai - Home</title>
            </Helmet>
            {/* End Page SEO Content */}

            <div className="ptf-site-wrapper__inner">
                <HeaderAgency />
                {/* End Header Agency */}

                <div className="ptf-main">
                    <div className="ptf-page ptf-page--home-agency">
                        {/*=============================================
                         Start Our Hero Section Showcase 
                          ============================================== */}
                        <div className="ptf-showcase-3 swiper-container">
                            <div className="swiper-wrapper">
                                <HeroAgency />
                            </div>
                        </div>

                        {/*=============================================
                           Call & Counter section
                         ============================================== */}
                        <section>
                            {/* <!--Spacer--> */}
                            <div
                                className="ptf-spacer"
                                style={{ "--ptf-xxl": "3.75rem" }}
                            ></div>
                            <div className="container">
                                <div
                                    className="row align-items-center"
                                    style={{ "--bs-gutter-y": "2rem" }}
                                >
                                    <div className="col-12 col-xl-6">
                                        {/* <!--Animated Block--> */}
                                        <div
                                            className="ptf-animated-block"
                                            data-aos="fade"
                                            data-aos-delay="0"
                                        >
                                            {/* <!--Phone Block--> */}
                                            <div className="ptf-phone-block">
                                                <div className="ptf-phone-block__icon">
                                                    <i className="lnil lnil-phone"></i>
                                                </div>
                                                <div className="ptf-phone-block__caption">
                                                    Call Us
                                                    <br />
                                                    Directly
                                                </div>
                                                <div className="ptf-phone-block__phone">
                                                    <a href="tel:+1 585 632 0666">(+1) 585 632 0666</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End .col */}
                                    <CounterAgency />
                                </div>
                            </div>
                            {/* <!--Spacer--> */}
                            <div
                                className="ptf-spacer"
                                style={{ "--ptf-xxl": "3.75rem" }}
                            ></div>
                        </section>

                        <section>
                            <div className="container">
                                {/* <!--Divider--> */}
                                <div className="ptf-divider"></div>
                            </div>
                        </section>
                        {/* End .ptf-devider */}

                        <section>
                            {/* <!--Spacer--> */}
                            <div
                                className="ptf-spacer"
                                style={{ "--ptf-xxl": "8.125rem", "--ptf-md": "4.0625rem" }}
                            ></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-7">
                                        {/* <!--Animated Block--> */}
                                        <div
                                            className="ptf-animated-block"
                                            data-aos="fade"
                                            data-aos-delay="0"
                                        >
                                            <h2 className="h1 large-heading has-accent-1">
                                                Creative Design & Marketing
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 d-none d-xl-block">
                                        {/* <!--Animated Block--> */}
                                        <div
                                            className="ptf-animated-block"
                                            data-aos="fade"
                                            data-aos-delay="100"
                                        >
                                            <div className="has-black-color fz-90 lh-1 text-end">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    style={{ height: "1em" }}
                                                    viewBox="0 0 17 17"
                                                >
                                                    <path d="M16 .997V10h-1V2.703L4.683 13l-.707-.708L14.291 1.997H6.975v-1H16z" />
                                                </svg>
                                            </div>
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
                        {/* End  Advertising Big Title */}

                        <section className="ptf-custom--3993 jarallax">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-5">
                                        {/* <!--Spacer--> */}
                                        <div
                                            className="ptf-spacer"
                                            style={{ "--ptf-xxl": "8.125rem", "--ptf-lg": "0" }}
                                        ></div>
                                        {/* <!--Animated Block--> */}
                                        <div
                                            className="ptf-animated-block"
                                            data-aos="fade"
                                            data-aos-delay="0"
                                        >
                                            <h6
                                                className={`text-uppercase fz-16 ${isDesktop ? 'has-white-color' : ''}`}
                                            >
                                                About Us
                                            </h6>
                                            {/* <!--Spacer--> */}
                                            <div
                                                className="ptf-spacer"
                                                style={{ "--ptf-xxl": "1.875rem" }}
                                            ></div>
                                            <h3
                                                className={` ${isDesktop ? 'has-white-color' : ''}`}
                                                style={{ maxWidth: "30rem" }}>
                                                We bring trusted solutions for your business
                                            </h3>
                                            {/* <!--Spacer--> */}
                                            <div
                                                className="ptf-spacer"
                                                style={{ "--ptf-xxl": "5rem", "--ptf-md": "2.5rem" }}
                                            ></div>
                                            <p
                                                className={`fz-18 ${isDesktop ? 'has-white-color' : ''}`}
                                                style={{ maxWidth: "30rem" }}>
                                                Multi Cloud Ai is a certified, award-winning software
                                                development company that predominantly  focuses on client requirements and
                                                endeavour to deliver result oriented solutions by Raj.
                                            </p>
                                            <p
                                                className={`fz-18 ${isDesktop ? 'has-white-color' : ''}`}
                                                style={{ maxWidth: "30rem" }}>
                                                We are experts in Web Technologies, Mobile Technologies, and Digital Marketing
                                                and provide cutting edge solutions so that you do not have to hire multiple companies
                                                to get your project done.
                                            </p>
                                        </div>
                                        {/* <!--Spacer--> */}
                                        <div
                                            className="ptf-spacer"
                                            style={{ "--ptf-xxl": "8.125rem", "--ptf-lg": "0" }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* End  Advertising Banner */}

                        {/*=============================================
                             What We Do & Design
                           ============================================== */}

                        <section>
                            {/* <!--Spacer--> */}
                            <div
                                className="ptf-spacer"
                                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
                            ></div>
                            <div className="container">
                                {/* <!--Animated Block--> */}
                                <div
                                    className="ptf-animated-block"
                                    data-aos="fade"
                                    data-aos-delay="0"
                                >
                                    <h2 className="h1 large-heading has-accent-1">What We Do</h2>
                                </div>
                                {/* <!--Spacer--> */}
                                <div
                                    className="ptf-spacer"
                                    style={{ "--ptf-xxl": "4.375rem", "--ptf-md": "2.1875rem" }}
                                ></div>
                                <div
                                    className="row"
                                    style={{
                                        "--bs-gutter-x": "10.625rem",
                                        "--bs-gutter-y": " 5.3125rem",
                                    }}
                                >
                                    <div className="col-12 col-md-6">
                                        {/* <!--Animated Block--> */}
                                        <div
                                            className="ptf-animated-block"
                                            data-aos="fade"
                                            data-aos-delay="0"
                                        >
                                            <h2>Design</h2>
                                            {/* <!--Spacer--> */}
                                            <div
                                                className="ptf-spacer"
                                                style={{ "--ptf-xxl": "1.5625rem" }}
                                            ></div>
                                            {/* <!--Divider--> */}
                                            <div className="ptf-divider"></div>
                                            {/* <!--Spacer--> */}
                                            <div
                                                className="ptf-spacer"
                                                style={{ "--ptf-xxl": "3.125rem" }}
                                            ></div>
                                            {/* <!--Services List--> */}
                                            <ListOne />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        {/* <!--Animated Block--> */}
                                        <div
                                            className="ptf-animated-block"
                                            data-aos="fade"
                                            data-aos-delay="100"
                                        >
                                            <h2>Advertising</h2>
                                            {/* <!--Spacer--> */}
                                            <div
                                                className="ptf-spacer"
                                                style={{ "--ptf-xxl": "1.5625rem" }}
                                            ></div>
                                            {/* <!--Divider--> */}
                                            <div className="ptf-divider"></div>
                                            {/* <!--Spacer--> */}
                                            <div
                                                className="ptf-spacer"
                                                style={{ "--ptf-xxl": "3.125rem" }}
                                            ></div>
                                            {/* <!--Services List--> */}
                                            <ListTwo />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!--Spacer--> */}
                            <div
                                className="ptf-spacer"
                                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
                            ></div>
                        </section>

                        {/*=============================================
                          Start Service Section
                          ============================================== */}
                        <section>
                            {/* <!--Spacer--> */}
                            <div
                                className="ptf-spacer"
                                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
                            ></div>
                            <div className="container-xxl">
                                <div className="row">
                                    <div className="col-lg-3">
                                        {/* <!--Animated Block--> */}
                                        <div
                                            className="ptf-animated-block"
                                            data-aos="fade"
                                            data-aos-delay="0"
                                        >
                                            <h2 className="h1 large-heading has-accent-1">
                                                Our <br />
                                                Services
                                            </h2>
                                            {/* <!--Spacer--> */}
                                            <div
                                                className="ptf-spacer"
                                                style={{ "--ptf-xxl": "2.5rem" }}
                                            ></div>
                                            <p className="fz-18">
                                                We help ambitious businesses like yours generate more
                                                profits by building awareness, driving web traffic,
                                                connecting with customers and growing overall sales.
                                            </p>
                                        </div>
                                        {/* <!--Spacer--> */}
                                        <div
                                            className="ptf-spacer"
                                            style={{
                                                "--ptf-lg": "4.375rem",
                                                "--ptf-md": "2.1875rem",
                                            }}
                                        ></div>
                                    </div>
                                    <div className="col-lg-8 offset-lg-1">
                                        <ServiceOne />
                                    </div>
                                </div>
                            </div>
                            {/* <!--Spacer--> */}
                            <div
                                className="ptf-spacer"
                                style={{ "--ptf-xxl": "5rem", "--ptf-md": "5rem" }}
                            ></div>
                        </section>
                        {/* Divider */}
                        <section>
                            <div className="container">
                                {/* <!--Divider--> */}
                                <div className="ptf-divider"></div>
                            </div>
                        </section>

                        {/*=============================================
                         Start Latest Works section
                         ============================================== */}
                        <section>
                            {/* <!--Spacer--> */}
                            <div
                                className="ptf-spacer"
                                style={{ "--ptf-xxl": "5rem", "--ptf-md": "5rem" }}
                            ></div>
                            <div className="container">
                                <div
                                    className="ptf-animated-block"
                                    data-aos="fade"
                                    data-aos-delay="0"
                                >
                                    <h2 className="h1 large-heading has-accent-1 d-inline-flex">
                                        Our Latest Projects
                                    </h2>
                                    <Link
                                        className="ptf-link-with-arrow fz-18 text-uppercase d-none d-lg-inline-flex"
                                        to="/case-study"
                                        style={{ marginLeft: "5.625rem" }}
                                    >
                                        All Projects{" "}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            style={{ height: "1em" }}
                                            viewBox="0 0 17 17"
                                        >
                                            <path d="M16 .997V10h-1V2.703L4.683 13l-.707-.708L14.291 1.997H6.975v-1H16z" />
                                        </svg>
                                    </Link>
                                </div>
                                <div
                                    className="ptf-spacer"
                                    style={{ "--ptf-xxl": "6.25rem" }}
                                ></div>
                                <div
                                    className="ptf-animated-block"
                                    data-aos="fade"
                                    data-aos-delay="0"
                                >
                                    <div className="ptf-isotope-grid">
                                        <PortfolioForHome />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="ptf-spacer"
                                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
                            ></div>
                        </section>

                        {/*=============================================
                         Start Our Crew/Team section
                        ============================================== */}
                        <section className="ptf-custom--1569">
                            {/* <!--Spacer--> */}
                            <div
                                className="ptf-spacer"
                                style={{ "--ptf-xxl": "8.75rem", "--ptf-md": "4.375rem" }}
                            ></div>
                            <div className="container">
                                {/* <!--Animated Block--> */}
                                <div
                                    className="ptf-animated-block"
                                    data-aos="fade"
                                    data-aos-delay="0"
                                >
                                    <h2 className="h1 large-heading has-accent-1">Our Team</h2>
                                </div>
                                {/* <!--Spacer--> */}
                                <div
                                    className="ptf-spacer"
                                    style={{ "--ptf-xxl": "5.625rem", "--ptf-md": "2.8125rem" }}
                                ></div>
                            </div>
                            <div className="container">
                                <div className="ptf-team-member-grid ptf-team-member-grid--4-columns">
                                    <Team />
                                </div>
                            </div>
                            {/* <!--Spacer--> */}
                            <div
                                className="ptf-spacer"
                                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
                            ></div>
                        </section>

                        {/* Divider */}
                        <section>
                            <div className="container">
                                {/* <!--Divider--> */}
                                <div className="ptf-divider"></div>
                            </div>
                        </section>


                        {/*=============================================
                           Start Testimonial section
                          ============================================== */}
                        <section>
                            {/* <!--Spacer--> */}
                            <div
                                className="ptf-spacer"
                                style={{ "--ptf-xxl": "4.75rem", "--ptf-md": "4.375rem" }}
                            ></div>
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-8">
                                        {/* <!--Animated Block--> */}
                                        <div
                                            className="ptf-animated-block"
                                            data-aos="fade"
                                            data-aos-delay="0"
                                        >
                                            <h2 className="h1 large-heading has-accent-1">
                                                Trusted By Clients
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--Spacer--> */}
                                <div
                                    className="ptf-spacer"
                                    style={{ "--ptf-xxl": " 4.375rem" }}
                                ></div>
                                {/* <!--Animated Block--> */}
                                <div
                                    className="ptf-animated-block"
                                    data-aos="fade"
                                    data-aos-delay="0"
                                >
                                    {/* <!--Content Slider--> */}
                                    <div className="ptf-content-slider swiper-container ">
                                        <div className="swiper-wrapper testimonial-100-spacer">
                                            <TestimonialForHome />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--Spacer--> */}
                            <div
                                className="ptf-spacer"
                                style={{ "--ptf-xxl": "10rem", "--ptf-md": "10rem" }}
                            ></div>
                        </section>

                        {/*=============================================
                          Start Blog Section
                          ============================================== */}
                        <section>
                            <h2 className="h1 large-heading has-accent-1" style={{ marginLeft: "20px" }}>
                                Our Blogs
                            </h2>
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
                                    data-aos-delay="0"
                                >
                                    <div
                                        className="row"
                                        style={{
                                            "--bs-gutter-x": "3.75rem",
                                            "--bs-gutter-y": "7.5rem",
                                        }}
                                    >
                                        <BlogForHome />
                                    </div>
                                </div>
                            </div>
                            {/* <!--Spacer--> */}
                            <div
                                className="ptf-spacer"
                                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
                            ></div>
                        </section>

                        {/*=============================================
                           Start Footer section
                          ============================================== */}
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
                    {/* End .ptf-page */}
                </div>
                {/* End .ptf-main */}
            </div>
            {/* End .ptf-site-wrapper__inner */}
        </div>
    );
};

export default NewAgencyHome;
