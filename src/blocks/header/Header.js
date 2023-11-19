import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import HeaderLogo from '../logo/HeaderLogo';
import ResumeMenu from '../menu/ResumeMenu';
import BlogMenu from '../menu/BlogMenu';
import Actions from '../header/Actions';
import SearchModal from '../../components/modal/SearchModal';
import MenuModal from '../../components/modal/MenuModal';

const Header = () => {
    const [scrollPosition, setScrollPosition] = useState(null);
    const [slideInDownClass, setSlideInDownClass] = useState('');
    const [homePage, setHomePage] = useState(false);

    const location = useLocation();

    useEffect(() => {
        if ( location.pathname === process.env.PUBLIC_URL + "/" ) {
            window.addEventListener( 'scroll', updateScroll );
        }

        return () => {
            window.removeEventListener( 'scroll', updateScroll );
        }
    });

    useEffect(() => {
        if ( location.pathname === process.env.PUBLIC_URL + "/") {
            setHomePage(true);
        } else {
            setHomePage(false);
        }
    },[location.pathname]);

    const updateScroll = () => {
        setScrollPosition(window.scrollY);
        let el              = document.querySelector( '#main section:nth-child(2)' ).getBoundingClientRect();
        let fromTop         = -1;

        if ( window.pageYOffset - ( el.top + scrollPosition ) > fromTop ) {
            document.body.classList.add( 'header-fixed' );
            setSlideInDownClass(' animated slideInDown');
        } else {
            document.body.classList.remove( 'header-fixed' );
            setSlideInDownClass('');
        }
    };

    return (
        <header id="header" className={ "site-header " + slideInDownClass }>
            <div className="wrapper">
                <div className="header-content header-content-primary">
                    <div className="d-flex justify-content-between">
                        <div className="header-left align-self-center">
                            <div className="d-flex align-items-center">
                                <HeaderLogo />
                            </div>
                        </div>

                        <div className="header-right d-flex justify-content-end">
                            <div className="d-flex align-items-center">
                                <div className="header-menu">
                                    <nav className="menu-primary">
                                        <ul className="nav">
                                            <ResumeMenu homePage={homePage} />

                                            <BlogMenu />
                                        </ul>
                                    </nav>
                                </div>

                                <SearchModal />

                                <div className="header-actions">
                                    <Actions />
                                </div>

                                <MenuModal homePage={homePage} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="header-content header-content-secondary">
                    <div className="row gutter-width-md">
                        <div className="header-left col-xl-7 col-lg-7 col-md-7 col-sm-12">
                            <div className="d-flex justify-content-between align-items-center h-100">
                                <HeaderLogo />

                                <div className="header-menu">
                                    <nav className="menu-primary">
                                        <ul className="nav">
                                            <ResumeMenu homePage={homePage} />

                                            <BlogMenu />
                                        </ul>
                                    </nav>
                                </div>

                                <div className="header-toggle">
                                    <div className="d-flex justify-content-between align-items-center h-100">
                                        <SearchModal />

                                        <MenuModal homePage={homePage}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="header-right col-xl-5 col-lg-5 col-md-5 d-none d-md-block">
                            <div className="d-flex justify-content-end align-items-center h-100">
                                <SearchModal />

                                <div className="header-actions">
                                    <Actions />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
