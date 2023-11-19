import React from 'react';
import { Link } from 'react-scroll';

const LoadComments = () => {
    return (
        <div className="loadmore spacer m-top-lg" data-aos="fade-up">
            <Link to="header"
                id="comment_loadmore"
                title="More comments"
                spy={ true }
                duration={ 300 }
                className="btn btn-primary"
                href="#header"
            >
                More comments
            </Link>
        </div>
    );
};

export default LoadComments;
