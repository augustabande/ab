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
                                <h3>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</h3>
                            </div>

                            <div className="description spacer p-top-lg" data-aos="fade-up">
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
