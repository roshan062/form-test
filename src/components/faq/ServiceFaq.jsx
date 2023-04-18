import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";

const FaqContent = [
    {
        title: " WHAT IS YOUR PRICING MODEL?",
        desc: `It completely depends on project requirements. We usually work 
    on a time & material model which means that you are charged for a specific 
    number of hours worked by team members per billing period.`,
        expand: "a",
    },
    {
        title: "HOW QUICK CAN YOU START A PROJECT ?",
        desc: `In a broad sense, we follow a strategic and systematic approach 
    of management which includes studying immense understanding of the project 
    goals, creating a list of tasks and deliverables, making a resource plan, 
    project schedule and project budget and holding a project for a Kick off meeting.`,
        expand: "b",
    },
    {
        title: "HOW DO YOU COMPOSE A TEAM FOR THE PROJECT ?",
        desc: `Predominantly,  we commence a team by performing research & analysis that needs 
    to be executed in the right direction at the right time. Certainly, Project management 
    is equally attributed with effective team management.

 

    Choose the right people for the job, delegate the accountabilities & authorities the 
    team needs to complete the project.
    
     
    
    Organise forums or  conference sessions where you and your team can share opinion, 
    views, concerns and project status on a daily basis. It helps us to find the obstacles 
    as well as we can reach conclusions togetherly.`,
        expand: "c",
    },
    {
        title: "HOW DO YOU ENSURE PROJECT CONFIDENTIALITY?",
        desc: `Vigilant attention to maintain project confidentiality is our top most priority. 
    To give you assurance that your information is completely protective and secure from 
    unauthorized access.

    We sign a NDA ( non disclosure agreement) upon your aspirations, so we are legally tie 
    up to hold confidential  and proprietary information provided by you.`,
        expand: "d",
    },
    {
        title: "HOW DO YOU ENSURE DELIVERY AGAINST AGREED REQUIREMENTS?",
        desc: `We pursue robust conceptualization and rigorous policies that have been well founded 

    for delivery of projects in a timely manner against consented requirements.
    
    Build a successful team - Successful enterprise operates best and with the most longevity when 
    employees work with a team mentality, each gets a required role and fulfilling long-term goals. 
    
    Opt agile methodologies - Studies show that agile methodologies help us to focus on business values, 
    improve quality and early & predictable delivery.
    
    Greater focus on business requirements - Core focus on business requirements helps to reach business 
    goals more efficiently. `,
        expand: "e",
    },
];

const ServiceFaq = () => {
    return (
        <>
            <dl className="ptf-accordion">
                <Accordion preExpanded={["a"]} allowZeroExpanded>
                    {FaqContent.map((item, i) => (
                        <AccordionItem key={i} uuid={item.expand}>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <dt>{item.title}</dt>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            {/* Accordion Heading */}
                            <AccordionItemPanel>
                                <dd>{item.desc}</dd>
                            </AccordionItemPanel>
                            {/* Accordion Body Content */}
                        </AccordionItem>
                    ))}
                </Accordion>
            </dl>
        </>
    );
};

export default ServiceFaq;
