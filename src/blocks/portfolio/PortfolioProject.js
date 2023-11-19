import React from 'react';

import PortfolioProjectData from '../../data/portfolio/portfolioProjectData';

function PortfolioProject() {
    return (
        <section id="about-the-project" className="block spacer p-top-xl">
            <div className="wrapper">
                <div className="title">
                    <h2>About the project</h2>
                </div>

                <div className="row gutter-width-md with-pb-md">   
                    <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4">
                        <div className="project-info">
                            <div className="project-info-items">
                                { PortfolioProjectData && PortfolioProjectData.map( ( item, key ) => {
                                    return (
                                        <div key={ key } className="project-info-item">
                                            <div className="project-info-item-content">
                                                <div className="img object-fit">
                                                    <div className="object-fit-cover">
                                                        <img src={ item.imgSrc } alt={ item.title } />
                                                    </div>
                                                </div>

                                                <div className="project-info-item-description">
                                                    <h5 className="project-info-title after">{ item.title }</h5>
                                                    <p className="project-info-description">{ item.description }</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-8 col-md-8 col-lg-8 col-xl-8">
                        <div className="description">
                            <h4 className="max-width-3">Let me introduce you this amazing wedding project.</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when. Typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioProject;
