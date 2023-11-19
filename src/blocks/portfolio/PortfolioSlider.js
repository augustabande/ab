import React, { Component } from 'react';
import Swiper from 'swiper';

import PortfolioSwiperData from '../../data/portfolio/portfolioSwiperData';

let swiper;

class PortfolioSlider extends Component {
    disableLeft = () => {
        document.getElementById( "swiper-left" ).classList.add( 'adv-swiper-button-disabled' );
    };

    disableRight = () => {
        document.getElementById( "swiper-right" ).classList.add( 'adv-swiper-button-disabled' );
    };
    
    enableLeft = () => {
        document.getElementById( "swiper-left" ).classList.remove( 'adv-swiper-button-disabled' );
    };

    enableRight = () => {
        document.getElementById( "swiper-right" ).classList.remove( 'adv-swiper-button-disabled' );
    };

    componentDidMount() {
        swiper = new Swiper ('.adv-slider .adv-swiper-container', {
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
            speed: 300,
            loop: false,
            navigation: {
                disabledClass: 'adv-swiper-button-disabled',
                hiddenClass: 'adv-swiper-button-hidden',
                lockClass: 'adv-swiper-button-lock',
                nextEl: '.adv-2-swiper-button-next',
                prevEl: '.adv-2-swiper-button-prev'
            },
            on: { activeIndexChange: () => this.checkDisabled() },
            spaceBetween: 0
        });

        swiper = document.querySelector('.adv-swiper-container').swiper;
        swiper.on( 'init', this.checkDisabled() );
    };

    checkDisabled = () => {
        if (swiper.isBeginning) this.disableLeft(); 
        else                    this.enableLeft();

        if (swiper.isEnd)       this.disableRight();
        else                    this.enableRight();
    };

    swipeLeft = () => {
        this.checkDisabled()

        swiper.slidePrev();
    };

    swipeRight = () => {
        this.checkDisabled()

        swiper.slideNext();
    };

    render() {
        return (
            <div id="slider" className="block spacer p-top-xl">
                <div className="wrapper">
                    <div className="adv-slider">
                        <div className="adv-swiper-container">
                            <div className="adv-swiper-wrapper">
                                { PortfolioSwiperData && PortfolioSwiperData.map ( ( item, key ) => {
                                    return (
                                        <div key={ key } className="adv-swiper-slide">
                                            <div className="img object-fit">
                                                <div className="object-fit-cover">
                                                    <img src={ item.imgSrc } alt={ item.alt } />
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div onClick={ this.swipeRight } id="swiper-right" className="adv-2-swiper-button-next adv-swiper-button-white">
                                <i className="fas fa-long-arrow-alt-right"></i>
                            </div>

                            <div onClick={ this.swipeLeft } id="swiper-left" className="adv-2-swiper-button-prev adv-swiper-button-white">
                                <i className="fas fa-long-arrow-alt-left"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default PortfolioSlider;