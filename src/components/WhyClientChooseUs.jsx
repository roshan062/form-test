import React from "react";

const approachContent = [
    {
        subTitle: "ONE",
        title: "HIGH LEVEL EXPERTISE",
        descriptions: `We provide excellence service by integrating the perfect people with the perfect
         technology; a main focus towards CompIntelligence. We follow agile techniques and processes that 
         are constantly evolving to render more value and efficiency as we assist clients how to manage 
         implementations, integrate systems, find expert resources, and build custom solutions. Our
          capability to render dynamic and flexible solutions, amalgamate with our immense expertise 
          and knowledge, establish long-term relationships in an industry that’s continuously changing. `,
        delayAnimation: "0",
    },
    {
        subTitle: "TWO",
        title: "TEAM WORK & PLANNING",
        descriptions: `Our team represents collaborative efforts to achieve common goals in the most 
        efficient way.We always endeavour to establish effective communication within organizations to
         achieve tremendous productivity. We always improve teamwork through specifying the roles and
          accountabilities, recognition & admiration for good work, use team management software for 
          obtaining feedback and last but not least we don’t micromanage. All these methodologies help 
          us to be unique and produce great results. By performing team building activities, you will
           intensify trust among personnel and constitute positive culture.`,
        delayAnimation: "100",
    },
    {
        subTitle: "THREE",
        title: "TRUST & TRANSPARENCY",
        descriptions: `In this information age, customers stipulate for vigor communication and 
        transparency. Being honest and straightforward helps to increase your customer base. When
         information is deliberate openly, it improves speed, efficiency and quality of decision 
         making. Moreover, enterprises can respond effectively to market insights much rapidly and 
         bring autonomy within organizations. Planning transparent is the optimum way to keep everyone 
         within the business on the same page, providing an organisation- vision of the goals and 
         expectations delineate by the strategy. `,
        delayAnimation: "200",
    },

];

const WhyClientChooseUs = () => {
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
                            {/* <div className="ptf-approach-box__subtitle">{val.subTitle}</div> */}
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

export default WhyClientChooseUs;
