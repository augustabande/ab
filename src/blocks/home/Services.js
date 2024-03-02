import React from 'react';
import AccordionExample from './Accordion'; 

const Services = () => {
    return (

        <section id="services" className="block spacer p-top-xl">
            { }

            <div className="wrapper">
                <div className="title" data-aos="fade-up">
                    <h2>Services</h2>
                </div>

                <div className="row gutter-width-md with-pb-lg justify-content-center">
                    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                        <div className="about-me-img" data-aos="zoom-in-right">
                            <div className="img object-fit">
                                <div className="object-fit-cover">
                                    <img src="assets/img/placeholder/21_img.jpg" alt="Services" />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                        <div className="d-flex flex-column justify-content-center h-100">
                            <div className="title" data-aos="fade-up">
                                <h2 className="pb-0">Consulting service</h2>
                            </div>

                            <div className="sub-title spacer p-top-lg" data-aos="fade-up">
                                <h3>€130.00 / 60 minutes
                                </h3>
                            </div>

                            <div className="description spacer p-top-lg" data-aos="fade-up">
                                <p>Introducing Nuvola, my bespoke web consulting service designed to enhance your understanding of the technical facets of a website. If you're already a website owner, you'll learn about its current health status and discover strategies for its upkeep, identify common pitfalls and how to remedy or sidestep future issues. For those on the cusp of creating a website, I'll equip you with insightful advice to ensure you make decisions that are both informed and tailored to your needs. The digital landscape offers a multitude of paths, and together, we'll explore the options that best align with your unique requirements. Furthermore, I'm here to address any technical queries you may have regarding hosting, template selection, database management, WordPress, plugins, backups, performance enhancement, and optimization strategies.</p>
                            </div>

                            <AccordionExample />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;