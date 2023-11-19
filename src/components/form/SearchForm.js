import React from 'react';

const SearchForm = () => {
    return (
        <form className="search-form" role="search" method="get" action={ process.env.PUBLIC_URL + "/search-results" }>
            <div className="search input-group">
                <input className="form-control form-control-lg" type="text" placeholder="Type something to search..." name="s" />

                <div className="input-group-append">
                    <button type="submit" className="btn btn-link border-0 p-0 min-w-auto"><i className="fas fa-search"></i></button>
                </div>
            </div>
        </form>
    );
};

export default SearchForm;
