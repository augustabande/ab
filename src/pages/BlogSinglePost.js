import React, { Fragment, useEffect } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';

import PageTitle from '../blocks/blog-single-post/PageTitle';
import Sidebar from '../blocks/blog/Sidebar';
import Meta from '../blocks/blog-single-post/Meta';
import Description from '../blocks/blog-single-post/Description';
import Tags from '../blocks/blog-single-post/Tags';
import Comments from '../blocks/blog-single-post/Comments';

const BlogSinglePost = () => {
    useEffect(() => {
        document.body.classList.add( 'single' );
        document.body.classList.add( 'single-post' );
        document.body.classList.add( 'aos-true' );

        return () => {
            document.body.classList.remove( 'single' );
            document.body.classList.remove( 'single-post' );
            document.body.classList.remove( 'aos-true' );
        }
    },[]);

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>Blog single post | Sely - Personal Resume vCard React JS Template</title>

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
                            <div id="single">
                                <div className="row gutter-width-md">
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 order-last order-md-first">
                                        <Sidebar />
                                    </div>

                                    <div className="col-xl-8 col-lg-8 col-md-8  col-sm-12 single-content">
                                        <div className="img object-fit" data-aos="fade-down">
                                            <div className="object-fit-cover">
                                                <img src="assets/img/placeholder/20_img.jpg" alt="The beauty of sunrise" />
                                            </div>
                                        </div>

                                        <Meta />

                                        <Description />

                                        <Tags />

                                        <Comments />
                                    </div>
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

export default BlogSinglePost;
