import React from 'react';

import SocialLinksData from '../../data/home/socialLinksData.json';

const SocialLinks = () => {
    return (
        <nav className="social-links">
            <ul className="social-links-items">
                { SocialLinksData && SocialLinksData.map( ( item, key ) => {
                    return (
                        <li key={ key } className="social-links-item">
                            <a title={ item.title } href={ item.href } target="_blank" rel="noopener noreferrer" aria-label="Social link"><i className={ item.icon }></i></a>
                        </li> 
                    );
                })}
            </ul>
        </nav>
    );
};

export default SocialLinks;
