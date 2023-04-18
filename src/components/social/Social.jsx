import React from "react";

const SocialShare = [
  {
    iconName: "socicon-twitter",
    link: "https://twitter.com/multicloudai",
    iconClass: "twitter",
  },
  {
    iconName: "socicon-facebook",
    link: "https://www.facebook.com/multicloudai",
    iconClass: "facebook",
  },
  {
    iconName: "socicon-instagram",
    link: "https://www.instagram.com/multicloudai",
    iconClass: "instagram",
  },
  {
    iconName: "socicon-linkedin",
    link: "https://linkedin.com/company/multicloudai/",
    iconClass: "linkedin"
  },
];
const SocialForMobileMenu = () => {
  return (
    <div className="ptf-offcanvas-menu__socials">
      {/* <!--Social Icon--> */}
      {SocialShare.map((icon, i) => (
        <a
          className={`ptf-social-icon ptf-social-icon--style-3  ${icon.iconClass}`}
          href={icon.link}
          target="_blank"
          rel="noopener noreferrer"
          key={i}
        >
          <i className={icon.iconName}></i>
        </a>
      ))}
    </div>
  );
};

export default SocialForMobileMenu;
