import React from 'react';

const AboutMe = () => {
    return (
        <section id="about-me" className="block spacer p-top-xl p-bottom-lg">
            <div className="wrapper">
                <div className="row gutter-width-md with-pb-lg justify-content-center">
                    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                        <div className="about-me-img" data-aos="zoom-in-right">
                            <div className="img object-fit">
                                <div className="object-fit-cover">
                                    <img src="assets/img/placeholder/02_img.jpg" alt="About" />
                                </div>
                            </div>

                            <div className="img-2" data-aos="fade-up">
                                <img src="assets/img/demo/03_img.png" alt="signed" />
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                        <div className="d-flex flex-column justify-content-center h-100">
                            <div className="title" data-aos="fade-up">
                                <h2 className="pb-0">About me</h2>
                            </div>

                            <div className="sub-title spacer p-top-lg" data-aos="fade-up">
                                <h3>I'm a web developer and IT consultant with a passion for web design.
                                </h3>
                            </div>

                            <div className="description spacer p-top-lg" data-aos="fade-up">
                                <p>I enjoy developing simple, clean and slick websites that provide real value to the end user. I spent the last 10 years working as IT consultant for International and Governmental Organizations in the scientific field.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;