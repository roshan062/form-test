import React from "react";
import { Link } from "react-router-dom";

const relatedPost = [
  {
    img: "1",
    cat: "General Awareness",
    date: "Dec 5, 2020",
    title: "What are the advantages of digital marketing",
    ref: "/blog/what-are-the-advantages-of-digital-marketing",
  },
  {
    img: "2",
    cat: "General Awareness",
    date: "Oct 21, 2020",
    title: "5 Easy Steps to Build a Android Mobile Application in 2022",
    ref: "/blog/5-easy-steps-to-build-a-android-mobile-application-in-2022",
  },
];

const RelatedPost = () => {
  return (
    <>
      {relatedPost.map((val, i) => (
        <div className="col-lg-6" key={i}>
          <article className="ptf-post ptf-post--style-1">
            <div className="ptf-post__media">
              <Link
                className="ptf-work__link"
                to={val.ref}
              ></Link>
              <img
                src={`/assets/img/blog/related-post/img${val.img}.jpg`}
                alt="blog"
                loading="lazy"
              />
            </div>
            <div className="ptf-post__content">
              <header className="ptf-post__header">
                <div className="ptf-post__meta">
                  <span className="cat">{val.cat}</span>
                  <span className="date">{val.date}</span>
                </div>
                <h3 className="ptf-post__title">
                  <Link to={val.ref}>{val.title}</Link>
                </h3>
              </header>
            </div>
          </article>
        </div>
      ))}
    </>
  );
};

export default RelatedPost;
