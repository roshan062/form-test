import React from "react";
import { Link } from "react-router-dom";

const listContent = [
  "SEO",
  "Marketing Strategy",
  "Email Marketing",
  "Google/Facebook ADs",
  "Content Writing",
];

const ListTwo = () => {
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

export default ListTwo;
