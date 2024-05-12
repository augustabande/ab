import React from 'react';
import AccordionExample from './Accordion'; 
import BookingWidget from './BookingWidget';

const Services = () => {
    return (

        <section id="services" className="block spacer p-top-xl">
            { }

            <div className="wrapper">
                <div className="title" data-aos="fade-up">
                    <h2>Services</h2>
                </div>

                <div className="row gutter-width-md with-pb-lg justify-content-center">
                    {/*<div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                        <div className="about-me-img" data-aos="zoom-in-right">
                            <div className="img object-fit">
                                <div className="object-fit-cover">
                                    <img src="assets/img/placeholder/21_img.jpg" alt="Services" />
                                </div>
                            </div>

                        </div>
                    </div>*/}

                    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                        <div className="d-flex flex-column justify-content-center h-100">
                            <div className="title" data-aos="fade-up">
                                <h2 className="pb-0">Consulting</h2>
                            </div>

                            <div className="sub-title spacer p-top-lg" data-aos="fade-up">
                                <h3>€130.00 / 60 minutes
                                </h3>
                            </div>

                            <div className="description spacer p-top-lg" data-aos="fade-up">
                                <p>Introducing Nuvola, my custom web consulting service that helps you really understand the technical details of websites. If you already own a website, I'll show you how it's currently doing and give you tips on how to take care of it. You'll learn about common problems and how to fix or avoid them in the future. </p><p>If you're thinking about creating a website, I'll provide valuable advice to help you make smart, personalized decisions. The digital world has many different paths to choose from, and we'll find the ones that fit your unique needs the best. </p><p>Plus, I'm here to answer any technical questions you might have about things like hosting, choosing templates, managing databases, using WordPress, plugins, making backups, improving performance, and optimizing your site.</p>
                            </div>
                            <AccordionExample />
                            
                            
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                        <BookingWidget/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;