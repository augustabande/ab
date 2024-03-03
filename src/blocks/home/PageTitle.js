import React, { useState, useEffect } from 'react';

import SocialLinks from './SocialLinks';

const words = ["freelancer", "IT consultant", "web developer", "designer"];
const typingSpeed = 150;
const deletingSpeed = 50;
const pauseDuration = 2000; // pause for 2 seconds										  

const PageTitle = () => {
    const backgrounImage = require('../../assets/img/placeholder/01_img.jpg');
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentWord, setCurrentWord] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(typingSpeed);

    useEffect(() => {
        let timer;

        // Pause when the full word is typed and not deleting
        if (!isDeleting && currentWord === words[currentWordIndex]) {
            setIsDeleting(true);
            setSpeed(pauseDuration);
        } else if (isDeleting) {
            setSpeed(deletingSpeed);
            timer = setTimeout(() => {
                setCurrentWord(current => current.slice(0, -1));

            }, speed);
        } else {
            setSpeed(typingSpeed);
            timer = setTimeout(() => {
                setCurrentWord(words[currentWordIndex].slice(0, currentWord.length + 1));

            }, speed);
        }

        // Move to next word when a word is fully deleted

        if (isDeleting && currentWord === '') {
            setIsDeleting(false);
            setCurrentWordIndex(current => (current + 1) % words.length);
            setSpeed(typingSpeed);
        }

        return () => clearTimeout(timer);
    }, [currentWord, isDeleting, currentWordIndex]);

    return (
        <section id="page-title" className="block bg-secondary">
            <div className="wrapper">
                <div className="row gutter-width-md">
                    <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                        <div className="page-title-content">
                            <div className="title" data-aos="fade-down">
                                <h1 className="large">Hi. I’m a <br /><span className="typewriter-text">{currentWord}<span className="cursor"></span></span> </h1>
                            </div>

                            <div className="description spacer p-top-lg" data-aos="fade-up">
                                <p>based in Fuerteventura, Canary Islands.</p>
                            </div>

                            <div className="my-information spacer p-top-lg" data-aos="fade-up">
                                <div className="my-information-items">
                                    <div className="my-information-item" data-aos="zoom-in" data-aos-delay="200">
                                        <h6 className="my-information-item-title">Full Name</h6>

                                        <p className="my-information-item-description">Augusta Bande</p>
                                    </div>

                                    <div className="my-information-item" data-aos="zoom-in" data-aos-delay="400">
                                        <h6 className="my-information-item-title">Birth Date</h6>

                                        <p className="my-information-item-description">1982-01-25</p>
                                    </div>

                                    <div className="my-information-item" data-aos="zoom-in" data-aos-delay="600">
                                        <h6 className="my-information-item-title">Address</h6>

                                        <p className="my-information-item-description">Fuerteventura, Canary Islands </p>
                                    </div>

                                    <div className="my-information-item" data-aos="zoom-in" data-aos-delay="800">
                                        <h6 className="my-information-item-title">Email</h6>

                                        <p className="my-information-item-description"><a href="mailto:augusta.bande@gmail.com" aria-label="Email">augusta.bande@gmail.com</a></p>
                                    </div>

                                    <div className="my-information-item" data-aos="zoom-in" data-aos-delay="1000">
                                        <h6 className="my-information-item-title">Phone no.</h6>

                                        <p className="my-information-item-description"><a href="tel:+43253312523" aria-label="Mobile">+34 643 535 881</a></p>
                                    </div>
                                </div>
                            </div>

                            <div className="spacer p-top-lg" data-aos="fade-up">
                                <SocialLinks />
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                        <div className="page-title-img" style={{ backgroundImage: `url(${backgrounImage})` }} data-aos="zoom-in-left"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PageTitle;