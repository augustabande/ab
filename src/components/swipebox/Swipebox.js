import React, { useState, useEffect, useRef, useCallback } from 'react';

const Swipebox = ( props ) => {
    const [xPos, setxPos] = useState(0);
    const [images, setImages] = useState([]);
    const [index, setIndex] = useState(0);
    const [showSwipebox, setShowSwipebox] = useState(false);

    const overlay = useRef();
    const slider = useRef();

    useEffect(() => {
        setIndex(props.imageIndex);
        setImages( props.SBdata );
    },[props.imageIndex,props.SBdata]);

    useEffect(() => {
        setShowSwipebox(props.open);
    },[props.open]);

    useEffect(() => {
        let key = ( index  * -100 ) + 100;
        setxPos(key);
    },[showSwipebox, index]);

    useEffect(() => {
        if ( index === 1 ) {
            document.getElementById( 'swipebox-prev' ).classList.add( 'disabled' );
        }

        if ( index === images.length ) {
            document.getElementById( 'swipebox-next' ).classList.add( 'disabled' );
        }
    },[index, images]);

    useEffect(() => {
        if (showSwipebox) {
            document.body.classList.add( 'swipebox-no-touch' );
            document.body.classList.add( 'swipebox-html' );
            document.body.style.overflow = 'hidden';
            overlay.current.classList.add("d-block");
            slider.current.classList.add("d-block");
            fadeIn();
        } else {
            document.body.classList.remove( 'swipebox-no-touch' );
            if ( document.getElementById( 'swipebox-prev' ).classList.contains( 'disabled' ) ) {
                document.getElementById( 'swipebox-prev' ).classList.remove( 'disabled' );
            }
    
            if ( document.getElementById( 'swipebox-next' ).classList.contains( 'disabled' ) ) {
                document.getElementById( 'swipebox-next' ).classList.remove( 'disabled' );
            }

            overlay.current.classList.remove("d-block");
            slider.current.classList.remove("d-block");
    
            document.body.classList.remove( 'swipebox-html' );
            document.body.style.overflow = '';
        }
    },[showSwipebox]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const moveSlide = useCallback( e => {
        if( e.keyCode === 37 ) {
            swipeLeft();
        }

        if( e.keyCode === 39 ) {
            swipeRight();
        }

        if( e.keyCode === 27 ) {
            closeSwipebox();
        }
    });

    useEffect(() => {
        window.addEventListener( 'keydown',  moveSlide );

        return () => window.removeEventListener( 'keydown',  moveSlide);
    },[moveSlide]);

    const fadeIn = () => {
        let el      = document.getElementById( 'swipebox-slider' );
        let opacity = 0;
        let request;

        const animation = () => {
            el.style.opacity = opacity += 0.04;
            if ( opacity >= 1 ) {
                opacity = 1;
                cancelAnimationFrame( request );
            }
        };

        const rAf = () => {
            request = requestAnimationFrame( rAf );
            animation();
        };
        rAf();
    };

    const swipeLeft = () => {
        document.getElementById( 'swipebox-prev' ).classList.remove( 'disabled' );
        document.getElementById( 'swipebox-next' ).classList.remove( 'disabled' );

        if ( xPos === -100 ) {
            document.getElementById( 'swipebox-prev' ).classList.add( 'disabled' );
        }

        if ( xPos === 0 ) {
            document.getElementById( 'swipebox-prev' ).classList.add( 'disabled' );
            leftSpring();
            setxPos(0);
            setIndex(1);
        } else {
            setxPos(xPos + 100);
            setIndex(index -1);
        }
    };

    const swipeRight = () => {
        document.getElementById( 'swipebox-next' ).classList.remove( 'disabled' );
        document.getElementById( 'swipebox-prev' ).classList.remove( 'disabled' );

        if ( xPos === ( images.length * -100 ) + 200 ) {
            document.getElementById( 'swipebox-next' ).classList.add( 'disabled' );
        }

        if ( xPos === ( images.length * -100 ) + 100 ) {
            document.getElementById( 'swipebox-next' ).classList.add( 'disabled' );
            rightSpring();
            let x = ( images.length * -100 ) + 100;
            setxPos(x);
            setIndex(images.length);
        } else {
            setxPos(xPos - 100);
            setIndex(index + 1);
        }
    };

    const closeSwipebox = () => {
        setShowSwipebox(false);
        props.close();
    };

    const leftSpring = () => {
        overlay.current.classList.add( 'leftSpring' );

        setTimeout( function() {
            overlay.current.classList.remove( 'leftSpring' );
        }, 500 );
    };

    const rightSpring = () => {
        overlay.current.classList.add( 'rightSpring' );

        setTimeout( function() {
            overlay.current.classList.remove( 'rightSpring' );
        }, 500 );
    };

    const getTitle = () => {
        if ( showSwipebox ) {
            return images[ index - 1 ].title;
        }
    };

    return (
        <div id="swipebox-overlay" style={{ display: "none" }} ref={ overlay }>
            <div id="swipebox-container">
                <div id="swipebox-slider" style={ {  display: "none", transform: `translate3d( ${ xPos }%, 0px, 0px)` } } ref={ slider }>
                    { images && images.map( image => {
                        return (
                            <div key={ image.id } className={ "slide " + ( index === image.id ? " current" : " " ) }>
                                <img src={ image.imgSrc } alt={ image.title } />
                            </div>
                        );
                    })}
                </div>

                <div id="swipebox-top-bar">
                    <div id="swipebox-title">
                        { getTitle() }  
                    </div>
                </div>

                <div id="swipebox-bottom-bar">
                    <div id="swipebox-arrows">
                        <div id="swipebox-prev" onClick={ () => swipeLeft() }></div>
                        <div id="swipebox-next" onClick={ () => swipeRight() }></div>
                    </div>
                </div>

                <div id="swipebox-close" onClick={ () => closeSwipebox() }></div>
            </div>
        </div>
    );
};

export default Swipebox;
