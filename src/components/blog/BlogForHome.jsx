import React from "react";
import { Link } from "react-router-dom";

const blogContent = [
  {
    img: "3",
    cat: "General Awareness",
    date: "Dec 15, 2020",
    title: "7 Tips To Grow Your Business.",
    ref: "/blog/7-tips-to-grow-your-business-in-2020",
    description: `Grow your business...`,
  },
  {
    img: "1",
    cat: "Development",
    date: "Dec 7, 2020",
    title: " PHP and MySQL Web Development",
    ref: "/blog/php-and-mysql-web-development",
    description: `A good developer should be familiar with PHP and MySQL web development for app
     development for app...`,
  },
  {
    img: "2",
    cat: "General Awareness",
    date: "Dec 1, 2020",
    title: "5 Easy Steps to Build Android Application",
    ref: "/blog/5-easy-steps-to-build-a-android-mobile-application-in-2022",
    description: `Mobile application is termed as app or software application which is ...`,
  },
];

const BlogForHome = () => {
  return (
    <>
      {blogContent.map((val, i) => (
        <div className="col-xl-4 col-lg-4" key={i}>
          <div className="grid-item filter-1 filter-4">
            {/* <!--Blog Post--> */}
            <article className="ptf-post ptf-post--style-4">
              <div className="ptf-post__media">
                <img
                  src={`/assets/img/blog/blog-home/img${val.img}.jpg`}
                  alt=""
                  loading="lazy"
                />
                <div className="ptf-post__media__content">
                  <header className="ptf-post__header">
                    <div className="ptf-post__meta">
                      <span className="cat">{val.cat}</span>
                      <span className="date">{val.date}</span>
                    </div>
                    <h3 className="ptf-post__title">{val.title}</h3>
                  </header>
                </div>
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
                <div className="ptf-post__excerpt">
                  <p>{val.description}</p>
                </div>
                <footer className="ptf-post__footer">
                  <Link className="ptf-read-more-link" to={val.ref}>
                    Continue
                  </Link>
                </footer>
              </div>
            </article>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogForHome;
