import React, {useState, Fragment } from 'react';
import { Modal } from 'react-bootstrap';

import HeaderLogo from '../../blocks/logo/HeaderLogo';
import SearchModal from './SearchModal';
import Actions from '../../blocks/header/Actions';
import ModalResumeMenu from '../../blocks/menu/ModalResumeMenu';
import ModalBlogMenu from '../../blocks/menu/ModalBlogMenu';

const MenuModal = ( props ) => {
    const [showModal, setShowModal] = useState(false);

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <Fragment>
            <div className="header-menu-toggle">
                <button onClick={ () => setShowModal(true) } type="button" className="btn btn-lg btn-link border-0 p-0 min-w-auto" data-toggle="modal" data-target="#menu-modal"><i className="fas fa-bars"></i></button>
            </div>

            <Modal 
                className="modal fade shift-modal"
                id="menu-modal"
                show={ showModal }
                onHide={ () => setShowModal(false) }
                backdrop={ false }
                aria-labelledby="menu-modal"
                aria-hidden="true"
                dialogClassName="modal-dialog modal-full wrapper"
            >
                <div className="modal-header modal-header-top">
                    <div className="header-content d-flex justify-content-between w-100">
                        <div className="header-left align-self-center">
                            <div className="d-flex align-items-center">
                                <HeaderLogo />
                            </div>
                        </div>

                        <div className="header-right d-flex justify-content-end">
                            <div className="d-flex align-items-center">
                                <div className="menu-close-toggle">
                                    <button onClick={ () => setShowModal(false) } type="button" className="close btn btn-lg btn-link border-0 p-0 min-w-auto" data-dismiss="modal" aria-label="Close"><i className="fas fa-times"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal-body modal-body-centered">
                    <SearchModal modal={true} />

                    <div className="animated fadeinright d-flex flex-column justify-content-end w-100">
                        <div className="modal-actions d-flex justify-content-end">
                            <Actions />
                        </div>

                        <div className="d-flex justify-content-end">
                            <nav className="menu-primary">
                                <ul className="nav">
                                    <ModalResumeMenu homePage={props.homePage} closeModal={ closeModal }/>

                                    <ModalBlogMenu />
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </Modal>
        </Fragment>
    );
};

export default MenuModal;
