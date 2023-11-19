import React, { useEffect } from 'react';
import Swiper from 'swiper';

import galleryData from '../../data/portfolio/galleryData.json';

function Portfolio() {
    useEffect(() => {
        new Swiper( '.adv-slider-portfolio .adv-swiper-container', {
            // ADV swiper
            noSwipingClass: 'adv-swiper-no-swiping',
            containerModifierClass: 'adv-swiper-container-',
            slideClass: 'adv-swiper-slide',
            slideBlankClass: 'adv-swiper-slide-invisible-blank',
            slideActiveClass: 'adv-swiper-slide-active',
            slideDuplicateActiveClass: 'adv-swiper-slide-duplicate-active',
            slideVisibleClass: 'adv-swiper-slide-visible',
            slideDuplicateClass: 'adv-swiper-slide-duplicate',
            slideNextClass: 'adv-swiper-slide-next',
            slideDuplicateNextClass: 'adv-swiper-slide-duplicate-next',
            slidePrevClass: 'adv-swiper-slide-prev',
            slideDuplicatePrevClass: 'adv-swiper-slide-duplicate-prev',
            wrapperClass: 'adv-swiper-wrapper',
            navigation: {
                disabledClass: 'adv-swiper-button-disabled',
                hiddenClass: 'adv-swiper-button-hidden',
                lockClass: 'adv-swiper-button-lock',
                nextEl: '.adv-slider-portfolio .adv-2-swiper-button-next',
                prevEl: '.adv-slider-portfolio .adv-2-swiper-button-prev'
            },
            spaceBetween: 0,
            slidesPerView: 'auto'
        } );
    });

    return (
        <section id="portfolio" className="block spacer p-top-xl">
            <div className="wrapper">
                <div className="title" data-aos="fade-up">
                    <h2>Portfolio</h2>
                </div>
            </div>

            <div className="adv-slider-portfolio" data-aos="fade-up">
                <div className="adv-swiper-container">
                    <div className="adv-swiper-wrapper portfolio-items">
                        { galleryData && galleryData.map( ( item, key ) => {
                            return (
                                <a key={key} href={ process.env.PUBLIC_URL + item.link } className="adv-swiper-slide portfolio-item">
                                    <div className="portfolio-item-content">
                                        <h5 className="portfolio-item-category" data-aos="fade-up">{ item.category }</h5>
        
                                        <h3 className="portfolio-item-t-head" data-aos="fade-up">{ item.title }</h3>
                                    </div>
        
                                    <div className="img object-fit">
                                        <div className="object-fit-cover">
                                            <img src={ item.imgSrc } alt={ item.title } />
                                        </div>
                                    </div>
        
                                    <div className="img-bg-color"></div>
                                </a>
                            );
                        })}
                    </div>

                    <div className="wrapper position-relative">
                        <div className="adv-2-swiper-button-prev">
                            <i className="fas fa-long-arrow-alt-left"></i>
                        </div>

                        <div className="adv-2-swiper-button-next">
                            <i className="fas fa-long-arrow-alt-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
