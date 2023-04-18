import React from "react";
import { Helmet } from "react-helmet";
import Brand from "../../../components/brand/Brand";
import Counter from "../../../components/counter/CounterForHome";
import CopyRight from "../../../components/footer/copyright/CopyRight";
import Footer from "../../../components/footer/Footer";
import HeaderDefault from "../../../components/header/HeaderDefault";
import IndustriesServe from "../../../components/service/IndustriesServe";
import TestimonialForHome from "../../../components/testimonial/TestimonialForHome";

const AboutUs = () => {
  return (
    <div className="ptf-site-wrapper animsition  ptf-is--about-us">
      <Helmet>
        <title>Multi Cloud Ai - About Us</title>
      </Helmet>
      {/* End Page SEO Content */}
      <div className="ptf-site-wrapper__inner">
        <HeaderDefault />
        {/* End  HeaderHomeDefault */}

        <div className="ptf-main">
          <div className="ptf-page ptf-page--about-us">
            {/*=============================================
                Start About Us Hero Section
              ============================================== */}
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
              ></div>

              <div className="container-xxl">
                <div className="row align-items-center">
                  <div className="col-xl-6">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h1 className="large-heading">Multi Cloud Ai</h1>
                    </div>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "2.8125rem" }}
                    ></div>
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="100"
                    >
                      <p className="fz-30 fw-bold text-uppercase has-3-color">
                        Digital solutions for <br />
                        your business
                      </p>
                    </div>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
                    ></div>
                    <div className="row">
                      <div className="col-xl-8">
                        <div style={{ maxWidth: "29.6875rem" }}>
                          {/* <!--Animated Block--> */}
                          <div
                            className="ptf-animated-block"
                            data-aos="fade"
                            data-aos-delay="200"
                          >
                            {/* <!--Divider--> */}
                            <div className="ptf-divider"></div>
                            {/* <!--Spacer--> */}

                            <div
                              className="ptf-spacer"
                              style={{
                                "--ptf-xxl": "4.375rem",
                                "--ptf-md": "2.1875rem",
                              }}
                            ></div>
                            <p className="fz-24">
                              Multi Cloud Ai is a certified, award-winning software development company that
                              predominantly  focuses on client requirements and endeavour to deliver result
                              oriented solutions. We create every project with great diligence and offer the
                              optimum solution and ROI to boost business growth..

                              We are experts in Web Technologies, Mobile Technologies, and Digital Marketing
                              and provide cutting edge solutions so that you do not have to hire multiple
                              companies to get your project done. We have separate departments for Web
                              Development, App Development, Digital Marketing, and On-Demand Hiring.
                              All these departments work together to turn your project into a success story.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xl": "5.625rem" }}
                    ></div>
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                    // data-aos="fade"
                    // data-aos-delay="300"
                    >
                      <div className="text-center">
                        {/* <!--Mask Image--> */}
                        <div className="ptf-mask-image">
                          <img
                            src="assets/img/root/about-us/about-us-main-image-mask.png"
                            alt="layer"
                            loading="lazy"
                            className="lay2"
                            style={{
                              zIndex: "1",
                            }}
                            srcSet="assets/img/about-us/layer-2.jpg"
                          />
                          <img
                            src="assets/img/about-us/layer-1.png"
                            alt="layer"
                            loading="lazy"
                            style={{ zIndex: "2" }}
                          />
                        </div>
                      </div>
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

            <section>
              <div className="container-xxl">
                {/* <!--Divider--> */}
                <div className="ptf-divider"></div>
              </div>
            </section>

            {/*=============================================
                Start Industries We Serve Section
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
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
              <div className="container-xxl">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h2 className="h1 large-heading" style={{ color: "white" }}>Industries We Serve</h2>
                </div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "7.5rem", "--ptf-md": " 3.75rem" }}
                ></div>
                <IndustriesServe />
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section>

            {/*=============================================
                Start Brand and Counterup Section
              ============================================== */}
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
              <div className="container-xxl">
                <div className="row">
                  <div className="col-12">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h2 className="h1 large-heading">Multi Cloud Ai's Partners</h2>
                    </div>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "7.5rem", "--ptf-md": "3.75rem" }}
                    ></div>
                  </div>
                </div>
                {/* End .row */}
                <Brand />
                <div className="row">
                  <div className="col-12">
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "8.75rem", "--ptf-md": "4.375rem" }}
                    ></div>
                    {/* <!--Divider--> */}
                    <div className="ptf-divider"></div>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
                    ></div>
                  </div>
                </div>
                {/* End .row */}

                <Counter />
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "3rem", "--ptf-md": "5rem" }}
              ></div>
            </section>


            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "8.75rem", "--ptf-md": "4.375rem" }}
            ></div>
            {/* <!--Divider--> */}
            <div className="ptf-divider"></div>

            {/*=============================================
              Start Testimonial section
             ============================================== */}
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "8.75rem", "--ptf-md": "4.375rem" }}
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
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section>
          </div>
        </div>
        {/* End ptf-main */}

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
    </div>
  );
};

export default AboutUs;
