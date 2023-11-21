import React, { useEffect } from 'react';
import Swiper from 'swiper';

import ExperienceData from '../../data/home/experienceData.json';

const Experience = () => {
    useEffect(() => {
        new Swiper('.adv-slider-experience .adv-swiper-container', {
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
                el: '.adv-experience-pagination.adv-swiper-pagination',
                clickable: true,
                type: 'fraction',
                formatFractionCurrent: function (number) {
                    if (number < 10) {
                        number = '0' + number;
                    }

                    return number;
                },
                formatFractionTotal: function (number) {
                    if (number < 10) {
                        number = '0' + number;
                    }

                    return number;
                },
                renderFraction: function (currentClass, totalClass) {
                    return '<span class="' + currentClass + '"></span>/<span class="' + totalClass + '"></span>';
                }
            },
            navigation: {
                disabledClass: 'adv-swiper-button-disabled',
                hiddenClass: 'adv-swiper-button-hidden',
                lockClass: 'adv-swiper-button-lock',
                nextEl: '.adv-slider-experience .adv-2-swiper-button-next',
                prevEl: '.adv-slider-experience .adv-2-swiper-button-prev'
            },
            spaceBetween: 0,
            slidesPerView: 1,
            breakpoints: {
                767: {
                    spaceBetween: 50,
                    slidesPerView: 3
                },
            }
        });
    }, []);

    return (
        <section id="experience" className="block spacer p-top-xl p-bottom-xl-2">
            <div className="wrapper">
                <div className="d-flex justify-content-between">
                    <div className="title" data-aos="fade-up">
                        <h2>Experience</h2>
                    </div>

                    <div className="adv-experience-pagination adv-swiper-pagination" data-aos="fade-up"></div>
                </div>

                <div className="adv-slider-experience" data-aos="fade-up">
                    <div className="adv-swiper-container">
                        <div className="adv-swiper-wrapper experience-items">
                            {ExperienceData && ExperienceData.map((item, key) => {
                                return (
                                    <div key={key} className="adv-swiper-slide experience-item" data-aos="zoom-in" data-aos-delay={item.delay}>
                                        <div className="card card-experience">
                                            <div className="card-body">
                                                <div className="badge badge-secondary spacer m-bottom-sm">{item.contract}</div>

                                                <h5 className="card-title">{item.position}</h5>

                                                <div className="card-meta">
                                                    <p>
                                                        <span>{item.company}, </span>
                                                        {/*<span>-</span>*/}
                                                        <span>{item.city}</span>
                                                        <br></br>
                                                        <span>{item.time}</span>
                                                    </p>
                                                </div>

                                                <div className="card-text">
                                                    <p>{item.description}</p>
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

export default Experience;