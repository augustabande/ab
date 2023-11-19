import React, { useState, Fragment } from 'react';
import { Modal } from 'react-bootstrap';

import HeaderLogo from '../../blocks/logo/HeaderLogo';
import SearchForm from '../form/SearchForm';

const SearchModal = ( props ) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <Fragment>
            { props.modal ?
                (<div className="search-toggle align-self-start">
                    <button onClick={ () => setShowModal(true) } type="button" className="btn btn-lg btn-link border-0 p-0 min-w-auto" data-toggle="modal" data-target="#search-modal">Search</button>
                </div>)

            :
                (<div className="header-search-toggle">
                    <button onClick={ () => setShowModal(true) } type="button" className="btn btn-lg btn-link border-0 p-0 min-w-auto" data-toggle="modal" data-target="#search-modal"><i className="fas fa-search"></i></button>
                </div>)
            }


            <Modal className="modal fade"
                    id="search-modal"
                    show={ showModal }
                    onHide={ () => setShowModal(false) }
                    backdrop={ false }
                    aria-labelledby="search-modal"
                    aria-hidden="true"
                    dialogClassName="modal-full wrapper"
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
                                    <div className="search-close-toggle">
                                        <button onClick={ () => setShowModal(false) } type="button" className="close btn btn-lg btn-link border-0 p-0 min-w-auto" data-dismiss="modal" aria-label="Close"><i className="fas fa-times"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="modal-body modal-body-centered">
                        <SearchForm />
                    </div>
            </Modal>
        </Fragment>
    );
};

export default SearchModal;
