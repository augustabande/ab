import React from 'react';

import SearchForm from '../../components/form/SearchForm';
import RecentEntries from '../../blocks/sidebar/RecentEntries';
import RecentComments from '../../blocks/sidebar/RecentComments';
import Categories from '../../blocks/sidebar/Categories';
import TagCloud from '../../blocks/sidebar/TagCloud';

const Sidebar = () => {
    return (
        <aside id="aside" className="widget-area">
            <div className="widget widget_search" data-aos="fade-up">
                <SearchForm />
            </div>

            <Categories />

            <RecentEntries />

            <RecentComments />

            <TagCloud />
        </aside>
    );
};

export default Sidebar;
