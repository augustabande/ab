import React from 'react';

const Footer = () => {
    return (
        <footer id="footer" className="site-footer">
            <div className="wrapper">
                <div className="footer">
                    <div className="d-flex flex-column flex-md-row flex-lg-row flex-xl-row justify-content-between">
                        <div className="align-self-center">
                            <div className="copyright">
                                <p>© { new Date().getFullYear() } Personal Resume vCard React JS Template by <a href="https://www.adveits.com">Adveits</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
