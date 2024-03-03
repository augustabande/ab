import React from 'react';

const HeaderLogo = ( { image } ) => {
    return (
        <div className="header-logo">
            <a aria-label="logo" className="logo transform-scale-h" title="Logo" href={ process.env.PUBLIC_URL + "/" }>
                <img src="assets/img/logo/logo.svg" alt="Logo" />
            </a>
        </div>
    );
};

export default HeaderLogo;
