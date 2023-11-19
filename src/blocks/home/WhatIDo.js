import React from 'react';

import WhatIDoData from '../../data/home/whatIDoData.json';

const WhatIDo = () => {
    return (
        <section id="what-i-do" className="block spacer p-top-xl">
            <div className="wrapper">
                <div className="title" data-aos="fade-up">
                    <h2>What I do?</h2>
                </div>

                <div className="row gutter-width-md with-pb-sm" data-aos="fade-up">
                    { WhatIDoData && WhatIDoData.map( ( item, key ) => {
                        return (
                            <div key={ key } className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                                <div className="what-i-do" data-aos="zoom-in" data-aos-delay={ item.delay }>
                                    <div className="what-i-do-content">
                                        <i className={ item.icon }></i>

                                        <div className="description">{ item.description }</div>
                                    </div>
                                </div>
                            </div> 
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhatIDo;
