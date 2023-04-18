import React from "react";

//Home Page
import NewAgencyHome from "../views/home-page/NewAgencyHome";

//Why MultiCloud
import WhyMultiCloud from "../views/inner-pages/why-multi-cloud/WhyMultiCloud";

// About Us
import AboutUs from "../views/inner-pages/about/AboutUs";

//Career
import Careers from "../views/inner-pages/career/Careers";

// Service
import Service from "../views/inner-pages/service/Service";
import WebService from "../views/inner-pages/service/WebService";
import AppService from "../views/inner-pages/service/AppService";
import ConsultingService from "../views/inner-pages/service/ConsultingService";
import DigitalMarketingService from "../views/inner-pages/service/DigitalMarketingService";
import CloudService from "../views/inner-pages/service/CloudService";

// Work
import Works from "../views/inner-pages/work/Works";

//Team
import Team from "../views/inner-pages/team/Team";

// Blog
import BlogGrid from "../views/inner-pages/blog/BlogGrid";
import BlogPhp from "../views/inner-pages/blog/BlogPhp";
import BlogApp from "../views/inner-pages/blog/BlogApp";
import BlogDigitalMarketing from "../views/inner-pages/blog/BlogDigitalMarketing";
import BlogBusiness from "../views/inner-pages/blog/BlogBusiness";
import BlogJobs from "../views/inner-pages/blog/BlogJobs";

//Contact
import Contact from "../views/inner-pages/contact/Contact";

// FAQs
import Faq from "../views/inner-pages/faq/Faq";

// Others
import NotFound from "../views/other-pages/NotFound";
import { Routes, Route } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const AllRoutes = () => {
  return (
    <>
      <ScrollTopBehaviour />
      <Routes>
        <Route path="/" element={<NewAgencyHome />} />

        {/* Services */}
        <Route path="services" element={<Service />} />
        <Route path="services/mobile-app-development" element={<AppService />} />
        <Route path="services/software-consulting" element={<ConsultingService />} />
        <Route path="services/cloud-app-development-services" element={<CloudService />} />
        <Route path="services/digital-marketing-agency" element={<DigitalMarketingService />} />
        <Route path="services/web-app-development" element={<WebService />} />

        {/* Why MultiCloud AI */}
        <Route path="why-multicloud-ai" element={<WhyMultiCloud />} />


        {/* Careers */}
        <Route path="career" element={<Careers />} />

        {/* Team */}
        <Route path="team" element={<Team />} />


        {/* Work */}
        <Route path="case-study" element={<Works />} />

        {/* About */}
        <Route path="about-us" element={<AboutUs />} />

        {/* Blogs */}
        <Route path="blog" element={<BlogGrid />} />
        <Route path="blog/php-and-mysql-web-development" element={<BlogPhp />} />
        <Route path="blog/job-opening-for-web-development-and-designing" element={<BlogJobs />} />
        <Route path="blog/what-are-the-advantages-of-digital-marketing" element={<BlogDigitalMarketing />} />
        <Route path="blog/7-tips-to-grow-your-business-in-2020" element={<BlogBusiness />} />
        <Route path="blog/5-easy-steps-to-build-a-android-mobile-application-in-2022" element={<BlogApp />} />

        {/* Contact */}
        <Route path="/contact-us" element={<Contact />} />

        {/* FAQs */}
        <Route path="/faq" element={<Faq />} />

        {/* Others */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
