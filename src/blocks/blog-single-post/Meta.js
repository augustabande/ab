import React from 'react';

const Meta = () => {
    return (
        <div className="meta" data-aos="fade-up">
            <p>
                <span className="meta-date">January 5 { new Date().getFullYear() }</span>
                <span><a href={ process.env.PUBLIC_URL + "/blog" }>By admin</a></span>
                <span>-</span>
                <span>Comments (1)</span>
                <span>-</span>
                <span className="category"><a title="Uncategorized" href={ process.env.PUBLIC_URL + "/blog" }>Uncategorized</a></span>
            </p>
        </div>
    );
};

export default Meta;
