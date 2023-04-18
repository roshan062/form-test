import React from "react";

const Content = [
    {
        title: "ANALYSIS",
        descriptions: `This s the initial step of our functioning interaction. We appropriately investigate the business, item, contenders, crowd, administrations and so forth It helps us `,
        delayAnimation: "0",
    },
    {
        title: "PLANNING",
        descriptions: `After the appropriate examination we plan
        the procedure of work that includes several exercises. Our team creates the methodology agreeing to the industry.`,
        delayAnimation: "100",
    },
    {
        title: "EXECUTION",
        descriptions: `Last advance is execution, with every one of the arranged things and working
        processes we execute our arrangement
        what's more, convey the best outcome to our clients. `,
        delayAnimation: "200",
    },
    {
        title: "GROW BUSINESS",
        descriptions: `Because of difficult work, methodologies and devotion your business will develop actually and you will obtain astonishing outcomes.`,
        delayAnimation: "300",
    },
];

const CloudProcess = () => {
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

export default CloudProcess;
