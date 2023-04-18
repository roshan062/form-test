import React from "react";

const Content = [
    {
        title: "PHP Frameworks List",
        descriptions: `In the era of digitalization, each and every organization requires 
    a solid website to cater the needs of customers effectively. We have top notch 
    professionals who are proficient in developing web design to QA and maintenance and 
    design of web applications using PHP. Also our developers ensure data security and 
    confidentiality for customer interaction, low development and maintenance cost with 
    very high performance and reliability by utilizing PHP as a incredible tool for creating websites`,
        delayAnimation: "0",
    },
    {
        title: "Drupal Development",
        descriptions: `Drupal is one of the most famous content management software. 
    Our experts use drupal to create several websites and applications that business 
    or enterprise require to manage every day operations smoothly. We have made great 
    standard features, like easy content authoring, reliable performance, and excellent 
    security with our drupal development services. We deliver exceptional drupal development 
    services which includes drupal web designing and development, drupal theme and templates development.`,
        delayAnimation: "100",
    },
    {
        title: "PSD Responsive to HTML",
        descriptions: `VB Easy offers pixel perfect PSD to Responsive HTML conversion services
     at affordable cost and within allocated time. Why choose PSD to Responsive HTML? Our 
     well versed developers keep focu on the way to maintain code structure intact during 
     conversion, increase computer program visibility with comprehensive strategies, fast 
     loading speed that ensures greater traffic and boost sales . More broadly, we offer an 
     abundance of benefit to our clients by rendering high cross browser compatibility and 
     ideal coding to succeed in their business goals efficiently.`,
        delayAnimation: "200",
    },
];

const WebServiceBestThings = () => {
    return (
        <ul className="ptf-process-steps">
            {Content.map((val, i) => (
                <li
                    className="ptf-process-item"
                    data-aos="fade"
                    data-aos-delay={val.delayAnimation}
                    key={i}
                >
                    <h6 className="ptf-process-item__title">{val.title}</h6>
                    <p className="ptf-process-item__text">{val.descriptions}</p>
                </li>
            ))}
        </ul>
    );
};

export default WebServiceBestThings;