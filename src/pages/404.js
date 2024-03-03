import React, { Fragment, useEffect } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';

import PageTitle from '../blocks/404/PageTitle';
import BackToHome from '../components/button/BackToHome';
import SearchForm from '../components/form/SearchForm';

const Page404 = () => {
    useEffect(() => {
        document.body.classList.add( 'error404' );
        document.body.classList.add( 'aos-true' );

        return () => {
            document.body.classList.remove( 'error404' );
            document.body.classList.remove( 'aos-true' );
        }
    },[]);

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>404 | Augusta Bande</title>

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
                            <p className="text w-50 mb-0 after" data-aos="fade-up">The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?</p>

                            <div className="form w-50" data-aos="fade-up">
                                <SearchForm />
                            </div>

                            <BackToHome />
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </Fragment>
    );
};

export default Page404;
