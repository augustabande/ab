import React, { useState, useRef } from 'react';
import Fade from 'react-bootstrap/Fade';
import { Link } from 'react-scroll';

const ResumeMenu = ( props ) => {
    const [show, setShow] = useState(false);
    const resume_menu = useRef();

    const openDropDown = () => {
        resume_menu.current.style.display = "block";
        setTimeout(setShow(true), 300);
    };

    const closeDropDown = () => {
        setShow(false);
        setTimeout(() => { resume_menu.current.style.display = "" }, 300);
    };

    return (
        <li onMouseEnter={() => openDropDown()} onMouseLeave={() => closeDropDown()} className={ ( show ? "show" : "" ) + " nav-item nav-item-has-children dropdown-hover" }>
            <a title="Resume" href={ process.env.PUBLIC_URL + "/" }>Resume</a>

            <span className="dropdown-toggle dropdown-custom-icon">
                <span className="dropdown-icon">
                    <i className="fas fa-chevron-down"></i>
                </span>
            </span>

            <Fade in={show}>
                { props.homePage ? 
                    (<ul className="dropdown-menu" ref={resume_menu}>
                        <li>
                            <Link title="About me" className="dropdown-item"  smooth={ true } duration={ 0 } href="#about-me" to="about-me">About me</Link>
                        </li>
            
                        <li>
                            <Link title="What I do" className="dropdown-item" smooth={ true } duration={ 0 } href="#what-i-do" to="what-i-do">What I do</Link>
                        </li>
            
                        <li>
                            <Link title="Experience" className="dropdown-item" smooth={ true } duration={ 0 } href="#experience" to="experience">Experience</Link>
                        </li>
            
                        <li>
                            <Link title="Education" className="dropdown-item" smooth={ true } duration={ 0 } href="#education" to="education">Education</Link>
                        </li>
            
                        <li>
                            <Link title="Portfolio" className="dropdown-item" smooth={ true } duration={ 0 } href="#portfolio" to="portfolio">Portfolio</Link>
                        </li>
            
                        <li>
                            <Link title="Testimonials" className="dropdown-item" smooth={ true } duration={ 0 } href="#testimonials" to="testimonials">Testimonials</Link>
                        </li>
            
                        <li>
                            <Link title="Clients" className="dropdown-item" smooth={ true } duration={ 0 } href="#clients" to="clients">Clients</Link>
                        </li>
            
                        <li>
                            <Link title="Contact me" className="dropdown-item" smooth={ true } duration={ 0 } href="#contact-me" to="contact-me">Contact me</Link>
                        </li>
                    </ul>)
                    :
                    (<ul className="dropdown-menu" ref={resume_menu}>
                        <li>
                            <a title="About me" className="dropdown-item" href={ process.env.PUBLIC_URL + "/#about-me" }>About me</a>
                        </li>
            
                        <li>
                            <a title="What I do" className="dropdown-item" href={ process.env.PUBLIC_URL + "/#what-i-do" }>What I do</a>
                        </li>
            
                        <li>
                            <a title="Experience" className="dropdown-item" href={ process.env.PUBLIC_URL + "/#experience" }>Experience</a>
                        </li>
            
                        <li>
                            <a title="Education" className="dropdown-item" href={ process.env.PUBLIC_URL + "/#education" }>Education</a>
                        </li>
            
                        <li>
                            <a title="Portfolio" className="dropdown-item" href={ process.env.PUBLIC_URL + "/#portfolio" }>Portfolio</a>
                        </li>
            
                        <li>
                            <a title="Testimonials" className="dropdown-item" href={ process.env.PUBLIC_URL + "/#testimonials" }>Testimonials</a>
                        </li>
            
                        <li>
                            <a title="Clients" className="dropdown-item" href={ process.env.PUBLIC_URL + "/#clients" }>Clients</a>
                        </li>
            
                        <li>
                            <a title="Contact me" className="dropdown-item" href={ process.env.PUBLIC_URL + "/#contact-me" }>Contact me</a>
                        </li>
                    </ul>)
                }
            </Fade>
        </li>
    );
};

export default ResumeMenu;
