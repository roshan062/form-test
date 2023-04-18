import React from "react";
import { Link } from "react-router-dom";

const teamContent = [
    {
        delayAnimation: "0",
        img: "m1",
        title: "Rajveer Singh",
        designation: "Creative Director & CEO",
        link: "/team",
    },
    {
        delayAnimation: "200",
        img: "m2",
        title: "Shrishti Chadha",
        designation: "HR & Management",
        link: "/team",
    },
    {
        delayAnimation: "300",
        img: "m3",
        title: "Janus",
        designation: "Web Designer/Developer",
        link: "/team",
    },
    {
        delayAnimation: "0",
        img: "m4",
        title: "Vince",
        designation: "Full Stack Developer",
        link: "/team",
    },
    {
        delayAnimation: "100",
        img: "m5",
        title: "Ritika",
        designation: "Virtual Assistance",
        link: "/team",
    },
    {
        delayAnimation: "100",
        img: "m6",
        title: "Ritu Raj",
        designation: "Full Stack Developer",
        link: "/team",
    },
    {
        delayAnimation: "100",
        img: "m7",
        title: "Aman",
        designation: "Full Stack Developer",
        link: "/team",
    },

    {
        delayAnimation: "200",
        img: "m8",
        title: "",
        designation: "",
        link: "/career",
    },
];

const Team = () => {
    return (
        <>
            {teamContent.map((val, i) => (
                <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay={val.delayAnimation}
                    key={i}
                >
                    {/* <!--Team Member--> */}
                    <div className="ptf-team-member ptf-team-member--has-effect">
                        <div className="ptf-team-member__avatar">
                            <div className="shadow-effect"></div>
                            <Link to={val.link}>
                                {" "}
                                <img
                                    src={`/assets/img/team/${val.img}.png`}
                                    alt={val.title}
                                    loading="lazy"
                                />
                            </Link>
                        </div>
                        <div className="ptf-team-member__content">
                            <h6 className="ptf-team-member__name">
                                <Link to="/team">{val.title}</Link>
                            </h6>
                            <p className="ptf-team-member__function">{val.designation}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Team;
