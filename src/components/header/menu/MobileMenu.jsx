import React from "react";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
} from "react-pro-sidebar";
import SocialForMobileMenu from "../../social/Social";

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

const blogContent = [
  {
    name: "Blog",
    activeClass: "sf-with-ul",
    menuClass: "two-columns current-menu-item",
    dropDownItems: [
      {
        name: "PHP and MySQL Web Development",
        routerPath: "/blog/php-and-mysql-web-development",
      },
      {
        name: "5 Steps for Mobile App Development",
        routerPath: "/blog/5-easy-steps-to-build-a-android-mobile-application-in-2022",
      },
      {
        name: "Job for Web Design and Development",
        routerPath: "/blog/job-opening-for-web-development-and-designing",
      },
      {
        name: "Advantages of Digital Marketing",
        routerPath: "/blog/what-are-the-advantages-of-digital-marketing",
      },
      {
        name: "7 Tips to grow Business",
        routerPath: "/blog/7-tips-to-grow-your-business-in-2020",
      },
    ],
  },
];

const MobileMenu = () => {
  return (
    <>
      <div className="ptf-offcanvas-menu__navigation">
        <ProSidebar>
          <SidebarContent>

            <Menu className="sidebar-menu_wrapper" >
              {homeContent.map((item, i) => (
                <SubMenu title={item.name} key={i}>
                  {item.dropDownItems.map((val, i) => (
                    <MenuItem key={i}>
                      <Link to={val.routerPath}>{val.name}</Link>
                    </MenuItem>
                  ))}
                </SubMenu>
              ))}

              {serviceContent.map((item, i) => (
                <SubMenu title={item.name} key={i}>
                  {item.dropDownItems.map((val, i) => (
                    <MenuItem key={i}>
                      <Link to={val.routerPath}>{val.name}</Link>
                    </MenuItem>
                  ))}
                </SubMenu>
              ))}

              <SubMenu title="Case Study" >
                <MenuItem >
                  <Link to="/case-study">
                    Case Study
                  </Link>
                </MenuItem>
              </SubMenu>

              {blogContent.map((item, i) => (
                <SubMenu title={item.name} key={i}>
                  {item.dropDownItems.map((val, i) => (
                    <MenuItem key={i}>
                      <Link to={val.routerPath}>{val.name}</Link>
                    </MenuItem>
                  ))}
                </SubMenu>
              ))}

              <SubMenu title="Contact Us" >
                <MenuItem >
                  <Link to="/contact-us">
                    Contact Us
                  </Link>
                </MenuItem>
              </SubMenu>
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </div>
      {/* End .ptf-offcanvas-menu__navigation */}

      <div className="ptf-offcanvas-menu__footer">
        <p className="ptf-offcanvas-menu__copyright">
          ©2016-{" " + new Date().getFullYear()}{" "}<span>Multi Cloud Ai</span>. All Rights Reserved.{" "}
          <br />
          .
        </p>
        <SocialForMobileMenu />
      </div>
      {/* End .ptf-offcanvas-menu__footer */}
    </>
  );
};

export default MobileMenu;
