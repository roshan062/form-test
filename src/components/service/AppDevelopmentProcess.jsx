import React from "react";

const Content = [
    {
        title: "APP DESIGN",
        descriptions: `Multi Cloud Ai Team will design user interface for you and will show you many number of designs and will wait for approval. `,
        delayAnimation: "0",
    },
    {
        title: "DEVELOPMENT TOOL",
        descriptions: `Our team will develop the App according the chosen designs and the project specifications. Demo app will be published test-flight`,
        delayAnimation: "100",
    },
    {
        title: "TESTING AND LAUNCH",
        descriptions: `Testing process include team and client side to be on same page, Multi Cloud Ai will submit the Apps on App store and Play store. `,
        delayAnimation: "200",
    },

    {
        title: "MAINTENANCE",
        descriptions: `Once App launched, Multi Cloud Ai will provide maintenance as per contract with both parties, to meet Project spec. `,
        delayAnimation: "300",
    },
];

const AppDevelopmentProcess = () => {
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

export default AppDevelopmentProcess;
