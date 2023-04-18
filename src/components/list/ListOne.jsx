import React from "react";
import { Link } from "react-router-dom";

const listContent = [
  "Branding & Strategy",
  "Illustration",
  "UI/UX Website Design",
  "UI/UX Mobile Design",
  "App Design"
];

const ListOne = () => {
  return (
    <ul
      className="ptf-services-list ptf-services-list--style-5"
      style={{ "--ptf-font-family": "var(--ptf-primary-font)" }}
    >
      {listContent.map((val, i) => (
        <li key={i}>
          <Link to="/services">{val}</Link>
        </li>
      ))}
    </ul>
  );
};

export default ListOne;
