import React from 'react';

import CategoriesList from '../../data/sidebar/categoriesData';

const Categories = () => {
    return (
        <div className="widget widget_categories" data-aos="fade-up">
            <h5 className="widget-title">Categories</h5>

            <ul>
                { CategoriesList && CategoriesList.map( ( item, key ) => {
                    return (
                        <li key={ key } className="cat-item">
                            <a title={ item.title } href={ process.env.PUBLIC_URL + item.link }>{ item.title }</a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Categories;
