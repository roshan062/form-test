import React from "react";
// import BlogVacancyContactForm from "../BlogVacancyContactForm";

const Content = [
    {
        postName: "NodeJS Developer",
        features: ["More than 3+ Years of Experience.", "Knowledge of frontend is plus point."],
        delayAnimation: "0",
    },
    {
        postName: "PHP Developer",
        features: ["More than 2+ Years of Experience.",],
        delayAnimation: "100",
    },
    {
        postName: "General Sales Manager",
        features: ["More than 4+ Years of Experience.",],
        delayAnimation: "200",
    },
    {
        postName: "Junior SEO Expert",
        features: ["More than 2+ Years of Experience.",],
        delayAnimation: "300",
    },
    {
        postName: "Senior SEO Expert",
        features: ["More than 4+ Years of Experience.",],
        delayAnimation: "400",
    },
];

const CareerCard = () => {
    return (
        <>
            {Content.map((val, i) => (
                <div className="col-xl-4 col-lg-6" key={i}>
                    {/* <!--Animated Block--> */}
                    <div
                        className="ptf-animated-block h-100"
                        data-aos="fade"
                        data-aos-delay={val.delayAnimation}
                    >
                        <div className="ptf-pricing-table h-100">
                            <div className="ptf-pricing-table__header">
                                <h1 className="ptf-pricing-table__title">{val.postName}</h1>
                            </div>
                            <div className="ptf-pricing-table__content">
                                <ul>
                                    {val.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="ptf-pricing-table__action">
                                {/* <!--Button--> */}
                                <a
                                    className="ptf-btn ptf-btn--primary ptf-btn--block"
                                    href="#form"
                                >
                                    Apply Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* <!--Spacer--> */}
            <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "8.875rem", "--ptf-md": "5.4375rem" }}
                id="form"
            ></div>
        </>
    );
};

export default CareerCard;
