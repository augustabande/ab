import React, { useEffect } from 'react';

import SocialLinks from './SocialLinks';

const PageTitle = () => {
    const backgrounImage = require( '../../assets/img/placeholder/01_img.jpg');

    useEffect(() => {
        if ( document.querySelector('.page-title-img') ) {
            document.querySelector('.site-main').classList.add('overflow-hidden');
        }

        return () => {
            if ( document.querySelector('.site-main').classList.contains('overflow-hidden') ) {
                document.querySelector('.site-main').classList.remove('overflow-hidden');
            }
        }
    });

    return (
        <section id="page-title" className="block bg-secondary">
            <div className="wrapper">
                <div className="row gutter-width-md">
                    <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                        <div className="page-title-content">
                            <div className="title" data-aos="fade-down">
                                <h1 className="large">Hi. I’m Luca <br/>Rendez</h1>
                            </div>

                            <div className="description spacer p-top-lg" data-aos="fade-up">
                                <p>Photographer and Web Designer.</p>
                            </div>

                            <div className="my-information spacer p-top-lg" data-aos="fade-up">
                                <div className="my-information-items">
                                    <div className="my-information-item" data-aos="zoom-in" data-aos-delay="200">
                                        <h6 className="my-information-item-title">Full Name</h6>

                                        <p className="my-information-item-description">Luca Rendez</p>
                                    </div>

                                    <div className="my-information-item" data-aos="zoom-in" data-aos-delay="400">
                                        <h6 className="my-information-item-title">Birth Date</h6>

                                        <p className="my-information-item-description">1994-05-05</p>
                                    </div>

                                    <div className="my-information-item" data-aos="zoom-in" data-aos-delay="600">
                                        <h6 className="my-information-item-title">Address</h6>

                                        <p className="my-information-item-description">London, United Kingdom</p>
                                    </div>

                                    <div className="my-information-item" data-aos="zoom-in" data-aos-delay="800">
                                        <h6 className="my-information-item-title">Email</h6>

                                        <p className="my-information-item-description"><a href="mailto:info@domain.com">info@domain.com</a></p>
                                    </div>

                                    <div className="my-information-item" data-aos="zoom-in" data-aos-delay="1000">
                                        <h6 className="my-information-item-title">Phone no.</h6>

                                        <p className="my-information-item-description"><a href="tel:+43253312523">+432 533 12 523</a></p>
                                    </div>
                                </div>
                            </div>

                            <div className="spacer p-top-lg" data-aos="fade-up">
                                <SocialLinks />
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                        <div className="page-title-img" style={{ backgroundImage: `url(${backgrounImage})` }} data-aos="zoom-in-left"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PageTitle;
