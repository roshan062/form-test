import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const BlogGridContent = [
  {
    img: "2",
    date: "Oct 21, 2020",
    title: "5 Easy Steps to Build a Android Mobile Application in 2022",
    descriptions: ` Mobile Application is termed as app or software 
    application which is specifically designed and developed to run on mobile
     devices and wireless computing devices....`,
    ref: "/blog/5-easy-steps-to-build-a-android-mobile-application-in-2022",
  },
  {
    img: "3",
    date: "July 22, 2020",
    title: "7 Tips to Grow Your Business in 2020",
    descriptions: `Grow Your Business 1. Identify 
    needs of your customers Predominant motto of enterprise
     and business is to enhance their business growth...`,
    ref: "/blog/7-tips-to-grow-your-business-in-2020",
  },
  {
    img: "1",
    date: "July 10, 2020",
    title: "Job Opening for Web Development and Designing",
    descriptions: `Web Designing and Development, we
     are looking for optimistic personnel  who must possess
      comprehensive knowledge about Web...`,
    ref: "/blog/job-opening-for-web-development-and-designing",
  },
];

const BlogGridSLider = () => {
  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots: false,
        },
      },
    ],
  };

  return (
    <>
      <div className="swiper-slide grid-slider">
        <Slider {...settings} className="arrow-none">
          {BlogGridContent.map((val, i) => (
            <div className="ptf-news-slide" key={i}>
              <div className="ptf-news-slide__media">
                <img
                  src={`/assets/img/blog/slider/img${val.img}.jpg`}
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="ptf-news-slide__content">
                <div className="ptf-news-slide__meta">
                  <span className="cat">General Awareness</span>
                  <span className="date">{val.date}</span>
                </div>
                <h3 className="ptf-news-slide__title">
                  <Link to={val.ref}>{val.title}</Link>
                </h3>
                <div className="ptf-news-slide__excerpt">
                  <p>{val.descriptions}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default BlogGridSLider;
