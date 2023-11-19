import React from 'react';
import { Link } from 'react-scroll';

const LoadMore = () => {
    return (
        <div className="loadmore spacer m-top-lg" data-aos="fade-up">
            <Link to="header"
                title="Load More"
                spy={ true }
                duration={ 300 }
                className="btn btn-primary"
                href="#header"
            >
                Load more
            </Link>
        </div>
    );
};

export default LoadMore;
