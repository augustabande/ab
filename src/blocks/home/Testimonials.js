import React, { useEffect } from 'react';
import Swiper from 'swiper';

import RatingStars from './RatingStars';

import TestimonialsData from '../../data/home/testimonialsData.json';

const Testimonials = () => {
    useEffect(() => {
        new Swiper( '.adv-slider-testimonials .adv-swiper-container', {
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
            pagination: {
                bulletClass: 'adv-swiper-pagination-bullet',
                bulletActiveClass: 'adv-swiper-pagination-bullet-active',
                modifierClass: 'adv-swiper-pagination-',
                currentClass: 'adv-swiper-pagination-current',
                totalClass: 'adv-swiper-pagination-total',
                hiddenClass: 'adv-swiper-pagination-hidden',
                progressbarFillClass: 'adv-swiper-pagination-progressbar-fill',
                progressbarOppositeClass: 'adv-swiper-pagination-progressbar-opposite',
                clickableClass: 'adv-swiper-pagination-clickable',
                lockClass: 'adv-swiper-pagination-lock',
                el: '.adv-testimonials-pagination.adv-swiper-pagination',
                clickable: true,
                type: 'fraction',
                formatFractionCurrent: function( number ) {
                    if ( number < 10 ) {
                        number = '0' + number;
                    }

                    return number;
                },
                formatFractionTotal: function( number ) {
                    if ( number < 10 ) {
                        number = '0' + number;
                    }

                    return number;
                },
                renderFraction: function( currentClass, totalClass ) {
                    return '<span class="' + currentClass + '"></span>/<span class="' + totalClass + '"></span>';
                }
            },
            navigation: {
                disabledClass: 'adv-swiper-button-disabled',
                hiddenClass: 'adv-swiper-button-hidden',
                lockClass: 'adv-swiper-button-lock',
                nextEl: '.adv-slider-testimonials .adv-2-swiper-button-next',
                prevEl: '.adv-slider-testimonials .adv-2-swiper-button-prev'
            },
            spaceBetween: 0,
            slidesPerView: 1,
            breakpoints: {
                767: {
                    spaceBetween: 50,
                    slidesPerView: 3
                },
            }
        } );
    },[]);

    return (
        <section id="testimonials" className="block spacer p-top-xl p-bottom-xl bg-secondary">
            <div className="wrapper">
                <div className="d-flex justify-content-between">
                    <div className="title" data-aos="fade-up">
                        <h2>Testimonials</h2>
                    </div>

                    <div className="adv-testimonials-pagination adv-swiper-pagination" data-aos="fade-up"></div>
                </div>

                <div className="adv-slider-testimonials" data-aos="fade-up">
                    <div className="adv-swiper-container">
                        <div className="adv-swiper-wrapper testimonials-items">
                            { TestimonialsData && TestimonialsData.map( ( item, key ) => {
                                return (
                                    <div key={ key } className="adv-swiper-slide testimonials-item" data-aos="zoom-in" data-aos-delay={ item.delay }>
                                        <div className="card card-testimonials">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center">
                                                    <div className="card-content-left">
                                                        <div className="card-img">
                                                            <img src={ item.imgSrc } alt={ item.name } />
                                                        </div>
                                                    </div>
        
                                                    <div className="card-content-right">
                                                        <h5 className="card-title">{ item.name }</h5>
        
                                                        <div className="card-meta">
                                                            <p>{ item.position }</p>
                                                        </div>
        
                                                        <div className="card-star-raiting">
                                                            <div className="star-raiting">
                                                                <RatingStars num={ item.rating } />
                                                            </div>
                                                        </div>
                                                    </div>
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

export default Testimonials;
