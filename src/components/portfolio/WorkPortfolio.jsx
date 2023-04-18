import React from "react";

const portfolioContent = [
    {
        img: "work-1",
        discription: "WordPress MySql plugins",
        title: "Gibbs  Wright  Lawyers",
        link: "https://gibbswrightlawyers.com.au/",
    },
    {
        img: "work-2",
        discription: "Larvel  Bootstrap  Google API's  AWS",
        title: "Farm House Fresh Goods",
        link: "https://www.farmhousefreshgoods.com/",
    },
    {
        img: "work-3",
        discription: "Google Sheet  Google API's  Graphs  Google Apps Script",
        title: "Scream Town Actor | Abandoned Hayride",
        link: "https://www.screamtownactor.com/schedule",
    },
    {
        img: "work-4",
        discription: "Google Sheet  Google API's  Graphs  Google Apps Script",
        title: "Paramount Digital",
        link: "https://paramountdigital.co.uk/",
    },
    {
        img: "work-5",
        discription: "Peak Performances Inc",
        title: "Laravel  MySql  Vue Js",
        link: "https://peakperformances.com/",
    },
    {
        img: "work-6",
        discription: "OT Sports",
        title: "Google sheet  Google API's  Graphs  Formula's",
        link: "https://www.otsports.com/",
    },
    {
        img: "work-7",
        discription: "Google Sheet  Google API's  Graphs  Google Apps Script",
        title: "RAS System",
        link: ""
    },
    {
        img: "work-8",
        discription: "Larvel  MySql  Vue Js  API's for Mobile Apps",
        title: "Smart Cleaning Solutions",
        link: "https://smartclean.com.au/",
    },
    {
        img: "work-9",
        discription: "IOS Apps  Android Apps  Google API's  Twilio API",
        title: "Smart Cleaning Solutions Mobile Apps | A Smarter Way - Play and App Store",
        link: ""
    },
    {
        img: "work-10",
        discription: "Laravel  MySql  Bootstrap  API's",
        title: "Lab- Tracker | MedSymphony",
        link: "https://lab-tracker.com/",
    },
    {
        img: "work-11",
        discription: "Laravel  MySql  Google Sheet  Bootstrap  API's  Google Drive API",
        title: "Waves | Squeak E Clean Studios Blade Thornton",
        link: ""
    },
    {
        img: "work-12",
        discription: "Laravel  MySql  Google Sheet  Bootstrap  API's  Google Drive API",
        title: "Waves | Squeak E Clean Studios",
        link: ""
    },
    {
        img: "work-13",
        discription: "Google Sheet  API's  Formula's",
        title: "Google Appscript | Alejandro Rivas",
        link: ""
    },
    {
        img: "work-14",
        discription: "GMail  Google Apps  Google Admin",
        title: "Google Business Email - GSuite Setup | Andrew Shepin",
        link: ""
    },
    {
        img: "work-15",
        discription: "Google Sheet  API's  Python",
        title: "Google API Console Expert | Jared Self",
        link: ""

    },
    {
        img: "work-16",
        discription: "Google Site  Google Apps  Google API's  Xero  Stripe Gateway  Web Development",
        title: "GSuite Setup | AI Australia | Cody Middlebrook",
        link: ""
    },
];

const WorkPortfolio = () => {
    return (
        <div className="ptf-content-slider">
            <div className="row" >
                {/* Portfolio Items */}
                {portfolioContent.map((item, i) => (
                    <div className="col-md-4" style={{ padding: '3%', height: 'max', marginBottom: '1rem' }} key={i}>
                        <article className="ptf-work ptf-work--style-1">
                            <div className="ptf-work__media" >
                                <img
                                    src={`assets/img/work/${item.img}.png`}
                                    alt="work_image"
                                    loading="lazy"
                                />
                            </div>
                            <div className="ptf-work__meta">
                                <div className="ptf-work__category">{item.discription}</div>
                                <h4 className="ptf-work__title">
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {item.title}
                                    </a>
                                </h4>
                            </div>
                        </article>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkPortfolio;