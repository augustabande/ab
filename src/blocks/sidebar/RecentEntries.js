import React from 'react';

import RecentEntriesData from '../../data/sidebar/recentEntriesData.json';

const RecentEntries = () => {
    return (
        <div className="widget widget_recent_entries" data-aos="fade-up">
            <h5 className="widget-title">Recent posts</h5>

            <ul className="list-unstyled items">
                { RecentEntriesData && RecentEntriesData.map( ( item, key ) => {
                    return (
                        <li key={ key } className="item">
                            <div className="row gutter-width-xs">
                                <div className="col-3">
                                    <a aria-label="Entry" href={ process.env.PUBLIC_URL + item.link }>
                                        <div className="img object-fit overflow-hidden">
                                            <div className="object-fit-cover transform-scale-h">
                                                <img src={ item.imgSrc } alt={ item.title } />
                                            </div>
                                        </div>
                                    </a>
                                </div>
        
                                <div className="col-9 align-self-center">
                                    <p className="item-t-head"><a title={ item.title } href={ process.env.PUBLIC_URL + item.link }>{ item.title }</a></p>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default RecentEntries;
