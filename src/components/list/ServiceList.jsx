import React from "react";
import { Link } from "react-router-dom";

const serviceContent = [
  { icon: "lnil-thumbnail", name: "Web Development", ref: "/services/web-app-development" },
  { icon: "lnil-website-rank", name: "App Development", ref: "/services/mobile-app-development" },
  { icon: "lnil-3d", name: "Software Consulting", ref: "/services/software-consulting" },
  { icon: "lnil-cloud-check", name: "Cloud Services", ref: "/services/cloud-app-development-services" },
  { icon: "lnil-video-camera-alt-1", name: "Digital Marketing", ref: "/services/digital-marketing-agency" },
];

const ServiceList = () => {
  return (
    <>
      <ul>
        {serviceContent.map((val, i) => (
          <li key={i}>
            <Link to={val.ref}>
              <i className={`lnil ${val.icon}`}></i> {val.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ServiceList;
