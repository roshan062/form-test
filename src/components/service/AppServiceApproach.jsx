import React from "react";

const approachContent = [
    {
        subTitle: "ONE",
        title: "APP DESIGN",
        descriptions: `Multi Cloud Ai Team will design user interface for you and will show you many number of designs and will wait for approval. `,
        delayAnimation: "0",
    },
    {
        subTitle: "TWO",
        title: "DEVELOPMENT TOOL",
        descriptions: `Our team will develop the App according the chosen designs and the project specifications. Demo app will be published test-flight`,
        delayAnimation: "100",
    },
    {
        subTitle: "THREE",
        title: "TESTING AND LAUNCH",
        descriptions: `Testing process include team and client side to be on same page, Multi Cloud Ai will submit the Apps on App store and Play store. `,
        delayAnimation: "200",
    },
    {
        subTitle: "FOUR",
        title: "MAINTENANCE",
        descriptions: `Once App launched, Multi Cloud Ai will provide maintenance as per contract with both parties, to meet Project spec. `,
        delayAnimation: "300",
    },
];

const AppServiceApproach = () => {
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

export default AppServiceApproach;
