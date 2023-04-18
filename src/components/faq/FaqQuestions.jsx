import React from "react";
import { Link } from "react-router-dom";

const faqContent = [
  {
    title: "Progress",
    faqInner: [
      {
        title: "How quick can you start a project?",
        descriptions: `In a broad sense, we follow a strategic and systematic approach of management which includes studying immense
         understanding of the project goals, creating a list of tasks and deliverables, making a resource plan, project schedule and 
         project budget and holding a project for a Kick off meeting.`,
      },
      {
        title: "How do you ensure delivery against agreed requirements?",
        descriptions: `
        We pursue robust conceptualization and rigorous policies that have been well founded 
        for delivery of projects in a timely manner against consented requirements.
        Build a successful team – Successful enterprise operates best and with the most longevity when employees work with a team 
        mentality, each gets a required role and fulfilling long-term goals. 
        Opt agile methodologies – Studies show that agile methodologies help us to focus on business values, improve quality and 
        early & predictable delivery.
        Greater focus on business requirements – Core focus on business requirements helps to reach business goals more efficiently. `,
      },
      {
        title: "What are your communication methods and Candences?",
        descriptions: `
        Effective communication is a crucial element for imparting imperative details and also optimum medium for transmitting real-time information related to every aspect of a project and also the best way to establish business relationships.

        Generally, we communicate with following mediums as most of our work is accomplished on a remote basis.
        Email
        Newsletters
        Phone
        Skype 
        Google Hangouts
        Slack`,
      },
    ],
  },
  {
    title: "Payment",
    faqInner: [
      {
        title: "What is your pricing model?",
        descriptions: `t completely depends on project requirements. We usually work on a time & material model which means
         that you are charged for a specific number of hours worked by team members per billing period.`,
      },
    ],
  },
  {
    title: "Support",
    faqInner: [
      {
        title: "How do you ensure project confidentiality?",
        descriptions: `Vigilant attention to maintain project confidentiality is our top most priority. To give you assurance that 
        your information is completely protective and secure from unauthorized access.

        We sign a NDA ( non disclosure agreement) upon your aspirations, so we are legally tie up to hold confidential  and 
        proprietary information provided by you.`,
      },
      {
        title: "How does clients onboarding look like?",
        descriptions: `First and foremost, great emphasis must be placed on plan for a good Kickoff Call. Our team demonstrates 
        their understanding of the work at hand, commands their portion of the decision, and collects information they require to 
        maneuver the campaign forward.

        Core focus must air deep understanding of project requirements both within the context of business and tech objectives. 
        Hence it may be accomplished and proceed by extensive Q&A sessions, scoping sessions or workshops for product design and 
        development.`,
      },
      {
        title: "How do you compose a team for the project?",
        descriptions: `
        Predominantly,  we commence a team by performing research & analysis that needs to be executed in the right direction at the 
        right time. Certainly, Project management is equally attributed with effective team management.
        Choose the right people for the job, delegate the accountabilities & authorities the team needs to complete the project.

        Organise forums or  conference sessions where you and your team can share opinion, views, concerns and project status on a 
        daily basis. It helps us to find the obstacles as well as we can reach conclusions togetherly.`,
      },
      {
        title: "What is your key to Expertise?",
        descriptions: `Our key expertise is the dispense of reliable and well founded customized web applications, mobile 
        applications and customize google applications.In this rapidly changing technology, we cope up with stipulations of clients,
         dynamic performance  and insight random innovations have been taking place in the IT industry.

        We expertise in full stack software development with core focus on C++, React and react Native, Laravel, Angular Js, Magento
         framework, WordPress, Custom Google apps, AWS Server Management,, Java Script, Android Studio and PHP language.`,
      },
    ],
  },
];

const FaqQuestions = () => {
  return (
    <section>
      {/* <!--Spacer--> */}

      <div className="container-xxl">
        {faqContent.map((item, i) => (
          <div key={i}>
            <div className="ptf-animated-block" data-aos="fade">
              {/* <!--FAQ--> */}
              <div className="ptf-faq">
                <div className="ptf-faq__category">
                  <h3>{item.title}</h3>
                </div>
                <div className="ptf-faq__content">
                  {item.faqInner.map((val, i) => (
                    <div className="ptf-faq__item" key={i}>
                      <div className="ptf-faq__question">
                        <h6>{val.title}</h6>
                      </div>
                      <div className="ptf-faq__answer">
                        <p>{val.descriptions}</p>
                      </div>
                    </div>
                  ))}
                  {/* End .ptf-faq__item */}
                </div>
              </div>
            </div>
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "5.625rem" }}
            ></div>
          </div>
        ))}

        {/* <!--Spacer--> */}
        <div className="ptf-spacer" style={{ "--ptf-xxl": "4.375rem" }}></div>
        {/* <!--Animated Block--> */}
        <div className="ptf-animated-block" data-aos="fade">
          <p className="fz-24">
            Don’t find your question?{" "}
            <Link
              className="has-accent-4 text-decoration-underline"
              to="/contact"
            >
              Contact us
            </Link>{" "}
            now, we always willing to help you.
          </p>
        </div>
      </div>
      {/* <!--Spacer--> */}
      <div
        className="ptf-spacer"
        style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
      ></div>
    </section>
  );
};

export default FaqQuestions;
