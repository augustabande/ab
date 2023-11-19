import React from 'react';

import CloudData from '../../data/sidebar/cloudData.json';

const TagCloud = () => {
    return (
        <div className="widget widget_tag_cloud" data-aos="fade-up">
            <h5 className="widget-title">Tags</h5>

            <div className="tagcloud">
                { CloudData && CloudData.map( ( item, key ) => {
                    return (
                        <a key={ key } title={ item.title } href={ process.env.PUBLIC_URL + item.link } className="tag-cloud-link" >{ item.title }</a>
                    );
                })}
            </div>
        </div>
    );
};

export default TagCloud;
