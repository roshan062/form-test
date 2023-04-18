import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const counterUpContent = [
    {
        startCount: "0",
        endCount: "45",
        metaText1: "Web Design",
        metaText2: "& Development",
        animationDelay: "0",
    },
    {
        startCount: "0",
        endCount: "10",
        metaText1: "Mobile Apps",
        metaText2: "Development",
        animationDelay: "100",
    },
    {
        startCount: "0",
        endCount: "45",
        metaText1: "Custom Google",
        metaText2: "App Development",
        animationDelay: "200",
    },
];

const DeliveredProjectsCounter = () => {
    const [focus, setFocus] = React.useState(false);
    return (
        <div className="row" style={{ "--bs-gutter-y": "2rem" }}>
            {counterUpContent.map((val, i) => (
                <div className="col-6 col-lg-3" key={i}>
                    {/* <!--Animated Block--> */}
                    <div
                        className="ptf-animated-block"
                        data-aos="fade"
                        data-aos-delay={val.animationDelay}
                    >
                        {/* <!--Counter Up--> */}
                        <div className="ptf-counter-up ptf-counter-up--style-1">
                            <div className="ptf-counter-up__value">
                                <CountUp
                                    start={focus ? val.startCount : null}
                                    end={val.endCount}
                                    duration={1}
                                    redraw={true}
                                >
                                    {({ countUpRef }) => (
                                        <VisibilitySensor
                                            onChange={(isVisible) => {
                                                if (isVisible) {
                                                    setFocus(true);
                                                }
                                            }}
                                        >
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>%
                            </div>
                            <h5 className="ptf-counter-up__title">
                                {val.metaText1} <br />
                                {val.metaText2}
                            </h5>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DeliveredProjectsCounter;
