import React from 'react';

import ContactsForm from '../../components/form/ContactForm';

const ContactMe = () => {
    const backgrounImage = require( '../../assets/img/demo/18_img.png'); 

    return (
        <section id="contact-me" className="block spacer p-top-xl">
            <div className="wrapper">
                <div className="title" data-aos="fade-up">
                    <h2>Contact me</h2>
                </div>

                <div className="row gutter-width-md with-pb-lg">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <ContactsForm />
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 contact-me-img" style={{ backgroundImage: `url(${backgrounImage})` }}>
                        <div className="d-flex align-items-end h-100 spacer p-bottom-lg">
                            <div className="contacts-information" data-aos="fade-up">
                                <div className="contacts-information-body">
                                    <div className="contacts-information-dot"></div>

                                    <div className="contacts-information-items">
                                        <div className="contacts-information-item" data-aos="zoom-in" data-aos-delay="200">
                                            <h6 className="contacts-information-item-title">Address</h6>

                                            <p className="contacts-information-item-description">London, United Kingdom</p>
                                        </div>

                                        <div className="contacts-information-item" data-aos="zoom-in" data-aos-delay="400">
                                            <h6 className="contacts-information-item-title">Email</h6>

                                            <p className="contacts-information-item-description"><a href="mailto:info@domain.com">info@domain.com</a></p>
                                        </div>

                                        <div className="contacts-information-item" data-aos="zoom-in" data-aos-delay="600">
                                            <h6 className="contacts-information-item-title">Phone no.</h6>

                                            <p className="contacts-information-item-description"><a href="tel:+43253312523">+432 533 12 523</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;
