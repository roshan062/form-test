import React from "react";
import { Helmet } from "react-helmet";
import HeaderDefault from "../../../components/header/HeaderDefault";
import FaqQuestions from "../../../components/faq/FaqQuestions";
import Footer from "../../../components/footer/Footer";
import CopyRight from "../../../components/footer/copyright/CopyRight";

const Faq = () => {
  return (
    <div>
      <Helmet>
        <title>Multi Cloud Ai - FAQ</title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderDefault />
      {/* End Header */}

      <div className="ptf-main">
        <div className="ptf-page ptf-page--faq">
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

export default Faq;
