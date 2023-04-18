import React from "react";

const approachContent = [
    {
        icon: "lnil lnil-hospital-alt-1",
        title: "Healthcare",
        descriptions: `We have successfully developed several customised healthcare software development solutions. We replaced obstacles confronted by healthcare departments with innovative solutions. We create web apps, mobile apps which ultimately aid the healthcare Industry and also pioneer convenient ways to access all relevant information.`,
        delayAnimation: "0",
    },

    {
        icon: "lnil lnil-video-alt-1",
        title: `Sports & `,
        title2: "Entertainment",
        descriptions: `With the help of SAP, we make revolutionary changes in Sports and Entertainment. We facilitate technologies that improve real time insights, stipulate demands by strategic management approach. We develop gaming apps, custom social media apps and entertaining platforms which adds enjoyment to your business.`,
        delayAnimation: "100",
    },
    {
        icon: "lnil lnil-Website",
        title: "E-Commerce &",
        title2: "Retail",
        descriptions: `We create web applications, e-commerce websites, open source e-commerce platforms including (magento, wordpress, woocommerce), desktop and e-commerce management. We build CRMs and ERPs which help an organization to use a system of integrated applications to overcome business threats easily and automate several day to day office operations attributed to technology, services and human resources.`,
        delayAnimation: "200",
    },
    {
        icon: "lnil lnil-travel",
        title: "Logistics &",
        title2: "Transportation",
        descriptions: `We render eminent custom software development solutions for Logistics & Transportation to different forms of business organizations. Our end to end services include automate day to day business operations, management of inventory processes, make a real time tracking system and improve overall customer experience with help of AI and Machine learning.`,
        delayAnimation: "300",
    },
    {
        icon: "lnil lnil-3d",
        title: "Business",
        title2: "Intelligence",
        descriptions: `We assist enterprises in making significant business decisions ranging from operational to strategic through Business Intelligence. Our incredible Business Intelligence Services empower enterprises to acquire new aspects of markets such as knowledge management, data visualization, data gathering and data analysis this helps organizations to gain imperative vital information without direct IT involvement.`,
        delayAnimation: "400",
    },
    {
        icon: "lnil lnil-construction",
        title: "Construction &",
        title2: "Engineering",
        descriptions: `We deliver tremendous services to the Construction and Engineering sectors. We specialise in construction IT solutions and industry-specific technologies for engineers to streamline day to day business operations and obtain transformation within organisations. We give priority to services such as research, Data usage and visualisation, an experienced map and retrospective aspects.`,
        delayAnimation: "500",
    },
    {
        icon: "lnil lnil-bookmark",
        title: "Educational",
        title2: "Community",
        descriptions: `Our phenomenal professionals have created educational and community apps by putting into action these cutting edge technologies:
        AR/VR,
        AI App,
        Chatbot,
        Web and Mobile App development and many more.`,
        delayAnimation: "500",
    },
    {
        icon: "lnil lnil-invention",
        title: "Information",
        title2: "Technology",
        descriptions: `We offer vigorous highly competitive, client focused services, persistent supervision and transparency with guidance of our experienced professionals. Not only do we deliver you the agile Software development solutions & technology consulting services, but we will also provide adequate assistance required at each stage of transformation by our phenomenal experts.`,
        delayAnimation: "500",
    },
];

const IndustriesServe = () => {
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
                            className="ptf-approach-box "
                            style={{
                                "--ptf-title-color": "var(--ptf-color-white)",
                                "--ptf-subtitle-color": "var(--ptf-color-white)",
                            }}
                        >

                            <h3 className="ptf-approach-box__title">
                                <span style={{ marginRight: "20px" }}><i className={val.icon}></i></span>
                                {val.title}</h3>
                            <h3 className="ptf-approach-box__title ml-57">{val.title2}</h3>
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

export default IndustriesServe;
