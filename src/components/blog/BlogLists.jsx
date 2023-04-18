import React, {useState} from "react";
import { Link } from "react-router-dom";

const blogContent = [
  {
    img: "1",
    cat: "Services",
    date: "April 18, 2020",
    title: "PHP and MySQL Web Development",
    ref: "/blog/php-and-mysql-web-development"
  },
  {
    img: "2",
    cat: "General Awareness",
    date: "Oct 21, 2020",
    title: "5 Easy Steps to Build a Android Mobile Application in 2022",
    ref: "/blog/5-easy-steps-to-build-a-android-mobile-application-in-2022",
  },
  {
    img: "3",
    cat: "General Awareness",
    date: "Dec 5, 2020",
    title: "What are the advantages of digital marketing",
    ref: "/blog/what-are-the-advantages-of-digital-marketing",
  },
  {
    img: "4",
    cat: "General Awareness",
    date: "July 22, 2021",
    title: "7 Tips to Grow Your Business in 2020",
    ref: "/blog/7-tips-to-grow-your-business-in-2020",
  },
  {
    img: "5",
    cat: "Community",
    date: "July 10, 2020",
    title: "Job Opening for Web Development and Designing",
    ref: "/blog/job-opening-for-web-development-and-designing",
  },
];

const BlogLists = () => {

    const [showMore, setShowMore] = useState(false); // state to keep track of "More" button
  
    // function to handle "More" button click
    const handleShowMore = () => {
      setShowMore(true);
    };
  
    return (
      <>
        {blogContent.map((val, i) => (
          <div className="col-xl-4 col-lg-4" key={i}>
            {/* Render only first 3(adjust number as per requirment of whowing blog) blogs if "More" button is not clicked */}
            {showMore || i < 3 ? (
              <article className="ptf-post ptf-post--style-1">
                <div className="ptf-post__media">
                  <Link className="ptf-work__link" to={val.ref}></Link>
                  <img
                    src={`/assets/img/blog/grid/img${val.img}.jpg`}
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
            ) : null}
          </div>
        ))}
        {/* Render "More" button if there are more than 3(adjust number as per requirment of whowing blog) blogs */}
        {blogContent.length > 3 && !showMore && (
          <div className="ptf-animated-block text-center"
          data-aos="fade"
          data-aos-delay="0">
            <button className="ptf-load-more" onClick={handleShowMore}>
              More
            </button>
          </div>
        )}
      </>
    );
  };
  
  export default BlogLists;