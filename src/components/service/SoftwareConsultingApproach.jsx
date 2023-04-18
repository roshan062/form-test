import React from "react";

const approachContent = [
    {
        subTitle: "ONE",
        title: "Software Testing",
        descriptions: `We deliver a wide range of services for test automation on Mobile Application,
        Web Application and clouds. Our well experienced professionals pursue meticulous
         processes for testing that includes API and Web Service testing, Cloud Testing,
          Security and Penetration testing, functional  and user acceptance, Integration 
          testing and Regression Testing. Why do businesses require Software testing? 
          Mainly, organizations needs software testing to take an advantage of some features like 
          Product quality, confidentiality and security, cost effectiveness and customer
           satisfaction to cater their needs efficiently.`,
        delayAnimation: "0",
    },
    {
        subTitle: "TWO",
        title: "Custom Software Development",
        descriptions: `At Multi Cloud Ai, we design and develop custom software development solutions particularly
        for users or organizations. Mainly, we create custom software which is scalable and 
        guides you to fulfill your business needs with the ever-changing trends and evolving
         technology. We provide tremendous benefits through customized software solutions that 
          include increase in  productivity which helps organizations to perform tasks faster
           and more efficiently, solving complex problems with innovative and reliable solutions,
            optimized technology which provides maximum surplus and ROI.`,
        delayAnimation: "100",
    },
    {
        subTitle: "THREE",
        title: "Assistance in Business",
        descriptions: `We have opted to walk hand in hand from the first stage of abstraction to the last stage
        of maintenance. We will not only deliver you the optimum Software development & technology
         consulting services, but we will also recommend  your other technical assistance required
          at  each stage of transformation by our phenomenal experts. We pursue Strategic and
           collaborative approach to handle our software development and technical consultation
            services.`,
        delayAnimation: "200",
    },
    {
        subTitle: "FOUR",
        title: "Instant and Rapid Solutions",
        descriptions: `Multi Cloud Ai guides your technical efforts towards a lasting success.You are able to save 
        money on additional staff resources and use our custom software development expertise. Our 
        well versed team will analyze your current infrastructure, listen to your business objectives,
         recommend development plans and philosophies to meet the changing needs of your business 
         and create a platform where you can establish connections with customers. We always deliver
          instant solutions by continuous communication, maintaining transparency.`,
        delayAnimation: "300",
    },
];

const SoftwareConsultingApproach = () => {
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

export default SoftwareConsultingApproach;
