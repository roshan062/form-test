import React from "react";
import Slider from "react-slick";

const portfolioContent = [
  {
    img: "work-1",
    discription: "WordPress MySql plugins",
    title: "Gibbs  Wright  Lawyers",
    link: "https://gibbswrightlawyers.com.au/",
  },
  {
    img: "work-2",
    discription: "Larvel  Bootstrap  Google API's  AWS",
    title: "Farm House Fresh Goods",
    link: "https://www.farmhousefreshgoods.com/",
  },
  {
    img: "work-3",
    discription: "Google Sheet  Google API's  Graphs  Google Apps Script",
    title: "Scream Town Actor | Abandoned Hayride",
    link: "https://www.screamtownactor.com/schedule",
  },
  {
    img: "work-4",
    discription: "Google Sheet  Google API's  Graphs  Google Apps Script",
    title: "Paramount Digital",
    link: "https://paramountdigital.co.uk/",
  },
  {
    img: "work-5",
    discription: "Peak Performances Inc",
    title: "Laravel  MySql  Vue Js",
    link: "https://peakperformances.com/",
  },
];

const Portfolio = () => {
  const settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    centerPadding: "0",
    slidesToScroll: 1,
    autoplay: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          dots: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="ptf-content-slider swiper-container slide-portfolio">
      <div className="swiper-wrapper">
        <Slider {...settings}>
          {/* <!--Portfolio Item--> */}
          {portfolioContent.map((item, i) => (
            <article className="ptf-work ptf-work--style-3" key={i}>
              <div className="ptf-work__media">
                <img
                  src={`/assets/img/work/${item.img}.png`}
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="ptf-work__meta">
                <div className="ptf-work__category">{item.category}</div>
                <h4 className="ptf-work__title">
                  <a href={item.link}>{item.title}</a>
                </h4>
              </div>
            </article>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Portfolio;
