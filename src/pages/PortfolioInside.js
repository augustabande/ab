import React, { Fragment, useEffect, useState } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';

import PageTitle from '../blocks/portfolio-inside/PageTitle';
import Swipebox from '../components/swipebox/Swipebox';

import PortfolioData from '../data/portfolio/galleryData.json';

const PortfolioInside = () => {
    const [imageIndex, setImageIndex] = useState(0);
    const [showSwipebox, setShowSwipebox] = useState(false);

    useEffect(() => {
        document.body.classList.add( 'single' );
        document.body.classList.add( 'single-adveits_portfolio' );
        document.body.classList.add( 'aos-true' );

        return () => {
            document.body.classList.remove( 'single' );
            document.body.classList.remove( 'single-adveits_portfolio' );
            document.body.classList.remove( 'aos-true' );
        }
    },[]);

    const openSwipebox = e => {
        e.preventDefault();

        let index = parseInt( e.currentTarget.id );
        setImageIndex(index);
        setShowSwipebox(true);
    };

    const closeSwipebox = () => {
        setImageIndex(0);
        setShowSwipebox(false);
    };

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
                            <div className="row gutter-width-md with-pb-md gallery-items">
                                { PortfolioData && PortfolioData.map( ( item, key ) => {
                                    return (
                                        <div key={ key } className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                            <a onClick={ (e) => openSwipebox(e) } id={ item.id } title={ item.title } className="gallery-item swipebox" href={ process.env.PUBLIC_URL + item.imgSrc } rel="gallery" data-aos="fade-up">
                                                <div className="img object-fit">
                                                    <div className="object-fit-cover">
                                                        <img src={ item.imgSrc } alt={ item.title } />
                                                    </div>
                                                </div>
        
                                                <div className="img-bg-color"></div>
                                            </a>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Swipebox SBdata={ PortfolioData } imageIndex={ imageIndex } open={ showSwipebox } close={ closeSwipebox } />

            <Footer />
        </Fragment>
    );
};

export default PortfolioInside;
