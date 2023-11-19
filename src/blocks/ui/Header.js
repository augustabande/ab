import React from 'react';

import HeaderLogo from '../logo/HeaderLogo';

function Header() {
    return (
        <header id="header" className="site-header">
            <div className="wrapper">
                <div className="header-content header-content-primary">
                    <div className="d-flex justify-content-between">
                        <div className="header-left align-self-center">
                            <div className="d-flex align-items-center">
                                <HeaderLogo />
                            </div>
                        </div>

                        <div className="header-right d-flex justify-content-end">
                            <div className="d-flex align-items-center"></div>
                        </div>
                    </div>
                </div>

                <div className="header-content header-content-secondary">
                    <div className="row gutter-width-md">
                        <div className="header-left col-xl-7 col-lg-7 col-md-7 col-sm-12">
                            <div className="d-flex justify-content-between align-items-center h-100">
                                <HeaderLogo />
                            </div>
                        </div>

                        <div className="header-right col-xl-5 col-lg-5 col-md-5 d-none d-md-block">
                            <div className="d-flex justify-content-end align-items-center h-100"></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
