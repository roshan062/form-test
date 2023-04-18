import React from "react";

const approachContent = [
    {
        subTitle: "ONE",
        title: "Single Page Application Development",
        descriptions: `Predominantly, a single page application 
    has plenty of advantages such as speed, the 
    user can take immense benefit of a natural 
    environment of the app without having to wait 
    for the page reloads. Caching capabilities 
    and Debugging with Chrome are the prominent 
    features of Single Page App and also it can 
    enhance process in several ways.`,
        delayAnimation: "0",
    },

    {
        subTitle: "TWO",
        title: "PWA-Progressive Web App",
        descriptions: `Progressive web apps are websites that appear like 
        an app.We emphasise on modern technologies such as 
        HTML, CSS and Javascript to build Progressive Web 
        Application This comply to users can acquire entire 
        information and imperative capabilities without downloading 
        a mobile app. Interestingly , progressive web apps utilize 
        modern web technology to deliver phenomenal app-like experiences 
        to users.`,
        delayAnimation: "100",
    },
    {
        subTitle: "THREE",
        title: "Cloud Based Applications Development",
        descriptions: `Cloud Based Application is one among the 
        rapidly growing segments of the data technology 
        market. VB Easy's phenomenal professional will 
        gauge your business's IT environment and business 
        objectives before commencing a custom tactics to 
        modernize and sustain your technology within the 
        cloud. Also, an experienced team of cloud consultants 
        explore your current infrastructure, hear your business 
        motto and compliance needs then evaluate a reliable plan 
        of attack for your cloud migration, deployment or management 
        efforts.`,
        delayAnimation: "200",
    },
    {
        subTitle: "FOUR",
        title: "SAAS App Development",
        descriptions: `We provide exceptional and tremendous solutions to 
        develop Sass Apps Development. Further, Sass App 
        Development is assessed into three parts which entails 
        Sass Development Consulting attributes with conceptualisation 
        and strategy development. Saas App designing to make the app 
        user friendly and engaging and support and maintenance ensures 
        scalability and ongoing support.`,
        delayAnimation: "300",
    },
    {
        subTitle: "FIVE",
        title: "E-Commerce Platforms",
        descriptions: `Pursue latest trends and conditions in e-commerce offering the 
        wonderful shopping experience to your customers.Our innovative 
        and vigorous solutions cover fresh methods to reinforce customer 
        service and order functionality. We offer multifunctional e-commerce 
        software development including Online Stores, Shopify and marketplaces.`,
        delayAnimation: "400",
    },
    {
        subTitle: "SIX",
        title: "Business Applications",
        descriptions: `Business Applications are wont to grow productivity, to work out 
        productivity and to perform other tasks or functions accurately. We 
        use the optimum Business Analysis practices for software development 
        to sustain between the business needs and therefore the IT team. We 
        endeavour to specialize in improving security, direct integration and 
        custom scalability.`,
        delayAnimation: "500",
    },
    {
        subTitle: "SEVEN",
        title: "Website Design",
        descriptions: `We design and develop websites that deliver phenomenal user 
        experiences. We endeavour website to be unique, promising to 
        capture your products personality and offering. Our entire 
        websites are technically optimised and responsive across the 
        latest devices and other platforms with custom functionality. 
        We are accountable for the whole process from design to 
        development and testing.`,
        delayAnimation: "600",
    },
    {
        subTitle: "EIGHT",
        title: "Web API's Development",
        descriptions: `Web API is chiefly referred to as a framework that authorizes 
        the development of HTTP services to reach out to client entities 
        like, devices, browsers or tablets.We built web APIs and API as 
        a Service (APIaaS). We use of HTTP/HTTPS, XML, XHTML, JSON, Java, 
        SOAP, EDI, AJAX, TCP/IP and/or REST API development services, 
        using PHP, JavaScript, Ruby, XML we use latest technologies to 
        get data from all different API's.`,
        delayAnimation: "700",
    },
    {
        subTitle: "NINE",
        title: "Third Party Apps",
        descriptions: `Formation of web applications has become a very significant 
        requirement for all entrepreneurs, every business and industries. 
        With third-party applications, our veterans would help to create 
        the development of web applications much more reliable and 
        responsive. Also third party applications provide immense 
        benefits to organizations which includes open source continuous 
        integration for servers and deployment.`,
        delayAnimation: "800",
    },
];

const WebServiceApproach = () => {
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

export default WebServiceApproach;
