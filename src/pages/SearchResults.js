import React, { Fragment, useEffect } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';

import PageTitle from '../blocks/search-results/PageTitle';
import SearchResultsData from '../data/search-results/searchItems';

const SearchResults = () => {
    useEffect(() => {
        document.body.classList.add( 'search-results' );
        document.body.classList.add( 'aos-true' );

        return () => {
            document.body.classList.remove( 'search-results' );
            document.body.classList.remove( 'aos-true' );
        }
    },[]);

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>Search results | Augusta Bande</title>

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
                            <div className="row gutter-width-md with-pb-lg">
                                { SearchResultsData && SearchResultsData.map( ( item, key ) => {
                                    return (
                                        <div key={ key } className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                            <div className="card card-post" data-aos="zoom-in" data-aos-delay="item.delay">
                                                <div className="card-body p-0">
                                                    <h5 className="card-title">
                                                        <a title={ item.title } aria-label="Title" href={ process.env.PUBLIC_URL + item.link }>{ item.title }</a>
                                                    </h5>
        
                                                    <div className="card-meta">
                                                        <a href={ process.env.PUBLIC_URL + item.categoryLink } aria-label="Metatag">{ item.category }</a>
                                                    </div>
        
                                                    <div className="card-text">
                                                        <p>{ item.description }</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </Fragment>
    );
};

export default SearchResults;
