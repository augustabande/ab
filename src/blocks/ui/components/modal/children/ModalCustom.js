import React, { Component } from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';
import { Modal } from 'react-bootstrap';

class ModalCustom extends Component {

    constructor( context ) {
        super( context );

        this.state = {
            showModal: false
        };

        this.open = this.open.bind( this );
        this.close = this.close.bind( this );
    }

    open() {
        this.setState( { showModal: true }, function () {
        } );
    }

    close() {
        this.setState( { showModal: false } );
    }


    render() {
        return (
            <div id="modal-custom">
                <h4>Custom</h4>
                <p>You also need adding <code>.modal-full</code> to .modal-dialog, <code>.modal-header-top</code> to .modal-header and <code>.modal-body-centered</code> to .modal-body.</p>

                <div className="bd-example">
                    <button onClick={ this.open.bind( this ) } type="button" className="btn btn-primary" data-toggle="modal" data-target="#demo-modal">Demo modal</button>

                    <Modal
                        className="modal fade"
                        show={ this.state.showModal }
                        onHide={ this.close }
                        backdrop={ true }
                        id="demo-modal"
                        tabIndex="-1"
                        role="dialog"
                        aria-labelledby="demo-modal"
                        aria-hidden="true"
                        dialogClassName="modal-full wrapper"
                    >
                        <div className="modal-header modal-header-top">
                            <div className="header-content d-flex justify-content-end w-100">
                                <div className="header-right d-flex justify-content-end">
                                    <div className="d-flex align-items-center">
                                        <div className="search-close-toggle">
                                            <button onClick={ this.close }  type="button" className="close btn btn-lg btn-link border-0 p-0 min-w-auto" data-dismiss="modal" aria-label="Close"><i className="fas fa-times"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal-body justify-content-center modal-body-centered">
                            <p>Modal body text goes here.</p>
                        </div>
                    </Modal>
                </div>

                <PrismCode
                    code={
                    '<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#demo-modal">Demo modal</button>\n' +
                    '\n' +
                    '<div className="modal fade" id="demo-modal" tabIndex="-1" role="dialog" aria-labelledby="demo-modal" aria-hidden="true">\n' +
                    '  <div className="modal-dialog modal-full" role="document">\n' +
                    '    <div className="wrapper">\n' +
                    '      <div className="modal-content">\n' +
                    '        <div className="modal-header modal-header-top">\n' +
                    '          <div className="header-content d-flex justify-content-end w-100">\n' +
                    '            <div className="header-right d-flex justify-content-end">\n' +
                    '              <div className="d-flex align-items-center">\n' +
                    '                <div className="search-close-toggle">\n' +
                    '                  <button type="button" className="close btn btn-lg btn-link border-0 p-0 min-w-auto" data-dismiss="modal" aria-label="Close"><i className="fas fa-times"></i></button>\n' +
                    '                </div>\n' +
                    '              </div>\n' +
                    '            </div>\n' +
                    '          </div>\n' +
                    '        </div>\n' +
                    '\n' +
                    '        <div className="modal-body justify-content-center modal-body-centered">\n' +
                    '          <p>Modal body text goes here.</p>\n' +
                    '        </div>\n' +
                    '      </div>\n' +
                    '    </div>\n' +
                    '  </div>\n' +
                    '</div>'
                    }
                    language="html"
                    plugins={ ["line-numbers"] }
                />
            </div>
        );
    }
};

export default ModalCustom;
