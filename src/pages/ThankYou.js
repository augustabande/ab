import React, { Fragment, useEffect } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';

const ThankYou = () => {
    useEffect(() => {
        document.body.classList.add('home');
        document.body.classList.add('header-absolute-true');
        document.body.classList.add('header-fixed-true');
        document.body.classList.add('header-content-secondary-true');
        document.body.classList.add('header-fixed-content-primary');
        document.body.classList.add('aos-true');

        return () => {
            document.body.classList.remove('home');
            document.body.classList.remove('header-absolute-true');
            document.body.classList.remove('header-fixed-true');
            document.body.classList.remove('header-content-secondary-true');
            document.body.classList.remove('header-fixed-content-primary');
            document.body.classList.remove('aos-true');
        }
    }, []);

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>Home | Augusta Bande digital web services</title>

                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Expert in Angular and React, UI/UX and WordPress. Elevate your digital presence with my bespoke, efficient web solutions." />
                <meta name="keywords" content="" />
                <meta name="robots" content="index, follow, noodp" />
                <meta name="googlebot" content="index, follow" />
                <meta name="google" content="notranslate" />
                <meta name="format-detection" content="telephone=no" />
            </MetaTags>

            <Loading />

            <Header />

            <main id="main" className="site-main">
                <div className="content">
                    <div className="clearfix">
                        
                        <span>Thank you! Your message has been sent</span>
                    </div>
                </div>
            </main>

            <Footer />
        </Fragment>
    );
};

export default ThankYou;