import React from "react";

const Content = [
    {
        title: "IT Consulting",
        descriptions: `We work  in partnership with clients, recommending them how to utilize information technology in order to strive their business objectives or overcome problems. We know that devising and implementing a concise IT strategy aligned with business goals is a daunting task. 
    We possess well versed IT consultants who develop a new technology agenda or adjust the existing one to a changing business strategy including geographical expansion, new products and services, mergers and acquisitions. `,
        delayAnimation: "0",
    },
    {
        title: "Technological Roadmap",
        descriptions: `Our top notch experts structures technology roadmap (also known as an IT roadmap) is a document which layout the plan to reach short-term and long-term goals through the use of technology solutions. Not only that it provides key information which helps organizations to  make better decisions around technology investments. Our experts put core focus on goals of the organization, resources, training to adjust in dynamic environment, risk factors, release plans while designing technology Roadmap.`,
        delayAnimation: "100",
    },
    {
        title: "Project Management Plan",
        descriptions: `We acquaintance how to give a powerful boost to your project flow and let you enjoy wise resource coordination, clear formulation of objectives and tasks, consistency in process coordination as well as increased process transparency through regular and effective monitoring (e.g., on project status, resource workload, expense tracking).We deliver strategies on how the project commenced, monitored and controlled. Not only project management gives vigorous strength to organisations but also appropriate opportunities to expand your business. `,
        delayAnimation: "200",
    },

    {
        title: "IT Staff Augmentation",
        descriptions: `With Multi Cloud Ai, you cut costs on recruiting and retaining permanent professionals and benefit from phenomenal team augmentation simultaneously. Our developers are vetted, trained, and enthusiastic to work so that they can join your project at any moment, including urgent situations. We deliver IT staff augmentation services incorporating the allocation of dedicated technical resources, usually offshore, hired as overseas development extensions of in-house application development teams on fixed or reliable terms and conditions.`,
        delayAnimation: "300",
    },
];

const SoftwareConsultingFeatures = () => {
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

export default SoftwareConsultingFeatures;
