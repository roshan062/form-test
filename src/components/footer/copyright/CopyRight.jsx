import React from "react";
import SocialForCopyRight from "../../social/SocialForCopyRight";
import { Link } from "react-router-dom";

const logo = "/assets/img/root/logo/logo.png";

const CopyRight = () => {
  return (
    <div className="row align-items-center justify-content-center">
      <div className="col-12 col-md">
        <Link to="/">
          <img src={logo} alt="logo" loading="lazy" />
        </Link>
      </div>
      <div className="col-12 col-md text-md-center text-lg-center">
        <p className="ptf-footer-copyright has-accent-1" >
          <a href="https://www.mcai.io/sitemap.xml">Sitemap</a> | Terms & Conditions | Disclaimer
          <br />
          <span className="has-black-color">
            ©2016-{" " + new Date().getFullYear()}{" "}
            <span>
              Multi Cloud Ai
            </span>
            . All Rights Reserved.
          </span>
        </p>
      </div>
      <div className="col-12 col-lg text-md-center text-lg-end">
        <div className="ptf-footer-socials has-black-color ">
          <SocialForCopyRight />
        </div>
      </div>
    </div>
  );
};

export default CopyRight;
