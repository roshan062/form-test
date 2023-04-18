import React from "react";
import { Link } from "react-router-dom";

const serviceContent = [
  {
    icon: "lnil lnil-thumbnail",
    titlePart1: "WEB APP",
    titlePart2: "DEVELOPMENT",
    descriptions: ` We build Frontend, Fackend, E-Commerce, PWA, SaaS Application Enterprise, SPA. Read More ..`,
    ref: "/services/web-app-development",
  },
  {
    icon: "lnil lnil-website-rank",
    titlePart1: "MOBILE APP",
    titlePart2: "DEVELOPMENT",
    descriptions: ` We build cross platform app, Ios, and android app. We work on Flutter, React Native, React, etc. Read More ..`,
    ref: "/services/mobile-app-development",
  },
  {
    icon: "lnil lnil-3d",
    titlePart1: "SOFTWARE DEVELOPMENT",
    titlePart2: "CONSULTING",
    descriptions: ` We help you with assisting in business, corporate strategic planning, project management plan, Read More ..`,
    ref: "/services/software-consulting",
  },
  {
    icon: "lnil lnil-cloud-check",
    titlePart1: "CLOUD APP",
    titlePart2: " SERVICES",
    descriptions: ` We help you in handling and managing cloud platforms including AWS, Google Cloud, Digital Ocean. Read More ..`,
    ref: "/services/cloud-app-development-services",
  },
  {
    icon: "lnil lnil-video-camera-alt-1",
    titlePart1: "DIGITAL",
    titlePart2: " MARKETING",
    descriptions: ` We help you in SEO and SEM, Content Automation, Social Media Marketing, Influencer Marketing. Read More ..`,
    ref: "/services/digital-marketing-agency",
  },
];

const ServiceOne = () => {
  return (
    <>
      {serviceContent.map((val, i) => (
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="0"
          key={i}
        >
          {/* <!--Services Box--> */}
          <div className="ptf-service-box">
            <Link
              to={val.ref}
              className="ptf-service-box__link"
            ></Link>
            <div className="ptf-service-box__icon">
              <i className={val.icon}></i>
            </div>
            <h5 className="ptf-service-box__title">
              {val.titlePart1} <br />
              {val.titlePart2}
            </h5>
            <div className="ptf-service-box__content">
              <p>{val.descriptions}</p>
            </div>
            <div className="ptf-service-box__arrow">
              <i className="lnil lnil-chevron-right"></i>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ServiceOne;
