import React from "react";

const socialList = [
  {
    iconName: "socicon-twitter",
    link: "https://twitter.com/multicloudai",
  },
  {
    iconName: "socicon-facebook",
    link: "https://www.facebook.com/multicloudai",
  },
  {
    iconName: "socicon-instagram",
    link: "https://www.instagram.com/multicloudai",
  },
  {
    iconName: "socicon-linkedin",
    link: "https://linkedin.com/company/multicloudai/",
  },
];

const SocialForCopyRight = () => {
  return (
    <>
      {socialList.map((val, i) => (
        <a
          className="ptf-social-icon ptf-social-icon--style-1"
          target="_blank"
          rel="noopener noreferrer"
          href={val.link}
          key={i}
        >
          <i className={val.iconName}></i>
        </a>
      ))}
    </>
  );
};

export default SocialForCopyRight;
