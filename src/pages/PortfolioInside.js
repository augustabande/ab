import React, { Fragment, useEffect } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';

import PageTitle from '../blocks/portfolio-inside/PageTitle';
import Swipebox from '../components/swipebox/Swipebox';

import PortfolioData from '../data/portfolio/galleryData.json';

const PortfolioInside = () => {



    useEffect(() => {
        document.body.classList.add('single', 'single-adveits_portfolio', 'aos-true');



        return () => {
            document.body.classList.remove('single', 'single-adveits_portfolio', 'aos-true');


        }
    }, []);
    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>Portfolio inside | Sely - Personal Resume vCard React JS Template</title>

                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <meta name="robots" content="index, follow, noodp" />
                <meta name="googlebot" content="index, follow" />
                <meta name="google" content="notranslate" />
                <meta name="format-detection" content="telephone=no" />
            </MetaTags>

            <Loading />

            <Header />

            <main id="main" className="site-main">
                <PageTitle />

                <div id="page-content" className="spacer p-top-xl">
                    <div className="wrapper">
                        <div className="content" data-aos="fade-up">
                            <div className="row gutter-width-md with-pb-md">
                                {PortfolioData && PortfolioData.map(item => (

                                    <div key={item.id} className="col-xl-6 col-lg-6 col-md-6 col-sm-12 project-item" data-aos="fade-up">

                                        <div className="project-content">
                                            <div className="project-title">
                                                <img className="project-icon" src="https://assets.website-files.com/608de3eb1024a2a29aa6ef64/60fe2ba242d40926fb2e5eae_ehuXhBqx_400x400-removebg-preview%201%20(1).png" loading="lazy" alt="" height="30"></img><h3>{item.title}</h3>

                                            </div>

                                            <div class="label project_main">ABOUT</div>

                                            <p>{item.description}</p>
                                            <img src={item.imgSrc} alt={item.title} className="project-image" />
                                            <div className="row gutter-width-md with-pb-md">
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                    <div class="label project_main role">ROLES</div>
                                                    <p class="project-role">{item.role} </p>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                    <div class="label project_main technology">TECHNOLOGIES</div>
                                                    <p class="project-technologies">{item.technologies} </p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                ))}


                            </div>



                        </div>
                    </div>
                </div>
            </main>



            <Footer />
        </Fragment>
    );
};

export default PortfolioInside;
