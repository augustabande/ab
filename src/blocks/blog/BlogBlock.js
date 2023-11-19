import React from 'react';

import LoadMore from '../../components/loadmore/LoadMore';

import BlogData from '../../data/blog/blogData.json';

const BlogBlock = () => {
    return (
        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
            <div className="row gutter-width-md with-pb-lg" data-aos="fade-up">
                { BlogData && BlogData.map( ( item, key ) => {
                    return (
                        <div key={ key } className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="card card-post" data-aos="zoom-in" data-aos-delay={ item.delay }>
                                <div className="card-top position-relative">
                                    <a title={ item.title } href={ process.env.PUBLIC_URL + item.link }>
                                        <div className="img object-fit overflow-hidden">
                                            <div className="object-fit-cover transform-scale-h">
                                                <img src={ item.imgSrc } className="card-img-top" alt={ item.title } />
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

            <LoadMore />
        </div>
    );
};

export default BlogBlock;
