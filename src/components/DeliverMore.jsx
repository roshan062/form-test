import React from "react";

const Content = [
    {
        title: "Free Technical Consultation",
        descriptions: `We will provide free technical consultation. `,
        delayAnimation: "0",
    },
    {
        title: "UI/UX Support",
        descriptions: `We will provide UI/UX support whenever neede.`,
        delayAnimation: "100",
    },
    {
        title: "Detailed Quote And Product Dummy",
        descriptions: `We will provide detailed quote of your project and even a dummy. `,
        delayAnimation: "200",
    },

    {
        title: "Dedicated Expert Team",
        descriptions: `We will provide you multidiscilinary expert team for your project. `,
        delayAnimation: "300",
    },
];

const DeliverMore = () => {
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

export default DeliverMore;
