import React, { useState, useRef }from 'react';
import Fade from 'react-bootstrap/Fade';

const BlogMenu = () => {
    const [show, setShow] = useState(false);
    const blog_menu = useRef();

    const openDropDown = () => {
        blog_menu.current.style.display = "block";
        setTimeout(setShow(true), 300);
    };

    const closeDropDown = () => {
        setShow(false);
        setTimeout(() => { blog_menu.current.style.display = "" }, 300);
    };

    return (
        <li onMouseEnter={() => openDropDown()} onMouseLeave={() => closeDropDown()} className={ ( show ? "show" : "" ) + " nav-item nav-item-has-children dropdown-hover" }>
            <a title="Blog" href={ process.env.PUBLIC_URL + "/blog" }>Blog</a>

            <span className="dropdown-toggle dropdown-custom-icon">
                <span className="dropdown-icon">
                    <i className="fas fa-chevron-down"></i>
                </span>
            </span>

            <Fade in={show}>
                <ul className="dropdown-menu" ref={blog_menu}>
                    <li>
                        <a title="Blog" className="dropdown-item" href={ process.env.PUBLIC_URL + "/blog" }>Articles</a>
                    </li>

                    <li>
                        <a title="Blog single post" className="dropdown-item" href={ process.env.PUBLIC_URL + "/blog-single-post" }>Blog single post</a>
                    </li>
                </ul>
            </Fade>
        </li>
    );
};

export default BlogMenu;
