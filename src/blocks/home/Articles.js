import React, { useEffect } from 'react';

import BlogData from '../../data/blog/blogData.json';

function Articles() {
    useEffect(() => {
        const lastEl = document.querySelectorAll('#articles .card .card-top')[2];
        lastEl.setAttribute('data-aos-delay', 600);
    },[]);

    return (
        <section id="articles" className="block spacer p-top-xl">
            <div className="wrapper">
                <div className="title" data-aos="fade-up">
                    <h2>My articles</h2>
                </div>

                <div className="row gutter-width-md with-pb-md" data-aos="fade-up">
                    { BlogData && BlogData.slice(0, 3).map( ( item, key ) => {
                        return (
                            <div key={ key } className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                <div className="card card-post">
                                    <div className="card-top position-relative" data-aos="zoom-in" data-aos-delay={ item.delay }>
                                        <a title={ item.title } href={ process.env.PUBLIC_URL + item.link }>
                                            <div className="img object-fit overflow-hidden">
                                                <div className="object-fit-cover transform-scale-h">
                                                    <img src={ item.imgSrc } className="card-img-top" alt={ item.title} />
                                                </div>
                                            </div>
                                        </a>
                                    </div>
        
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            <a title={ item.title } href={ process.env.PUBLIC_URL + item.link }>{ item.title }</a>
                                        </h5>
        
                                        <div className="card-meta">
                                            <a href={ process.env.PUBLIC_URL + item.categoryLink }>Category</a>
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
        </section>
    );
};

export default Articles;
