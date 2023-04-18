import React from "react";

const approachContent = [
    {
        subTitle: "ONE",
        title: "Why DIGITAL MARKETING for Business?",
        descriptions: `Computerized selling is valuable for each sort of organizations. We offer sensible computerized
        administrations like SEO, Social media, content, email battling, PPC and so on to support your business 
        successfully. We offer sensible advanced administrations like SEO, Social media, content, email
         battling, PPC and so forth to help your business successfully. computerized administrations like SEO,
          Social media, content, email battling, PPC and so forth to support your business really. `,
        delayAnimation: "0",
    },
    {
        subTitle: "TWO",
        title: "Grow Your Business Effectively",
        descriptions: ` We have adjusted numerous organizations to achieve their goals and helped numerous l
        ittle businesses. digital administrations like SEO, Social media, content, email battling,
         PPC and so forth to support your business effectively.  digital administrations like SEO,
          Social media, content, email crusading, PPC and so on to help your business successfully.`,
        delayAnimation: "100",
    },
    {
        subTitle: "THREE",
        title: "Bigger Returns",
        descriptions: `With our high level working ways, we can correction your plans into reality. we will generally
        keep up with great information concerning Google algorithms and market alteration constantly, in this 
        manner we will more often than not style versatile strategies that might be molded in sync with the 
        changeovers. `,
        delayAnimation: "200",
    },
    {
        subTitle: "FOUR",
        title: "Reach Target Marketed and Customers",
        descriptions: `our quintessential group assists you with prevailing in unfaltering your expected client or 
        designated market through playing the arranged exercises on totally various channels and conveying 
        potential leads that believer into deals. totally various channels and conveying potential leads that
         proselyte into deals.`,
        delayAnimation: "300",
    },
    {
        subTitle: "FIVE",
        title: "ROI Based Results",
        descriptions: `  We utilize Associate in Nursing ROI-driven approach in our administrations and this can be the reason 
        we have some expertise in financial plan improvement, crowd and markets while running Ad crusades. totally 
        various channels and conveying potential leads that believer into deals.`,
        delayAnimation: "400",
    },
    {
        subTitle: "SIX",
        title: "Strategy Planning & Reporting",
        descriptions: `Computerized Marketing advancing covers a few factors along with market cost, online entire name,
        item sort, and fix assessment, and some more, we will quite often assemble the best technique for each 
        issue and gives total news.`,
        delayAnimation: "500",
    },
];

const DigitalMarketingApproach = () => {
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

export default DigitalMarketingApproach;
