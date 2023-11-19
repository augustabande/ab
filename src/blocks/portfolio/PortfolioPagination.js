import React from 'react';

const PortfolioPagination = () => {
    return (
        <div id="pagination" className="block spacer p-top-xl">
            <div className="wrapper">
                <div className="portfolio-pagination">
                    <div className="row justify-content-between gutter-width-md with-pb-lg">
                        <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                            <a className="d-flex justify-content-start link previous-link" href={ process.env.PUBLIC_URL + "/portfolio-inside" }>
                                <div className="d-flex align-items-center justify-content-start">
                                    <div className="left">
                                        <p><i className="fas fa-long-arrow-alt-left"></i></p>
                                    </div>

                                    <div className="right">
                                        <p className="link-text after">Previous project</p>
                                        <h4 className="link-title">Lorem Ipsum is simply dummy text of the printing.</h4>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                            <a className="d-flex justify-content-end link next-link" href={ process.env.PUBLIC_URL + "/portfolio-inside" }>
                                <div className="d-flex align-items-center justify-content-end">
                                    <div className="left">
                                        <p className="link-text after">Next project</p>
                                        <h4 className="link-title">Lorem Ipsum is simply dummy text of the printing.</h4>
                                    </div>

                                    <div className="right">
                                        <p><i className="fas fa-long-arrow-alt-right"></i></p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioPagination;
