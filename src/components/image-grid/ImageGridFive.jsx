import React from "react";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

const ImageGridFive = () => {
    return (
        <>
            <SimpleReactLightbox>
                <SRLWrapper>
                    {/* <!--Spacer--> */}
                    <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "5rem" }}
                    ></div>
                    <div
                        className="ptf-animated-block"
                        data-aos="fade"
                        data-aos-delay="0"
                    >
                        {/* <!--Simple Image--> */}
                        <div className="ptf-simple-image">
                            <a
                                href="/assets/img/services/web-service.jpg"
                                data-fancybox
                                rel="nofollow"
                            >
                                <img
                                    src="/assets/img/services/web-service.jpg"
                                    alt="pictures"
                                    loading="lazy"
                                />
                            </a>
                        </div>
                    </div>
                </SRLWrapper>
            </SimpleReactLightbox>
        </>
    );
};

export default ImageGridFive;
