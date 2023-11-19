import React, { useState, useRef, useEffect } from 'react';
import Collapse from 'react-bootstrap/Collapse'

const ModalBlogMenu = () => {
    const [show, setShow] = useState(false);
    const [toggle, setToggle] = useState(false);
    const modal_blog_menu = useRef();

    const openDropDown = () => {
        modal_blog_menu.current.style.display = "block";
        setTimeout(setShow(true), 300);
    };

    const closeDropDown = () => {
        setShow(false);
        setTimeout(() => { modal_blog_menu.current.style.display = "" }, 300);
    };

    useEffect(() => {
        if (toggle) {
            openDropDown();
        } else {
            closeDropDown();
        }
    },[toggle]);    

    return (
        <li className={ ( show ? "show" : "" ) + " nav-item nav-item-has-children dropdown-child-click-effect" }>
            <a title="Blog" href={ process.env.PUBLIC_URL + "/blog" }>Blog</a>

            <span onClick={ () => setToggle(!toggle) } className="dropdown-toggle dropdown-custom-icon">
                <span className="dropdown-icon">
                    <i className="fas fa-chevron-down"></i>
                </span>
            </span>

            <Collapse in={show}>
                <ul className="dropdown-menu" ref={modal_blog_menu}>
                    <li>
                        <a title="Blog" className="dropdown-item" href={ process.env.PUBLIC_URL + "/blog" }>Articles</a>
                    </li>

                    <li>
                        <a title="Blog single post" className="dropdown-item" href={ process.env.PUBLIC_URL + "/blog-single-post" }>Blog single post</a>
                    </li>
                </ul>
            </Collapse>
        </li>
    );
};

export default ModalBlogMenu;
