import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    itemName: "Web App Development",
    link: "/services/web-app-development",
  },
  {
    itemName: "Mobile App Development",
    link: "/services/mobile-app-development",
  },
  {
    itemName: "Cloud Services",
    link: "/services/cloud-app-development-services",
  },
  {
    itemName: "Software Consulting",
    link: "/services/software-consulting",
  },
  {
    itemName: "Digital Marketing",
    link: "/services/digital-marketing-agency",
  },
];

const knowMore = [
  {
    itemName: "Why Multi Cloud Ai",
    link: "/why-multicloud-ai",
  },
  {
    itemName: "About Us",
    link: "/about-us",
  },
  {
    itemName: "Career",
    link: "/career",
  },
  {
    itemName: "Contact Us",
    link: "/contact-us",
  },
  {
    itemName: "Blog",
    link: "/blog",
  },
  {
    itemName: "FAQs",
    link: "/faq",
  },
  {
    itemName: "Our Team",
    link: "/team",
  },
];

const Footer = () => {
  return (
    <div className="row">
      <div className="col-12 col-xl-6">
        {/* <!--Animated Block--> */}
        <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
          <div
            className="ptf-footer-heading has-black-color"
            style={{ maxWidth: "37.5rem" }}
          >
            Boost Your <span className="has-accent-1">Business</span>
          </div>

          <a className="fz-40 has-black-color" href="mailto:admin@mcai.io">
            admin@mcai.io
          </a>
        </div>
      </div>
      <div className="col-12 col-md-6 col-xl-3">
        {/* <!--Animated Block--> */}
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="100"
        >
          <div className="ptf-widget ptf-widget-links has-black-color">
            <h4 className="ptf-widget-title">Services</h4>
            <ul>
              {services.map((val, i) => (
                <li key={i}>
                  <Link to={val.link}>{val.itemName}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 col-xl-3">
        {/* <!--Animated Block--> */}
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="200"
        >
          <div className="ptf-widget ptf-widget-text">
            <h4 className="ptf-widget-title">Know More</h4>
            <div className="ptf-widget ptf-widget-links has-black-color">
              <ul>
                {knowMore.map((val, i) => (
                  <li key={i}>
                    <Link to={val.link}>{val.itemName}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
