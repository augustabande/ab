import React from 'react';

const Tags = () => {
    return (
        <div className="tags" data-aos="fade-up">
            <p>
                <span className="tags-title">Tags:</span>
                <a title="Design" href={ process.env.PUBLIC_URL + "/blog" }>Design</a>
                <a title="Creative" href={ process.env.PUBLIC_URL + "/blog" }>Creative</a>
                <a title="Graphic" href={ process.env.PUBLIC_URL + "/blog" }>Graphic</a>
            </p>
        </div>
    );
};

export default Tags;
