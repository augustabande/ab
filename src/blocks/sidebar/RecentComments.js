import React from 'react';

import RecentCommentsData from '../../data/sidebar/recentCommentsData.json';

const RecentComments = () => {
    return (
        <div className="widget widget_recent_comments" data-aos="fade-up">
            <h5 className="widget-title">Recent Comments</h5>

            <ul id="recentcomments">
                { RecentCommentsData && RecentCommentsData.map( ( item, key ) => {
                    return (
                        <li key={ key } className="recentcomments">
                        <span className="comment-author-link">{ item.author }</span> on
                        <a title="item.title" href={ process.env.PUBLIC_URL + item.link }>{ item.comment }</a>
                    </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default RecentComments;
