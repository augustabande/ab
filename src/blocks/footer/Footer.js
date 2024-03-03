import React from 'react';

const Footer = () => {
    return (
        <footer id="footer" className="site-footer">
            <div className="wrapper">
                <div className="footer">
                    <div className="d-flex flex-column flex-md-row flex-lg-row flex-xl-row justify-content-between">
                        <div className="align-self-center">
                            <div className="info">
                                <p>Augusta Bande - Calle Lepanto 33, 35660 Corralejo, Las Palmas, SPAIN </p>
                            </div>
                            <div className="copyright">
                                <p>© {new Date().getFullYear()} Augusta Bande <a href="https://www.augustabande.com"></a> | NIF: Y9036584J </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
