import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
// import BlogCommentForm from "../../../components/blog/BlogCommentForm";
import RelatedPost from "../../../components/blog/RelatedPost";
import CopyRight from "../../../components/footer/copyright/CopyRight";
import Footer from "../../../components/footer/Footer";
import HeaderDefault from "../../../components/header/HeaderDefault";
import SocialForBlogs from "../../../components/social/SocialForBlogs";

const BlogBusiness = () => {
    return (
        <div className="ptf-site-wrapper animsition ptf-is--blog-grid">
            <Helmet>
                <title>Multi Cloud Ai - Blog</title>
            </Helmet>
            {/* End Page SEO Content */}
            <div className="ptf-site-wrapper__inner">
                <HeaderDefault />
                {/* End  HeaderHomeDefault */}

                <div className="main">
                    <article className="ptf-single-post">
                        {/* <!--Post Header--> */}
                        <header className="ptf-single-post__header ptf-single-post__header--style-1">
                            <div className="container-xxl">
                                <h1 className="ptf-single-post__title">
                                    7 Tips To Grow Your Business
                                </h1>
                                <div className="ptf-single-post__meta">
                                    <span className="cat">GENERAL AWARENESS</span>
                                    <span className="date">July 22, 2021</span>
                                </div>
                            </div>
                        </header>

                        {/* <!--Post Media--> */}
                        <div className="ptf-single-post__media">
                            <div className="container-xxl">
                                <img
                                    src="/assets/img/blog/single-post/img4.jpg"
                                    alt="blog post"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* <!--Post Wrapper--> */}
                        <div className="ptf-single-post__wrapper">
                            <div className="container-xxl">
                                <div className="row">
                                    <div className="col-xl-8 offset-xl-2">
                                        {/* <!--Post Info--> */}
                                        <div className="ptf-single-post__info">
                                            <Link className="author">
                                                <i className="lnil lnil-user"></i>by <span>Shrishti Chadha, HR and Management</span>
                                            </Link>
                                            <Link className="view" href="#">
                                                <i className="lnil lnil-eye"></i>2.1k Views
                                            </Link>
                                            <Link className="comments" href="#">
                                                <i className="lnil lnil-comments"></i>8 Comments
                                            </Link>
                                            <Link className="report" href="#">
                                                <i className="lnil lnil-warning"></i>Report
                                            </Link>
                                        </div>

                                        {/* <!--Post Excerpt--> */}
                                        <div className="ptf-single-post__excerpt">
                                            How to {" "}
                                            <span className="has-accent-1">Grow Business </span>?
                                        </div>

                                        {/* <!--Post Content--> */}
                                        <div className="ptf-single-post__content">
                                            <p>
                                                Before commencing digital marketing, clients must gain deep insights into what
                                                exactly digital marketing is ? How would it be beneficial to specific businesses?
                                                What are appropriate sources to commence digital marketing?.
                                            </p>

                                            {/* <!--Spacer--> */}
                                            <div
                                                className="ptf-spacer"
                                                style={{ "--ptf-xxl": "5rem", "--ptf-md": "2.5rem" }}
                                            ></div>


                                            <h4 style={{ paddingTop: "20px", paddingBottom: "20px" }}>
                                                1.  Identify needs of your customers
                                            </h4>
                                            <p>
                                                Predominant motto of enterprise and business is to enhance their business growth and maintain
                                                goodwill among its customers. Recognizing the needs and preferences of your customers is the
                                                prior step each and every organization have to opt for running smoothly in the business
                                                environment.

                                            </p>

                                            <h4 style={{ paddingTop: "20px", paddingBottom: "20px" }}>
                                                2. Host Events and Webinars
                                            </h4>
                                            <p>
                                                Organizing events and webinars helps you to exhibit products and services you are proffering
                                                to large numbers of audiences. Not only it helps businesses to establish relationships with
                                                people but also enhances credibility and authenticity among people. Also, optimum way to
                                                participate in one on one conversations which consists of talking about various topics of
                                                common interest.

                                            </p>
                                            <h4 style={{ paddingTop: "20px", paddingBottom: "20px" }}>
                                                3. Persistent Monitoring
                                            </h4>
                                            <p>
                                                Constant Monitoring detects the flaws and problems arriving in business activities. It
                                                ensures you to refine your policies and strategies for better survival. Moreover, it supports
                                                you to analyze the results of your pivotal efforts and time. It raises productivity by
                                                seeking out what’s inefficient, degrading, or working as intended.


                                            </p>

                                            <h4 style={{ paddingTop: "20px", paddingBottom: "20px" }}>
                                                4. Market Expansion and Diversification
                                            </h4>

                                            <p>
                                                Diversification is the imperative factor in the growth of businesses. Diversification of
                                                business can be performed in numerous ways such as commencing new business, adding different
                                                segments related to products and services. Specifically, diversification is the riskiest
                                                strategy as it is most uncertain but if executed in the right direction at the right time
                                                will boost the brand image and profitability of the company.


                                            </p>


                                            <h4 style={{ paddingTop: "20px", paddingBottom: "20px" }}>
                                                5. Build Strong team
                                            </h4>
                                            <p>
                                                Employees are the ultimate asset of the company. Each and every accomplishment of the
                                                organization is attributed with employees who devote their valuable time in maintaining the
                                                reputation of the organization. However, it is an accountability of organizations to give
                                                vigilant attention to the needs of employees and offer them employee benefits to boost
                                                their morale which in turn increases productivity.

                                            </p>



                                            <h4 style={{ paddingTop: "20px", paddingBottom: "20px" }}>
                                                6. Opt Social Media Platforms
                                            </h4>
                                            <p>
                                                Social media Platforms are rendering tremendous assistance to enhance the presence of online
                                                businesses. It assures you to connect, build networking, interact and reach a large number
                                                of people simultaneously. Metaphorically, it stimulates you to promote your business and gain
                                                insights about customers behaviour and recognize the way to fulfill stipulations of clients.
                                                One of the predominant advantages of social media is that it doesn’t attribute to cost.


                                            </p>
                                            <h4 style={{ paddingTop: "20px", paddingBottom: "20px" }}>
                                                7. Nurture the needs of existing customers
                                            </h4>
                                            <p>
                                                To attain business growth, organizations must be careful about their existing customer base.
                                                They must opt strategies to be in contact with existing customers via email, webinars and
                                                newsletter.


                                            </p>

                                        </div>

                                        {/* <!--Post Footer--> */}
                                        <footer className="ptf-single-post__footer">
                                            <div className="ptf-post-socials">
                                                <span>Share on</span>
                                                <SocialForBlogs />
                                            </div>
                                        </footer>
                                        {/* <!--Related Posts--> */}
                                        <div className="ptf-related-posts">
                                            <h2 className="ptf-related-posts__title">
                                                Related Posts
                                            </h2>
                                            <div className="ptf-isotope-grid">
                                                <div
                                                    className="row"
                                                    style={{ "--bs-gutter-y": "2rem" }}
                                                >
                                                    <RelatedPost />
                                                </div>
                                            </div>
                                        </div>
                                        {/* End .ptf-related-posts */}

                                        {/* <!--Comments--> */}
                                        {/* <section className="ptf-page-comments">
                                            <div className="ptf-page-comments__form">
                                                <h2 className="ptf-page-comments__title">
                                                    Leave a comment:
                                                </h2>
                                                <BlogCommentForm />
                                            </div>
                                        </section> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
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
    );
};

export default BlogBusiness;
