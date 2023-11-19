import React, { useState, useRef, useEffect } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import { Link } from 'react-scroll';

const ModalResumeMenu = ( props ) => {
    const [show, setShow] = useState(false);
    const [toggle, setToggle] = useState(false);
    const modal_resume_menu = useRef();

    const openDropDown = () => {
        modal_resume_menu.current.style.display = "block";
        setTimeout(setShow(true), 300);
    };

    const closeDropDown = () => {
        setShow(false);
        setTimeout(() => { modal_resume_menu.current.style.display = "" }, 300);
    };

    const closeModal = () => {
        props.closeModal();
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
            <a title="Resume" href={ process.env.PUBLIC_URL + "/" }>Resume</a>

            <span onClick={ () => setToggle(!toggle) } className="dropdown-toggle dropdown-custom-icon">
                <span className="dropdown-icon">
                    <i className="fas fa-chevron-down"></i>
                </span>
            </span>

            <Collapse in={show}>
                { props.homePage ? 
                    (<ul className="dropdown-menu" ref={modal_resume_menu}>
                        <li>
                            <Link title="About me" onClick={ () => closeModal() } delay={200} className="dropdown-item" smooth={ true } duration={ 0 } href="#about-me" to="about-me">About me</Link>
                        </li>
            
                        <li>
                            <Link title="What I do" onClick={ () => closeModal() } delay={200} className="dropdown-item" smooth={ true } duration={ 0 } href="#what-i-do" to="what-i-do">What I do</Link>
                        </li>
            
                        <li>
                            <Link title="Experience" onClick={ () => closeModal() } delay={200} className="dropdown-item" smooth={ true } duration={ 0 } href="#experience" to="experience">Experience</Link>
                        </li>
            
                        <li>
                            <Link title="Education" onClick={ () => closeModal() } delay={200} className="dropdown-item" smooth={ true } duration={ 0 } href="#education" to="education">Education</Link>
                        </li>
            
                        <li>
                            <Link title="Portfolio" onClick={ () => closeModal() } delay={200} className="dropdown-item" smooth={ true } duration={ 0 } href="#portfolio" to="portfolio">Portfolio</Link>
                        </li>
            
                        <li>
                            <Link title="Testimonials" onClick={ () => closeModal() } delay={200} className="dropdown-item" smooth={ true } duration={ 0 } href="#testimonials" to="testimonials">Testimonials</Link>
                        </li>
            
                        <li>
                            <Link title="Clients" onClick={ () => closeModal() } delay={200} className="dropdown-item" smooth={ true } duration={ 0 } href="#clients" to="clients">Clients</Link>
                        </li>
            
                        <li>
                            <Link title="Contact me" onClick={ () => closeModal() } delay={200} className="dropdown-item" smooth={ true } duration={ 0 } href="#contact-me" to="contact-me">Contact me</Link>
                        </li>
                    </ul>)
                    :
                    (<ul className="dropdown-menu" ref={modal_resume_menu}>
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
            </Collapse>
        </li>
    );
};

export default ModalResumeMenu;
