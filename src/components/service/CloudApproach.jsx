import React from "react";

const approachContent = [
    {
        subTitle: "ONE",
        title: "Ideas",
        descriptions: `We'll be Suggesting featured ideas based on your software requirements, like-
        Basic functionality, Code Analysis, Security, Integration Testion, etc `,
        delayAnimation: "0",
    },
    {
        subTitle: "TWO",
        title: "Cloud App Management",
        descriptions: ` If needed to rebuild or revamp web app we have always suggest latest technologies before implementation 
        of features and functions.`,
        delayAnimation: "100",
    },
    {
        subTitle: "THREE",
        title: "Cloud app UX/UI design",
        descriptions: `We use FIGMA or other tools to design high-level functional and technical. `,
        delayAnimation: "200",
    },
    {
        subTitle: "FOUR",
        title: "Cloud app development",
        descriptions: `Backend Develeopment $ Frontend Development`,
        delayAnimation: "300",
    },
    {
        subTitle: "FIVE",
        title: "Cloud app QA & Testing",
        descriptions: `We will do Test Planning, Regular Code Reviews, Test Automation, etc.`,
        delayAnimation: "400",
    },
    {
        subTitle: "SIX",
        title: "Cloud app support and evolution",
        descriptions: `We provide Admin Dashboard so it can be easily monitored. Not only that, We also provide different levels of support.`,
        delayAnimation: "500",
    },
];

const CloudApproach = () => {
    return (
        <div
            className="row"
            style={{
                "--bs-gutter-x": "3.75rem",
                "--bs-gutter-y": "7.5rem",
            }}
        >
            {approachContent.map((val, i) => (
                <div className="col-xl-4 col-lg-6" key={i}>
                    {/* <!--Animated Block--> */}
                    <div
                        className="ptf-animated-block"
                        data-aos="fade"
                        data-aos-delay={val.delayAnimation}
                    >
                        {/* <!--Approach Box--> */}
                        <div
                            className="ptf-approach-box"
                            style={{
                                "--ptf-title-color": "var(--ptf-color-white)",
                            }}
                        >
                            <h3 className="ptf-approach-box__title">{val.title}</h3>
                            <div className="ptf-approach-box__content">
                                <p className="has-white-color">{val.descriptions}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CloudApproach;
