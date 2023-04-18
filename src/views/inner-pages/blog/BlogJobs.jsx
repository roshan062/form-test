import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
// import BlogCommentForm from "../../../components/blog/BlogCommentForm";
import RelatedPost from "../../../components/blog/RelatedPost";
import CopyRight from "../../../components/footer/copyright/CopyRight";
import Footer from "../../../components/footer/Footer";
import HeaderDefault from "../../../components/header/HeaderDefault";
import SocialForBlogs from "../../../components/social/SocialForBlogs";
import BlogVacancyContactForm from "../../../components/BlogVacancyContactForm";

const BlogJobs = () => {
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
                                    Job Opening For Web Designing and Development
                                </h1>
                                <div className="ptf-single-post__meta">
                                    <span className="cat">COMMUNITY</span>
                                    <span className="date">July 10, 2020</span>
                                </div>
                            </div>
                        </header>

                        {/* <!--Post Media--> */}
                        <div className="ptf-single-post__media">
                            <div className="container-xxl">
                                <img
                                    src="/assets/img/blog/single-post/img5.jpg"
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
                                            Apply for {" "}
                                            <span className="has-accent-1">Web Designing and Development </span>.
                                        </div>

                                        {/* <!--Post Content--> */}
                                        <div className="ptf-single-post__content">
                                            <p>
                                                Multi Cloud Ai is looking for optimistic personnel  who must possess comprehensive knowledge about Web Development
                                                and designing and other relevant features attributed with it. Applicants must consist of at least one
                                                year experience, will be eligible for the concerned profile, and also have good command over
                                                creativity and communication skills. Moreover, an aspirant should have qualities such as curiosity
                                                to learn and perform innovative tasks, openness, passion to work in a dynamic environment and
                                                problem solving mindset.

                                            </p>

                                            {/* <!--Spacer--> */}
                                            <div
                                                className="ptf-spacer"
                                                style={{ "--ptf-xxl": "5rem", "--ptf-md": "2.5rem" }}
                                            ></div>
                                            <p style={{ marginBottom: "25px" }}>
                                                Here are some responsibilities that candidates should cater to thrive objectives of organization. We have
                                                mentioned significant skills and capabilities associated with the concerned post, it’s our appeal to job
                                                seekers to have a sharp glance on it.
                                            </p>


                                            <ul style={{ lineHeight: "2" }}>
                                                <li>
                                                    <p style={{ display: "inline" }}>
                                                        Applicants must have at least three server side scripting languages such as PHP, JavaScript, Python,
                                                        Ruby, C++, C#, Ruby.
                                                    </p>
                                                </li>
                                                <li>
                                                    <p style={{ display: "inline" }}>
                                                        Applicant must have good knowledge of databases includes MySQL, MongoDB, Oracle, Microsoft SQL Server.
                                                    </p>
                                                </li>
                                                <li>
                                                    <p style={{ display: "inline" }}>
                                                        Candidates must have excellent  knowledge about the different platforms, browsers latest technologies,
                                                        optimized coding and skills.
                                                    </p>
                                                </li>
                                                <li>
                                                    <p style={{ display: "inline" }}>
                                                        Job Seeker should have perfect knowledge of front end and Back end development and responsive design
                                                        skills  to handle the projects efficiently
                                                    </p>
                                                </li>
                                                <li>
                                                    <p style={{ display: "inline" }}>
                                                        Aspirants must have proper libraries(Bootstrap, jQuery, Google Charts, D3.js a Parsley React) and
                                                        frameworks( Angular, NodeJs, Amber, Vue).
                                                    </p>
                                                </li>
                                                <li>
                                                    <p style={{ display: "inline" }}>
                                                        Candidates must possess optimum basic knowledge of design software including Adobe Photoshop, Adobe
                                                        ILLustrator, Adobe InDesign, CorelDraw Graphics Suite, Quarkxpress, AdobeCS, Typography, Print
                                                        Design, Photography and Branding.
                                                    </p>
                                                </li>
                                                <li>
                                                    <p style={{ display: "inline" }}>
                                                        Job Seekers must have command over communication skills as to cater the organization accountabilities
                                                        in an efficient and effective manner.
                                                    </p>
                                                </li>
                                                <li>
                                                    <p style={{ display: "inline" }}>
                                                        Exceptional Qualities such as time management skills, organizational skills, creativity and innovation
                                                        are highly recommended.
                                                    </p>
                                                </li>
                                                <li>
                                                    <p style={{ display: "inline" }}>
                                                        Contribution and cooperating with team members to complete the organizational objectives in a timely manner.
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>

                                        {/* <!--Spacer--> */}
                                        <div
                                            className="ptf-spacer"
                                            style={{ "--ptf-xxl": "5rem", "--ptf-md": "2.5rem" }}
                                        ></div>
                                        <div className="ptf-single-post__excerpt">
                                            Candidates fill your initial interview details.
                                        </div>

                                        <BlogVacancyContactForm />


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

export default BlogJobs;
