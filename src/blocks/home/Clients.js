import React from 'react';

import ClientsData from '../../data/home/clientsData.json';

const Clients = () => {
    return (
        <section id="clients" className="block spacer p-top-xl">
            <div className="wrapper">
                <div className="title" data-aos="fade-up">
                    <h2>Clients</h2>
                </div>

                <div className="clients clearfix" data-aos="fade-up">
                    <div className="clients-items clearfix">
                        { ClientsData && ClientsData.map( ( item, key ) => {
                            return (
                                <div key={ key } className="clients-item" data-aos="zoom-in" data-aos-delay={ item.delay }>
                                    <div className="clients-item-body">
                                        <img src={ item.imgSrc } alt={ item.alt } />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;
