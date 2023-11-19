import React, { Fragment, useEffect } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';

import PageTitle from '../blocks/blog/PageTitle';
import BlogBlock from '../blocks/blog/BlogBlock';
import Sidebar from '../blocks/blog/Sidebar';

const Blog = () => {
    useEffect(() => {
        document.body.classList.add( 'blog' );
        document.body.classList.add( 'aos-true' );

        return () => {
            document.body.classList.remove( 'blog' );
            document.body.classList.remove( 'aos-true' );
        }
    },[]);

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>Blog | Sely - Personal Resume vCard React JS Template</title>

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
                            <div id="blog">
                                <div className="row gutter-width-md">
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 order-last order-md-first">
                                        <Sidebar />
                                    </div>

                                    <BlogBlock />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </Fragment>
    );
};

export default Blog;
