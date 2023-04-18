import React from "react";
import { Link } from "react-router-dom";

const serviceContent = [
  {
    name: "Services",
    activeClass: "sf-with-ul",
    menuClass: "two-columns current-menu-item",
    dropDownItems: [
      {
        name: "Web App Development",
        routerPath: "/services/web-app-development",
      },
      {
        name: "Mobile App Development",
        routerPath: "/services/mobile-app-development",
      },
      {
        name: "Software Development Consulting",
        routerPath: "/services/software-consulting",
      },
      {
        name: "Cloud App Development Services",
        routerPath: "/services/cloud-app-development-services",
      },
      {
        name: "Digital Marketing Agency",
        routerPath: "/services/digital-marketing-agency",
      },
    ],
  },
];

const homeContent = [
  {
    name: "Home",
    activeClass: "sf-with-ul",
    menuClass: "two-columns current-menu-item",
    dropDownItems: [
      {
        name: "Why Multi Cloud Ai",
        routerPath: "/why-multicloud-ai",
      },
      {
        name: "About Us",
        routerPath: "/about-us",
      },
      {
        name: "Career",
        routerPath: "/career",
      },
    ],
  },
];

const DropdownMenu = () => {
  return (
    <ul className="sf-menu">
      {homeContent.map((item, i) => (
        <li className={`menu-item-has-children `} key={i}>
          <Link to="/" className={item.activeClass}>
            <span>{item.name}</span>
          </Link>

          <ul className="sub-menu mega">
            {item.dropDownItems.map((val, i) => (
              <li key={i}>
                <Link to={val.routerPath}>
                  {" "}
                  <span>{val.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}

      {serviceContent.map((item, i) => (
        <li className={`menu-item-has-children `} key={i}>
          <Link to="/services" className={item.activeClass}>
            <span>{item.name}</span>
          </Link>

          <ul className="sub-menu mega">
            {item.dropDownItems.map((val, i) => (
              <li key={i}>
                <Link to={val.routerPath}>
                  {" "}
                  <span>{val.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}

      <li className="menu-item-has-children">
        <Link to="/case-study" className="item.activeClass">
          <span>Case Study</span>
        </Link>
      </li>

      <li className="menu-item-has-children">
        <Link to="/blog" className="item.activeClass">
          <span>Blog</span>
        </Link>
      </li>

      <li className="menu-item-has-children">
        <Link to="/contact-us" className="item.activeClass">
          <span>Contact Us</span>
        </Link>
      </li>
    </ul>
  );
};

export default DropdownMenu;
